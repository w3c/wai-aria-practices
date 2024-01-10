const fs = require("fs/promises");
const path = require("path");
const { parse: parseHtml } = require("node-html-parser");
const formatForJekyll = require("./formatForJekyll");
const { rewriteSourcePath, sourceRoot } = require("./rewritePath");
const rewriteElementPaths = require("./rewriteElementPaths");
const removeDuplicateMainTag = require("./removeDuplicateMainTag");
const wrapTablesWithResponsiveDiv = require("./wrapTablesWithResponsiveDiv");
const removeConflictingCss = require("./removeConflictingCss");
const getExampleLastModifiedDate = require("./getExampleLastModifiedDate");

const loadNotice = async () => {
  const relativePath = "content/shared/templates/example-usage-warning.html";
  const templateSourcePath = path.resolve(sourceRoot, relativePath);
  const noticeContent = await fs.readFile(templateSourcePath, {
    encoding: "utf8",
  });

  return async (sourcePath) => {
    const html = parseHtml(noticeContent);

    await rewriteElementPaths(html, {
      onSourcePath: sourcePath,
      optionalTemplateSourcePath: templateSourcePath,
    });

    return html.querySelector("body").innerHTML;
  };
};

const loadedNotice = loadNotice();

const transformExample = async (sourcePath, sourceContents) => {
  const { sitePath, githubPath } = rewriteSourcePath(sourcePath);
  const html = parseHtml(sourceContents);

  const title = html.querySelector("h1").innerHTML;
  html.querySelector("h1").remove();

  removeConflictingCss(html);

  const lastModifiedDateFormatted = await getExampleLastModifiedDate({
    html,
    sourcePath,
  });

  await rewriteElementPaths(html, { onSourcePath: sourcePath });

  const getNotice = await loadedNotice;
  const notice = await getNotice(sourcePath);
  html.querySelector("body").insertAdjacentHTML("afterbegin", notice);

  const relatedLinksElement = html.querySelector(
    '[aria-label="Related Links"]'
  );
  const allRelatedLinks = relatedLinksElement.querySelectorAll("> ul > li > a");
  const relatedIssuesLinkElement = allRelatedLinks.find(
    (link) => link.textContent.trim().toLowerCase() === "related issues"
  );
  relatedIssuesLinkElement.textContent = "View issues related to this example";
  const relatedIssuesLink = relatedIssuesLinkElement.outerHTML;
  relatedLinksElement.remove();

  return formatForJekyll({
    title,
    sitePath,
    githubPath,
    content: removeDuplicateMainTag(
      wrapTablesWithResponsiveDiv(html.querySelector("body").innerHTML)
    ),
    enableSidebar: true,
    skipToData: html.querySelector('script[data-skipto]')?.getAttribute('data-skipto'),
    head: html.querySelector("head").innerHTML,
    footer: `
      <div class="example-page-footer">
        <p>${relatedIssuesLink}</p>
        <p>Page last updated: ${lastModifiedDateFormatted}</p>
      </div>
    `,
  });
};

module.exports = transformExample;
