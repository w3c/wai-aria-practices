const path = require("path");
const { parse: parseHtml } = require("node-html-parser");
const walkHtmlElements = require("../../../utilities/walkHtmlElements");

const oldToNewLink = {};

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

const findNewUrlForAnchorIds = (section) => {
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

  return { ...section, content: root.outerHTML };
};

// const isAnchor = element.tagName === "A";
// const href = isAnchor ? element.getAttribute("href") : null;
// const isAnchorLink = href?.startsWith("#");
// const isSiteLink = !href?.match(/^(http|mailto|#)/);
// if (isSiteLink) {
//   findFixedLink({ href, section });
// }

const fixLinks = (previousSections, previousPatterns) => {
  Object.values(previousSections).forEach(findNewUrlForAnchorIds);
  previousPatterns.forEach(findNewUrlForAnchorIds);

  console.log(oldToNewLink);

  // const sections = Object.fromEntries(
  //   Object.entries(previousSections).map(([label, section]) => {
  //     return [label, getFixedLinks(section)];
  //   })
  // );

  // const patterns = previousPatterns.map((pattern) => getFixedLinks(pattern));

  return { sections: previousSections, patterns: previousPatterns };
};

module.exports = fixLinks;
