---
# This is a generated file
title: "Link"
ref: /ARIA/apg/patterns/link/

github:
  repository: w3c/aria-practices
  branch: main
  path: aria-practices.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/patterns/link/

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
<section class="widget" id="link"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2><div class="header-wrapper"></div>
      
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

      <section class="notoc examples-section"><img alt="" 
            src="{{ '/content-images/wai-aria-practices/img/link.svg' | relative_url }}"
          ><div class="header-wrapper"><h2 id="examples-6" tabindex="-1">Examples</h2></div>
        
        <p><a href="../../example-index/link/link.html">Link Examples</a>: Link widgets constructed from HTML <code>span</code> and <code>img</code> elements.</p>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="keyboard-interaction-10" tabindex="-1">Keyboard Interaction</h2></div>
        
        <ul>
          <li><kbd>Enter</kbd>: Executes the link and moves focus to the link target.</li>
          <li><kbd>Shift + F10</kbd> (Optional): Opens a context menu for the link.</li>
        </ul>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="wai-aria-roles-states-and-properties-11" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2></div>
        
        <p>
            The element containing the link text or graphic has role of <a href="https://w3c.github.io/aria/#link" class="role-reference">link</a>.
        </p>
      </section>
    </section>
</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/skipto.js' | relative_url }}"
></script>
