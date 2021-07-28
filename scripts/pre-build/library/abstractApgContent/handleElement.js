const sections = require("./formatContent");

const content = {};

const getContent = () => content;

const handleElement = (element) => {
  let ignoreChildElements = false;

  Object.entries(sections).forEach(([label, { identify, format }]) => {
    if (identify(element)) {
      ignoreChildElements = true;
      content[label] = format(element);
    }
  });

  return { ignoreChildElements };
};

module.exports = { handleElement, getContent };
