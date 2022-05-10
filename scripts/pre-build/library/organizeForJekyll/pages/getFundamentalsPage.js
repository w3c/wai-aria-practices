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
                  <a href="{{ site.baseurl }}/fundamentals/${fundamental.slug}/">
                    <span>${fundamental.name}</span>
                  </a>
                </h2>
                <div class="tile-introduction">${fundamental.introduction}</div>
              </li>
            `;
          })
          .join(" ")}
      </ul>`,
    }),
  };
};

module.exports = getFundamentalsPage;
