const emptyContentFolders = require("./library/emptyContentFolders");
const abstractApgContent = require("./library/abstractApgContent");
const organizeForJekyll = require("./library/organizeForJekyll");
const loadExamples = require("./library/loadExamples");
const loadHomepage = require("./library/loadHomepage");

const preBuild = async () => {
  await emptyContentFolders();

  const homepageContent = await loadHomepage();

  const content = await abstractApgContent();
  await organizeForJekyll(content, homepageContent);

  await loadExamples();
};

preBuild();
