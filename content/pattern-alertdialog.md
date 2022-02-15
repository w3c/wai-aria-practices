---
# This is a generated file
title: "Alert and Message Dialogs"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /patterns/alertdialog/

lang: en
last_updated: 2022-02-15
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
                    <a href="#example-1">Example</a>
                  </li>
                 
                  <li>
                    <a href="#keyboard-interaction-1">Keyboard Interaction</a>
                  </li>
                 
                  <li>
                    <a href="#wai-aria-roles-states-and-properties-1">WAI-ARIA Roles, States, and Properties</a>
                  </li>
                
            </ul>
          </aside>
          <div class="sidebar-right">
            <section class="widget" id="alertdialog"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2><div class="header-wrapper"></div>
      
      <p>
        An alert dialog  is a <a href="/patterns/dialogmodal/">modal dialog</a> that interrupts the user's workflow to communicate an important message and acquire a response.
        Examples include action confirmation prompts and error message confirmations.
        The <a href="https://w3c.github.io/aria/#alertdialog" class="role-reference">alertdialog</a> role
        enables assistive technologies and browsers to distinguish alert dialogs from other dialogs
        so they have the option of giving alert dialogs special treatment, such as playing a system alert sound.
      </p>

      <section class="notoc examples-section"><img alt="" src="/assets/img/alertdialog.svg" ><div class="header-wrapper"><h2 id="example-1" tabindex="-1">Example</h2></div>
        
        <p><a href="../../index/dialog-modal/alertdialog.html">Alert Dialog Example</a>: A confirmation prompt that demonstrates an alert dialog.</p>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="keyboard-interaction-1" tabindex="-1">Keyboard Interaction</h2></div>
        
        <p>See the keyboard interaction section for the <a href="/patterns/dialogmodal/">modal dialog pattern</a>.</p>
      </section>
      <section class="notoc"><div class="header-wrapper"><h2 id="wai-aria-roles-states-and-properties-1" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2></div>
          
          <ul>
              <li>
                  The element that contains all elements of the dialog, including the alert
                  message and any dialog buttons, has role
                  <a class="role-reference" href="https://w3c.github.io/aria/#alertdialog">alertdialog</a>.
              </li>
              <li>
                  The element with role <code>alertdialog</code> has either:
                  <ul>
                      <li>
                          A value for
                          <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a>
                          that refers to the element containing the title of the dialog if the
                          dialog has a visible label.
                      </li>
                      <li>
                          A value for
                          <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a>
                          if the dialog does not have a visible label.
                      </li>
                  </ul>
              </li>
              <li>
                  The element with role <code>alertdialog</code> has a value set for
                  <a href="https://w3c.github.io/aria/#aria-describedby" class="property-reference">aria-describedby</a>
                  that refers to the element containing the alert message.
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
