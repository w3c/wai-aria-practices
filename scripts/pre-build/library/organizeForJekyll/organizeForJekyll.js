const fs = require("fs/promises");
const path = require("path");
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
      const filePath = path.resolve(__dirname, "../../../../content", fileName);
      return fs.writeFile(filePath, fileContent);
    })
  );
};

module.exports = organizeForJekyll;
