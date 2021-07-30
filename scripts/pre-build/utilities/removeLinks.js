const removeLinks = (htmlGenerator) => {
  return (...args) => {
    return htmlGenerator(...args)
      .replace(/<a ?[^>]*>/g, "") // opening a tags
      .replace(/<\/a>/g, "");
  };
};

module.exports = removeLinks;
