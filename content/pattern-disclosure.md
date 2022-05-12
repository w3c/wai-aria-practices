---
# This is a generated file
title: "Disclosure (Show/Hide)"
ref: /ARIA/APG/patterns/disclosure/

github:
  repository: w3c/aria-practices
  branch: main
  path: aria-practices.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/APG/patterns/disclosure/

sidebar: true

footer: ""

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
  href="{{ '/ARIA/APG/example-index/css/github.css' | relative_url }}"
>

<script>
const addBodyClass = "pattern-page";
const enableSidebar = true;
if (addBodyClass) document.body.classList.add(addBodyClass);
if (enableSidebar) document.body.classList.add('has-sidebar');
</script>
    
<div>
<section class="widget" id="disclosure"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2><div class="header-wrapper"></div>
      
      <p>
        A disclosure is a widget that enables content to be either collapsed (hidden) or expanded (visible).
        It has two elements: a disclosure <a href="{{ '/ARIA/APG/patterns/button/' | relative_url }}">button</a> and a section of content whose visibility is controlled by the button.
        When the controlled content is hidden, the button is often styled as a typical push button with a right-pointing arrow or triangle to hint that activating the button will display additional content.
        When the content is visible, the arrow or triangle typically points down.
      </p>

      <section class="notoc examples-section"><img alt="" 
            src="{{ '/content-images/wai-aria-practices/img/disclosure.svg' | relative_url }}"
          ><div class="header-wrapper"><h2 id="examples-4" tabindex="-1">Examples</h2></div>
        
        <ul>
          <li><a href="../../example-index/disclosure/disclosure-image-description.html">Disclosure (Show/Hide) of Image Description</a></li>
          <li><a href="../../example-index/disclosure/disclosure-faq.html">Disclosure (Show/Hide) of Answers to Frequently Asked Questions</a></li>
          <li><a href="../../example-index/disclosure/disclosure-navigation.html">Disclosure (Show/Hide) Navigation Menu</a></li>
          <li><a href="../../example-index/disclosure/disclosure-navigation-hybrid.html">Disclosure (Show/Hide) Navigation Menu with Top-Level Links</a></li>
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
<script 
  src="{{ '/content-assets/wai-aria-practices/skipto.min.js' | relative_url }}"
></script>
