const { parse: parseHtml } = require("node-html-parser");
const walkHtmlElements = require("../../utilities/walkHtmlElements");

const handleElement = (element) => {};

const loadExample = (html) => {
  const root = parseHtml(html);

  walkHtmlElements(root, handleElement);

  console.log();
};

module.exports = loadExample;
