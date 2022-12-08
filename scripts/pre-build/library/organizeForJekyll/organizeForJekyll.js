const fs = require("fs/promises");
const path = require("path");
const getHomePage = require("./pages/getHomePage");
const getAboutPage = require("./pages/getAboutPage");
const getPracticesPage = require("./pages/getPracticesPage");
const getPracticePage = require("./pages/getPracticePage");
const getPatternsPage = require("./pages/getPatternsPage");
const getPatternPage = require("./pages/getPatternPage");

const organizeForJekyll = async ({ sections, patterns }, homepageContent) => {
  const practices = [
    sections.readMeFirst,
    sections.landmarkRegions,
    sections.namesAndDescriptions,
    sections.keyboardInterface,
    sections.gridAndTableProperties,
    sections.rangeRelatedProperties,
    sections.structuralRoles,
    combinePractices(
      [sections.presentationRole, sections.childrenPresentational],
      { slug: "hiding-semantics", name: "Hiding Semantics" }
    ),
  ];

  const pages = [
    getHomePage(homepageContent),
    getAboutPage(sections),
    getPatternsPage(patterns),
    ...patterns.map((pattern) => getPatternPage(pattern)),
    getPracticesPage(practices),
    ...practices.map((practice) => getPracticePage(practice)),
  ];

  await Promise.all(
    pages.map(({ fileName, fileContent }) => {
      const filePath = path.resolve(__dirname, "../../../../content", fileName);
      return fs.writeFile(filePath, fileContent);
    })
  );
};

const combinePractices = (practices, overrides = {}) => {
  return {
    slug: overrides.slug ?? practices[0].slug,
    name: overrides.name ?? practices[0].name,
    permalink: overrides.permalink ?? practices[0].permalink,
    introduction: overrides.introduction ?? practices[0].introduction,
    content:
      overrides.content ??
      practices.map((practice) => practice.content).join(" "),
  };
};

module.exports = organizeForJekyll;
