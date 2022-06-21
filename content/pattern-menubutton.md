---
# This is a generated file
title: "Menu Button"
ref: /ARIA/apg/patterns/menubutton/

github:
  repository: w3c/aria-practices
  branch: main
  path: aria-practices.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/patterns/menubutton/

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
    const parentPage = window.location.pathname.match(
      /\/(patterns|practices|example-index)\//
    )?.[1];
    if (parentPage) {
      const parentHref = 'a[href*="' + parentPage + '"]';
      document.querySelector(parentHref).classList.add('active');
    }
  </script>
<div>
<section class="widget" id="menubutton"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2><div class="header-wrapper"></div>
      <p>A menu button is a <a href="{{ '/ARIA/apg/patterns/button/' | relative_url }}">button</a> that opens a <a href="{{ '/ARIA/apg/patterns/menu/' | relative_url }}">menu</a>. It is often styled as a typical push button with a downward pointing arrow or triangle to hint that activating the button will display a menu.</p>

      <section class="notoc examples-section"><img alt="" 
            src="{{ '/content-images/wai-aria-practices/img/menubutton.svg' | relative_url }}"
          ><div class="header-wrapper"><h2 id="examples-9" tabindex="-1">Examples</h2></div>
        
        <ul>
          <li><a href="../../example-index/menu-button/menu-button-links.html">Navigation Menu Button</a>: A menu button made from an HTML <code>a</code> element that opens a menu of items that behave as links.</li>
          <li><a href="../../example-index/menu-button/menu-button-actions.html">Action Menu Button Example Using element.focus()</a>: A menu button made from an HTML <code>button</code> element that opens a menu of actions or commands where focus in the menu is managed using <code>element.focus()</code>.</li>
          <li><a href="../../example-index/menu-button/menu-button-actions-active-descendant.html">Action Menu Button Example Using aria-activedescendant</a>: A button that opens a menu of actions or commands where focus in the menu is managed using aria-activedescendant.</li>
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
          <li>The keyboard behaviors needed after the menu is open are described in <a href="{{ '/ARIA/apg/patterns/menu/' | relative_url }}" class="sec-ref">Menu or Menu bar</a>.</li>
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
            <li>Additional roles, states, and properties needed for the menu element are described in <a href="{{ '/ARIA/apg/patterns/menu/' | relative_url }}" class="sec-ref">Menu or Menu bar</a>.</li>
        </ul>
      </section>
    </section>
</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/jumpto.js' | relative_url }}"
></script>
