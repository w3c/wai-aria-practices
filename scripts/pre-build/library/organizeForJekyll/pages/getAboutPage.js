const getTemplateBoilerplate = require("../../getTemplateBoilerplate");

const getAboutPage = (sections) => {
  const acknowledgements = sections.acknowledgements.content.replace(
    '<div id="insert-editors-here"></div>',
    sections.editors.content
  );
  return {
    fileName: `about.md`,
    fileContent: getTemplateBoilerplate({
      title: "About",
      permalink: `/ARIA/APG/about/`,
      content: `
        ${sections.introduction.content}
        ${sections.changelog.content}
        ${acknowledgements}
        ${sections.references.content}
      `,
    }),
  };
};

module.exports = getAboutPage;
