const fuzzysearchOriginal = require("fuzzysearch");

// Why is fuzzysearch case sensitive? Seems a bit strange!
const fuzzysearch = (needle, haystack) =>
  fuzzysearchOriginal(needle, haystack.toLowerCase());

const sections = {
  /* title: {
    identify: (element) => element.tagName === "TITLE",
    format: (element) => element.innerHTML,
  }, */
  abstract: {
    identify: (element) => element.getAttribute("id") === "abstract",
    format: (element) => {
      if (!element.querySelector("h2")) {
        element.insertAdjacentHTML("afterbegin", `<h2>Abstract</h2>`);
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

  accordionPattern: {
    identify: (element) =>
      element.classList.contains("widget") &&
      element.getAttribute("id") === "accordion",
    format: (element) => element.outerHTML,
  },

  accordionIntroduction: {
    identify: (element) =>
      element.classList.contains("widget") &&
      element.getAttribute("id") === "accordion",
    format: (element) => {
      return element.querySelector("p").innerHTML;
    },
  },
};

module.exports = sections;
