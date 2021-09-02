const getTemplateBoilerplate = require("../../getTemplateBoilerplate");

const getPatternPage = (pattern) => {
  return {
    fileName: `pattern-${pattern.slug}.md`,
    fileContent: getTemplateBoilerplate({
      title: pattern.name,
      permalink: pattern.permalink,
      content: pattern.content,
    }),
  };
};

module.exports = getPatternPage;
