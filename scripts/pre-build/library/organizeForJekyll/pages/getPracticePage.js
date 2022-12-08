const getTemplateBoilerplate = require("../../getTemplateBoilerplate");

const getPracticePage = (section) => {
  return {
    fileName: `practice-${section.slug}.md`,
    fileContent: getTemplateBoilerplate({
      title: section.name,
      permalink: section.permalink,
      addBodyClass: "practice-page",
      enableSidebar: true,
      content: section.content,
    }),
  };
};

module.exports = getPracticePage;
