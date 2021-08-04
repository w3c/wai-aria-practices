const fs = require("fs/promises");
const path = require("path");
const loadExample = require("./loadExample");
const { contentPath } = require("../emptyContentFolder");

const loadExamples = async () => {
  const examplesPath = path.resolve(
    __dirname,
    "../../../../_external/aria-practices/examples"
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
  await Promise.all(
    exampleDirectories.map(async (directory) => {
      const localItems = await fs.readdir(path.join(examplesPath, directory));
      const localExamples = localItems.filter((item) => item.endsWith(".html"));
      localExamples.forEach((localExample) => {
        exampleFilePaths.push(path.join(examplesPath, directory, localExample));
      });
    })
  );

  for (const examplePath of exampleFilePaths) {
    const exampleHtml = await fs.readFile(examplePath, { encoding: "utf-8" });
    const example = await loadExample(exampleHtml);
    console.log();
  }
};

module.exports = loadExamples;
