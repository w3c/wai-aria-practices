const { parse: parseHtml } = require("node-html-parser");
const rewriteElementPaths = require("./rewriteElementPaths");

const transformImageAsset = async (sourcePath, sourceContents) => {
  if (sourcePath.endsWith("shared/templates/example-usage-warning.html")) {
    return sourceContents; // Will be transformed within each example page
  }

  const html = parseHtml(sourceContents);
  await rewriteElementPaths(html, { onSourcePath: sourcePath });

  return html.outerHTML;
};

module.exports = transformImageAsset;
