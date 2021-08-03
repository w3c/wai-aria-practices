const wrapHtmlFunction = (htmlFormatter) => {
  return (getHtmlFunction) => {
    return (...args) => {
      const html = getHtmlFunction(...args);
      return htmlFormatter(html);
    };
  };
};

module.exports = wrapHtmlFunction;
