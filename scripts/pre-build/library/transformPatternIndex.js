const path = require("path");
const fs = require("fs/promises");
const { parse: parseHtml } = require("node-html-parser");
const glob = require("glob");
const formatForJekyll = require("./formatForJekyll");
const { rewriteSourcePath } = require("./rewritePath");

const transformPatternIndex = async (sourcePath /* , sourceContents */) => {
  const { sitePath, githubPath } = rewriteSourcePath(sourcePath);

  const patterns = [];

  const patternPaths = await new Promise((resolve, reject) => {
    glob(
      path.resolve(
        __dirname,
        "../../../_external/aria-practices/content/patterns/*/*-pattern.html"
      ),
      {},
      (error, patternPaths) => {
        if (error) return reject(error);
        resolve(patternPaths);
      }
    );
  });

  for (const patternPath of patternPaths) {
    const { sitePath } = rewriteSourcePath(patternPath);

    const patternContents = await fs.readFile(patternPath, {
      encoding: "utf8",
    });

    const patternHtml = parseHtml(patternContents);

    let title = patternHtml.querySelector("h1").innerHTML.trim();
    if (!title.match(/ Pattern\b/)) {
      throw new Error("Found pattern with unexpected h1 headline");
    }
    title = title.replace(/ Pattern/g, "");

    const slug = patternPath.match(
      /content\/patterns\/([^/]+)\/[^/]+-pattern\.html/
    )?.[1];

    let firstParagraph = patternHtml.querySelectorAll("p")[0].textContent;
    if (firstParagraph.trim().startsWith("NOTE:")) {
      firstParagraph = patternHtml.querySelectorAll("p")[1].textContent;
    }
    const periodMatch = /(\.[^\w]|\.$)/.exec(firstParagraph);
    const incompleteSentence = periodMatch === null;
    if (incompleteSentence)
      throw new Error(
        `Pattern ${slug} does not begin with a complete sentence.`
      );
    const endOfSentence = periodMatch.index + 1;
    const firstSentence = firstParagraph.substr(0, endOfSentence);

    patterns.push({ sitePath, title, slug, introduction: firstSentence });
  }

  patterns.sort((a, b) => a.title.localeCompare(b.title));

  const content = `
    {% include read-this-first.html %}
    <ul class="tiles">
      ${patterns
        .map((pattern, index) => {
          let patternContent = `
            <li class="tile tile-${pattern.slug}">
              <a href="{{ '/ARIA/apg/${pattern.sitePath}' | relative_url }}">
                <h2 class="tile-name">
                  <img 
                    src="{{ '/content-images/wai-aria-practices/img/${pattern.slug}.svg' | relative_url }}" 
                    alt=""
                  >
                  <span>${pattern.title}</span>
                </h2>
              </a>
              <div class="tile-introduction">${pattern.introduction}</div>
            </li>
          `;

          if (pattern.title.startsWith("Grid")) {
            if (!patterns[index + 1].title.startsWith("Link")) {
              throw new Error(
                "Cannot insert the landmarks pattern link because the " +
                  "correct alphabetical position has diverged from a known " +
                  "state."
              );
            }
            // This pattern is not like the others and needs separate handling
            patternContent += `
              <li class="tile tile-landmarks">
                <a 
                  href="{{ '/ARIA/apg/patterns/landmarks/examples/index.html' | relative_url }}"
                >
                  <h2 class="tile-name">
                    <img 
                      src="{{ '/content-images/wai-aria-practices/img/landmarks.svg' | relative_url }}" 
                      alt=""
                    >
                    <span>Landmarks</span>
                  </h2>
                </a>
                <div class="tile-introduction">
                  Landmarks provide a powerful way to identify the 
                  organization and structure of a web page.
                </div>
              </li>
            `;
          }

          return patternContent;
        })
        .join(" ")}
    </ul>
  `;

  return formatForJekyll({
    title: "Patterns",
    sitePath,
    githubPath,
    content,
    enableSidebar: false,
  });
};

module.exports = transformPatternIndex;
