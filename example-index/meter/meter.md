---
# This is a generated file
title: " Meter Example"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /example-index/meter/meter

lang: en
last_updated: 2021-12-14
---
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
  integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
  crossorigin="anonymous"
/>

<script src="../js/examples.js" type="text/javascript"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>

<link rel="stylesheet" href="css/meter.css" />
<script src="js/meter.js" type="text/javascript"></script>


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
                      <a href="#kbd_label">Keyboard Support</a>
                    </li>
                   
                    <li>
                      <a href="#rps_label">Role, Property, State, and Tabindex Attributes</a>
                    </li>
                   
                    <li>
                      <a href="#javascript-and-css-source-code">Javascript and CSS Source Code</a>
                    </li>
                   
                    <li>
                      <a href="#sc1_label">HTML Source Code</a>
                    </li>
                  
            </ul>
            
  <ul class="sidebar-list sidebar-list-yellow">
    <li><a href="../../../#browser_and_AT_support">Browser and Assistive Technology Support</a></li>
    <li><a href="https://github.com/w3c/aria-practices/issues/new">Report Issue</a></li>
    <li><a href="https://github.com/w3c/aria-practices/projects/30">Related Issues</a></li>
    <li><a href="/patterns/meter/">Design Pattern</a></li>
  </ul>

          </aside>
          <div class="sidebar-right"><h2 class="followed-by-support-notice">About This Example</h2><img alt=""
        src="/assets/img/meter.svg"
        class="example-page-example-icon"
      >

<div>
  
  <p>The following example of a CPU meter demonstrates the <a href="/patterns/meter/">meter design pattern</a>.</p>

  <section>
    <div class="example-header">
      <h2 id="ex_label" tabindex="-1">Example</h2>
    </div>
    <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>

    <div id="example">
      <p>The value of this meter changes every 5 seconds. Use the pause button to stop changes.</p>
      <h3 id="cpu_usage_label">Central Processing Unit (CPU) Usage</h3>
      <p>
        <button type="button" class="play-meters">Pause Updates</button>
      </p>
      <div role="meter" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" aria-labelledby="cpu_usage_label">
        <svg width="100" height="100" class="fill" aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="100%" height="100%" fill="currentColor" ></rect>
        </svg>
      </div>
    </div>
    <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
  </section>
  <section>
    <h2 id="kbd_label" tabindex="-1">Keyboard Support</h2>
    <p>Not applicable.</p>
  </section>

  <section>
    <h2 id="rps_label" tabindex="-1">Role, Property, State, and Tabindex Attributes</h2>
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
        <tr data-test-id="meter-role">
          <th scope="row"><code>meter</code></th>
          <td></td>
          <td>
            <code>div</code>
          </td>
          <td>
            <ul>
              <li>Identifies the element as a <code>meter</code>.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="meter-aria-valuemin">
          <td></td>
          <th scope="row"><code>aria-valuemin="NUMBER"</code></th>
          <td><code>div</code></td>
          <td>Specifies the minimum value the meter can have.</td>
        </tr>
        <tr data-test-id="meter-aria-valuemax">
          <td></td>
          <th scope="row"><code>aria-valuemax="NUMBER"</code></th>
          <td><code>div</code></td>
          <td>Specifies the maximum value the meter can have.</td>
        </tr>
        <tr data-test-id="meter-aria-valuenow">
          <td></td>
          <th scope="row"><code>aria-valuenow="NUMBER"</code></th>
          <td><code>div</code></td>
          <td>Specifies the current value of the meter.</td>
        </tr>
        <tr data-test-id="meter-aria-labelledby">
          <td></td>
          <th scope="row"><code>aria-labelledby</code></th>
          <td><code>div</code></td>
          <td>Identifies the element that provides the accessible name of the <code>meter</code>.</td>
        </tr>
      </tbody>
    </table></div>
  </section>

  <section>
    <h2 tabindex="-1" id="javascript-and-css-source-code">Javascript and CSS Source Code</h2>

    <ul id="css_js_files">
      <li>
        CSS:
        <a href="css/meter.css" type="text/css">meter.css</a>
      </li>
      <li>
        Javascript:
        <a href="js/meter.js" type="text/javascript">meter.js</a>
      </li>
    </ul>
  </section>

  <section>
    <h2 id="sc1_label" tabindex="-1">HTML Source Code</h2>

    <div role="separator" id="sc1_start_sep" aria-labelledby="sc1_start_sep sc1_label" aria-label="Start of"></div>

    <pre><code id="source1"></code></pre>

    <div role="separator" id="sc1_end_sep" aria-labelledby="sc1_end_sep sc1_label" aria-label="End of"></div>

    <script>
      sourceCode.add('source1', 'example', 'ex_label', 'css_js_files');
      sourceCode.make();
    </script>
  </section>
</div>

  <nav>
      <a href="/patterns/meter/">Meter Design Pattern in WAI-ARIA Authoring Practices 1.2</a>
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
