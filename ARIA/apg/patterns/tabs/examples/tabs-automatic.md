---
# This file was generated by scripts/pre-build/library/formatForJekyll.js
title: "Example of Tabs with Automatic Activation"
ref: /ARIA/apg/patterns/tabs/examples/tabs-automatic/

github:
  repository: w3c/aria-practices
  branch: main
  path: content/patterns/tabs/examples/tabs-automatic.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/patterns/tabs/examples/tabs-automatic/

sidebar: true

footer: "      <div class='example-page-footer'>        <p><a href='https://github.com/orgs/w3c/projects/130'>View issues related to this example</a></p>        <p>Page last updated: 22 October 2024</p>      </div>    "

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Example of Tabs with Automatic Activation</title>

<script src="../../../../../../content-assets/wai-aria-practices/shared/js/examples.js"></script>
<script src="../../../../../../content-assets/wai-aria-practices/shared/js/highlight.pack.js"></script>
<script src="../../../../../../content-assets/wai-aria-practices/shared/js/app.js"></script>

<link
  href="../../../../../../content-assets/wai-aria-practices/patterns/tabs/examples/css/tabs.css"
  rel="stylesheet"
/>
<script src="../../../../../../content-assets/wai-aria-practices/patterns/tabs/examples/js/tabs-automatic.js"></script>


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
        <img alt class="example-page-example-icon" src="../../../../../../content-images/wai-aria-practices/images/pattern-tabs.svg">
        <p>
          This example section demonstrates a tabs widget that implements the <a href="../../">Tabs Pattern</a>.
          In this example, a tab is automatically activated and its associated panel is displayed when the tab receives focus.
          It is recommended that authors consider implementing automatic activation of tabs <strong>only in</strong> circumstances where panels can be displayed instantly, i.e., all panel content is present in the DOM.
          For additional guidance, see <a href="../../../../practices/keyboard-interface/#kbd_selection_follows_focus">Deciding When to Make Selection Automatically Follow Focus</a>.
        </p>
        <p>Similar examples include:</p>
        <ul>
          <li><a href="../tabs-manual/">Example of Tabs with Manual Activation</a>: A tabs widget where users activate a tab and display its panel by pressing <kbd>Space</kbd> or <kbd>Enter</kbd>.</li>
        </ul>
      </section>

      <section>
        <div class="example-header">
          <h2 id="ex_label">Example</h2>
        </div>
        <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
        <div id="ex1">
          <div class="tabs">
            <h3 id="tablist-1">Danish Composers</h3>
            <div role="tablist" aria-labelledby="tablist-1" class="automatic">
              <button id="tab-1" type="button" role="tab" aria-selected="true" aria-controls="tabpanel-1">
                <span class="focus">Maria Ahlefeldt</span>
              </button>
              <button id="tab-2" type="button" role="tab" aria-selected="false" aria-controls="tabpanel-2" tabindex="-1">
                <span class="focus">Carl Andersen</span>
              </button>
              <button id="tab-3" type="button" role="tab" aria-selected="false" aria-controls="tabpanel-3" tabindex="-1">
                <span class="focus">Ida da Fonseca</span>
              </button>
              <button id="tab-4" type="button" role="tab" aria-selected="false" aria-controls="tabpanel-4" tabindex="-1">
                <span class="focus">Peter Müller</span>
              </button>
            </div>

            <div id="tabpanel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
              <p>
                Maria Theresia Ahlefeldt (16 January 1755 – 20 December 1810) was a Danish, (originally German), composer.
                She is known as the first female composer in Denmark.
                Maria Theresia composed music for several ballets, operas, and plays of the royal theatre.
                She was given good critic as a composer and described as a “<span lang="da">virkelig Tonekunstnerinde</span>” ('a True Artist of Music').
              </p>
            </div>
            <div id="tabpanel-2" role="tabpanel" tabindex="0" aria-labelledby="tab-2" class="is-hidden">
              <p>
                Carl Joachim Andersen (29 April 1847 – 7 May 1909) was a Danish flutist, conductor and composer born in Copenhagen, son of the flutist Christian Joachim Andersen.
                Both as a virtuoso and as composer of flute music, he is considered one of the best of his time.
                He was considered to be a tough leader and teacher and demanded as such a lot from his orchestras but through that style he reached a high level.
              </p>
            </div>
            <div id="tabpanel-3" role="tabpanel" tabindex="0" aria-labelledby="tab-3" class="is-hidden">
              <p>
                Ida Henriette da Fonseca (July 27, 1802 – July 6, 1858) was a Danish opera singer and composer.
                Ida Henriette da Fonseca was the daughter of Abraham da Fonseca (1776–1849) and Marie Sofie Kiærskou (1784–1863).
                She and her sister Emilie da Fonseca were students of Giuseppe Siboni, choir master of the Opera in Copenhagen.
                She was given a place at the royal Opera alongside her sister the same year she debuted in 1827.
              </p>
            </div>
            <div id="tabpanel-4" role="tabpanel" tabindex="0" aria-labelledby="tab-4" class="is-hidden">
              <p>
                Peter Erasmus Lange-Müller (1 December 1850 – 26 February 1926) was a Danish composer and pianist.
                His compositional style was influenced by Danish folk music and by the work of Robert Schumann; Johannes Brahms; and his Danish countrymen, including J.P.E. Hartmann.
              </p>
            </div>
          </div>
        </div>
        <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
      </section>

      <section>
        <h2>Accessibility Features</h2>
        <ul>
          <li>
            To make it easy for screen reader users to navigate from a tab to the beginning of content in the active <code>tabpanel</code>, the <code>tabpanel</code> element has <code>tabindex="0"</code> to include the panel in the page <kbd>Tab</kbd> sequence.
            It is recommended that all <code>tabpanel</code> elements in a tab set are focusable if there are any panels in the set that contain content where the first element in the panel is not focusable.
          </li>
          <li>
            To ensure people who rely on browser or operating system high contrast settings can both distinguish the active (selected) tab from other tabs and perceive keyboard focus:
            <ul>
              <li>
                The active tab has a 2 pixel border on its left and right sides and a 4 pixel border on top, while the names of inactive tabs have 1 pixel borders.
                The active tab is also 4 pixels higher than the inactive tabs.
              </li>
              <li>
                The focus ring is drawn with a CSS border on a child <code>span</code> element of the tab element.
                This focus span is separated from the tab border by 2 pixels of space to ensure focus and selection are separately perceivable.
                Note that when a tab element is focused, the outline of the tab element itself is set to 0 so that only one focus ring is displayed.
              </li>
              <li>
                Because transparent borders are visible on some systems when high contrast settings are enabled, only the focused <code>span</code> element has a visible border.
                When <code>span</code> elements are not indicating focus, they have a 0-width border and additional padding equal in width to the border that is used to indicate focus.
              </li>
            </ul>
          </li>
          <li>
            To ensure the tab content remains visible when the screen is magnified, the width of the tabs and tab panels are defined using a percentage of the screen width.  As the page is magnified the height of the tab increases and the tab content re-flows to the new dimensions of the tab.
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
            <tr data-test-id="key-tab">
              <th><kbd>Tab</kbd></th>
              <td>
                <ul>
                  <li>When focus moves into the tab list, places focus on the active <code>tab</code> element .</li>
                  <li>When the tab list contains the focus, moves focus to the next element in the tab sequence, which is the <code>tabpanel</code> element.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="key-right-arrow">
              <th><kbd>Right Arrow</kbd></th>
              <td>
                <ul>
                  <li>Moves focus to the next tab.</li>
                  <li>If focus is on the last tab, moves focus to the first tab.</li>
                  <li>Activates the newly focused tab.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="key-left-arrow">
              <th><kbd>Left Arrow</kbd></th>
              <td>
                <ul>
                  <li>Moves focus to the previous tab.</li>
                  <li>If focus is on the first tab, moves focus to the last tab.</li>
                  <li>Activates the newly focused tab.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="key-home">
              <th><kbd>Home</kbd></th>
              <td>Moves focus to the first tab and activates it.</td>
            </tr>
            <tr data-test-id="key-end">
              <th><kbd>End</kbd></th>
              <td>Moves focus to the last tab and activates it.</td>
            </tr>
          </tbody>
        </table></div>
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
            <tr data-test-id="tablist-role">
              <th scope="row">
                <code>tablist</code>
              </th>
              <td></td>
              <td>
                <code>div</code>
              </td>
              <td>Indicates that the element serves as a container for a set of tabs.</td>
            </tr>
            <tr data-test-id="tablist-aria-labelledby">
              <td></td>
              <th scope="row">
                <code>aria-labelledby="ID_REFERENCE"</code>
              </th>
              <td>
                <code>div</code>
              </td>
              <td>Provides a label that describes the purpose of the set of tabs.</td>
            </tr>
            <tr data-test-id="tab-role">
              <th scope="row">
                <code>tab</code>
              </th>
              <td></td>
              <td>
                <code>button</code>
              </td>
              <td>
                <ul>
                  <li>Indicates the element serves as a tab control.</li>
                  <li>When focused, it is automatically activated, causing its associated <code>tabpanel</code> to be displayed.</li>
                  <li>Provides a label for its associated <code>tabpanel</code>.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="tab-aria-selected">
              <td></td>
              <th scope="row">
                <code>aria-selected="true"</code>
              </th>
              <td>
                <code>button</code>
              </td>
              <td>
                <ul>
                  <li>Indicates the tab is selected and its associated tabpanel is displayed.</li>
                  <li>Set when a tab receives focus.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="tab-aria-selected">
              <td></td>
              <th scope="row">
                <code>aria-selected="false"</code>
              </th>
              <td>
                <code>button</code>
              </td>
              <td>
                <ul>
                  <li>Indicates the tab is not selected and its associated tabpanel is <strong>NOT</strong> displayed.</li>
                  <li>Set for all tab elements in the tab set except the tab that is selected.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="tab-tabindex">
              <td></td>
              <th scope="row">
                <code>tabindex="-1"</code>
              </th>
              <td>
                <code>button</code>
              </td>
              <td>
                <ul>
                  <li>Removes the element from the page <kbd>Tab</kbd> sequence.</li>
                  <li>Set when a tab is not selected so that only the selected tab is in the page <kbd>Tab</kbd> sequence.</li>
                  <li>Since an HTML <code>button</code> element is used for the tab, it is not necessary to set <code>tabindex="0"</code> on the selected (active) tab element.</li>
                  <li>
                    This approach to managing focus is described in the section on
                    <a href="../../../../practices/keyboard-interface/#kbd_roving_tabindex">Managing Focus Within Components Using a Roving tabindex</a>.
                  </li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="tab-aria-control">
              <td></td>
              <th scope="row">
                <code>aria-controls="ID_REFERENCE"</code>
              </th>
              <td>
                <code>button</code>
              </td>
              <td>Refers to the element with <code>role=tabpanel</code> associated with the tab.</td>
            </tr>
            <tr data-test-id="tabpanel-role">
              <th scope="row">
                <code>tabpanel</code>
              </th>
              <td></td>
              <td>
                <code>div</code>
              </td>
              <td>
                <ul>
                  <li>Indicates the element serves as a container for tab panel content.</li>
                  <li>Is hidden unless its associated <code>tab</code> control is activated.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="tabpanel-aria-labelledby">
              <td></td>
              <th scope="row">
                <code>aria-labelledby="ID_REFERENCE"</code>
              </th>
              <td>
                <code>div</code>
              </td>
              <td>
                <ul>
                  <li>Refers to the <code>tab</code> element that controls the panel.</li>
                  <li>Provides an accessible name for the tab panel.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="tabpanel-tabindex">
              <td></td>
              <th scope="row">
                <code>tabindex="0"</code>
              </th>
              <td>
                <code>div</code>
              </td>
              <td>
                <ul>
                  <li>Puts the tabpanel in the page <kbd>Tab</kbd> sequence.</li>
                  <li>Facilitates navigation to panel content for assistive technology users.</li>
                  <li>Focusable tabpanel elements are recommended if any panels in a set contain content where the first element in the panel is not focusable.</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table></div>
      </section>

      <section>
        <h2>JavaScript and CSS Source Code</h2>
        <ul id="css_js_files">
          <li>CSS: <a href="../../../../../../content-assets/wai-aria-practices/patterns/tabs/examples/css/tabs.css" type="tex/css">tabs.css</a></li>
          <li>Javascript: <a href="../../../../../../content-assets/wai-aria-practices/patterns/tabs/examples/js/tabs-automatic.js" type="text/javascript">tabs-automatic.js</a></li>
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

