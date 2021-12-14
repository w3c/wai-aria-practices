---
# This is a generated file
title: "Color Viewer Slider Example"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /index/slider/slider-color-viewer

lang: en
last_updated: 2021-12-14
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>

<link rel="stylesheet" type="text/css" href="css/slider-color-viewer.css" />
<script src="js/slider-color-viewer.js" type="text/javascript"></script>


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
      <li><a href="/#browser_and_AT_support">Browser and Assistive Technology Support</a></li>
      <li><a href="https://github.com/w3c/aria-practices/issues/new">Report Issue</a></li>
      <li><a href="https://github.com/w3c/aria-practices/projects/3">Related Issues</a></li>
      <li><a href="/patterns/slider/">Design Pattern</a></li>
    </ul>
  
          </aside>
          <div class="sidebar-right"><h2 class="followed-by-support-notice">About This Example</h2>
  
  <div>
    
  <div class="advisement">
    <p>
      <strong>WARNING!</strong> Some users of touch-based assistive technologies may experience difficulty utilizing widgets that implement this slider pattern because the gestures their assistive technology provides for operating sliders may not yet generate the necessary output.
      To change the slider value, touch-based assistive technologies need to respond to user gestures for increasing and decreasing the value by synthesizing key events.
      This is a new convention that may not be fully implemented by some assistive technologies.
      Authors should fully test slider widgets using assistive technologies on devices where touch is a primary input mechanism before considering incorporation into production systems.
    </p>
  </div><img alt=""
        src="/assets/img/slider.svg"
        class="example-page-example-icon"
      >
   <p>
      Following is an example of a color viewer that demonstrates the
      <a href="/patterns/slider/">slider design pattern.</a>
      Change the background of the color view box by adjusting the sliders for red, green, and blue values.
      The HEX and RGB values of the chosen color are displayed by the color view box.
    </p>
    <p>Similar examples include: </p>
    <ul>
      <li><a href="slider-temperature.html">Vertical Temperature Slider Example</a>: Demonstrates using <code>aria-orientation</code> to specify vertical orientation and <code>aria-valuetext</code> to communicate unit of measure for a temperature input.</li>
      <li><a href="slider-rating.html">Rating Slider Example</a>: Horizontal slider that demonstrates using <code>aria-valuetext</code> to communicate current and maximum value of a rating input for a five star rating scale.</li>
      <li><a href="slider-seek.html">Media Seek Slider Example</a>: Horizontal slider that demonstrates using <code>aria-valuetext</code> to communicate current and maximum values of time in media to make the values easy to understand for assistive technology users by converting the total number of seconds to minutes and seconds.</li>
      <li><a href="multithumb-slider.html">Horizontal Multi-Thumb Slider Example</a>: Demonstrates using sliders with two thumbs to provide inputs for  numeric ranges, such as for searching in a price range.</li>
    </ul>
    <section>
       <div class="example-header">
          <h2 id="ex_label" tabindex="-1">Example</h2>
       </div>
          <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
          <div id="ex1">
            <div class="color-viewer-sliders" role="group" aria-labelledby="id-color-viewer">
              <h3 id="id-color-viewer">Color Viewer</h3>

              <div id="id-red" class="color-slider-label">Red</div>
              <div class="color-slider red"
                  role="slider"
                  tabindex="0"
                  aria-valuemin="0"
                  aria-valuenow="128"
                  aria-valuemax="255"
                  aria-labelledby="id-red">

                

                <svg width="0" height="0" aria-hidden="true">
                  <text class="value" x="0" y="0">128</text>
                  <rect class="rail"  x="0" y="0" rx="0" width="0" height="0"></rect>
                  <rect class="fill"  x="0" y="0" rx="0" width="0" height="0"></rect>
                  <rect class="thumb" x="0" y="0" rx="0" width="0" height="0"></rect>
                  <rect class="focus" x="0" y="0" rx="0" width="0" height="0"></rect>
                </svg>
              </div>

              <div id="id-green" class="color-slider-label">Green</div>
              <div class="color-slider green"
                  role="slider"
                  tabindex="0"
                  aria-valuemin="0"
                  aria-valuenow="128"
                  aria-valuemax="255"
                  aria-labelledby="id-green">

                

                <svg width="0" height="0" aria-hidden="true">
                  <text class="value" x="0" y="0">128</text>
                  <rect class="rail"  x="0" y="0" rx="0" width="0" height="0"></rect>
                  <rect class="fill"  x="0" y="0" rx="0" width="0" height="0"></rect>
                  <rect class="thumb" x="0" y="0" rx="0" width="0" height="0"></rect>
                  <rect class="focus" x="0" y="0" rx="0" width="0" height="0"></rect>
                </svg>
              </div>

              <div id="id-blue" class="color-slider-label">Blue</div>
              <div class="color-slider blue"
                  role="slider"
                  tabindex="0"
                  aria-valuemin="0"
                  aria-valuenow="128"
                  aria-valuemax="255"
                  aria-labelledby="id-blue">

                

                <svg width="0" height="0" aria-hidden="true">
                  <text class="value" x="0" y="0">128</text>
                  <rect class="rail"  x="0" y="0" rx="0" width="0" height="0"></rect>
                  <rect class="fill"  x="0" y="0" rx="0" width="0" height="0"></rect>
                  <rect class="thumb" x="0" y="0" rx="0" width="0" height="0"></rect>
                  <rect class="focus" x="0" y="0" rx="0" width="0" height="0"></rect>
                </svg>
              </div>

              <h4>Color View Box</h4>
              <div class="color-info">
                <div class="color-box"></div>
                <label>
                  Color (HEX):
                  <input type="text" readonly class="color-value-hex" value="">
                </label>
                <label>
                  Color (RGB):
                  <input type="text" readonly class="color-value-rgb" value="">
                </label>
              </div>
            </div>
          </div>
          <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
    </section>

    <section>
      <h2 tabindex="-1" id="accessibility-features">Accessibility Features</h2>
      <ul>
        <li>To help assistive technology users understand that the color viewer is made of a group of three sliders, the sliders are wrapped in a <code>group</code> labeled by the heading that labels the color viewer.</li>
        <li>The placement of the slider value above the thumb makes it easier for users with low vision   to see the current value while dragging the thumb.</li>
        <li>To highlight the interactive nature of the thumb, the focus ring is drawn around the thumb and the value.</li>
        <li>
          To ensure the borders of the slider rail, thumb and focus ring have sufficient contrast with the background when high contrast settings invert colors, the CSS <code>currentColor</code> value for the <code>stroke</code> property is used for the SVG <code>rect</code> elements to synchronize the border color with text content.
          If specific colors were used to specify the <code>stroke</code> property, the color of these elements would remain the same in high contrast mode, which could lead to insufficient contrast between them and their background or even make them invisible if their color were to match the high contrast mode background.
          NOTE: The SVG elements need to be inline to use <code>currentColor</code>.
                  </li>
      </ul>
    </section>

    <section>
      <h2 id="kbd_label" tabindex="-1">Keyboard Support</h2>
      <div class="table-wrap"><table aria-labelledby="kbd_label" class="def">
        <thead>
          <tr>
            <th>Key</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="key-right-arrow">
            <th><kbd>Right Arrow</kbd></th>
            <td>Increases slider value one step.</td>
          </tr>
          <tr data-test-id="key-up-arrow">
            <th><kbd>Up Arrow</kbd></th>
            <td>Increases slider value one step.</td>
          </tr>
          <tr data-test-id="key-left-arrow">
            <th><kbd>Left Arrow</kbd></th>
            <td>Decreases slider value one step.</td>
          </tr>
          <tr data-test-id="key-down-arrow">
            <th><kbd>Down Arrow</kbd></th>
            <td>Decreases slider value one step.</td>
          </tr>
          <tr data-test-id="key-page-up">
            <th><kbd>Page Up</kbd></th>
            <td>Increases slider value multiple steps. In this slider, jumps ten steps.</td>
          </tr>
          <tr data-test-id="key-page-down">
            <th><kbd>Page Down</kbd></th>
            <td>Decreases slider value multiple steps. In this slider, jumps ten steps.</td>
          </tr>
          <tr data-test-id="key-home">
            <th><kbd>Home</kbd></th>
            <td>Sets slider to its minimum value.</td>
          </tr>
          <tr data-test-id="key-end">
            <th><kbd>End</kbd></th>
            <td>Sets slider to its maximum value.</td>
          </tr>
        </tbody>
      </table></div>

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
          <tr data-test-id="group-role">
            <th scope="row"><code>group</code></th>
            <td></td>
            <td><code>div</code></td>
            <td>
              <ul>
                <li>Identifies the <code>div</code> as a group.</li>
                <li>The group and its accessible name inform assistive technology users that the three sliders are related to one another and serve the purpose of choosing a color.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="group-aria-labelledby">
            <td></td>
            <th scope="row"><code>aria-labelledby="IDREF"</code></th>
            <td><code>div</code></td>
            <td>Refers to the  heading element that provides the accessible name for the group.</td>
          </tr>
          <tr data-test-id="slider-role">
            <th scope="row">
              <code>slider</code>
            </th>
            <td></td>
            <td>
              <code>div</code>
            </td>
            <td>
              <ul>
                <li>Identifies the element as a slider.</li>
                <li>Set on the <code>div</code> that represents the movable thumb because it is the operable element that controls the slider value.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="tabindex">
            <td></td>
            <th scope="row">
              <code>tabindex="0"</code>
            </th>
            <td>
              <code>div</code>
            </td>
            <td>Includes the slider thumb in the page tab sequence.</td>
          </tr>
          <tr data-test-id="aria-valuemax">
            <td></td>
            <th scope="row">
              <code>aria-valuemax="255"</code>
            </th>
            <td>
              <code>div</code>
            </td>
            <td>Specifies the maximum value of the slider.</td>
          </tr>
          <tr data-test-id="aria-valuemin">
            <td></td>
            <th scope="row">
              <code>aria-valuemin="0"</code>
            </th>
            <td>
              <code>div</code>
            </td>
            <td>Specifies the minimum value of the slider.</td>
          </tr>
          <tr data-test-id="aria-valuenow">
            <td></td>
            <th scope="row">
              <code>aria-valuenow="NUMBER"</code>
            </th>
            <td>
              <code>div</code>
            </td>
            <td>Indicates the current value of the slider.</td>
          </tr>
          <tr data-test-id="aria-labelledby">
            <td></td>
            <th scope="row">
              <code>aria-labelledby="IDREF"</code>
            </th>
            <td>
              <code>div</code>
            </td>
            <td>Refers to the element containing the name of the slider.</td>
          </tr>
          <tr data-test-id="svg-aria-hidden">
            <td></td>
            <th scope="row"><code>aria-hidden="true"</code></th>
            <td><code>svg</code></td>
            <td>Removes the SVG elements from the accessibility tree.  Some assistive technologies will describe the SVG elements, unless they are explicitly hidden.</td>
          </tr>
        </tbody>
      </table></div>
    </section>

  <section>
        <h2 tabindex="-1" id="javascript-and-css-source-code">Javascript and CSS Source Code</h2>
        <ul id="css_js_files">
          <li>CSS: <a href="css/slider-color-viewer.css" type="text/css">slider-color-viewer.css</a></li>
          <li>Javascript: <a href="js/slider-color-viewer.js" type="text/javascript">slider-color-viewer.js</a></li>
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
    <a href="/patterns/slider/">Slider Design Pattern in WAI-ARIA Authoring Practices 1.2</a>
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