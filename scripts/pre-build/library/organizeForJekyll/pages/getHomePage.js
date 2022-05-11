const getTemplateBoilerplate = require("../../getTemplateBoilerplate");

const getHomePage = (homepageContent) => {
  return {
    fileName: `index.md`,
    fileContent: getTemplateBoilerplate({
      title: "ARIA Authoring Practices Guide",
      permalink: `/WAI/ARIA/APG/`,
      content: homepageContent,
    }),
  };
};

module.exports = getHomePage;
