const fs = require("fs/promises");
const path = require("path");
const { omit } = require("lodash");

const organizeForJekyll = async (content) => {
  const homeFilePath = path.resolve(
    __dirname,
    "../../../../_includes/home.html"
  );

  const homeContent = `
    <!-- home.html -->
    <!-- This is a generated file -->
    ${content.abstract}
    ${content.introduction}
    ${content.badAria}
    ${content.browserAndAtSupport}
    ${content.mobileAndTouchSupport}
  `;

  await fs.writeFile(homeFilePath, homeContent);

  console.log(
    omit(content, [
      "abstract",
      "introduction",
      "badAria",
      "browserAndAtSupport",
      "mobileAndTouchSupport",
    ])
  );
};

module.exports = organizeForJekyll;
