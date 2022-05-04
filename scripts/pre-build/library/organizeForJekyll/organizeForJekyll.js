const fs = require("fs/promises");
const path = require("path");
const getHomePage = require("./pages/getHomePage");
const getAboutPage = require("./pages/getAboutPage");
const getFundamentalsPage = require("./pages/getFundamentalsPage");
const getFundamentalPage = require("./pages/getFundamentalPage");
const getPatternsPage = require("./pages/getPatternsPage");
const getPatternPage = require("./pages/getPatternPage");

const organizeForJekyll = async ({ sections, patterns }, homepageContent) => {
  const fundamentals = [
    sections.readMeFirst,
    sections.landmarkRegions,
    sections.namesAndDescriptions,
    sections.keyboardInterface,
    sections.gridAndTableProperties,
    sections.rangeRelatedProperties,
    combineFundamentals(
      [sections.presentationRole, sections.childrenPresentational],
      { slug: "hiding-semantics", name: "Hiding Semantics" }
    ),
  ];

  const pages = [
    getHomePage(homepageContent),
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

const combineFundamentals = (fundamentals, overrides = {}) => {
  return {
    slug: overrides.slug ?? fundamentals[0].slug,
    name: overrides.name ?? fundamentals[0].name,
    permalink: overrides.permalink ?? fundamentals[0].permalink,
    introduction: overrides.introduction ?? fundamentals[0].introduction,
    outline:
      overrides.outline ??
      fundamentals.map((fundamental) => ({
        slug: fundamental.slug,
        name: fundamental.name,
      })),
    content:
      overrides.content ??
      fundamentals.map((fundamental) => fundamental.content).join(" "),
  };
};

module.exports = organizeForJekyll;
