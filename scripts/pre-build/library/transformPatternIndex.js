const path = require("path");
const fs = require("fs/promises");
const { parse: parseHtml } = require("node-html-parser");
const formatForJekyll = require("./formatForJekyll");
const { rewriteSourcePath, sourceRoot } = require("./rewritePath");
const removeConflictingCss = require("./removeConflictingCss");
const rewriteElementPaths = require("./rewriteElementPaths");

const getReadThisFirst = async (sourcePath) => {
  const relativePath = "content/shared/templates/read-this-first.html";
  const filePath = path.resolve(sourceRoot, relativePath);
  const fileContent = await fs.readFile(filePath, { encoding: "utf8" });
  const html = parseHtml(fileContent);
  await rewriteElementPaths(html, {
    onSourcePath: sourcePath,
    optionalTemplateSourcePath: path.join(sourceRoot, relativePath),
  });
  return html.querySelector("body").innerHTML;
};

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
    skipToData: html.querySelector('script[data-skipto]')?.getAttribute('data-skipto'),
    head: html.querySelector("head").innerHTML,
  });
};

module.exports = transformPatternIndex;
module.exports.getReadThisFirst = getReadThisFirst
