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
      const examplePaths = filePaths.filter(
        (item) => item.endsWith("html") && !isHtmlAsset(item)
      );
      const assetPaths = filePaths.filter(
        (item) => isHtmlAsset(item) || !item.endsWith("html")
      );
      exampleFilePaths = [...exampleFilePaths, ...examplePaths];
      exampleAssetPaths = [...exampleAssetPaths, ...assetPaths];
    })
  );

  const additionalAssets = [
    ...(await getPaths(path.join(examplesPath, "js"))),
    ...(await getPaths(path.join(examplesPath, "css"))),
  ];
  exampleAssetPaths = [...exampleAssetPaths, ...additionalAssets];

  await Promise.all(
    exampleAssetPaths.map(async (currentPath) => {
      const relativePath = path.relative(examplesPath, currentPath);
      const destinationPath = path.join(destinationExamplesPath, relativePath);
      await fs.mkdir(path.dirname(destinationPath), { recursive: true });
      await fs.copyFile(currentPath, destinationPath);
    })
  );

  await editAppJs({ destinationExamplesPath });

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

const editAppJs = async ({ destinationExamplesPath }) => {
  const appJsPath = path.join(destinationExamplesPath, "js", "app.js");
  const appJsContent = await fs.readFile(appJsPath, { encoding: "utf8" });
  const lineToEdit = "var heading = document.querySelector('h1');";
  const lineToEditStartIndex = appJsContent.indexOf(lineToEdit);
  if (!lineToEditStartIndex) {
    throw new Error(
      "app.js has diverged from a known state and the pre-build script must " +
        "be updated"
    );
  }
  const lineToEditEndIndex = lineToEditStartIndex + lineToEdit.length;
  const newContent =
    appJsContent.substr(0, lineToEditStartIndex) +
    "var heading = document.querySelector('.followed-by-support-notice'); " +
    "// Line edited by pre-build script" +
    appJsContent.substr(lineToEditEndIndex);
  await fs.writeFile(appJsPath, newContent);
};

const isHtmlAsset = (filePath) => {
  return (
    filePath.includes("landmarks/") ||
    filePath.endsWith("feed/feedDisplay.html") ||
    filePath.endsWith("toolbar/help.html")
  );
};

module.exports = loadExamples;
