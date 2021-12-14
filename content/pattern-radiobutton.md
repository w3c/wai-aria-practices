---
# This is a generated file
title: "Radio Group"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /patterns/radiobutton/

lang: en
last_updated: 2021-12-14
---


<link rel="stylesheet" href="/assets/styles.css">
<!-- Code highlighting styles -->
<link rel="stylesheet" href="/index/css/github.css">

<div>

        <div class="sidebar-container">
          <aside class="sidebar-left">
            <h2 class="sidebar-headline">Table of Contents</h2>
            <ul class="sidebar-list">
              
                  <li>
                    <a href="#about-this-pattern">About This Pattern</a>
                  </li>
                 
                  <li>
                    <a href="#examples-10">Examples</a>
                  </li>
                 
                  <li>
                    <a href="#keyboard-interaction-15">Keyboard Interaction</a>
                  </li>
                 
                  <li>
                    <a href="#wai-aria-roles-states-and-properties-16">WAI-ARIA Roles, States, and Properties</a>
                  </li>
                
            </ul>
          </aside>
          <div class="sidebar-right">
            <section class="widget" id="radiobutton"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2>
      
      <p>
        A radio group is a set of checkable buttons, known as radio buttons, where no more than one of
        the buttons can be checked at a time.
        Some implementations may initialize the set with all buttons in the unchecked state in order to
        force the user to check one of the buttons before moving past a certain point in the workflow.
      </p>

      <section class="notoc examples-section"><img alt="" src="/assets/img/radiobutton.svg" >
        <h2 id="examples-10" tabindex="-1">Examples</h2>
        <ul>
          <li><a href="../../index/radio/radio.html">Radio Group Example Using Roving tabindex</a></li>
          <li><a href="../../index/radio/radio-activedescendant.html">Radio Group Example Using aria-activedescendant</a></li>
          <li><a href="../../index/radio/radio-rating.html">Rating Radio Group Example</a>: Radio group that provides input for a five-star rating scale.</li>
        </ul>
      </section>

      <section class="notoc">
        <h2 id="keyboard-interaction-15" tabindex="-1">Keyboard Interaction</h2>
        <section class="notoc">
          <h3 id="for-radio-groups-not-contained-in-a-toolbar">For Radio Groups Not Contained in a Toolbar</h3>
          <p>
            This section describes the keyboard interaction implemented for most radio groups.
            For the special case of a radio group nested inside a <a href="/patterns/toolbar/">toolbar</a>, use the keyboard interaction described in the following section.
          </p>
          <ul>
            <li>
              <kbd>Tab</kbd> and <kbd>Shift + Tab</kbd>:
              Move focus into and out of the radio group.
              When focus moves into a radio group :
              <ul>
                <li>If a radio button is checked, focus is set on the checked button.</li>
                <li>If none of the radio buttons are checked, focus is set on the first radio
                  button in the group.</li>
              </ul>
            </li>
            <li><kbd>Space</kbd>: checks the focused radio button if it is not already checked.</li>
            <li>
              <kbd>Right Arrow</kbd> and <kbd>Down Arrow</kbd>: move focus to the next radio button in
              the group, uncheck the previously focused button, and check the newly focused button. If
              focus is on the last button, focus moves to the first button.
            </li>
            <li>
              <kbd>Left Arrow</kbd> and <kbd>Up Arrow</kbd>: move focus to the previous radio button
              in the group, uncheck the previously focused button, and check the newly focused button.
              If focus is on the first button, focus moves to the last button.
            </li>
          </ul>
          <div class="note" role="note" id="issue-container-generatedID-20"><div role="heading" class="note-title marker" id="h-note-20" aria-level="6"><span>Note</span></div><p class="">
            The initial focus behavior described above differs slightly from the behavior
            provided by some browsers for native HTML radio groups. In some browsers, if none of the
            radio buttons are selected, moving focus into the radio group with <kbd>Shift+Tab</kbd> will place focus on the last radio button
            instead of the first radio button.
          </p></div>
        </section>
        <section class="notoc">
          <h3 id="for-radio-group-contained-in-a-toolbar">For Radio Group Contained in a Toolbar</h3>
          <p>
            Because arrow keys are used to navigate among elements of a toolbar and the <kbd>Tab</kbd> key moves focus in and out of a toolbar, when a radio group is nested inside a toolbar, the keyboard interaction of the radio group is slightly different from that of a radio group that is not inside of a toolbar.
            For instance, users need to be able to navigate among all toolbar elements, including the radio buttons, without changing which radio button is checked.
            So, when navigating through a radio group in a toolbar with arrow keys, the button that is checked does not change.
            The keyboard interaction of a radio group nested in a toolbar is as follows.
          </p>
          <ul>
            <li><kbd>Space</kbd>: If the focused radio button is not checked, unchecks the currently checked radio button and checks the focused radio button. Otherwise, does nothing.</li>
            <li><kbd>Enter</kbd> (optional): If the focused radio button is not checked, unchecks the currently checked radio button and checks the focused radio button. Otherwise, does nothing.</li>
            <li><kbd>Right Arrow</kbd>:
              <ul>
                <li>When focus is on a radio button and that radio button is <strong>not</strong> the last radio button in the radio group, moves focus to the next radio button.</li>
                <li>When focus is on the last radio button in the radio group and that radio button is <strong>not</strong> the last element in the toolbar, moves focus to the next element in the toolbar.</li>
                <li>When focus is on the last radio button in the radio group and that radio button is also the last element in the toolbar, moves focus to the first element in the toolbar.</li>
              </ul>
            </li>
            <li><kbd>Left Arrow</kbd>:
              <ul>
                <li>When focus is on a radio button and that radio button is <strong>not</strong> the first radio button in the radio group, moves focus to the previous radio button.</li>
                <li>When focus is on the first radio button in the radio group and that radio button is <strong>not</strong> the first element in the toolbar, moves focus to the previous element in the toolbar.</li>
                <li>When focus is on the first radio button in the radio group and that radio button is also the first element in the toolbar, moves focus to the last element in the toolbar.</li>
              </ul>
            </li>
            <li>
              <kbd>Down Arrow</kbd> (optional): Moves focus to the next radio button in the radio group.
              If focus is on the last radio button in the radio group, moves focus to the first radio button in the group.
            </li>
            <li>
              <kbd>Up Arrow</kbd> (optional): Moves focus to the previous radio button in the radio group.
              If focus is on the first radio button in the radio group, moves focus to the last radio button in the group.
            </li>
          </ul>
          <div class="note" role="note" id="issue-container-generatedID-21"><div role="heading" class="note-title marker" id="h-note-21" aria-level="6"><span>Note</span></div><p class="">
            Radio buttons in a toolbar are frequently styled in a manner that appears more like toggle buttons.
            For an example, See the <a href="../../index/toolbar/toolbar.html">Simple Editor Toolbar Example</a>
          </p></div>
        </section>
      </section>

      <section class="notoc">
        <h2 id="wai-aria-roles-states-and-properties-16" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2>
        <ul>
          <li>
            The radio buttons are contained in or owned by an element with role
            <a href="https://w3c.github.io/aria/#radiogroup" class="role-reference">radiogroup</a>.
          </li>
          <li>
            Each radio button element has role
            <a href="https://w3c.github.io/aria/#radio" class="role-reference">radio</a>.
          </li>
          <li>
            If a radio button is checked, the <code>radio</code> element has
            <a href="https://w3c.github.io/aria/#aria-checked" class="state-reference">aria-checked</a>
            set to <code>true</code>. If it is not checked, it has
            <a href="https://w3c.github.io/aria/#aria-checked" class="state-reference">aria-checked</a>
            set to <code>false</code>.
          </li>
          <li>
            Each <code>radio</code> element is labelled by its content, has a visible label
            referenced by
            <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a>,
            or has a label specified with
            <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a>.
          </li>
          <li>
            The <code>radiogroup</code> element has a visible label referenced by
            <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a>
            or has a label specified with
            <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a>.
          </li>
          <li>
            If elements providing additional information about either the radio group or each radio
            button are present, those elements are referenced by the <code>radiogroup</code> element
            or <code>radio</code> elements with the
            <a href="https://w3c.github.io/aria/#aria-describedby" class="property-reference">aria-describedby</a>
            property.
          </li>
        </ul>
      </section>
    </section>
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
