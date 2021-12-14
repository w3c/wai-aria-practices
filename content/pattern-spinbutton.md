---
# This is a generated file
title: "Spinbutton"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /patterns/spinbutton/

lang: en
last_updated: 2021-12-14
---


<link rel="stylesheet" href="/assets/styles.css">
<!-- Code highlighting styles -->
<link rel="stylesheet" href="/example-index/css/github.css">

<div>

        <div class="sidebar-container">
          <aside class="sidebar-left">
            <h2 class="sidebar-headline">Table of Contents</h2>
            <ul class="sidebar-list">
              
                  <li>
                    <a href="#about-this-pattern">About This Pattern</a>
                  </li>
                 
                  <li>
                    <a href="#example-6">Example</a>
                  </li>
                 
                  <li>
                    <a href="#keyboard-interaction-18">Keyboard Interaction</a>
                  </li>
                 
                  <li>
                    <a href="#wai-aria-roles-states-and-properties-19">WAI-ARIA Roles, States, and Properties</a>
                  </li>
                
            </ul>
          </aside>
          <div class="sidebar-right">
            <section class="widget" id="spinbutton"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2>
      
      <p>
        A spinbutton is an input widget that restricts its value to a set or range of discrete values.
        For example, in a widget that enables users to set an alarm, a spinbutton could allow users to select a number from 0 to 59 for the minute of an hour.
      </p>
      <p>
        Spinbuttons often have three components, including a text field that displays the current value, an increase button, and a decrease button.
        The text field is usually the only focusable component because the increase and decrease functions are keyboard accessible via arrow keys.
        Typically, the text field also allows users to directly edit the value.
      </p>
      <p>
        If the range is large, a spinbutton may support changing the value in both small and large steps.
        For instance, in the alarm example, the user may be able to move by 1 minute with <kbd>Up Arrow</kbd> and <kbd>Down Arrow</kbd> and by 10 minutes with <kbd>Page Up</kbd> and <kbd>Page Down</kbd>.
      </p>

      <section class="notoc examples-section"><img alt="" src="/assets/img/spinbutton.svg" >
        <h2 id="example-6" tabindex="-1">Example</h2>
        <p><a href="../../example-index/spinbutton/datepicker-spinbuttons.html">Date Picker Spin Button Example:</a> Illustrates a date picker made from three spin buttons for day, month, and year.</p>
      </section>

      <section class="notoc">
        <h2 id="keyboard-interaction-18" tabindex="-1">Keyboard Interaction</h2>
        <ul>
          <li><kbd>Up Arrow</kbd>: Increases the value.</li>
          <li><kbd>Down Arrow</kbd>: Decreases the value.</li>
          <li><kbd>Home</kbd>: If the spinbutton has a minimum value, sets the value to its minimum.</li>
          <li><kbd>End</kbd>: If the spinbutton has a maximum value, sets the value to its maximum.</li>
          <li><kbd>Page Up</kbd> (Optional): Increases the value by a larger step than <kbd>Up Arrow</kbd>.</li>
          <li><kbd>Page Down</kbd> (Optional): Decreases the value by a larger step than <kbd>Down Arrow</kbd>.</li>
          <li>If the spinbutton text field allows directly editing the value, the following keys are supported:
            <ul>
              <li>Standard single line text editing keys appropriate for the device platform (see note below).</li>
              <li>
                Printable Characters: Type characters in the textbox. Note that many implementations allow only certain characters as part of the value and prevent input of any other characters.
                For example, an hour-and-minute spinner would allow only integer values from 0 to 59, the colon ':', and the letters 'AM' and 'PM'.
                Any other character input does not change the contents of the text field nor the value of the spinbutton.
              </li>
            </ul>
          </li>
        </ul>
        <div class="note" role="note" id="issue-container-generatedID-25"><div role="heading" class="note-title marker" id="h-note-23" aria-level="5"><span>Note</span></div><ol class="">
          <li>Focus remains on the text field during operation.</li>
          <li>Standard single line text editing keys appropriate for the device platform:
            <ol>
              <li>include keys for input, cursor movement, selection, and text manipulation.</li>
              <li>Standard key assignments for editing functions depend on the device operating system.</li>
              <li>The most robust approach for providing text editing functions is to rely on browsers, which  supply them for HTML inputs with type text and for elements with the <code>contenteditable</code> HTML attribute.</li>
              <li><strong>IMPORTANT:</strong> Be sure that JavaScript does not interfere with browser-provided text editing functions by capturing key events for the keys used to perform them.</li>
            </ol>
          </li>
        </ol></div>
      </section>

      <section class="notoc">
        <h2 id="wai-aria-roles-states-and-properties-19" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2>
        <ul>
          <li>
            The focusable element serving as the spinbutton has role <a class="role-reference" href="https://w3c.github.io/aria/#spinbutton">spinbutton</a>.
            This is typically an element that supports text input.
          </li>
          <li>The spinbutton element has the <a class="property-reference" href="https://w3c.github.io/aria/#aria-valuenow">aria-valuenow</a> property set to a decimal value representing the current value of the spinbutton.</li>
          <li>The spinbutton element has the <a class="property-reference" href="https://w3c.github.io/aria/#aria-valuemin">aria-valuemin</a> property set to a decimal value representing the minimum allowed value of the spinbutton if it has a known minimum value.</li>
          <li>The spinbutton element has the <a class="property-reference" href="https://w3c.github.io/aria/#aria-valuemax">aria-valuemax</a> property set to a decimal value representing the maximum allowed value of the spinbutton if it has a known maximum value.</li>
          <li>
          If the value of <code>aria-valuenow</code> is not user-friendly, e.g., the day of the week is represented by a number, the
          <a class="property-reference" href="https://w3c.github.io/aria/#aria-valuetext">aria-valuetext</a>
          property is set on the spinbutton element to a string that makes the spinbutton value understandable, e.g., "Monday".
          </li>
          <li>
            If the spinbutton has a visible label, it is referenced by
            <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a> on the spinbutton element.
            Otherwise, the spinbutton element has a label provided by
            <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a>.
          </li>
          <li>
            The spinbutton element has
            <a href="https://w3c.github.io/aria/#aria-invalid" class="state-reference">aria-invalid</a> set to <code>true</code>
            if the value is outside the allowed range.
            Note that most implementations prevent input of invalid values, but in some scenarios, blocking all invalid input may not be practical.
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
