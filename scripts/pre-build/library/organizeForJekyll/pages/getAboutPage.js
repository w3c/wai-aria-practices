const getTemplateBoilerplate = require("../getTemplateBoilerplate");

const getAboutPage = (sections) => {
  return {
    fileName: `about.md`,
    fileContent: getTemplateBoilerplate({
      title: "About",
      permalink: `/about/`,
      content: `
        ${sections.documentMeta.content}
      `,
    }),
  };
};

module.exports = getAboutPage;
