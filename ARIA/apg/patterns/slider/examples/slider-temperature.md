---
# This file was generated by scripts/pre-build/library/formatForJekyll.js
title: "Vertical Temperature Slider Example"
ref: /ARIA/apg/patterns/slider/examples/slider-temperature/

github:
  repository: w3c/aria-practices
  branch: main
  path: content/patterns/slider/examples/slider-temperature.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/patterns/slider/examples/slider-temperature/

sidebar: true

footer: "      <div class='example-page-footer'>        <p><a href='https://github.com/orgs/w3c/projects/124'>View issues related to this example</a></p>        <p>Page last updated: 3 June 2025</p>      </div>    "

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Vertical Temperature Slider Example</title>

<script src="../../../../../../content-assets/wai-aria-practices/shared/js/examples.js"></script>
<script src="../../../../../../content-assets/wai-aria-practices/shared/js/highlight.pack.js"></script>
<script src="../../../../../../content-assets/wai-aria-practices/shared/js/app.js"></script>

<link
  rel="stylesheet"
  href="../../../../../../content-assets/wai-aria-practices/patterns/slider/examples/css/slider-temperature.css"
/>
<script src="../../../../../../content-assets/wai-aria-practices/patterns/slider/examples/js/slider-temperature.js"></script>


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
        <div class="advisement">
          <h3>Warning!</h3>
          <p>
            Some users of touch-based assistive technologies may experience difficulty utilizing widgets that implement this slider pattern because the gestures their assistive technology provides for operating sliders may not yet generate the necessary output.
            To change the slider value, touch-based assistive technologies need to respond to user gestures for increasing and decreasing the value by synthesizing key events.
            This is a new convention that may not be fully implemented by some assistive technologies.
            Authors should fully test slider widgets using assistive technologies on devices where touch is a primary input mechanism before considering incorporation into production systems.
          </p>
        </div>
        <img alt class="example-page-example-icon" src="../../../../../../content-images/wai-aria-practices/images/pattern-slider.svg">
        <p>
          The following example is a vertically oriented temperature control that implements the <a href="../../">Slider Pattern</a>.
          The slider illustrates use of <code>aria-orientation</code> to specify vertical orientation and use of <code>aria-valuetext</code> to convey unit of measure for numeric values to assistive technology users by appending <q>degrees Celsius</q> to the current value.
        </p>
        <p>Similar examples include:</p>
        <ul>
          <li><a href="../slider-color-viewer/">Color Viewer Slider Example</a>: Basic horizontal sliders that illustrate setting numeric values for a color picker.</li>
          <li><a href="../slider-rating/">Rating Slider Example</a>: Horizontal slider that demonstrates using <code>aria-valuetext</code> to make it easy for assistive technology users to understand the meaning of the current value chosen on a ten-point satisfaction scale.</li>
          <li><a href="../slider-seek/">Media Seek Slider Example</a>: Horizontal slider that demonstrates using <code>aria-valuetext</code> to communicate current and maximum values of time in media to make the values easy to understand for assistive technology users by converting the total number of seconds to minutes and seconds.</li>
          <li><a href="../../../slider-multithumb/examples/slider-multithumb/">Horizontal Multi-Thumb Slider Example</a>: Demonstrates using sliders with two thumbs to provide inputs for numeric ranges, such as for searching in a price range.</li>
        </ul>
      </section>

      <section>
        <div class="example-header">
          <h2 id="ex_label">Example</h2>
        </div>
        <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
        <div id="ex1" class="example">
          <div class="slider-temperature">
            <div id="id-temp-label" class="label">Temperature</div>

            <svg role="none" class="slider-group" width="145" height="360">
              <g role="slider" id="id-temp-slider" aria-orientation="vertical" tabindex="0" aria-valuemin="10.0" aria-valuenow="25.0" aria-valuetext="25.0 degrees Celsius" aria-valuemax="38.0" aria-labelledby="id-temp-label">
                <text class="temp-value" x="28" y="35">25°C</text>
                <rect class="rail" x="60" y="47" width="8" height="300" rx="5" aria-hidden="true" ></rect>
                <text class="value" x="94" y="150">25°C</text>
                <rect class="focus-ring" x="35" y="170" width="105" height="24" rx="12" ></rect>
                <rect class="thumb" x="35" y="145" width="48" height="14" rx="5" ></rect>
              </g>
            </svg>
          </div>
        </div>
        <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
      </section>

      <section>
        <h2>Accessibility Features</h2>
        <ul>
          <li>The display of the slider's current value remains adjacent to the thumb as the thumb is moved, so people with a small field of view (e.g., due to magnification) can easily see the value while focusing on the thumb as they move it.</li>
          <li>
            To ensure the borders of the slider rail, thumb and focus ring have sufficient contrast with the background when high contrast settings invert colors, the color of the borders are synchronized with the color of the text content.
            For example, the color of the focus ring border is set to match the foreground color of high contrast mode text by specifying the CSS <code>currentcolor</code> value for the <code>stroke</code> property of the inline SVG <code>rect</code> element used to draw the focus ring border.
            To make the background of the <code>rect</code> match the high contrast background color, the <code>fill-opacity</code> attribute of the <code>rect</code> is set to zero.
            If specific colors were instead used to specify the <code>stroke</code> and <code>fill</code> properties, those colors would remain the same in high contrast mode, which could lead to insufficient contrast between the rail and the thumb or even make them invisible if their color matched the high contrast mode background.<br>
            Note: The SVG element needs to have the CSS <code>forced-color-adjust</code> property set to <code>auto</code> for the <code>currentcolor</code> value to be updated in high contrast mode.
            Some browsers do not use <code>auto</code> for the default value.
          </li>
        </ul>
      </section>

      <section>
        <h2 id="kbd_label">Keyboard Support</h2>
        <div class="table-wrap"><table aria-labelledby="kbd_label" class="def">
          <thead>
            <tr>
              <th>Key</th>
              <th>Function</th>
            </tr>
          </thead>
          <tbody>
            <tr data-test-id="key-right-arrow">
              <th>
                <kbd>Right Arrow</kbd>
              </th>
              <td>Increases slider value one step.</td>
            </tr>
            <tr data-test-id="key-up-arrow">
              <th>
                <kbd>Up Arrow</kbd>
              </th>
              <td>Increases slider value one step.</td>
            </tr>
            <tr data-test-id="key-left-arrow">
              <th>
                <kbd>Left Arrow</kbd>
              </th>
              <td>Decreases slider value one step.</td>
            </tr>
            <tr data-test-id="key-down-arrow">
              <th>
                <kbd>Down Arrow</kbd>
              </th>
              <td>Decreases slider value one step.</td>
            </tr>
            <tr data-test-id="key-page-up">
              <th>
                <kbd>Page Up</kbd>
              </th>
              <td>
                Increases temperature slider value multiple steps.
                In this slider, jumps twenty steps (e.g. 2°C).
              </td>
            </tr>
            <tr data-test-id="key-page-down">
              <th>
                <kbd>Page Down</kbd>
              </th>
              <td>
                Decreases temperature slider value multiple steps.
                In this slider, jumps twenty steps (e.g. 2°C).
              </td>
            </tr>
            <tr data-test-id="key-home">
              <th>
                <kbd>Home</kbd>
              </th>
              <td>Sets slider to its minimum value.</td>
            </tr>
            <tr data-test-id="key-end">
              <th>
                <kbd>End</kbd>
              </th>
              <td>Sets slider to its maximum value.</td>
            </tr>
          </tbody>
        </table></div>
      </section>

      <section>
        <h2 id="rps_label">Role, Property, State, and Tabindex Attributes</h2>
        <div class="table-wrap"><table aria-labelledby="rps_label rps_label" class="data attributes">
          <thead>
            <tr>
              <th scope="col">Role</th>
              <th scope="col">Attribute</th>
              <th scope="col">Element</th>
              <th scope="col">Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr data-test-id="svg-none">
              <th scope="row">
                <code>none</code>
              </th>
              <td></td>
              <td>
                <code>svg</code>
              </td>
              <td>ensures assistive technologies do not present the SVG element as an image or any other type of meaningful element.</td>
            </tr>
            <tr data-test-id="slider-role">
              <th scope="row">
                <code>slider</code>
              </th>
              <td></td>
              <td>
                <code>g</code>
              </td>
              <td>
                <ul>
                  <li>Identifies the element as a slider.</li>
                  <li>Set on the <code>g</code> element that represents the movable thumb because it is the operable element that receives focus and conveys the value.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="slider-tabindex">
              <td></td>
              <th scope="row">
                <code>tabindex="0"</code>
              </th>
              <td>
                <code>g</code>
              </td>
              <td>Includes the slider thumb in the page tab sequence.</td>
            </tr>
            <tr data-test-id="aria-orientation">
              <td></td>
              <th scope="row">
                <code>aria-orientation</code>
              </th>
              <td>
                <code>g</code>
              </td>
              <td>Indicates the slider is vertically oriented.</td>
            </tr>
            <tr data-test-id="aria-valuemax">
              <td></td>
              <th scope="row">
                <code>aria-valuemax="NUMBER"</code>
              </th>
              <td>
                <code>g</code>
              </td>
              <td>Specifies the numeric value that is the maximum allowed value of the slider.</td>
            </tr>
            <tr data-test-id="aria-valuemin">
              <td></td>
              <th scope="row">
                <code>aria-valuemin="NUMBER"</code>
              </th>
              <td>
                <code>g</code>
              </td>
              <td>Specifies the numeric value that is the minimum allowed value of the slider.</td>
            </tr>
            <tr data-test-id="aria-valuenow">
              <td></td>
              <th scope="row">
                <code>aria-valuenow="NUMBER"</code>
              </th>
              <td>
                <code>g</code>
              </td>
              <td>A numeric value that is the current value of the slider.</td>
            </tr>
            <tr data-test-id="aria-valuetext">
              <td></td>
              <th scope="row">
                <code>aria-valuetext="STRING"</code>
              </th>
              <td>
                <code>g</code>
              </td>
              <td>Provides a more user-friendly name for the current value of the slider by combining the current value with the string <q> degrees Celsius</q>.</td>
            </tr>
            <tr data-test-id="aria-labelledby">
              <td></td>
              <th scope="row">
                <code>aria-labelledby="IDREF"</code>
              </th>
              <td>
                <code>g</code>
              </td>
              <td>Refers to the element containing the name (e.g. label) of the slider.</td>
            </tr>
            <tr data-test-id="aria-hidden-rect">
              <td></td>
              <th scope="row">
                <code>aria-hidden="true"</code>
              </th>
              <td>
                <code>rect</code>
              </td>
              <td>Removes the SVG <code>rect</code> element from the accessibility tree to prevent screen readers from presenting it as a meaningful image.</td>
            </tr>
          </tbody>
        </table></div>
      </section>

      <section>
        <h2>JavaScript and CSS Source Code</h2>
        <ul id="css_js_files">
          <li>CSS: <a href="../../../../../../content-assets/wai-aria-practices/patterns/slider/examples/css/slider-temperature.css" type="text/css">slider-temperature.css</a></li>
          <li>Javascript: <a href="../../../../../../content-assets/wai-aria-practices/patterns/slider/examples/js/slider-temperature.js" type="text/javascript">slider-temperature.js</a></li>
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

