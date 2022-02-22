---
# This is a generated file
title: "Editable Combobox with Grid Popup Example"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /index/combobox/grid-combo

lang: en
last_updated: 2022-02-16
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>
<script src="../js/utils.js"></script>

<link href="css/grid-combo.css" rel="stylesheet" />
<script src="js/grid-combo.js"></script>
<script src="js/grid-combo-example.js"></script>


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
      <li><a href="https://github.com/w3c/aria-practices/projects/7">Related Issues</a></li>
      <li><a href="/patterns/combobox/">Design Pattern</a></li>
    </ul>
  
          </aside>
          <div class="sidebar-right"><h2 class="followed-by-support-notice">About This Example</h2><img alt=""
        src="/assets/img/combobox.svg"
        class="example-page-example-icon"
      >
  
  <div>
    
    <p>
      The following example combobox implements the
      <a href="/patterns/combobox/">combobox design pattern</a>
      using a grid for the suggested values popup.
    </p>
    <p>
      In this example, users can specify the name of a fruit or vegetable by either typing a value in the box or choosing from the set of values presented in a grid popup.
      The popup becomes available after the textbox contains a character that matches the beginning of the name of one of the items in the set of value suggestions.
      Users may type any value in the textbox; this implementation does not limit input to values that are in the set of value suggestions.
    </p>
    <p>
      The grid that presents suggested values has two columns.
      Each row of the grid represents one suggestion; column one contains the name of the fruit or vegetable and column two identifies whether it is a fruit or vegetable.
    </p>
    <p>Similar examples include: </p>
    <ul>
      <li><a href="combobox-select-only.html">Select-Only Combobox</a>: A single-select combobox with no text input that is functionally similar to an HTML <code>select</code> element.</li>
      <li><a href="combobox-autocomplete-both.html">Editable Combobox with Both List and Inline Autocomplete</a>: An editable combobox that demonstrates the autocomplete behavior known as <q>list with inline autocomplete</q>.</li>
      <li><a href="combobox-autocomplete-list.html">Editable Combobox with List Autocomplete</a>: An editable combobox that demonstrates the autocomplete behavior known as <q>list with manual selection</q>.</li>
      <li><a href="combobox-autocomplete-none.html">Editable Combobox Without Autocomplete</a>: An editable combobox that demonstrates the behavior associated with <code>aria-autocomplete=none</code>.</li>
      <li><a href="combobox-datepicker.html">Date Picker Combobox</a>: An editable date input combobox that opens a dialog containing a calendar grid and buttons for navigating by month and year.</li>
    </ul>

    <section>
      <div class="example-header">
        <h2 id="ex_label" tabindex="-1">Example</h2>
      </div>
      <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
      <div id="ex1">
        <label for="ex1-input" id="ex1-label" class="combobox-label">
          Fruits and vegetables
        </label>
        <div class="combobox-wrapper">
          <div id="ex1-combobox">
            <input type="text"
              role="combobox"
              aria-haspopup="grid"
              aria-expanded="false"
              aria-autocomplete="list"
              aria-controls="ex1-grid"
              id="ex1-input">
          </div>
          <div aria-labelledby="ex1-label"
            role="grid"
            id="ex1-grid"
            class="grid hidden">
          </div>
        </div>
      </div>
      <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
    </section>

    <section>
      <h2 tabindex="-1" id="accessibility-features">Accessibility Features</h2>
      <p>Browsers do not manage visibility of elements referenced by <code>aria-activedescendant</code> like they do for elements with focus. When a keyboard event changes the active option in the listbox, the JavaScript scrolls the option referenced by <code>aria-activedescendant</code> into view. Managing <code>aria-activedescendant</code> visibility is essential to accessibility for people who use a browser's zoom feature to increase the size of content.
      </p>
    </section>

    <section>
      <h2 id="kbd_label" tabindex="-1">Keyboard Support</h2>
      <p>
      The example combobox on this page implements the following keyboard interface.
        Other variations and options for the keyboard interface are described in the
        <a href="/patterns/combobox/#keyboard-interaction-6">Keyboard Interaction section of the combobox design pattern.</a>
      </p>
      <h3 id="kbd_label_textbox">Textbox</h3>
      <div class="table-wrap"><table aria-labelledby="kbd_label_textbox kbd_label" class="def">
        <thead>
          <tr>
            <th>Key</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="textbox-key-down-arrow">
            <th><kbd>Down Arrow</kbd></th>
            <td>If the grid is displayed, moves focus to the first suggested value.</td>
          </tr>
          <tr data-test-id="textbox-key-up-arrow">
            <th><kbd>Up Arrow</kbd></th>
            <td>If the grid is displayed, moves focus to the last suggested value.</td>
          </tr>
          <tr data-test-id="textbox-key-escape">
            <th><kbd>Escape</kbd></th>
            <td>
              <ul>
                <li>If the grid is displayed, closes it.</li>
                <li>If the grid is not displayed, clears the textbox.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="standard-single-line-editing-keys">
            <th>Standard single line text editing keys</th>
            <td>
              <ul>
                <li>Keys used for cursor movement and text manipulation, such as <kbd>Delete</kbd> and <kbd>Shift + Right Arrow</kbd>.</li>
                <li>An HTML <code>input</code> with <code>type=<q>text</q></code> is used for the textbox so the browser will provide platform-specific editing keys.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table></div>
      <h3 id="kbd_label_popup">Grid Popup</h3>
      <p>
          <strong>NOTE:</strong> When visual focus is in the grid, DOM focus remains on the textbox and the value of <code>aria-activedescendant</code> on the textbox is set to a value that refers to an element in the grid that is visually indicated as focused.
          Where the following descriptions of keyboard commands mention focus, they are referring to the visual focus indicator.
          For more information about this focus management technique, see
          <a href="/fundamentals/keyboard-interface/#kbd_focus_activedescendant">Using aria-activedescendant to Manage Focus.</a>
        </p>
      <div class="table-wrap"><table aria-labelledby="kbd_label_popup kbd_label" class="def">
        <thead>
          <tr>
            <th>Key</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="popup-key-enter">
            <th><kbd>Enter</kbd></th>
            <td>
              <ul>
                <li>Sets the textbox value to the content of the first cell in the row containing focus.</li>
                <li>Closes the grid popup.</li>
                <li>Sets focus on the textbox.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="popup-key-escape">
            <th><kbd>Escape</kbd></th>
            <td>
              <ul>
                <li>Closes the grid.</li>
                <li>Sets visual focus on the textbox.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="popup-key-down-arrow">
            <th><kbd>Down Arrow</kbd></th>
            <td>
              <ul>
                <li>Moves focus to the next row.</li>
                <li>If focus is in the last row, moves focus to the first row.</li>
                <li>Note: This wrapping behavior is useful when <kbd>Home</kbd> and <kbd>End</kbd> move the editing cursor as described below.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="popup-key-up-arrow">
            <th><kbd>Up Arrow</kbd></th>
            <td>
              <ul>
                <li>Moves focus to the previous row.</li>
                <li>If focus is in the first row, moves focus to the last row.</li>
                <li>Note: This wrapping behavior is useful when <kbd>Home</kbd> and <kbd>End</kbd> move the editing cursor as described below.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="popup-key-right-arrow">
            <th><kbd>Right Arrow</kbd></th>
            <td>
              <ul>
                <li>Moves focus to the next cell.</li>
                <li>If focus is in the last cell in a row, moves focus to the first cell in the next row.</li>
                <li>If focus is in the last cell in the last row, moves focus to the first cell in the first row.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="popup-key-left-arrow">
            <th><kbd>Left Arrow</kbd></th>
            <td>
              <ul>
                <li>Moves focus to the previous cell.</li>
                <li>If focus is in the first cell in a row, moves focus to the last cell in the previous row.</li>
                <li>If focus is in the first cell in the first row, moves focus to the last cell in the last row.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="popup-key-home">
            <th><kbd>Home</kbd></th>
            <td>Moves focus to the textbox and places the editing cursor at the beginning of the field.</td>
          </tr>
          <tr data-test-id="popup-key-end">
            <th><kbd>End</kbd></th>
            <td>Moves focus to the textbox and places the editing cursor at the end of the field.</td>
          </tr>
          <tr data-test-id="popup-key-char">
            <th>Printable Characters</th>
            <td>
              <ul>
                <li>Moves focus to the textbox.</li>
                <li>Types the character in the textbox.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h2 id="rps_label" tabindex="-1">Role, Property, State, and Tabindex Attributes</h2>
      <p>
        The example comboboxes on this page implement the following ARIA roles, states, and properties.
        Information about other ways of applying ARIA roles, states, and properties is available in the
        <a href="/patterns/combobox/#wai-aria-roles-states-and-properties-6">Roles, States, and Properties section of the combobox design pattern.</a>
      </p>
      <h3 id="rps_label_textbox">Textbox</h3>
      <div class="table-wrap"><table aria-labelledby="rps_label_textbox rps_label" class="data attributes">
        <thead>
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Attribute</th>
            <th scope="col">Element</th>
            <th scope="col">Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="combobox-role">
            <th scope="row">
              <code>combobox</code>
            </th>
            <td></td>
            <td><code>input[type="text"]</code></td>
            <td>Identifies the element as a combobox.</td>
          </tr>
          <tr data-test-id="combobox-aria-haspopup">
            <td></td>
            <th scope="row">
              <code>aria-haspopup="grid"</code>
            </th>
            <td><code>input[type="text"]</code></td>
            <td>Indicates that the combobox can popup a <code>grid</code> to suggest values.</td>
          </tr>
          <tr data-test-id="combobox-aria-expanded">
            <td></td>
            <th scope="row">
              <code>aria-expanded="false"</code>
            </th>
            <td><code>input[type="text"]</code></td>
            <td>Indicates that the popup element <strong>is not</strong> displayed.</td>
          </tr>
          <tr data-test-id="combobox-aria-expanded">
            <td></td>
            <th scope="row">
              <code>aria-expanded="true"</code>
            </th>
            <td><code>input[type="text"]</code></td>
            <td>Indicates that the popup element <strong>is</strong> displayed.</td>
          </tr>
          <tr data-test-id="combobox-id">
            <td></td>
            <th scope="row">
              <code>id="string"</code>
            </th>
            <td><code>input[type="text"]</code></td>
            <td>
              <ul>
                <li>Referenced by <code>for</code> attribute of <code>label</code> element to provide an accessible name.</li>
                <li>Recommended naming method for HTML input elements because clicking label focuses input.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="combobox-aria-autocomplete">
            <td></td>
            <th scope="row">
              <code>aria-autocomplete="list"</code>
            </th>
            <td><code>input[type="text"]</code></td>
            <td>Indicates that the autocomplete behavior of the input is to suggest a list of possible values in a popup.</td>
          </tr>
          <tr data-test-id="combobox-aria-controls">
            <td></td>
            <th scope="row">
              <code>aria-controls="IDREF"</code>
            </th>
            <td><code>input[type="text"]</code></td>
            <td>Identifies the popup element that lists suggested values.</td>
          </tr>
          <tr data-test-id="combobox-aria-activedescendant">
            <td></td>
            <th scope="row">
              <code>aria-activedescendant="IDREF"</code>
            </th>
            <td><code>input[type="text"]</code></td>
            <td>
              <ul>
                <li>When a cell in the grid is visually indicated as having keyboard focus, refers to that cell.</li>
                <li>When navigation keys, such as <kbd>Down Arrow</kbd>, are pressed, the JavaScript changes the value.</li>
                <li>Enables assistive technologies to know which element the application regards as focused while DOM focus remains on the <code>input</code> element.</li>
                <li>
                  For more information about this focus management technique, see
                  <a href="/fundamentals/keyboard-interface/#kbd_focus_activedescendant">Using aria-activedescendant to Manage Focus.</a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table></div>
      <h3 id="rps_label_popup">Grid Popup</h3>
      <div class="table-wrap"><table aria-labelledby="rps_label_popup rps_label" class="data attributes">
        <thead>
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Attribute</th>
            <th scope="col">Element</th>
            <th scope="col">Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="grid-role">
            <th scope="row">
              <code>grid</code>
            </th>
            <td></td>
            <td>
              <code>div</code>
            </td>
            <td>Identifies the element as a <code>grid</code>.</td>
          </tr>
          <tr data-test-id="grid-aria-labelledby">
            <td></td>
            <th scope="row">
              <code>aria-labelledby="IDREF"</code>
            </th>
            <td><code>div</code></td>
            <td>Provides a label for the <code>grid</code> element controlled by the combobox.</td>
          </tr>
          <tr data-test-id="row-role">
            <th scope="row">
              <code>row</code>
            </th>
            <td></td>
            <td><code>div</code></td>
            <td>Identifies the element containing all the cells for a row.</td>
          </tr>
          <tr data-test-id="row-aria-selected">
            <td></td>
            <th scope="row">
              <code>aria-selected="true"</code>
            </th>
            <td><code>div</code></td>
            <td>
              <ul>
                <li>Specified on a cell when the row containing the cell is visually indicated as selected.</li>
                <li>Occurs only when a cell in the grid is referenced by <code>aria-activedescendant</code>.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="gridcell-role">
            <th scope="row"><code>gridcell</code></th>
            <td></td>
            <td><code>div</code></td>
            <td>Identifies the element containing the content for a single cell.</td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h2 tabindex="-1" id="javascript-and-css-source-code">Javascript and CSS Source Code</h2>
      <ul id="css_js_files">
        <li> CSS: <a href="css/grid-combo.css" type="tex/css">grid-combo.css</a></li>
        <li>Javascript: <a href="js/grid-combo.js">grid-combo.js</a>, <a href="js/grid-combo-example.js">grid-combo-example.js</a>, <a href="../js/utils.js">utils.js</a></li>
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
    <a href="/patterns/combobox/">Combobox Design Pattern in WAI-ARIA Authoring Practices 1.2</a>
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