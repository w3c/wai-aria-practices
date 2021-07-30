const fs = require("fs/promises");
const path = require("path");
const createPatternsPage = require("./createPatternsPage");

const organizeForJekyll = async ({ sections, patterns }) => {
  const homeFilePath = path.resolve(
    __dirname,
    "../../../../_includes/home.html"
  );
  const patternsFilePath = path.resolve(
    __dirname,
    "../../../../_includes/patterns.html"
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

  const patternsContent = `
    <!-- patterns.html -->
    <!-- This is a generated file -->
    ${createPatternsPage(patterns)}
  `;

  await Promise.all([
    fs.writeFile(homeFilePath, homeContent),
    fs.writeFile(patternsFilePath, patternsContent),
  ]);
};

module.exports = organizeForJekyll;
