const getTemplateBoilerplate = require("../../getTemplateBoilerplate");

const getHomePage = (sections) => {
  return {
    fileName: `index.md`,
    fileContent: getTemplateBoilerplate({
      title: sections.title.content,
      permalink: `/`,
      content: `
        ${sections.abstract.content}
        ${sections.introduction.content}
        ${sections.badAria.content}
        ${sections.browserAndAtSupport.content}
        ${sections.mobileAndTouchSupport.content}
      `,
    }),
  };
};

module.exports = getHomePage;
