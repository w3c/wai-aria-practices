---
# This file was generated by scripts/pre-build/library/formatForJekyll.js
title: "(Deprecated) Collapsible Dropdown Listbox Example"
ref: /ARIA/apg/patterns/listbox/examples/listbox-collapsible/

github:
  repository: w3c/aria-practices
  branch: main
  path: content/patterns/listbox/examples/listbox-collapsible.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/patterns/listbox/examples/listbox-collapsible/

sidebar: true

footer: "      <div class='example-page-footer'>        <p><a href='https://github.com/orgs/w3c/projects/131'>View issues related to this example</a></p>        <p>Page last updated: 19 November 2024</p>      </div>    "

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>(Deprecated) Collapsible Dropdown Listbox Example</title>

<script src="../../../../../../content-assets/wai-aria-practices/shared/js/examples.js"></script>
<script src="../../../../../../content-assets/wai-aria-practices/shared/js/highlight.pack.js"></script>
<script src="../../../../../../content-assets/wai-aria-practices/shared/js/app.js"></script>

<link
  href="../../../../../../content-assets/wai-aria-practices/patterns/listbox/examples/css/listbox.css"
  rel="stylesheet"
/>
<script src="../../../../../../content-assets/wai-aria-practices/patterns/listbox/examples/js/listbox.js"></script>
<script src="../../../../../../content-assets/wai-aria-practices/patterns/listbox/examples/js/listbox-collapsible.js"></script>


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
          <h3>Deprecation Warning</h3>
          <p>
            This pattern has been deprecated, and will be removed in a future version of the ARIA Authoring Practices.
            The <a href="../../../combobox/examples/combobox-select-only/">select-only combobox</a> should be used as an alternative to this pattern.
          </p>
        </div>
        <img alt class="example-page-example-icon" src="../../../../../../content-images/wai-aria-practices/images/pattern-listbox.svg">
        <p>
          The following example implementation of the <a href="../../">Listbox Pattern</a> demonstrates a collapsible single-select listbox widget that is functionally similar to an HTML <code>select</code> input with the attribute <code>size="1"</code>.
          The widget consists of a button that triggers the display of a listbox.
          In its default state, the widget is collapsed (the listbox is not visible) and the button label shows the currently selected option from the listbox.
          When the button is activated, the listbox is displayed and the current option is focused and selected.
        </p>
        <p>Similar examples include:</p>
        <ul>
          <li><a href="../../../combobox/examples/combobox-select-only/">Select-Only Combobox</a>: A single-select combobox with no text input that is functionally similar to an HTML <code>select</code> element.</li>
          <li><a href="../listbox-scrollable/">Scrollable Listbox Example</a>: Single-select listbox that scrolls to reveal more options, similar to HTML <code>select</code> with <code>size</code> attribute greater than one.</li>
          <li><a href="../listbox-rearrangeable/">Example Listboxes with Rearrangeable Options</a>: Examples of both single-select and multi-select listboxes with accompanying toolbars where options can be added, moved, and removed.</li>
          <li><a href="../listbox-grouped/">Listbox Example with Grouped Options</a>: Single-select listbox with grouped options, similar to an HTML <code>select</code> with <code>optgroup</code> children.</li>
        </ul>
      </section>

      <section>
        <div class="example-header">
          <h2 id="ex_label">Example</h2>
        </div>
        <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
        <div id="ex">
          <p>Choose your favorite transuranic element (actinide or transactinide).</p>
          <div class="listbox-area">
            <div class="left-area">
              <span id="exp_elem" class="listbox-label">Choose an element:</span>
              <div id="exp_wrapper">
                <button type="button" aria-haspopup="listbox" aria-labelledby="exp_elem exp_button" id="exp_button">Neptunium</button>
                <ul id="exp_elem_list" tabindex="-1" role="listbox" aria-labelledby="exp_elem" class="hidden">
                  <li id="exp_elem_None" role="option">None</li>
                  <li id="exp_elem_Np" role="option">Neptunium</li>
                  <li id="exp_elem_Pu" role="option">Plutonium</li>
                  <li id="exp_elem_Am" role="option">Americium</li>
                  <li id="exp_elem_Cm" role="option">Curium</li>
                  <li id="exp_elem_Bk" role="option">Berkelium</li>
                  <li id="exp_elem_Cf" role="option">Californium</li>
                  <li id="exp_elem_Es" role="option">Einsteinium</li>
                  <li id="exp_elem_Fm" role="option">Fermium</li>
                  <li id="exp_elem_Md" role="option">Mendelevium</li>
                  <li id="exp_elem_No" role="option">Nobelium</li>
                  <li id="exp_elem_Lr" role="option">Lawrencium</li>
                  <li id="exp_elem_Rf" role="option">Rutherfordium</li>
                  <li id="exp_elem_Db" role="option">Dubnium</li>
                  <li id="exp_elem_Sg" role="option">Seaborgium</li>
                  <li id="exp_elem_Bh" role="option">Bohrium</li>
                  <li id="exp_elem_Hs" role="option">Hassium</li>
                  <li id="exp_elem_Mt" role="option">Meitnerium</li>
                  <li id="exp_elem_Ds" role="option">Darmstadtium</li>
                  <li id="exp_elem_Rg" role="option">Roentgenium</li>
                  <li id="exp_elem_Cn" role="option">Copernicium</li>
                  <li id="exp_elem_Nh" role="option">Nihonium</li>
                  <li id="exp_elem_Fl" role="option">Flerovium</li>
                  <li id="exp_elem_Mc" role="option">Moscovium</li>
                  <li id="exp_elem_Lv" role="option">Livermorium</li>
                  <li id="exp_elem_Ts" role="option">Tennessine</li>
                  <li id="exp_elem_Og" role="option">Oganesson</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
      </section>

      <section id="accessibility_features">
        <h2>Accessibility Features</h2>
        <ul>
          <li>
            Because this listbox implementation is scrollable and manages which option is focused by <a href="../../../../practices/keyboard-interface/#kbd_focus_activedescendant">using aria-activedescendant</a>, the JavaScript must ensure the focused option is visible.
            So, when a keyboard or pointer event changes the option referenced by <code>aria-activedescendant</code>, if the referenced option is not fully visible, the JavaScript scrolls the listbox to position the option in view.
          </li>
          <li>
            To enhance perceivability when operating the listbox, visual keyboard focus and hover are styled using the CSS <code>:hover</code> and <code>:focus</code> pseudo-classes:
            <ul>
              <li>To help people with visual impairments identify the listbox as an interactive element, the cursor is changed to a pointer when hovering over the list.</li>
              <li>To make it easier to distinguish the selected listbox option from other options, selection creates a 2 pixel border above and below the option.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2 id="kbd_label">Keyboard Support</h2>
        <p>
          The example listbox on this page implements the following keyboard interface.
          Other variations and options for the keyboard interface are described in the <a href="../../#keyboard_interaction">Keyboard Interaction section of the Listbox Pattern</a>.
        </p>
        <p>
          <strong>NOTE:</strong> When visual focus is on an option in this listbox implementation, DOM focus remains on the listbox element and the value of <code>aria-activedescendant</code> on the listbox refers to the descendant option that is visually indicated as focused.
          Where the following descriptions of keyboard commands mention focus, they are referring to the visual focus indicator, not DOM focus.
          For more information about this focus management technique, see
          <a href="../../../../practices/keyboard-interface/#kbd_focus_activedescendant">Managing Focus in Composites Using aria-activedescendant</a>.
        </p>
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
                  <li>Moves focus into and out of the listbox.</li>
                  <li>If the listbox is expanded, selects the focused option, collapses the listbox, and moves focus out of the listbox.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="key-enter">
              <th><kbd>Enter</kbd></th>
              <td>
                <ul>
                  <li>If the focus is on the button, expands the listbox and places focus on the currently selected option in the list.</li>
                  <li>If focus is in the listbox , collapses the listbox and keeps the currently selected option as the button label.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="key-escape">
              <th><kbd>Escape</kbd></th>
              <td>If the listbox is displayed, collapses the listbox and moves focus to the button.</td>
            </tr>
            <tr data-test-id="key-down-arrow">
              <th><kbd>Down Arrow</kbd></th>
              <td>
                <ul>
                  <li>Moves focus to and selects the next option.</li>
                  <li>If the listbox is collapsed, also expands the list.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="key-up-arrow">
              <th><kbd>Up Arrow</kbd></th>
              <td>
                <ul>
                  <li>Moves focus to and selects the previous option.</li>
                  <li>If the listbox is collapsed, also expands the list.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="key-home">
              <th><kbd>Home</kbd></th>
              <td>If the listbox is displayed, moves focus to and selects the first option.</td>
            </tr>
            <tr data-test-id="key-end">
              <th><kbd>End</kbd></th>
              <td>If the listbox is displayed, moves focus to and selects the last option.</td>
            </tr>
            <tr data-test-id="key-character">
              <th>Printable Characters</th>
              <td>
                <ul>
                  <li>Type a character: focus moves to the next item with a name that starts with the typed character.</li>
                  <li>Type multiple characters in rapid succession: focus moves to the next item with a name that starts with the string of characters typed.</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table></div>
      </section>

      <section>
        <h2 id="rps_label">Role, Property, State, and Tabindex Attributes</h2>
        <p>
          The example listbox on this page implements the following ARIA roles, states, and properties.
          Information about other ways of applying ARIA roles, states, and properties is available in the <a href="../../#roles_states_properties">Roles, States, and Properties section of the Listbox Pattern</a>.
        </p>
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
            <tr data-test-id="button-aria-labelledby">
              <td></td>
              <th scope="row"><code>aria-labelledby="ID_REF1 ID_REF2"</code></th>
              <td><code>button</code></td>
              <td>
                <ul>
                  <li>References the two elements whose labels are concatenated by the browser to label the button.</li>
                  <li>The first element is a span containing text <q>Choose an element: </q>.</li>
                  <li>The second element is the button itself; the button text is set to the name of the currently chosen element.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="button-aria-haspopup">
              <td></td>
              <th scope="row"><code>aria-haspopup="listbox"</code></th>
              <td><code>button</code></td>
              <td>Indicates that activating the button displays a listbox.</td>
            </tr>
            <tr data-test-id="button-aria-expanded">
              <td></td>
              <th scope="row"><code>aria-expanded="true"</code></th>
              <td><code>button</code></td>
              <td>
                <ul>
                  <li>Set by the JavaScript when the listbox is displayed.</li>
                  <li>Otherwise, is not present.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="listbox-role">
              <th scope="row"><code>listbox</code></th>
              <td></td>
              <td><code>ul</code></td>
              <td>Identifies the focusable element that has listbox behaviors and contains the listbox options.</td>
            </tr>
            <tr data-test-id="listbox-aria-labelledby">
              <td></td>
              <th scope="row"><code>aria-labelledby="ID_REF"</code></th>
              <td><code>ul</code></td>
              <td>Refers to the element containing the listbox label.</td>
            </tr>
            <tr data-test-id="listbox-tabindex">
              <td></td>
              <th scope="row"><code>tabindex="-1"</code></th>
              <td><code>ul</code></td>
              <td>
                <ul>
                  <li>Makes the listbox focusable.</li>
                  <li>The JavaScript sets focus on the listbox when it is displayed.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="listbox-aria-activedescendant">
              <td></td>
              <th scope="row"><code>aria-activedescendant="ID_REF"</code></th>
              <td><code>ul</code></td>
              <td>
                <ul>
                  <li>When an option in the listbox is visually indicated as having keyboard focus, refers to that option.</li>
                  <li>Enables assistive technologies to know which element the application regards as focused while DOM focus remains on the listbox element.</li>
                  <li>When navigation keys, such as <kbd>Down Arrow</kbd>, are pressed, the JavaScript changes the value.</li>
                  <li>
                    For more information about this focus management technique, see
                    <a href="../../../../practices/keyboard-interface/#kbd_focus_activedescendant">Managing Focus in Composites Using aria-activedescendant</a>.
                  </li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="option-role">
              <th scope="row"><code>option</code></th>
              <td></td>
              <td><code>li</code></td>
              <td>Identifies each selectable element containing the name of an option.</td>
            </tr>
            <tr data-test-id="option-aria-selected">
              <td></td>
              <th scope="row"><code>aria-selected="true"</code></th>
              <td><code>li</code></td>
              <td>
                <ul>
                  <li>Indicates that the option is selected.</li>
                  <li>Applied to the element with role option that is visually styled as selected.</li>
                  <li>The option with this attribute is always the same as the option that is referenced by aria-activedescendant because it is a single-select listbox where selection follows focus.</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table></div>
      </section>

      <section>
        <h2>JavaScript and CSS Source Code</h2>
        <ul id="css_js_files">
          <li>
            CSS:
            <a href="../../../../../../content-assets/wai-aria-practices/patterns/listbox/examples/css/listbox.css" type="tex/css">listbox.css</a>
          </li>
          <li>
            Javascript:
            <a href="../../../../../../content-assets/wai-aria-practices/patterns/listbox/examples/js/listbox.js" type="text/javascript">listbox.js</a>, <a href="../../../../../../content-assets/wai-aria-practices/patterns/listbox/examples/js/listbox-collapsible.js" type="text/javascript">listbox-collapsible.js</a>
          </li>
        </ul>
      </section>

      <section class="example-code">
        <h2 id="sc_label">HTML Source Code</h2>
        <p id="sc1_description">To copy the following HTML code, please open it in CodePen.</p>
        <div id="sc_start_sep" role="separator" aria-labelledby="sc_start_sep sc_label" aria-label="Start of "></div>
        <pre><code id="sc1"></code></pre>
        <div id="sc_end_sep" role="separator" aria-labelledby="sc_end_sep sc_label" aria-label="End of"></div>
        <script>
          sourceCode.add('sc1', 'ex', 'ex_label', 'css_js_files', 'sc1_description');
          sourceCode.make();
        </script>
      </section>
    </div>
  
</div>
<script
  src="{{ '/content-assets/wai-aria-practices/shared/js/skipto.js' | relative_url }}"
  data-skipto="colorTheme:aria; displayOption:popup; containerElement:div"
></script>

