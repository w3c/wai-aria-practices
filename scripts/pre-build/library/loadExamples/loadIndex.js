const path = require("path");
const fs = require("fs/promises");
const { parse: parseHtml } = require("node-html-parser");
const walkHtmlElements = require("../../utilities/walkHtmlElements");
const getTemplateBoilerplate = require("../getTemplateBoilerplate");
const { getHandleElement, getContent } = require("./handleElement");

const loadIndex = async (filePath, { exampleRelativeDirectory }) => {
  const html = await fs.readFile(filePath, { encoding: "utf8" });
  const permalink = `/examples/`;

  const root = parseHtml(html);

  walkHtmlElements(root, getHandleElement(permalink));

  const { title, head, body } = getContent();

  return getTemplateBoilerplate({
    title,
    permalink,
    head: head.innerHTML,
    content: body.innerHTML,
  });
};

module.exports = loadIndex;
