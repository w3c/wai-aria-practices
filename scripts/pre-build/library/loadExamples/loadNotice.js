const path = require("path");
const fs = require("fs/promises");
const { parse: parseHtml } = require("node-html-parser");
const walkHtmlElements = require("../../utilities/walkHtmlElements");
const { fixLink } = require("../abstractApgContent/fixLinks");

const loadGetNotice = async ({ destinationExamplesPath }) => {
  const noticePath = path.join(destinationExamplesPath, "js", "notice.html");
  const noticeContent = await fs.readFile(noticePath, { encoding: "utf8" });

  return ({ permalink }) => {
    const root = parseHtml(noticeContent);
    const noticeRoot = root.querySelector("#support-notice");

    walkHtmlElements(noticeRoot, (element) => {
      const isLink = element.tagName === "A" && element.getAttribute("href");
      if (isLink) {
        fixLink(element, permalink, permalink);
      }
    });

    return noticeRoot.outerHTML;
  };
};

module.exports = loadGetNotice;
