const getTemplateBoilerplate = require("../getTemplateBoilerplate");

const getAboutPage = (sections) => {
  return {
    fileName: `about.md`,
    fileContent: getTemplateBoilerplate({
      title: "About",
      permalink: `/about/`,
      content: `
        ${sections.documentMeta.content}
        ${sections.documentStatus.content}
        ${sections.changelog.content}
        ${sections.acknowledgements.content}
        ${sections.references.content}
      `,
    }),
  };
};

module.exports = getAboutPage;
