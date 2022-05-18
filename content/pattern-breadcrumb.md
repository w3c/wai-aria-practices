---
# This is a generated file
title: "Breadcrumb"
ref: /ARIA/apg/patterns/breadcrumb/

github:
  repository: w3c/aria-practices
  branch: main
  path: aria-practices.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/patterns/breadcrumb/

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
  href="{{ '/ARIA/apg/example-index/css/github.css' | relative_url }}"
>

<script>
const addBodyClass = "pattern-page";
const enableSidebar = true;
if (addBodyClass) document.body.classList.add(addBodyClass);
if (enableSidebar) document.body.classList.add('has-sidebar');
</script>
    
<div>
<section class="widget" id="breadcrumb"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2><div class="header-wrapper"></div>
      
      <p>
        A breadcrumb trail consists of a list of links to the parent pages of the current page in hierarchical order.
        It helps users find their place within a website or web application.
        Breadcrumbs are often placed horizontally before a page's main content.
      </p>

      <section class="notoc examples-section"><img alt="" 
            src="{{ '/content-images/wai-aria-practices/img/breadcrumb.svg' | relative_url }}"
          ><div class="header-wrapper"><h2 id="example-2" tabindex="-1">Example</h2></div>
        
        <p><a href="../../example-index/breadcrumb/index.html">Breadcrumb design pattern example</a></p>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="keyboard-interaction-2" tabindex="-1">Keyboard Interaction</h2></div>
        
        <p>Not applicable.</p>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="wai-aria-roles-states-and-properties-2" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2></div>
        
        <ul>
          <li>Breadcrumb trail is contained within a navigation landmark region.</li>
          <li>The landmark region is labelled via <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a> or <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a>.</li>
          <li>
            The link to the current page has <a href="https://w3c.github.io/aria/#aria-current" class="property-reference">aria-current</a> set to <code>page</code>.
            If the element representing the current page is not a link, aria-current is optional.
          </li>
        </ul>
      </section>
    </section>
</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/jumpto.js' | relative_url }}"
></script>
