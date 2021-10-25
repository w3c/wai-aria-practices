const fs = require("fs/promises");
const path = require("path");
const getHomePage = require("./pages/getHomePage");
const getAboutPage = require("./pages/getAboutPage");
const getFundamentalsPage = require("./pages/getFundamentalsPage");
const getFundamentalPage = require("./pages/getFundamentalPage");
const getPatternsPage = require("./pages/getPatternsPage");
const getPatternPage = require("./pages/getPatternPage");

const organizeForJekyll = async ({ sections, patterns }) => {
  const fundamentals = [
    sections.landmarkRegions,
    sections.namesAndDescriptions,
    sections.keyboardInterface,
    sections.gridAndTableProperties,
    sections.rangeRelatedProperties,
    {
      slug: "hiding-semantics",
      name: "Hiding Semantics",
      permalink: "/fundamentals/hiding-semantics/",
      introduction: sections.presentationRole.introduction,
      outline: [
        {
          slug: sections.presentationRole.slug,
          name: sections.presentationRole.name,
        },
        {
          slug: sections.childrenPresentational.slug,
          name: sections.childrenPresentational.name,
        },
      ],
      content: `
        ${sections.presentationRole.content}
        ${sections.childrenPresentational.content}
      `,
    },
  ];

  const pages = [
    getHomePage(sections),
    getAboutPage(sections),
    getPatternsPage(patterns),
    ...patterns.map((pattern) => getPatternPage(pattern)),
    getFundamentalsPage(fundamentals),
    ...fundamentals.map((fundamental) => getFundamentalPage(fundamental)),
  ];

  await Promise.all(
    pages.map(({ fileName, fileContent }) => {
      const filePath = path.resolve(__dirname, "../../../../content", fileName);
      return fs.writeFile(filePath, fileContent);
    })
  );
};

module.exports = organizeForJekyll;
