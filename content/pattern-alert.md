---
# This is a generated file
title: "Alert"
ref: /WAI/ARIA/APG/patterns/alert/

github:
  repository: w3c/aria-practices
  branch: main
  path: aria-practices.html
feedbackmail: public-aria-practices@w3.org
permalink: /WAI/ARIA/APG/patterns/alert/

sidebar: true

footer: ""

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---


<link rel="stylesheet" href="/content-assets/wai-aria-practices/styles.css">
<!-- Code highlighting styles -->
<link rel="stylesheet" href="/WAI/ARIA/APG/index/css/github.css">

<script>
const addBodyClass = "pattern-page";
const enableSidebar = true;
if (addBodyClass) document.body.classList.add(addBodyClass);
if (enableSidebar) document.body.classList.add('has-sidebar');
</script>
    
<div>
<section class="widget" id="alert"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2><div class="header-wrapper"></div>
      
      <p>
        An <a class="role-reference" href="https://w3c.github.io/aria/#alert">alert</a> is an element that displays a brief, important message in a way that attracts the user's attention without interrupting the user's task.
        Dynamically rendered alerts are automatically announced by most screen readers, and in some operating systems, they may trigger an alert sound.
        It is important to note that, at this time, screen readers do not inform users of alerts that are present on the page before page load completes.
      </p>
      <p>
        Because alerts are intended to provide important and potentially time-sensitive information without interfering with the user's ability to continue working,
        it is crucial they do not affect keyboard focus.
        The <a href="/WAI/ARIA/APG/patterns/alertdialog/">alert dialog</a> is designed for situations where interrupting work flow is necessary.
      </p>
      <p>
        It is also important to avoid designing alerts that disappear automatically.
        An alert that disappears too quickly can lead to failure to meet
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-no-exceptions.html">WCAG 2.0 success criterion 2.2.3</a>.
        Another critical design consideration is the frequency of interruption caused by alerts.
        Frequent interruptions inhibit usability for people with visual and cognitive disabilities, which makes meeting the requirements of
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html">WCAG 2.0 success criterion 2.2.4</a>
        more difficult.
      </p>

      <section class="notoc examples-section"><img alt="" 
            src="/content-assets/wai-aria-practices/img/alert.svg"
          ><div class="header-wrapper"><h2 id="example-0" tabindex="-1">Example</h2></div>
        
        <p><a href="../../index/alert/alert.html">Alert Example</a></p>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="keyboard-interaction-0" tabindex="-1">Keyboard Interaction</h2></div>
        
        <p>Not applicable.</p>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="wai-aria-roles-states-and-properties-0" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2></div>
        
        <p>The widget has a role of <a class="role-reference" href="https://w3c.github.io/aria/#alert">alert</a>.</p>
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
