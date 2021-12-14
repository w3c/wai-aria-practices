---
# This is a generated file
title: "Slider"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /patterns/slider/

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
                    <a href="#examples-11">Examples</a>
                  </li>
                 
                  <li>
                    <a href="#keyboard-interaction-16">Keyboard Interaction</a>
                  </li>
                 
                  <li>
                    <a href="#wai-aria-roles-states-and-properties-17">WAI-ARIA Roles, States, and Properties</a>
                  </li>
                
            </ul>
          </aside>
          <div class="sidebar-right">
            <section class="widget" id="slider"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2>
      
      <p>
        A slider is an input where the user selects a value from within a given range.
        Sliders typically have a slider thumb that can be moved along a bar or track to change the value of the slider.
      </p>
      <div class="warning" id="issue-container-generatedID-22"><div role="heading" class="warning-title marker" id="h-warning" aria-level="4"><span>Warning</span></div><p class="">
        Some users of touch-based assistive technologies may experience difficulty utilizing widgets that implement this slider pattern because the gestures their assistive technology provides for operating sliders may not yet generate the necessary output.
        To change the slider value, touch-based assistive technologies need to respond to user gestures for increasing and decreasing the value by synthesizing key events.
        This is a new convention that may not be fully implemented by some assistive technologies.
        Authors should fully test slider widgets using assistive technologies on devices where touch is a primary input mechanism before considering incorporation into production systems.
      </p></div>
      <section class="notoc examples-section"><img alt="" src="/assets/img/slider.svg" >
        <h2 id="examples-11" tabindex="-1">Examples</h2>
        <ul>
          <li><a href="../../index/slider/slider-color-viewer.html">Color Viewer Slider Example</a>: Basic  horizontal sliders that illustrate setting numeric values for a color picker.</li>
          <li><a href="../../index/slider/slider-temperature.html">Vertical Temperature Slider Example</a>: Demonstrates using <code>aria-orientation</code> to specify vertical orientation and <code>aria-valuetext</code> to communicate unit of measure for a temperature input.</li>
          <li><a href="../../index/slider/slider-rating.html">Rating Slider Example</a>: Horizontal slider that demonstrates using <code>aria-valuetext</code> to communicate current and maximum value of a rating input for a five star rating scale.</li>
          <li><a href="../../index/slider/slider-seek.html">Media Seek Slider Example</a>: Horizontal slider that demonstrates using <code>aria-valuetext</code> to communicate current and maximum values of time in media to make the values easy to understand for assistive technology users by converting the total number of seconds to minutes and seconds.</li>
        </ul>
      </section>

      <section id="slider_kbd_interaction" class="notoc">
        <h2 id="keyboard-interaction-16" tabindex="-1">Keyboard Interaction</h2>
        <ul>
          <li><kbd>Right Arrow</kbd>: Increase the value of the slider by one step.</li>
          <li><kbd>Up Arrow</kbd>: Increase the value of the slider by one step.</li>
          <li><kbd>Left Arrow</kbd>: Decrease the value of the slider by one step.</li>
          <li><kbd>Down Arrow</kbd>: Decrease the value of the slider by one step.</li>
          <li><kbd>Home</kbd>: Set the slider to the first allowed value in its range.</li>
          <li><kbd>End</kbd>: Set the slider to the last allowed value in its range.</li>
          <li><kbd>Page Up</kbd> (Optional): Increase the slider value by an amount larger than the step change made by <kbd>Up Arrow</kbd>.</li>
          <li><kbd>Page Down</kbd> (Optional): Decrease the slider value by an amount larger than the step change made by <kbd>Down Arrow</kbd>.</li>
        </ul>
        <div class="note" role="note" id="issue-container-generatedID-23"><div role="heading" class="note-title marker" id="h-note-22" aria-level="5"><span>Note</span></div><ol class="">
          <li>Focus is placed on the slider (the visual object that the mouse user would move, also known as the thumb.</li>
          <li>In some circumstances, reversing the direction of the value change for the keys specified above, e.g., having <kbd>Up Arrow</kbd> decrease the value, could create a more intuitive experience.</li>
        </ol></div>
      </section>
      <section id="slider_roles_states_props" class="notoc">
        <h2 id="wai-aria-roles-states-and-properties-17" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2>
        <ul>
          <li>The element serving as the focusable slider control has role <a class="role-reference" href="https://w3c.github.io/aria/#slider">slider</a>.</li>
          <li>The slider element has the <a class="property-reference" href="https://w3c.github.io/aria/#aria-valuenow">aria-valuenow</a> property set to a decimal value representing the current value of the slider.</li>
          <li>The slider element has the <a class="property-reference" href="https://w3c.github.io/aria/#aria-valuemin">aria-valuemin</a> property set to a decimal value representing the minimum allowed value of the slider.</li>
          <li>The slider element has the <a class="property-reference" href="https://w3c.github.io/aria/#aria-valuemax">aria-valuemax</a> property set to a decimal value representing the maximum allowed value of the slider.</li>
          <li>
          If the value of <code>aria-valuenow</code> is not user-friendly, e.g., the day of the week is represented by a number, the
          <a class="property-reference" href="https://w3c.github.io/aria/#aria-valuetext">aria-valuetext</a>
          property is set to a string that makes the slider value understandable, e.g., "Monday".
          </li>
          <li>
            If the slider has a visible label, it is referenced by
            <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a> on the slider element.
            Otherwise, the slider element has a label provided by
            <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a>.
          </li>
          <li>
            If the slider is vertically oriented, it has <a class="property-reference" href="https://w3c.github.io/aria/#aria-orientation">aria-orientation</a> set to <code>vertical</code>.
            The default value of <code>aria-orientation</code> for a slider is <code>horizontal</code>.
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
