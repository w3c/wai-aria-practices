const emptyBuildFolders = require("./library/emptyBuildFolders");
const recursivelyCopyAllContent = require("./library/recursivelyCopyAllContent");
const determineContentType = require("./library/determineContentType");
const transformExample = require("./library/transformExample");
const transformPattern = require("./library/transformPattern");
const transformPractice = require("./library/transformPractice");
const transformOtherPage = require("./library/transformOtherPage");
const transformHomepage = require("./library/transformHomepage");
const transformExampleIndex = require("./library/transformExampleIndex");
const transformAsset = require("./library/transformAsset");

const preBuild = async () => {
  await emptyBuildFolders();

  await recursivelyCopyAllContent({
    forEachFile: (filePath, fileContents) => {
      const contentType = determineContentType(filePath);

      switch (contentType) {
        case "pattern":
          return transformPattern(filePath, fileContents);
        case "example":
          return transformExample(filePath, fileContents);
        case "practice":
          return transformPractice(filePath, fileContents);
        case "homepage":
          return transformHomepage(filePath, fileContents);
        case "exampleIndex":
          return transformExampleIndex(filePath, fileContents);
        case "otherPage":
          return transformOtherPage(filePath, fileContents);
        case "asset":
          return transformAsset(filePath, fileContents);
        default:
          throw new Error(
            `Script did not recognize content type ${contentType}`
          );
      }
    },
  });
};

module.exports = preBuild;
