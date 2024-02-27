const path = require("path");
const { exec } = require("child_process");
const { format } = require("date-fns");
const { rewriteRelativePath } = require("./rewritePath");

const getExampleLastModifiedDate = async ({ html, sourcePath }) => {
  const getFileLastModifiedDate = async (sourcePath) => {
    const output = await new Promise((resolve) => {
      exec(
        `git log -1 --pretty="format:%cI" ${path.basename(sourcePath)}`,
        { cwd: path.dirname(sourcePath) },
        (error, stdout, stderr) => {
          resolve(stdout);
        }
      );
    });
    let date;
    try {
      date = new Date(output);
    } catch (error) {
      console.error(
        `Failed to extract a last-modified date for the file "${sourcePath}"`
      );
      throw error;
    }
    return date;
  };

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
