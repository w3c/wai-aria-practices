const createPatternsPage = (patterns) => {
  return `
    <ul class="design-patterns">
      ${patterns
        .map((pattern) => {
          return `
            <li class="design-pattern design-pattern-${pattern.slug}">
              <a href="${pattern.slug}" style="text-decoration: none;">
                <h2 class="design-pattern-name">${pattern.name}</h2>
                <div class="design-pattern-introduction">${pattern.introduction}</div>
              </a>
            </li>
          `;
        })
        .join(" ")}
    </ul>
  `;
};

module.exports = createPatternsPage;
