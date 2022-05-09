const path = require("path");
const fs = require("fs/promises");
const { parse: parseHtml } = require("node-html-parser");
const walkHtmlElements = require("../../utilities/walkHtmlElements");
const getTemplateBoilerplate = require("../getTemplateBoilerplate");
const { getHandleElement, getContent } = require("./handleElement");

const loadExample = async (
  filePath,
  { exampleRelativeDirectory, lastModifiedDateFormatted, getNotice }
) => {
  const html = await fs.readFile(filePath, { encoding: "utf8" });
  const slug = path.basename(filePath).slice(0, -5);
  const permalink = `/index/${exampleRelativeDirectory}/${slug}`;
  const notice = getNotice({ permalink });

  const root = parseHtml(html);

  walkHtmlElements(root, getHandleElement({ permalink, notice }));

  const { title, head, body, outline } = getContent();

  return {
    fileName: `${slug}.md`,
    fileContent: getTemplateBoilerplate({
      title,
      permalink,
      head: head,
      content: `
        <div class="sidebar-container">
          <nav class="sidebar-right" aria-describedby="sidebar-toc">
            <h2 id="sidebar-toc" class="sidebar-headline">Page Contents</h2>
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
          </nav>
          <div class="sidebar-left">
            ${body}
            <p>Page last updated: ${lastModifiedDateFormatted}</p>
          </div>
        </div>
      `,
    }),
  };
};

module.exports = loadExample;
