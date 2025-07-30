const { parse: parseHtml } = require("node-html-parser");

const transformTemplate = async (sourcePath, sourceContents) => {
  if (sourcePath.endsWith("content/shared/templates/read-this-first.html")) {
    // const html = parseHtml(sourceContents);
    // const imgTags = html.querySelectorAll("img[src]");
    // imgTags.forEach((img) => {
    //   const src = img.getAttribute("src");
    //   if (src.includes("/images/read-this-first.svg")) {
    //     img.setAttribute("src", "../../content-images/wai-aria-practices/images/read-this-first.svg");
    //   }
    // });
    // return html.outerHTML;
  }

  return sourceContents;
};

module.exports = transformTemplate; 
