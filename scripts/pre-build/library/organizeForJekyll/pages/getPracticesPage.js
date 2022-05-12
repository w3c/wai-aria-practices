const getTemplateBoilerplate = require("../../getTemplateBoilerplate");

const getPracticesPage = (practices) => {
  return {
    fileName: "practices.md",
    fileContent: getTemplateBoilerplate({
      title: "Practices",
      permalink: "/ARIA/APG/practices/",
      content: `
        {% include read-this-first.html %}
        <ul class="tiles">
          ${practices
            // Handled above with a special banner
            .filter((practice) => practice.slug !== "read-me-first")
            .map((practice) => {
              return `
                <li class="tile tile-${practice.slug}">
                  <h2 class="tile-name">
                    <a 
                      href="{{ '/ARIA/APG/practices/${practice.slug}/' | relative_url }}"
                    >
                      <span>${practice.name}</span>
                    </a>
                  </h2>
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
