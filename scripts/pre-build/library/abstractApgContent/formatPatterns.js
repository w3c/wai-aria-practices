const fuzzysearchSensitive = require("fuzzysearch");
const removeLinks = require("../../utilities/removeLinks");
const removeSectionNumbers = require("./removeSectionNumbers");

const patterns = [
  {
    oldSlug: "accordion",
    newSlug: "accordion",
  },
  {
    oldSlug: "alert",
    newSlug: "alert",
  },
  {
    oldSlug: "alertdialog",
    newSlug: "alertdialog",
  },
  {
    oldSlug: "breadcrumb",
    newSlug: "breadcrumb",
  },
  {
    oldSlug: "button",
    newSlug: "button",
  },
  {
    oldSlug: "carousel",
    newSlug: "carousel",
  },
  {
    oldSlug: "checkbox",
    newSlug: "checkbox",
  },
  {
    oldSlug: "combobox",
    newSlug: "combobox",
  },
  {
    oldSlug: "dialog_modal",
    newSlug: "dialogmodal",
  },
  {
    oldSlug: "disclosure",
    newSlug: "disclosure",
  },
  {
    oldSlug: "feed",
    newSlug: "feed",
  },
  {
    oldSlug: "grid",
    newSlug: "grid",
  },
  {
    oldSlug: "link",
    newSlug: "link",
  },
  {
    oldSlug: "Listbox",
    newSlug: "listbox",
  },
  {
    oldSlug: "menu",
    newSlug: "menu",
  },
  {
    oldSlug: "menubutton",
    newSlug: "menubutton",
  },
  {
    oldSlug: "meter",
    newSlug: "meter",
  },
  {
    oldSlug: "radiobutton",
    newSlug: "radiobutton",
  },
  {
    oldSlug: "slider",
    newSlug: "slider",
  },
  {
    oldSlug: "slidertwothumb",
    newSlug: "slidertwothumb",
  },
  {
    oldSlug: "spinbutton",
    newSlug: "spinbutton",
  },
  {
    oldSlug: "table",
    newSlug: "table",
  },
  {
    oldSlug: "tabpanel",
    newSlug: "tabpanel",
  },
  {
    oldSlug: "toolbar",
    newSlug: "toolbar",
  },
  {
    oldSlug: "tooltip",
    newSlug: "tooltip",
  },
  {
    oldSlug: "TreeView",
    newSlug: "treeview",
  },
  {
    oldSlug: "treegrid",
    newSlug: "treegrid",
  },
  {
    oldSlug: "windowsplitter",
    newSlug: "windowsplitter",
  },
];

const patternFormatters = patterns.map(({ oldSlug, newSlug }) => {
  return {
    slug: newSlug,

    identify: (element) =>
      element.classList.contains("widget") &&
      element.getAttribute("id") === oldSlug,

    formatName: removeLinks(
      removeSectionNumbers((element) => element.querySelector("h3").innerHTML)
    ),

    formatPage: removeSectionNumbers((element) => element.outerHTML),

    formatIntroduction: removeLinks((element) => {
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
        switch (newSlug) {
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
                `"${newSlug}". This may be due to the fact the first ` +
                `paragraph not a complete sentence.`
            );
        }
      }

      const endOfSentence = periodMatch.index + 1;
      const firstSentence = firstParagraph.substr(0, endOfSentence);
      return firstSentence;
    }),
  };
});

module.exports = patternFormatters;
