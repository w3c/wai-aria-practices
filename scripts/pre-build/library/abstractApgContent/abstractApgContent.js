const parseHtmlFile = require("./parseHtmlFile");

const parseData = async () => {
  /* const { pages } = */ await parseHtmlFile();
  return { pages: null };
};

module.exports = parseData;
