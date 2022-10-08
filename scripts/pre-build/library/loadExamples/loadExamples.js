const { exec } = require("child_process");
const fs = require("fs/promises");
const path = require("path");
const { promiseFiles: getPaths } = require("node-dir");
const { format } = require("date-fns");
const loadExample = require("./loadExample");
const loadIndex = require("./loadIndex");
const loadGetNotice = require("./loadNotice");

const loadExamples = async () => {
  const examplesPath = path.resolve(
    __dirname,
    "../../../../_external/aria-practices/examples"
  );

  const destinationExamplesPath = path.resolve(
    __dirname,
    "../../../../ARIA/apg/example-index"
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

  await editFile(path.join(destinationExamplesPath, "js", "app.js"), [
    {
      previousText:
        "window.addEventListener('DOMContentLoaded', addSupportNotice, false);",
      replacementText:
        "// window.addEventListener('DOMContentLoaded', addSupportNotice, false);" +
        "// Line edited by pre-build script",
    },
    {
      previousText: "let ref = window.location.href.split('examples')[0];",
      replacementText:
        "return; // Line added by pre-build script\n" +
        "  let ref = window.location.href.split('examples')[0];",
    },
  ]);

  await editFile(path.join(destinationExamplesPath, "js", "skipto.js"), [
    {
      previousText:
        "displayOption: 'static', // options: static (default), popup",
      replacementText:
        "displayOption: 'popup', // Line edited by pre-build script",
    },
  ]);

  await editFile(path.join(destinationExamplesPath, "js", "notice.html"), [
    {
      previousText:
        "<summary>Important Note About Use of This Example</summary>",
      replacementText: `
        <summary>
          <p>
            The code in this example is not intended for production environments. 
            Before using it for any purpose, read this to understand why.
          </p>
        </summary>
      `,
    },
    {
      previousText: "Note: This is an illustrative example",
      replacementText: "This is an illustrative example",
    },
  ]);

  const getNotice = await loadGetNotice({ destinationExamplesPath });

  for (const currentPath of exampleFilePaths) {
    const exampleRelativePath = path.relative(examplesPath, currentPath);
    const exampleRelativeDirectory = path.dirname(exampleRelativePath);

    const lastModifiedDateFormatted = await getLastModifiedDate(currentPath);

    const { fileName, fileContent } = await loadExample(currentPath, {
      exampleRelativePath,
      exampleRelativeDirectory,
      lastModifiedDateFormatted,
      getNotice,
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

const editFile = async (path, replacements) => {
  let content = await fs.readFile(path, { encoding: "utf8" });

  replacements.forEach(({ previousText, replacementText }) => {
    const previousTextStartIndex = content.indexOf(previousText);
    if (!(previousTextStartIndex > 0)) {
      throw new Error(
        `The file at ${path} has diverged from a known state and the ` +
          "pre-build script must be updated"
      );
    }
    const previousTextEndIndex = previousTextStartIndex + previousText.length;
    content =
      content.substr(0, previousTextStartIndex) +
      replacementText +
      content.substr(previousTextEndIndex);
  });

  await fs.writeFile(path, content);
};

const getLastModifiedDate = async (exampleFilePath) => {
  const output = await new Promise((resolve) => {
    exec(
      `git log -1 --pretty="format:%cI" ${path.basename(exampleFilePath)}`,
      { cwd: path.dirname(exampleFilePath) },
      (error, stdout, stderr) => {
        resolve(stdout);
      }
    );
  });
  let dateFormatted;
  try {
    dateFormatted = format(new Date(output), "d MMMM y");
  } catch (error) {
    console.error(
      `Failed to extract a last-modified date for the file "${exampleFilePath}"`
    );
    throw error;
  }
  return dateFormatted;
};

const isHtmlAsset = (filePath) => {
  return (
    filePath.includes("landmarks/") ||
    filePath.endsWith("feed/feedDisplay.html") ||
    filePath.endsWith("toolbar/help.html")
  );
};

module.exports = loadExamples;
