const { Octokit } = require('@octokit/rest');

// octokit should be authenticated with GITHUB_TOKEN from GA
const octokit = new Octokit({
    auth: process.env.GH_TOKEN,
});

(async () => {
    try {
        console.info(process.env.APG_BRANCH, process.env.APG_PR_NUMBER);
        let body = 'Automatically generated by aria-practices [TODO: reference relevant commit]'

        const createPullRequestResult = await octokit.rest.pulls.create({
            owner: 'howard-e',
            repo: 'wai-aria-practices',
            head: 'howard-e:' + process.env.APG_BRANCH,
            base: 'master',
            title: process.env.APG_BRANCH + ' generated by aria-practices',
            maintainer_can_modify: true,
            body,
        });
        // TODO: on 422 and error is not that PR already exists for branch, terminate
        console.info('pull.create.success', createPullRequestResult);

        // creates preview link in aria-practices PR
        const updateAPGPracticesResult = await octokit.rest.pulls.update({
            owner: 'howard-e',
            repo: 'aria-practices',
            pull_number: process.env.APG_PR_NUMBER,
            body: `${body}\n___[Preview Link](https://deploy-preview-${createPullRequestResult.data.number}--wai-aria-practices-howarde.netlify.app)`
        })
        console.info('pull.update.success', updateAPGPracticesResult);
    } catch (e) {
        console.error('pull.create.fail', e);
    }
})();