---
# This is a generated file
title: "Practices"
ref: /ARIA/APG/practices/

github:
  repository: w3c/aria-practices
  branch: main
  path: aria-practices.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/APG/practices/

sidebar: false

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

<div>

        {% include read-this-first.html %}
        <ul class="tiles">
          
                <li class="tile tile-landmark-regions">
                  <h2 class="tile-name">
                    <a 
                      href="{{ '/ARIA/APG/practices/landmark-regions/' | relative_url }}"
                    >
                      <span>Landmark Regions</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
      ARIA landmark roles provide a powerful way to identify the organization and structure of a web page.</div>
                </li>
               
                <li class="tile tile-names-and-descriptions">
                  <h2 class="tile-name">
                    <a 
                      href="{{ '/ARIA/APG/practices/names-and-descriptions/' | relative_url }}"
                    >
                      <span>Providing Accessible Names and Descriptions</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
      Providing elements with accessible names, and where appropriate, accessible descriptions is one of the most important responsibilities authors have when developing accessible web experiences.</div>
                </li>
               
                <li class="tile tile-keyboard-interface">
                  <h2 class="tile-name">
                    <a 
                      href="{{ '/ARIA/APG/practices/keyboard-interface/' | relative_url }}"
                    >
                      <span>Developing a Keyboard Interface</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
      Unlike native HTML form elements, browsers do not provide keyboard support for graphical user interface (GUI) components that are made accessible with ARIA; authors have to provide the keyboard support in their code.</div>
                </li>
               
                <li class="tile tile-grid-and-table-properties">
                  <h2 class="tile-name">
                    <a 
                      href="{{ '/ARIA/APG/practices/grid-and-table-properties/' | relative_url }}"
                    >
                      <span>Grid and Table Properties</span>
                    </a>
                  </h2>
                  <div class="tile-introduction"><!-- The following is manually overridden by the pre-build script -->
To fully present and describe a grid or table, in addition to parsing the headers, rows, and cells using the roles described in the grid pattern or table pattern, assistive technologies need to be able to determine the number of rows and columns and other factors.</div>
                </li>
               
                <li class="tile tile-range-related-properties">
                  <h2 class="tile-name">
                    <a 
                      href="{{ '/ARIA/APG/practices/range-related-properties/' | relative_url }}"
                    >
                      <span>Communicating Value and Limits for Range Widgets</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
      ARIA defines the following roles as range widgets, which means they communicate a value that is typically numeric and constrained to defined limits.</div>
                </li>
               
                <li class="tile tile-structural-roles">
                  <h2 class="tile-name">
                    <a 
                      href="{{ '/ARIA/APG/practices/structural-roles/' | relative_url }}"
                    >
                      <span>Structural Roles</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
      ARIA provides a set of roles that convey the accessibility semantics of structures on a page.</div>
                </li>
               
                <li class="tile tile-hiding-semantics">
                  <h2 class="tile-name">
                    <a 
                      href="{{ '/ARIA/APG/practices/hiding-semantics/' | relative_url }}"
                    >
                      <span>Hiding Semantics</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
      While ARIA is primarily used to express semantics, there are some situations where hiding an
      element’s semantics from assistive technologies is helpful.</div>
                </li>
              
        </ul>
      
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
