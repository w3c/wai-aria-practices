const { parse: parseHtml } = require("node-html-parser");
const formatForJekyll = require("./formatForJekyll");
const removeConflictingCss = require("./removeConflictingCss");
const removeDuplicateMainTag = require("./removeDuplicateMainTag");
const rewriteElementPaths = require("./rewriteElementPaths");
const { rewriteSourcePath } = require("./rewritePath");

const transformExampleIndex = async (sourcePath, sourceContents) => {
  const { sitePath, githubPath } = rewriteSourcePath(sourcePath);
  const html = parseHtml(sourceContents);

  const title = html.querySelector("h1").innerHTML;
  html.querySelector("h1").remove();

  removeConflictingCss(html);

  await rewriteElementPaths(html, { onSourcePath: sourcePath });

  return formatForJekyll({
    title,
    sitePath,
    githubPath,
    content: removeDuplicateMainTag(html.querySelector("body").innerHTML),
    enableSidebar: true,
    head: html.querySelector("head"),
  });
};

module.exports = transformExampleIndex;
