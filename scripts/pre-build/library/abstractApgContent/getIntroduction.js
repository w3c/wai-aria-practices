const fuzzysearchSensitive = require("fuzzysearch");
const removeLinks = require("../../utilities/removeLinks");

const getIntroductionFormatter = (slug) =>
  removeLinks((element) => {
    // Some design patterns start with a NOTE.
    let firstParagraphElement;
    const firstP = element.querySelector("p");
    if (fuzzysearchSensitive("NOTE:", firstP.textContent)) {
      firstParagraphElement = element.querySelectorAll("p")[1];
    } else {
      firstParagraphElement = firstP;
    }

    const firstParagraph = firstParagraphElement.innerHTML;

    // The first period followed by a non-letter or the ending period.
    const periodMatch = /(\.[^\w]|\.$)/.exec(firstParagraph);
    const incompleteSentence = periodMatch === null;
    if (incompleteSentence) {
      switch (slug) {
        case "grid-and-table-properties":
          return (
            "<!-- The following is manually overridden by the " +
            "pre-build script -->\n" +
            "To fully present and describe a grid or table, in addition " +
            "to parsing the headers, rows, and cells using the roles " +
            "described in the grid pattern or table pattern, assistive " +
            "technologies need to be able to determine the number of " +
            "rows and columns and other factors."
          );
        case "range-related-properties":
          return (
            "<!-- The following is manually overridden by the " +
            "pre-build script -->\n" +
            "ARIA defines the roles like meter, progressbar and scrollbar " +
            "as range widgets, which means they communicate a value that is " +
            "typically numeric and constrained to defined limits."
          );
        case "checkbox":
          return (
            "<!-- The following is manually overridden by the " +
            "pre-build script -->\n" +
            "WAI-ARIA supports two types of " +
            '<a href="#checkbox" class="role-reference">checkbox</a> ' +
            "widgets: dual-state allows the user to toggle between two " +
            " choices -- checked and not checked -- and tri-state " +
            "supports an additional third state known as partially checked."
          );
        default:
          throw new Error(
            `Failed to build introductory text for the pattern ` +
              `"${slug}". This may be due to the fact the first ` +
              `paragraph not a complete sentence.`
          );
      }
    }

    const endOfSentence = periodMatch.index + 1;
    const firstSentence = firstParagraph.substr(0, endOfSentence);
    return firstSentence;
  });

module.exports = getIntroductionFormatter;
