const getTemplateBoilerplate = require("../../getTemplateBoilerplate");

const getPatternsPage = (patterns) => {
  return {
    fileName: "patterns.md",
    fileContent: getTemplateBoilerplate({
      title: "Design Patterns and Widgets",
      permalink: "/patterns/",
      content: `<ul class="design-patterns">
        ${patterns
          .map((pattern) => {
            return `
              <li class="design-pattern design-pattern-${pattern.slug}">
                <a href="${pattern.slug}" style="text-decoration: none;">
                  <img src="/assets/img/${pattern.slug}.svg" alt="">
                  <h2 class="design-pattern-name">${pattern.name}</h2>
                  <div class="design-pattern-introduction">${pattern.introduction}</div>
                </a>
              </li>
            `;
          })
          .join(" ")}
      </ul>`,
    }),
  };
};

module.exports = getPatternsPage;
