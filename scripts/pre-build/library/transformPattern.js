const formatForJekyll = require("./formatForJekyll");
const { rewriteFilePath } = require("./rewritePath");

const transformPattern = (filePath, fileContents) => {
  const { sitePath, githubPath } = rewriteFilePath(filePath);
  return formatForJekyll({
    title: "Pattttern",
    sitePath: sitePath,
    githubPath: githubPath,
    addBodyClass: false,
    content: fileContents,
    enableSidebar: true,
    head: "",
    footer: "",
  });
};

module.exports = transformPattern;
