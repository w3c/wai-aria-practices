const fs = require("fs/promises");
const path = require("path");

const copyFromLibraryToExampleIndex = async (fileName) => {
    const filePath = path.resolve(__dirname, fileName);
    const destinationPath = path.resolve(
        __dirname,
        "../../../ARIA/apg/example-index/js",
        fileName
    );

    await fs.copyFile(filePath, destinationPath);
}

module.exports = copyFromLibraryToExampleIndex;