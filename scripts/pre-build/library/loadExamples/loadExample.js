const path = require("path");
const fs = require("fs/promises");
const { parse: parseHtml } = require("node-html-parser");
const walkHtmlElements = require("../../utilities/walkHtmlElements");
const getTemplateBoilerplate = require("../getTemplateBoilerplate");
const { getHandleElement, getContent } = require("./handleElement");

const loadExample = async (filePath, { exampleRelativeDirectory }) => {
  const html = await fs.readFile(filePath, { encoding: "utf8" });
  const slug = path.basename(filePath).slice(0, -5);
  const permalink = `/example-index/${exampleRelativeDirectory}/${slug}`;

  const root = parseHtml(html);

  walkHtmlElements(root, getHandleElement(permalink));

  const { title, head, body, outline, relatedLinks } = getContent();

  return {
    fileName: `${slug}.md`,
    fileContent: getTemplateBoilerplate({
      title,
      permalink,
      head: head,
      content: `
        <div class="sidebar-container">
          <aside class="sidebar-left" aria-describedby="sidebar-toc">
            <h2 id="sidebar-toc" class="sidebar-headline">Table of Contents</h2>
            <ul class="sidebar-list">
              ${outline
                .map(({ slug, name }) => {
                  return `
                    <li>
                      <a href="#${slug}">${name}</a>
                    </li>
                  `;
                })
                .join(" ")}
            </ul>
            ${relatedLinks}
          </aside>
          <div class="sidebar-right">${body}</div>
        </div>
      `,
    }),
  };
};

module.exports = loadExample;
