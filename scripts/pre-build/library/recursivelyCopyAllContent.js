const path = require("path");
const { promiseFiles: getPaths } = require("node-dir");
const fs = require("fs/promises");
const { rewriteSourcePath, sourceRoot } = require("./rewritePath");

const recursivelyCopyAllContent = async ({ forEachFile, generateFiles }) => {
  const sourcePaths = await getPaths(path.join(sourceRoot, "content"));

  for (const sourcePath of sourcePaths) {
    let sourceContents;
    const doesNotSupportUtf8 = sourcePath.endsWith(".png");
    if (doesNotSupportUtf8) {
      sourceContents = await fs.readFile(sourcePath);
    } else {
      sourceContents = await fs.readFile(sourcePath, { encoding: "utf8" });
    }

    const { buildPath } = rewriteSourcePath(sourcePath);
    if (buildPath === null) continue; // File is ignored
    const buildContents = await forEachFile(sourcePath, sourceContents);

    await fs.mkdir(path.dirname(buildPath), { recursive: true });
    await fs.writeFile(buildPath, buildContents, { encoding: "utf8" });
  }

  for (const [sourcePath, transform] of Object.entries(generateFiles)) {
    const { buildPath } = rewriteSourcePath(sourcePath);
    const buildContents = await transform(sourcePath, null);

    await fs.mkdir(path.dirname(buildPath), { recursive: true });
    await fs.writeFile(buildPath, buildContents, { encoding: "utf8" });
  }
};

module.exports = recursivelyCopyAllContent;
