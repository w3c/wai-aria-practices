const getTemplateBoilerplate = require("../../getTemplateBoilerplate");

const getPatternsPage = (patterns) => {
  return {
    fileName: "patterns.md",
    fileContent: getTemplateBoilerplate({
      title: "Patterns",
      permalink: "/ARIA/apg/patterns/",
      content: `
        {% include read-this-first.html %}
        <ul class="tiles">
          ${patterns
            .map((pattern, index) => {
              let patternContent = "";

              if (pattern.name.startsWith("Grids")) {
                if (patterns[index + 1].name !== "Link") {
                  throw new Error(
                    "Cannot insert the landmarks pattern link because the " +
                      "correct alphabetical position has diverged from a known " +
                      "state."
                  );
                }
                // This pattern is not like the others and needs separate handling
                patternContent += `
                  <li class="tile tile-landmarks">
                    <a 
                      href="{{ '/ARIA/apg/example-index/landmarks/index.html' | relative_url }}"
                    >
                      <h2 class="tile-name">
                        <img 
                          src="{{ '/content-images/wai-aria-practices/img/landmarks.svg' | relative_url }}" 
                          alt=""
                        >
                        <span>Landmarks</span>
                      </h2>
                    </a>
                    <div class="tile-introduction">
                      Landmarks provide a powerful way to identify the 
                      organization and structure of a web page.
                    </div>
                  </li>
                `;
              }

              patternContent += `
                <li class="tile tile-${pattern.slug}">
                  <a href="{{ '${pattern.permalink}' | relative_url }}">
                    <h2 class="tile-name">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/${pattern.slug}.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>${pattern.name}</span>
                    </h2>
                  </a>
                  <div class="tile-introduction">${pattern.introduction}</div>
                </li>
              `;

              return patternContent;
            })
            .join(" ")}
        </ul>
      `,
    }),
  };
};

module.exports = getPatternsPage;
