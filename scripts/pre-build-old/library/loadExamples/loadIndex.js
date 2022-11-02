const path = require("path");
const fs = require("fs/promises");
const { parse: parseHtml } = require("node-html-parser");
const walkHtmlElements = require("../../utilities/walkHtmlElements");
const getTemplateBoilerplate = require("../getTemplateBoilerplate");
const { getHandleElement, getContent } = require("./handleElement");

const loadIndex = async (filePath) => {
  const html = await fs.readFile(filePath, { encoding: "utf8" });
  const permalink = `/ARIA/apg/example-index/`;

  const root = parseHtml(html);

  walkHtmlElements(root, getHandleElement({ permalink }));

  const { /* title, */ head, body } = getContent();

  return getTemplateBoilerplate({
    title: "Index",
    permalink,
    head: head,
    enableSidebar: true,
    content: body,
  });
};

module.exports = loadIndex;
