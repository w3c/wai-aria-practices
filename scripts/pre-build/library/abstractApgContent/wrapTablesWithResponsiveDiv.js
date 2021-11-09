// Allows tables to be responsive by wrapping them in a div with a responsive
// table class
const wrapTablesWithResponsiveDiv = (html) => {
  return html
    .replace(/<table/g, '<div class="table-wrap"><table')
    .replace(/<\/table>/g, "</table></div>");
};

module.exports = wrapTablesWithResponsiveDiv;
