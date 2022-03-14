const fuzzysearchSensitive = require("fuzzysearch");
const removeSectionNumbers = require("./removeSectionNumbers");
const getIntroductionFormatter = require("./getIntroduction");
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
    getContent: (element) => element.innerHTML,
  },
  abstract: {
    permalink: "/about/",
    identify: (element) => element.getAttribute("id") === "abstract",
    getContent: (element) => {
      if (!element.querySelector("h2")) {
        element.insertAdjacentHTML("afterbegin", "<h2>Abstract</h2>");
      }
      return element.outerHTML;
    },
  },
  introduction: {
    permalink: "/about/",
    identify: (element) => element.getAttribute("id") === "intro",
    getContent: removeSectionNumbers((element) => {
      return element.outerHTML;
    }),
  },
  badAria: {
    permalink: "/about/",
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
    getContent: removeSectionNumbers(
      renumberHeadings(-1, (element) => {
        return element.outerHTML;
      })
    ),
  },
  browserAndAtSupport: {
    permalink: "/about/",
    identify: (element) => {
      const headlineElement = element.querySelector("h1,h2,h3,h4");
      return (
        headlineElement &&
        fuzzysearch("browser and at support", headlineElement.textContent)
      );
    },
    getContent: removeSectionNumbers(
      renumberHeadings(-1, (element) => {
        return element.outerHTML;
      })
    ),
  },
  mobileAndTouchSupport: {
    permalink: "/about/",
    identify: (element) => {
      const headlineElement = element.querySelector("h1,h2,h3,h4");
      return (
        headlineElement &&
        fuzzysearch("mobile and touch support", headlineElement.textContent)
      );
    },
    getContent: removeSectionNumbers(
      renumberHeadings(-1, (element) => {
        return element.outerHTML;
      })
    ),
  },

  landmarkRegions: {
    permalink: "/fundamentals/landmark-regions/",
    permalinkReplacesFormerAnchorId: "aria_landmark",
    slug: "landmark-regions",
    identify: (element) => element.getAttribute("id") === "aria_landmark",
    getName: removeLinks(
      removeSectionNumbers((element) => element.querySelector("h2").innerHTML)
    ),
    getIntroduction: getIntroductionFormatter("landmark-regions"),
    getOutline: getFundamentalOutline,
    getContent: removeSectionNumbers((element) => {
      return element.outerHTML;
    }),
  },
  namesAndDescriptions: {
    permalink: "/fundamentals/names-and-descriptions/",
    permalinkReplacesFormerAnchorId: "names_and_descriptions",
    slug: "names-and-descriptions",
    identify: (element) =>
      element.getAttribute("id") === "names_and_descriptions",
    getName: removeLinks(
      removeSectionNumbers((element) => element.querySelector("h2").innerHTML)
    ),
    getIntroduction: getIntroductionFormatter("names-and-descriptions"),
    getOutline: getFundamentalOutline,
    getContent: removeSectionNumbers((element) => {
      return element.outerHTML;
    }),
  },
  keyboardInterface: {
    permalink: "/fundamentals/keyboard-interface/",
    permalinkReplacesFormerAnchorId: "keyboard",
    slug: "keyboard-interface",
    identify: (element) => element.getAttribute("id") === "keyboard",
    getName: removeLinks(
      removeSectionNumbers((element) => element.querySelector("h2").innerHTML)
    ),
    getIntroduction: getIntroductionFormatter("keyboard-interface"),
    getOutline: getFundamentalOutline,
    getContent: removeSectionNumbers((element) => {
      return element.outerHTML;
    }),
  },
  gridAndTableProperties: {
    permalink: "/fundamentals/grid-and-table-properties/",
    permalinkReplacesFormerAnchorId: "gridAndTableProperties",
    slug: "grid-and-table-properties",
    identify: (element) =>
      element.getAttribute("id") === "gridAndTableProperties",
    getName: removeLinks(
      removeSectionNumbers((element) => element.querySelector("h2").innerHTML)
    ),
    getIntroduction: getIntroductionFormatter("grid-and-table-properties"),
    getOutline: getFundamentalOutline,
    getContent: removeSectionNumbers((element) => {
      return element.outerHTML;
    }),
  },
  rangeRelatedProperties: {
    permalink: "/fundamentals/range-related-properties/",
    permalinkReplacesFormerAnchorId: "range_related_properties",
    slug: "range-related-properties",
    identify: (element) =>
      element.getAttribute("id") === "range_related_properties",
    getName: removeLinks(
      removeSectionNumbers((element) => element.querySelector("h2").innerHTML)
    ),
    getIntroduction: getIntroductionFormatter("range-related-properties"),
    getOutline: getFundamentalOutline,
    getContent: removeSectionNumbers((element) => {
      return element.outerHTML;
    }),
  },
  presentationRole: {
    permalink: "/fundamentals/hiding-semantics/",
    slug: "presentation-role",
    identify: (element) => element.getAttribute("id") === "presentation_role",
    getName: removeLinks(
      removeSectionNumbers((element) => element.querySelector("h2").innerHTML)
    ),
    getIntroduction: getIntroductionFormatter("presentation-role"),
    getOutline: getFundamentalOutline,
    getContent: removeSectionNumbers((element) => {
      element.setAttribute("id", "presentation-role");
      return element.outerHTML;
    }),
  },
  childrenPresentational: {
    permalink: "/fundamentals/hiding-semantics/",
    slug: "children-presentational",
    identify: (element) =>
      element.getAttribute("id") === "children_presentational",
    getName: removeLinks(
      removeSectionNumbers((element) => element.querySelector("h2").innerHTML)
    ),
    getIntroduction: getIntroductionFormatter("children-presentational"),
    getOutline: getFundamentalOutline,
    getContent: removeSectionNumbers((element) => {
      element.setAttribute("id", "children-presentational");
      return element.outerHTML;
    }),
  },

  documentMeta: {
    permalink: "/about/",
    identify: (element) => element.classList.contains("head"),
    getContent: (element) => {
      return element.querySelector("dl").outerHTML;
    },
  },

  documentStatus: {
    permalink: "/about/",
    identify: (element) => element.getAttribute("id") === "sotd",
    getContent: (element) => {
      return element.outerHTML;
    },
  },

  changelog: {
    permalink: "/about/",
    identify: (element) => element.getAttribute("id") === "change_log",
    getContent: removeSectionNumbers((element) => {
      return element.outerHTML;
    }),
  },

  acknowledgements: {
    permalink: "/about/",
    identify: (element) => element.getAttribute("id") === "acknowledgements",
    getContent: removeSectionNumbers((element) => {
      return element.outerHTML;
    }),
  },

  references: {
    permalink: "/about/",
    identify: (element) => element.getAttribute("id") === "references",
    getContent: removeSectionNumbers((element) => {
      return element.outerHTML;
    }),
  },
};

module.exports = sections;
