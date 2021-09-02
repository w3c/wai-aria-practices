const path = require("path");
const { parse: parseHtml } = require("node-html-parser");
const walkHtmlElements = require("../../../utilities/walkHtmlElements");

const manualRemappings = {
  "/#aria_ex": "/patterns/",
};

const oldToNewLink = { ...manualRemappings };

// const findNewUrlForAnchorId = (anchorId, section) => {

//   const fixedSectionPath = path.relative(newSectionPath, "/");

//   anchorIdToNewUrl[anchorId] = `${fixedSectionPath}${fixedAnchorId}`

//   const [newSectionPath, newSectionHash] = href.split("#");
//   const [oldLinkPath, oldLinkHash] = href.split("#");

//   const fixedSectionPath = path.relative(newSectionPath, "/");

//   const fixedLinkPath = linkPath.startsWith("/")
//     ? path.join(fixedSectionPath, linkPath)
//     : path.join(fixedSectionPath, "/", linkPath);

//   const fixedHash = newSectionHash ? newSectionHash : oldLinkHash ?? "";

//   fixedLinks[`${oldLinkPath}${oldLinkHash}`] = `${fixedLinkPath}${fixedHash}`;
// };

const findNewLinksForOldLinks = (section) => {
  if (!section.content) return;

  const root = parseHtml(section.content);

  walkHtmlElements(root, (element) => {
    const anchorId = element.getAttribute("id");
    if (anchorId) {
      const noHash = section.permalinkReplacesFormerAnchorId === anchorId;
      oldToNewLink[`/#${anchorId}`] = noHash
        ? section.permalink
        : `${section.permalink}#${anchorId}`;
    }
  });
};

const fixLink = (element, section) => {
  const href = element.getAttribute("href");
  const isAnchorLink = href.startsWith("#");
  const isSiteLink = !href.match(/^(http|mailto|#)/);
  // if (isSiteLink) {
  //   findFixedLink({ href, section });
  // }
  if (isAnchorLink) {
    const newLink = oldToNewLink[`/${href}`];
    if (!newLink) {
      throw new Error(
        `Unable to remap anchor link "${href}". This will happen if a ` +
          "link is found which points to an section that is not present " +
          "in the redesigned APG site. This can be fixed by adding the " +
          "link to the manual link remappings at the top of this file."
      );
    }
    element.setAttribute("href", newLink);
  }
};

const getFixedLinks = (section) => {
  if (!section.content) return section;

  const root = parseHtml(section.content);

  walkHtmlElements(root, (element) => {
    const isLink = element.tagName === "A" && element.getAttribute("href");
    if (isLink) {
      fixLink(element, section);
    }
  });

  return { ...section, content: root.outerHTML };
};

const fixLinks = (previousSections, previousPatterns) => {
  Object.values(previousSections).forEach(findNewLinksForOldLinks);
  previousPatterns.forEach(findNewLinksForOldLinks);

  const sections = Object.fromEntries(
    Object.entries(previousSections).map(([label, section]) => {
      return [label, getFixedLinks(section)];
    })
  );

  const patterns = previousPatterns.map((pattern) => getFixedLinks(pattern));

  return { sections, patterns };
};

module.exports = fixLinks;
