const fs = require("fs/promises");
const path = require("path");
const rimraf = require("rimraf");

const emptyContentFolder = async () => {
  const generatedContentPath = path.resolve(
    __dirname,
    "../../../../content-generated"
  );

  await fs.mkdir(generatedContentPath, { recursive: true });

  await new Promise((resolve) => {
    rimraf(`${generatedContentPath}/*`, resolve);
  });
};

module.exports = emptyContentFolder;
