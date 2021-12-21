---
# This is a generated file
title: "Button"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /patterns/button/

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
                    <a href="#examples">Examples</a>
                  </li>
                 
                  <li>
                    <a href="#keyboard-interaction-3">Keyboard Interaction</a>
                  </li>
                 
                  <li>
                    <a href="#wai-aria-roles-states-and-properties-3">WAI-ARIA Roles, States, and Properties</a>
                  </li>
                
            </ul>
          </aside>
          <div class="sidebar-right">
            <section class="widget" id="button"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2>
      
      <p>
        A <a class="role-reference" href="https://w3c.github.io/aria/#button">button</a> is a widget that enables users to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
        A common convention for informing users that a button launches a dialog is to append "…" (ellipsis) to the button label, e.g., "Save as…".
      </p>
      <p>In addition to the ordinary button widget, <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> supports 2 other types of buttons:</p>
      <ul>
        <li>
          Toggle button: A two-state button that can be either off (not pressed) or on (pressed).
          To tell assistive technologies that a button is a toggle button, specify a value for the attribute <a href="https://w3c.github.io/aria/#aria-pressed" class="state-reference">aria-pressed</a>.
          For example, a button labelled mute in an audio player could indicate that sound is muted by setting the pressed state true.
          <strong>Important:</strong> it is critical the label on a toggle does not change when its state changes.
          In this example, when the pressed state is true, the label remains "Mute" so a screen reader would say something like "Mute toggle button pressed".
          Alternatively, if the design were to call for the button label to change from "Mute" to "Unmute," the aria-pressed attribute would not be needed.
        </li>
        <li>Menu button: as described in the <a href="/patterns/menubutton/">menu button pattern</a>, a button is revealed to assistive technologies as a menu button if it has the property <a href="https://w3c.github.io/aria/#aria-haspopup" class="property-reference">aria-haspopup</a> set to either <code>menu</code> or <code>true</code>.</li>
      </ul>
      <div class="note" role="note" id="issue-container-generatedID"><div role="heading" class="note-title marker" id="h-note" aria-level="4"><span>Note</span></div><p class="">
        The types of actions performed by buttons are distinctly different from the function of a link (see <a href="/patterns/link/">link pattern</a>).
        It is important that both the appearance and role of a widget match the function it provides.
        Nevertheless, elements occasionally have the visual style of a link but perform the action of a button.
        In such cases, giving the element role <code>button</code> helps assistive technology users understand the function of the element.
        However, a better solution is to adjust the visual design so it matches the function and ARIA role.
      </p></div>

      <section class="notoc examples-section"><img alt="" src="/assets/img/button.svg" >
        <h2 id="examples" tabindex="-1">Examples</h2>
        <ul>
          <li><a href="../../index/button/button.html">Button Examples</a>: Examples of clickable HTML <code>div</code> and <code>span</code> elements made into accessible command and toggle buttons.</li>
          <li><a href="../../index/button/button_idl.html">Button Examples (IDL)</a>: Examples of clickable HTML <code>div</code> and <code>span</code> elements made into accessible command and toggle buttons. This example uses the <a class="specref" href="https://w3c.github.io/aria/#idl-interface">IDL Interface</a>.</li>
        </ul>
      </section>

      <section class="notoc">
        <h2 id="keyboard-interaction-3" tabindex="-1">Keyboard Interaction</h2>
        <p>When the button has focus:</p>
        <ul>
          <li>
            <kbd>Space</kbd>: Activates the button.
          </li>
          <li>
            <kbd>Enter</kbd>: Activates the button.
          </li>
          <li>
            Following button activation, focus is set depending on the type of action the button
            performs. For example:
            <ul>
              <li>
                If activating the button opens a dialog, the focus moves inside the dialog. (see
                <a href="/patterns/dialogmodal/">dialog pattern</a>)
              </li>
              <li>If activating the button closes a dialog, focus typically returns to the
                button that opened the dialog unless the function performed in the dialog context
                logically leads to a different element. For example, activating a cancel button in a
                dialog returns focus to the button that opened the dialog. However, if
                the dialog were confirming the action of deleting the page from which it was
                opened, the focus would logically move to a new context.</li>
              <li>If activating the button does not dismiss the current context, then focus
                typically remains on the button after activation, e.g., an Apply or
                Recalculate button.</li>
              <li>If the button action indicates a context change, such as move to next step in
                a wizard or add another search criteria, then it is often appropriate to move focus to
                the starting point for that action.</li>
              <li>
                If the button is activated with a shortcut key, the focus usually remains in
                the context from which the shortcut key was activated. For example, if <kbd>Alt
                  + U</kbd> were assigned to an "Up" button that moves the currently focused
                item in a list one position higher in the list, pressing <kbd>Alt + U</kbd> when the
                focus is in the list would not move the focus from the list.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section class="notoc">
        <h2 id="wai-aria-roles-states-and-properties-3" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2>
        <ul>
          <li>The button has role of <a class="role-reference" href="https://w3c.github.io/aria/#button">button</a>.</li>
          <li>
            The <code>button</code> has an accessible label.
            By default, the accessible name is computed from any text content inside the button element.
            However, it can also be provided with <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a> or <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a>.
          </li>
          <li>If a description of the button's function is present, the button element has <a href="https://w3c.github.io/aria/#aria-describedby" class="property-reference">aria-describedby</a> set to the ID of the element containing the description.</li>
          <li>When the action associated with a button is unavailable, the button has <a class="state-reference" href="https://w3c.github.io/aria/#aria-disabled">aria-disabled</a> set to <code>true</code>.</li>
          <li>
            If the button is a toggle button, it has an <a href="https://w3c.github.io/aria/#aria-pressed" class="state-reference">aria-pressed</a> state.
            When the button is toggled on, the value of this state is <code>true</code>, and when toggled off, the state is <code>false</code>.
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
