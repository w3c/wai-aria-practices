const prettier = require("prettier");

const getTemplateBoilerplate = ({
  title,
  permalink,
  addBodyClass,
  content,
  // Defaults to aria-practices.html since this is the file where almost all the
  // content originates, with the notable exception of the examples
  footerForkAndEditOnGithubPath = "aria-practices.html",
  head = "",
  footer = "",
}) => {
  // Must be formatted because html which is indented by 4 spaces
  // will be interpreted as a code block by the markdown engine
  const formattedHead = prettier.format(head, { parser: "html" });

  return `---
# This is a generated file
title: "${title}"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  branch: main
  path: ${footerForkAndEditOnGithubPath}
feedbackmail: public-aria-practices@w3.org
permalink: ${permalink}

footer: "${footer.replace(/\n/g, "").replace(/"/g, "'")}"

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---
${formattedHead}
${/* ${prettier.format(` */ ""}
<link rel="stylesheet" href="{{ site.baseurl }}/content-assets/wai-aria-practices/styles.css">
<!-- Code highlighting styles -->
<link rel="stylesheet" href="{{ site.baseurl }}/index/css/github.css">
${
  !addBodyClass
    ? ""
    : `
<script>
const addBodyClass = ${JSON.stringify(addBodyClass)};
if (addBodyClass) {
  document.body.classList.add(addBodyClass);
}
</script>
    `
}
<div>
${content}
</div>
<script>
  var SkipToConfig = {
    settings: {
      skipTo: {
        displayOption: 'popup',
        attachElement: '#site-header',
        colorTheme: 'aria'
      }
    }
  };
</script>
<script src="{{ site.baseurl }}/content-assets/wai-aria-practices/skipto.min.js"></script>
${/* `, { parser: "html" })} */ ""}`;
};

module.exports = getTemplateBoilerplate;
