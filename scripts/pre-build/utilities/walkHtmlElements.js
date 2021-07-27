const walkHtmlElements = (element, callback) => {
  element.childNodes?.forEach((element) => {
    if (element.tagName) {
      const { findChildElements = true } = callback(element) || {};
      if (findChildElements) {
        walkHtmlElements(element, callback);
      }
    }
  });
};

module.exports = walkHtmlElements;
