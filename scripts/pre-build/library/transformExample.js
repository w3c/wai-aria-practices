const fs = require("fs/promises");
const path = require("path");
const { exec } = require("child_process");
const { parse: parseHtml } = require("node-html-parser");
const { format } = require("date-fns");
const formatForJekyll = require("./formatForJekyll");
const { rewriteSourcePath, sourceRoot } = require("./rewritePath");
const rewriteElementPaths = require("./rewriteElementPaths");
const removeDuplicateMainTag = require("./removeDuplicateMainTag");
const wrapTablesWithResponsiveDiv = require("./wrapTablesWithResponsiveDiv");
const removeConflictingCss = require("./removeConflictingCss");

const loadNotice = async () => {
  const relativePath = "content/shared/templates/example-usage-warning.html";
  const templateSourcePath = path.resolve(sourceRoot, relativePath);
  const noticeContent = await fs.readFile(templateSourcePath, {
    encoding: "utf8",
  });
  const html = parseHtml(noticeContent);

  return async (sourcePath) => {
    await rewriteElementPaths(html, {
      onSourcePath: sourcePath,
      optionalTemplateSourcePath: templateSourcePath,
    });

    return html.querySelector("body").innerHTML;
  };
};

const loadedNotice = loadNotice();

const getLastModifiedDate = async (exampleFilePath) => {
  const output = await new Promise((resolve) => {
    exec(
      `git log -1 --pretty="format:%cI" ${path.basename(exampleFilePath)}`,
      { cwd: path.dirname(exampleFilePath) },
      (error, stdout, stderr) => {
        resolve(stdout);
      }
    );
  });
  let dateFormatted;
  try {
    dateFormatted = format(new Date(output), "d MMMM y");
  } catch (error) {
    console.error(
      `Failed to extract a last-modified date for the file "${exampleFilePath}"`
    );
    throw error;
  }
  return dateFormatted;
};

const transformExample = async (sourcePath, sourceContents) => {
  const { sitePath, githubPath } = rewriteSourcePath(sourcePath);
  const html = parseHtml(sourceContents);

  const title = html.querySelector("h1").innerHTML;
  html.querySelector("h1").remove();

  removeConflictingCss(html);

  const lastModifiedDateFormatted = await getLastModifiedDate(sourcePath);

  await rewriteElementPaths(html, { onSourcePath: sourcePath });

  const getNotice = await loadedNotice;
  const notice = await getNotice(sourcePath);
  html.querySelector("body").insertAdjacentHTML(
    "afterbegin",
    `
      <h2 id="support-notice-header">Read This First</h2>
      ${notice}
    `
  );

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
