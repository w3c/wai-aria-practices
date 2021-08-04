const fs = require("fs/promises");
const path = require("path");
const { contentPath } = require("../emptyContentFolder");
const getHomePage = require("./pages/getHomePage");
const getAboutPage = require("./pages/getAboutPage");
const getFundamentalsPage = require("./pages/getFundamentalsPage");
const getPatternsPage = require("./pages/getPatternsPage");
const getPatternPage = require("./pages/getPatternPage");

const organizeForJekyll = async ({ sections, patterns }) => {
  const pages = [
    getHomePage(sections),
    getFundamentalsPage(sections),
    getAboutPage(sections),
    getPatternsPage(patterns),
    ...patterns.map((pattern) => getPatternPage(pattern)),
  ];

  await Promise.all(
    pages.map(({ fileName, fileContent }) => {
      return fs.writeFile(path.join(contentPath, fileName), fileContent);
    })
  );
};

module.exports = organizeForJekyll;
