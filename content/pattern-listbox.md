---
# This is a generated file
title: "Listbox"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /patterns/listbox/

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
          <li><a href="../../example-index/listbox/listbox-scrollable.html">Scrollable Listbox Example</a>: Single-select listbox that scrolls to reveal more options, similar to HTML <code>select</code> with <code>size</code> attribute greater than one.</li>
          <li><a href="../../example-index/listbox/listbox-rearrangeable.html">Example Listboxes with Rearrangeable Options</a>: Examples of both single-select and multi-select listboxes with accompanying toolbars where options can be added, moved, and removed.</li>
          <li><a href="../../example-index/listbox/listbox-grouped.html">Listbox Example with Grouped Options</a>: Single-select listbox with grouped options, similar to an HTML <code>select</code> with <code>optgroup</code> children.</li>
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
              <li>Alternative selection model -- moving focus without holding a <kbd>Shift</kbd> or <kbd>Control</kbd> modifier unselects all selected options except the focused option:
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
          <li>
            Each option in the listbox has role <a href="https://w3c.github.io/aria/#option" class="role-reference">option</a> and is contained in or owned by either:
            <ul>
              <li>The element with role <code>listbox</code>.</li>
              <li>An element with role <a href="https://w3c.github.io/aria/#group" class="role-reference">group</a> that is contained in or owned by the element with role <code>listbox</code>.</li>
            </ul>
          </li>
          <li>
            Options contained in a <code>group</code> are referred to as <q>grouped options</q> and form what is called an <q>option group.</q>
            If a listbox contains grouped options, then:
            <ul>
                            <li>All option groups contain at least one option.</li>
              <li>Each option group has an accessible name provided via <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a> or <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a>.</li>
            </ul>
          </li>
          <li>If the element with role <code>listbox</code> is not part of another widget, such as a combobox, then it has either a visible label referenced by <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a> or a value specified for <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a>.</li>
          <li>
            If the listbox supports selection of more than one option, the element with role <code>listbox</code> has <a class="property-reference" href="https://w3c.github.io/aria/#aria-multiselectable">aria-multiselectable</a> set to <code>true</code>.
            Otherwise, <code>aria-multiselectable</code> is either set to <code>false</code> or the default value of <code>false</code> is implied.
          </li>
          <li>
            The selection state of each selectable option is indicated with either <a href="https://w3c.github.io/aria/#aria-selected" class="state-reference">aria-selected</a> or <a href="https://w3c.github.io/aria/#aria-checked" class="state-reference">aria-checked</a>:
            <ul>
              <li>
                If the selection state is indicated with <code>aria-selected</code>, then <code>aria-checked</code> is not specified for any options.
                Alternatively, if the selection state is indicated with <code>aria-checked</code>, then <code>aria-selected</code> is not specified for any options.
                See notes below regarding considerations for which property to use and for details of the unusual conditions that might allow for both properties in the same listbox.
              </li>
              <li>
                If any options are selected, each selected option has either <a href="https://w3c.github.io/aria/#aria-selected" class="state-reference">aria-selected</a> or <a href="https://w3c.github.io/aria/#aria-checked" class="state-reference">aria-checked</a> set to <code>true</code>.
                No more than one option is selected at a time if the element with role <code>listbox</code> does <em>not</em> have <a class="property-reference" href="https://w3c.github.io/aria/#aria-multiselectable">aria-multiselectable</a> set to <code>true</code>.
              </li>
              <li>
                All options that are selectable but not selected have either <a href="https://w3c.github.io/aria/#aria-selected" class="state-reference">aria-selected</a> or <a href="https://w3c.github.io/aria/#aria-checked" class="state-reference">aria-checked</a> set to <code>false</code>.
              </li>
              <li>
                Note that except in listboxes where selection follows focus, the selected state is distinct from focus.
                For more details, see <a href="/fundamentals/keyboard-interface/#kbd_focus_vs_selection">this description of differences between focus and selection</a> and <a href="/fundamentals/keyboard-interface/#kbd_selection_follows_focus">Deciding When to Make Selection Automatically Follow Focus</a>.
              </li>
            </ul>
          </li>
          <li>If the complete set of available options is not present in the DOM due to dynamic loading as the user scrolls, their <a href="https://w3c.github.io/aria/#aria-setsize" class="property-reference">aria-setsize</a> and <a href="https://w3c.github.io/aria/#aria-posinset" class="property-reference">aria-posinset</a> attributes are set appropriately. </li>
          <li>
            If options are arranged horizontally, the element with role <code>listbox</code> has <a href="https://w3c.github.io/aria/#aria-orientation" class="property-reference">aria-orientation</a> set to <code>horizontal</code>.
            The default value of <code>aria-orientation</code> for <code>listbox</code> is <code>vertical</code>.
          </li>
        </ul>
        <div class="note" role="note" id="issue-container-generatedID-16"><div role="heading" class="note-title marker" id="h-note-16" aria-level="5"><span>Note</span></div><ol class="">
          <li>Some factors to consider when choosing whether to indicate selection with <code>aria-selected</code> or <code>aria-checked</code> are:
            <ul>
              <li>
                Some design systems use <code>aria-selected</code> for single-select widgets and <code>aria-checked</code> for multi-select widgets.
                In the absence of factors that would make an alternative convention more appropriate, this is a recommended convention.
              </li>
              <li>
                The language of instructions and the appearance of the interface might suggest one attribute is more appropriate than the other.
                For instance, do instructions say to <q>select</q> items? Or, is the visual indicator of selection a check mark?
              </li>
              <li>It is important to adopt a consistent convention for selection models across a site or app.</li>
            </ul>
          </li>
          <li>
            Conditions that would permit a listbox to include both <code>aria-selected</code> and <code>aria-checked</code> are extremely rare.
            It is strongly recommended to avoid designing a listbox widget that would have the need for more than one type of state.
            If both states were to be used within a listbox, all the following conditions need to be satisfied:
            <ul>
              <li>The meaning and purpose of <code>aria-selected</code> is different from the meaning and purpose of <code>aria-checked</code> in the user interface.</li>
              <li>The user interface makes the meaning and purpose of each state apparent.</li>
              <li>The user interface provides a separate method for controlling each state.</li>
            </ul>
          </li>
          <li>
            If <a href="https://w3c.github.io/aria/#aria-owns" class="property-reference">aria-owns</a> is set on the listbox element to include elements that are not DOM children of the container,
            those elements will appear in the reading order in the sequence they are referenced and after any items that are DOM children.
            Scripts that manage focus need to ensure the visual focus order matches this assistive technology reading order.
          </li>
        </ol></div>
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
