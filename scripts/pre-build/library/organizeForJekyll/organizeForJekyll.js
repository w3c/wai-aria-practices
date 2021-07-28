const fs = require("fs/promises");
const path = require("path");

const organizeForJekyll = async (content) => {
  const homeFilePath = path.resolve(
    __dirname,
    "../../../../_includes/home.html"
  );

  const homeContent = `
    <!-- Warning, this is a generated file -->
    ${content.abstract}
    ${content.introduction}
    ${content.badAria}
    ${content.browserAndAtSupport}
    ${content.mobileAndTouchSupport}
  `;

  await fs.writeFile(homeFilePath, homeContent);
};

module.exports = organizeForJekyll;
