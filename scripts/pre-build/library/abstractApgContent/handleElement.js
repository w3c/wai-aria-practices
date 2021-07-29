const sections = require("./formatContent");

const content = {};

const getContent = () => {
  Object.keys(sections).forEach((label) => {
    if (content[label] === undefined) {
      throw new Error(
        `Failed to extract the "${label}" section from the aria-practices repo, ` +
          `which likely means the content has been renamed, replaced or removed. ` +
          `Check the formatContent.js file to see if it is possible to find the ` +
          `missing content.`
      );
    }
  });
  return content;
};

const handleElement = (element) => {
  let ignoreChildElements = false;

  Object.entries(sections).forEach(
    ([label, { identify, format, ignoreChildElements: ignore }]) => {
      if (identify(element)) {
        ignoreChildElements = ignore ?? true;
        content[label] = format(element);
      }
    }
  );

  return { ignoreChildElements };
};

module.exports = { handleElement, getContent };
