const wrapHtmlFunction = require("./wrapHtmlFunction");

const removeLinks = wrapHtmlFunction((html) => {
  return html
    .replace(/<a(?!\w)[^>]*>/g, "") // opening a tags
    .replace(/<\/a>/g, "");
});

module.exports = removeLinks;
