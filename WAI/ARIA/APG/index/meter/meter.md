---
# This is a generated file
title: " Meter Example"
ref: /WAI/ARIA/APG/index/meter/meter

github:
  repository: w3c/aria-practices
  branch: main
  path: examples/meter/meter.html
feedbackmail: public-aria-practices@w3.org
permalink: /WAI/ARIA/APG/index/meter/meter

sidebar: true

footer: "          <div class='example-page-footer'>            <p><a href='https://github.com/w3c/aria-practices/projects/30'>View issues related to this example</a></p>            <p>Page last updated: February 10, 2022</p>          </div>        "

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
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


<link rel="stylesheet" href="/content-assets/wai-aria-practices/styles.css">
<!-- Code highlighting styles -->
<link rel="stylesheet" href="/WAI/ARIA/APG/index/css/github.css">

<script>
const addBodyClass = undefined;
const enableSidebar = true;
if (addBodyClass) document.body.classList.add(addBodyClass);
if (enableSidebar) document.body.classList.add('has-sidebar');
</script>
    
<div>

            <h2>About This Example</h2>
            <details id="support-notice" class="note">
    <summary>Important Note About Use of This Example</summary>
    <p>
        Note: This is an illustrative example of one way of using ARIA that conforms with the ARIA specification.
    </p>
    <ul>
    <li>
        There may be support gaps in some
        <a href="/WAI/ARIA/APG/practices/read-me-first/#browser_and_AT_support">browser and assistive technology combinations</a>,
        especially for <a href="/WAI/ARIA/APG/practices/read-me-first/#mobile_and_touch_support">mobile/touch devices</a>.
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
        <a href="/WAI/ARIA/APG/practices/read-me-first/#no_aria_better_bad_aria">No ARIA is better than Bad ARIA</a>.
    </li>
    </ul>
</details>
          <img alt=""
          src="/content-assets/wai-aria-practices/img/meter.svg"
          class="example-page-example-icon"
        >

<div>
  
  <p>The following example of a CPU meter demonstrates the <a href="/WAI/ARIA/APG/patterns/meter/">meter design pattern</a>.</p>

  <section>
    <div class="example-header">
      <h2 id="ex_label">Example</h2>
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
    <h2 id="kbd_label">Keyboard Support</h2>
    <p>Not applicable.</p>
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
    <h2>Javascript and CSS Source Code</h2>

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
    <h2 id="sc1_label">HTML Source Code</h2>

    <div role="separator" id="sc1_start_sep" aria-labelledby="sc1_start_sep sc1_label" aria-label="Start of"></div>

    <pre><code id="source1"></code></pre>

    <div role="separator" id="sc1_end_sep" aria-labelledby="sc1_end_sep sc1_label" aria-label="End of"></div>

    <script>
      sourceCode.add('source1', 'example', 'ex_label', 'css_js_files');
      sourceCode.make();
    </script>
  </section>
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
<script src="/content-assets/wai-aria-practices/skipto.min.js"></script>
