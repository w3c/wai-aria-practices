const wrapHtmlFunction = require("../../utilities/wrapHtmlFunction");

const removeSectionNumbers = wrapHtmlFunction((html) => {
  // Removes numbers like 3. or 3.22
  // Also removes letters like A. B.
  return html.replace(/<bdi class="secno">[\w\.]* <\/bdi>/g, "");
});

module.exports = removeSectionNumbers;
