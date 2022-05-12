const getTemplateBoilerplate = require("../../getTemplateBoilerplate");

const getHomePage = (homepageContent) => {
  return {
    fileName: `index.md`,
    fileContent: getTemplateBoilerplate({
      title: "ARIA Authoring Practices Guide",
      permalink: `/ARIA/APG/`,
      footerForkAndEditOnGithubPath: "index.html",
      content: homepageContent,
    }),
  };
};

module.exports = getHomePage;
