const path = require("path");
const fs = require("fs/promises");
// const { parse: parseHtml } = require("node-html-parser");
// const walkHtmlElements = require("../../utilities/walkHtmlElements");
const getTemplateBoilerplate = require("../getTemplateBoilerplate");
// const { handleElement, getContent } = require("./handleElement");

const loadExample = async (filePath) => {
  const html = await fs.readFile(filePath, { encoding: "utf8" });
  const slug = path.basename(filePath).slice(0, -5);
  const name = slug; // TODO: fix

  // const root = parseHtml(html);

  // walkHtmlElements(root, handleElement);

  // const { slug, name, head, body } = getContent();

  return {
    fileName: `${slug}.md`,
    fileContent: getTemplateBoilerplate({
      title: name,
      permalink: `/examples/${slug}`,
      content: html,
      // content: `
      //   ${head.innerHTML}
      //   ${body.innerHTML}
      // `,
    }),
  };
};

module.exports = loadExample;
