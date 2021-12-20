const { Octokit } = require('@octokit/rest');

// octokit should be authenticated with GITHUB_TOKEN from GA
const octokit = new Octokit({
    auth: process.env.GH_TOKEN,
});

(async () => {
    try {
        const createPullRequestResult = await octokit.rest.pulls.create({
            owner: 'howard-e',
            repo: 'wai-aria-practices',
            head: process.env.APG_BRANCH,
            base: 'master',
            inputs: {
                branch: process.env.APG_BRANCH,
                sha: process.env.APG_SHA,
            },
        });
        console.info('pull.create.success', createPullRequestResult);
    } catch (e) {
        console.error('pull.create.fail', e);
    }
})();
