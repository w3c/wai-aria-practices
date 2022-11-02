const emptyBuildFolders = require("./library/emptyBuildFolders");
const recursivelyCopyAllContent = require("./library/recursivelyCopyAllContent");
const determineContentType = require("./library/determineContentType");
const transformExample = require("./library/transformExample");
const transformPattern = require("./library/transformPattern");
const transformPractice = require("./library/transformPractice");
const transformHomepage = require("./library/transformHomepage");
const transformAsset = require("./library/transformAsset");

const preBuild = async () => {
  await emptyBuildFolders();

  await recursivelyCopyAllContent({
    forEachFile: (filePath) => {
      const contentType = determineContentType(filePath);

      switch (contentType) {
        case "example":
          return transformExample(filePath);
        case "pattern":
          return transformPattern(filePath);
        case "practice":
          return transformPractice(filePath);
        case "homepage":
          return transformHomepage(filePath);
        case "asset":
          return transformAsset(filePath);
        default:
          throw new Error("Expected content type");
      }
    },
  });
};

module.exports = preBuild;
