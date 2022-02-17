const { kebabCase } = require("lodash");
const walkHtmlElements = require("../../utilities/walkHtmlElements");
const { fixLink } = require("../abstractApgContent/fixLinks");
const wrapTablesWithResponsiveDiv = require("../abstractApgContent/wrapTablesWithResponsiveDiv");

let title;
let head;
let body;
let patternSlug;
let outline;
let relatedLinks;

const getContent = () => {
  const response = { title, head, body, patternSlug, outline, relatedLinks };
  title = undefined;
  head = undefined;
  body = undefined;
  patternSlug = undefined;
  outline = undefined;
  relatedLinks = undefined;
  return response;
};

const getHandleElement = (permalink) => (element) => {
  if (element.tagName === "HEAD") {
    walkHtmlElements(element, handleHeadElement);
    head = element.innerHTML;
    return { ignoreChildElements: true };
  }

  if (element.tagName === "BODY") {
    walkHtmlElements(element, getHandleBodyElement(permalink));

    if (permalink === "/index/") {
      editIndexPage(element);
    } else {
      if (!patternSlug) {
        throw new Error(
          `Expected to find at least one link to a pattern in the example ` +
            `with permalink ${permalink} but none were found`
        );
      }

      const img = `<img 
        alt=""
        src="/assets/img/${patternSlug}.svg"
        class="example-page-example-icon"
      />`;
      if (element.querySelector(".advisement")) {
        element
          .querySelector(".advisement")
          .insertAdjacentHTML("afterend", img);
      } else {
        element.insertAdjacentHTML("afterbegin", img);
      }

      element.insertAdjacentHTML(
        "afterbegin",
        '<h2 class="followed-by-support-notice">About This Example</h2>'
      );

      const relatedLinksElement = element.querySelector(
        '[aria-label="Related Links"]'
      );
      if (!relatedLinksElement) {
        throw new Error(
          "Found example that does not follow the expected formatting. The " +
            "pre-build script must be updated."
        );
      }
      relatedLinksElement.querySelector("ul").classList.add("sidebar-list");
      relatedLinksElement
        .querySelector("ul")
        .classList.add("sidebar-list-yellow");
      relatedLinks = relatedLinksElement.innerHTML;
      relatedLinksElement.remove();
    }

    outline = [];
    element.querySelectorAll("h2").forEach((h2) => {
      const isHeadlinePartOfExample = (() => {
        const previousHeadline = outline[outline.length - 1]?.name;
        return (
          previousHeadline === "Example" &&
          !(
            h2.textContent === "Accessibility Features" ||
            h2.textContent === "Keyboard Support"
          )
        );
      })();
      if (isHeadlinePartOfExample) return;
      const name = h2.textContent;
      const slug = h2.getAttribute("id") ?? kebabCase(h2.textContent);
      h2.setAttribute("tabindex", "-1");
      if (!h2.getAttribute("id")) h2.setAttribute("id", slug);
      outline.push({ name, slug });
    });
    if (outline[outline.length - 1].name === "Example") {
      throw new Error(
        "Found example that does not follow the expected formatting. The " +
          "pre-build script must be updated."
      );
    }

    body = wrapTablesWithResponsiveDiv(
      removeDuplicateMainTag(element.innerHTML)
    );

    return { ignoreChildElements: true };
  }
};

const handleHeadElement = (element) => {
  if (
    element.tagName === "META" ||
    element.tagName === "TITLE" ||
    (element.tagName === "LINK" &&
      (element.getAttribute("href") ===
        "https://www.w3.org/StyleSheets/TR/2016/base.css" ||
        element.getAttribute("href").includes("core.css")))
  ) {
    element.remove();
  }
};

const getHandleBodyElement = (permalink) => (element) => {
  if (element.tagName === "H1" && !title /* some examples have two h1s */) {
    title = element.innerHTML;
    element.remove();
  }

  const isLink = element.tagName === "A" && element.getAttribute("href");
  if (isLink) {
    const href = element.getAttribute("href");
    const isPageLink = href.startsWith("#");
    if (!isPageLink) {
      fixLink(element, permalink, permalink);

      const patternMatch = element
        .getAttribute("href")
        .match(/\/patterns\/([^/]+)\/?/);
      const isPatternLink = !!patternMatch;
      if (!patternSlug && isPatternLink) patternSlug = patternMatch[1];
    }
  }
};

const removeDuplicateMainTag = (body) => {
  return body.replace(/<main/, "<div").replace(/<\/main>/, "</div>");
};

const editIndexPage = (element) => {
  if (
    !element
      .querySelector("p")
      .textContent.includes("This page includes the following indexes") ||
    !element
      .querySelector("nav")
      .textContent.includes("WAI-ARIA Authoring Practices") ||
    !element.querySelector("ul").textContent.includes("Examples by Role")
  ) {
    throw new Error(
      "Cannot edit content because it appears to have diverged from a " +
        "known state."
    );
  }
  element.querySelector("p").remove();
  element.querySelector("nav").remove();
  element.querySelector("ul").remove();
};

module.exports = { getHandleElement, getContent };
