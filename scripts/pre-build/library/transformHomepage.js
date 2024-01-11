const { parse: parseHtml } = require("node-html-parser");
const { rewriteSourcePath } = require("./rewritePath");
const formatForJekyll = require("./formatForJekyll");
const rewriteElementPaths = require("./rewriteElementPaths");

const transformHomepage = async (sourcePath, sourceContents) => {
  const { sitePath, githubPath } = rewriteSourcePath(sourcePath);

  const html = parseHtml(sourceContents);
  await rewriteElementPaths(html, { onSourcePath: sourcePath });

  const body = html.querySelector("body");

  const mailing = body.querySelector("#collaboration li:last-of-type");

  const homepageContent = `
    <link 
      rel="stylesheet"
      href="{{ '/content-assets/wai-aria-practices/homepage.css' | relative_url }}"
    >
    <div class="off-white-section">
      <div class="contained top-contained margin-fix">
        <div class="top-section">
          <div class="top-box">
            <div class="top-detail-1 detail-1"></div>
            <div class="detail-2"></div>
            <h1>${body.querySelector("#top-card h1").innerHTML}</h1>
            <p>${body.querySelector("#top-card p").innerHTML}</p>
            ${(() => {
              const a = body.querySelector("#top-card a");
              a.classList.add("button-link");
              a.classList.add("button-link-white");
              return a.outerHTML;
            })()}
          </div>
          ${body.querySelector("#top-card img").outerHTML}
        </div>
      </div>
      <div class="detail-3"></div>
      <div class="top-grid-pattern grid-pattern"></div>
    </div>
    <div class="white-section">
      <div class="centered">
        <div class="resource-detail-4 detail-4"></div>
        <h2>${body.querySelector("#resources h2").innerHTML}</h2>
        <p>${body.querySelector("#resources p").innerHTML}</p>
      </div>
      <div class="contained margin-fix">
        ${body
          .querySelectorAll("#resources li")
          .map((resource) => {
            return `<div class="resource-item">
                <div class="resource-item-content">
                  <h3>${resource.querySelector("h3").innerHTML}</h3>
                  <p>
                    ${resource.querySelector("p").innerHTML}
                  </p>
                  ${(() => {
                    const a = resource.querySelector("a");
                    a.classList.add("button-link");
                    return a.outerHTML;
                  })()}
                </div>
                <div class="resource-item-img">
                  ${resource.querySelector("img").outerHTML}
                </div>
              </div>`;
          })
          .join("")}
      </div>
      <div class="collaboration-grid-pattern grid-pattern"></div>
    </div>
    <div class="white-section">
      <div class="centered margin-fix">
        <h2 class="collaboration-h2">
          ${body.querySelector("#collaboration h2").innerHTML}
        </h2>
        <p class="collaboration-p">
          ${body.querySelector("#collaboration p").innerHTML}
        </p>
      </div>
      <div class="collaboration-items">
        ${body
          .querySelectorAll("#collaboration li:not(:last-of-type)")
          .map((item) => {
            return `
                  <div class="collaboration-item">
                    ${item.querySelector("img").outerHTML}
                    <h3>${item.querySelector("h3").innerHTML}</h3>
                    <p>${item.querySelector("p").innerHTML}</p>
                    ${item.querySelector("a").outerHTML}
                  </div>
                `;
          })
          .join("")}

        <div class="collaboration-item mailing-list-item">
          <div class="collaboration-detail-4 detail-4"></div>
          ${mailing.querySelector("img").outerHTML}
          <div>
            <h3>${mailing.querySelector("h3").innerHTML}</h3>
            ${mailing
              .querySelectorAll("p")
              .map((p) => p.outerHTML)
              .join("")}
          </div>
        </div>
      </div>
      <div class="bottom-grid-pattern grid-pattern"></div>
    </div>
    <div class="bottom-off-white-section off-white-section"></div>
  `;

  // TODO: Remove conflicting img css properties

  return formatForJekyll({
    title: "ARIA Authoring Practices Guide",
    sitePath,
    githubPath,
    content: homepageContent,
    head: html.querySelector("head"),
  });
};

module.exports = transformHomepage;
