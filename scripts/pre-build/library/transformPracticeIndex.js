const path = require("path");
const fs = require("fs/promises");
const { parse: parseHtml } = require("node-html-parser");
const glob = require("glob");
const formatForJekyll = require("./formatForJekyll");
const { rewriteSourcePath } = require("./rewritePath");

const transformPracticeIndex = async (sourcePath /* , sourceContents */) => {
  const { sitePath, githubPath } = rewriteSourcePath(sourcePath);

  const practices = [];

  const practicePaths = await new Promise((resolve, reject) => {
    glob(
      path.resolve(
        __dirname,
        "../../../_external/aria-practices/content/practices/*/*-practice.html"
      ),
      {},
      (error, patternPaths) => {
        if (error) return reject(error);
        resolve(patternPaths);
      }
    );
  });

  for (const practicePath of practicePaths) {
    const { sitePath } = rewriteSourcePath(practicePath);
    const practiceContents = await fs.readFile(practicePath, {
      encoding: "utf8",
    });

    const practiceHtml = parseHtml(practiceContents);

    const title = practiceHtml.querySelector("h1").innerHTML;

    const slug = practicePath.match(
      /content\/practices\/([^/]+)\/[^/]+-practice\.html/
    )?.[1];

    let firstParagraph = practiceHtml.querySelectorAll("p")[0].textContent;
    // if (firstParagraph.trim().startsWith("NOTE:")) {
    //   firstParagraph = practiceHtml.querySelectorAll("p")[1].textContent;
    // }
    const periodMatch = /(\.[^\w]|\.$)/.exec(firstParagraph);
    const incompleteSentence = periodMatch === null;
    if (incompleteSentence)
      throw new Error(
        `Practice ${slug} does not begin with a complete sentence.`
      );
    const endOfSentence = periodMatch.index + 1;
    const firstSentence = firstParagraph.substr(0, endOfSentence);

    practices.push({ sitePath, title, slug, introduction: firstSentence });
  }

  const content = `
    {% include read-this-first.html %}
    <ul class="tiles">
      ${practices
        // Handled above with a special banner
        .filter((practice) => practice.slug !== "read-me-first")
        .map((practice) => {
          return `
            <li class="tile tile-${practice.slug}">
              <a 
                href="{{ '/ARIA/apg/practices/${practice.slug}/' | relative_url }}"
              >
                <h2 class="tile-name">
                  <span>${practice.title}</span>
                </h2>
              </a>
              <div class="tile-introduction">${practice.introduction}</div>
            </li>
          `;
        })
        .join(" ")}
    </ul>
  `;

  return formatForJekyll({
    title: "Practices",
    sitePath,
    githubPath,
    content,
    enableSidebar: false,
  });
};

module.exports = transformPracticeIndex;
