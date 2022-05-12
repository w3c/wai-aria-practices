const path = require("path");
const fs = require("fs/promises");
const { parse: parseHtml } = require("node-html-parser");
const walkHtmlElements = require("../../utilities/walkHtmlElements");
const getTemplateBoilerplate = require("../getTemplateBoilerplate");
const { getHandleElement, getContent } = require("./handleElement");

const loadExample = async (
  filePath,
  {
    exampleRelativePath,
    exampleRelativeDirectory,
    lastModifiedDateFormatted,
    getNotice,
  }
) => {
  const html = await fs.readFile(filePath, { encoding: "utf8" });
  const slug = path.basename(filePath).slice(0, -5);
  const permalink = `/index/${exampleRelativeDirectory}/${slug}`;
  const notice = getNotice({ permalink });

  const root = parseHtml(html);

  walkHtmlElements(
    root,
    getHandleElement({ permalink, notice, lastModifiedDateFormatted })
  );

  const { title, head, footer, body } = getContent();

  return {
    fileName: `${slug}.md`,
    fileContent: getTemplateBoilerplate({
      title,
      permalink,
      enableSidebar: true,
      head,
      footer,
      footerForkAndEditOnGithubPath: `examples/${exampleRelativePath}`,
      content: body,
    }),
  };
};

module.exports = loadExample;
