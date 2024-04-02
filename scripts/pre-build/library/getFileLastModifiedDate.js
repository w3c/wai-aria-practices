const path = require("path");
const { exec } = require("child_process");

const getFileLastModifiedDate = async (sourcePath) => {
    const output = await new Promise((resolve) => {
        exec(
            `git log -1 --pretty="format:%cI" ${path.basename(sourcePath)}`,
            { cwd: path.dirname(sourcePath) },
            (error, stdout, stderr) => {
                resolve(stdout);
            }
        );
    });
    let date;
    try {
        date = new Date(output);
    } catch (error) {
        console.error(
            `Failed to extract a last-modified date for the file "${sourcePath}"`
        );
        throw error;
    }
    return date;
};

module.exports = getFileLastModifiedDate;
