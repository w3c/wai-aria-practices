---
# This is a generated file
title: "Switch"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /patterns/switch/

lang: en
last_updated: 2022-02-16
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
                    <a href="#examples-12">Examples</a>
                  </li>
                 
                  <li>
                    <a href="#keyboard-interaction-19">Keyboard Interaction</a>
                  </li>
                 
                  <li>
                    <a href="#wai-aria-roles-states-and-properties-20">WAI-ARIA Roles, States, and Properties</a>
                  </li>
                
            </ul>
          </aside>
          <div class="sidebar-right">
            <section class="widget" id="switch"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2><div class="header-wrapper"></div>
      
      <p>
        A <a href="https://w3c.github.io/aria/#switch" class="role-reference">switch</a> is an input widget that allows users to choose one of two values: <q>on</q> or <q>off</q>.
        Switches are similar to <a href="/patterns/checkbox/">checkboxes</a> and <a href="/patterns/button/">toggle buttons</a>, which can also serve as binary inputs.
        One difference, however, is that switches can only be used for binary input while checkboxes and toggle buttons allow implementations the option of supporting a third middle state.
        Checkboxes can be <q>checked</q> or <q>not checked</q> and can optionally also allow for a <q>partially checked</q> state.
        Toggle buttons can be <q>pressed</q> or <q>not pressed</q> and can optionally allow for a <q>partially pressed</q> state.
      </p>
      <p>
        Since switch, checkbox, and toggle button all offer binary input, they are often functionally interchangeable.
        Choose the role that best matches both the visual design and semantics of the user interface.
        For instance, there are some circumstances where the semantics of <q>on or off</q> would be easier for assistive technology users to understand than the semantics of <q>checked or unchecked</q>, and vice versa.
        Consider a widget for turning lights on or off.
        In this case, screen reader output of <q>Lights switch on</q> is more user friendly than <q>Lights checkbox checked</q>.
        However, if the same input were in a group of inputs labeled <q>Which of the following must be included in your pre-takeoff procedures?</q>, <q>Lights checkbox checked</q> would make more sense.
      </p>
      <p>
        <strong>Important:</strong> it is critical the label on a switch does not change when its state changes.
      </p>

      <section class="notoc examples-section"><img alt="" src="/assets/img/switch.svg" ><div class="header-wrapper"><h2 id="examples-12" tabindex="-1">Examples</h2></div>
        
        <ul>
          <li><a href="../../index/switch/switch.html">Switch Example</a>: A switch based on a <code>div</code> element that turns a notification preference on and off.</li>
          <li><a href="../../index/switch/switch-button.html">Switch Example Using HTML Button</a>: A group of 2 switches based on HTML <code>button</code> elements that turn lights on and off.</li>
          <li><a href="../../index/switch/switch-checkbox.html">Switch Example Using HTML Checkbox Input</a>: A group of 2 switches based on HTML <code>input[type="checkbox"]</code> elements that turn accessibility preferences on and off.</li>
        </ul>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="keyboard-interaction-19" tabindex="-1">Keyboard Interaction</h2></div>
        
        <ul>
          <li><kbd>Space</kbd>: When focus is on the switch, changes the state of the switch.</li>
          <li><kbd>Enter</kbd> (Optional): When focus is on the switch, changes the state of the switch.</li>
        </ul>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="wai-aria-roles-states-and-properties-20" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2></div>
        
        <ul>
          <li>The switch has role <a href="https://w3c.github.io/aria/#switch" class="role-reference">switch</a>.</li>
          <li>
            The switch has an accessible label provided by one of the following:
            <ul>
              <li>Visible text content contained within the element with role <code>switch</code>.</li>
              <li>A visible label referenced by the value of <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a> set on the element with role <code>switch</code>.</li>
              <li><a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a> set on the element with role <code>switch</code>.</li>
            </ul>
          </li>
          <li>When <code>on</code>, the switch element has state <a href="https://w3c.github.io/aria/#aria-checked" class="state-reference">aria-checked</a> set to <code>true</code>.</li>
          <li>When <code>off</code>, the switch element has state <a href="https://w3c.github.io/aria/#aria-checked" class="state-reference">aria-checked</a> set to <code>false</code>.</li>
          <li>If the switch element is an HTML <code>input[type="checkbox"]</code>, it uses the HTML <code>checked</code> attribute instead of the <code>aria-checked</code> property.</li>
          <li>If a set of switches is presented as a logical group with a visible label, either:
            <ul>
              <li>The switches are included in an element with role <a href="https://w3c.github.io/aria/#group" class="role-reference">group</a> that has the property <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a> set to the ID of the element containing the group label.</li>
              <li>The set is contained in an HTML <code>fieldset</code> and the label for the set is contained in an HTML <code>legend</code> element.</li>
            </ul>
          </li>
          <li>If the presentation includes additional descriptive static text relevant to a switch or switch group, the switch or switch group has the property <a href="https://w3c.github.io/aria/#aria-describedby" class="property-reference">aria-describedby</a> set to the ID of the element containing the description.</li>
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
