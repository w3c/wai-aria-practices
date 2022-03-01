---
# This is a generated file
title: "Hiding Semantics"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /fundamentals/hiding-semantics/

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
                    <a href="#presentation-role">Intentionally Hiding Semantics with the <code>presentation</code> Role</a>
                  </li>
                 
                  <li>
                    <a href="#children-presentational">Roles That Automatically Hide Semantics by Making Their Descendants Presentational</a>
                  </li>
                
            </ul>
          </aside>
          <div class="sidebar-right">
            
        <section id="presentation-role"><div class="header-wrapper"><h2 id="x9-intentionally-hiding-semantics-with-the-presentation-role">Intentionally Hiding Semantics with the <code>presentation</code> Role</h2></div>
    
    <p>
      While ARIA is primarily used to express semantics, there are some situations where hiding an
      element’s semantics from assistive technologies is helpful. This is done with the
      <a href="https://w3c.github.io/aria/#presentation" class="role-reference">presentation</a>
      role, which declares that an element is being used only for presentation and therefore does
      not have any accessibility semantics. The ARIA 1.1 specification also includes role
      <a href="https://w3c.github.io/aria/#none" class="role-reference">none</a>,
      which serves as a synonym for <code>presentation</code>.
    </p>
    <p>
      For example, consider a tabs widget built using an HTML <code>ul</code> element.
    </p>
    <pre aria-busy="false"><code class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"tablist"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"presentation"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"tab"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Tab 1<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"presentation"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"tab"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Tab 2<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"presentation"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"tab"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Tab 3<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span></code></pre>
    <p>
      Because the list is declared to be a tablist, the list items are not in a list context. It
      could confuse users if an assistive technology were to render those list items. Applying role
      <code>presentation</code> to the <code>li</code> elements tells browsers to leave those
      elements out of their accessibility tree. Assistive technologies will thus be unaware of the
      list item elements and see the tab elements as immediate children of the tablist.
    </p>
    <p>
      Three common uses of role <code>presentation</code> are:
    </p>
    <ol>
      <li>Hiding a decorative image; it is equivalent to giving the image null alt text. </li>
      <li>Suppressing table semantics of tables used for layout in circumstances where the table semantics do not convey meaningful relationships.</li>
      <li>Eliminating semantics of intervening orphan elements in the structure of a composite
        widget, such as a tablist, menu, or tree as demonstrated in the example above.</li>
    </ol>
    <section id="presentation_role_effects"><div class="header-wrapper"><h3 id="x9-1-effects-of-role-presentation">
        Effects of Role <code>presentation</code>
      </h3></div>
      
      <p>
        When <code>role="presentation"</code> is specified on an element, if a
        <a href="/fundamentals/hiding-semantics/#presentation_role_ignored">condition that requires a browser to ignore the <code>presentation</code> role</a>
        does not exist, it has the following three effects.
      </p>
      <ol>
        <li>The element’s implied ARIA role and any ARIA states and properties associated with
          that role are hidden from assistive technologies.</li>
        <li>
          Text contained by the element, i.e., inner text, as well as inner text of all its
          descendant elements remains visible to assistive technologies except, of course, when the
          text is explicitly hidden, e.g., styled with <code>display: none</code> or has <code>aria-hidden="true"</code>.
        </li>
        <li>
          The roles, states, and properties of each descendant element remain visible to assistive
          technologies unless the descendant requires the context of the presentational
          element. For example:
          <ul>
            <li> If <code>presentation</code> is applied to a <code>ul</code> or <code>ol</code> element, each child <code>li</code> element inherits the <code>presentation</code> role because ARIA requires the <code>listitem</code> elements to have the parent <code>list</code> element. So, the <code>li</code> elements are not exposed to assistive technologies, but elements contained inside of those <code>li</code> elements, including nested lists, are visible to assistive technologies. </li>
            <li>
              Similarly, if <code>presentation</code> is applied to a <code>table</code> element,
              the descendant <code>caption</code>, <code>thead</code>, <code>tbody</code>, <code>tfoot</code>,
              <code>tr</code>, <code>th</code>, and <code>td</code>
              elements inherit role <code>presentation</code> and are thus not exposed to assistive technologies.
              But, elements inside of the <code>th</code> and <code>td</code> elements, including nested tables,  are exposed to assistive technologies.
            </li>
          </ul>
        </li>
      </ol>
    </section>
    <section id="presentation_role_ignored"><div class="header-wrapper"><h3 id="x9-2-conditions-that-cause-role-presentation-to-be-ignored">
        Conditions That Cause Role <code>presentation</code> to be Ignored
      </h3></div>
      
      <p>
         Browsers ignore <code>role="presentation"</code>, and it therefore has no effect, if either of the following are true about the element to which it is applied:</p>
          <ul>
            <li>The element is focusable, e.g. it is natively focusable like an HTML link or input, or it has a <code>tabindex</code> attribute.</li>
            <li>
              The element has any of the
              <a href="https://w3c.github.io/aria/#global_states" class="specref">twenty-one global ARIA states and properties</a>,
              e.g., <code>aria-label</code>.
            </li>
          </ul>
    </section>
    <section id="presentation_role_examples"><div class="header-wrapper"><h3 id="x9-3-example-demonstrating-effects-of-the-presentation-role">
        Example Demonstrating Effects of the <code>presentation</code> Role
      </h3></div>
      
      <p>This code:</p>
      <pre aria-busy="false"><code class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"presentation"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>Date of birth:<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>January 1, 3456<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span></code></pre>
      <p>when parsed by a browser, is equivalent to the following from the perspective of a screen reader or other assistive technology that relies on the browser's accessibility tree:
      </p>
      <pre aria-busy="false"><code class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Date of birth:<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>January 1, 3456<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
    </section>
  </section>
        <section id="children-presentational"><div class="header-wrapper"><h2 id="x10-roles-that-automatically-hide-semantics-by-making-their-descendants-presentational">Roles That Automatically Hide Semantics by Making Their Descendants Presentational</h2></div>
    
    <p>
      There are some types of user interface components that, when represented in a platform
      accessibility API, can only contain text. For example, accessibility APIs do not have a way of
      representing semantic elements contained in a button. To deal with this limitation, <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr>
      requires browsers to automatically apply role <code>presentation</code> to all descendant
      elements of any element with a role that cannot support semantic children.
    </p>
    <p>The roles that require all children to be presentational are:</p>
    <ul>
      <li>button</li>
      <li>checkbox</li>
      <li>img</li>
      <li>meter</li>
      <li>menuitemcheckbox</li>
      <li>menuitemradio</li>
      <li>option</li>
      <li>progressbar</li>
      <li>radio</li>
      <li>scrollbar</li>
      <li>separator</li>
      <li>slider</li>
      <li>switch</li>
      <li>tab</li>
    </ul>
    <p>For instance, consider the following tab element, which contains a heading.</p>
    <pre aria-busy="false"><code class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"tab"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Title of My Tab<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span></code></pre>
    <p>
      Because <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> requires descendants of tab to be presentational,
      the following code is equivalent.
    </p>
    <pre aria-busy="false"><code class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"tab"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">h3</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"presentation"</span>&gt;</span>Title of My Tab<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span></code></pre>
    <p>
      And, from the perspective of anyone using a technology that relies on an accessibility API, such as a screen reader,
      the heading does not exist since the previous code is equivalent to the following.
    </p>
    <pre aria-busy="false"><code class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"tab"</span>&gt;</span>Title of My Tab<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span></code></pre>
    <p>
      See the
      <a href="/fundamentals/hiding-semantics/#presentation-role">
        section about role <code>presentation</code>
      </a>
      for a detailed explanation of what it does.
    </p>
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
