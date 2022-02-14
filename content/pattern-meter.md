---
# This is a generated file
title: "Meter"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /patterns/meter/

lang: en
last_updated: 2022-02-14
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
                    <a href="#example-4">Example</a>
                  </li>
                 
                  <li>
                    <a href="#keyboard-interaction-14">Keyboard Interaction</a>
                  </li>
                 
                  <li>
                    <a href="#wai-aria-roles-states-and-properties-15">WAI-ARIA Roles, States, and Properties</a>
                  </li>
                
            </ul>
          </aside>
          <div class="sidebar-right">
            <section class="widget" id="meter"><h2 id="about-this-pattern" tabindex="-1">About This Pattern</h2><div class="header-wrapper"></div>
      
      <p>
        A <a class="role-reference" href="https://w3c.github.io/aria/#meter">meter</a> is a graphical display of a numeric value that varies within a defined range.
        For example, a meter could be used to depict a device's current battery percentage or a car's fuel level.
      </p>
      <div class="note" role="note" id="issue-container-generatedID-19"><div role="heading" class="note-title marker" id="h-note-19" aria-level="4"><span>Note</span></div><ul class="">
        <li>A <code>meter</code> should not be used to represent a value like the current world population since it does not have a meaningful maximum limit.</li>
        <li>
          The <code>meter</code> should not be used to indicate progress, such as loading or percent completion of a task.
          To communicate progress, use the <a href="https://w3c.github.io/aria/#progressbar" class="role-reference">progressbar</a> role instead.
        </li>
      </ul></div>

      <section class="notoc examples-section"><img alt="" src="/assets/img/meter.svg" ><div class="header-wrapper"><h2 id="example-4" tabindex="-1">Example</h2></div>
        
        <p><a href="../../index/meter/meter.html">Meter Example</a></p>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="keyboard-interaction-14" tabindex="-1">Keyboard Interaction</h2></div>
        
        <p>Not applicable.</p>
      </section>

      <section class="notoc"><div class="header-wrapper"><h2 id="wai-aria-roles-states-and-properties-15" tabindex="-1"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Roles, States, and Properties</h2></div>
        
        <ul>
          <li>The element serving as the meter has a role of <a class="role-reference" href="https://w3c.github.io/aria/#meter">meter</a>.</li>
          <li>The meter has <a class="property-reference" href="https://w3c.github.io/aria/#aria-valuenow">aria-valuenow</a> set to a decimal value between <code>aria-valuemin</code> and <code>aria-valuemax</code> representing the current value of the meter.</li>
          <li>The meter has <a class="property-reference" href="https://w3c.github.io/aria/#aria-valuemin">aria-valuemin</a> set to a decimal value less than <code>aria-valuemax</code>.</li>
          <li>The meter has <a class="property-reference" href="https://w3c.github.io/aria/#aria-valuemax">aria-valuemax</a> set to a decimal value greater than <code>aria-valuemin</code>.</li>
          <li>
            Assistive technologies often present <code>aria-valuenow</code> as a percentage.
            If conveying the value of the meter only in terms of a percentage would not be user friendly, the <a class="property-reference" href="https://w3c.github.io/aria/#aria-valuetext">aria-valuetext</a> property is set to a string that makes the meter value understandable.
            For example, a battery meter value might be conveyed as <code>aria-valuetext="50% (6 hours) remaining"</code>.
          </li>
          <li>If the meter has a visible label, it is referenced by <a href="https://w3c.github.io/aria/#aria-labelledby" class="property-reference">aria-labelledby</a> on the element with role <code>meter</code>. Otherwise, the element with role <code>meter</code> has a label provided by <a href="https://w3c.github.io/aria/#aria-label" class="property-reference">aria-label</a>.</li>
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
