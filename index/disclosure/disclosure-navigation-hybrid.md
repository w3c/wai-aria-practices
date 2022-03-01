---
# This is a generated file
title: "Example Disclosure Navigation Menu with Top-Level Links"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /index/disclosure/disclosure-navigation-hybrid

lang: en
last_updated: 2022-03-01
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>

<link href="css/disclosure-navigation.css" rel="stylesheet" />
<script src="js/disclosureMenu.js" type="text/javascript"></script>


<link rel="stylesheet" href="/assets/styles.css">
<!-- Code highlighting styles -->
<link rel="stylesheet" href="/index/css/github.css">

<div>

        <div class="sidebar-container">
          <aside class="sidebar-left" aria-describedby="sidebar-toc">
            <h2 id="sidebar-toc" class="sidebar-headline">Table of Contents</h2>
            <ul class="sidebar-list">
              
                    <li>
                      <a href="#example-usage-options">Example Usage Options</a>
                    </li>
                   
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
      <li><a href="https://github.com/w3c/aria-practices/projects/14">Related Issues</a></li>
      <li><a href="/patterns/disclosure/">Design Pattern</a></li>
    </ul>
  
          </aside>
          <div class="sidebar-right"><h2 class="followed-by-support-notice">About This Example</h2>
  
  <div>
    
    <div class="advisement">
      <p>
        Although this example uses the word "menu" in the colloquial sense to refer to a set of navigation links, it does not use the WAI-ARIA menu role.
        That is because the menu and menubar roles require complex functionality, such as <a href="/fundamentals/keyboard-interface/#kbd_general_within">composite widget focus management</a> and first-character navigation, that is unnecessary for typical site navigation.
      </p>
    </div><img alt=""
        src="/assets/img/disclosure.svg"
        class="example-page-example-icon"
      >

    <p>
      The following example demonstrates using the
      <a href="/patterns/disclosure/">disclosure design pattern</a>
      to show and hide dropdown lists of links in a navigation bar for a mythical university web site.
      Unlike the other <a href="disclosure-navigation.html">disclosure navigation menu example</a>, this example includes top-level links alongside the disclosure buttons.
    </p>
    <p>Similar examples include:</p>
    <ul>
      <li><a href="disclosure-navigation.html">Example Disclosure Navigation Menu</a></li>
      <li><a href="disclosure-faq.html">Example Disclosure (Show/Hide) for Answers to Frequently Asked Questions</a></li>
      <li><a href="disclosure-image-description.html">Example Disclosure (Show/Hide) for an Image Description</a></li>
      <li><a href="../menubar/menubar-navigation.html">Navigation Menubar Example</a></li>
    </ul>

  <h2 tabindex="-1" id="example-usage-options">Example Usage Options</h2>
  <p>
    This example demonstrates two different ways of implementing keyboard support.
    Toggle between them with the following checkbox.
  </p>
  <label for="arrow-behavior-switch">
    <input type="checkbox" id="arrow-behavior-switch" checked>
    Include optional support for arrow keys, <kbd>Home</kbd>, and <kbd>End</kbd>
  </label>

  <section>
    <div class="example-header">
      <h2 id="ex_label" tabindex="-1">Example</h2>
    </div>
    <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
    <div id="ex1">
      <header class="sample-header">
        <div class="title" id="id_website_title">Mythical University</div>
        <div class="tagline">Using a disclosure + link pattern for navigation</div>
      </header>
      <nav aria-label="Mythical University">
        <ul id="exTest" class="disclosure-nav">
          <li>
            <a href="#mythical-page-content" class="main-link">About</a>
            <button type="button" aria-expanded="false" aria-controls="id_about_menu" aria-label="More About pages"> </button>
            <ul id="id_about_menu" style="display:none">
              <li>
                <a href="#mythical-page-content">Overview</a>
              </li>
              <li>
                <a href="#mythical-page-content">Administration</a>
              </li>
              <li>
                <a href="#mythical-page-content">Facts</a>
              </li>
              <li>
                <a href="#mythical-page-content">Campus Tours</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#mythical-page-content" class="main-link">Admissions</a>
            <button type="button" aria-expanded="false" aria-controls="id_admissions_menu" aria-label="More Admissions pages"> </button>
            <ul id="id_admissions_menu" style="display:none">
              <li>
                <a href="#mythical-page-content">Apply</a>
              </li>
              <li>
                <a href="#mythical-page-content">Tuition</a>
              </li>
              <li>
                <a href="#mythical-page-content">Sign Up</a>
              </li>
              <li>
                <a href="#mythical-page-content">Visit</a>
              </li>
              <li>
                <a href="#mythical-page-content">Photo Tour</a>
              </li>
              <li>
                <a href="#mythical-page-content">Connect</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#mythical-page-content" class="main-link">Academics</a>
            <button type="button" aria-expanded="false" aria-controls="id_academics_menu" aria-label="More Academics pages"> </button>
            <ul id="id_academics_menu" style="display:none">
              <li>
                <a href="#mythical-page-content">Colleges &amp; Schools</a>
              </li>
              <li>
                <a href="#mythical-page-content">Programs of Study</a>
              </li>
              <li>
                <a href="#mythical-page-content">Honors Programs</a>
              </li>
              <li>
                <a href="#mythical-page-content">Online Courses</a>
              </li>
              <li>
                <a href="#mythical-page-content">Course Explorer</a>
              </li>
              <li>
                <a href="#mythical-page-content">Register for Class</a>
              </li>
              <li>
                <a href="#mythical-page-content">Academic Calendar</a>
              </li>
              <li>
                <a href="#mythical-page-content">Transcripts</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div id="mythical-page-content" class="disclosure-page-content" tabindex="-1" role="region" aria-labelledby="mythical-page-heading">
        <h3 id="mythical-page-heading">Home</h3>
        <p>Sample content section. Activating a link above will update and navigate to this region.</p>
      </div>
      <footer class="sample-footer">
        Mythical University footer information
      </footer>
    </div>
    <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
  </section>

  <section>
    <h2 tabindex="-1" id="accessibility-features">Accessibility Features</h2>
    <ol>
      <li>Since this set of links and disclosure buttons provides  navigation for the mythical university web site, the list that contains them is wrapped in a navigation landmark named <q>Mythical University</q>.</li>
      <li>
        The semantics of the list structure communicate the hierarchy of the navigation system to assistive technology users.
        The top-level list has three items where each item contains a top-level link and an associated disclosure button.
        The set of links controlled by a disclosure button is in a list nested inside the list item that contains the button.
      </li>
      <li>
        If a dropdown is open and focus is inside the navigation region, pressing <kbd>Esc</kbd> will close the dropdown.
        Moving focus out of the navigation region also closes an open dropdown.
      </li>
      <li>Optional navigation keys (Arrow keys, <kbd>Home</kbd>, and <kbd>End</kbd>):
        <ol>
          <li>Enabling the optional arrow key support prevents the default page scroll behavior when focus is contained within the navigation region.</li>
          <li>
            Optional navigation key support is primarily for the benefit of keyboard users who are not running a screen reader.
            Screen readers that have both reading and interaction modes intercept these navigation keys and do not pass them to the page when the screen reader is in reading mode.
            When interacting with this example, such screen readers are typically in reading mode because this example does not use a widget role that triggers screen reader interaction mode.
          </li>
          <li>
            If implemented, the optional navigation keys supplement, but do not replace, tabbing among buttons and links.
            This is because the buttons and links are not contained by an element with a widget role, such as <code>grid</code>, that is expected to occupy only one stop in the page <kbd>Tab</kbd> sequence and manage focus for all its descendants.
          </li>
        </ol>
      </li>
    </ol>
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
          <th>
            <kbd>Tab</kbd><br>
            <kbd>Shift + Tab</kbd>
          </th>
          <td>Move keyboard focus among top-level links and buttons, and if a dropdown is open,  through links in the dropdown.</td>
        </tr>
        <tr data-test-id="key-enter-space">
          <th>
            <kbd>Space</kbd> or <br>
            <kbd>Enter</kbd>
          </th>
          <td>
            <ul>
              <li>If focus is on a disclosure button, activates the button, which toggles the visibility of the dropdown.</li>
              <li>If focus is on a link:
                <ul>
                  <li>If any link has <code>aria-current</code> set, removes it.</li>
                  <li>Sets <code>aria-current="page"</code> on the focused link.</li>
                  <li>Activates the focused link.</li>
                </ul>
              </li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="key-escape">
          <th>
            <kbd>Escape</kbd>
          </th>
          <td>If a dropdown is open, closes it and sets focus on the button that controls that dropdown.</td>
        </tr>
        <tr data-test-id="key-arrows">
          <th>
            <kbd>Down Arrow</kbd> or <br>
            <kbd>Right Arrow</kbd><br>
            (Optional)
          </th>
          <td>
            <ul>
              <li>If focus is on a top-level link or button with a collapsed dropdown, and it is not the last top-level item, moves focus to the next top-level link or button.</li>
              <li>if focus is on a top-level button and its dropdown is expanded, moves focus to the first link in the dropdown.</li>
              <li>If focus is on a link within an expanded dropdown, and it is not the last link, moves focus to the next link.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="key-arrows">
          <th>
            <kbd>Up Arrow</kbd> or <br>
            <kbd>Left Arrow</kbd><br>
            (Optional)
          </th>
          <td>
            <ul>
              <li>If focus is on a top-level link or button, and it is not the first item, moves focus to the previous link or button.</li>
              <li>If focus is on a link within an expanded dropdown, and it is not the first link,  moves focus to the previous link.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="key-home-end">
          <th>
            <kbd>Home</kbd> (Optional)
          </th>
          <td>
          <ul>
              <li>If focus is on a top-level link button, and it is not the first item, moves focus to the first item.</li>
              <li>If focus is on a link within an expanded dropdown, and it is not the first link, moves focus to the first link.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="key-home-end">
          <th>
            <kbd>End</kbd> (Optional)
          </th>
          <td>
          <ul>
              <li>If focus is on a top-level link or button, and it is not the last item, moves focus to the last item.</li>
              <li>If focus is on a link within an expanded dropdown, and it is not the last link, moves focus to the last link.</li>
            </ul>
          </td>
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
        <tr data-test-id="button-aria-controls">
          <td></td>
          <th scope="row">
            <code>aria-controls="IDREF"</code>
          </th>
          <td>
            <code>button</code>
          </td>
          <td>
            Indicates that the disclosure button controls visibility of the container identified by the <code>IDREF</code> value.
          </td>
        </tr>
        <tr data-test-id="button-aria-expanded">
          <td></td>
          <th scope="row">
            <code>aria-expanded="false"</code>
          </th>
          <td>
            <code>button</code>
          </td>
          <td>
            <ul>
              <li>
                Indicates that the container controlled by the disclosure button is <em>hidden</em>.
              </li>
              <li>
                CSS attribute selectors (e.g. <code>[aria-expanded="false"]</code>) are
                used to synchronize the visual states with the value of the <code>aria-expanded</code>
                attribute.
              </li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="button-aria-expanded">
          <td></td>
          <th scope="row">
            <code>aria-expanded="true"</code>
          </th>
          <td>
            <code>button</code>
          </td>
          <td>
            <ul>
              <li>
                Indicates that the container controlled by the disclosure button is <em>visible</em>.
              </li>
              <li>
                CSS attribute selectors (e.g. <code>[aria-expanded="true"]</code>) are
                used to synchronize the visual states with the value of the <code>aria-expanded</code>
                attribute.
              </li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="link-aria-current">
          <td></td>
          <th scope="row">
            <code>aria-current="page"</code>
          </th>
          <td>
            <code>a</code>
          </td>
          <td>Indicates that the page referenced by the link is currently displayed.</td>
        </tr>
      </tbody>
    </table></div>
  </section>

  <section>
    <h2 tabindex="-1" id="javascript-and-css-source-code">Javascript and CSS Source Code</h2>
    
    <ul id="css_js_files">
      <li>
        CSS:
        <a href="css/disclosure-navigation.css" type="tex/css">disclosure-navigation.css</a>
      </li>
      <li>
        Javascript:
        <a href="js/disclosureMenu.js" type="text/javascript">disclosureMenu.js</a>
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
    <a href="/patterns/disclosure/">Disclosure (Show/Hide) Design Pattern in WAI-ARIA Authoring Practices 1.2</a>
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
