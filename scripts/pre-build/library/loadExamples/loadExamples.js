const fs = require("fs/promises");
const path = require("path");
const { promiseFiles: getPaths } = require("node-dir");
const loadExample = require("./loadExample");
const loadIndex = require("./loadIndex");

const loadExamples = async () => {
  const examplesPath = path.resolve(
    __dirname,
    "../../../../_external/aria-practices/examples"
  );

  const destinationExamplesPath = path.resolve(__dirname, "../../../../index");

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

  const additionalAssets = await getPaths(path.join(examplesPath, "js"));
  exampleAssetPaths = [...exampleAssetPaths, ...additionalAssets];

  await Promise.all(
    exampleAssetPaths.map(async (currentPath) => {
      const relativePath = path.relative(examplesPath, currentPath);
      const destinationPath = path.join(destinationExamplesPath, relativePath);
      await fs.mkdir(path.dirname(destinationPath), { recursive: true });
      await fs.copyFile(currentPath, destinationPath);
    })
  );

  for (const currentPath of exampleFilePaths) {
    const exampleRelative = path.relative(examplesPath, currentPath);
    const exampleRelativeDirectory = path.dirname(exampleRelative);

    const { fileName, fileContent } = await loadExample(currentPath, {
      exampleRelativeDirectory,
    });

    const destinationPath = path.join(
      destinationExamplesPath,
      exampleRelativeDirectory,
      fileName
    );

    await fs.mkdir(path.dirname(destinationPath), { recursive: true });
    await fs.writeFile(destinationPath, fileContent, { encoding: "utf8" });
  }

  const indexPath = path.join(examplesPath, "index.html");
  const indexDestinationPath = path.join(destinationExamplesPath, "index.md");
  const indexContent = await loadIndex(indexPath);
  await fs.writeFile(indexDestinationPath, indexContent, { encoding: "utf8" });
};

module.exports = loadExamples;
