---
# This is a generated file
title: "About"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /about/

lang: en
---


<link rel="stylesheet" href="/assets/styles.css">
<!-- Code highlighting styles -->
<link rel="stylesheet" href="/index/css/github.css">

<div>

        <dl>
        <dt>This version:</dt><dd>
                <a class="u-url" href="https://w3c.github.io/aria-practices/">https://w3c.github.io/aria-practices/</a>
              </dd>
        <dt>Latest published version:</dt><dd>
                <a href="https://www.w3.org/TR/wai-aria-practices-1.2/">https://www.w3.org/TR/wai-aria-practices-1.2/</a>
              </dd>
        <dt>Latest editor's draft:</dt><dd><a href="https://w3c.github.io/aria-practices/">https://w3c.github.io/aria-practices/</a></dd>
        <dt>History:</dt><dd>
                    <a href="https://www.w3.org/standards/history/wai-aria-practices-1.2">https://www.w3.org/standards/history/wai-aria-practices-1.2</a>
                  </dd><dd>
                    <a href="https://github.com/w3c/aria-practices/commits/">Commit history</a>
                  </dd>
        
        
        
        
        
        <dt>Editors:</dt><dd class="editor p-author h-card vcard" data-editor-id="44582">
    <a class="ed_mailto u-email email p-name" href="mailto:mck@fb.com">Matt King</a> (<span class="p-org org h-org">Facebook</span>)
  </dd><dd class="editor p-author h-card vcard" data-editor-id="74097">
    <a class="ed_mailto u-email email p-name" href="mailto:jku@uic.edu">JaEun Jemma Ku</a> (<span class="p-org org h-org">University of Illinois</span>)
  </dd><dd class="editor p-author h-card vcard" data-editor-id="37155">
    <a class="ed_mailto u-email email p-name" href="mailto:nurthen@adobe.com">James Nurthen</a> (<span class="p-org org h-org">Adobe</span>)
  </dd><dd class="editor p-author h-card vcard" data-editor-id="74040">
    <span class="p-name fn">Zoë Bijl</span> (<span class="p-org org h-org">Invited Expert</span>)
  </dd><dd class="editor p-author h-card vcard" data-editor-id="34017">
    <a class="u-url url p-name fn" href="https://www.w3.org/People/cooper/">Michael Cooper</a> (<span class="p-org org h-org">W3C</span>)
  </dd>
        <dt>
                Former editors:
              </dt><dd class="editor p-author h-card vcard" data-editor-id="42279">
    <span class="p-name fn">Joseph Scheuhammer</span> (<span class="p-org org h-org">Inclusive Design Research Centre, OCAD University</span>) -  Until <time datetime="2014-10-01">01 October 2014</time>
  </dd><dd class="editor p-author h-card vcard" data-editor-id="41725">
    <span class="p-name fn">Lisa Pappas</span> (<span class="p-org org h-org">SAS</span>) -  Until <time datetime="2009-10-01">01 October 2009</time>
  </dd><dd class="editor p-author h-card vcard" data-editor-id="2460">
    <span class="p-name fn">Rich Schwerdtfeger</span> (<span class="p-org org h-org">IBM Corporation</span>) -  Until <time datetime="2014-10-01">01 October 2014</time>
  </dd>
        
        <dt>Feedback:</dt><dd>
        <a href="https://github.com/w3c/aria-practices/">GitHub w3c/aria-practices</a>
        (<a href="https://github.com/w3c/aria-practices/pulls/">pull requests</a>,
        <a href="https://github.com/w3c/aria-practices/issues/new/choose">new issue</a>,
        <a href="https://github.com/w3c/aria-practices/issues/">open issues</a>)
      </dd><dd><a href="mailto:public-aria-practices@w3.org?subject=%5Bwai-aria-practices-1.2%5D%20YOUR%20TOPIC%20HERE">public-aria-practices@w3.org</a> with subject line <kbd>[wai-aria-practices-1.2] <em>… message topic …</em></kbd> (<a rel="discussion" href="https://lists.w3.org/Archives/Public/public-aria-practices">archives</a>)</dd>
        
        
      </dl>
        <section id="abstract" class="introductory"><h2>Abstract</h2>
    <p>
      This document provides readers with an understanding of how to use <cite><a href="https://www.w3.org/TR/wai-aria-1.2/"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> 1.2</a></cite> [<cite><a class="bibref" data-link-type="biblio" href="/about/#bib-wai-aria" title="Accessible Rich Internet Applications (WAI-ARIA) 1.1">WAI-ARIA</a></cite>] to create accessible rich internet applications.
      It describes considerations that might not be evident to most authors from the <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> specification alone and recommends approaches to make widgets, navigation, and behaviors accessible using <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> roles, states, and properties.
      This document is directed primarily to Web application developers, but the guidance is also useful for user agent and assistive technology developers.
    </p>
    <p>This document is part of the <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> suite described in the <a href="https://www.w3.org/WAI/intro/aria.php"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Overview</a>.</p>
  </section>
        <section id="intro"><div class="header-wrapper"><h2 id="x1-introduction">Introduction</h2></div>
    
    <p>This section is <em>informative.</em></p>
    <p>
      <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Authoring Practices is a guide for understanding how to use
      <cite><a href="https://www.w3.org/TR/wai-aria-1.2/"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> 1.2</a></cite> to create an accessible Rich Internet Application.
      It provides guidance on the appropriate application of <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr>, describes recommended <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> usage patterns, and explains concepts behind them.
    </p>
    <p>
      Languages used to create rich and dynamic web sites, e.g., HTML, JavaScript, CSS, and SVG, do not natively include all the features required to make sites usable by people who use assistive technologies (AT) or who rely on keyboard navigation.
      The <abbr title="World Wide Web Consortium">W3C</abbr> Web Accessibility Initiative's (WAI) Accessible Rich Internet Applications working group (ARIA WG) is addressing these deficiencies through several <abbr title="World Wide Web Consortium">W3C</abbr> standards efforts.
      The <a href="https://www.w3.org/WAI/intro/aria.php"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Overview</a>
      provides additional background on <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr>, summarizes those efforts, and lists the other documents included in the <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> suite.
    </p>
    <p>
      After a brief <q>Read Me First</q> section, the guide begins with ARIA implementation patterns for common widgets that both enumerate expected behaviors and demonstrate those behaviors with working code.
      The implementation patterns and examples refer to detailed explanations of supporting concepts in subsequent guidance sections.
      The guidance sections cover more general topics such as use of ARIA landmarks, practices for keyboard interfaces, grid and table properties, and the effects of role <code>presentation</code>.
    </p>
  </section>
        <section id="no_aria_better_bad_aria"><div class="header-wrapper"><h2 id="x2-1-no-aria-is-better-than-bad-aria">No ARIA is better than Bad ARIA</h2></div>
      
      <p>
        Functionally, ARIA roles, states, and properties are analogous to a CSS for assistive technologies.
        For screen reader users, ARIA controls the rendering of their non-visual experience.
        Incorrect ARIA misrepresents visual experiences, with potentially devastating effects on their corresponding non-visual experiences.
      </p>
      <p>Before using ARIA or any of the guidance in this document, please take time to understand the following two essential principles.</p>
      <section id="principle-1-a-role-is-a-promise"><div class="header-wrapper"><h3 id="x2-1-1-principle-1-a-role-is-a-promise">Principle 1: A role is a promise</h3></div>
      <p>This code:</p>
      <pre><code aria-busy="false" class="hljs xml">
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"button"</span>&gt;</span>Place Order<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          </code></pre>
      <p>
        Is a promise that the author of that <code>&lt;div&gt;</code> has also incorporated JavaScript that provides the keyboard interactions expected for a button.
        Unlike HTML input elements, ARIA roles do not cause browsers to provide keyboard behaviors or styling.
      </p>
      <p>Using a role without fulfilling the promise of that role is similar to making a "Place Order" button that abandons an order and empties the shopping cart.</p>
      <p>One of the objectives of this guide is to define expected behaviors for each ARIA role.</p>
      </section><section id="principle-2-aria-can-both-cloak-and-enhance-creating-both-power-and-danger"><div class="header-wrapper"><h3 id="x2-1-2-principle-2-aria-can-both-cloak-and-enhance-creating-both-power-and-danger">Principle 2: ARIA Can Both Cloak and Enhance, Creating Both Power and Danger</h3></div>
      <p>
        The information assistive technologies need about the meaning and purpose of user interface elements is called accessibility semantics.
        From the perspective of assistive technologies, ARIA gives authors the ability to dress up HTML and SVG elements with critical accessibility semantics that the assistive technologies would not otherwise be able to reliably derive.
      </p>
      <p>Some of ARIA is like a cloak; it covers up, or overrides, the original semantics or content.</p>
      <pre><code aria-busy="false" class="hljs javascript">
        &lt;a role=<span class="hljs-string">"menuitem"</span>&gt;Assistive tech users perceive <span class="hljs-built_in">this</span> element <span class="hljs-keyword">as</span> an item <span class="hljs-keyword">in</span> a menu, not a link.&lt;/a&gt;
        <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Assistive tech users can only perceive the contents of this aria-label, not the link text"</span>&gt;</span>Link Text<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span></span>
</code></pre>
      <p>On the other hand, some uses of ARIA are more like suspenders or belts; they add meaning that provides essential support to the original content.</p>
      <pre><code aria-busy="false" class="hljs xml">
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">aria-pressed</span>=<span class="hljs-string">"false"</span>&gt;</span>Mute<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      </code></pre>
      <p>
        This is the power of ARIA.
        It enables authors to describe nearly any user interface component in ways that assistive technologies can reliably interpret, thus making components accessible to assistive technology users.
      </p>
      <p>
        This is also the danger of ARIA.
        Authors can inadvertently override accessibility semantics.
      </p>
      <pre><code aria-busy="false" class="hljs xml">
  <span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"log"</span>&gt;</span>
    <span class="hljs-comment">&lt;!--
      Table that assistive technology users will not perceive as a table.
      The log role tells browser this is a log, not a table.
    --&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"navigation"</span>&gt;</span>
    <span class="hljs-comment">&lt;!-- This is a navigation region, not a list. --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"uri1"</span>&gt;</span>nav link 1<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"uri2"</span>&gt;</span>nav link 2<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
    <span class="hljs-comment">&lt;!-- ERROR! Previous list items are not in a list! --&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
</code></pre>
    </section></section>
        <section id="browser_and_AT_support"><div class="header-wrapper"><h2 id="x2-2-browser-and-assistive-technology-support">Browser and Assistive Technology Support</h2></div>
      
      <p>
        <strong>Testing assistive technology interoperability is essential before using code from this guide in production.</strong>
        Because the purpose of this guide is to illustrate appropriate use of ARIA 1.2 as defined in the ARIA specification, the design patterns, reference examples, and sample code intentionally <strong>do not</strong> describe and implement coding techniques for working around problems caused by gaps in support for ARIA 1.2 in browsers and assistive technologies.
        It is thus advisable to test implementations thoroughly with each browser and assistive technology combination that is relevant within a target audience.
      </p>
      <p>
        Similarly, JavaScript and CSS in this guide is written to be compatible with the most recent version of Chrome, Firefox, and Safari at the time of writing.
Some JavaScript and CSS may not function correctly in Internet Explorer.
      </p>
      <p>
        Except in cases where the ARIA Working Group and other contributors have overlooked an error,
        examples in this guide that do not function well in a particular browser or with a specific assistive technology are demonstrating browser or assistive technology bugs.
        Browser and assistive technology developers can thus utilize code in this guide to help assess the quality of their support for ARIA 1.2.
      </p>
    </section>
        <section id="mobile_and_touch_support"><div class="header-wrapper"><h2 id="x2-3-mobile-and-touch-support">Mobile and Touch Support</h2></div>
      
      <p>
        Currently, this guide does not indicate which examples are compatible with mobile browsers or touch interfaces.
        While some of the examples include specific features that enhance mobile and touch support, some ARIA features are not supported in any mobile browser.
        In addition, there is not yet a standardized approach for providing touch interactions that work across mobile browsers.
      </p>
      <p>More guidance about touch and mobile support is planned for future releases of the guide.</p>
    </section>
        <section id="sotd" class="introductory"><h2>Status of This Document</h2><p><em>This section describes the status of this
      document at the time of its publication. A list of current <abbr title="World Wide Web Consortium">W3C</abbr>
      publications and the latest revision of this technical report can be found
      in the <a href="https://www.w3.org/TR/"><abbr title="World Wide Web Consortium">W3C</abbr> technical reports index</a> at
      https://www.w3.org/TR/.</em></p>
    <p>
      This is an editor's draft by the
      <a href="https://www.w3.org/WAI/ARIA/">Accessible Rich Internet Applications Working Group</a>
      of the
      <a href="https://www.w3.org/WAI/">Web Accessibility Initiative</a>.
      It supports the
      <cite><a data-matched-text="[[[wai-aria-1.2]]]" href="https://www.w3.org/TR/wai-aria-1.2/">Accessible Rich Internet Applications (WAI-ARIA) 1.2</a></cite> [<cite><a class="bibref" data-link-type="biblio" href="/about/#bib-wai-aria-1.2" title="Accessible Rich Internet Applications (WAI-ARIA) 1.2">WAI-ARIA-1.2</a></cite>]
      specification, providing detailed advice and examples beyond what would be appropriate to a technical specification but which are important to understand the specification.
    </p>
    <p> This draft includes only a portion of content planned for <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Authoring Practices 1.2. To see plans for the complete guide, review the <a href="https://github.com/w3c/aria-practices/milestones?direction=asc&amp;sort=due_date&amp;state=open">Authoring Practices Milestone Plan</a>. </p>
    <p>
      Feedback on the  information provided here is essential to the ultimate success of Rich Internet Applications that afford full access to their information and operations.
      The Accessible Rich Internet Applications Working Group asks in particular:
    </p>
    <ul>
      <li>Is it clear how to create accessible Rich Internet Applications?</li>
      <li>Is the usage of roles, states, and properties clear? </li>
      <li>Are the various types of rich Web content covered? </li>
      <li>Are considerations beyond the use of <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> sufficiently explained? </li>
      <li>Is the relationship of this document to the <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> specification clear? </li>
      <li>Are the <a href="/patterns/">design patterns</a> clear?</li>
    </ul>
    <p>
      To comment,
      <a href="https://github.com/w3c/aria-practices/issues/">file an issue in the <abbr title="World Wide Web Consortium">W3C</abbr> ARIA Practices GitHub repository</a>,
      or if that is not possible, send email to
      <a href="mailto:public-aria-practices@w3.org?subject=Comment%20on%20WAI-ARIA%20Practices%201.2">public-aria-practices@w3.org</a>
      (<a href="http://lists.w3.org/Archives/Public/public-aria/">comment archive</a>).
    </p>
  <p>
    This document was published by the <a href="https://www.w3.org/groups/wg/aria">Accessible Rich Internet Applications Working Group</a> as
    an Editor's Draft. 
  </p><p>Publication as an Editor's Draft does not
  imply endorsement by <abbr title="World Wide Web Consortium">W3C</abbr> and its Members. </p><p>
    This is a draft document and may be updated, replaced or obsoleted by other
    documents at any time. It is inappropriate to cite this document as other
    than work in progress.
    
  </p><p>
    
        This document was produced by a group
        operating under the
        <a href="https://www.w3.org/Consortium/Patent-Policy/"><abbr title="World Wide Web Consortium">W3C</abbr> Patent
          Policy</a>.
      
    
                <abbr title="World Wide Web Consortium">W3C</abbr> maintains a
                <a rel="disclosure" href="https://www.w3.org/groups/wg/aria/ipr">public list of any patent disclosures</a>
          made in connection with the deliverables of
          the group; that page also includes
          instructions for disclosing a patent. An individual who has actual
          knowledge of a patent which the individual believes contains
          <a href="https://www.w3.org/Consortium/Patent-Policy/#def-essential">Essential Claim(s)</a>
          must disclose the information in accordance with
          <a href="https://www.w3.org/Consortium/Patent-Policy/#sec-Disclosure">section 6 of the <abbr title="World Wide Web Consortium">W3C</abbr> Patent Policy</a>.
        
  </p><p>
                  This document is governed by the
                  <a id="w3c_process_revision" href="https://www.w3.org/2021/Process-20211102/">2 November 2021 <abbr title="World Wide Web Consortium">W3C</abbr> Process Document</a>.
                </p></section>
        <section id="change_log" class="appendix"><div class="header-wrapper"><h2 id="b-change-history">Change History</h2></div>
    
    <p>Change history is maintained in a separate version-specific branch.</p>
  </section>
        <section id="acknowledgements" class="appendix"><div class="header-wrapper"><h2 id="c-acknowledgements">Acknowledgements</h2></div>
    
    <section id="major-contributors-to-version-1-1"><div class="header-wrapper"><h3 id="c-1-major-contributors-to-version-1-1">Major Contributors to Version 1.1</h3></div>
      
      <p>
        While <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Authoring Practices 1.1 is the work of the entire Authoring Practices Task Force and also benefits from many people throughout the open source community who both contribute significant work and provide valuable feedback,
        special thanks goes to the following people who provided distinctly large portions of the content and code in version 1.1.
      </p>
      <ul>
        <li>Jon Gunderson and Nicholas Hoyt  of the Division of Disability Resources and Education Services at the University of Illinois Urbana/Champaign and the students Max Foltz,  Sulaiman Sanaullah, Mark McCarthy, and Jinyuan Zhou for their contributions to the development of many of the design pattern examples.</li>
        <li>Valerie Young of Bocoup and her sponsor, Facebook, for development of the example test framework and regressions tests for more than 50 examples.</li>
        <li>Simon Pieters of Bocoup and his sponsor, Facebook, for authoring of significant guidance sections, including comprehensive treatment of the topic of accessible names and descriptions.</li>
      </ul>
    </section>
    <section id="participants-active-in-the-aria-authoring-practices-task-force"><div class="header-wrapper"><h3 id="c-2-participants-active-in-the-aria-authoring-practices-task-force">Participants active in the ARIA Authoring Practices Task Force</h3></div>
      
      <ul>
        <li>Ann Abbott (Invited Expert)</li>
        <li>Shirisha Balusani (Microsoft Corporation)</li>
        <li>Dorothy Bass (Wells Fargo Bank N.A.)</li>
        <li>Curt Bellew (Oracle)</li>
        <li>Zoë Bijl (Invited Expert)</li>
        <li>Michael Cooper (<abbr title="World Wide Web Consortium">W3C</abbr>)</li>
        <li>Bryan Garaventa (Level Access)</li>
        <li>Jon Gunderson (University of Illinois at Urbana-Champaign)</li>
        <li>Jesse Hausler(Salesforce)</li>
        <li>Sarah Higley (Microsoft Corporation)</li>
        <li>Hans Hillen (The Paciello Group, LLC)</li>
        <li>Matt King (Facebook)</li>
        <li>Jaeun Ku (University of Illinois at Urbana-Champaign)</li>
        <li>Aaron Leventhal (Google)</li>
        <li>Carolyn MacLeod (IBM Corporation)</li>
        <li>Mark McCarthy (University of Illinois at Urbana-Champaign)</li>
        <li>James Nurthen (Adobe)</li>
        <li>Scott O'Hara (The Paciello Group, LLC)</li>
        <li>Simon Pieters (Bocoup)</li>
        <li>Scott Vinkle (Shopify)</li>
        <li>Evan Yamanishi (W. W. Norton)</li>
        <li>Valerie Young (Bocoup)</li>
      </ul>
    </section>
    <section id="other-commenters-and-contributors-to-version-1-1"><div class="header-wrapper"><h3 id="c-3-other-commenters-and-contributors-to-version-1-1">Other commenters and contributors to Version 1.1</h3></div>
      
      <ul>
        <li>Vyacheslav Aristov</li>
        <li>J. Renée Beach</li>
        <li>Kasper Christensen</li>
        <li>Gerard K. Cohen</li>
        <li>Anne-Gaelle Colom</li>
        <li>Kevin Coughlin</li>
        <li>Cameron Cundiff</li>
        <li>Manish Dahamiwal</li>
        <li>Gilmore Davidson</li>
        <li>Boris Dušek</li>
        <li>Michael Fairchild</li>
        <li>Jeremy Felt</li>
        <li>Rob Fentress</li>
        <li>Geppy</li>
        <li>Tatiana Iskandar</li>
        <li>Patrick Lauke</li>
        <li>Marek Lewandowski</li>
        <li>Dan Matthew</li>
        <li>Shane McCarron</li>
        <li>Victor Meyer</li>
        <li>Jonathan Neal</li>
        <li>Philipp Rudloff</li>
        <li>Joseph Scheuhammer</li>
        <li>Nick Schonning</li>
        <li>thomascorthals</li>
        <li>Christopher Tryens</li>
      </ul>
    </section>

    <div data-include="common/acknowledgements/funders.html" data-include-replace="true" data-include-id="include-3886032983108543" class="respec-offending-element" title="`data-include` failed: `common/acknowledgements/funders.html` (Failed to fetch)." id="respec-offender-data-include-failed-common-acknowledgements-funders-html-failed-to-fetch"></div>

  </section>
        <section id="references" class="appendix"><div class="header-wrapper"><h2 id="d-references">References</h2></div><section id="informative-references"><div class="header-wrapper"><h3 id="d-1-informative-references">Informative references</h3></div>
    
    <dl class="bibliography"><dt id="bib-html">[HTML]</dt><dd>
      <a href="https://html.spec.whatwg.org/multipage/"><cite>HTML Standard</cite></a>. Anne van Kesteren; Domenic Denicola; Ian Hickson; Philip Jägenstedt; Simon Pieters.  WHATWG. Living Standard. URL: <a href="https://html.spec.whatwg.org/multipage/">https://html.spec.whatwg.org/multipage/</a>
    </dd><dt id="bib-html-aam">[HTML-AAM]</dt><dd>
      <a href="https://www.w3.org/TR/html-aam-1.0/"><cite>HTML Accessibility API Mappings 1.0</cite></a>. Steve Faulkner; Scott O'Hara.  W3C. 7 March 2022. W3C Working Draft. URL: <a href="https://www.w3.org/TR/html-aam-1.0/">https://www.w3.org/TR/html-aam-1.0/</a>
    </dd><dt id="bib-html-aria">[HTML-ARIA]</dt><dd>
      <a href="https://www.w3.org/TR/html-aria/"><cite>ARIA in HTML</cite></a>. Steve Faulkner; Scott O'Hara; Patrick Lauke.  W3C. 9 December 2021. W3C Recommendation. URL: <a href="https://www.w3.org/TR/html-aria/">https://www.w3.org/TR/html-aria/</a>
    </dd><dt id="bib-svg2">[SVG2]</dt><dd>
      <a href="https://www.w3.org/TR/SVG2/"><cite>Scalable Vector Graphics (SVG) 2</cite></a>. Amelia Bellamy-Royds; Bogdan Brinza; Chris Lilley; Dirk Schulze; David Storey; Eric Willigers.  W3C. 4 October 2018. W3C Candidate Recommendation. URL: <a href="https://www.w3.org/TR/SVG2/">https://www.w3.org/TR/SVG2/</a>
    </dd><dt id="bib-wai-aria">[WAI-ARIA]</dt><dd>
      <a href="https://www.w3.org/TR/wai-aria-1.1/"><cite>Accessible Rich Internet Applications (WAI-ARIA) 1.1</cite></a>. Joanmarie Diggs; Shane McCarron; Michael Cooper; Richard Schwerdtfeger; James Craig.  W3C. 14 December 2017. W3C Recommendation. URL: <a href="https://www.w3.org/TR/wai-aria-1.1/">https://www.w3.org/TR/wai-aria-1.1/</a>
    </dd><dt id="bib-wai-aria-1.2">[WAI-ARIA-1.2]</dt><dd>
      <a href="https://www.w3.org/TR/wai-aria-1.2/"><cite>Accessible Rich Internet Applications (WAI-ARIA) 1.2</cite></a>. Joanmarie Diggs; James Nurthen; Michael Cooper.  W3C. 8 December 2021. W3C Candidate Recommendation. URL: <a href="https://www.w3.org/TR/wai-aria-1.2/">https://www.w3.org/TR/wai-aria-1.2/</a>
    </dd></dl>
  </section></section>
      
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
