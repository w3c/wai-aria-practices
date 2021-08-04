const { parse: parseHtml } = require("node-html-parser");
const walkHtmlElements = require("../../utilities/walkHtmlElements");
const getTemplateBoilerplate = require("../getTemplateBoilerplate");
const { handleElement, getContent } = require("./handleElement");

const loadExample = (html) => {
  const root = parseHtml(html);

  walkHtmlElements(root, handleElement);

  const { slug, name, head, body } = getContent();

  return {
    fileName: `${slug}.md`,
    fileContent: getTemplateBoilerplate({
      title: name,
      permalink: `/examples/${slug}`,
      content: `
        ${head.innerHTML}
        ${body.innerHTML}
      `,
    }),
  };
  console.log();
};

module.exports = loadExample;
