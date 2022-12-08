const sectionFormatters = require("./formatContent");
const patternFormatters = require("./formatPatterns");
const wrapTablesWithResponsiveDiv = require("./wrapTablesWithResponsiveDiv");

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

  const formatElement = (element, formatter) => ({
    permalink: formatter.permalink,
    permalinkReplacesFormerAnchorId: formatter.permalinkReplacesFormerAnchorId,
    slug: formatter.slug,
    name: formatter.getName?.(element),
    introduction: formatter.getIntroduction?.(element),
    content: wrapTablesWithResponsiveDiv(formatter.getContent?.(element)),
  });

  Object.entries(sectionFormatters).forEach(([label, formatter]) => {
    if (formatter.identify(element)) {
      foundMatch = true;
      ignoreChildElements = true;
      sections[label] = formatElement(element, formatter);
    }
  });

  patternFormatters.forEach((formatter) => {
    if (formatter.identify(element)) {
      foundMatch = true;
      ignoreChildElements = true;
      patterns.push(formatElement(element, formatter));
    }
  });

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
