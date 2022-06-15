---
# This is a generated file
title: "Toolbar"
ref: /ARIA/apg/patterns/toolbar/

github:
  repository: w3c/aria-practices
  branch: main
  path: aria-practices.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/patterns/toolbar/

sidebar: true



# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---


<link 
  rel="stylesheet"
  href="{{ '/content-assets/wai-aria-practices/styles.css' | relative_url }}"
>
<!-- Code highlighting styles -->
<link 
  rel="stylesheet"
  href="{{ '/ARIA/apg/example-index/css/github.css' | relative_url }}"
>

<script>
const addBodyClass = "pattern-page";
const enableSidebar = true;
if (addBodyClass) document.body.classList.add(addBodyClass);
if (enableSidebar) document.body.classList.add('has-sidebar');
</script>
    

<script>
    const parentPages = ['patterns', 'practices', 'example-index'];
    const parentIndexPage = window.location.pathname.includes('.html') ? 'example-index' : window.location.pathname.match('([^/]+)/([^/]+)/$')[1];
    if (parentPages.includes(parentIndexPage)) {
      const parentHref = 'a[href*="' + parentIndexPage + '"]'
      document.querySelector(parentHref).classList.add('active');
    }
  </script>
<div>
<section class="widget" id="toolbar"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2><div class="header-wrapper"></div>
      
      <p>A <a class="role-reference" href="https://w3c.github.io/aria/#toolbar">toolbar</a> is a container for grouping a set of controls, such as buttons, menubuttons, or checkboxes.</p>
      <p>
        When a set of controls is visually presented as a group, the <code>toolbar</code> role can be used to communicate the presence and purpose of the grouping to screen reader users.
        Grouping controls into toolbars can also be an effective way of reducing the number of tab stops in the keyboard interface.
      </p>
      <p>To optimize the benefit of toolbar widgets:</p>
      <ul>
        <li>
          Implement focus management so the keyboard tab sequence includes one stop for the toolbar and arrow keys move focus among the controls in the toolbar.
          <ul>
            <li>In horizontal toolbars, <kbd>Left Arrow</kbd> and <kbd>Right Arrow</kbd> navigate among controls. <kbd>Up Arrow</kbd> and <kbd>Down Arrow</kbd> can duplicate <kbd>Left Arrow</kbd> and <kbd>Right Arrow</kbd>, respectively, or can be reserved for operating controls, such as spin buttons that require vertical arrow keys to operate.</li>
            <li>In vertical toolbars, <kbd>Up Arrow</kbd> and <kbd>Down Arrow</kbd> navigate among controls. <kbd>Left Arrow</kbd> and <kbd>Right Arrow</kbd> can duplicate <kbd>Up Arrow</kbd> and <kbd>Down Arrow</kbd>, respectively, or can be reserved for operating controls, such as horizontal sliders that require horizontal arrow keys to operate.</li>
            <li>In toolbars with multiple rows of controls, <kbd>Left Arrow</kbd> and <kbd>Right Arrow</kbd> can provide navigation that wraps from row to row, leaving the option of reserving vertical arrow keys for operating controls.</li>
          </ul>
        </li>
        <li>Avoid including controls whose operation requires the pair of arrow keys used for toolbar navigation. If unavoidable, include only one such control and make it the last element in the toolbar. For example, in a horizontal toolbar, a textbox could be included as the last element.</li>
        <li>Use toolbar as a grouping element only if the group contains 3 or more controls.</li>
      </ul>
      <section class="notoc examples-section"><img alt="" 
            src="{{ '/content-images/wai-aria-practices/img/toolbar.svg' | relative_url }}"
          ><div class="header-wrapper"><h2 id="example-7" tabindex="-1">Example</h2></div>
        
        <p>
          <a href="../../example-index/toolbar/toolbar.html">Toolbar Example</a>:
          A toolbar that uses roving tabindex to manage focus and contains several types of controls, including toggle buttons, radio buttons, a menu button, a spin button, a checkbox, and a link.
        </p>
      </section>
      <section class="notoc"><div class="header-wrapper"><h2 id="keyboard-interaction-22" tabindex="-1">Keyboard Interaction</h2></div>
        
        <ul>
          <li><kbd>Tab</kbd> and <kbd>Shift + Tab</kbd>: Move focus into and out of the toolbar. When focus moves into a toolbar:
            <ul>
              <li>If focus is moving into the toolbar for the first time, focus is set on the first control that is not disabled.</li>
              <li>If the toolbar has previously contained focus, focus is optionally set on the control that last had focus. Otherwise, it is set on the first control that is not disabled.</li>
            </ul>
          </li>
          <li>For a horizontal toolbar (the default):
            <ul>
              <li><kbd>Left Arrow</kbd>: Moves focus to the previous control.  Optionally, focus movement may wrap from the first element to the last element. </li>
              <li><kbd>Right Arrow</kbd>: Moves focus to the next control.  Optionally, focus movement may wrap from the last element to the first element. </li>
            </ul>
          </li>
          <li><kbd>Home</kbd> (Optional): Moves focus to first element.</li>
          <li><kbd>End</kbd> (Optional): Moves focus to last element.</li>
        </ul>
        <div class="note" role="note" id="issue-container-generatedID-29"><div role="heading" class="note-title marker" id="h-note-27" aria-level="5"><span>Note</span></div><ol class="">
          <li>If the items in a toolbar are arranged vertically:
            <ol>
              <li><kbd>Down Arrow</kbd> performs as <kbd>Right Arrow</kbd> is described above. </li>
              <li><kbd>Up Arrow</kbd> performs as <kbd>Left Arrow</kbd> is described above. </li>
            </ol>
          </li>
          <li>
            Typically, disabled elements are not focusable when navigating with a keyboard.
            However, in circumstances where discoverability of a function is crucial, it may be helpful if disabled controls are focusable so screen reader users are more likely to be aware of their presence.
            For additional guidance, see <a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls' | relative_url }}" class="sec-ref">Focusability of disabled controls</a>.
          </li>
          <li>In applications where quick access to a toolbar is important, such as accessing an editor's toolbar from its text area, a documented shortcut key for moving focus from the relevant context to its corresponding toolbar is recommended.</li>
        </ol></div>
      </section>
      <section class="notoc"><div class="header-wrapper"><h2 id="wai-aria-roles-states-and-properties-23" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2></div>
        
        <ul>
          <li>The element that serves as the toolbar container has role <a class="role-reference" href="https://w3c.github.io/aria/#toolbar">toolbar</a>.  </li>
          <li>
            If the toolbar has a visible label, it is referenced by
            <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a> on the toolbar element.
            Otherwise, the toolbar element has a label provided by
            <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a>.
          </li>
          <li>If the controls are arranged vertically, the toolbar element has <a href="https://w3c.github.io/aria/#aria-orientation" class="property-reference">aria-orientation</a> set to <code>vertical</code>. The default orientation is horizontal.</li>
        </ul>
      </section>
    </section>
</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/jumpto.js' | relative_url }}"
></script>
