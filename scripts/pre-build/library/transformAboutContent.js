const { parse: parseHtml } = require("node-html-parser");
const formatForJekyll = require("./formatForJekyll");
const removeConflictingCss = require("./removeConflictingCss");
const removeDuplicateMainTag = require("./removeDuplicateMainTag");
const rewriteElementPaths = require("./rewriteElementPaths");
const { rewriteSourcePath } = require("./rewritePath");
const wrapTablesWithResponsiveDiv = require("./wrapTablesWithResponsiveDiv");

const transformAboutContent = async (sourcePath, sourceContents) => {
  const { sitePath, githubPath } = rewriteSourcePath(sourcePath);
  const html = parseHtml(sourceContents);

  const title = html.querySelector("h1").innerHTML;
  html.querySelector("h1").remove();

  const isAboutIndexPage = sourcePath.endsWith("about.html");
  if (isAboutIndexPage) {
    html.querySelector("main ul").classList.add("content-list");
  }

  const sidebarWouldBeUseless = html.querySelectorAll("h2").length < 2;
  enableSidebar = !(isAboutIndexPage || sidebarWouldBeUseless);

  removeConflictingCss(html);

  await rewriteElementPaths(html, { onSourcePath: sourcePath });

  return formatForJekyll({
    title,
    sitePath,
    githubPath,
    content: wrapTablesWithResponsiveDiv(
      removeDuplicateMainTag(html.querySelector("body").innerHTML)
    ),
    enableSidebar,
    skipToData: html.querySelector('script[data-skipto]')?.getAttribute('data-skipto'),
    head: html.querySelector("head").innerHTML,
  });
};

module.exports = transformAboutContent;
