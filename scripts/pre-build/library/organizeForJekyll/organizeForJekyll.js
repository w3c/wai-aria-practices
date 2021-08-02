const fs = require("fs/promises");
const path = require("path");
const createPatternsPage = require("./createPatternsPage");

const organizeForJekyll = async ({ sections, patterns }) => {
  const generatedContentPath = path.resolve(
    __dirname,
    "../../../../content-generated"
  );
  const homeFilePath = path.resolve(
    __dirname,
    "../../../../_includes/home.html"
  );
  const patternsFilePath = path.resolve(
    __dirname,
    "../../../../_includes/patterns.html"
  );

  await new Promise((resolve) => {
    rimraf(`${generatedContentPath}/*`, resolve);
  });

  const homeContent = `
    <!-- home.html -->
    <!-- This is a generated file -->
    ${sections.abstract}
    ${sections.introduction}
    ${sections.badAria}
    ${sections.browserAndAtSupport}
    ${sections.mobileAndTouchSupport}
  `;

  const patternsContent = `
    <!-- patterns.html -->
    <!-- This is a generated file -->
    ${createPatternsPage(patterns)}
  `;

  const todayDate = new Date().toISOString().slice(0, 10);

  const patternPages = patterns.map((pattern) => {
    return {
      mdPath: path.resolve(
        __dirname,
        `../../../../content-generated/pattern-${pattern.slug}.md`
      ),
      mdContent: `---
title: "${pattern.name}"
ref: /aria-practices/

github:
  repository: bocoup/wai-aria-practices
  path: content/patterns.md
permalink: /patterns/${pattern.slug}

lang: en
last_updated: ${todayDate}
---

<body>
  ${pattern.page}
</body>
      `,
    };
  });

  await Promise.all([
    fs.writeFile(homeFilePath, homeContent),
    fs.writeFile(patternsFilePath, patternsContent),
    ...patternPages.map(({ mdPath, mdContent }) => {
      return fs.writeFile(mdPath, mdContent);
    }),
  ]);
};

module.exports = organizeForJekyll;
