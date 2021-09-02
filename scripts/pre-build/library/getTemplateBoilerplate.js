const prettier = require("prettier");

const getTemplateBoilerplate = ({
  title,
  permalink,
  addBodyClass,
  content,
}) => {
  const todayDate = new Date().toISOString().slice(0, 10);

  return `---
# This is a generated file
title: "${title}"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: ${permalink}

lang: en
last_updated: ${todayDate}
---
<link rel="stylesheet" href="/assets/styles.css">
<script>
  const addBodyClass = ${JSON.stringify(addBodyClass)};
  if (addBodyClass) {
    document.body.classList.add(addBodyClass)
  }
</script>
<body>
  ${content}
  <script src="/assets/skipToMainContent.js">
</body>
`;
};

module.exports = getTemplateBoilerplate;
