const fs = require("fs/promises");
const path = require("path");
const rimraf = require("rimraf");

const contentPaths = [path.resolve(__dirname, "../../../ARIA/apg")];

const emptyContentFolders = async () => {
  return Promise.all(
    contentPaths.map(async (contentPath) => {
      await fs.mkdir(contentPath, { recursive: true });

      await new Promise((resolve) => {
        rimraf(`${contentPath}/*`, resolve);
      });
    })
  );
};

module.exports = emptyContentFolders;
