const parseHtmlFile = require("./parseHtmlFile");

const abstractApgContent = async () => {
  const content = await parseHtmlFile();
  return content;
};

module.exports = abstractApgContent;
