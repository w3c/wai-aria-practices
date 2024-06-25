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

const loadNoticeCommon = async ({ isExperimental }) => {
  let relativePath;
  if (isExperimental) {
    // Depends on https://github.com/w3c/aria-practices/pull/2977 being merged
    relativePath =
      "content/shared/templates/experimental-example-usage-warning.html";
  } else {
    relativePath = "content/shared/templates/example-usage-warning.html";
  }

  let templateSourcePath = path.resolve(sourceRoot, relativePath);

  let noticeContent;
  try {
    noticeContent = await fs.readFile(templateSourcePath, {
      encoding: "utf8",
    });
  } catch (e) {
    console.warn(`${e.message}\nReverting to using default example-usage-warning.html ...\n`);

    // Could happen if experimental-example-usage-warning.html doesn't exist
    relativePath = "content/shared/templates/example-usage-warning.html";
    templateSourcePath = path.resolve(sourceRoot, relativePath);
    noticeContent = await fs.readFile(templateSourcePath, {
      encoding: "utf8",
    });
  }

  return async (sourcePath) => {
    const html = parseHtml(noticeContent);

    await rewriteElementPaths(html, {
      onSourcePath: sourcePath,
      optionalTemplateSourcePath: templateSourcePath,
    });

    return html.querySelector("body").innerHTML;
  };
};

const loadedNotice = loadNoticeCommon({ isExperimental: false });
const loadedExperimentalNotice = loadNoticeCommon({ isExperimental: true });

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

  const isExperimental =
    html.querySelector("main")?.getAttribute("data-content-phase") ===
    "experimental";

  let getNotice;
  if (isExperimental) {
    getNotice = await loadedExperimentalNotice;
  } else {
    getNotice = await loadedNotice;
  }
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
    head: html.querySelector("head"),
    footer: `
      <div class="example-page-footer">
        <p>${relatedIssuesLink}</p>
        <p>Page last updated: ${lastModifiedDateFormatted}</p>
      </div>
    `,
  });
};

module.exports = transformExample;
