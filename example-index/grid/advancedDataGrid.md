---
# This is a generated file
title: "Advanced Data Grid"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /example-index/grid/advancedDataGrid

lang: en
last_updated: 2021-12-14
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


<link rel="stylesheet" href="/assets/styles.css">
<!-- Code highlighting styles -->
<link rel="stylesheet" href="/example-index/css/github.css">

<div>

        <div class="sidebar-container">
          <aside class="sidebar-left" aria-describedby="sidebar-toc">
            <h2 id="sidebar-toc" class="sidebar-headline">Table of Contents</h2>
            <ul class="sidebar-list">
              
                    <li>
                      <a href="#ex_label">Example</a>
                    </li>
                   
                    <li>
                      <a href="#accessibility-features">Accessibility Features</a>
                    </li>
                   
                    <li>
                      <a href="#kbd_label">Keyboard Support</a>
                    </li>
                   
                    <li>
                      <a href="#rps_label">Role, Property, State, and Tabindex  Attributes</a>
                    </li>
                   
                    <li>
                      <a href="#javascript-and-css-source-code">Javascript and CSS Source Code</a>
                    </li>
                   
                    <li>
                      <a href="#sc1_label">HTML Source Code</a>
                    </li>
                  
            </ul>
            
    <ul class="sidebar-list sidebar-list-yellow">
      <li><a href="/#browser_and_AT_support">Browser and Assistive Technology Support</a></li>
      <li><a href="https://github.com/w3c/aria-practices/issues/new">Report Issue</a></li>
      <li><a href="https://github.com/w3c/aria-practices/projects/15">Related Issues</a></li>
      <li><a href="/patterns/grid/">Design Pattern</a></li>
    </ul>
  
          </aside>
          <div class="sidebar-right"><h2 class="followed-by-support-notice">About This Example</h2><img alt=""
        src="/assets/img/grid.svg"
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
    <a href="/patterns/grid/">design pattern for grid</a>
    demonstrates how to implement a grid that has functionality similar to a spreadsheet.
  </p>
  <p>Similar examples include:</p>
  <ul>
    <li><a href="dataGrids.html">Data Grid Examples</a>: Three example implementations of grid that include features relevant to presenting tabular information, such as content editing, sort, and column hiding.</li>
    <li><a href="LayoutGrids.html">Layout Grid Examples</a>: Three example implementations of grids that are used to lay out widgets, including a collection of navigation links, a message recipients list, and a set of search results.</li>
  </ul>
  <section>
    <h2 id="ex_label" tabindex="-1">Example</h2>
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
    <h2 tabindex="-1" id="accessibility-features">Accessibility Features</h2>
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
    <h2 id="kbd_label" tabindex="-1">Keyboard Support</h2>
    
    <ul>
      <li><kbd>KEY_NAME</kbd>: function</li>
      <li><kbd>KEY_NAME</kbd>: function</li>
    </ul>
  </section>

  <section>
    <h2 id="rps_label" tabindex="-1">Role, Property, State, and Tabindex  Attributes</h2>
    
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
    <h2 tabindex="-1" id="javascript-and-css-source-code">Javascript and CSS Source Code</h2>
    
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
    <h2 id="sc1_label" tabindex="-1">HTML Source Code</h2>
    <div role="separator" id="sc1_start_sep" aria-labelledby="sc1_start_sep sc1_label" aria-label="Start of"></div>
    <pre><code id="sc1"></code></pre>
    <div role="separator" id="sc1_end_sep" aria-labelledby="sc1_end_sep sc1_label" aria-label="End of"></div>
    
    <script>
      sourceCode.add('sc1', 'ex1');
      sourceCode.make();
    </script>
  </section>
  </div>
  <nav>
    
    <a href="/patterns/grid/">Grid Design Pattern in WAI-ARIA Authoring Practices 1.2</a>
  </nav>
</div>
        </div>
      
</div>
<script>
  var SkipToConfig = {
    settings: {
      skipTo: {
        displayOption: 'popup',
        attachElement: '#site-header',
        colorTheme: 'aria'
      }
    }
  };
</script>
<script src="/assets/skipto.min.js"></script>
