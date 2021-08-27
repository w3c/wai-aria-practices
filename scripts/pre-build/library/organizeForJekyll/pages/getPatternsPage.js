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
                <h2 class="design-pattern-name">
                  <a href="${pattern.slug}">
                    <img src="/assets/img/${pattern.slug}.svg" alt="">
                    <span>${pattern.name}</span>
                  </a>
                </h2>
                <div class="design-pattern-introduction">${pattern.introduction}</div>
              </li>
            `;
          })
          .join(" ")}
      </ul>`,
    }),
  };
};

module.exports = getPatternsPage;
