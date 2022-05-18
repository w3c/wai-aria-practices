---
# This is a generated file
title: "Window Splitter"
ref: /ARIA/apg/patterns/windowsplitter/

github:
  repository: w3c/aria-practices
  branch: main
  path: aria-practices.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/patterns/windowsplitter/

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
    
<div>
<section class="widget" id="windowsplitter"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2><div class="header-wrapper"></div>
      
      <p>
        <strong>NOTE:</strong> ARIA 1.1 introduced changes to the separator role so it behaves as a widget when focusable.
        While this pattern has been revised to match the ARIA 1.1 specification, the task force will not complete its review until a functional example that matches the ARIA 1.1 specification is complete.
        Progress on this pattern is tracked by
        <a href="https://github.com/w3c/aria-practices/issues/129">issue 129.</a>
      </p>
      <p>
        A window splitter is a moveable separator between two sections, or panes, of a window that enables users to change the relative size of the panes.
        A Window Splitter can be either variable or fixed.
        A fixed splitter toggles between two positions whereas a variable splitter can be adjusted to any position within an allowed range.
      </p>
      <p>
        A window splitter has a value that represents the size of one of the panes, which, in this pattern,  is called the primary pane.
        When the splitter has its minimum value, the primary pane has its smallest size and the secondary pane has its largest size.
        The splitter also has an accessible name that matches the name of the primary pane.
      </p>
      <p>
        For example, consider a book reading application with a primary pane for the table of contents and a secondary pane that displays content from a section of the book.
        The two panes are divided by a vertical splitter labelled "Table of Contents".
        When the table of contents pane has its maximum size, the splitter has a value of <code>100</code>,
        and when the table of contents is completely collapsed, the splitter has a value of <code>0</code>.
      </p>
      <p>
        Note that the term "primary pane" does not describe the importance or purpose of content inside the pane.
      </p>
      <section class="notoc examples-section"><img alt="" 
            src="{{ '/content-images/wai-aria-practices/img/windowsplitter.svg' | relative_url }}"
          ><div class="header-wrapper"><h2 id="example-9" tabindex="-1">Example</h2></div>
        
        <p>
          Work to develop an example window splitter widget is tracked by
          <a href="https://github.com/w3c/aria-practices/issues/130">issue 130.</a>
        </p>
      </section>
      <section class="notoc"><div class="header-wrapper"><h2 id="keyboard-interaction-26" tabindex="-1">Keyboard Interaction</h2></div>
        
        <ul>
          <li><kbd>Left Arrow</kbd>: Moves a vertical splitter to the left.</li>
          <li><kbd>Right Arrow</kbd>: Moves a vertical splitter to the right.</li>
          <li><kbd>Up Arrow</kbd>: Moves a horizontal splitter up.</li>
          <li><kbd>Down Arrow</kbd>: Moves a horizontal splitter down.</li>
          <li><kbd>Enter</kbd>: If the primary pane is not collapsed, collapses the pane. If the pane is collapsed, restores the splitter to its previous position.</li>
          <li><kbd>Home</kbd> (Optional): Moves splitter to the position that gives the primary pane its smallest allowed size. This may completely collapse the primary pane.</li>
          <li><kbd>End</kbd> (Optional): Moves splitter to the position that gives the primary pane its largest allowed size. This may completely collapse the secondary pane.</li>
          <li><kbd>F6</kbd> (Optional): Cycle through window   panes.</li>
        </ul>
        <div class="note" role="note" id="issue-container-generatedID-36"><div role="heading" class="note-title marker" id="h-note-34" aria-level="5"><span>Note</span></div><p class="">A fixed size splitter omits implementation of the arrow keys.</p></div>
      </section>
      <section class="notoc"><div class="header-wrapper"><h2 id="wai-aria-roles-states-and-properties-27" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2></div>
        
        <ul>
          <li>The element that serves as the focusable splitter has role <a href="https://w3c.github.io/aria/#separator" class="role-reference">separator</a>.</li>
          <li>The separator element has the <a class="property-reference" href="https://w3c.github.io/aria/#aria-valuenow">aria-valuenow</a> property set to a decimal value representing the current position of the separator.</li>
          <li>The separator element has the <a class="property-reference" href="https://w3c.github.io/aria/#aria-valuemin">aria-valuemin</a> property set to a decimal value that represents the position where the primary pane has its minimum size. This is typically <code>0</code>.</li>
          <li>The separator element has the <a class="property-reference" href="https://w3c.github.io/aria/#aria-valuemax">aria-valuemax</a> property set to a decimal value that represents the position where the primary pane has its maximum size. This is typically <code>100</code>.</li>
          <li>
            If the primary pane has a visible label, it is referenced by
            <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a> on the separator element.
            Otherwise, the separator element has a label provided by
            <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a>.
          </li>
          <li>The separator element has <a href="https://w3c.github.io/aria/#aria-controls" class="property-reference">aria-controls</a> referring to the primary pane.</li>
        </ul>
      </section>
    </section>
</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/jumpto.js' | relative_url }}"
></script>
