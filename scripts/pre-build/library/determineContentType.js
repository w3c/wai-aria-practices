const determineContentType = (sourcePath) => {
  if (sourcePath.endsWith("content/index.html")) {
    return "homepage";
  }
  if (sourcePath.endsWith("content/index/index.html")) {
    return "exampleIndex";
  }
  if (sourcePath.match(/content\/about\/.+\/.+\.html$/)) {
    return "otherPage";
  }
  if (
    !sourcePath.endsWith("html") ||
    sourcePath.includes("landmarks/examples/") ||
    sourcePath.endsWith("feed/examples/feedDisplay.html") ||
    sourcePath.endsWith("toolbar/examples/help.html") ||
    sourcePath.endsWith("shared/js/notice.html")
  ) {
    return "asset";
  }
  if (sourcePath.match(/content\/practices\/.+\/.+-practice\.html$/)) {
    return "practice";
  }
  if (sourcePath.match(/content\/patterns\/.+-pattern\.html$/)) {
    return "pattern";
  }
  if (sourcePath.match(/content\/patterns\/patterns\.html$/)) {
    return "patternIndex";
  }
  if (sourcePath.match(/content\/patterns\/.+\/examples\/.+\.html$/)) {
    return "example";
  }
  throw new Error(
    `Could not determine content type for file at ${sourcePath}\n` +
      `This file may not follow established conventions.`
  );
};

module.exports = determineContentType;
