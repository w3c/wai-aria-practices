const emptyContentFolders = require("./library/emptyContentFolders");
const abstractApgContent = require("./library/abstractApgContent");
const organizeForJekyll = require("./library/organizeForJekyll");
const loadExamples = require("./library/loadExamples");

const preBuild = async () => {
  await emptyContentFolders();

  const content = await abstractApgContent();
  await organizeForJekyll(content);

  await loadExamples();
};

preBuild();
