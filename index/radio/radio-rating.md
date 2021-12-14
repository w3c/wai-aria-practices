---
# This is a generated file
title: "Rating Radio Group Example"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /index/radio/radio-rating

lang: en
last_updated: 2021-12-14
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>

<link rel="stylesheet" type="text/css" href="css/radio-rating.css" />
<script src="js/radio-rating.js" type="text/javascript"></script>


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
      <li><a href="https://github.com/w3c/aria-practices/projects/3">Related Issues</a></li>
      <li><a href="/patterns/radiobutton/">Design Pattern</a></li>
    </ul>
  
          </aside>
          <div class="sidebar-right"><h2 class="followed-by-support-notice">About This Example</h2><img alt=""
        src="/assets/img/radiobutton.svg"
        class="example-page-example-icon"
      >
  
  <div>
    
    <p>
      Following is an example of a rating input that demonstrates the
      <a href="/patterns/radiobutton/">Radio Group Design Pattern.</a>
      The rating is indicated by the number of stars selected by the user.
    </p>
    <p>Similar examples include: </p>
    <ul>
      <li><a href="../slider/slider-rating.html">Rating Slider Example</a>: Horizontal slider that demonstrates using <code>aria-valuetext</code> to communicate current and maximum value of a rating input for a five star rating scale.</li>
      <li><a href="radio-activedescendant.html">Radio Group Example Using aria-activedescendant</a>: Radio button group that uses <code>aria-activedescendant</code> for managing keyboard focus.</li>
      <li><a href="radio.html">Radio Group Example Using Roving tabindex</a>: A radio button group that uses roving <code>tabindex</code> for managing keyboard focus.</li>
    </ul>

    <section>
      <div class="example-header">
        <h2 id="ex_label" tabindex="-1">Example</h2>
      </div>
      <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
      <div id="ex1">
        <div class="rating-radio" role="radiogroup" aria-labelledby="id-rating-label" data-rating-value="">
          <div id="id-rating-label" class="label">Rating</div>
          <svg role="none" xmlns="http://www.w3.org/2000/svg" width="264" height="48">
            <defs>
              <g id="star">
                <polygon points="2.0,13.4 11.7,20.5 8.0,31.1 17.7,24.8 27.4,31.9 23.7,20.5 33.4,13.4 21.4,13.4 17.7,2.0 14.0,13.4"></polygon>
              </g>
              <g id="focus-ring">
                <rect width="40" height="38" rx="4"></rect>
              </g>
            </defs>

            <g role="radio" aria-checked="false" tabindex="-1" data-rating="1" aria-label="one star" class="star-1 star-2 star-3 star-4 star-5" >
              <use class="star" xlink:href="#star" x="10" y="7"></use>
              <use class="focus-ring" xlink:href="#focus-ring" x="8" y="5"></use>
            </g>

            <g role="radio" aria-checked="false" tabindex="-1" data-rating="2" aria-label="two stars" class="star-2 star-3 star-4 star-5">
              <use class="star" xlink:href="#star" x="50" y="7"></use>
              <use class="focus-ring" xlink:href="#focus-ring" x="48" y="5"></use>
            </g>

            <g role="radio" aria-checked="false" tabindex="-1" data-rating="3" aria-label="three stars" class="star-3 star-4 star-5">
              <use class="star" xlink:href="#star" x="90" y="7"></use>
              <use class="focus-ring" xlink:href="#focus-ring" x="88" y="5"></use>
            </g>

            <g role="radio" aria-checked="false" tabindex="-1" data-rating="4" aria-label="four stars" class="star-4 star-5">
              <use class="star" xlink:href="#star" x="130" y="7"></use>
              <use class="focus-ring" xlink:href="#focus-ring" x="128" y="5"></use>
            </g>

            <g role="radio" aria-checked="false" tabindex="-1" data-rating="5" aria-label="five stars" class="star-5">
              <use class="star" xlink:href="#star" x="170" y="7"></use>
              <use class="focus-ring" xlink:href="#focus-ring" x="168" y="5"></use>
            </g>
          </svg>
        </div>
      </div>
      <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
    </section>

    <section>
      <h2 tabindex="-1" id="accessibility-features">Accessibility Features</h2>
      <ul>
        <li>To enhance perceivability when operating the radios, visual keyboard focus and hover are styled using CSS:
          <ul>
            <li>The focus ring has a width of 2 pixels and at least 2 pixels of spacing between it and the star borders.</li>
            <li>The cursor changes to a pointer when hovering over the stars so it is easier to perceive that the rating stars are interactive.</li>
          </ul>
        </li>
        <li>
          To ensure the borders of the stars and the focus ring have sufficient contrast with the background when high contrast settings invert colors, the color of the borders are synchronized with the color of the text content.
          For example, the color of the focus ring border is set to match the foreground color of  high contrast mode text by specifying the CSS <code>currentColor</code> value for the <code>stroke</code> property of the inline SVG <code>polygon</code> to draw the star borders and <code>rect</code> element used to draw the focus ring border.
          To make the background of the <code>polygon</code> and <code>rect</code> elements match the high contrast background color, the <code>fill-opacity</code> attribute of the <code>rect</code> is set to zero.
          If specific colors were instead used to specify the <code>stroke</code> and <code>fill</code> properties, those colors would remain the same in high contrast mode, which could lead to insufficient contrast between the star and the background or even make them invisible if their color matched the high contrast mode background.<br>
          Note: The SVG element needs to have the CSS <code>forced-color-adjust</code> property set to <code>auto</code> for the <code>currentColor</code> value to be updated in high contrast mode.
          Some browsers do not use <code>auto</code> for the default value.
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
          <tr data-test-id="key-tab">
            <th><kbd>Tab</kbd></th>
            <td>
              <ul>
                <li>Moves focus to the checked <code>radio</code> button in the <code>radiogroup</code>.</li>
                <li>If a <code>radio</code> button is not checked, focus moves to the first <code>radio</code> button in the group.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="key-space">
            <th><kbd>Space</kbd></th>
            <td>
              <ul>
                <li>If the <code>radio</code> button with focus is not checked, changes the state to <code>checked</code>.</li>
                <li>Otherwise, does nothing.</li>
                <li>Note: The state where a radio is not checked only occurs on page load.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="key-down-right-arrow">
            <th><kbd>Down arrow</kbd><br><kbd>Right arrow</kbd></th>
            <td>
              <ul>
                <li>Moves focus to and checks the next <code>radio</code> button in the group.</li>
                <li>If focus is on the last <code>radio</code> button, moves focus to the first <code>radio</code> button.</li>
                <li>The state of the previously checked radio button is changed to unchecked.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="key-up-left-arrow">
            <th><kbd>Up arrow</kbd><br><kbd>Left arrow</kbd></th>
            <td>
              <ul>
                <li>Moves focus to and checks the previous <code>radio</code> button in the group.</li>
                <li>If focus is on the first <code>radio</code> button, moves focus to and checks the last <code>radio</code> button.</li>
                <li>The state of the previously checked radio button is changed to unchecked.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h2 id="rps_label" tabindex="-1">Role, Property, State, and Tabindex  Attributes</h2>
      <div class="table-wrap"><table aria-labelledby="rps_label" class="data attributes">
        <thead>
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Attributes</th>
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
            <td>
              The use of the <code>none</code> role on the SVG element ensures assistive technologies do not interpret the SVG element as an image or some other role.
            </td>
          </tr>
          <tr data-test-id="radiogroup-role">
            <th scope="row"><code>radiogroup</code></th>
            <td></td>
            <td><code>div</code></td>
            <td>
              <ul>
                <li>Identifies the <code>div</code> element as a container for a group of <code>radio</code> buttons.</li>
                <li>Is not focusable because focus is managed using a roving tabindex strategy as described below.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="radiogroup-aria-labelledby">
            <td></td>
            <th scope="row"><code>aria-labelledby="ID_REFERENCE"</code></th>
            <td><code>div</code></td>
            <td>Refers to the element that contains the label of the radio group.</td>
          </tr>
          <tr data-test-id="radio-role">
            <th scope="row"><code>radio</code></th>
            <td></td>
            <td><code>g</code></td>
            <td>Identifies the <code>g</code> element as an ARIA <code>radio</code> button.</td>
          </tr>
          <tr data-test-id="radio-aria-label">
            <td></td>
            <th scope="row"><code>aria-label="<em>name</em>"</code></th>
            <td><code>g</code></td>
            <td>
              Defines an accessible name that identifies the number of stars associated with the radio button (e.g. "one star", two stars", ..).
            </td>
          </tr>
          <tr data-test-id="radio-tabindex">
            <td></td>
            <th scope="row"><code>tabindex="-1"</code></th>
            <td><code>g</code></td>
            <td>
              <ul>
                <li>Makes the element focusable but not part of the page <kbd>Tab</kbd> sequence.</li>
                <li>Applied to all radio buttons contained in the radio group except for one that is included in the page <kbd>Tab</kbd> sequence.</li>
                <li>This approach to managing focus is described in the section on <a href="/fundamentals/keyboard-interface/#kbd_roving_tabindex">roving tabindex</a>.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="radio-tabindex">
            <td></td>
            <th scope="row"><code>tabindex="0"</code></th>
            <td><code>g</code></td>
            <td>
              <ul>
                <li>Makes the radio button focusable and includes it in the page <kbd>Tab</kbd> sequence.</li>
                <li>Set on only one radio in the radio group.</li>
                <li>On page load, is set on the first radio button in the radio group.</li>
                <li>Moves with focus inside the radio group so the most recently focused radio button is included in the page <kbd>Tab</kbd> sequence.</li>
                <li>This approach to managing focus is described in the section on <a href="/fundamentals/keyboard-interface/#kbd_roving_tabindex">roving tabindex</a>.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="radio-aria-checked">
            <td></td>
            <th scope="row"><code>aria-checked="false"</code></th>
            <td><code>g</code></td>
            <td>
              <ul>
                <li>Identifies <code>radio</code> buttons which are not checked.</li>
                <li>CSS attribute selectors (e.g. <code>[aria-checked="false"]</code>) are used to synchronize the visual states with the value of the <code>aria-checked</code> attribute.</li>
                <li>The CSS <code>::before</code> pseudo-element is used to indicate visual state of unchecked radio buttons to support high contrast settings in operating systems and browsers.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="radio-aria-checked">
            <td></td>
            <th scope="row"><code>aria-checked="true"</code></th>
            <td><code>g</code></td>
            <td>
              <ul>
                <li>Identifies the <code>radio</code> button which is checked.</li>
                <li>CSS attribute selectors (e.g. <code>[aria-checked="true"]</code>) are used to synchronize the visual states with the value of the <code>aria-checked</code> attribute.</li>
                <li>The CSS <code>::before</code> pseudo-element is used to indicate visual state of checked radio buttons to support high contrast settings in operating systems and browsers.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table></div>
    </section>


    <section>
      <h2 tabindex="-1" id="javascript-and-css-source-code">Javascript and CSS Source Code</h2>
      <ul id="css_js_files">
        <li>CSS: <a href="css/radio-rating.css" type="text/css">radio-rating.css</a></li>
        <li>Javascript: <a href="js/radio-rating.js" type="text/javascript">radio-rating.js</a></li>
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
    <a href="/patterns/radiobutton/">Slider Design Pattern in WAI-ARIA Authoring Practices 1.2</a>
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