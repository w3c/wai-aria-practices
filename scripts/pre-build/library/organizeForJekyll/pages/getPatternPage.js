const getTemplateBoilerplate = require("../../getTemplateBoilerplate");

const getPatternPage = (pattern) => {
  return {
    fileName: `pattern-${pattern.slug}.md`,
    fileContent: getTemplateBoilerplate({
      title: pattern.name,
      permalink: pattern.permalink,
      enableSidebar: true,
      addBodyClass: "pattern-page",
      content: pattern.content,
    }),
  };
};

module.exports = getPatternPage;
