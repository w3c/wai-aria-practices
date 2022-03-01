---
# This is a generated file
title: "Disclosure (Show/Hide)"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /patterns/disclosure/

lang: en
last_updated: 2022-03-01
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
                    <a href="#examples-4">Examples</a>
                  </li>
                 
                  <li>
                    <a href="#keyboard-interaction-8">Keyboard Interaction</a>
                  </li>
                 
                  <li>
                    <a href="#wai-aria-roles-states-and-properties-8">WAI-ARIA Roles, States, and Properties</a>
                  </li>
                
            </ul>
          </aside>
          <div class="sidebar-right">
            <section class="widget" id="disclosure"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2><div class="header-wrapper"></div>
      
      <p>
        A disclosure is a widget that enables content to be either collapsed (hidden) or expanded (visible).
        It has two elements: a disclosure <a href="/patterns/button/">button</a> and a section of content whose visibility is controlled by the button.
        When the controlled content is hidden, the button is often styled as a typical push button with a right-pointing arrow or triangle to hint that activating the button will display additional content.
        When the content is visible, the arrow or triangle typically points down.
      </p>

      <section class="notoc examples-section"><img alt="" src="/assets/img/disclosure.svg" ><div class="header-wrapper"><h2 id="examples-4" tabindex="-1">Examples</h2></div>
        
        <ul>
          <li><a href="../../index/disclosure/disclosure-image-description.html">Disclosure (Show/Hide) of Image Description</a></li>
          <li><a href="../../index/disclosure/disclosure-faq.html">Disclosure (Show/Hide) of Answers to Frequently Asked Questions</a></li>
          <li><a href="../../index/disclosure/disclosure-navigation.html">Disclosure (Show/Hide) Navigation Menu</a></li>
          <li><a href="../../index/disclosure/disclosure-navigation-hybrid.html">Disclosure (Show/Hide) Navigation Menu with Top-Level Links</a></li>
        </ul>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="keyboard-interaction-8" tabindex="-1">Keyboard Interaction</h2></div>
        
        <p>When the disclosure control has focus:</p>
        <ul>
          <li><kbd>Enter</kbd>: activates the disclosure control and toggles the visibility of the disclosure content.</li>
          <li><kbd>Space</kbd>: activates the disclosure control and toggles the visibility of the disclosure content.</li>
        </ul>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="wai-aria-roles-states-and-properties-8" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2></div>
        
        <ul>
          <li>The element that shows and hides the content has role <a href="https://w3c.github.io/aria/#button" class="role-reference">button</a>.</li>
          <li>
            When the content is visible, the element with role <code>button</code> has
            <a href="https://w3c.github.io/aria/#aria-expanded" class="state-reference">aria-expanded</a>
            set to <code>true</code>.
            When the content area is hidden, it is set to <code>false</code>.
          </li>
          <li>
            Optionally, the element with role <code>button</code> has a value specified for
            <a href="https://w3c.github.io/aria/#aria-controls" class="property-reference">aria-controls</a>
            that refers to the element that contains all the content that is shown or hidden.
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
