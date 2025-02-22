---
# This file was generated by scripts/pre-build/library/formatForJekyll.js
title: "Table Example"
ref: /ARIA/apg/patterns/table/examples/table/

github:
  repository: w3c/aria-practices
  branch: main
  path: content/patterns/table/examples/table.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/patterns/table/examples/table/

sidebar: true

footer: "      <div class='example-page-footer'>        <p><a href='https://github.com/orgs/w3c/projects/134'>View issues related to this example</a></p>        <p>Page last updated: 22 October 2024</p>      </div>    "

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Table Example</title>

<script src="../../../../../../content-assets/wai-aria-practices/shared/js/examples.js"></script>
<script src="../../../../../../content-assets/wai-aria-practices/shared/js/highlight.pack.js"></script>
<script src="../../../../../../content-assets/wai-aria-practices/shared/js/app.js"></script>

<link
  href="../../../../../../content-assets/wai-aria-practices/patterns/table/examples/css/table.css"
  rel="stylesheet"
/>


<link 
  rel="stylesheet"
  href="{{ '/content-assets/wai-aria-practices/styles.css' | relative_url }}"
>
<!-- Code highlighting styles -->
<link 
  rel="stylesheet"
  href="{{ '/content-assets/wai-aria-practices/shared/css/github.css' | relative_url }}"
>

<script>
const addBodyClass = undefined;
const enableSidebar = true;
if (addBodyClass) document.body.classList.add(addBodyClass);
if (enableSidebar) document.body.classList.add('has-sidebar');
</script>
    

<script>
    const parentPage = window.location.pathname.match(
      /\/(patterns|practices|about)\//
    )?.[1];
    if (parentPage) {
      const parentHref = 'a[href*="' + parentPage + '"]';
      document.querySelector(parentHref).classList.add('active');
    }
  </script>
<div>

    <h2 id="support-notice-header">Read This First</h2>
    <details id="support-notice">
      <summary>
        The code in this example is not intended for production environments.
        Before using it for any purpose, read this to understand why.
      </summary>
      <p>This is an illustrative example of one way of using ARIA that conforms with the ARIA specification.</p>
      <ul>
        <li>
          There may be support gaps in some
          <a href="../../../../practices/read-me-first/#browser_and_AT_support">browser and assistive technology combinations</a>,
          especially for
          <a href="../../../../practices/read-me-first/#mobile_and_touch_support">mobile/touch devices</a>.
          Testing code based on this example with assistive technologies is essential before considering use in production systems.
        </li>
        <li>The <a href="https://aria-at.w3.org">ARIA and Assistive Technologies Project</a> is developing measurements of assistive technology support for APG examples.</li>
        <li>
          Robust accessibility can be further optimized by choosing implementation patterns that <a href="https://www.w3.org/TR/using-aria/#rule1">maximize use of semantic HTML</a> and heeding the warning that
          <a href="../../../../practices/read-me-first/#no_aria_better_bad_aria">No ARIA is better than Bad ARIA</a>.
        </li>
      </ul>
    </details>
  
    
    <div>
      

      <section>
        <h2>About This Example</h2>
        <img alt class="example-page-example-icon" src="../../../../../../content-images/wai-aria-practices/images/pattern-table.svg">
        <p>
          The below example illustrates an implementation of the WAI-ARIA <a href="../../">Table Pattern.</a>
          Note that when possible, using a native HTML <code>table</code> element is recommended.
        </p>
        <p>Similar examples include:</p>
        <ul>
          <li><a href="../sortable-table/">Sortable Table Example</a>: Basic HTML table that illustrates implementation of <code>aria-sort</code> in the headers of sortable columns.</li>
          <li><a href="../../../grid/examples/data-grids/">Data Grid Examples</a>: Three example implementations of grid that include features relevant to presenting tabular information, such as content editing, sort, and column hiding.</li>
        </ul>
      </section>

      <section>
        <div class="example-header">
          <h2 id="ex_label">Example</h2>
        </div>
        <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
        <div id="ex1">
          <div role="table" aria-label="Students" aria-describedby="students_table_desc">
            <div id="students_table_desc">Students currently enrolled in WAI-ARIA 101 for the coming semester</div>
            <div role="rowgroup">
              <div role="row">
                <span role="columnheader">First Name</span>
                <span role="columnheader">Last Name</span>
                <span role="columnheader">Company</span>
                <span role="columnheader">Address</span>
              </div>
            </div>
            <div role="rowgroup">
              <div role="row">
                <span role="cell">Fred</span>
                <span role="cell">Jackson</span>
                <span role="cell">Acme, Inc.</span>
                <span role="cell">123 Broad St.</span>
              </div>
              <div role="row">
                <span role="cell">Sara</span>
                <span role="cell">James</span>
                <span role="cell">Acme, Inc.</span>
                <span role="cell">123 Broad St.</span>
              </div>
              <div role="row">
                <span role="cell">Ralph</span>
                <span role="cell">Jefferson</span>
                <span role="cell">XYZ, Inc.</span>
                <span role="cell">456 Main St.</span>
              </div>
              <div role="row">
                <span role="cell">Nancy</span>
                <span role="cell">Jensen</span>
                <span role="cell">XYZ, Inc.</span>
                <span role="cell">456 Main St.</span>
              </div>
            </div>
          </div>
        </div>
        <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
      </section>

      <section>
        <h2 id="kbd_label">Keyboard Support</h2>
        <p>Not Applicable</p>
      </section>

      <section>
        <h2 id="rps_label">Role, Property, State, and Tabindex Attributes</h2>
        <div class="table-wrap"><table aria-labelledby="rps_label" class="data attributes">
          <thead>
            <tr>
              <th scope="col">Role</th>
              <th scope="col">Attribute</th>
              <th scope="col">Element</th>
              <th scope="col">Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr data-test-id="table-role">
              <th scope="row"><code>table</code></th>
              <td></td>
              <td><code>div</code></td>
              <td>Identifies the element containing the table structure.</td>
            </tr>
            <tr data-test-id="table-aria-label">
              <td></td>
              <th scope="row">
                <code>aria-label=&quot;Students&quot;</code>
              </th>
              <td><code>div</code></td>
              <td>Provides an accessible name for the table.</td>
            </tr>
            <tr data-test-id="table-aria-describedby">
              <td></td>
              <th scope="row">
                <code>aria-describedby=&quot;IDREF&quot;</code>
              </th>
              <td><code>div</code></td>
              <td>Refers to the element that serves as the caption for the table.</td>
            </tr>
            <tr data-test-id="rowgroup-role">
              <th scope="row"><code>rowgroup</code></th>
              <td></td>
              <td><code>div</code></td>
              <td>
                <ul>
                  <li>Identifies the elements that serve as containers for the table header and table body rows.</li>
                  <li>Unlike HTML, WAI-ARIA does not include separate roles for the table header and table body row sets.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="row-role">
              <th scope="row"><code>row</code></th>
              <td></td>
              <td><code>div</code></td>
              <td>Identifies each element that contains the cells for a row.</td>
            </tr>
            <tr data-test-id="columnheader-role">
              <th scope="row"><code>columnheader</code></th>
              <td></td>
              <td><code>span</code></td>
              <td>Identifies elements that serve as a cell containing a column label.</td>
            </tr>
            <tr data-test-id="cell-role">
              <th scope="row"><code>cell</code></th>
              <td></td>
              <td><code>span</code></td>
              <td>Identifies elements containing content for a single cell.</td>
            </tr>
          </tbody>
        </table></div>
      </section>

      <section>
        <h2>JavaScript and CSS Source Code</h2>
        
        <ul id="css_js_files">
          <li>
            CSS:
            <a href="../../../../../../content-assets/wai-aria-practices/patterns/table/examples/css/table.css" type="tex/css">table.css</a>
          </li>
          <li>Javascript: Not applicable.</li>
        </ul>
      </section>

      <section class="example-code">
        <h2 id="sc1_label">HTML Source Code</h2>
        <p id="sc1_description">To copy the following HTML code, please open it in CodePen.</p>
        <div role="separator" id="sc1_start_sep" aria-labelledby="sc1_start_sep sc1_label" aria-label="Start of"></div>
        <pre><code id="sc1"></code></pre>
        <div role="separator" id="sc1_end_sep" aria-labelledby="sc1_end_sep sc1_label" aria-label="End of"></div>
        <script>
          sourceCode.add('sc1', 'ex1', 'ex_label', 'css_js_files', 'sc1_description');
          sourceCode.make();
        </script>
      </section>
    </div>
  
</div>
<script
  src="{{ '/content-assets/wai-aria-practices/shared/js/skipto.js' | relative_url }}"
  data-skipto="colorTheme:aria; displayOption:popup; containerElement:div"
></script>

