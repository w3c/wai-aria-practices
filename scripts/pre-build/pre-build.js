const emptyBuildFolders = require("./library/emptyBuildFolders");
const recursivelyCopyAllContent = require("./library/recursivelyCopyAllContent");
const determineContentType = require("./library/determineContentType");
const transformExample = require("./library/transformExample");
const transformPattern = require("./library/transformPattern");
const transformPractice = require("./library/transformPractice");
const transformAbout = require("./library/transformAbout");
const transformHomepage = require("./library/transformHomepage");
const transformExampleIndex = require("./library/transformExampleIndex");
const transformPatternIndex = require("./library/transformPatternIndex");
const transformPracticeIndex = require("./library/transformPracticeIndex");
const transformAsset = require("./library/transformAsset");
const path = require("path");
const { sourceRoot } = require("./library/rewritePath");

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
        // Special cases which are handled below
        // case "patternIndex":
        //   return transformPatternIndex(sourcePath, sourceContents);
        // case "practiceIndex":
        //   return transformPracticeIndex(sourcePath, sourceContents);
        case "about":
          return transformAbout(sourcePath, sourceContents);
        case "asset":
          return transformAsset(sourcePath, sourceContents);
        case "ignored":
          break;
        default:
          throw new Error(
            `Script did not recognize content type ${contentType}`
          );
      }
    },
    // Currently generated and not present in the content repo. In the future
    // it would be preferable for these to originate in the content repo.
    generateFiles: {
      [path.join(sourceRoot, "content/patterns/patterns.html")]:
        transformPatternIndex,
      [path.join(sourceRoot, "content/practices/practices.html")]:
        transformPracticeIndex,
    },
  });
};

module.exports = preBuild;
