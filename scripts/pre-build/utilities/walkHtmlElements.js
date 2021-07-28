const walkHtmlElements = (element, callback) => {
  element.childNodes?.forEach((element) => {
    if (element.tagName) {
      const { ignoreChildElements = false } = callback(element) || {};
      if (!ignoreChildElements) {
        walkHtmlElements(element, callback);
      }
    }
  });
};

module.exports = walkHtmlElements;
