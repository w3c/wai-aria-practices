---
# This is a generated file
title: "Tooltip Widget"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /patterns/tooltip/

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
                    <a href="#example-8">Example</a>
                  </li>
                 
                  <li>
                    <a href="#keyboard-interaction-23">Keyboard Interaction</a>
                  </li>
                 
                  <li>
                    <a href="#wai-aria-roles-states-and-properties-24">WAI-ARIA Roles, States, and Properties</a>
                  </li>
                
            </ul>
          </aside>
          <div class="sidebar-right">
            <section class="widget" id="tooltip"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2>
      
      <p>
        <strong>NOTE:</strong> This design pattern is work in progress; it does not yet have task force consensus.
        Progress and discussions are captured in
        <a href="https://github.com/w3c/aria-practices/issues/128">issue 128.</a>
      </p>
      <p>
        A tooltip is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
        It typically appears after a small delay and disappears when <kbd>Escape</kbd> is pressed or on mouse out.
      </p>
      <p>
        Tooltip widgets do not receive focus.
        A hover that contains focusable elements can be made using a non-modal dialog.
      </p>
      <section class="notoc examples-section"><img alt="" src="/assets/img/tooltip.svg" >
        <h2 id="example-8" tabindex="-1">Example</h2>
        <p>
          Work to develop a tooltip example is tracked by
          <a href="https://github.com/w3c/aria-practices/issues/127">issue 127.</a>
        </p>
      </section>
      <section class="notoc">
        <h2 id="keyboard-interaction-23" tabindex="-1">Keyboard Interaction</h2>
        <p><kbd>Escape</kbd>: Dismisses the Tooltip.</p>
        <div class="note" role="note" id="issue-container-generatedID-30"><div role="heading" class="note-title marker" id="h-note-28" aria-level="5"><span>Note</span></div><ol class="">
          <li>Focus stays on the triggering element while the tooltip is displayed.</li>
          <li>
            If the tooltip is invoked when the trigger element   receives focus, then it is dismissed when it no longer has focus (onBlur).
            If   the tooltip is invoked with mouseIn, then it is dismissed with on mouseOut.
          </li>
        </ol></div>
      </section>
      <section class="notoc">
        <h2 id="wai-aria-roles-states-and-properties-24" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2>
        <ul>
          <li>The element that serves as the tooltip container has role <a href="https://w3c.github.io/aria/#tooltip" class="role-reference">tooltip</a>.</li>
          <li>The element that triggers the tooltip references the tooltip element with <a href="https://w3c.github.io/aria/#aria-describedby" class="property-reference">aria-describedby</a>.</li>
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
