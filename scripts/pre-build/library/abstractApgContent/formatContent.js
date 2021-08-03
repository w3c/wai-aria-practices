const fuzzysearchOriginal = require("fuzzysearch");

// Why is fuzzysearch case sensitive? Seems a bit strange!
const fuzzysearch = (needle, haystack) =>
  fuzzysearchOriginal(needle, haystack.toLowerCase());

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
    format: (element) => {
      return element.outerHTML;
    },
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
    format: (element) => {
      return element.outerHTML
        .replace(/<h3>/g, "<h2>")
        .replace(/<\/h3>/g, "</h2>")
        .replace(/<h4>/g, "<h3>")
        .replace(/<\/h4>/g, "</h3>");
    },
  },
  browserAndAtSupport: {
    identify: (element) => {
      const headlineElement = element.querySelector("h1,h2,h3,h4");
      return (
        headlineElement &&
        fuzzysearch("browser and at support", headlineElement.textContent)
      );
    },
    format: (element) => {
      return element.outerHTML
        .replace(/<h3>/g, "<h2>")
        .replace(/<\/h3>/g, "</h2>")
        .replace(/<h4>/g, "<h3>")
        .replace(/<\/h4>/g, "</h3>");
    },
  },
  mobileAndTouchSupport: {
    identify: (element) => {
      const headlineElement = element.querySelector("h1,h2,h3,h4");
      return (
        headlineElement &&
        fuzzysearch("mobile and touch support", headlineElement.textContent)
      );
    },
    format: (element) => {
      return element.outerHTML
        .replace(/<h3>/g, "<h2>")
        .replace(/<\/h3>/g, "</h2>")
        .replace(/<h4>/g, "<h3>")
        .replace(/<\/h4>/g, "</h3>");
    },
  },

  landmarkRegions: {
    slug: "landmark-regions",
    identify: (element) => element.getAttribute("id") === "aria_landmark",
    getName: (element) => element.querySelector("h1,h2,h3,h4").innerHTML,
    format: (element) => {
      element.setAttribute("id", "landmark-regions");
      return element.outerHTML;
    },
  },
  namesAndDescriptions: {
    slug: "names-and-descriptions",
    identify: (element) =>
      element.getAttribute("id") === "names_and_descriptions",
    getName: (element) => element.querySelector("h1,h2,h3,h4").innerHTML,
    format: (element) => {
      element.setAttribute("id", "names-and-descriptions");
      return element.outerHTML;
    },
  },
  keyboardInterface: {
    slug: "keyboard-interface",
    identify: (element) => element.getAttribute("id") === "keyboard",
    getName: (element) => element.querySelector("h1,h2,h3,h4").innerHTML,
    format: (element) => {
      element.setAttribute("id", "keyboard-interface");
      return element.outerHTML;
    },
  },
  gridAndTableProperties: {
    slug: "grid-and-table-properties",
    identify: (element) =>
      element.getAttribute("id") === "gridAndTableProperties",
    getName: (element) => element.querySelector("h1,h2,h3,h4").innerHTML,
    format: (element) => {
      element.setAttribute("id", "grid-and-table-properties");
      return element.outerHTML;
    },
  },
  rangeRelatedProperties: {
    slug: "range-related-properties",
    identify: (element) =>
      element.getAttribute("id") === "range_related_properties",
    getName: (element) => element.querySelector("h1,h2,h3,h4").innerHTML,
    format: (element) => {
      element.setAttribute("id", "range-related-properties");
      return element.outerHTML;
    },
  },
  presentationRole: {
    slug: "presentation-role",
    identify: (element) => element.getAttribute("id") === "presentation_role",
    getName: (element) => element.querySelector("h1,h2,h3,h4").innerHTML,
    format: (element) => {
      element.setAttribute("id", "presentation-role");
      return element.outerHTML;
    },
  },
};

module.exports = sections;
