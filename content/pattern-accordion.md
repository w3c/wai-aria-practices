---
# This is a generated file
title: "Accordion (Sections With Show/Hide Functionality)"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /patterns/accordion/

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
                    <a href="#example">Example</a>
                  </li>
                 
                  <li>
                    <a href="#keyboard-interaction">Keyboard Interaction</a>
                  </li>
                 
                  <li>
                    <a href="#wai-aria-roles-states-and-properties">WAI-ARIA Roles, States, and Properties</a>
                  </li>
                
            </ul>
          </aside>
          <div class="sidebar-right">
            <section class="widget" id="accordion"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2><div class="header-wrapper"></div>
      
      <p>
        An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content.
        The headings function as controls that enable users to reveal or hide their associated sections of content.
        Accordions are commonly used to reduce the need to scroll when presenting multiple sections of content on a single page.
      </p>
      <p>Terms for understanding accordions include:</p>
      <dl>
        <dt>Accordion Header:</dt>
        <dd>Label for or thumbnail representing a section of content that also serves as a control for showing, and in some implementations, hiding  the section of content. </dd>
        <dt>Accordion Panel:</dt>
        <dd>Section of content associated with an accordion header.</dd>
      </dl>
      <p>
        In some accordions, there are additional elements that are always visible adjacent to the accordion header.
        For instance, a menubutton may accompany each accordion header to provide access to actions that apply to that section.
        And, in some cases, a snippet of the hidden content may also be visually persistent.
      </p>
      <section class="notoc examples-section"><img alt="" src="/assets/img/accordion.svg" ><div class="header-wrapper"><h2 id="example" tabindex="-1">Example</h2></div>
        
        <p><a href="../../index/accordion/accordion.html">Accordion Example</a>: demonstrates a form divided into three sections using an accordion to show one section at a time. </p>
      </section>
      <section class="notoc"><div class="header-wrapper"><h2 id="keyboard-interaction" tabindex="-1">Keyboard Interaction</h2></div>
        
        <ul>
          <li>
            <kbd>Enter</kbd> or <kbd>Space</kbd>:
            <ul>
              <li>
                When focus is on the accordion header for a collapsed panel, expands the associated panel.
                If the implementation allows only one panel to be expanded, and if another panel is expanded, collapses that panel.
              </li>
              <li>
                When focus is on the accordion header for an expanded panel, collapses the panel if the implementation supports collapsing.
                Some implementations require one panel to be expanded at all times and allow only one panel to be expanded; so, they do not support a collapse function.
              </li>
            </ul>
          </li>
          <li><kbd>Tab</kbd>: Moves focus to the next focusable element; all focusable elements in the accordion are included in the page <kbd>Tab</kbd> sequence.</li>
          <li><kbd>Shift + Tab</kbd>: Moves focus to the previous focusable element; all focusable elements in the accordion are included in the page <kbd>Tab</kbd> sequence.</li>
          <li>
            <kbd>Down Arrow</kbd> (Optional): If focus is on an accordion header, moves focus to the next accordion header.
            If focus is on the last accordion header, either does nothing or moves focus to the first accordion header.
          </li>
          <li>
            <kbd>Up Arrow</kbd> (Optional): If focus is on an accordion header, moves focus to the previous accordion header.
            If focus is on the first accordion header, either does nothing or moves focus to the last accordion header.
          </li>
          <li>
            <kbd>Home</kbd> (Optional): When focus is on an accordion header, moves focus to the first accordion header.
          </li>
          <li>
            <kbd>End</kbd> (Optional): When focus is on an accordion header, moves focus to the last accordion header.
          </li>
        </ul>
      </section>
      <section class="notoc"><div class="header-wrapper"><h2 id="wai-aria-roles-states-and-properties" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties:</h2></div>
        
        <ul>
          <li>
            The title of each accordion header is contained in an element with role <a href="https://w3c.github.io/aria/#button" class="role-reference">button</a>.
          </li>
          <li>
            Each accordion header <code>button</code> is wrapped in an element with role <a href="https://w3c.github.io/aria/#heading" class="role-reference">heading</a> that has a value set for <a href="https://w3c.github.io/aria/#aria-level" class="property-reference">aria-level</a> that is appropriate for the information architecture of the page.
            <ul>
              <li>If the native host language has an element with an implicit <code>heading</code> and <code>aria-level</code>, such as an HTML heading tag, a native host language element may be used.</li>
              <li>
                The <code>button</code> element is the only element inside the <code>heading</code> element.
                That is, if there are other visually persistent elements, they are not included inside the <code>heading</code> element.
              </li>
            </ul>
          </li>
          <li>
            If the accordion panel associated with an accordion header is visible, the header <code>button</code> element has <a href="https://w3c.github.io/aria/#aria-expanded" class="state-reference">aria-expanded</a> set to <code>true</code>.
            If the panel is not visible, <a href="https://w3c.github.io/aria/#aria-expanded" class="state-reference">aria-expanded</a> is set to <code>false</code>.
          </li>
          <li>
            The accordion header <code>button</code> element has <a href="https://w3c.github.io/aria/#aria-controls" class="property-reference">aria-controls</a> set to the ID of the element containing the accordion panel content.
          </li>
          <li>
            If the accordion panel associated with an accordion header is visible, and if the accordion does not permit the panel to be collapsed, the header <code>button</code> element has <a href="https://w3c.github.io/aria/#aria-disabled" class="state-reference">aria-disabled</a> set to <code>true</code>.
          </li>
          <li>
            Optionally, each element that serves as a container for panel content has role
            <a href="https://w3c.github.io/aria/#region" class="role-reference">region</a> and
            <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a>
            with a value that refers to the button that controls display of the panel.
            <ul>
              <li>
                Avoid using the <code>region</code> role in circumstances that create landmark region proliferation,
                e.g., in an accordion that contains more than approximately 6 panels that can be expanded at the same time.
              </li>
              <li>
                Role <code>region</code> is especially helpful to the perception of structure by screen reader users when panels contain heading elements or a nested accordion.
              </li>
            </ul>
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
