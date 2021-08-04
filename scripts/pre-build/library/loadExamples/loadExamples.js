const fs = require("fs/promises");
const path = require("path");
const loadExample = require("./loadExample");
const { promiseFiles: getPaths } = require("node-dir");

const loadExamples = async () => {
  const examplesPath = path.resolve(
    __dirname,
    "../../../../_external/aria-practices/examples"
  );

  const destinationExamplesPath = path.resolve(
    __dirname,
    "../../../../examples"
  );

  const exampleDirectories = (await fs.readdir(examplesPath)).filter((item) => {
    return ![
      ".DS_Store",
      "css",
      "index.html",
      "js",
      "coding-template",
    ].includes(item);
  });

  let exampleFilePaths = [];
  let exampleAssetPaths = [];
  await Promise.all(
    exampleDirectories.map(async (directory) => {
      const directoryPath = path.join(examplesPath, directory);
      const filePaths = await getPaths(directoryPath);
      const examplePaths = filePaths.filter((item) => item.endsWith("html"));
      const assetPaths = filePaths.filter((item) => !item.endsWith("html"));
      exampleFilePaths = [...exampleFilePaths, ...examplePaths];
      exampleAssetPaths = [...exampleAssetPaths, ...assetPaths];
    })
  );

  await Promise.all(
    exampleAssetPaths.map(async (currentPath) => {
      const relativePath = path.relative(examplesPath, currentPath);
      const destinationPath = path.join(destinationExamplesPath, relativePath);
      const directoryPath = path.dirname(destinationPath);
      await fs.mkdir(directoryPath, { recursive: true });
      await fs.copyFile(currentPath, destinationPath);
    })
  );

  for (const currentPath of exampleFilePaths) {
    const { fileName, fileContent } = await loadExample(currentPath);

    const exampleRelative = path.relative(examplesPath, currentPath);
    const exampleRelativeDirectory = path.dirname(exampleRelative);
    const destinationPath = path.join(
      destinationExamplesPath,
      exampleRelativeDirectory,
      fileName
    );
    const destinationDirectoryPath = path.dirname(destinationPath);

    await fs.mkdir(destinationDirectoryPath, { recursive: true });
    await fs.writeFile(destinationPath, fileContent, { encoding: "utf8" });
  }
};

module.exports = loadExamples;
