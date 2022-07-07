---
# This is a generated file
title: "Advanced Data Grid"
ref: /ARIA/apg/example-index/grid/advancedDataGrid

github:
  repository: w3c/aria-practices
  branch: main
  path: examples/grid/advancedDataGrid.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/example-index/grid/advancedDataGrid

sidebar: true

footer: "          <div class='example-page-footer'>            <p><a href='https://github.com/w3c/aria-practices/projects/15'>View issues related to this example</a></p>            <p>Page last updated: 23 November 2021</p>          </div>        "

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>
<script src="../js/utils.js" type="text/javascript"></script>

<link href="css/menuButton.css" rel="stylesheet" />
<link href="css/dataGrids.css" rel="stylesheet" />
<script src="js/menuButton.js" type="text/javascript"></script>
<script src="js/dataGrid.js" type="text/javascript"></script>
<script src="js/dataGrids.js" type="text/javascript"></script>


<link 
  rel="stylesheet"
  href="{{ '/content-assets/wai-aria-practices/styles.css' | relative_url }}"
>
<!-- Code highlighting styles -->
<link 
  rel="stylesheet"
  href="{{ '/ARIA/apg/example-index/css/github.css' | relative_url }}"
>

<script>
const addBodyClass = undefined;
const enableSidebar = true;
if (addBodyClass) document.body.classList.add(addBodyClass);
if (enableSidebar) document.body.classList.add('has-sidebar');
</script>
    

<script>
    const parentPage = window.location.pathname.match(
      /\/(patterns|practices|example-index)\//
    )?.[1];
    if (parentPage) {
      const parentHref = 'a[href*="' + parentPage + '"]';
      document.querySelector(parentHref).classList.add('active');
    }
  </script>
<div>

            <h2 id="support-notice-header">Read This First</h2>
            <details id="support-notice" class="note">
    
        <summary>
          <p>
            The code in this example is not intended for production environments. 
            Before using it for any purpose, read this to understand why.
          </p>
        </summary>
      
    <p>
        This is an illustrative example of one way of using ARIA that conforms with the ARIA specification.
    </p>
    <ul>
    <li>
        There may be support gaps in some
        <a href="{{ '/ARIA/apg/practices/read-me-first/#browser_and_AT_support' | relative_url }}">browser and assistive technology combinations</a>,
        especially for <a href="{{ '/ARIA/apg/practices/read-me-first/#mobile_and_touch_support' | relative_url }}">mobile/touch devices</a>.
        Testing code based on this example with assistive technologies is essential before considering use in production systems.
    </li>
    <li>
        The <a href="https://aria-at.w3.org">ARIA and Assistive Technologies Project</a>
        is developing measurements of assistive technology support for APG examples.
    </li>
    <li>
        Robust accessibility can be further optimized by choosing implementation patterns that
        <a href="https://www.w3.org/TR/using-aria/#rule1">maximize use of semantic HTML</a>
        and heeding the warning that
        <a href="{{ '/ARIA/apg/practices/read-me-first/#no_aria_better_bad_aria' | relative_url }}">No ARIA is better than Bad ARIA</a>.
    </li>
    </ul>
</details>
            <h2>About This Example</h2>
          <img alt=""
          src="{{ '/content-images/wai-aria-practices/img/grid.svg' | relative_url }}"
          class="example-page-example-icon"
        >
  
  <div>
  
  <p>
    This example has not yet been developed.
    Development is described in
    <a href="https://github.com/w3c/aria-practices/issues/155">issue 155.</a>
  </p>
  <p>
    This implementation of the
    <a href="{{ '/ARIA/apg/patterns/grid/' | relative_url }}">design pattern for grid</a>
    demonstrates how to implement a grid that has functionality similar to a spreadsheet.
  </p>
  <p>Similar examples include:</p>
  <ul>
    <li><a href="dataGrids.html">Data Grid Examples</a>: Three example implementations of grid that include features relevant to presenting tabular information, such as content editing, sort, and column hiding.</li>
    <li><a href="LayoutGrids.html">Layout Grid Examples</a>: Three example implementations of grids that are used to lay out widgets, including a collection of navigation links, a message recipients list, and a set of search results.</li>
  </ul>
  <section>
    <h2 id="ex_label">Example</h2>
    <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
    
    <div id="ex1">
      
      <p>This is the place where the reader will experience the functioning example.</p>
      <ul>
        <li>The HTML in this section along with the javascript and CSS it uses demonstrate
          the design pattern.</li>
        <li>
          When developing an example implementation for this guide, please follow the
          <a href="https://ianpouncey.github.io/code-guide/">APG example coding guidelines</a>
          .
        </li>
        
      </ul>
    </div>
    <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
  </section>

  <section>
    <h2>Accessibility Features</h2>
    <p class="annotate">Please replace this content with a list of accessibility features
      demonstrated in this implementation, such as:</p>
    <ol>
      <li>ARIA roles</li>
      <li>property and state information</li>
      <li>Event handlers</li>
      <li><code>tabindex</code> values</li>
    </ol>
  </section>

  <section>
    <h2 id="kbd_label">Keyboard Support</h2>
    
    <ul>
      <li><kbd>KEY_NAME</kbd>: function</li>
      <li><kbd>KEY_NAME</kbd>: function</li>
    </ul>
  </section>

  <section>
    <h2 id="rps_label">Role, Property, State, and Tabindex  Attributes</h2>
    
    <div class="table-wrap"><table aria-labelledby="rps_label" class="data attributes">
      <thead>
        <tr>
          <th>Attribute</th>
          <th>Applied to Element</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th><code>role=&quot;ROLE_NAME&quot;</code></th>
          <td><code>HTML_ELEMENT</code></td>
          <td>Brief explanation of usage, purpose, benefit, and/or guidance that is relevant to this specific implementation.</td>
        </tr>
        <tr>
          <th>
            
            <code>aria-labelledby=&quot;ID_REF&quot;</code>
          </th>
          <td><code>HTML_ELEMENT</code></td>
          <td>Brief explanation of usage, purpose, benefit, and/or guidance that is relevant to this specific implementation.</td>
        </tr>
        <tr>
          <th>And so on ... covering all relevant attributes</th>
          <td>...</td>
          <td>...</td>
        </tr>
      </tbody>
    </table></div>
  </section>

  <section>
    <h2>Javascript and CSS Source Code</h2>
    
    <ul>
      <li>
        CSS:
        
      </li>
      <li>
        Javascript:
        
      </li>
    </ul>
  </section>

  <section>
    <h2 id="sc1_label">HTML Source Code</h2>
    <div role="separator" id="sc1_start_sep" aria-labelledby="sc1_start_sep sc1_label" aria-label="Start of"></div>
    <pre><code id="sc1"></code></pre>
    <div role="separator" id="sc1_end_sep" aria-labelledby="sc1_end_sep sc1_label" aria-label="End of"></div>
    
    <script>
      sourceCode.add('sc1', 'ex1');
      sourceCode.make();
    </script>
  </section>
  </div>
  

</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/skipto.js' | relative_url }}"
></script>
