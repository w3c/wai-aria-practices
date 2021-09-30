const getTemplateBoilerplate = require("../../getTemplateBoilerplate");

const getPatternsPage = (patterns) => {
  return {
    fileName: "patterns.md",
    fileContent: getTemplateBoilerplate({
      title: "Design Patterns and Widgets",
      permalink: "/patterns/",
      content: `<ul class="tiles">
        ${patterns
          .map((pattern) => {
            return `
              <li class="tile tile-${pattern.slug}">
                <h2 class="tile-name">
                  <a href="${pattern.permalink}">
                    <img src="/assets/img/${pattern.slug}.svg" alt="">
                    <span>${pattern.name}</span>
                  </a>
                </h2>
                <div class="tile-introduction">
                  <p>${pattern.introduction} <a href="${pattern.permalink}">Read more<span class="sr-only"> about ${pattern.slug}</span></a></p>
                </div>
              </li>
            `;
          })
          .join(" ")}
      </ul>`,
    }),
  };
};

module.exports = getPatternsPage;
