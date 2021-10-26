const path = require("path");
const fs = require("fs/promises");
const { parse: parseHtml } = require("node-html-parser");
const walkHtmlElements = require("../../utilities/walkHtmlElements");
const getTemplateBoilerplate = require("../getTemplateBoilerplate");
const { getHandleElement, getContent } = require("./handleElement");

const loadIndex = async (filePath) => {
  const html = await fs.readFile(filePath, { encoding: "utf8" });
  const permalink = `/index/`;

  const root = parseHtml(html);

  walkHtmlElements(root, getHandleElement(permalink));

  const { /* title, */ head, body } = getContent();

  return getTemplateBoilerplate({
    title: "Index",
    permalink,
    head: head,
    content: `
      <div class="sidebar-container">
        <aside class="sidebar-left">
          <h2 class="sidebar-headline">Table of Contents</h2>
          <ul class="sidebar-list">
            <li>
              <a href="#examples_by_role_label">Examples by Role</a>
            </li>
            <li>
              <a href="#examples_by_props_label">
                Examples by Properties and States
              </a>
            </li>
          </ul>
        </aside>
        <div class="sidebar-right">
          <h2>About the Index</h2>
          <p>
            This page includes a list of all ARIA design pattern examples 
            indexed either by role or by ARIA properties and states.
          </p>
          ${body}
        </div>
      </div>
    `,
  });
};

module.exports = loadIndex;
