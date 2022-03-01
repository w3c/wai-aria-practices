---
# This is a generated file
title: "Landmark Regions"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /fundamentals/landmark-regions/

lang: en
last_updated: 2022-03-01
---


<link rel="stylesheet" href="/assets/styles.css">
<!-- Code highlighting styles -->
<link rel="stylesheet" href="/index/css/github.css">

<script>
const addBodyClass = "fundamental-page";
if (addBodyClass) {
  document.body.classList.add(addBodyClass);
}
</script>
    
<div>

        <div class="sidebar-container">
          <aside class="sidebar-left">
            <h2 class="sidebar-headline">Table of Contents</h2>
            <ul class="sidebar-list">
              
                  <li>
                    <a href="#x4-1-html-sectioning-elements">HTML Sectioning Elements</a>
                  </li>
                 
                  <li>
                    <a href="#x4-2-general-principles-of-landmark-design">General Principles of Landmark Design</a>
                  </li>
                 
                  <li>
                    <a href="#x4-3-landmark-roles">Landmark Roles</a>
                  </li>
                
            </ul>
          </aside>
          <div class="sidebar-right">
            <section class="widget" id="aria_landmark"><div class="header-wrapper"><h2 id="x4-landmark-regions">Landmark Regions</h2></div>
    
    <p>
      ARIA landmark roles provide a powerful way to identify the organization and structure of a web page.
      By classifying and labelling sections of a page, they enable structural information that is conveyed visually through layout to be represented programmatically.
      Screen readers exploit landmark roles to provide keyboard navigation to important sections of a page.
      Landmark regions can also be used as targets for "skip links" and by browser extensions to enhanced keyboard navigation.
    </p>
    <p>
      This section explains how HTML sectioning elements and ARIA landmark roles
      are used to make it easy for assistive technology users to understand the meaning of the layout of a page.
    </p>
    <section id="html-sectioning-elements"><div class="header-wrapper"><h3 id="x4-1-html-sectioning-elements">HTML Sectioning Elements</h3></div>
      
      <p>
        Several HTML sectioning elements automatically create ARIA landmark regions.
        So, in order to provide assistive technology users with a logical view of a page,
        it is important to understand the effects of using HTML sectioning elements.
        [<cite><a class="bibref" data-link-type="biblio" href="/about/#bib-html-aria" title="ARIA in HTML">HTML-ARIA</a></cite>] contains more information on HTML element role mapping.
      </p>
      <div class="table-wrap"><table class="widget-features">
        <caption>Default landmark roles for HTML sectioning elements</caption>
        <thead>
          <tr>
            <th>HTML Element</th>

            <th>Default Landmark Role</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td><code>aside</code></td>

            <td><code>complementary</code></td>
          </tr>

          <tr>
            <td><code>footer</code></td>

            <td><code>contentinfo</code> when in context of the <code>body</code> element</td>
          </tr>

          <tr>
            <td><code>header</code></td>

            <td><code>banner</code> when in context of the <code>body</code> element</td>
          </tr>

          <tr>
            <td><code>main</code></td>

            <td><code>main</code></td>
          </tr>

          <tr>
            <td><code>nav</code></td>

            <td><code>navigation</code></td>
          </tr>

          <tr>
            <td><code>section</code></td>

            <td><code>region</code> when it has an accessible name using <code>aria-labelledby</code> or <code>aria-label</code></td>
          </tr>
        </tbody>
      </table></div>
    </section>
    <section id="general-principles-of-landmark-design"><div class="header-wrapper"><h3 id="x4-2-general-principles-of-landmark-design">General Principles of Landmark Design</h3></div>
      
      <p>
        Including <strong>all perceivable content</strong> on a page in one of its landmark regions
        and giving each landmark region a semantically meaningful role
        is one of the most effective ways of ensuring assistive technology users will not overlook information that is relevant to their needs.
      </p>
      <p><strong>Step 1: Identify the logical structure</strong></p>

      <ul>
        <li>Break the page into perceivable areas of content which designers typically indicate visually using alignment and spacing.</li>

        <li>Areas can be further defined into logical sub-areas as needed.</li>

        <li>An example of a sub-area is a portlet in a portal application.</li>
      </ul>

      <p><strong>Step 2: Assign landmark roles to each area</strong></p>

      <ul>
        <li>Assign landmark roles based on the type of content in the area.</li>

        <li><code>banner</code>, <code>main</code>, <code>complementary</code> and <code>contentinfo</code> landmarks should be top level landmarks.</li>

        <li>Landmark roles can be nested to identify parent/child relationships of the information being presented.</li>
      </ul>

      <p id="aria_lh_step3"><strong>Step 3: Label areas</strong></p>

      <ul>
        <li>
          If a specific landmark role is used more than once on a page, provide each instance of that landmark with a unique label.
          There is one rare circumstance where providing the same label to multiple instances of a landmark can be beneficial: the content and purpose of each instance is identical.
          For example, a large search results table has two sets of identical pagination controls -- one above and one below the table, so each set is in a navigation region labelled <q>Search Results</q>.
          In this case, adding extra information to the label that distinguishes the two instances may be more distracting than helpful.
        </li>

        <li>If a landmark is only used once on the page it may not require a label. See Landmark Roles section below. </li>

        <li>If an area begins with a heading element (e.g. <code>h1-h6</code>) it can be used as the label for the area using the <code>aria-labelledby</code> attribute.</li>

        <li>If an area requires a label and does not have a heading element, provide a label using the <code>aria-label</code> attribute.</li>

        <li>
          Do not use the landmark role as part of the label.
          For example, a navigation landmark with a label "Site Navigation" will be announced by a screen reader as "Site Navigation Navigation".
          The label should simply be "Site".
        </li>
      </ul>
    </section>

    <section id="landmark-roles"><div class="header-wrapper"><h3 id="x4-3-landmark-roles">Landmark Roles</h3></div>
      

      <section class="widget" id="aria_lh_banner"><div class="header-wrapper"><h4 class="widget-name" id="x4-3-1-banner">Banner</h4></div>
        

        <p>
          A <a class="role-reference" href="https://w3c.github.io/aria/#banner"><code>banner</code></a> landmark identifies site-oriented content at the beginning of each page within a website. Site-oriented content typically includes things such as the logo or identity
          of the site sponsor, and site-specific search tool. A banner usually appears at the top of the page and typically spans the full width.
        </p>

        <ul>
          <li>Each page may have one <code>banner</code> landmark.</li>

          <li>The <code>banner</code> landmark should be a top-level landmark.</li>

          <li>When a page contains nested <code>document</code> and/or <code>application</code> roles (e.g. typically through the use of <code>iframe</code> and <code>frame</code> elements), each <code>document</code> or <code>application</code> role may have
            one <code>banner</code> landmark.</li>

          <li>If a page includes more than one <code>banner</code> landmark, each should have a unique label (see <a href="/fundamentals/landmark-regions/#aria_lh_step3">Step 3</a> above).</li>
        </ul>

        <section class="notoc"><div class="header-wrapper"><h5 id="html-techniques">HTML Techniques</h5></div>
          
          <ul>
            <li>The HTML <code>header</code> element defines a <code>banner</code> landmark when its context is the <code>body</code> element.</li>

            <li>
              The HTML <code>header</code> element is not considered a <code>banner</code> landmark when it is descendant of any of following elements (see <a href="https://w3c.github.io/html-aam/" class="html-mapping">HTML Accessibility Mappings</a> [<cite><a class="bibref" data-link-type="biblio" href="/about/#bib-html-aam" title="HTML Accessibility API Mappings 1.0">HTML-AAM</a></cite>]):
              <ul>
                <li><code>article</code></li>
                <li><code>aside</code></li>
                <li><code>main</code></li>
                <li><code>nav</code></li>
                <li><code>section</code></li>
              </ul>
            </li>
          </ul>

          <section><div class="header-wrapper"><h6 id="aria-techniques">ARIA Techniques</h6></div>

          <p>If the HTML <code>header</code> element technique is not being used, a <code>role="banner"</code> attribute should be used to define a <code>banner</code> landmark.</p>
        </section></section>

        <section class="notoc"><div class="header-wrapper"><h5 id="examples-17">Examples</h5></div>
          

          <p><a href="../../index/landmarks/banner.html">Banner Landmark Example</a></p>
        </section>

      </section>

      <section id="aria_lh_complementary"><div class="header-wrapper"><h4 class="widget-name" id="x4-3-2-complementary">Complementary</h4></div>
        

        <p>A <a class="role-reference" href="https://w3c.github.io/aria/#complementary"><code>complementary</code></a> landmark is a supporting section of the document, designed to be complementary to the main content at a similar level in the DOM hierarchy, but remains meaningful
          when separated from the main content.</p>

        <ul>
          <li><code>complementary</code> landmarks should be top level landmarks (e.g. not contained within any other landmarks).</li>

          <li>If the complementary content is not related to the main content, a more general role should be assigned (e.g. <code>region</code>).</li>

          <li>If a page includes more than one <code>complementary</code> landmark, each should have a unique label (see <a href="/fundamentals/landmark-regions/#aria_lh_step3">Step 3</a> above).</li>
        </ul>

        <section class="notoc"><div class="header-wrapper"><h5 id="html-technique">HTML Technique</h5></div>
          

          <p>Use the HTML <code>aside</code> element to define a <code>complementary</code> landmark.</p>

          <section><div class="header-wrapper"><h6 id="aria-technique">ARIA Technique</h6></div>

          <p>If the HTML <code>aside</code> element technique is not being used, use a <code>role="complementary"</code> attribute to define a <code>complementary</code> landmark.</p>
        </section></section>

        <section class="notoc"><div class="header-wrapper"><h5 id="examples-18">Examples</h5></div>
          

          <p><a href="../../index/landmarks/complementary.html">Complementary Landmark Example</a></p>
        </section>
      </section>

      <section id="aria_lh_contentinfo"><div class="header-wrapper"><h4 class="widget-name" id="x4-3-3-contentinfo">Contentinfo</h4></div>
        

        <p>A <a class="role-reference" href="https://w3c.github.io/aria/#contentinfo"><code>contentinfo</code></a> landmark is a way to identify common information at the bottom of each page within a website, typically called the "footer" of the page, including information
          such as copyrights and links to privacy and accessibility statements.</p>

        <ul>
          <li>Each page may have one <code>contentinfo</code> landmark.</li>

          <li>The <code>contentinfo</code> landmark should be a top-level landmark.</li>

          <li>When a page contains nested <code>document</code> and/or <code>application</code> roles (e.g. typically through the use of <code>iframe</code> and <code>frame</code> elements), each <code>document</code> or <code>application</code> role may have
            one <code>contentinfo</code> landmark.</li>

          <li>If a page includes more than one <code>contentinfo</code> landmark, each should have a unique label (see <a href="/fundamentals/landmark-regions/#aria_lh_step3">Step 3</a> above).</li>
        </ul>

        <section class="notoc"><div class="header-wrapper"><h5 id="html-techniques-0">HTML Techniques</h5></div>

          

          <ul>
            <li>The HTML <code>footer</code> element defines a <code>contentinfo</code> landmark when its context is the <code>body</code> element.</li>

            <li>
              The HTML <code>footer</code> element is not considered a <code>contentinfo</code> landmark when it is descendant of any of following elements (see <a href="https://w3c.github.io/html-aam/" class="html-mapping">HTML Accessibility Mappings</a> [<cite><a class="bibref" data-link-type="biblio" href="/about/#bib-html-aam" title="HTML Accessibility API Mappings 1.0">HTML-AAM</a></cite>]):
              <ul>
                <li><code>article</code></li>
                <li><code>aside</code></li>
                <li><code>main</code></li>
                <li><code>nav</code></li>
                <li><code>section</code></li>
              </ul>
            </li>
          </ul>

          <section><div class="header-wrapper"><h6 id="aria-technique-0">ARIA Technique</h6></div>

          <p>If the HTML <code>footer</code> element technique is not being used, a <code>role="contentinfo"</code> attribute should be used to define a <code>contentinfo</code> landmark.</p>
        </section></section>

        <section class="notoc"><div class="header-wrapper"><h5 id="examples-19">Examples</h5></div>
          
          <p><a href="../../index/landmarks/contentinfo.html">Contentinfo Landmark Example</a></p>
        </section>
      </section>

      <section id="aria_lh_form"><div class="header-wrapper"><h4 class="widget-name" id="x4-3-4-form">Form</h4></div>
        

        <p>A <a class="role-reference" href="https://w3c.github.io/aria/#form"><code>form</code></a> landmark identifies a region that contains a collection of items and objects that, as a whole, combine to create a form when no other named landmark is appropriate (e.g. main
          or search).</p>

        <ul>
          <li>Use the <code>search</code> landmark instead of the <code>form</code> landmark when the form is used for search functionality.</li>

          <li>A <code>form</code> landmark should have a label to help users understand the purpose of the form.</li>

          <li>A label for the <code>form</code> landmark should be visible to all users (e.g. an <code>h1-h6</code> element).</li>

          <li>If a page includes more than one <code>form</code> landmark, each should have a unique label (see <a href="/fundamentals/landmark-regions/#aria_lh_step3">Step 3</a> above).</li>

          <li>
            Whenever possible, controls contained in a <code>form</code> landmark in an HTML document should use native host semantics:
            <ul>
              <li><code>button</code></li>

              <li><code>input</code></li>

              <li><code>select</code></li>

              <li><code>textarea</code></li>
            </ul>
          </li>
        </ul>

        <section class="notoc"><div class="header-wrapper"><h5 id="html-techniques-1">HTML Techniques</h5></div>
          

          <p>The HTML <code>form</code> element defines a <code>form</code> landmark when it has an accessible name (e.g. <code>aria-labelledby</code>, <code>aria-label</code> or <code>title</code>).</p>

          <section><div class="header-wrapper"><h6 id="aria-technique-1">ARIA Technique</h6></div>

          <p>Use the <code>role="form"</code> to identify a region of the page; do not use it to identify every form field.</p>
        </section></section>

        <section class="notoc"><div class="header-wrapper"><h5 id="examples-20">Examples</h5></div>
          

          <p><a href="../../index/landmarks/form.html">Form Landmark Example</a></p>
        </section>
      </section>

      <section id="aria_lh_main"><div class="header-wrapper"><h4 class="widget-name" id="x4-3-5-main">Main</h4></div>
        

        <p>A <a class="role-reference" href="https://w3c.github.io/aria/#main"><code>main</code></a> landmark identifies the primary content of the page.</p>

        <ul>
          <li>Each page should have one <code>main</code> landmark.</li>

          <li>The <code>main</code> landmark should be a top-level landmark.</li>

          <li>When a page contains nested <code>document</code> and/or <code>application</code> roles (e.g. typically through the use of <code>iframe</code> and <code>frame</code> elements), each <code>document</code> or <code>application</code> role may have
            one <code>main</code> landmark.</li>

          <li>If a page includes more than one <code>main</code> landmark, each should have a unique label (see <a href="/fundamentals/landmark-regions/#aria_lh_step3">Step 3</a> above).</li>
        </ul>

        <section class="notoc"><div class="header-wrapper"><h5 id="html-technique-0">HTML Technique</h5></div>
          

          <p>Use the HTML <code>main</code> element to define a <code>main</code> landmark.</p>

          <section><div class="header-wrapper"><h6 id="aria-technique-2">ARIA Technique</h6></div>

          <p>If the HTML <code>main</code> element technique is not being used, use a <code>role="main"</code> attribute to define a <code>main</code> landmark.</p>
        </section></section>

        <section class="notoc"><div class="header-wrapper"><h5 id="examples-21">Examples</h5></div>
          

          <p><a href="../../index/landmarks/main.html">Main Landmark Example</a></p>
        </section>
      </section>

      <section id="aria_lh_navigation"><div class="header-wrapper"><h4 class="widget-name" id="x4-3-6-navigation">Navigation</h4></div>
        

        <p><a class="role-reference" href="https://w3c.github.io/aria/#navigation"><code>Navigation</code></a> landmarks provide a way to identify groups (e.g. lists) of links that are intended to be used for website or page content navigation.</p>

        <ul>
          <li>If a page includes more than one <code>navigation</code> landmark, each should have a unique label (see <a href="/fundamentals/landmark-regions/#aria_lh_step3">Step 3</a> above).</li>

          <li>If a <code>navigation</code> landmark has an identical set of links as another <code>navigation</code> landmark on the page, use the same label for each <code>navigation</code> landmark.</li>
        </ul>

        <section class="notoc"><div class="header-wrapper"><h5 id="html-technique-1">HTML Technique</h5></div>
          

          <p>Use the HTML <code>nav</code> element to define a <code>navigation</code> landmark.</p>

          <section><div class="header-wrapper"><h6 id="aria-technique-3">ARIA Technique</h6></div>

          <p>If the HTML <code>nav</code> element technique is not being used, use a <code>role="navigation"</code> attribute to define a <code>navigation</code> landmark.</p>

        </section></section>

        <section class="notoc"><div class="header-wrapper"><h5 id="examples-22">Examples</h5></div>
          

          <p><a href="../../index/landmarks/navigation.html">Navigation Landmark Example</a></p>
        </section>
      </section>

      <section id="aria_lh_region"><div class="header-wrapper"><h4 class="widget-name" id="x4-3-7-region">Region</h4></div>
        

        <p>A <a class="role-reference" href="https://w3c.github.io/aria/#region"><code>region</code></a> landmark is a perceivable section of the page containing content that is sufficiently important for users to be able to navigate to the section.</p>

        <ul>
          <li>A <code>region</code> landmark must have a label.</li>

          <li>If a page includes more than one <code>region</code> landmark, each should have a unique label (see <a href="/fundamentals/landmark-regions/#aria_lh_step3">Step 3</a> above).</li>

          <li>The <code>region</code> landmark can be used identify content that named landmarks do not appropriately describe.</li>
        </ul>

        <section class="notoc"><div class="header-wrapper"><h5 id="html-technique-2">HTML Technique</h5></div>
          

          <p>The HTML <code>section</code> element defines a <code>region</code> landmark when it has an accessible name (e.g. <code>aria-labelledby</code>, <code>aria-label</code> or <code>title</code>).</p>

          <section><div class="header-wrapper"><h6 id="aria-technique-4">ARIA Technique</h6></div>

          <p>If the HTML <code>section</code> element technique is not being used, use a <code>role="region"</code> attribute to define a <code>region</code> landmark.</p>
        </section></section>

        <section class="notoc"><div class="header-wrapper"><h5 id="examples-23">Examples</h5></div>
          

          <p><a href="../../index/landmarks/region.html">Region Landmark Example</a></p>
        </section>
      </section>

      <section id="aria_lh_search"><div class="header-wrapper"><h4 class="widget-name" id="x4-3-8-search">Search</h4></div>
        

        <p>A <a class="role-reference" href="https://w3c.github.io/aria/#search"><code>search</code></a> landmark contains a collection of items and objects that, as a whole, combine to create search functionality.</p>

        <ul>
          <li>Use the <code>search</code> landmark instead of the <code>form</code> landmark when the form is used for search functionality.</li>

          <li>If a page includes more than one <code>search</code> landmark, each should have a unique label (see <a href="/fundamentals/landmark-regions/#aria_lh_step3">Step 3</a> above).</li>
        </ul>

        <section class="notoc"><div class="header-wrapper"><h5 id="html-technique-3">HTML Technique</h5></div>
          
          <p>There is no HTML element that defines a <code>search</code> landmark.</p>

          <section><div class="header-wrapper"><h6 id="aria-technique-5">ARIA Technique</h6></div>

          <p>The <code>role="search"</code> attribute defines a <code>search</code> landmark.</p>
        </section></section>

        <section class="notoc"><div class="header-wrapper"><h5 id="examples-24">Examples</h5></div>
          

          <p><a href="../../index/landmarks/search.html">Search Landmark Example</a></p>
        </section>
      </section>
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
