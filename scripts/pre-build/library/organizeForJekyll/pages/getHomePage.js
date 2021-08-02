const getTemplateBoilerplate = require("../getTemplateBoilerplate");

const getHomePage = (sections) => {
  return {
    fileName: `index.md`,
    fileContent: getTemplateBoilerplate({
      title: "WAI-ARIA Authoring Practices Guide",
      permalink: `/`,
      content: `
        ${sections.abstract}
        ${sections.introduction}
        ${sections.badAria}
        ${sections.browserAndAtSupport}
        ${sections.mobileAndTouchSupport}
      `,
    }),
  };
};

module.exports = getHomePage;
