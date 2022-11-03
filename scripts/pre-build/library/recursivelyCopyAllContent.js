const path = require("path");
const { promiseFiles: getPaths } = require("node-dir");
const fs = require("fs/promises");
const { rewriteFilePath } = require("./rewritePath");

const recursivelyCopyAllContent = async ({ forEachFile }) => {
  const contentPath = path.resolve(
    __dirname,
    "../../../_external/aria-practices/content"
  );
  const filePaths = await getPaths(contentPath);
  for (const filePath of filePaths) {
    const fileContents = await fs.readFile(filePath, { encoding: "utf8" });

    const { buildPath } = rewriteFilePath(filePath);
    const buildContents = forEachFile(filePath, fileContents);

    await fs.mkdir(path.dirname(buildPath), { recursive: true });
    await fs.writeFile(buildPath, buildContents, { encoding: "utf8" });
  }
};

module.exports = recursivelyCopyAllContent;
