const path = require("path");
const { promiseFiles: getPaths } = require("node-dir");
const fs = require("fs/promises");
const { rewriteSourcePath } = require("./rewritePath");

const recursivelyCopyAllContent = async ({ forEachFile }) => {
  const sourceRoot = path.resolve(
    __dirname,
    "../../../_external/aria-practices/content"
  );
  const sourcePaths = await getPaths(sourceRoot);
  for (const sourcePath of sourcePaths) {
    const sourceContents = await fs.readFile(sourcePath, { encoding: "utf8" });

    const { buildPath } = rewriteSourcePath(sourcePath);
    const buildContents = forEachFile(sourcePath, sourceContents);

    await fs.mkdir(path.dirname(buildPath), { recursive: true });
    await fs.writeFile(buildPath, buildContents, { encoding: "utf8" });
  }
};

module.exports = recursivelyCopyAllContent;
