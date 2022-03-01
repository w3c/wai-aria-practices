---
# This is a generated file
title: "Breadcrumb"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /patterns/breadcrumb/

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
                    <a href="#example-2">Example</a>
                  </li>
                 
                  <li>
                    <a href="#keyboard-interaction-2">Keyboard Interaction</a>
                  </li>
                 
                  <li>
                    <a href="#wai-aria-roles-states-and-properties-2">WAI-ARIA Roles, States, and Properties</a>
                  </li>
                
            </ul>
          </aside>
          <div class="sidebar-right">
            <section class="widget" id="breadcrumb"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2><div class="header-wrapper"></div>
      
      <p>
        A breadcrumb trail consists of a list of links to the parent pages of the current page in hierarchical order.
        It helps users find their place within a website or web application.
        Breadcrumbs are often placed horizontally before a page's main content.
      </p>

      <section class="notoc examples-section"><img alt="" src="/assets/img/breadcrumb.svg" ><div class="header-wrapper"><h2 id="example-2" tabindex="-1">Example</h2></div>
        
        <p><a href="../../index/breadcrumb/index.html">Breadcrumb design pattern example</a></p>
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
