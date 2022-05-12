---
# This is a generated file
title: "Alert and Message Dialogs"
ref: /WAI/ARIA/APG/patterns/alertdialog/

github:
  repository: w3c/aria-practices
  branch: main
  path: aria-practices.html
feedbackmail: public-aria-practices@w3.org
permalink: /WAI/ARIA/APG/patterns/alertdialog/

sidebar: true

footer: ""

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---


<link rel="stylesheet" href="/content-assets/wai-aria-practices/styles.css">
<!-- Code highlighting styles -->
<link rel="stylesheet" href="/WAI/ARIA/APG/example-index/css/github.css">

<script>
const addBodyClass = "pattern-page";
const enableSidebar = true;
if (addBodyClass) document.body.classList.add(addBodyClass);
if (enableSidebar) document.body.classList.add('has-sidebar');
</script>
    
<div>
<section class="widget" id="alertdialog"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2><div class="header-wrapper"></div>
      
      <p>
        An alert dialog  is a <a href="/WAI/ARIA/APG/patterns/dialogmodal/">modal dialog</a> that interrupts the user's workflow to communicate an important message and acquire a response.
        Examples include action confirmation prompts and error message confirmations.
        The <a href="https://w3c.github.io/aria/#alertdialog" class="role-reference">alertdialog</a> role
        enables assistive technologies and browsers to distinguish alert dialogs from other dialogs
        so they have the option of giving alert dialogs special treatment, such as playing a system alert sound.
      </p>

      <section class="notoc examples-section"><img alt="" 
            src="/content-assets/wai-aria-practices/img/alertdialog.svg"
          ><div class="header-wrapper"><h2 id="example-1" tabindex="-1">Example</h2></div>
        
        <p><a href="../../example-index/dialog-modal/alertdialog.html">Alert Dialog Example</a>: A confirmation prompt that demonstrates an alert dialog.</p>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="keyboard-interaction-1" tabindex="-1">Keyboard Interaction</h2></div>
        
        <p>See the keyboard interaction section for the <a href="/WAI/ARIA/APG/patterns/dialogmodal/">modal dialog pattern</a>.</p>
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
<script src="/content-assets/wai-aria-practices/skipto.min.js"></script>
