const walkHtmlElements = require("../../utilities/walkHtmlElements");

let title;
let head;
let body;

const getContent = () => {
  return { title, head, body };
};

const handleElement = (element) => {
  if (element.tagName === "HEAD") {
    head = element;
    walkHtmlElements(head, handleHeadElement);
    return { ignoreChildElements: true };
  }

  if (element.tagName === "BODY") {
    body = element;
    walkHtmlElements(body, handleBodyElement);
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

const handleBodyElement = (element) => {
  if (element.tagName === "H1") {
    title = element.innerHTML;
    element.remove();
  }
};

module.exports = { handleElement, getContent };
