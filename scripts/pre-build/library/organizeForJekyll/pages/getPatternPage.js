const getTemplateBoilerplate = require("../../getTemplateBoilerplate");

const getPatternPage = (pattern) => {
  return {
    fileName: `pattern-${pattern.slug}.md`,
    fileContent: getTemplateBoilerplate({
      title: pattern.name,
      permalink: `/patterns/${pattern.slug}/`,
      content: pattern.page,
    }),
  };
};

module.exports = getPatternPage;
