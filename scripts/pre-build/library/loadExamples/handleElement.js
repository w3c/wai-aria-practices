const { kebabCase } = require("lodash");
const walkHtmlElements = require("../../utilities/walkHtmlElements");
const { fixLink } = require("../abstractApgContent/fixLinks");
const wrapTablesWithResponsiveDiv = require("../abstractApgContent/wrapTablesWithResponsiveDiv");

let title;
let head;
let footer;
let body;
let patternSlug;

const getContent = () => {
  const response = { title, head, footer, body, patternSlug };
  title = undefined;
  head = undefined;
  footer = undefined;
  body = undefined;
  patternSlug = undefined;
  return response;
};

const getHandleElement =
  ({ permalink, notice, lastModifiedDateFormatted }) =>
  (element) => {
    if (element.tagName === "HEAD") {
      walkHtmlElements(element, handleHeadElement);
      head = element.innerHTML;
      return { ignoreChildElements: true };
    }

    if (element.tagName === "BODY") {
      walkHtmlElements(element, getHandleBodyElement(permalink));

      if (permalink === "/WAI/ARIA/APG/example-index/") {
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
          src="/content-assets/wai-aria-practices/img/${patternSlug}.svg"
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
          `
            <h2>About This Example</h2>
            ${notice}
          `
        );

        const relatedLinksElement = element.querySelector(
          '[aria-label="Related Links"]'
        );
        const allRelatedLinks =
          relatedLinksElement.querySelectorAll("> ul > li > a");
        const relatedIssuesLinkElement = allRelatedLinks.find(
          (link) => link.textContent.trim().toLowerCase() === "related issues"
        );
        relatedIssuesLinkElement.textContent =
          "View issues related to this example";
        const relatedIssuesLink = relatedIssuesLinkElement.outerHTML;
        relatedLinksElement.remove();

        footer = `
          <div class="example-page-footer">
            <p>${relatedIssuesLink}</p>
            <p>Page last updated: ${lastModifiedDateFormatted}</p>
          </div>
        `;
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
        .match(/patterns\/([^/]+)\/?/);
      const isPatternLink = !!patternMatch;
      if (!patternSlug && isPatternLink) patternSlug = patternMatch[1];
    }
  }

  // This element is hard to identify since it has no attributes and only
  // contains a single anchor tag
  const isTrailingNavElement =
    element.tagName === "NAV" &&
    Object.keys(element.rawAttributes).length === 0 &&
    element.querySelectorAll("> *").length === 1;
  if (isTrailingNavElement) {
    element.remove();
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
  element.querySelector('[aria-label="ARIA Practices"]').remove();
};

module.exports = { getHandleElement, getContent };
