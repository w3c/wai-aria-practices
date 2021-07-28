const abstractApgContent = require("./library/abstractApgContent");
const organizeForJekyll = require("./library/organizeForJekyll");

const preBuild = async () => {
  const content = await abstractApgContent();
  await organizeForJekyll(content);
};

preBuild();
