const getTemplateBoilerplate = require("../../getTemplateBoilerplate");

const getPatternPage = (pattern) => {
  return {
    fileName: `pattern-${pattern.slug}.md`,
    fileContent: getTemplateBoilerplate({
      title: pattern.name,
      permalink: pattern.permalink,
      content: `
        <div class="sidebar-container">
          <aside class="sidebar-left">
            <h2 class="sidebar-headline">Table of Contents</h2>
            <ul class="sidebar-list">
              ${pattern.outline
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
            ${pattern.content}
          </div>
        </div>
      `,
    }),
  };
};

module.exports = getPatternPage;
