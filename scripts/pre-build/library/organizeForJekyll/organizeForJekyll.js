const fs = require("fs/promises");
const path = require("path");
const { omit } = require("lodash");

const organizeForJekyll = async ({ sections, patterns }) => {
  const homeFilePath = path.resolve(
    __dirname,
    "../../../../_includes/home.html"
  );

  const homeContent = `
    <!-- home.html -->
    <!-- This is a generated file -->
    ${sections.abstract}
    ${sections.introduction}
    ${sections.badAria}
    ${sections.browserAndAtSupport}
    ${sections.mobileAndTouchSupport}
  `;

  await fs.writeFile(homeFilePath, homeContent);

  patterns.forEach((pattern) => {
    console.log("_______");
    console.log(pattern.slug);
    console.log(pattern.introduction);
    console.log("_______");
  });
};

module.exports = organizeForJekyll;
