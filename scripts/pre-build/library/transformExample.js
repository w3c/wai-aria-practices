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
  const noticePath = path.resolve(
    sourceRoot,
    "content/shared/templates/example-usage-warning.html"
  );
  const noticeContent = await fs.readFile(noticePath, { encoding: "utf8" });
  const html = parseHtml(noticeContent);

  return () => {
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

  const slug = sitePath.match(/patterns\/([^/]+)\//)?.[1];

  const img = `<img 
    alt=""
    src="{{ '/content-images/wai-aria-practices/img/${slug}.svg' | relative_url }}"
    class="example-page-example-icon"
  />`;
  if (html.querySelector(".advisement")) {
    html.querySelector(".advisement").insertAdjacentHTML("afterend", img);
  } else {
    html.querySelector("h2").insertAdjacentHTML("afterend", img);
  }

  removeConflictingCss(html);

  const getNotice = await loadedNotice;
  const notice = getNotice();
  html.querySelector("body").insertAdjacentHTML(
    "afterbegin",
    `
      <h2 id="support-notice-header">Read This First</h2>
      ${notice}
    `
  );

  const lastModifiedDateFormatted = await getLastModifiedDate(sourcePath);

  await rewriteElementPaths(html, { onSourcePath: sourcePath });

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
