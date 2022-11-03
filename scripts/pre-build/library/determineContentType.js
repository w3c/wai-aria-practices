const determineContentType = (filePath) => {
  if (filePath.endsWith("content/index.html")) {
    return "homepage";
  }
  if (filePath.endsWith("content/index/index.html")) {
    return "exampleIndex";
  }
  if (filePath.match(/content\/about\/.+\/.+\.html$/)) {
    return "otherPage";
  }
  if (!filePath.endsWith("html") || filePath.endsWith("notice.html")) {
    return "asset";
  }
  if (filePath.match(/content\/practices\/.+\/.+-practice\.html$/)) {
    return "practice";
  }
  if (filePath.match(/content\/patterns\/.+-pattern\.html$/)) {
    return "pattern";
  }
  if (filePath.match(/content\/patterns\/.+\/examples\/.+\.html$/)) {
    return "example";
  }
  throw new Error(
    `Could not determine content type for file at ${filePath}\n` +
      `This file may not follow established conventions.`
  );
};

module.exports = determineContentType;
