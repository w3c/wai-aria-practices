const { emptyContentFolder } = require("./library/emptyContentFolder");
const abstractApgContent = require("./library/abstractApgContent");
const organizeForJekyll = require("./library/organizeForJekyll");
const loadExamples = require("./library/loadExamples");

const preBuild = async () => {
  await emptyContentFolder();

  const content = await abstractApgContent();
  await organizeForJekyll(content);

  // await loadExamples();
};

preBuild();
