const { format } = require("date-fns");
const getFileLastModifiedDate = require("./getFileLastModifiedDate");

const getCoverageAndQualityLastModifiedDate = async (sourcePath) => {
  const date = await getFileLastModifiedDate(sourcePath);
  const dateFormatted = format(date, "MMMM d, y");

  return dateFormatted;
};

module.exports = getCoverageAndQualityLastModifiedDate;
