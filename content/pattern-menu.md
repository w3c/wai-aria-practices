---
# This is a generated file
title: "Menu or Menu bar"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /patterns/menu/

lang: en
last_updated: 2021-12-21
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
                    <a href="#examples-8">Examples</a>
                  </li>
                 
                  <li>
                    <a href="#keyboard-interaction-12">Keyboard Interaction</a>
                  </li>
                 
                  <li>
                    <a href="#wai-aria-roles-states-and-properties-13">WAI-ARIA Roles, States, and Properties</a>
                  </li>
                
            </ul>
          </aside>
          <div class="sidebar-right">
            <section class="widget" id="menu"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2>
      
      <p>
        A <a href="https://w3c.github.io/aria/#menu" class="role-reference">menu</a> is a widget that offers a list of choices to the user, such as a set of actions or functions.
        Menu widgets behave like native operating system menus, such as the menus that pull down from the menubars commonly found at the top of many desktop application windows.
        A menu is usually opened, or made visible, by activating a <a href="/patterns/menubutton/">menu button</a>, choosing an item in a menu that opens a sub menu, or by invoking a command, such as <kbd>Shift + F10</kbd> in Windows, that opens a context specific menu.
        When a user activates a choice in a menu, the menu usually closes unless the choice opened a submenu.
      </p>

      <p>
        A menu that is visually persistent is a <a href="https://w3c.github.io/aria/#menubar" class="role-reference">menubar</a>.
        A menubar is typically horizontal and is often used to create a menu bar similar to those found near the top of the window in many desktop applications, offering the user quick access to a consistent set of commands.
      </p>

      <p>A common convention for indicating that a menu item launches a dialog box is to append "…" (ellipsis) to the menu item label, e.g., "Save as …".</p>

      <section class="notoc examples-section"><img alt="" src="/assets/img/menu.svg" >
        <h2 id="examples-8" tabindex="-1">Examples</h2>
        <ul>
          <li><a href="../../index/menubar/menubar-navigation.html">Navigation Menubar Example</a>: Demonstrates a menubar that provides site navigation.</li>
          <li><a href="../../index/menubar/menubar-editor.html">Editor Menubar Example</a>: Demonstrates menu radios and menu checkboxes in submenus of a menubar that provides text formatting commands for a text field.</li>
        </ul>
      </section>

      <section class="notoc">
        <h2 id="keyboard-interaction-12" tabindex="-1">Keyboard Interaction</h2>
        <p>
          The following description of keyboard behaviors assumes:</p>
          <ol>
            <li>A horizontal <code>menubar</code> containing several <code>menuitem</code>, <code>menuitemradio</code>, or <code>menuitemcheckbox</code> elements.</li>
            <li>Some <code>menuitem</code> elements in the <code>menubar</code> have child submenus that contain vertically arranged items.</li>
            <li>Some of the <code>menuitem</code> elements in the submenus have child submenus with items that are also vertically arranged.</li>
          </ol>
          <p>When reading the following descriptions, also keep in mind that:</p>
          <ol>
            <li>Focusable elements, which may have role <code>menuitem</code>, <code>menuitemradio</code>, or <code>menuitemcheckbox</code>, are referred to as items.</li>
            <li>If a behavior applies to only certain types of items, e.g., <code>menuitem</code> elements, the specific role name is used.</li>
            <li>Submenus, also known as popup menus,  are elements with role <code>menu</code>.</li>
            <li>Except where noted, menus opened from a menubutton behave the same as menus opened from a menubar.</li>
          </ol>
        <ul>
          <li>
            When a <code>menu</code> opens, or when a <code>menubar</code> receives focus,
            keyboard focus is placed on the first item.
            All items are focusable as described in <a href="/fundamentals/keyboard-interface/#kbd_general_within" class="sec-ref">§&nbsp; Keyboard Navigation Inside Components</a>.
          </li>
          <li><kbd>Enter</kbd>:
            <ul>
              <li>When focus is on a <code>menuitem</code> that has a submenu, opens the submenu and places focus on its first item.</li>
              <li>Otherwise, activates the item and closes the menu.</li>
            </ul>
          </li>
          <li><kbd>Space</kbd>:
            <ul>
              <li>(Optional): When focus is on a <code>menuitemcheckbox</code>, changes the state without closing the menu.</li>
              <li>(Optional): When focus is on a <code>menuitemradio</code> that is not checked, without closing the menu, checks the focused <code>menuitemradio</code> and unchecks any other checked <code>menuitemradio</code> element in the same group.</li>
              <li>(Optional): When focus is on a <code>menuitem</code> that has a submenu, opens the submenu and places focus on its first item.</li>
              <li>(Optional): When focus is on a <code>menuitem</code> that does not have a submenu, activates the <code>menuitem</code> and closes the menu.</li>
            </ul>
          </li>
          <li><kbd>Down Arrow</kbd>:
            <ul>
              <li>When focus is on a <code>menuitem</code> in a <code>menubar</code>, and that <code>menuitem</code> has a submenu, opens the submenu and places focus on the first item in the submenu.</li>
            <li>When focus is in a <code>menu</code>, moves focus to the next item, optionally wrapping from the last to the first.</li>
            </ul>
          </li>
          <li><kbd>Up Arrow</kbd>:
            <ul>
            <li>When focus is in a <code>menu</code>, moves focus to the previous item, optionally wrapping from the first to the last.</li>
            <li>(Optional): When focus is on a <code>menuitem</code> in a <code>menubar</code>, and that <code>menuitem</code> has a submenu, opens the submenu and places focus on the last item in the submenu.</li>
            </ul>
          </li>
          <li><kbd>Right Arrow</kbd>:
            <ul>
            <li>When focus is in a <code>menubar</code>, moves focus to the next item, optionally wrapping from the last to the first.</li>
              <li>When focus is in a <code>menu</code> and on a <code>menuitem</code> that has a submenu, opens the submenu and places focus on its first item.</li>
              <li>When focus is in a <code>menu</code> and on an item that does not have a submenu, performs the following 3 actions:
              <ol>
                  <li>Closes the submenu and any parent menus.</li>
                  <li>Moves focus to the next item in the <code>menubar</code>.</li>
                  <li>
                    If focus is now on a <code>menuitem</code> with a submenu, either: (Recommended) opens the submenu of that <code>menuitem</code> without moving focus into the submenu,
                    or opens the submenu of that <code>menuitem</code> and places focus on the first item in the submenu.
                  </li>
                </ol>
                Note that if the <code>menubar</code> were not present, e.g., the menus were opened from a menubutton, <kbd>Right Arrow</kbd> would not do anything when focus is on an item that does not have a submenu.
              </li>
            </ul>
          </li>
          <li><kbd>Left Arrow</kbd>:
            <ul>
              <li>When focus is in a <code>menubar</code>, moves focus to the previous item, optionally wrapping from the first to the last.</li>
              <li>When focus is in a submenu of an item in a <code>menu</code>, closes the submenu and returns focus to the parent <code>menuitem</code>.</li>
              <li>When focus is in a submenu of an item in a <code>menubar</code>, performs the following 3 actions:
                <ol>
                  <li>Closes the submenu.</li>
                  <li>Moves focus to the previous item in the <code>menubar</code>.</li>
                  <li>
                    If focus is now on a <code>menuitem</code> with a submenu, either: (Recommended) opens the submenu of that <code>menuitem</code> without moving focus into the submenu,
                    or opens the submenu of that <code>menuitem</code> and places focus on the first item in the submenu.
                  </li>
                </ol>
              </li>
            </ul>
          </li>
          <li><kbd>Home</kbd>: If arrow key wrapping is not supported, moves focus to the first item in the current <code>menu</code> or <code>menubar</code>.</li>
          <li><kbd>End</kbd>: If arrow key wrapping is not supported, moves focus to the last item in the current <code>menu</code> or <code>menubar</code>.</li>
          <li>Any key that corresponds to a printable character (Optional): Move focus to the next item in the current menu whose label begins with that printable character.</li>
          <li><kbd>Escape</kbd>: Close the menu that contains focus and return focus to the element or context, e.g., menu button or parent <code>menuitem</code>, from which the menu was opened.</li>
          <li><kbd>Tab</kbd>: Moves focus to the next element in the tab sequence, and if the item that had focus is not in a <code>menubar</code>, closes its <code>menu</code> and all open parent <code>menu</code> containers.</li>
          <li><kbd>Shift + Tab</kbd>: Moves focus to the previous element in the tab sequence, and if the item that had focus is not in a <code>menubar</code>, closes its <code>menu</code> and all open parent <code>menu</code> containers.</li>
        </ul>
        <div class="note" role="note" id="issue-container-generatedID-17"><div role="heading" class="note-title marker" id="h-note-17" aria-level="5"><span>Note</span></div><ol class="">
          <li>Disabled menu items are focusable but cannot be activated. </li>
          <li>A <a href="https://w3c.github.io/aria/#separator" class="role-reference">separator</a> in a menu is not focusable or interactive.</li>
          <li>
            If a menu is opened or a menubar receives focus as a result of a context action, <kbd>Escape</kbd> or <kbd>Enter</kbd> may return focus to the invoking context.
            For example, a rich text editor may have a menubar that receives focus when a shortcut key, e.g., <kbd>alt + F10</kbd>, is pressed while editing.
            In this case, pressing <kbd>Escape</kbd> or activating a command from the menu may return focus to the editor.
          </li>
          <li>
            Although it is recommended that authors avoid doing so, some implementations of navigation menubars may have <code>menuitem</code> elements that both perform a function and open a submenu.
            In such implementations, <kbd>Enter</kbd> and <kbd>Space</kbd> perform a navigation function, e.g., load new content,
            while <kbd>Down Arrow</kbd>, in a horizontal menubar, opens the submenu associated with that same <code>menuitem</code>.
          </li>
          <li>
            When items in a <code>menubar</code> are arranged vertically and items in <code>menu</code> containers are arranged horizontally:
            <ol>
              <li><kbd>Down Arrow</kbd> performs as <kbd>Right Arrow</kbd> is described above, and vice versa.</li>
              <li><kbd>Up Arrow</kbd> performs as <kbd>Left Arrow</kbd> is described above, and vice versa.</li>
            </ol>
          </li>
        </ol></div>
      </section>

      <section class="notoc">
        <h2 id="wai-aria-roles-states-and-properties-13" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2>
        <ul>
          <li>A menu is a container of items that represent choices. The element serving as the menu has a role of either <a href="https://w3c.github.io/aria/#menu" class="role-reference">menu</a> or   <a href="https://w3c.github.io/aria/#menubar" class="role-reference">menubar</a>. </li>
          <li>The items contained in a menu are child elements of the containing menu or menubar and have any of the following roles:
            <ul>
              <li><a href="https://w3c.github.io/aria/#menuitem" class="role-reference">menuitem</a></li>
              <li><a href="https://w3c.github.io/aria/#menuitemcheckbox" class="role-reference">menuitemcheckbox</a></li>
              <li><a href="https://w3c.github.io/aria/#menuitemradio" class="role-reference">menuitemradio</a></li>
            </ul>
          </li>
          <li>
            If activating a <a href="https://w3c.github.io/aria/#menuitem" class="role-reference">menuitem</a> opens a submenu, the menuitem is known as a parent menuitem.
            A submenu's <code>menu</code> element is:
            <ul>
              <li>Contained inside the same <code>menu</code> element as its parent <code>menuitem</code>.</li>
              <li>Is the sibling element immediately following its parent <code>menuitem</code>.</li>
            </ul>
          </li>
          <li>A parent menuitem has <a href="https://w3c.github.io/aria/#aria-haspopup" class="property-reference">aria-haspopup</a> set to either <code>menu</code> or <code>true</code>.</li>
          <li>A parent menuitem has <a href="https://w3c.github.io/aria/#aria-expanded" class="property-reference">aria-expanded</a> set to <code>false</code> when its child menu is not visible and set to <code>true</code> when the child menu is visible.</li>
          <li>One of the following approaches is used to enable scripts to move focus among items in a menu as described in <a href="/fundamentals/keyboard-interface/#kbd_general_within" class="sec-ref">§&nbsp; Keyboard Navigation Inside Components</a>:
            <ul>
              <li>The menu container has <code>tabindex</code> set to <code>-1</code> or <code>0</code> and <a href="https://w3c.github.io/aria/#aria-activedescendant" class="property-reference">aria-activedescendant</a> set to the ID of the focused item. </li>
              <li>Each item in the menu has <code>tabindex</code> set to <code>-1</code>, except in a menubar, where the first item has <code>tabindex</code> set to <code>0</code>. </li>
            </ul>
          </li>
          <li>When a <a href="https://w3c.github.io/aria/#menuitemcheckbox" class="role-reference">menuitemcheckbox</a> or <a href="https://w3c.github.io/aria/#menuitemradio" class="role-reference">menuitemradio</a> is checked, <a href="https://w3c.github.io/aria/#aria-checked" class="property-reference">aria-checked</a> is set to <code>true</code>. </li>
          <li>When a menu item is disabled, <a href="https://w3c.github.io/aria/#aria-disabled" class="state-reference">aria-disabled</a> is set to <code>true</code>.</li>
          <li>Items in a menu may be divided into groups by placing an element with a role of <a href="https://w3c.github.io/aria/#separator" class="role-reference">separator</a> between groups. For example, this technique should be used when a menu contains a set of <a href="https://w3c.github.io/aria/#menuitemradio" class="role-reference">menuitemradio</a> items. </li>
          <li>All <a href="https://w3c.github.io/aria/#separator" class="role-reference">separators</a> should have <a href="https://w3c.github.io/aria/#aria-orientation" class="property-reference">aria-orientation</a> consistent with the separator's orientation. </li>
          <li>
            If a menubar has a visible label, the element with role <code>menubar</code> has <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a> set to a value that refers to the labelling element.
            Otherwise, the menubar element has a label provided by <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a>.
          </li>
          <li>
            If a menubar is vertically oriented, it has <a class="property-reference" href="https://w3c.github.io/aria/#aria-orientation">aria-orientation</a> set to <code>vertical</code>.
            The default value of <code>aria-orientation</code> for a menubar is <code>horizontal</code>.
          </li>
          <li>
            An element with role <code>menu</code> either has:
            <ul>
              <li><a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a> set to a value that refers to the menuitem or button that controls its display.</li>
              <li>A label provided by <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a>.</li>
            </ul>
          </li>
          <li>
            If a menu is horizontally oriented, it has <a class="property-reference" href="https://w3c.github.io/aria/#aria-orientation">aria-orientation</a> set to <code>horizontal</code>.
            The default value of <code>aria-orientation</code> for a menu is <code>vertical</code>.
          </li>
        </ul>
        <div class="note" role="note" id="issue-container-generatedID-18"><div role="heading" class="note-title marker" id="h-note-18" aria-level="5"><span>Note</span></div><p class="">
          If <a href="https://w3c.github.io/aria/#aria-owns" class="property-reference">aria-owns</a> is set on the menu container to include elements that are not DOM children of the container, those elements will appear in the reading order in the sequence they are referenced and after any items that are DOM children.
          Scripts that manage focus need to ensure the visual focus order matches this assistive technology reading order.
        </p></div>
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
