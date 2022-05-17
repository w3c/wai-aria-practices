const getTemplateBoilerplate = require("../../getTemplateBoilerplate");

const getPracticesPage = (practices) => {
  return {
    fileName: "practices.md",
    fileContent: getTemplateBoilerplate({
      title: "Practices",
      permalink: "/aria/apg/practices/",
      content: `
        {% include read-this-first.html %}
        <ul class="tiles">
          ${practices
            // Handled above with a special banner
            .filter((practice) => practice.slug !== "read-me-first")
            .map((practice) => {
              return `
                <li class="tile tile-${practice.slug}">
                  <a 
                    href="{{ '/aria/apg/practices/${practice.slug}/' | relative_url }}"
                  >
                    <h2 class="tile-name">
                      <span>${practice.name}</span>
                    </h2>
                  </a>
                  <div class="tile-introduction">${practice.introduction}</div>
                </li>
              `;
            })
            .join(" ")}
        </ul>
      `,
    }),
  };
};

module.exports = getPracticesPage;
