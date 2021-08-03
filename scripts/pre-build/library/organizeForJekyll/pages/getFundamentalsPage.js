const getTemplateBoilerplate = require("../getTemplateBoilerplate");

const getFundamentalsPage = (allSections) => {
  const sections = [
    allSections.landmarkRegions,
    allSections.namesAndDescriptions,
    allSections.keyboardInterface,
    allSections.gridAndTableProperties,
    allSections.rangeRelatedProperties,
    allSections.presentationRole,
  ];
  return {
    fileName: `fundamentals.md`,
    fileContent: getTemplateBoilerplate({
      title: "Fundamentals",
      permalink: `/fundamentals/`,
      content: `
        <div class="sidebar-container">
          <aside class="sidebar-left">
            <h2 class="sidebar-headline">Table of Contents</h2>
            <ul class="sidebar-list">
              ${sections
                .map(({ slug, name }) => {
                  return `
                  <li>
                    <a href="#${slug}">${name}</a>
                  </li>
                `;
                })
                .join(" ")}
            </ul>
          </aside>
          <div class="sidebar-right">
            ${sections.map(({ content }) => content).join(" ")}
          </div>
        </div>
      `,
    }),
  };
};

module.exports = getFundamentalsPage;
