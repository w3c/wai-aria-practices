const abstractApgContent = require("./library/abstractApgContent");
// const organizeForJekyll = require("./library/organizeForJekyll");

const preBuild = async () => {
  const { pages } = await abstractApgContent();
  // organizeForJekyll({ pages })
};

preBuild();
