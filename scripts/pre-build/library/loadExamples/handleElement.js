const walkHtmlElements = require("../../utilities/walkHtmlElements");
const { fixLink } = require("../abstractApgContent/fixLinks");

let title;
let head;
let body;

const getContent = () => {
  return { title, head, body };
};

const getHandleElement = (permalink) => (element) => {
  if (element.tagName === "HEAD") {
    walkHtmlElements(element, handleHeadElement);
    head = element.innerHTML;
    return { ignoreChildElements: true };
  }

  if (element.tagName === "BODY") {
    if (permalink === "/index/") editIndexPage(element);
    walkHtmlElements(element, getHandleBodyElement(permalink));
    body = removeMainTag(element.innerHTML);
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
  if (element.tagName === "H1") {
    title = element.innerHTML;
    element.remove();
  }

  const isLink = element.tagName === "A" && element.getAttribute("href");
  if (isLink) {
    const href = element.getAttribute("href");
    const isPageLink = href.startsWith("#");
    if (!isPageLink) {
      fixLink(element, permalink, permalink);
    }
  }
};

const removeMainTag = (body) => {
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
