const path = require("path");
const fs = require("fs/promises");
const { parse: parseHtml } = require("node-html-parser");

const loadHomepage = async () => {
  const homepagePath = path.resolve(
    __dirname,
    "../../../_external/aria-practices/index.html"
  );

  const homepageString = await fs.readFile(homepagePath, "utf8");
  const root = parseHtml(homepageString);
  const styleTags = root
    .querySelectorAll("style")
    .filter((styleTag) => !styleTag.getAttribute("data-exclude-from-website"));
  const body = root.querySelector("body");

  const homepageContent = `
    ${styleTags.map((styleTag) => styleTag.outerHTML)}
    ${body.innerHTML}
  `;

  return homepageContent;
};

module.exports = loadHomepage;
