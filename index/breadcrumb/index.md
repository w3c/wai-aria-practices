---
# This is a generated file
title: "Breadcrumb Example"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /index/breadcrumb/index

lang: en
last_updated: 2021-12-20
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>

<link href="css/breadcrumb.css" rel="stylesheet" />


<link rel="stylesheet" href="/assets/styles.css">
<!-- Code highlighting styles -->
<link rel="stylesheet" href="/index/css/github.css">

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
      <li><a href="https://github.com/w3c/aria-practices/projects/21">Related Issues</a></li>
      <li><a href="/patterns/breadcrumb/">Design Pattern</a></li>
    </ul>
  
          </aside>
          <div class="sidebar-right"><h2 class="followed-by-support-notice">About This Example</h2><img alt=""
        src="/assets/img/breadcrumb.svg"
        class="example-page-example-icon"
      >
  
    <div>
    
    <p>The following example demonstrates the <a href="/patterns/breadcrumb/">breadcrumb design pattern</a>.</p>
    <section>
      <div class="example-header">
        <h2 id="ex_label" tabindex="-1">Example</h2>
      </div>
      <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
      <div id="ex1">
        <nav aria-label="Breadcrumb" class="breadcrumb">
          <ol>
            <li>
              <a href="../../">WAI-ARIA Authoring Practices</a>
            </li>
            <li>
              <a href="/patterns/">Design Patterns</a>
            </li>
            <li>
              <a href="/patterns/breadcrumb/">Breadcrumb Pattern</a>
            </li>
            <li>
              <a href="index.html" aria-current="page">Breadcrumb Example</a>
            </li>
          </ol>
        </nav>
      </div>
      <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
    </section>

    <section>
      <h2 tabindex="-1" id="accessibility-features">Accessibility Features</h2>
      <ul>
        <li>The set of links is structured using an ordered list .</li>
        <li>A <code>nav</code> element labeled <q>Breadcrumb</q> identifies the structure as a breadcrumb trail and makes it a navigation landmark so that it is easy to locate.</li>
        <li>To prevent screen reader announcement of the visual separators between links, they are added via <abbr title="Cascading Style Sheets">CSS</abbr>:
          <ul>
            <li>
              The separators are part of the visual presentation that signifies the breadcrumb trail, which is already semantically represented by the <code>nav</code> element with its label of <q>Breadcrumb</q>.
              So, using a display technique that is not represented in the accessibility tree used by screen readers prevents redundant and potentially distracting verbosity.
            </li>
            <li>Each link has a border on one side that is skewed with the CSS’ <code>transform</code> property so it resembles a slash.</li>
          </ul>
        </li>
      </ul>
    </section>

    <section>
      <h2 id="kbd_label" tabindex="-1">Keyboard Support</h2>
      <p>No keyboard interaction needed.</p>
    </section>

    <section>
      <h2 id="rps_label" tabindex="-1">Role, Property, State, and Tabindex  Attributes</h2>
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
          <tr data-test-id="aria-label">
            <td></td>
            <th scope="row">
              <code>aria-label=<q>Breadcrumb</q></code>
            </th>
            <td>
              <code>nav</code>
            </td>
            <td>
              Provides a label that describes the type of navigation provided in the <code>nav</code> element.
            </td>
          </tr>
          <tr data-test-id="aria-current">
            <td></td>
            <th scope="row">
              <code>aria-current=<q>page</q></code>
            </th>
            <td>
              <code>a</code>
            </td>
            <td>
              Applied to the last link in the set to indicate that it represents the current page.
            </td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h2 tabindex="-1" id="javascript-and-css-source-code">Javascript and CSS Source Code</h2>
      <ul id="css_js_files">
        <li>
          CSS:
          <a href="css/breadcrumb.css" type="tex/css">breadcrumb.css</a>
        </li>
      </ul>
    </section>

    <section>
      <h2 id="sc1_label" tabindex="-1">HTML Source Code</h2>
      <div role="separator" id="sc1_start_sep" aria-labelledby="sc1_start_sep sc1_label" aria-label="Start of"></div>
      <pre><code id="sc1"></code></pre>
      <div role="separator" id="sc1_end_sep" aria-labelledby="sc1_end_sep sc1_label" aria-label="End of"></div>
      <script>
        sourceCode.add('sc1', 'ex1', 'ex_label', 'css_js_files');
        sourceCode.make();
      </script>
    </section>
    </div>

    <nav>
      <a href="/patterns/breadcrumb/">Breadcrumb Design Pattern in WAI-ARIA Authoring Practices 1.2</a>
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
