---
# This is a generated file
title: "Table"
ref: /ARIA/apg/patterns/table/

github:
  repository: w3c/aria-practices
  branch: main
  path: aria-practices.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/patterns/table/

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
    const parentPages = ['patterns', 'practices', 'example-index'];
    const parentIndexPage = window.location.pathname.includes('.html') ? 'example-index' : window.location.pathname.match('([^/]+)/([^/]+)/$')[1];
    const parentHref = 'a[href*="' + parentIndexPage + '"]'
    if (parentPages.includes(parentIndexPage)) {
      document.querySelector(parentHref).classList.add('active');
    }
  </script>
<div>
<section class="widget" id="table"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2><div class="header-wrapper"></div>
      
      <p>
        Like an HTML <code>table</code> element, a <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> <a href="https://w3c.github.io/aria/#table" class="role-reference">table</a> is a static tabular structure containing one or more rows that each contain one or more cells; it is not an interactive widget.
        Thus, its cells are not focusable or selectable.
        The <a href="{{ '/ARIA/apg/patterns/grid/' | relative_url }}">grid pattern</a> is used to make an interactive widget that has a tabular structure.
      </p>
      <p>
        However, tables are often used to present a combination of information and interactive widgets.
        Since a table is not a widget, each widget contained in a table is a separate stop in the page tab sequence.
        If the number of widgets is large, replacing the table with a grid can dramatically reduce the length of the page tab sequence because a grid is a composite widget that can contain other widgets.
      </p>
      <div class="note" role="note" id="issue-container-generatedID-26"><div role="heading" class="note-title marker" id="h-note-24" aria-level="4"><span>Note</span></div><p class="">
        As with other <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> roles that have a native host language equivalent,
        authors are strongly encouraged to use a native HTML <code>table</code> element whenever possible.
        This is especially important with role <code>table</code> because it is a new feature of <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> 1.1.
        It is thus advisable to test implementations thoroughly with each browser and assistive technology combination that could be used by the target audience.
      </p></div>
      <section class="notoc examples-section"><img alt="" 
            src="{{ '/content-images/wai-aria-practices/img/table.svg' | relative_url }}"
          ><div class="header-wrapper"><h2 id="examples-13" tabindex="-1">Examples</h2></div>
        
        <ul>
          <li><a href="../../example-index/table/table.html">Table Example</a>: ARIA table made using HTML <code>div</code> and <code>span</code> elements.</li>
          <li><a href="../../example-index/table/sortable-table.html">Sortable Table Example</a>: Basic HTML table that illustrates implementation of <code>aria-sort</code> in the headers of sortable columns.</li>
        </ul>
      </section>
      <section class="notoc"><div class="header-wrapper"><h2 id="keyboard-interaction-20" tabindex="-1">Keyboard Interaction</h2></div>
        
        <p>Not applicable.</p>
      </section>
      <section id="table_roles_states_props" class="notoc"><div class="header-wrapper"><h2 id="wai-aria-roles-states-and-properties-21" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2></div>
        
        <ul>
          <li>The table container has role <a href="https://w3c.github.io/aria/#table" class="role-reference">table</a>. </li>
          <li>Each row container has role <a href="https://w3c.github.io/aria/#row" class="role-reference">row</a> and is either a DOM descendant of or owned by the <code>table</code> element or an element with role <a href="https://w3c.github.io/aria/#rowgroup" class="role-reference">rowgroup</a>. </li>
          <li>Each cell is either a DOM descendant of or owned by a <code>row</code> element and has one of the following roles:
            <ul>
              <li><a href="https://w3c.github.io/aria/#columnheader" class="role-reference">columnheader</a> if the cell contains a title or header information for the column.</li>
              <li><a href="https://w3c.github.io/aria/#rowheader" class="role-reference">rowheader</a> if the cell contains title or header information for the row.</li>
              <li><a href="https://w3c.github.io/aria/#cell" class="role-reference">cell</a> if the cell does not contain column or row header information.</li>
            </ul>
          </li>
          <li>
            If there is an element in the user interface that serves as a label for the table, <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a> is set on the table element with a value that refers to the labelling element.
            Otherwise, a label is specified for the table element using <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a>.
          </li>
          <li>If the table has a caption or description, <a href="https://w3c.github.io/aria/#aria-describedby" class="property-reference">aria-describedby</a> is set on the table element with a value referring to the element containing the description.</li>
          <li>If the table contains sortable columns or rows, <a href="https://w3c.github.io/aria/#aria-sort" class="property-reference">aria-sort</a> is set to an appropriate value on the header cell element for the sorted column or row as described in the section on <a href="{{ '/ARIA/apg/practices/grid-and-table-properties/' | relative_url }}">grid and table properties</a>. </li>
          <li>
            If there are conditions where some rows or columns are hidden or not present in the DOM, e.g., there are widgets on the page for hiding rows or columns, the following properties are applied as described in the section on <a href="{{ '/ARIA/apg/practices/grid-and-table-properties/' | relative_url }}">grid and table properties</a>.
            <ul>
              <li><a href="https://w3c.github.io/aria/#aria-colcount" class="property-reference">aria-colcount</a> or <a href="https://w3c.github.io/aria/#aria-rowcount" class="property-reference">aria-rowcount</a> is set to the total number of columns or rows, respectively. </li>
              <li><a href="https://w3c.github.io/aria/#aria-colindex" class="property-reference">aria-colindex</a> or <a href="https://w3c.github.io/aria/#aria-rowindex" class="property-reference">aria-rowindex</a> is set to the position of a cell within a row or column, respectively. </li>
            </ul>
          </li>
          <li>If the table includes cells that span multiple rows or multiple columns, then <a href="https://w3c.github.io/aria/#aria-rowspan" class="property-reference">aria-rowspan</a> or <a href="https://w3c.github.io/aria/#aria-colspan" class="property-reference">aria-colspan</a> is applied as described in <a href="{{ '/ARIA/apg/practices/grid-and-table-properties/' | relative_url }}">grid and table properties</a>.</li>
        </ul>
        <div class="note" role="note" id="issue-container-generatedID-27"><div role="heading" class="note-title marker" id="h-note-25" aria-level="5"><span>Note</span></div><p class="">
          If rows or cells are included in a table via <a href="https://w3c.github.io/aria/#aria-owns" class="property-reference">aria-owns</a>,
          they will be presented to assistive technologies after the DOM descendants of the <code>table</code> element unless the DOM descendants are also included in the <code>aria-owns</code> attribute.
        </p></div>
      </section>
    </section>
</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/jumpto.js' | relative_url }}"
></script>
