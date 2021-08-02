const fs = require("fs/promises");
const path = require("path");
const emptyContentFolder = require("./emptyContentFolder");
const getHomePage = require("./pages/getHomePage");
const getPatternsPage = require("./pages/getPatternsPage");
const getPatternPage = require("./pages/getPatternPage");

const organizeForJekyll = async ({ sections, patterns }) => {
  await emptyContentFolder();

  const pages = [
    getHomePage(sections),
    getPatternsPage(patterns),
    ...patterns.map((pattern) => getPatternPage(pattern)),
  ];

  await Promise.all(
    pages.map(({ fileName, fileContent }) => {
      return fs.writeFile(getPath(fileName), fileContent);
    })
  );
};

const getPath = (fileName) => {
  return path.resolve(__dirname, "../../../../content-generated/", fileName);
};

module.exports = organizeForJekyll;
