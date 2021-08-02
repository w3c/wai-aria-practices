const path = require("path");
const rimraf = require("rimraf");

const emptyContentFolder = async () => {
  const generatedContentPath = path.resolve(
    __dirname,
    "../../../../content-generated"
  );

  await new Promise((resolve) => {
    rimraf(`${generatedContentPath}/*`, resolve);
  });
};

module.exports = emptyContentFolder;
