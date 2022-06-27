const fs = require("fs/promises");
const path = require("path");

const addSkipToJs = async () => {
    const fileName = "skipto.js"
    const filePath = path.resolve(__dirname, fileName);
    const destinationPath = path.resolve(
        __dirname,
        "../../../../ARIA/apg/example-index/js",
        fileName
    );

    await fs.copyFile(filePath, destinationPath);
}

module.exports = addSkipToJs;
