const prettier = require("prettier");

const getTemplateBoilerplate = ({ title, permalink, content, head = "" }) => {
  const todayDate = new Date().toISOString().slice(0, 10);
  // Must be formatted because html which is indented by 4 spaces
  // will be interpreted as a code block by the markdown engine
  const formattedHead = prettier.format(head, { parser: "html" });

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
${formattedHead}
<body>
  ${content}
  <script src="/assets/skipToMainContent.js">
</body>
`;
};

module.exports = getTemplateBoilerplate;
