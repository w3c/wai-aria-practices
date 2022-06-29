const fs = require("fs/promises");
const path = require("path");
const { parse: parseHtml } = require("node-html-parser");
const walkHtmlElements = require("../../utilities/walkHtmlElements");
const { handleElement, getContent } = require("./handleElement");
const { fixLinks } = require("./fixLinks");

const abstractApgContent = async () => {
  const htmlFilePath = path.resolve(
    __dirname,
    "../../../../html/aria-practices.html"
    // "../../../../_external/aria-practices/aria-practices.html"
  );

  const htmlString = await fs.readFile(htmlFilePath, "utf8");

  const root = parseHtml(htmlString);

  walkHtmlElements(root, handleElement);

  return fixLinks(getContent());
};

module.exports = abstractApgContent;
