const wrapHtmlFunction = require("../../utilities/wrapHtmlFunction");

const removeSectionNumbers = wrapHtmlFunction((html) => {
  return (
    html
      // Removes numbers like 3. or 3.22
      // Also removes letters like A. B.
      .replace(/<bdi class="secno">[\w\.]* <\/bdi>/g, "")
      .replace(/<a class="self-link" [^>]*><\/a>/g, "")
  );
});

module.exports = removeSectionNumbers;
