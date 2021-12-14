---
# This is a generated file
title: "Date Picker Combobox Example"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /index/combobox/combobox-datepicker

lang: en
last_updated: 2021-12-14
---
<script type="text/javascript" src="../js/examples.js"></script>
<script type="text/javascript" src="../js/highlight.pack.js"></script>
<script type="text/javascript" src="../js/app.js"></script>

<link href="css/combobox-datepicker.css" rel="stylesheet" />
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
  integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
  crossorigin="anonymous"
/>
<script src="js/combobox-datepicker.js" type="text/javascript"></script>


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
      The below date picker demonstrates an implementation of the <a href="/patterns/combobox/">combobox design pattern</a> that opens a dialog.
      The date picker dialog is opened by activating the choose date button or by moving keyboard focus to the combobox and pressing <kbd>Down Arrow</kbd> or <kbd>Alt + Down Arrow</kbd>.
      The  dialog contains an implementation of the <a href="/patterns/grid/">grid pattern</a> for displaying a calendar and enabling selection of a date.
      Additional buttons in the dialog are available for changing the month and year shown in the grid.
    </p>
    <p>Similar examples include:</p>
    <ul>
      <li><a href="../dialog-modal/datepicker-dialog.html">Date Picker Dialog example</a>: Demonstrates a dialog containing a calendar grid for choosing a date.</li>
      <li><a href="combobox-select-only.html">Select-Only Combobox</a>: A single-select combobox with no text input that is functionally similar to an HTML <code>select</code> element.</li>
      <li><a href="combobox-autocomplete-both.html">Editable Combobox with Both List and Inline Autocomplete</a>: An editable combobox that demonstrates the autocomplete behavior known as &quot;list with inline autocomplete&quot;.</li>
      <li><a href="combobox-autocomplete-list.html">Editable Combobox with List Autocomplete</a>: An editable combobox that demonstrates the autocomplete behavior known as &quot;list with manual selection&quot;.</li>
      <li><a href="combobox-autocomplete-none.html">Editable Combobox Without Autocomplete</a>: An editable combobox that demonstrates the behavior associated with <code>aria-autocomplete=none</code>.</li>
      <li><a href="grid-combo.html">Editable Combobox with Grid Popup</a>: An editable combobox that presents suggestions in a grid, enabling users to navigate descriptive information about each suggestion.</li>
    </ul>

  <section>
    <div class="example-header">
      <h2 id="ex_label" tabindex="-1">Example</h2>
    </div>

    <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
    <div id="ex1">

      <div id="myDatepicker"
           class="combobox-datepicker">

        <div class="label">
          <label id="id-label-1" for="cb-textbox-1">
            Date
          </label>
        </div>

        <div class="group">
          <input type="text"
                id="cb-textbox-1"
                aria-autocomplete="none"
                role="combobox"
                aria-expanded="false"
                aria-haspopup="dialog"
                aria-controls="cb-dialog-1"
                aria-describedby="cb-description-1">

          <span class="desc" id="cb-description-1">(date format: mm/dd/yyyy)</span>
          <button type="button"
              class="arrow"
              tabindex="-1"
              aria-label="Choose Date">
              <span>
                <svg width="18" height="16" aria-hidden="true" focusable="false">
                  <polygon points="2,4 16,4 9,14"></polygon>
                </svg>
              </span>
          </button>
        </div>

        <div id="cb-dialog-1"
             class="dialog"
             role="dialog"
             aria-modal="true"
             aria-label="Choose Date">

          <div class="header">

            <button type="button"
              class="prev-year"
              aria-label="previous year">
              <span class="fas fa-angle-double-left fa-lg"></span>
            </button>

            <button type="button"
              class="prev-month"
              aria-label="previous month">
              <span class="fas fa-angle-left fa-lg"></span>
            </button>

            <h2 id="cb-grid-label"
                class="month-year"
                aria-live="polite">
              December 2020
            </h2>

            <button type="button"
              class="next-month"
              aria-label="next month">
              <span class="fas fa-angle-right fa-lg"></span>
            </button>

            <button type="button"
              class="next-year"
              aria-label="next year">
              <span class="fas fa-angle-double-right fa-lg"></span>
            </button>

          </div>

          <div class="table-wrap"><table class="dates"
            role="grid"
            aria-labelledby="cb-grid-label">
            <thead>
              <tr>
                <th scope="col" abbr="Sunday">Su</th>
                <th scope="col" abbr="Monday">Mo</th>
                <th scope="col" abbr="Tuesday">Tu</th>
                <th scope="col" abbr="Wednesday">We</th>
                <th scope="col" abbr="Thursday">Th</th>
                <th scope="col" abbr="Friday">Fr</th>
                <th scope="col" abbr="Saturday">Sa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="disabled" tabindex="-1"></td>
                <td class="disabled" tabindex="-1"></td>
                <td class="disabled" tabindex="-1"></td>
                <td class="disabled" tabindex="-1"></td>
                <td class="disabled" tabindex="-1"></td>
                <td class="disabled" tabindex="-1"></td>
                <td tabindex="-1" data-date="2020-02-01">1</td>
              </tr>
              <tr>
                <td tabindex="-1" data-date="2020-02-02">2</td>
                <td tabindex="-1" data-date="2020-02-03">3</td>
                <td tabindex="-1" data-date="2020-02-04">4</td>
                <td tabindex="-1" data-date="2020-02-05">5</td>
                <td tabindex="-1" data-date="2020-02-06">6</td>
                <td tabindex="-1" data-date="2020-02-07">7</td>
                <td tabindex="-1" data-date="2020-02-08">8</td>
              </tr>
              <tr>
                <td tabindex="-1" data-date="2020-02-09">9</td>
                <td tabindex="-1" data-date="2020-02-10">10</td>
                <td tabindex="-1" data-date="2020-02-11">11</td>
                <td tabindex="-1" data-date="2020-02-12">12</td>
                <td tabindex="-1" data-date="2020-02-13">13</td>
                <td role="gridcell" aria-selected="true" data-date="2020-02-14">14</td>
                <td tabindex="-1" data-date="2020-02-15">15</td>
              </tr>
              <tr>
                <td tabindex="-1" data-date="2020-02-16">16</td>
                <td tabindex="-1" data-date="2020-02-17">17</td>
                <td tabindex="-1" data-date="2020-02-18">18</td>
                <td tabindex="-1" data-date="2020-02-19">19</td>
                <td tabindex="-1" data-date="2020-02-20">20</td>
                <td tabindex="-1" data-date="2020-02-21">21</td>
                <td tabindex="-1" data-date="2020-02-22">22</td>
              </tr>
              <tr>
                <td tabindex="-1" data-date="2020-02-23">23</td>
                <td tabindex="-1" data-date="2020-02-24">24</td>
                <td tabindex="-1" data-date="2020-02-25">25</td>
                <td tabindex="-1" data-date="2020-02-26">26</td>
                <td tabindex="-1" data-date="2020-02-27">27</td>
                <td tabindex="-1" data-date="2020-02-28">28</td>
                <td tabindex="-1" data-date="2020-02-29">29</td>
              </tr>
              <tr>
                <td tabindex="-1" data-date="2020-02-30">30</td>
                <td tabindex="-1" data-date="2020-02-31">31</td>
                <td class="disabled" tabindex="-1"></td>
                <td class="disabled" tabindex="-1"></td>
                <td class="disabled" tabindex="-1"></td>
                <td class="disabled" tabindex="-1"></td>
                <td class="disabled" tabindex="-1"></td>
              </tr>
            </tbody>
          </table></div>

          <div class="dialog-ok-cancel-group">
            <button class="dialog-button" value="cancel">Cancel</button>
            <button class="dialog-button" value="ok">OK</button>
          </div>

          <div class="dialog-message" aria-live="polite"></div>

        </div>
      </div>
    </div>
    <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
  </section>

  <section>
    <h2 tabindex="-1" id="accessibility-features">Accessibility Features</h2>
    <ul>
     <li>The description of the date format is associated with the combobox via <code>aria-describedby</code>, making it available to assistive technologies as an accessible description.</li>
      <li>
        While the down arrow icon is excluded from the <kbd>Tab</kbd> sequence as specified in the <code>combobox</code> design pattern, it is made accessible to assistive technologies as the Choose Date button.
        This enables assistive technology users who might not have a keyboard, e.g., someone using a touch-based screen reader, to open the date picker dialog.
      </li>
      <li>In the dialog, shortcut keys are assigned to the additional buttons for changing the month and year displayed in the calendar.</li>
      <li>Keyboard help is displayed at the bottom of the dialog. A live region is used to announce it to screen reader users when focus moves into the grid.</li>
      <li>The calendar heading displaying the month and year is marked up as a live region so screen reader users get feedback from the buttons and keyboard commands that change the month and year.</li>
      <li>
        To facilitate compact visual design in the calendar, the day names in the column headers are abbreviated to two characters.
        However, this makes it more difficult for screen reader users to understand the day names.
        So, full day names are provided to assistive technologies in the HTML <code>abbr</code> attribute on the column headers, enabling screen readers to announce the full names when users navigate the grid.
      </li>
      <li>Focus and hover styling of the controls support operating system high contrast settings via the CSS border property:
        <ul>
          <li>When a button or date cell receives focus a border is added.</li>
          <li>When hovering over a button or date cell with a pointing device a border is added.</li>
          <li>By default, buttons and date cells do not have a border; padding provides a placeholder space for focus and hover styling.</li>
        </ul>
      </li>
   </ul>
  </section>

  <section>
    <h2 id="kbd_label" tabindex="-1">Keyboard Support</h2>

    <section>
      <h3 id="kbd_label_1">Combobox</h3>
      <div class="table-wrap"><table aria-labelledby="kbd_label_1 kbd_label" class="def">
        <thead>
          <tr>
            <th>Key</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
            <tr data-test-id="combobox-down-arrow">
                <th><kbd>Down Arrow</kbd>,<br><kbd>ALT + Down Arrow</kbd></th>
                <td>
                  <ul>
                  <li>Open the date picker dialog.</li>
                  <li>
                    If the combobox contains a valid date, moves focus to that date in the calendar grid.
                    Otherwise, moves focus to current date, i.e., today's date.
                  </li>
                </ul>
              </td>
            </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h3 id="kbd_label_3">Date Picker Dialog</h3>
      <div class="table-wrap"><table aria-labelledby="kbd_label_3 kbd_label" class="def">
        <thead>
          <tr>
            <th>Key</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
            <tr data-test-id="dialog-esc">
              <th><kbd>ESC</kbd></th>
              <td>Closes the dialog and moves focus to the combobox.</td>
            </tr>
            <tr data-test-id="dialog-tab">
              <th><kbd>TAB</kbd></th>
              <td>
                <ul>
                  <li>Moves focus to next element in the dialog <kbd>Tab</kbd> sequence.</li>
                  <li>Note that, as specified in the <a href="/patterns/grid/">grid design pattern</a>, only one element in the calendar grid is in the <kbd>Tab</kbd> sequence.</li>
                  <li>If focus is on the last button (i.e., &quot;OK&quot;), moves focus to the first button (i.e. &quot;Previous Year&quot;).</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="dialog-shift-tab">
              <th><kbd>Shift + TAB</kbd></th>
              <td>
                <ul>
                  <li>Moves focus to previous element in the dialog <kbd>Tab</kbd> sequence.</li>
                  <li>Note that, as specified in the <a href="/patterns/grid/">grid design pattern</a>, only one element in the calendar grid is in the <kbd>Tab</kbd> sequence.</li>
                  <li>If focus is on the first button (i.e., &quot;Previous Year&quot;), moves focus to the last button (i.e. &quot;OK&quot;).</li>
                </ul>
              </td>
            </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h3 id="kbd_label_4">Date Picker Dialog: Calendar Buttons</h3>
      <div class="table-wrap"><table aria-labelledby="kbd_label_4 kbd_label" class="def">
        <thead>
          <tr>
            <th>Key</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
            <tr data-test-id="month-year-button-space-return">
              <th><kbd>Space</kbd>,<br> <kbd>Enter</kbd></th>
              <td>
                Change the month and/or year displayed in the calendar grid.
              </td>
            </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h3 id="kbd_label_5">Date Picker Dialog: Date Grid</h3>
      <div class="table-wrap"><table aria-labelledby="kbd_label_5 kbd_label" class="def">
        <thead>
          <tr>
            <th>Key</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="grid-space">
            <th><kbd>Space</kbd></th>
            <td>
              <ul>
                <li>Selects the date.</li>
                <li>Updates the value of the <code>combobox</code> with the selected date.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="grid-return">
            <th><kbd>Enter</kbd></th>
            <td>
              <ul>
                <li>Selects the date.</li>
                <li>Updates the value of the <code>combobox</code> with the selected date.</li>
                <li>Closes the dialog and moves focus to the <code>combobox</code>.</li>
              </ul>
          </td>
          </tr>
          <tr data-test-id="grid-up-arrow">
            <th><kbd>Up Arrow</kbd></th>
            <td>Moves focus to the same day of the previous week.</td>
          </tr>
          <tr data-test-id="grid-down-arrow">
            <th><kbd>Down Arrow</kbd></th>
            <td>Moves focus to the same day of the next week.</td>
          </tr>
          <tr data-test-id="grid-right-arrow">
            <th><kbd>Right Arrow</kbd></th>
            <td>Moves focus to the next day.</td>
          </tr>
          <tr data-test-id="grid-left-arrow">
            <th><kbd>Left Arrow</kbd></th>
            <td>Moves focus to the previous day.</td>
          </tr>
          <tr data-test-id="grid-home">
            <th><kbd>Home</kbd></th>
            <td>Moves focus to the first day (e.g. Sunday) of the current week.</td>
          </tr>
          <tr data-test-id="grid-end">
            <th><kbd>End</kbd></th>
            <td>Moves focus to the last day (e.g. Saturday) of the current week.</td>
          </tr>
          <tr data-test-id="grid-pageup">
            <th><kbd>PageUp</kbd></th>
            <td>
              <ul>
                <li>Changes the grid of dates to the previous month.</li>
                <li>Moves focus to the same day of the same week. If that day does not exist, moves focus to the same day of the previous or next week.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="grid-shift-pageup">
            <th><kbd>Shift</kbd>+<br> <kbd>PageUp</kbd></th>
            <td>
              <ul>
                <li>Changes the grid of dates to the previous year.</li>
                <li>Moves focus to the same day of the same week in the previous year. If that day does not exist, moves focus to the same day of the previous or next week.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="grid-pagedown">
            <th><kbd>PageDown</kbd></th>
            <td>
              <ul>
                <li>Changes the grid of dates to the next month.</li>
                <li>Moves focus to the same day of the same week. If that day does not exist, moves focus to the same day of previous or next week.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="grid-shift-pagedown">
            <th><kbd>Shift</kbd>+<br> <kbd>PageDown</kbd></th>
            <td>
              <ul>
                <li>Changes the grid of dates to the next year.</li>
                <li>Moves focus to the same day of the same week in the next year. If that day does not exist, moves focus to the same day of previous or next week.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
        <h3 id="kbd_label_6">Date Picker Dialog: OK and Cancel Buttons</h3>
        <div class="table-wrap"><table aria-labelledby="kbd_label_6 kbd_label" class="def">
          <thead>
            <tr>
                <th>Key</th>
                <th>Function</th>
            </tr>
          </thead>
          <tbody>
            <tr data-test-id="okay-cancel-button-space-return">
              <th> <kbd>Space</kbd>,<br> <kbd>Enter</kbd></th>
              <td>
                Activates the button:
                <ul>
                    <li>&quot;Cancel&quot;: Closes the dialog, moves focus to combobox, does not update combobox value.</li>
                    <li>&quot;OK&quot;: Closes the dialog, moves focus to combobox, updates date in combobox.</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table></div>
    </section>
  </section>

  <section>
    <h2 id="rps_label" tabindex="-1">Role, Property, State, and Tabindex  Attributes</h2>

    <section>
      <h3 id="rps_label_combobox">Combobox</h3>
      <div class="table-wrap"><table aria-labelledby="rps_label_combobox rps_label" class="data attributes">
        <thead>
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Attribute</th>
            <th scope="col">Element</th>
            <th scope="col">Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="textbox-role">
            <th scope="row"><code>combobox</code></th>
            <td></td>
            <td><code>input</code></td>
            <td>
              Identifies the <code>input</code> element as a combobox.
            </td>
          </tr>
          <tr data-test-id="textbox-aria-haspopup">
            <td></td>
            <th scope="row"><code>aria-haspopup="dialog"</code></th>
            <td><code>input</code></td>
            <td>
              Indicates that the combobox opens a dialog.
            </td>
          </tr>
          <tr data-test-id="textbox-aria-expanded-false">
            <td></td>
            <th scope="row"><code>aria-expanded="false"</code></th>
            <td><code>input</code></td>
            <td>
              Indicates that the combobox is collapsed, i.e., the &quot;Choose Date&quot; dialog is not displayed.
            </td>
          </tr>
          <tr data-test-id="textbox-aria-expanded-true">
            <td></td>
            <th scope="row"><code>aria-expanded="true"</code></th>
            <td><code>input</code></td>
            <td>
              Indicates that the combobox is expanded, i.e., the &quot;Choose Date&quot; dialog is open.
            </td>
          </tr>
          <tr data-test-id="textbox-aria-autocomplete">
            <td></td>
            <th scope="row"><code>aria-autocomplete="none"</code></th>
            <td><code>input</code></td>
            <td>
              Indicates the combobox does not support autocomplete.
            </td>
          </tr>
          <tr data-test-id="textbox-aria-controls">
            <td></td>
            <th scope="row"><code>aria-controls="IDREF"</code></th>
            <td><code>input</code></td>
            <td>
              Identifies the element controlled by the combobox.
            </td>
          </tr>
          <tr data-test-id="textbox-aria-describedby">
            <td></td>
            <th scope="row"><code>aria-describedby="IDREF"</code></th>
            <td><code>input</code></td>
            <td>
              Identifies the element that provides an accessible description for the combobox, enabling assistive technologies to associate the date format description with the input.
            </td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h3 id="rps_label_2">Choose Date Button</h3>
      <div class="table-wrap"><table aria-labelledby="rps_label_2 rps_label" class="data attributes">
        <thead>
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Attribute</th>
            <th scope="col">Element</th>
            <th scope="col">Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="calendar-button-tabindex">
            <td></td>
            <th scope="row"><code>tabindex="-1"</code></th>
            <td><code>button</code></td>
            <td>
              Excludes the button (i.e., the down arrow icon) from the <kbd>Tab</kbd> sequence as specified by the combobox design pattern.
            </td>
          </tr>
          <tr data-test-id="calendar-button-aria-label">
            <td></td>
            <th scope="row"><code>aria-label="string"</code></th>
            <td><code>button</code></td>
            <td>Defines the accessible name as &quot;Choose Date&quot;, which matches the title of the dialog opened by activating the button.</td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h3 id="rps_label_3">Date Picker Dialog</h3>
      <div class="table-wrap"><table aria-labelledby="rps_label_3 rps_label" class="data attributes">
        <thead>
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Attribute</th>
            <th scope="col">Element</th>
            <th scope="col">Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="dialog-role">
            <th scope="row"><code>dialog</code></th>
            <td></td>
            <td>
              <code>div</code>
            </td>
            <td>Identifies the element as a dialog.</td>
          </tr>
          <tr data-test-id="dialog-aria-modal">
            <td></td>
            <th scope="row"><code>aria-modal="true"</code></th>
            <td><code>div</code></td>
            <td>Indicates the dialog is modal.</td>
          </tr>
          <tr data-test-id="dialog-aria-label">
            <td></td>
            <th scope="row"><code>aria-label="Choose Date"</code></th>
            <td><code>div</code></td>
            <td>Defines the accessible name for the dialog.</td>
          </tr>
          <tr data-test-id="calendar-navigation-aria-live">
            <td></td>
            <th scope="row"><code>aria-live="polite"</code></th>
            <td><code>h2</code></td>
            <td>
              <ul>
                <li>Indicates that screen readers should automatically announce the element containing the currently displayed month and year when they change.</li>
                <li>The <code>polite</code> value indicates that other announcements should not be interrupted.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="dialog-aria-live">
            <td></td>
            <th scope="row"><code>aria-live="polite"</code></th>
            <td><code>div</code></td>
            <td>
              <ul>
                <li>Indicates the element that displays information about keyboard commands for navigating the grid should be automatically announced by screen readers.</li>
                <li>The script slightly delays display of the information, so screen readers are more likely to announce it after announcing focus change events.</li>
                <li>The <code>polite</code> value indicates that other announcements should not be interrupted.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h3 id="rps_label_4">Date Picker Dialog: Calendar Navigation Buttons</h3>
      <div class="table-wrap"><table aria-labelledby="rps_label_4 rps_label" class="data attributes">
        <thead>
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Attribute</th>
            <th scope="col">Element</th>
            <th scope="col">Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="calendar-navigation-button-aria-label">
            <td></td>
            <th scope="row"><code>aria-label="<em>String</em>"</code></th>
            <td><code>button</code></td>
            <td>
              Defines the accessible name of the button (e.g. "Next Year").
            </td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h3 id="rps_label_5">Date Picker Dialog: Date Grid</h3>
      <div class="table-wrap"><table aria-labelledby="rps_label_5 rps_label" class="data attributes">
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
            <th scope="row"><code>grid</code></th>
            <td></td>
            <td>
              <code>table</code>
            </td>
            <td>
              <ul>
                <li>Identifies the <code>table</code> element as a <code>grid</code> widget.</li>
                <li>Since the <code>grid</code> role is applied to a <code>table</code> element, the <code>row</code>, <code>columnheader</code>, and <code>gridcell</code> roles do not need to be specified because they are implied by <code>tr</code>, <code>th</code>, and <code>td</code> tags.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="grid-aria-labelledby">
            <td></td>
            <th scope="row"><code>aria-labelledby="IDREF"</code></th>
            <td><code>table</code></td>
            <td>
              Identifies the element that provides the accessible name for the <code>grid</code>, which is  the <code>h2</code> that shows the month and year of the dates displayed in the grid.
            </td>
          </tr>
          <tr data-test-id="gridcell-tabindex">
            <td></td>
            <th scope="row">
              <code>tabindex="0"</code>
            </th>
            <td>
              <code>td</code>
            </td>
            <td>
              <ul>
                <li>Makes the gridcell focusable and includes it in the dialog <kbd>Tab</kbd> sequence.</li>
                <li>Set dynamically by the JavaScript when the element is to be included in the dialog <kbd>Tab</kbd> sequence.</li>
                <li>At any given time, only one gridcell within the grid is in the dialog <kbd>Tab</kbd> sequence.</li>
                <li>This approach to managing focus is described in the section on <a href="/fundamentals/keyboard-interface/#kbd_roving_tabindex">roving tabindex</a>.</li>
              </ul>
            </td>
          </tr>
          
          <tr data-test-id="gridcell-tabindex">
            <td></td>
            <th scope="row">
              <code>tabindex="-1"</code>
            </th>
            <td>
              <code>td</code>
            </td>
            <td>
              <ul>
                <li>Makes the gridcell focusable and excludes it from the dialog <kbd>Tab</kbd> sequence.</li>
                <li>Changed dynamically to <code>0</code> by the JavaScript when the gridcell is to be included in the dialog <kbd>Tab</kbd> sequence.</li>
                <li>At any given time, only one gridcell within the grid is in the dialog <kbd>Tab</kbd> sequence.</li>
                <li>This approach to managing focus is described in the section on <a href="/fundamentals/keyboard-interface/#kbd_roving_tabindex">roving tabindex</a>.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="gridcell-aria-selected">
            <td></td>
            <th scope="row"><code>aria-selected="true"</code></th>
            <td><code>td</code></td>
            <td>
              <ul>
                <li>Indicates the cell is selected.</li>
                <li>Set on the gridcell representing the current value of the combobox; no other gridcells have <code>aria-selected</code> specified.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table></div>
      <p>
        <strong>Note:</strong> Since the names of the days of the week in the column headers are abbreviated to two characters, they may be difficult to understand when announced by a screen reader.
        An alternative column header name can be provided to screen readers by applying the <code>abbr</code> attribute to the <code>th</code> elements.
        So, each <code>th</code> element includes an <code>abbr</code> attribute containing the full spelling of the name of the day for that column.
      </p>
    </section>
  </section>

  <section>
    <h2 tabindex="-1" id="javascript-and-css-source-code">Javascript and CSS Source Code</h2>
    <ul id="css_js_files">
      <li>
        CSS:
        <a href="css/combobox-datepicker.css" type="text/css">combobox-datepicker.css</a>
      </li>
      <li>
        Javascript:
        <a href="js/combobox-datepicker.js" type="text/javascript">combobox-datepicker.js</a>
      </li>
    </ul>
  </section>

 <section>
    <h2 id="sc1_label" tabindex="-1">HTML Source Code</h2>
    <div role="separator" id="sc1_start_sep" aria-labelledby="sc1_start_sep sc1_label" aria-label="Start of"></div>
    <pre><code id="source1"></code></pre>
    <div role="separator" id="sc1_end_sep" aria-labelledby="sc1_end_sep sc1_label" aria-label="End of"></div>
    <script>
      sourceCode.add('source1', 'ex1', 'ex_label', 'css_js_files');
      sourceCode.make();
    </script>
  </section>
  </div>
  <nav>
    <a href="/patterns/combobox/"><code>combobox</code> Design Pattern in WAI-ARIA Authoring Practices 1.2</a>
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