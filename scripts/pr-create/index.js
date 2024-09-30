const { Octokit } = require('@octokit/rest');

// octokit should be authenticated with GITHUB_TOKEN from GA
const octokit = new Octokit({
  auth: process.env.GH_TOKEN,
});

const jobId = process.env.JOB_ID;
// Outside of auth errors, the only other potential error is if the 'Update site files' step fails. Use this boolean.
const isSiteFilesUpdateSuccess = process.env.OUTCOME === 'success';
const repositoryOwner = process.env.REPO_OWNER;
const previewLink = 'aria-practices.netlify.app';
const GENERATED_APG_WAI_BRANCH = 'apg/' + process.env.APG_BRANCH;

const ERROR_APG_BODY_UPDATE = 101;
const ERROR_SITE_FILES_UPDATE = 102;
const ERROR_LIST_PULL_REQUESTS = 103;
const ERROR_CREATE_PULL_REQUEST = 104;
const ERROR_GET_PULL_REQUEST = 105;
const ERROR_UPDATE_PULL_REQUEST = 106;
// TODO: Uncomment when updated bot token is being used
// const ERROR_CREATE_COMMIT_STATUS = 107;

const updateApgPrBody = async (waiPrNumber, createPullRequestResult) => {
  // Update APG PR
  let getApgPrResult;

  try {
    getApgPrResult = await octokit.rest.pulls.get({
      owner: repositoryOwner,
      repo: 'aria-practices',
      pull_number: process.env.APG_PR_NUMBER,
    });
    console.info('pulls.get.success');
  } catch (e) {
    console.error('error.get.pull.request', e);
    process.exit(ERROR_GET_PULL_REQUEST);
  }

  // Needed to append error to PR body
  let apgPrBody = getApgPrResult.data.body || '';

  // Find index of existing successful or failure build links in the body
  let previewLinkIndex = apgPrBody.indexOf('[WAI Preview Link]');
  if (previewLinkIndex < 0) {
    // Need to account for error content
    // Assumes a previous link didn't exist, find error content
    previewLinkIndex = apgPrBody.indexOf('WAI Preview Link [failed to build]');
  }

  const previewLinkUrl = isSiteFilesUpdateSuccess
    ? `https://deploy-preview-${
        waiPrNumber || createPullRequestResult.data.number
      }--${previewLink}/ARIA/apg`
    : `https://github.com/${repositoryOwner}/wai-aria-practices/runs/${jobId}?check_suite_focus=true`;
  const additionalBodyContent = isSiteFilesUpdateSuccess
    ? `[WAI Preview Link](${previewLinkUrl}) _(Last built on ${new Date().toUTCString()})._`
    : `WAI Preview Link [failed to build](${previewLinkUrl}) on 'Update site files' step. _(Last tried on ${new Date().toUTCString()})._`;
  if (previewLinkIndex < 0) {
    // no preview link in PR body; append
    apgPrBody = `${apgPrBody}\n___\n${additionalBodyContent}`;
  } else {
    // replace existing preview link in PR body
    let stringRemainder = apgPrBody.substring(previewLinkIndex);
    apgPrBody = apgPrBody.replace(stringRemainder, additionalBodyContent);
  }

  try {
    await octokit.rest.pulls.update({
      owner: repositoryOwner,
      repo: 'aria-practices',
      pull_number: process.env.APG_PR_NUMBER,
      body: apgPrBody,
    });
    console.info('pulls.update.success', apgPrBody);
  } catch (e) {
    console.error('error.update.pull.request', e);
    process.exit(ERROR_UPDATE_PULL_REQUEST);
  }

  // Means there was still an error updating the WAI Preview Link
  if (!isSiteFilesUpdateSuccess) {
    console.error('error.site.files.update', additionalBodyContent);

    // TODO: Uncomment when updated bot token is being used
    /*try {
      // Display build error on triggering PR's commit
      await octokit.rest.repos.createCommitStatus({
        owner: repositoryOwner,
        repo: 'aria-practices',
        sha: process.env.APG_SHA,
        state: 'failure',
        target_url: previewLinkUrl, // Populated by the failing CI job:step link
        description: `WAI Preview Link failed to build in wai-aria-practices/pr-create (${ERROR_SITE_FILES_UPDATE})`,
        context: 'WAI Preview Link failed to build',
      });
    } catch (e) {
      console.error('error.create.commit.status', e);
      process.exit(ERROR_CREATE_COMMIT_STATUS);
    }*/

    process.exit(ERROR_SITE_FILES_UPDATE);
  }
};

(async () => {
  let waiPrNumber;
  let createPullRequestResult;

  if (!isSiteFilesUpdateSuccess) {
    try {
      await updateApgPrBody();
    } catch (e) {
      console.error('error.apg.body.update', e);
      process.exit(ERROR_APG_BODY_UPDATE);
    }
    return;
  }

  try {
    // Get current list of PRs for this repository
    const pullsListResult = await octokit.rest.pulls.list({
      owner: repositoryOwner,
      repo: 'wai-aria-practices',
    });
    console.info('pulls.list.success');

    // Check to see if a PR already exists with the head branch and use that PR's number instead
    for (let i = 0; i < pullsListResult.data.length; i++) {
      let data = pullsListResult.data[i];
      if (data.head.ref === GENERATED_APG_WAI_BRANCH) {
        waiPrNumber = data.number;
        break;
      }
    }
  } catch (e) {
    console.error('error.list.pull.requests', e);
    process.exit(ERROR_LIST_PULL_REQUESTS);
  }

  if (!waiPrNumber) {
    try {
      // Create a PR if none exists
      createPullRequestResult = await octokit.rest.pulls.create({
        owner: repositoryOwner,
        repo: 'wai-aria-practices',
        head: GENERATED_APG_WAI_BRANCH,
        base: 'main',
        title: GENERATED_APG_WAI_BRANCH + ' generated by aria-practices',
        body: `Generated by ${repositoryOwner}/aria-practices#${process.env.APG_PR_NUMBER}.`,
        draft: true,
        maintainer_can_modify: true,
      });
      console.info('pulls.create.success');
    } catch (e) {
      console.error('error.create.pull.request', e);
      process.exit(ERROR_CREATE_PULL_REQUEST);
    }
  }

  try {
    await updateApgPrBody(waiPrNumber, createPullRequestResult);
  } catch (e) {
    console.error('error.apg.body.update', e);
    process.exit(ERROR_APG_BODY_UPDATE);
  }
})();
