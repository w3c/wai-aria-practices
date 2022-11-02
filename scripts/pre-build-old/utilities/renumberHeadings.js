const wrapHtmlFunction = require("./wrapHtmlFunction");

const renumberHeadings = wrapHtmlFunction((changeLevelBy, html) => {
  if (changeLevelBy >= 4 || changeLevelBy <= -4) throw new Error();

  const newH1 = 1 + changeLevelBy >= 1 ? 1 + changeLevelBy : 1;
  const newH2 = 2 + changeLevelBy >= 1 ? 2 + changeLevelBy : 1;
  const newH3 = 3 + changeLevelBy >= 1 ? 3 + changeLevelBy : 1;
  const newH4 = 4 + changeLevelBy <= 6 ? 4 + changeLevelBy : 6;
  const newH5 = 5 + changeLevelBy <= 6 ? 5 + changeLevelBy : 6;
  const newH6 = 6 + changeLevelBy <= 6 ? 6 + changeLevelBy : 6;

  return html
    .replace(/<h1/g, `<h${newH1}`)
    .replace(/<\/h1/g, `</h${newH1}`)
    .replace(/<h2/g, `<h${newH2}`)
    .replace(/<\/h2/g, `</h${newH2}`)
    .replace(/<h3/g, `<h${newH3}`)
    .replace(/<\/h3/g, `</h${newH3}`)
    .replace(/<h4/g, `<h${newH4}`)
    .replace(/<\/h4/g, `</h${newH4}`)
    .replace(/<h5/g, `<h${newH5}`)
    .replace(/<\/h5/g, `</h${newH5}`)
    .replace(/<h6/g, `<h${newH6}`)
    .replace(/<\/h6/g, `</h${newH6}`);
});

module.exports = renumberHeadings;
