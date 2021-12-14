const getTemplateBoilerplate = require("../../getTemplateBoilerplate");

const getPatternsPage = (patterns) => {
  return {
    fileName: "patterns.md",
    fileContent: getTemplateBoilerplate({
      title: "Design Patterns and Widgets",
      permalink: "/patterns/",
      content: `<ul class="tiles">
        ${patterns
          .map((pattern, index) => {
            if (pattern.name.startsWith("Grids")) {
              if (patterns[index + 1].name !== "Link") {
                throw new Error(
                  "Cannot insert the landmarks pattern link because the " +
                    "correct alphabetical position has diverged from a known " +
                    "state."
                );
              }
              // This pattern is not like the others and needs separate handling
              return `
                <li class="tile tile-landmarks">
                  <h2 class="tile-name">
                    <a href="/index/landmarks/index.html">
                      <img src="/assets/img/landmarks.svg" alt="">
                      <span>Landmarks</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
                    Landmarks provide a powerful way to identify the 
                    organization and structure of a web page.
                  </div>
                </li>
              `;
            }

            return `
              <li class="tile tile-${pattern.slug}">
                <h2 class="tile-name">
                  <a href="${pattern.permalink}">
                    <img src="/assets/img/${pattern.slug}.svg" alt="">
                    <span>${pattern.name}</span>
                  </a>
                </h2>
                <div class="tile-introduction">${pattern.introduction}</div>
              </li>
            `;
          })
          .join(" ")}
      </ul>`,
    }),
  };
};

module.exports = getPatternsPage;
