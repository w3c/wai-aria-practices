const getTemplateBoilerplate = require("../../getTemplateBoilerplate");

const getHomePage = (homepageContent) => {
  return {
    fileName: `index.md`,
    fileContent: getTemplateBoilerplate({
      title: "ARIA Authoring Practices Guide",
      permalink: `/`,
      content: `
        <style>
          body {
            background: white;
          }
          h1 {
            color: white;
          }
          header {
            display: none;
          }
          body > .nav-container + .default-grid {
            display: block;
            padding: 0;
          }
          body > .default-grid.nav-container {
            margin-bottom: 0;
          }
          h2 {
            border-bottom: none;
          }
          .box.box-space-above {
            margin-top: 35px;
          }
        </style>
        ${homepageContent}`,
    }),
  };
};

module.exports = getHomePage;
