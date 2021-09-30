const getTemplateBoilerplate = require("../../getTemplateBoilerplate");

const getFundamentalsPage = (fundamentals) => {
  return {
    fileName: "fundamentals.md",
    fileContent: getTemplateBoilerplate({
      title: "Fundamentals",
      permalink: "/fundamentals/",
      content: `<ul class="tiles">
        ${fundamentals
          .map((fundamental) => {
            return `
              <li class="tile tile-${fundamental.slug}">
                <h2 class="tile-name">
                  <a href="${fundamental.slug}">
                    <span>${fundamental.name}</span>
                  </a>
                </h2>
                <div class="tile-introduction">
                  <p>${fundamental.introduction} <a href="${fundamental.slug}">Read more<span class="sr-only"> about ${fundamental.name}</span></a></p>
                </div>
              </li>
            `;
          })
          .join(" ")}
      </ul>`,
    }),
  };
};

module.exports = getFundamentalsPage;
