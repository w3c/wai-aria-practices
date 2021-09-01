const fuzzysearchSensitive = require("fuzzysearch");
const removeSectionNumbers = require("./removeSectionNumbers");
const getIntroductionFormatter = require("./formatIntroduction");
const removeLinks = require("../../utilities/removeLinks");
const renumberHeadings = require("../../utilities/renumberHeadings");

// Why is fuzzysearch case sensitive? Seems a bit strange!
const fuzzysearch = (needle, haystack) =>
  fuzzysearchSensitive(needle, haystack.toLowerCase());

const getFundamentalOutline = (element) => {
  return element.querySelectorAll("h3").map((h3) => ({
    slug: h3.getAttribute("id"),
    // Sorry this is a bit awkward
    name: removeSectionNumbers(() => h3.innerHTML)(),
  }));
};

const sections = {
  title: {
    identify: (element) => element.tagName === "TITLE",
    format: (element) => element.innerHTML,
  },
  abstract: {
    identify: (element) => element.getAttribute("id") === "abstract",
    format: (element) => {
      if (!element.querySelector("h2")) {
        element.insertAdjacentHTML("afterbegin", "<h2>Abstract</h2>");
      }
      return element.outerHTML;
    },
  },
  introduction: {
    identify: (element) => element.getAttribute("id") === "intro",
    format: removeSectionNumbers((element) => {
      return element.outerHTML;
    }),
  },
  badAria: {
    identify: (element) => {
      const headlineElement = element.querySelector("h1,h2,h3,h4");
      return (
        headlineElement &&
        fuzzysearch(
          "no aria is better than bad aria",
          headlineElement.textContent
        )
      );
    },
    format: removeSectionNumbers(
      renumberHeadings(-1, (element) => {
        return element.outerHTML;
      })
    ),
  },
  browserAndAtSupport: {
    identify: (element) => {
      const headlineElement = element.querySelector("h1,h2,h3,h4");
      return (
        headlineElement &&
        fuzzysearch("browser and at support", headlineElement.textContent)
      );
    },
    format: removeSectionNumbers(
      renumberHeadings(-1, (element) => {
        return element.outerHTML;
      })
    ),
  },
  mobileAndTouchSupport: {
    identify: (element) => {
      const headlineElement = element.querySelector("h1,h2,h3,h4");
      return (
        headlineElement &&
        fuzzysearch("mobile and touch support", headlineElement.textContent)
      );
    },
    format: removeSectionNumbers(
      renumberHeadings(-1, (element) => {
        return element.outerHTML;
      })
    ),
  },

  landmarkRegions: {
    slug: "landmark-regions",
    identify: (element) => element.getAttribute("id") === "aria_landmark",
    getName: removeLinks(
      removeSectionNumbers((element) => element.querySelector("h2").innerHTML)
    ),
    formatIntroduction: getIntroductionFormatter("landmark-regions"),
    getOutline: getFundamentalOutline,
    format: removeSectionNumbers((element) => {
      element.setAttribute("id", "landmark-regions");
      return element.outerHTML;
    }),
  },
  namesAndDescriptions: {
    slug: "names-and-descriptions",
    identify: (element) =>
      element.getAttribute("id") === "names_and_descriptions",
    getName: removeLinks(
      removeSectionNumbers((element) => element.querySelector("h2").innerHTML)
    ),
    formatIntroduction: getIntroductionFormatter("names-and-descriptions"),
    getOutline: getFundamentalOutline,
    format: removeSectionNumbers((element) => {
      element.setAttribute("id", "names-and-descriptions");
      return element.outerHTML;
    }),
  },
  keyboardInterface: {
    slug: "keyboard-interface",
    identify: (element) => element.getAttribute("id") === "keyboard",
    getName: removeLinks(
      removeSectionNumbers((element) => element.querySelector("h2").innerHTML)
    ),
    formatIntroduction: getIntroductionFormatter("keyboard-interface"),
    getOutline: getFundamentalOutline,
    format: removeSectionNumbers((element) => {
      element.setAttribute("id", "keyboard-interface");
      return element.outerHTML;
    }),
  },
  gridAndTableProperties: {
    slug: "grid-and-table-properties",
    identify: (element) =>
      element.getAttribute("id") === "gridAndTableProperties",
    getName: removeLinks(
      removeSectionNumbers((element) => element.querySelector("h2").innerHTML)
    ),
    formatIntroduction: getIntroductionFormatter("grid-and-table-properties"),
    getOutline: getFundamentalOutline,
    format: removeSectionNumbers((element) => {
      element.setAttribute("id", "grid-and-table-properties");
      return element.outerHTML;
    }),
  },
  rangeRelatedProperties: {
    slug: "range-related-properties",
    identify: (element) =>
      element.getAttribute("id") === "range_related_properties",
    getName: removeLinks(
      removeSectionNumbers((element) => element.querySelector("h2").innerHTML)
    ),
    formatIntroduction: getIntroductionFormatter("range-related-properties"),
    getOutline: getFundamentalOutline,
    format: removeSectionNumbers((element) => {
      element.setAttribute("id", "range-related-properties");
      return element.outerHTML;
    }),
  },
  presentationRole: {
    slug: "presentation-role",
    identify: (element) => element.getAttribute("id") === "presentation_role",
    getName: removeLinks(
      removeSectionNumbers((element) => element.querySelector("h2").innerHTML)
    ),
    formatIntroduction: getIntroductionFormatter("presentation-role"),
    getOutline: getFundamentalOutline,
    format: removeSectionNumbers((element) => {
      element.setAttribute("id", "presentation-role");
      return element.outerHTML;
    }),
  },
  childrenPresentational: {
    slug: "children-presentational",
    identify: (element) =>
      element.getAttribute("id") === "children_presentational",
    getName: removeLinks(
      removeSectionNumbers((element) => element.querySelector("h2").innerHTML)
    ),
    formatIntroduction: getIntroductionFormatter("children-presentational"),
    getOutline: getFundamentalOutline,
    format: removeSectionNumbers((element) => {
      element.setAttribute("id", "children-presentational");
      return element.outerHTML;
    }),
  },

  documentMeta: {
    identify: (element) => element.classList.contains("head"),
    format: (element) => {
      return element.querySelector("dl").outerHTML;
    },
  },

  documentStatus: {
    identify: (element) => element.getAttribute("id") === "sotd",
    format: (element) => {
      return element.outerHTML;
    },
  },

  changelog: {
    identify: (element) => element.getAttribute("id") === "change_log",
    format: removeSectionNumbers((element) => {
      return element.outerHTML;
    }),
  },

  acknowledgements: {
    identify: (element) => element.getAttribute("id") === "acknowledgements",
    format: removeSectionNumbers((element) => {
      return element.outerHTML;
    }),
  },

  references: {
    identify: (element) => element.getAttribute("id") === "references",
    format: removeSectionNumbers((element) => {
      return element.outerHTML;
    }),
  },
};

module.exports = sections;
