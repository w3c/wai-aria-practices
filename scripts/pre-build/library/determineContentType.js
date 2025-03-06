const fs = require("fs");
const path = require("path");

// Update .tracked-html-assets.json with paths or regexes for html assets which don't fall in line with the expected html file naming structures to consider them as valid 'htmlAsset's
const trackedHtmlAssetsData = fs.readFileSync(path.join(__dirname, '.tracked-html-assets.json'), { encoding: "utf8" })
const trackedHtmlAssets = JSON.parse(trackedHtmlAssetsData);

const processTrackedHtmlAsset = (sourcePath) => {
  return trackedHtmlAssets.some(trackedAsset => {
    if (sourcePath.endsWith(trackedAsset)) return true;

    try {
      const regexp = new RegExp(trackedAsset);
      return regexp.test(sourcePath);
    } catch (e) {
      return false;
    }
  });
}

const determineContentType = (sourcePath) => {
  if (sourcePath.endsWith("content/apg-home.html")) {
    return "homepage";
  }
  if (
    sourcePath.endsWith("svg") ||
    sourcePath.endsWith("png") ||
    sourcePath.endsWith("jpg")
  ) {
    return "imageAsset";
  }

  if (processTrackedHtmlAsset(sourcePath)) return "htmlAsset";
  if (!sourcePath.endsWith("html")) {
    return "otherAsset";
  }
  if (sourcePath.match(/content\/about\/.+\/.+\.html$/)) {
    return "aboutPage";
  }
  if (sourcePath.match(/content\/practices\/.+\/.+-practice\.html$/)) {
    return "practice";
  }
  if (sourcePath.match(/content\/patterns\/.+-pattern\.html$/)) {
    return "pattern";
  }
  if (sourcePath.match(/content\/patterns\/.+\/examples\/.+\.html$/)) {
    return "example";
  }
  if (sourcePath.match(/content\/about\/about\.html$/)) {
    return "aboutIndex";
  }
  if (sourcePath.match(/content\/patterns\/patterns\.html$/)) {
    return "patternIndex";
  }
  if (sourcePath.match(/content\/practices\/practices\.html$/)) {
    return "practiceIndex";
  }
  if (sourcePath.endsWith("content/index/index.html")) {
    return "exampleIndex";
  }
  if (
    sourcePath.endsWith("shared/templates/read-this-first.html") ||
    sourcePath.endsWith("shared/templates/example-usage-warning.html") ||
    sourcePath.endsWith(
      "shared/templates/experimental-example-usage-warning.html"
    )
  ) {
    return "template";
  }
  throw new Error(
    `Could not determine content type for file at ${sourcePath}\n` +
    `This file may not follow established conventions.\n` +
    `If this is a html file that should be included, please add it to .tracked-html-assets.json.`
  );
};

module.exports = determineContentType;
