const emptyBuildFolders = require("./library/emptyBuildFolders");
const recursivelyCopyAllContent = require("./library/recursivelyCopyAllContent");
const determineContentType = require("./library/determineContentType");
const transformExample = require("./library/transformExample");
const transformPattern = require("./library/transformPattern");
const transformPractice = require("./library/transformPractice");
const transformOtherPage = require("./library/transformOtherPage");
const transformHomepage = require("./library/transformHomepage");
const transformExampleIndex = require("./library/transformExampleIndex");
const transformPatternIndex = require("./library/transformPatternIndex");
const transformPracticeIndex = require("./library/transformPracticeIndex");
const transformAsset = require("./library/transformAsset");

const preBuild = async () => {
  await emptyBuildFolders();

  await recursivelyCopyAllContent({
    forEachFile: (sourcePath, sourceContents) => {
      const contentType = determineContentType(sourcePath);

      switch (contentType) {
        case "pattern":
          return transformPattern(sourcePath, sourceContents);
        case "example":
          return transformExample(sourcePath, sourceContents);
        case "practice":
          return transformPractice(sourcePath, sourceContents);
        case "homepage":
          return transformHomepage(sourcePath, sourceContents);
        case "exampleIndex":
          return transformExampleIndex(sourcePath, sourceContents);
        case "patternIndex":
          return transformPatternIndex(sourcePath, sourceContents);
        case "practiceIndex":
          return transformPracticeIndex(sourcePath, sourceContents);
        case "otherPage":
          return transformOtherPage(sourcePath, sourceContents);
        case "asset":
          return transformAsset(sourcePath, sourceContents);
        default:
          throw new Error(
            `Script did not recognize content type ${contentType}`
          );
      }
    },
  });
};

module.exports = preBuild;
