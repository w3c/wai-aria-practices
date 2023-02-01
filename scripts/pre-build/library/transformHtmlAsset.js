const { parse: parseHtml } = require("node-html-parser");
const rewriteElementPaths = require("./rewriteElementPaths");
const {rewriteSourcePath} = require("./rewritePath");

const transformImageAsset = async (sourcePath, sourceContents) => {
  const { sitePath } = rewriteSourcePath(sourcePath);

  if (sourcePath.endsWith("shared/templates/example-usage-warning.html")) {
    return sourceContents; // Will be transformed within each example page
  }

  const html = parseHtml(sourceContents);
  await rewriteElementPaths(html, { onSourcePath: sourcePath });

  return `---
layout: null
permalink: ${sitePath}
---
${html.outerHTML}`;
};

module.exports = transformImageAsset;
