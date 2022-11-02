const path = require("path");
const { promiseFiles: getPaths } = require("node-dir");

const recursivelyCopyAllContent = async ({ forEachFile }) => {
  const contentPath = path.resolve(
    __dirname,
    "../../../_external/aria-practices/content"
  );
  const filePaths = await getPaths(contentPath);
  console.log();
};

module.exports = recursivelyCopyAllContent;
