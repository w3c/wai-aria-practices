const getTemplateBoilerplate = require("../../getTemplateBoilerplate");

const getFundamentalPage = (section) => {
  return {
    fileName: `fundamental-${section.slug}.md`,
    fileContent: getTemplateBoilerplate({
      title: section.name,
      permalink: section.permalink,
      addBodyClass: "fundamental-page",
      content: `
        <div class="sidebar-container">
          <aside class="sidebar-left">
            <h2 class="sidebar-headline">Table of Contents</h2>
            <ul class="sidebar-list">
              ${section.outline
                .map(({ slug, name }) => {
                  return `
                  <li>
                    <a href="#${slug}">${name}</a>
                  </li>
                `;
                })
                .join(" ")}
            </ul>
          </aside>
          <div class="sidebar-right">
            ${section.content}
          </div>
        </div>
      `,
    }),
  };
};

module.exports = getFundamentalPage;
