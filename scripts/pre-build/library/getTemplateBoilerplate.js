const prettier = require("prettier");

const getTemplateBoilerplate = ({
  title,
  permalink,
  addBodyClass,
  content,
  enableSidebar = false,
  // Defaults to aria-practices.html since this is the file where almost all the
  // content originates, with the notable exception of the examples
  footerForkAndEditOnGithubPath = "aria-practices.html",
  head = "",
  footer = null,
}) => {
  // Must be formatted because html which is indented by 4 spaces
  // will be interpreted as a code block by the markdown engine
  const formattedHead = prettier.format(head, { parser: "html" });

  return `---
# This is a generated file
title: "${title}"
ref: ${permalink}

github:
  repository: w3c/aria-practices
  branch: main
  path: ${footerForkAndEditOnGithubPath}
feedbackmail: public-aria-practices@w3.org
permalink: ${permalink}

sidebar: ${enableSidebar}

${!footer ? "" : `footer: "${footer.replace(/\n/g, "").replace(/"/g, "'")}"`}

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---
${formattedHead}
${/* ${prettier.format(` */ ""}
<link 
  rel="stylesheet"
  href="{{ '/content-assets/wai-aria-practices/styles.css' | relative_url }}"
>
<!-- Code highlighting styles -->
<link 
  rel="stylesheet"
  href="{{ '/ARIA/apg/example-index/css/github.css' | relative_url }}"
>
${
  !(addBodyClass || enableSidebar)
    ? ""
    : `
<script>
const addBodyClass = ${JSON.stringify(addBodyClass)};
const enableSidebar = ${JSON.stringify(enableSidebar)};
if (addBodyClass) document.body.classList.add(addBodyClass);
if (enableSidebar) document.body.classList.add('has-sidebar');

// Make nav item "Patterns" active when on a patterns page
if (window.location.toString().match('patterns\/.*')) {
  document.querySelector('a[href="/WAI/ARIA/apg/patterns/"]').classList.add('active');
}
</script>
    `
}
<div>
${content}
</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/jumpto.js' | relative_url }}"
></script>
${/* `, { parser: "html" })} */ ""}`;
};

module.exports = getTemplateBoilerplate;
