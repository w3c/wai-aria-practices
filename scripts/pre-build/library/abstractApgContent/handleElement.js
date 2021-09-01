const sectionFormatters = require("./formatContent");
const patternFormatters = require("./formatPatterns");

const sections = {};
const patterns = [];

const getContent = () => {
  Object.keys(sectionFormatters).forEach((label) => {
    if (sections[label] === undefined) {
      throw new Error(
        `Failed to extract the "${label}" section from the aria-practices repo, ` +
          `which likely means the content has been renamed, replaced or removed. ` +
          `Check the formatContent.js file to see if it is possible to find the ` +
          `missing content.`
      );
    }
  });
  return { sections, patterns };
};

const handleElement = (element) => {
  let foundMatch = false;
  let ignoreChildElements = false;

  Object.entries(sectionFormatters).forEach(([label, formatter]) => {
    const { slug, identify, getName, getOutline, formatIntroduction, format } =
      formatter;
    if (identify(element)) {
      foundMatch = true;
      ignoreChildElements = true;
      sections[label] = {};
      if (slug) sections[label].slug = slug;
      if (getName) sections[label].name = getName(element);
      if (getOutline) sections[label].outline = getOutline(element);
      if (formatIntroduction) {
        sections[label].introduction = formatIntroduction(element);
      }
      sections[label].content = format(element);
    }
  });

  patternFormatters.forEach(
    ({ slug, identify, formatName, formatIntroduction, formatPage }) => {
      if (identify(element)) {
        foundMatch = true;
        ignoreChildElements = true;
        patterns.push({
          slug,
          name: formatName(element),
          introduction: formatIntroduction(element),
          page: formatPage(element),
        });
      }
    }
  );

  if (!foundMatch && element.classList.contains("widget")) {
    throw new Error(
      `Encountered an unknown design pattern with id ` +
        `"${element.getAttribute("id")}". If it is a new pattern it may ` +
        `be missing from formatPatterns.js.`
    );
  }

  return { ignoreChildElements };
};

module.exports = { handleElement, getContent };
