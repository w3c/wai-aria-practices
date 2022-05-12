const path = require("path");
const fs = require("fs/promises");
const { parse: parseHtml } = require("node-html-parser");

const loadHomepage = async () => {
  const apgPath = path.resolve(__dirname, "../../../_external/aria-practices");
  const homepagePath = path.join(apgPath, "/index.html");
  const assetsPath = path.resolve(
    __dirname,
    "../../../content-assets/wai-aria-practices/generated"
  );

  const homepageString = await fs.readFile(homepagePath, "utf8");
  const root = parseHtml(homepageString);
  const body = root.querySelector("body");

  const copyImg = async (img) => {
    const imgPath = img.getAttribute("src");
    const fileName = path.basename(imgPath);
    const apgImgPath = path.join(apgPath, imgPath);
    const updatedPath = path.join(assetsPath, fileName);
    img.setAttribute(
      "src",
      `content-assets/wai-aria-practices/generated/${fileName}`
    );
    await fs.copyFile(apgImgPath, updatedPath);
  };

  const mailing = body.querySelector("#collaboration li:last-of-type");

  const homepageContent = `
    <link 
      rel="stylesheet"
      href="{{ site.baseurl }}/content-assets/wai-aria-practices/homepage.css"
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
          ${await (async () => {
            const img = body.querySelector("#top-card img");
            await copyImg(img);
            return img.outerHTML;
          })()}
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
        ${await (async () => {
          return Promise.all(
            body.querySelectorAll("#resources li").map(async (resource) => {
              const img = resource.querySelector("img");
              await copyImg(img);
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
                  ${img.outerHTML}
                </div>
              </div>`;
            })
          ).then((htmlStrings) => htmlStrings.join(""));
        })()}
      </div>
      <div class="work-grid-pattern grid-pattern"></div>
    </div>
    <div class="off-white-section">
      <div class="centered margin-fix">
        <div class="detail-5"></div>
        <h2>${body.querySelector("#work h2").innerHTML}</h2>
        <p>${body.querySelector("#work p").innerHTML}</p>
      </div>
      <div class="contained margin-fix">
        <div class="work-items">
          <div class="detail-6"></div>
          <div class="work-detail-4 detail-4"></div>
          <div class="work-detail-1 detail-1"></div>
          ${body
            .querySelectorAll("#work li")
            .map((work) => {
              return `
                <div class="work-item">
                  <h3>${work.querySelector("h3").innerHTML}</h3>
                  <p>${work.querySelector("p").innerHTML}</p>
                  ${work.querySelector("a").outerHTML}
                </div>
              `;
            })
            .join("")}
        </div>
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
        ${await (async () => {
          return Promise.all(
            body
              .querySelectorAll("#collaboration li:not(:last-of-type)")
              .map(async (item) => {
                const img = item.querySelector("img");
                await copyImg(img);
                return `
                  <div class="collaboration-item">
                    ${img.outerHTML}
                    <h3>${item.querySelector("h3").innerHTML}</h3>
                    <p>${item.querySelector("p").innerHTML}</p>
                    ${item.querySelector("a").outerHTML}
                  </div>
                `;
              })
          ).then((htmlStrings) => htmlStrings.join(""));
        })()}

        <div class="collaboration-item mailing-list-item">
          <div class="collaboration-detail-4 detail-4"></div>
          ${await (async () => {
            const img = mailing.querySelector("img");
            await copyImg(img);
            return img.outerHTML;
          })()}
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

  return homepageContent;
};

module.exports = loadHomepage;
