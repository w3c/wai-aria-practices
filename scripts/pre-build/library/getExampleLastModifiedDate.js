const { format } = require("date-fns");
const { rewriteRelativePath } = require("./rewritePath");
const getFileLastModifiedDate = require("./getFileLastModifiedDate");

const getExampleLastModifiedDate = async ({ html, sourcePath }) => {
  const dependencyFilePaths = html
    .querySelectorAll("#css_js_files a")
    .map(
      (link) =>
        rewriteRelativePath(link.getAttribute("href"), {
          onSourcePath: sourcePath,
        }).sourcePath
    )
    .concat(sourcePath);

  const dates = await Promise.all(
    dependencyFilePaths.map((filePath) => getFileLastModifiedDate(filePath))
  );

  dates.sort((a, b) => b - a);

  const mostRecent = dates[0];

  const dateFormatted = format(mostRecent, "d MMMM y");

  return dateFormatted;
};

module.exports = getExampleLastModifiedDate;
