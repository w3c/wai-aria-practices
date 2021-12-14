---
# This is a generated file
title: "Carousel (Slide Show or Image Rotator)"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /patterns/carousel/

lang: en
last_updated: 2021-12-14
---


<link rel="stylesheet" href="/assets/styles.css">
<!-- Code highlighting styles -->
<link rel="stylesheet" href="/example-index/css/github.css">

<div>

        <div class="sidebar-container">
          <aside class="sidebar-left">
            <h2 class="sidebar-headline">Table of Contents</h2>
            <ul class="sidebar-list">
              
                  <li>
                    <a href="#about-this-pattern">About This Pattern</a>
                  </li>
                 
                  <li>
                    <a href="#examples-0">Examples</a>
                  </li>
                 
                  <li>
                    <a href="#terms">Terms</a>
                  </li>
                 
                  <li>
                    <a href="#keyboard-interaction-4">Keyboard Interaction</a>
                  </li>
                 
                  <li>
                    <a href="#wai-aria-roles-states-and-properties-4">WAI-ARIA Roles, States, and Properties</a>
                  </li>
                
            </ul>
          </aside>
          <div class="sidebar-right">
            <section class="widget" id="carousel"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2>
      
      <p>
        A carousel presents a set of items, referred to as slides, by sequentially displaying a subset of one or more slides.
        Typically, one slide is displayed at a time, and users can activate a next or previous slide control that hides the current slide and "rotates" the next or previous slide into view.
        In some implementations, rotation automatically starts when the page loads, and it may also automatically stop once all the slides have been displayed.
        While a slide may contain any type of content, image carousels where each slide contains nothing more than a single image are common.
      </p>
      <p>
        Ensuring all users can easily control and are not adversely effected by slide rotation is an essential aspect of making carousels accessible.
        For instance, the screen reader experience can be confusing and disorienting if slides that are not visible on screen are incorrectly hidden, e.g., displayed off-screen.
        Similarly, if slides rotate automatically and a screen reader user is not aware of the rotation, the user may read an element on slide one, execute the screen reader command for next element, and, instead of hearing the next element on slide one,  hear an element from slide 2 without any knowledge that the element just announced is from an entirely new context.
      </p>
      <p>Features needed to provide sufficient rotation control include:</p>
      <ul>
        <li>Buttons for displaying the previous and next slides.</li>
        <li>Optionally, a control, or group of controls, for choosing a specific slide to display. For example, slide picker controls can be marked up as tabs in a tablist with the slide represented by a tabpanel element.</li>
        <li>If the carousel can automatically rotate, it also:
          <ul>
            <li>Has a button for stopping and restarting rotation. This is particularly important for supporting assistive technologies operating in a mode that does not move either keyboard focus or the mouse.</li>
            <li>Stops rotating when keyboard focus enters the carousel. It does not restart unless the user explicitly requests it to do so.</li>
            <li>Stops rotating whenever the mouse is hovering over the carousel.</li>
          </ul>
        </li>
      </ul>

      <section class="notoc examples-section"><img alt="" src="/assets/img/carousel.svg" >
        <h2 id="examples-0" tabindex="-1">Examples</h2>
        <ul>
          <li><a href="../../example-index/carousel/carousel-1-prev-next.html">Auto-Rotating Image Carousel with Buttons for Slide Control:</a> A basic image carousel that demonstrates the accessibility features necessary for carousels that rotate automatically on page load and also enables users to choose which slide is displayed with buttons for previous and next slide.</li>
          <li><a href="../../example-index/carousel/carousel-2-tablist.html">Auto-Rotating Image Carousel with Tabs for Slide Control:</a> An image carousel that demonstrates accessibility features necessary for carousels that rotate automatically on page load and also enables users to choose which slide is displayed with a set of tabs.</li>
        </ul>
      </section>

      <section class="notoc">
        <h2 id="terms" tabindex="-1">Terms</h2>
        <p>The following terms are used to describe components of a carousel.</p>
        <dl>
          <dt>Slide</dt>
          <dd>A single content container within a set of content containers that hold the content to be presented by the carousel.</dd>
          <dt>Rotation Control</dt>
          <dd>An interactive element that stops and starts automatic slide rotation.</dd>
          <dt>Next Slide Control</dt>
          <dd>An interactive element, often styled as an arrow,  that displays the next slide in the rotation sequence.</dd>
          <dt>Previous Slide Control</dt>
          <dd>An interactive element, often styled as an arrow,  that displays the previous slide in the rotation sequence.</dd>
          <dt>Slide Picker Controls</dt>
          <dd>A group of elements, often styled as small dots, that enable the user to pick a specific slide in the rotation sequence to display.</dd>
        </dl>
      </section>

      <section class="notoc">
        <h2 id="keyboard-interaction-4" tabindex="-1">Keyboard Interaction</h2>
        <ul>
          <li>
            If the carousel has an auto-rotate feature, automatic slide rotation stops when any element in the carousel receives keyboard focus.
            It does not resume unless the user activates the rotation control.
          </li>
          <li><kbd>Tab</kbd> and <kbd>Shift + Tab</kbd>: Move focus through the interactive elements of the carousel as specified by the page tab sequence -- scripting for <kbd>Tab</kbd> is not necessary.</li>
          <li>
            Button elements implement the keyboard interaction defined in the <a href="/patterns/button/">button pattern</a>.
            Note: Activating the rotation control, next slide, and previous slide do not move focus, so users may easily repetitively activate them as many times as desired.
          </li>
          <li>If present, the rotation control is the first element in the <kbd>Tab</kbd> sequence inside the carousel. It is essential that it precede the rotating content so it can be easily located.</li>
          <li>If tab elements are used for slide picker controls, they implement the keyboard interaction defined in the <a href="/patterns/tabpanel/">Tabs Pattern.</a></li>
        </ul>
      </section>

      <section class="notoc">
        <h2 id="wai-aria-roles-states-and-properties-4" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2>
        <p>This section describes the element composition for three styles of carousels:</p>
        <ul>
          <li>Basic: Has rotation, previous slide, and next slide controls but no slide picker controls.</li>
          <li>Tabbed: Has basic controls plus a single tab stop for slide picker controls implemented using the <a href="/patterns/tabpanel/">tabs pattern.</a></li>
          <li>Grouped: Has basic controls plus a series of tab stops in a group of slide picker controls where each control implements the <a href="/patterns/button/">button pattern.</a> Because each slide selector button adds an element to the page tab sequence, this style is the least friendly for keyboard users.</li>
        </ul>
        <h3 id="basic-carousel-elements">Basic carousel elements</h3>
        <ul>
          <li>
            A carousel container element that encompasses all components of the carousel,  including both carousel controls and slides,
            has either role <a href="https://w3c.github.io/aria/#region" class="role-reference">region</a>
            or role <a href="https://w3c.github.io/aria/#group" class="role-reference">group.</a>
            The most appropriate role for the carousel container depends on the information architecture of the page.
            See the <a href="/fundamentals/landmark-regions/">landmark regions guidance</a> to determine whether the carousel warrants being designated as a landmark region.
          </li>
          <li>The carousel container has the <a href="https://w3c.github.io/aria/#aria-roledescription" class="property-reference">aria-roledescription</a> property set to <code>carousel</code>.</li>
          <li>
            If the carousel has a visible label, its accessible label is provided by the property
            <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a> on the carousel container set to the ID of the element containing the visible label.
            Otherwise, an accessible label is provided by the property <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a> set on the carousel container.
            Note that since the <code>aria-roledescription</code> is set to "carousel", the label does not contain the word "carousel".
          </li>
          <li>The rotation control, next slide control, and previous slide control are either native button elements (recommended) or implement the <a href="/patterns/button/">button pattern</a>.</li>
          <li>
            The rotation control has an accessible label provided by either its inner text or <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a>.
            The label changes to match the action the button will perform, e.g., "Stop slide rotation" or "Start slide rotation".
            A label that changes when the button is activated clearly communicates both that slide content can change automatically and when it is doing so.
            Note that since the label changes, the rotation control does not have any states, e.g., <code>aria-pressed</code>, specified.
          </li>
          <li>Each slide container has role <a href="https://w3c.github.io/aria/#group" class="role-reference">group</a> with the property <a href="https://w3c.github.io/aria/#aria-roledescription" class="property-reference">aria-roledescription</a> set to <code>slide</code>.</li>
          <li>Each slide has an accessible name:
            <ul>
              <li>
                If a slide has a visible label, its accessible label is provided by the property
                <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a>
                on the slide container set to the ID of the element containing the visible label.
              </li>
              <li>
                Otherwise, an accessible label is provided by the property
                <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a>
                set on the slide container.
              </li>
              <li>
                If unique names that identify the slide content are not available, a number and set size can serve as a meaningful alternative, e.g., "3 of 10".
                Note: Normally, including set position and size information in an accessible name is not appropriate.
                An exception is helpful in this implementation because group elements do not support <a href="https://w3c.github.io/aria/#aria-setsize" class="property-reference">aria-setsize</a> or <a href="https://w3c.github.io/aria/#aria-posinset" class="property-reference">aria-posinset</a>.
                The tabbed carousel implementation pattern does not have this limitation.
              </li>
              <li>Note that since the <code>aria-roledescription</code> is set to "slide", the label does not contain the word "slide."</li>
            </ul>
          </li>
          <li>
            Optionally, an element wrapping the set of slide elements has <a href="https://w3c.github.io/aria/#aria-atomic" class="property-reference">aria-atomic</a> set to <code>false</code>
            and <a href="https://w3c.github.io/aria/#aria-live" class="property-reference">aria-live</a> set to:
            <ul>
              <li><code>off</code>: if the carousel is automatically rotating.</li>
              <li><code>polite</code>: if the carousel is <strong>NOT</strong> automatically rotating.</li>
            </ul>
          </li>
        </ul>
        <h3 id="tabbed-carousel-elements">Tabbed Carousel Elements</h3>
        <p>The structure of a tabbed carousel is the same as a basic carousel except that:</p>
        <ul>
          <li>
            Each slide container has role <a href="https://w3c.github.io/aria/#tabpanel" class="role-reference">tabpanel</a> in lieu of <code>group</code>,
            and it does not have the <code>aria-roledescription</code> property.
          </li>
          <li>It has slide picker controls implemented using the <a href="/patterns/tabpanel/">tabs pattern</a> where:
            <ul>
              <li>Each control is a <code>tab</code> element, so activating a tab displays the slide associated with that tab.</li>
              <li>The accessible name of each <code>tab</code> indicates which slide it will display by including the name or number of the slide, e.g., "Slide 3". Slide names are preferable if each slide has a unique name.</li>
              <li>The set of controls is grouped in a <code>tablist</code> element with an accessible name provided by the value of <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a> that identifies the purpose of the tabs, e.g., "Choose slide to display."</li>
              <li>The <code>tab</code>, <code>tablist</code>, and <code>tabpanel</code> implement the properties specified in the <a href="/patterns/tabpanel/">tabs pattern</a>.</li>
            </ul>
          </li>
        </ul>
        <h3 id="grouped-carousel-elements">Grouped Carousel Elements</h3>
        <p>A grouped carousel has the same structure as a basic carousel, but it also includes slide picker controls where:</p>
        <ul>
          <li>The set of slide picker controls is contained in an element with role <a href="https://w3c.github.io/aria/#group" class="role-reference">group</a>.</li>
          <li>The group containing the picker controls has an accessible label provided by the value of <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a> that identifies the purpose of the controls, e.g., "Choose slide to display."</li>
          <li>Each picker control is a native button element (recommended) or implements the <a href="/patterns/button/">button pattern.</a></li>
          <li>
            The accessible name of each picker button matches the name of the slide it displays.
            One technique for accomplishing this is to set <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a> to a value that references the slide <code>group</code> element.
          </li>
          <li>
            The picker button representing the currently displayed slide has the property <a href="https://w3c.github.io/aria/#aria-disabled" class="property-reference">aria-disabled</a> set to <code>true</code>.
            Note: <code>aria-disabled</code> is preferable to the HTML <code>disabled</code> attribute because this is a circumstance where screen reader users benefit from the disabled button being included in the page <kbd>Tab</kbd> sequence.
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
