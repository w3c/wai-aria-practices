const { parse: parseHtml } = require("node-html-parser");
const formatForJekyll = require("./formatForJekyll");
const { rewriteSourcePath } = require("./rewritePath");
const removeConflictingCss = require("./removeConflictingCss");
const rewriteElementPaths = require("./rewriteElementPaths");
const { getReadThisFirst } = require("./transformPatternIndex");

const transformPatternIndex = async (sourcePath, sourceContents) => {
  const readThisFirst = await getReadThisFirst(sourcePath);
  
  const { sitePath, githubPath } = rewriteSourcePath(sourcePath);
  const html = parseHtml(sourceContents);

  const title = html.querySelector("h1").innerHTML;
  html.querySelector("h1").remove();

  removeConflictingCss(html);

  await rewriteElementPaths(html, { onSourcePath: sourcePath });

  const content = `
    ${readThisFirst}
    ${html.querySelector("body").innerHTML}
  `

  return formatForJekyll({
    title,
    sitePath,
    githubPath,
    content,
    enableSidebar: false,
    head: html.querySelector("head").innerHTML,
  });
};

module.exports = transformPatternIndex;
