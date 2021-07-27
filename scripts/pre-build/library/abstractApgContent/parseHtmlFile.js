const fs = require("fs/promises");
const path = require("path");
const { parse: parseHtml } = require("node-html-parser");
const walkHtmlElements = require("../../utilities/walkHtmlElements");

const parseHtmlFile = async () => {
  const htmlFilePath = path.resolve(
    __dirname,
    "../../../../_external/aria-practices/aria-practices.html"
  );

  const htmlString = await fs.readFile(htmlFilePath, "utf8");

  const root = parseHtml(htmlString);

  const handleElement = (element) => {
    console.log(element.tagName, element.range);
  };

  walkHtmlElements(root, handleElement);
};

module.exports = parseHtmlFile;
