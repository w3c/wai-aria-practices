const removeConflictingCss = (html) => {
  const cssToRemove = html.querySelectorAll("link").filter((element) => {
    return (
      element
        .toString()
        .includes("https://www.w3.org/StyleSheets/TR/2016/base.css") ||
      element.toString().includes("shared/css/core.css")
    );
  });
  cssToRemove.forEach((cssLink) => {
    cssLink.remove();
  });
};

module.exports = removeConflictingCss;
