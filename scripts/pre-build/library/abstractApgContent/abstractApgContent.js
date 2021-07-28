const parseHtmlFile = require("./parseHtmlFile");

const parseData = async () => {
  const content = await parseHtmlFile();
  return content;
};

module.exports = parseData;
