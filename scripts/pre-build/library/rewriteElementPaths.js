const { rewriteRelativePath } = require("./rewritePath");

const rewriteElementPaths = async (html, { onSourcePath }) => {
  const { specLinks } = await import(
    "../../../_external/aria-practices/content/shared/js/specLinks.mjs"
  );
  fixSpecLink = specLinks({ specStatus: "ED" });

  const aTags = html.querySelectorAll("a[href]");
  const linkTags = html.querySelectorAll("link[href]");
  const scriptTags = html.querySelectorAll("script[src]");
  const imgTags = html.querySelectorAll("img[src]");

  [...aTags, ...linkTags, ...scriptTags, ...imgTags].forEach((element) => {
    fixSpecLink(element);

    const href = element.getAttribute("href");
    const src = element.getAttribute("src");

    const isRelativeLink = !(href ?? src).match(/^(http|mailto|javascript|#)/);
    const isJekyllLink = !!(href ?? src).match(/^{{/);

    if (isRelativeLink && !isJekyllLink) {
      const { siteRelativePath } = rewriteRelativePath(href ?? src, {
        onSourcePath,
      });
      element.setAttribute(href ? "href" : "src", siteRelativePath);
    }
  });
};

module.exports = rewriteElementPaths;
