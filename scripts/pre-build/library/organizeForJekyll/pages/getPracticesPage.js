const getTemplateBoilerplate = require("../../getTemplateBoilerplate");

const getPracticesPage = (practices) => {
  return {
    fileName: "practices.md",
    fileContent: getTemplateBoilerplate({
      title: "Practices",
      permalink: "/practices/",
      content: `<ul class="tiles">
        ${practices
          .map((practice) => {
            return `
              <li class="tile tile-${practice.slug}">
                <h2 class="tile-name">
                  <a href="{{ site.baseurl }}/practices/${practice.slug}/">
                    <span>${practice.name}</span>
                  </a>
                </h2>
                <div class="tile-introduction">${practice.introduction}</div>
              </li>
            `;
          })
          .join(" ")}
      </ul>`,
    }),
  };
};

module.exports = getPracticesPage;
