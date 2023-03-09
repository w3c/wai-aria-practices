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
  if (
    sourcePath.endsWith("feed/examples/feed-display.html") ||
    sourcePath.endsWith("feed/examples/feedDisplay.html") || // To be removed
    sourcePath.match(/content\/patterns\/landmarks\/examples\/.+\.html/) ||
    sourcePath.endsWith("toolbar/examples/help.html") ||
    sourcePath.endsWith("shared/templates/example-usage-warning.html")
  ) {
    return "htmlAsset";
  }
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
  throw new Error(
    `Could not determine content type for file at ${sourcePath}\n` +
      `This file may not follow established conventions.`
  );
};

module.exports = determineContentType;
