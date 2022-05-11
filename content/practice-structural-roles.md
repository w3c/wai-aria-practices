---
# This is a generated file
title: "Structural Roles"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
feedbackmail: public-aria-practices@w3.org
permalink: /practices/structural-roles/

footer: ""

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---


<link rel="stylesheet" href="{{ site.baseurl }}/assets/styles.css">
<!-- Code highlighting styles -->
<link rel="stylesheet" href="{{ site.baseurl }}/index/css/github.css">

<script>
const addBodyClass = "practice-page";
if (addBodyClass) {
  document.body.classList.add(addBodyClass);
}
</script>
    
<div>

        <div class="sidebar-container">
          <nav class="sidebar-right">
            <h2 class="sidebar-headline">Page Contents</h2>
            <ul class="sidebar-list">
              
                  <li>
                    <a href="#introduction">Introduction</a>
                  </li>
                 
                  <li>
                    <a href="#all-structural-roles">All Structural Roles</a>
                  </li>
                
            </ul>
          </nav>
          <div class="sidebar-left">
            
          <h2 id="introduction">Introduction</h2>
          <section id="structural_roles"><div class="header-wrapper"></div>
    
    <p>
      ARIA provides a set of roles that convey the accessibility semantics of structures on a page.
      These roles express the meaning that is conveyed by the layout and appearance of elements that organize and structure content, such as headings, lists, and tables.
    </p>
    <p>
      some host languages, such as HTML, include elements that express the same semantics as an ARIA role.
      For instance, the HTML <code>&lt;p&gt;</code> element is mapped to accessibility APIs in exactly the same way as <code>&lt;div role="paragraph"&gt;</code>.
      The ARIA and HTML specifications refer to this mapping of HTML elements to ARIA attributes as implied semantics, i.e., the implied ARIA role of the HTML <code>&lt;p&gt;</code> element is <code>paragraph</code>.
    </p>
    <p>
      When developing HTML, it is important to use native HTML elements where ever possible.
      Do not use an ARIA role or property if it is possible to use an HTML element that has equivalent semantics.
      Circumstances where it is appropriate to use ARIA attributes instead of equivalent HTML are:
    </p>
    <ol>
      <li>When the HTML element cannot be styled in a way that meets visual design requirements.</li>
      <li>When testing reveals that browsers or assistive technologies provide better support for the ARIA equivalent.</li>
      <li>When remediating or retrofitting legacy content and altering the underlying DOM to use the HTML would be cost prohibitive.</li>
      <li>When building a web component to compose a <a href="https://html.spec.whatwg.org/multipage/#custom-elements">custom element</a> and the element being extended  does not convey the appropriate or sufficient accessibility semantics.</li>
    </ol>
    <p>The following table lists all structural roles defined in ARIA 1.2.</p>
    <h2 id="all-structural-roles">All Structural Roles</h2><div class="table-wrap"><table class="widget-features">
      <caption>ARIA structural roles</caption>
      <thead>
        <tr>
          <th>ARIA Role</th>
          <th>HTML Equivalent</th>
        </tr>
      </thead>
      <tbody>
        <tr><th>application</th><td>No equivalent element</td></tr>
        <tr><th>article</th><td>article</td></tr>
        <tr><th>blockquote</th><td>blockquote</td></tr>
        <tr><th>caption</th><td>caption</td></tr>
        <tr><th>cell</th><td>td</td></tr>
        <tr><th>code</th><td>code</td></tr>
        <tr><th>columnheader</th><td>th</td></tr>
        <tr><th>definition</th><td>dd</td></tr>
        <tr><th>deletion</th><td>del</td></tr>
        <tr><th>directory</th><td>No equivalent element</td></tr>
        <tr><th>document</th><td>No equivalent element</td></tr>
        <tr><th>emphasis</th><td>em</td></tr>
        <tr><th>feed</th><td>No equivalent element</td></tr>
        <tr><th>figure</th><td>figure</td></tr>
        <tr><th>generic</th><td>div, span</td></tr>
        <tr><th>group</th><td>No equivalent element</td></tr>
        <tr><th>heading with aria-level="N" where N is 1, 2, 3, 4, 5, or 6</th><td>h1, h2, h3, h4, h5, h6</td></tr>
        <tr><th>insertion</th><td>ins</td></tr>
        <tr><th>img</th><td>img</td></tr>
        <tr><th>list</th><td>ul, ol</td></tr>
        <tr><th>listitem</th><td>li</td></tr>
        <tr><th>math</th><td>No equivalent element</td></tr>
        <tr><th>none</th><td>No equivalent element</td></tr>
        <tr><th>note</th><td>No equivalent element</td></tr>
        <tr><th>presentation</th><td>No equivalent element</td></tr>
        <tr><th>paragraph</th><td>p</td></tr>
        <tr><th>row</th><td>tr</td></tr>
        <tr><th>rowgroup</th><td>tbody, thead, tfoot</td></tr>
        <tr><th>rowheader</th><td>th</td></tr>
        <tr><th>separator (when not focusable)</th><td>hr</td></tr>
        <tr><th>strong</th><td>strong</td></tr>
        <tr><th>subscript</th><td>sub</td></tr>
        <tr><th>superscript</th><td>sup</td></tr>
        <tr><th>table</th><td>table</td></tr>
        <tr><th>term</th><td>dfn</td></tr>
        <tr><th>time</th><td>time</td></tr>
        <tr><th>toolbar</th><td>No equivalent element</td></tr>
        <tr><th>tooltip</th><td>No equivalent element</td></tr>
      </tbody>
    </table></div>
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
<script src="{{ site.baseurl }}/assets/skipto.min.js"></script>
