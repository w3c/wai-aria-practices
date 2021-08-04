const fs = require("fs/promises");
const path = require("path");
const rimraf = require("rimraf");

const contentPath = path.resolve(__dirname, "../../../content-generated");

const emptyContentFolder = async () => {
  await fs.mkdir(contentPath, { recursive: true });

  await new Promise((resolve) => {
    rimraf(`${contentPath}/*`, resolve);
  });
};

module.exports = { emptyContentFolder, contentPath };
