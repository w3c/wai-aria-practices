---
# This is a generated file
title: "Menu Button"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /patterns/menubutton/

lang: en
last_updated: 2022-02-15
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
                    <a href="#examples-9">Examples</a>
                  </li>
                 
                  <li>
                    <a href="#keyboard-interaction-13">Keyboard Interaction</a>
                  </li>
                 
                  <li>
                    <a href="#wai-aria-roles-states-and-properties-14">WAI-ARIA Roles, States, and Properties</a>
                  </li>
                
            </ul>
          </aside>
          <div class="sidebar-right">
            <section class="widget" id="menubutton"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2><div class="header-wrapper"></div>
      <p>A menu button is a <a href="/patterns/button/">button</a> that opens a <a href="/patterns/menu/">menu</a>. It is often styled as a typical push button with a downward pointing arrow or triangle to hint that activating the button will display a menu.</p>

      <section class="notoc examples-section"><img alt="" src="/assets/img/menubutton.svg" ><div class="header-wrapper"><h2 id="examples-9" tabindex="-1">Examples</h2></div>
        
        <ul>
          <li><a href="../../index/menu-button/menu-button-links.html">Navigation Menu Button</a>: A menu button made from an HTML <code>a</code> element that opens a menu of items that behave as links.</li>
          <li><a href="../../index/menu-button/menu-button-actions.html">Action Menu Button Example Using element.focus()</a>: A menu button made from an HTML <code>button</code> element that opens a menu of actions or commands where focus in the menu is managed using <code>element.focus()</code>.</li>
          <li><a href="../../index/menu-button/menu-button-actions-active-descendant.html">Action Menu Button Example Using aria-activedescendant</a>: A button that opens a menu of actions or commands where focus in the menu is managed using aria-activedescendant.</li>
        </ul>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="keyboard-interaction-13" tabindex="-1">Keyboard Interaction</h2></div>
        
        <ul>
          <li>With focus on the button:
            <ul>
              <li><kbd>Enter</kbd>: opens the menu and places focus on the first menu item.</li>
              <li><kbd>Space</kbd>: Opens the menu and places focus on the first menu item.</li>
              <li>(Optional) <kbd>Down Arrow</kbd>: opens the menu and moves focus to the first menu item.</li>
              <li>(Optional) <kbd>Up Arrow</kbd>: opens the menu and moves focus to the last menu item.</li>
            </ul>
          </li>
          <li>The keyboard behaviors needed after the menu is open are described in <a href="/patterns/menu/" class="sec-ref">Menu or Menu bar</a>.</li>
        </ul>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="wai-aria-roles-states-and-properties-14" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2></div>
        
        <ul>
          <li>The element that opens the menu has role <a href="https://w3c.github.io/aria/#button" class="role-reference">button</a>.</li>
          <li>The element with role <code>button</code> has <a href="https://w3c.github.io/aria/#aria-haspopup" class="property-reference">aria-haspopup</a> set to either <code>menu</code> or <code>true</code>.</li>
          <li>
            When the menu is displayed, the element with role <code>button</code> has
            <a href="https://w3c.github.io/aria/#aria-expanded" class="state-reference">aria-expanded</a>
            set to <code>true</code>.
            When the menu is hidden, it is recommended that <code>aria-expanded</code> is not present.
            If <code>aria-expanded</code> is specified when the menu is hidden, it is set to <code>false</code>.
          </li>
          <li>
            The element that contains the menu items displayed by activating the button has role
            <a href="https://w3c.github.io/aria/#menu" class="role-reference">menu</a>.
          </li>
          <li>
            Optionally, the element with role <code>button</code> has a value specified for
            <a href="https://w3c.github.io/aria/#aria-controls" class="property-reference">aria-controls</a>
            that refers to the element with role <code>menu</code>.
            </li>
            <li>Additional roles, states, and properties needed for the menu element are described in <a href="/patterns/menu/" class="sec-ref">Menu or Menu bar</a>.</li>
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
