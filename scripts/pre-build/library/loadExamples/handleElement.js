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
    head = element;
    walkHtmlElements(head, handleHeadElement);
    return { ignoreChildElements: true };
  }

  if (element.tagName === "BODY") {
    body = element;
    walkHtmlElements(body, getHandleBodyElement(permalink));
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

module.exports = { getHandleElement, getContent };
