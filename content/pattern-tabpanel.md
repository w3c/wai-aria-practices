---
# This is a generated file
title: "Tabs"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /patterns/tabpanel/

lang: en
last_updated: 2021-12-14
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
                    <a href="#examples-14">Examples</a>
                  </li>
                 
                  <li>
                    <a href="#keyboard-interaction-21">Keyboard Interaction</a>
                  </li>
                 
                  <li>
                    <a href="#wai-aria-roles-states-and-properties-22">WAI-ARIA Roles, States, and Properties</a>
                  </li>
                
            </ul>
          </aside>
          <div class="sidebar-right">
            <section class="widget" id="tabpanel"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2>
      
      <p>
        Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time.
        Each tab panel has an associated tab element, that when activated, displays the panel.
        The list of tab elements is arranged along one edge of the currently displayed panel, most commonly the top edge.
      </p>
      <p>Terms used to describe this design pattern include:</p>
      <dl>
        <dt>Tabs or Tabbed Interface</dt>
        <dd>A set of tab elements and their associated tab panels.</dd>
        <dt>Tab List</dt>
        <dd>A set of tab elements contained in a <a href="https://w3c.github.io/aria/#tablist" class="role-reference">tablist</a> element.</dd>
        <dt><a href="https://w3c.github.io/aria/#tab" class="role-reference">tab</a></dt>
        <dd>An element in the tab list that serves as a label for one of the tab panels and can be activated to display that panel. </dd>
        <dt><a href="https://w3c.github.io/aria/#tabpanel" class="role-reference">tabpanel</a></dt>
        <dd>The element that contains the content associated with a tab.</dd>
      </dl>
      <p>
        When a tabbed interface is initialized, one tab panel is displayed and its associated tab is styled to indicate that it is active.
        When the user activates one of the other tab elements, the previously displayed tab panel is hidden, the tab panel associated with the activated tab becomes visible, and the tab is considered "active".
      </p>

      <section class="notoc examples-section"><img alt="" src="/assets/img/tabpanel.svg" >
        <h2 id="examples-14" tabindex="-1">Examples</h2>
        <ul>
          <li><a href="../../index/tabs/tabs-1/tabs.html">Tabs With Automatic Activation</a>: A tabs widget where tabs are automatically activated and their panel is displayed when they receive focus.</li>
          <li><a href="../../index/tabs/tabs-2/tabs.html">Tabs With Manual Activation</a>: A tabs widget where users activate a tab and display its panel by pressing <kbd>Space</kbd> or <kbd>Enter</kbd>.</li>
        </ul>
      </section>

      <section class="notoc">
        <h2 id="keyboard-interaction-21" tabindex="-1">Keyboard Interaction</h2>
        <p>For the tab list:</p>
        <ul>
          <li>
            <kbd>Tab</kbd>:
            <ul>
              <li>When focus moves into the tab list, places focus on the active <code>tab</code> element.</li>
              <li>When the tab list contains the focus, moves focus to the next element in the page tab sequence outside the tablist, which is the tabpanel unless the first element containing meaningful content inside the tabpanel is focusable.</li>
            </ul>
          </li>
          <li>When focus is on a tab element in a horizontal tab list:
            <ul>
              <li>
                <kbd>Left Arrow</kbd>: moves focus to the previous tab.
                If focus is on the first tab, moves focus to the last tab.
                Optionally, activates the newly focused tab (See note below).
              </li>
              <li>
                <kbd>Right Arrow</kbd>: Moves focus to the next tab.
                If focus is on the last tab element, moves focus to the first tab.
                Optionally, activates the newly focused tab (See note below).
              </li>
            </ul>
          </li>
          <li>When focus is on a tab in a tablist with either horizontal or vertical orientation:
            <ul>
              <li><kbd>Space or Enter</kbd>: Activates the tab if it was not activated automatically on focus.</li>
              <li><kbd>Home</kbd> (Optional): Moves focus to the first tab. Optionally, activates the newly focused tab (See note below).</li>
              <li><kbd>End</kbd> (Optional): Moves focus to the last tab. Optionally, activates the newly focused tab (See note below).</li>
              <li><kbd>Shift + F10</kbd>: If the tab has an associated popup menu, opens the menu. </li>
              <li>
                <kbd>Delete</kbd> (Optional): If deletion is allowed, deletes (closes) the current tab element and its associated tab panel,
                sets focus on the tab following the tab that was closed, and optionally activates the newly focused tab. If there is not a tab that followed the tab that was deleted,
                e.g., the deleted tab was the right-most tab in a left-to-right horizontal tab list,
                sets focus on and optionally activates the tab that preceded the deleted tab.
                 If the application allows all tabs to be deleted, and the user deletes the last remaining tab in the tab list,
                the application moves focus to another element that provides a logical work flow.
                As an alternative to <kbd>Delete</kbd>, or in addition to supporting <kbd>Delete</kbd>, the delete function is available in a context menu.
              </li>
            </ul>
          </li>
        </ul>
        <div class="note" role="note" id="issue-container-generatedID-28"><div role="heading" class="note-title marker" id="h-note-26" aria-level="5"><span>Note</span></div><ol class="">
          <li>
            It is recommended that tabs activate automatically when they receive focus as long as their associated tab panels are displayed without noticeable latency.
            This typically requires tab panel content to be preloaded.
            Otherwise, automatic activation slows focus movement, which significantly hampers users' ability to navigate efficiently across the tab list.
            For additional guidance, see <a href="/fundamentals/keyboard-interface/#kbd_selection_follows_focus" class="sec-ref">§&nbsp;Deciding When to Make Selection Automatically Follow Focus</a>.
          </li>
          <li>
            When a tab list has its <a href="https://w3c.github.io/aria/#aria-orientation" class="property-reference">aria-orientation</a> set to <code>vertical</code>:
            <ol>
              <li><kbd>Down Arrow</kbd> performs as <kbd>Right Arrow</kbd> is described above.</li>
              <li><kbd>Up Arrow</kbd> performs as <kbd>Left Arrow</kbd> is described above.</li>
            </ol>
          </li>
          <li>If the tab list is horizontal, it does not listen for <kbd>Down Arrow</kbd> or <kbd>Up Arrow</kbd> so those keys can provide their normal browser scrolling functions even when focus is inside the tab list.</li>
        </ol></div>
      </section>
      <section class="notoc">
        <h2 id="wai-aria-roles-states-and-properties-22" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2>
        <ul>
        <li>The element that serves as the container for the set of tabs has role  <a class="role-reference" href="https://w3c.github.io/aria/#tablist">tablist</a>. </li>
        <li>Each element that serves as a tab has role <a class="role-reference" href="https://w3c.github.io/aria/#tab">tab</a> and is contained within the element with role <code>tablist</code>.</li>
          <li>Each element that contains the content panel for a <code>tab</code> has role <a class="role-reference" href="https://w3c.github.io/aria/#tabpanel">tabpanel</a>.</li>
          <li>
            If the tab list has a visible label, the element with role <code>tablist</code> has <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a> set to a value that refers to the labelling element.
            Otherwise, the <code>tablist</code> element has a label provided by <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a>.
          </li>
          <li>Each element with role <code>tab</code> has the property <a href="https://w3c.github.io/aria/#aria-controls" class="property-reference">aria-controls</a> referring to its associated <code>tabpanel</code> element.</li>
          <li>The active <code>tab</code> element has the state <a href="https://w3c.github.io/aria/#aria-selected" class="state-reference">aria-selected</a> set to <code>true</code> and all other <code>tab</code> elements have it set to <code>false</code>.</li>
          <li>Each element with role <code>tabpanel</code> has the property <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a> referring to its associated <code>tab</code> element. </li>
          <li>If a <code>tab</code> element has a popup menu, it has the property <a href="https://w3c.github.io/aria/#aria-haspopup" class="property-reference">aria-haspopup</a> set to either <code>menu</code> or <code>true</code>. </li>
          <li>
            If the <code>tablist</code> element is vertically oriented, it has the property <a href="https://w3c.github.io/aria/#aria-orientation" class="property-reference">aria-orientation</a> set to <code>vertical</code>.
            The default value of <code>aria-orientation</code> for a <code>tablist</code> element is <code>horizontal</code>.
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
