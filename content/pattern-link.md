---
# This is a generated file
title: "Link"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /patterns/link/

lang: en
last_updated: 2021-12-07
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
                    <a href="#examples-6">Examples</a>
                  </li>
                 
                  <li>
                    <a href="#keyboard-interaction-10">Keyboard Interaction</a>
                  </li>
                 
                  <li>
                    <a href="#wai-aria-roles-states-and-properties-11">WAI-ARIA Roles, States, and Properties</a>
                  </li>
                
            </ul>
          </aside>
          <div class="sidebar-right">
            <section class="widget" id="link"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2>
      
      <p>
        A <a href="https://w3c.github.io/aria/#link" class="role-reference">link</a> widget provides an interactive reference to a resource.
        The target resource can be either external or local, i.e., either outside or within the current page or application.
       </p>
      <div class="note" role="note" id="issue-container-generatedID-14"><div role="heading" class="note-title marker" id="h-note-14" aria-level="4"><span>Note</span></div><p class="">
        Authors are strongly encouraged to use a native host language link element, such as an HTML
        <code>&lt;A&gt;</code> element with an <code>href</code> attribute. As with other <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr>
        widget roles, applying the link role to an element will not cause browsers to enhance the
        element with standard link behaviors, such as navigation to the link target or context menu
        actions.
        When using the <code>link</code> role, providing these features of the element is the author's responsibility.
      </p></div>

      <section class="notoc examples-section"><img alt="" src="/assets/img/link.svg" >
        <h2 id="examples-6" tabindex="-1">Examples</h2>
        <p><a href="../../index/link/link.html">Link Examples</a>: Link widgets constructed from HTML <code>span</code> and <code>img</code> elements.</p>
      </section>

      <section class="notoc">
        <h2 id="keyboard-interaction-10" tabindex="-1">Keyboard Interaction</h2>
        <ul>
          <li><kbd>Enter</kbd>: Executes the link and moves focus to the link target.</li>
          <li><kbd>Shift + F10</kbd> (Optional): Opens a context menu for the link.</li>
        </ul>
      </section>

      <section class="notoc">
        <h2 id="wai-aria-roles-states-and-properties-11" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2>
        <p>
            The element containing the link text or graphic has role of <a href="https://w3c.github.io/aria/#link" class="role-reference">link</a>.
        </p>
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
