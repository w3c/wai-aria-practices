const { parse: parseHtml } = require("node-html-parser");
const { rewriteRelativePath } = require("./rewritePath");

const transformTemplate = async (sourcePath, sourceContents) => {
  // Parse the HTML and manually rewrite paths to absolute URLs for templates
  const html = parseHtml(sourceContents);
  
  const aTags = html.querySelectorAll("a[href]");
  const imgTags = html.querySelectorAll("img[src]");

  [...aTags, ...imgTags].forEach((element) => {
    const href = element.getAttribute("href");
    const src = element.getAttribute("src");
    const path = href || src;

    if (path && !path.match(/^(http|mailto|javascript|#|\/)/)) {
      try {
        const result = rewriteRelativePath(path, {
          onSourcePath: sourcePath,
          optionalTemplateSourcePath: sourcePath,
        });
        
        // For templates, we need to construct the correct absolute path
        let absolutePath;
        if (path.includes('images/')) {
          // Image paths should go to content-images
          absolutePath = `/WAI/content-images/wai-aria-practices/images/${path.split('/').pop()}`;
        } else if (path.includes('practices/')) {
          // Practice paths should go to ARIA/apg/practices
          const practiceName = path.match(/practices\/([^\/]+)/)?.[1];
          if (practiceName) {
            absolutePath = `/WAI/ARIA/apg/practices/${practiceName}/`;
          } else {
            absolutePath = `/WAI/${result.siteRootPath}`;
          }
        } else {
          absolutePath = `/WAI/${result.siteRootPath}`;
        }
        
        element.setAttribute(href ? "href" : "src", absolutePath);
      } catch (error) {
        console.warn(`Failed to rewrite path ${path} in ${sourcePath}:`, error.message);
      }
    }
  });
  
  return html.outerHTML;
};

module.exports = transformTemplate; 