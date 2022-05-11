const getTemplateBoilerplate = require("../../getTemplateBoilerplate");

const getPracticePage = (section) => {
  return {
    fileName: `practice-${section.slug}.md`,
    fileContent: getTemplateBoilerplate({
      title: section.name,
      permalink: section.permalink,
      addBodyClass: "practice-page",
      content: `
        <div class="sidebar-container">
          <nav class="sidebar-right">
            <h2 class="sidebar-headline">Page Contents</h2>
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
          </nav>
          <div class="sidebar-left">
            ${section.content}
          </div>
        </div>
      `,
    }),
  };
};

module.exports = getPracticePage;
