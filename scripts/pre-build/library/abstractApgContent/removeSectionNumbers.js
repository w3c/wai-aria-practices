const wrapHtmlFunction = require("../../utilities/wrapHtmlFunction");

const removeSectionNumbers = wrapHtmlFunction((html) => {
  return html.replace(/<bdi class="secno">\d+\.\d* <\/bdi>/g, "");
});

module.exports = removeSectionNumbers;
