---
# This is a generated file
title: "Listbox"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /patterns/listbox/

lang: en
last_updated: 2021-12-07
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
                    <a href="#examples-7">Examples</a>
                  </li>
                 
                  <li>
                    <a href="#keyboard-interaction-11">Keyboard Interaction</a>
                  </li>
                 
                  <li>
                    <a href="#wai-aria-roles-states-and-properties-12">WAI-ARIA Roles, States, and Properties</a>
                  </li>
                
            </ul>
          </aside>
          <div class="sidebar-right">
            <section class="widget" id="Listbox"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2>
      
      <p>
        A <a href="https://w3c.github.io/aria/#listbox" class="role-reference">listbox</a> widget presents a list of options and allows a user to select one or more of them.
        A listbox that allows a single option to be chosen is a single-select listbox; one that allows multiple options to be selected is a multi-select listbox.
      </p>
      <p>
        When screen readers present a listbox, they may render the name, state, and position of each option in the list.
        The name of an option is a string calculated by the browser, typically from the content of the option element.
        As a flat string, the name does not contain any semantic information.
        Thus, if an option contains a semantic element, such as a heading, screen reader users will not have access to the semantics.
        In addition, the interaction model conveyed by the listbox role to assistive technologies does not support interacting with elements inside of an option.
        Because of these traits of the listbox widget, it does not provide an accessible way to present a list of interactive elements, such as links, buttons, or checkboxes.
        To present a list of interactive elements, see the <a href="/patterns/grid/">grid</a> pattern.
      </p>
      <p>
        Avoiding very long option names facilitates understandability and perceivability for screen reader users.
        The entire name of an option is spoken as a single unit of speech when the option is read.
        When too much information is spoken as the result of a single key press, it is difficult to understand.
        Long names inhibit perception by increasing the impact of interrupted speech because users typically have to re-read the entire option.
      And, if the user does not understand what is spoken, reading the name by character, word, or phrase may be a difficult operation for many screen reader users in the context of a listbox widget.
      </p>
      <p>
        Sets of options where each option name starts with the same word or phrase can also significantly degrade usability for keyboard and screen reader users.
        Scrolling through the list to find a specific option becomes inordinately time consuming for a screen reader user who must listen to that word or phrase repeated before hearing what is unique about each option.
        For example, if a listbox for choosing a city were to contain options where each city name were preceded by a country name, and if many cities were listed for each country, a screen reader user would have to listen to the country name before hearing each city name.
        In such a scenario, it would be better to have 2 list boxes, one for country and one for city.
      </p>

      <section class="notoc examples-section"><img alt="" src="/assets/img/listbox.svg" >
        <h2 id="examples-7" tabindex="-1">Examples</h2>
        <ul>
          <li><a href="../../index/listbox/listbox-scrollable.html">Scrollable Listbox Example</a>: Single-select listbox that scrolls to reveal more options, similar to HTML <code>select</code> with <code>size</code> attribute greater than one.</li>
          <li><a href="../../index/listbox/listbox-collapsible.html">Collapsible Dropdown Listbox Example</a>: Single-select collapsible listbox that expands when activated, similar to HTML <code>select</code> with the attribute <code>size="1"</code>.</li>
          <li><a href="../../index/listbox/listbox-rearrangeable.html">Example Listboxes with Rearrangeable Options</a>: Examples of both single-select and multi-select listboxes with accompanying toolbars where options can be added, moved, and removed.</li>
          <li><a href="../../index/listbox/listbox-grouped.html">Listbox Example with Grouped Options</a>: Single-select listbox with grouped options, similar to an HTML <code>select</code> with <code>optgroup</code> children.</li>
        </ul>
      </section>

      <section id="listbox_kbd_interaction" class="notoc">
        <h2 id="keyboard-interaction-11" tabindex="-1">Keyboard Interaction</h2>
        <p>For a vertically oriented listbox:</p>
        <ul>
          <li> When a single-select listbox receives focus:
            <ul>
              <li>If none of the options are selected before the listbox receives focus, the first option receives focus. Optionally, the first option may be automatically selected.</li>
              <li>If an option is selected before the listbox receives focus, focus is set on the selected option. </li>
            </ul>
          </li>
          <li>When a multi-select listbox receives focus:
            <ul>
              <li>If none of the options are selected before the listbox receives focus, focus is set on the first option and there is no automatic change in the selection state.</li>
              <li>If one or more options are selected before the listbox receives focus, focus is set on the first option in the list that is selected.</li>
            </ul>
          </li>
          <li><kbd>Down Arrow</kbd>: Moves focus to the next option. Optionally, in a single-select listbox, selection may also move with focus.</li>
          <li><kbd>Up Arrow</kbd>: Moves focus to the previous option. Optionally, in a single-select listbox, selection may also move with focus.</li>
           <li><kbd>Home</kbd> (Optional): Moves focus to first option. Optionally, in a single-select listbox, selection may also move with focus. Supporting this key is strongly recommended for lists with more than five options.</li>
           <li><kbd>End</kbd> (Optional): Moves focus to last option. Optionally, in a single-select listbox, selection may also move with focus. Supporting this key is strongly recommended for lists with more than five options.</li>
          <li>Type-ahead is recommended for all listboxes, especially those with more than seven options:
            <ul>
              <li>Type a character: focus moves to the next item with a name that starts with the typed character.</li>
              <li>Type multiple characters in rapid succession: focus moves to the next item with a name that starts with the string of characters typed.</li>
            </ul>
          </li>
          <li><strong>Multiple Selection</strong>:
            Authors may implement either of two interaction models to support multiple selection:
            a recommended model that does not require the user to hold a modifier key, such as <kbd>Shift</kbd> or <kbd>Control</kbd>, while navigating the list
            or an alternative model that does require modifier keys to be held while navigating in order to avoid losing selection states.
            <ul>
              <li>Recommended selection model -- holding modifier keys is not necessary:
                <ul>
                  <li><kbd>Space</kbd>: changes the selection state of the focused option.</li>
                  <li><kbd>Shift + Down Arrow</kbd> (Optional): Moves focus to and toggles the selected state of the next option.</li>
                  <li><kbd>Shift + Up Arrow</kbd> (Optional): Moves focus to and toggles the selected state of the previous option.</li>
                  <li><kbd>Shift + Space</kbd> (Optional): Selects contiguous items from the most recently selected item to the focused item.</li>
                  <li><kbd>Control + Shift + Home</kbd> (Optional): Selects the focused option and all options up to the first option. Optionally, moves focus to the first option.</li>
                  <li><kbd>Control + Shift + End</kbd> (Optional): Selects the focused option and all options down to the last option. Optionally, moves focus to the last option.</li>
                  <li><kbd>Control + A</kbd> (Optional): Selects all options in the list. Optionally, if all options are selected, it may also unselect all options.</li>
                </ul>
              </li>
              <li>Alternative selection model -- moving focus without holding a <kbd>Shift</kbd> or <kbd>Control</kbd> modifier unselects all selected nodes except the focused node:
              <ul>
                  <li><kbd>Shift + Down Arrow</kbd>: Moves focus to and toggles the selection state of the next option.</li>
                  <li><kbd>Shift + Up Arrow</kbd>: Moves focus to and toggles the selection state of the previous option.</li>
                  <li><kbd>Control + Down Arrow</kbd>: Moves focus to the next option without changing its selection state.</li>
                  <li><kbd>Control + Up Arrow</kbd>: Moves focus to the previous option without changing its selection state.</li>
                  <li><kbd>Control + Space</kbd> Changes the selection state of the focused option. </li>
                  <li><kbd>Shift + Space</kbd> (Optional): Selects contiguous items from the most recently selected item to the focused item.</li>
                  <li><kbd>Control + Shift + Home</kbd> (Optional): Selects the focused option and all options up to the first option. Optionally, moves focus to the first option.</li>
                  <li><kbd>Control + Shift + End</kbd> (Optional): Selects the focused option and all options down to the last option. Optionally, moves focus to the last option.</li>
                  <li><kbd>Control + A</kbd> (Optional): Selects all options in the list. Optionally, if all options are selected, it may also unselect all options.</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <div class="note" role="note" id="issue-container-generatedID-15"><div role="heading" class="note-title marker" id="h-note-15" aria-level="5"><span>Note</span></div><ol class="">
          <li>DOM focus (the active element) is functionally distinct from the selected state. For more details, see <a href="/fundamentals/keyboard-interface/#kbd_focus_vs_selection">this description of differences between focus and selection.</a></li>
          <li>
            The <code>listbox</code> role supports the <a class="property-reference" href="https://w3c.github.io/aria/#aria-activedescendant">aria-activedescendant</a> property,
            which provides an alternative to moving DOM focus among <code>option</code> elements when implementing keyboard navigation.
            For details, see <a href="/fundamentals/keyboard-interface/#kbd_focus_activedescendant">Managing Focus in Composites Using aria-activedescendant</a>.
          </li>
          <li>
            In a single-select listbox, moving focus may optionally unselect the previously selected option and select the newly focused option.
            This model of selection is known as "selection follows focus".
            Having selection follow focus can be very helpful in some circumstances and can severely degrade accessibility in others.
            For additional guidance, see <a href="/fundamentals/keyboard-interface/#kbd_selection_follows_focus">Deciding When to Make Selection Automatically Follow Focus</a>.
          </li>
          <li>If selecting or unselecting all options is an important function, implementing separate controls for these actions, such as buttons for "Select All" and "Unselect All", significantly improves accessibility.</li>
          <li>
            If the options in a listbox are arranged horizontally:
            <ol>
              <li><kbd>Down Arrow</kbd> performs as <kbd>Right Arrow</kbd> is described above, and vice versa.</li>
              <li><kbd>Up Arrow</kbd> performs as <kbd>Left Arrow</kbd> is described above, and vice versa.</li>
            </ol>
          </li>
        </ol></div>
      </section>

      <section id="listbox_roles_states_props" class="notoc">
        <h2 id="wai-aria-roles-states-and-properties-12" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2>
        <ul>
          <li>An element that contains or owns all the listbox options has role <a href="https://w3c.github.io/aria/#listbox" class="role-reference">listbox</a>.</li>
          <li>Each option in the listbox has role <a href="https://w3c.github.io/aria/#option" class="role-reference">option</a> and is a DOM  descendant of the element with role <code>listbox</code> or is referenced by an <a href="https://w3c.github.io/aria/#aria-owns" class="property-reference">aria-owns</a> property on the listbox element.</li>
          <li>If the listbox is not part of another widget, then it has a visible label referenced by <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a> on the element with role <code>listbox</code>.</li>
          <li>In a single-select listbox, the selected option has <a href="https://w3c.github.io/aria/#aria-selected" class="property-reference">aria-selected</a> set to <code>true</code>. </li>
          <li>if the listbox supports multiple selection:
            <ul>
              <li> The element with role <code>listbox</code> has <a href="https://w3c.github.io/aria/#aria-multiselectable" class="property-reference">aria-multiselectable</a> set to <code>true</code>. </li>
              <li>All selected options have <a href="https://w3c.github.io/aria/#aria-selected" class="state-reference">aria-selected</a> set to <code>true</code>. </li>
              <li>All options that are not selected have <a href="https://w3c.github.io/aria/#aria-selected" class="state-reference">aria-selected</a> set to <code>false</code>. </li>
            </ul>
          </li>
          <li>If the complete set of available options is not present in the DOM due to dynamic loading as the user scrolls, their <a href="https://w3c.github.io/aria/#aria-setsize" class="property-reference">aria-setsize</a> and <a href="https://w3c.github.io/aria/#aria-posinset" class="property-reference">aria-posinset</a> attributes are set appropriately. </li>
          <li>
            If options are arranged horizontally, the element with role <code>listbox</code> has <a href="https://w3c.github.io/aria/#aria-orientation" class="property-reference">aria-orientation</a> set to <code>horizontal</code>.
            The default value of <code>aria-orientation</code> for <code>listbox</code> is <code>vertical</code>.
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
