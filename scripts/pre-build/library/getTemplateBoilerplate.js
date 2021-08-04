const prettier = require("prettier");

const getTemplateBoilerplate = ({
  title,
  permalink,
  content,
  // sourcePath = "/",
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
<body>
  ${content}
</body>
`;
  /*
${prettier.format(
  `
    <body>
      ${content}
    </body>
  `,
  { parser: "html" }
)}
  `;
*/
};

module.exports = getTemplateBoilerplate;
