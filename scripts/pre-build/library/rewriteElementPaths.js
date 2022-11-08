const { rewriteRelativePath } = require("./rewritePath");

const rewriteElementPaths = (html, { onSourcePath }) => {
  const aTags = html.querySelectorAll("a[href]");
  const linkTags = html.querySelectorAll("link[href]");
  const scriptTags = html.querySelectorAll("script[src]");

  [...aTags, ...linkTags, ...scriptTags].forEach((element) => {
    const href = element.getAttribute("href");
    const src = element.getAttribute("src");

    const isRelativeLink = !(href ?? src).match(/^(http|mailto|javascript|#)/);

    if (isRelativeLink) {
      const { siteRelativePath } = rewriteRelativePath(href ?? src, {
        onSourcePath,
      });
      element.setAttribute(href ? "href" : "src", siteRelativePath);
    }
  });
};

module.exports = rewriteElementPaths;
