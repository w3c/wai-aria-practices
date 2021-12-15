---
# This is a generated file
title: "Communicating Value and Limits for Range Widgets"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /fundamentals/range-related-properties/

lang: en
last_updated: 2021-12-15
---


<link rel="stylesheet" href="/assets/styles.css">
<!-- Code highlighting styles -->
<link rel="stylesheet" href="/index/css/github.css">

<script>
const addBodyClass = "fundamental-page";
if (addBodyClass) {
  document.body.classList.add(addBodyClass);
}
</script>
    
<div>

        <div class="sidebar-container">
          <aside class="sidebar-left">
            <h2 class="sidebar-headline">Table of Contents</h2>
            <ul class="sidebar-list">
              
                  <li>
                    <a href="#x8-1-using-aria-valuemin-aria-valuemax-and-aria-valuenow">Using <code>aria-valuemin</code>, <code>aria-valuemax</code> and <code>aria-valuenow</code></a>
                  </li>
                 
                  <li>
                    <a href="#x8-2-using-aria-valuetext">Using <code>aria-valuetext</code></a>
                  </li>
                 
                  <li>
                    <a href="#x8-3-range-properties-with-meter">Range properties with meter</a>
                  </li>
                 
                  <li>
                    <a href="#x8-4-range-properties-with-progress-bars">Range properties with progress bars</a>
                  </li>
                 
                  <li>
                    <a href="#x8-5-range-properties-with-scrollbars">Range properties with scrollbars</a>
                  </li>
                 
                  <li>
                    <a href="#x8-6-range-properties-with-sliders">Range properties with sliders</a>
                  </li>
                 
                  <li>
                    <a href="#x8-7-range-properties-with-spin-buttons">Range properties with spin buttons</a>
                  </li>
                
            </ul>
          </aside>
          <div class="sidebar-right">
            <section id="range_related_properties">
    <h2 id="x8-communicating-value-and-limits-for-range-widgets">Communicating Value and Limits for Range Widgets</h2>
    <p>
      ARIA defines the following roles as range widgets, which means they communicate a value that is typically numeric and constrained to defined limits.
    </p>
    <ul>
      <li><code>meter</code></li>
      <li><code>progressbar</code></li>
      <li><code>scrollbar</code></li>
      <li><code>separator</code> (if focusable)</li>
      <li><code>slider</code></li>
      <li><code>spinbutton</code></li>
    </ul>
    <p>
      For example, a spin button for choosing a day within the month of January would allow integer values that range from 1 to 31.
      In some cases, the value is represented numerically, but is not presented as a number to users.
      For instance, a spin button for choosing a day of the week could support values from 1 to 7 but they could be presented to the user as day names, e.g., "Monday", "Tuesday", etc.
    </p>
    <p>
      This section describes considerations for using the following four properties that communicate characteristics of a range widget:
    </p>
    <div class="table-wrap"><table>
      <thead>
        <tr>
          <th>Property</th>
          <th>Definition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th><code>aria-valuemin</code></th>
          <td>Defines the minimum value allowed by a range widget.</td>
        </tr>
        <tr>
          <th><code>aria-valuemax</code></th>
          <td>Defines the maximum value allowed by a range widget.</td>
        </tr>
        <tr>
          <th><code>aria-valuenow</code></th>
          <td>Defines the current value of a range widget. This value is a number greater than or equal to <code>aria-valuemin</code> and less than or equal to <code>aria-valuemax</code> (if they are specified).</td>
        </tr>
        <tr>
          <th><code>aria-valuetext</code></th>
          <td>If a numeric value is not sufficiently descriptive, this property can define a text description of the current value of a range widget.</td>
        </tr>
      </tbody>
    </table></div>

    <section id="range_related_properties_using_aria-valuemin_aria-valuemax_and_aria-valuenow">
      <h3 id="x8-1-using-aria-valuemin-aria-valuemax-and-aria-valuenow">Using <code>aria-valuemin</code>, <code>aria-valuemax</code> and <code>aria-valuenow</code></h3>
      <p>
        When the value of a range widget is constrained to known limits, the <code>aria-valuemin</code> and <code>aria-valuemax</code> properties are used to inform assistive technologies of the minimum and maximum values of the range.
        For some widgets, assistive technologies use this information to present the current value as a percentage.
        When using these properties, set <code>aria-valuemin</code> to the lowest value allowed for the widget and <code>aria-valuemax</code> to the highest allowed value.
        If values for <code>aria-valuemin</code> and <code>aria-valuemax</code> are not set, default values are exposed to assistive technologies unless the widget is a <code>spinbutton</code>, which is the only range widget that does not have default limits.
      </p>
      <p>
        The <code>aria-valuenow</code> property is used to inform assistive technologies of the current value of a range widget.
        Set <code>aria-valuenow</code> to the current value of the widget, ensuring the value of <code>aria-valuenow</code> falls within the range defined by <code>aria-valuemin</code> and <code>aria-valuemax</code>.
        If the current value of a <code>progressbar</code> or <code>spinbutton</code> is indeterminate or unknown, omit the <code>aria-valuenow</code> property.
        The <code>aria-valuenow</code> property is required for the <code>meter</code>, <code>scrollbar</code>, <code>separator</code> (if the element is focusable), and <code>slider</code> roles.
      </p>
      <p>
        The range widget roles have the following default values and requirements for <code>aria-valuemin</code>, <code>aria-valuemax</code> and <code>aria-valuenow</code>.
      </p>
      <div class="table-wrap"><table>
        <thead>

          <tr>
            <th scope="col">Role</th>
            <th scope="col"><code>aria-valuemin</code><br>(default)</th>
            <th scope="col"><code>aria-valuemax</code><br>(default)</th>
            <th scope="col"><code>aria-valuemin</code><br>(required)</th>
            <th scope="col"><code>aria-valuemax</code><br>(required)</th>
            <th scope="col"><code>aria-valuenow</code><br>(required)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><code>meter</code></th>
            <td>0</td>
            <td>100</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <th scope="row"><code>progressbar</code></th>
            <td>0</td>
            <td>100</td>
            <td>No</td>
            <td>No</td>
            <td>No</td>
          </tr>
          <tr>
            <th scope="row"><code>scrollbar</code></th>
            <td>0</td>
            <td>100</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <th scope="row"><code>separator</code> <small>(if focusable)</small></th>
            <td>0</td>
            <td>100</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <th scope="row"><code>slider</code></th>
            <td>0</td>
            <td>100</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <th scope="row"><code>spinbutton</code></th>
            <td>None</td>
            <td>None</td>
            <td>No</td>
            <td>No</td>
            <td>No</td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section id="range_related_properties_using_aria-valuetext">
      <h3 id="x8-2-using-aria-valuetext">Using <code>aria-valuetext</code></h3>

      <p>
        When the element's values are contained within a range but those values are not numeric (such as "small", "medium" and "large"),
        or they are numeric but there is value in communicating more information than just a number,
        <code>aria-valuetext</code> is used to surface the text value to assistive technologies.
        Only use <code>aria-valuetext</code> when <code>aria-valuenow</code> is not sufficiently meaningful for users because using <code>aria-valuetext</code> will prevent assistive technologies from communicating <code>aria-valuenow</code>.
      </p>

      <div class="example">
        <p>
          For example, for a battery indicator, it would be useful to know how many minutes are remaining, in addition to the percentage of charge remaining.
        </p>

        <pre><code aria-busy="false" class="hljs xml">
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"battery-label"</span>&gt;</span>Battery<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"meter"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"battery-label"</span>
    <span class="hljs-attr">aria-valuenow</span>=<span class="hljs-string">"5"</span>
    <span class="hljs-attr">aria-valuetext</span>=<span class="hljs-string">"5%, 18 minutes remaining."</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        </code></pre>
      </div>
    </section>

    <section id="range_related_properties_meter_role">
      <h3 id="x8-3-range-properties-with-meter">Range properties with meter</h3>
      <p>
        The <code>aria-valuemin</code> and <code>aria-valuemax</code> properties only need to be set for elements with role <code>meter</code> if the meter's minimum value is not 0 or its maximum value is not 100.
        It is necessary, however, to always specify a value for <code>aria-valuenow</code> and to ensure the value is greater than or equal to the minimum allowed value and less than or equal to the maximum allowed value.
        A detailed description of the <code>meter</code> role is in the <a href="/patterns/meter/">meter design pattern</a>.</p>

      <p>This example of a meter shows the current Central Processing Unit (CPU) usage. </p>

      <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"cpu_usage_label"</span>&gt;</span>CPU usage<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-comment">&lt;!-- The CPU usage uses the default values of 0 and 100 for aria-valuemin and aria-valuemax --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"meter"</span>
      <span class="hljs-attr">aria-valuenow</span>=<span class="hljs-string">"90"</span>
      <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"cpu_usage_label"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>

      <p>
        The <code>aria-valuetext</code> property can be set to a string that makes the meter value understandable. For example, a CPU usage meter value might be conveyed as <code>aria-valuetext="90% of CPU is being used"</code>.
      </p>
      <p>Here is another example of a meter that has a range different from the default of 0 for <code>aria-valuemin</code> and 100 for <code>aria-valuemax</code>.</p>

      <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"ph_alkaline_meter_label"</span>&gt;</span>Alkaline pH(Power of Hydrogen) Level<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"meter"</span>
        <span class="hljs-attr">aria-valuenow</span>=<span class="hljs-string">"9"</span>
        <span class="hljs-attr">aria-valuemin</span>=<span class="hljs-string">"7"</span>
        <span class="hljs-attr">aria-valuemax</span>=<span class="hljs-string">"14"</span>
        <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"ph_alkaline_meter_label"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
    </section>
    <section id="range_related_properties_progressbar_role">
      <h3 id="x8-4-range-properties-with-progress-bars">Range properties with progress bars</h3>

      <p>
        The <code>aria-valuemin</code> and <code>aria-valuemax</code> properties only need to be set for the <code>progressbar</code> role when the progress bar's minimum is not 0 or the maximum value is not 100.
        The aria-valuenow property needs to be set for a <code>progressbar</code> if its value is known (e.g. not indeterminate).
        If the <code>aria-valuenow</code> property is set, the author needs to make sure it is within the minimum and maximum values.
      </p>
      <p>Following is an example of a progress bar represented by an SVG.</p>

      <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"loadlabel"</span>&gt;</span>Loading:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- The progress bar uses the default values of 0 and 100 for aria-valuemin and aria-valuemax --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"progressbar"</span>
        <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"loadlabel"</span>
        <span class="hljs-attr">aria-valuenow</span>=<span class="hljs-string">"33"</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">svg</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"100"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"10"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">rect</span> <span class="hljs-attr">x</span>=<span class="hljs-string">"0"</span> <span class="hljs-attr">y</span>=<span class="hljs-string">"0"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"10"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"100"</span> <span class="hljs-attr">stroke</span>=<span class="hljs-string">"black"</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">"none"</span>/&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">rect</span> <span class="hljs-attr">x</span>=<span class="hljs-string">"0"</span> <span class="hljs-attr">y</span>=<span class="hljs-string">"0"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"10"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"33"</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">"green"</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">svg</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
      <p>This progress bar can also be made using the native HTML <code>progress</code> element.</p>

      <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"loadstatus"</span>&gt;</span>Loading:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">progress</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"loadstatus"</span> <span class="hljs-attr">max</span>=<span class="hljs-string">"100"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"33"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">progress</span>&gt;</span>
      </code></pre>

      <p>To represent an indeterminate progress bar where the value range is unknown, omit the <code>aria-valuenow</code> attribute.</p>

      <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"progressbar"</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"spinner.gif"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Loading..."</span>&gt;</span></code></pre>
    </section>

    <section id="range_related_properties_scrollbar_role">
      <h3 id="x8-5-range-properties-with-scrollbars">Range properties with scrollbars</h3>

      <p>
        The <code>aria-valuemin</code> and <code>aria-valuemax</code> properties only need to be set for the <code>scrollbar</code> role when it's minimum value is not 0 or the maximum value is not 100.   The <code>aria-valuenow</code> property is required for <code>scrollbar</code> and the author needs to make sure it is within the minimum and maximum values.
      </p>
      <p>
        <code>aria-valuenow</code> will generally be exposed as a percentage between <code>aria-valuemin</code> and <code>aria-valuemax</code> calculated by assistive technologies.
      </p>

      <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"pi-label"</span>&gt;</span>Pi<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"pi"</span>&gt;</span>
3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"rail"</span>&gt;</span>
<span class="hljs-comment">&lt;!-- The scrollbar uses the default values of 0 and 100 for aria-valuemin and aria-valuemax --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">"thumb"</span>
    <span class="hljs-attr">role</span>=<span class="hljs-string">"scrollbar"</span>
    <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"pi-label"</span>
    <span class="hljs-attr">aria-controls</span>=<span class="hljs-string">"pi"</span>
    <span class="hljs-attr">aria-orientation</span>=<span class="hljs-string">"horizontal"</span>
    <span class="hljs-attr">aria-valuenow</span>=<span class="hljs-string">"25"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>


    </section>

    <section id="range_related_properties_slider_role">
      <h3 id="x8-6-range-properties-with-sliders">Range properties with sliders</h3>
      <p>
        The <code>aria-valuemin</code> and <code>aria-valuemax</code> properties only need to be set for the <code>slider</code> role when the slider's minimum is not 0 or the maximum value is not 100.
        The <code>aria-valuenow</code> property is required for <code>slider</code> role and the author needs to make sure it is within the minimum and maximum values.
        A detailed description of the <code>slider</code> role can be found in the <a href="/patterns/slider/">slider design pattern</a> and <a href="/patterns/slidertwothumb/">slider (multi-thumb) design pattern</a>.
      </p>
      <p>
        The following example shows a temperature controller.
        In this example, <code>aria-valuenow</code> is meaningful to the user, and so <code>aria-valuetext</code> is not used.
      </p>
      <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"rail"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"thumb"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"slider"</span> <span class="hljs-attr">aria-valuemin</span>=<span class="hljs-string">"50"</span> <span class="hljs-attr">aria-valuenow</span>=<span class="hljs-string">"68"</span> <span class="hljs-attr">aria-valuemax</span>=<span class="hljs-string">"100"</span>
       <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Temperature (F)"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"0"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
      <p>The slider example above can be made using the HTML <code>&lt;input type="range"&gt;</code> element.</p>
      <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"range"</span> <span class="hljs-attr">min</span>=<span class="hljs-string">"50"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"68"</span> <span class="hljs-attr">max</span>=<span class="hljs-string">"100"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Temperature (F)"</span>&gt;</span>
      </code></pre><p>The following example is a fan control. The <code>aria-valuenow</code> value is "1", which is not meaningful to the user. The <code>aria-valuetext</code> property is used so that assistive technology will surface its value ("low") instead.</p>
      <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"rail"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"thumb"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"slider"</span> <span class="hljs-attr">aria-valuemin</span>=<span class="hljs-string">"0"</span> <span class="hljs-attr">aria-valuenow</span>=<span class="hljs-string">"1"</span> <span class="hljs-attr">aria-valuemax</span>=<span class="hljs-string">"3"</span>
       <span class="hljs-attr">aria-valuetext</span>=<span class="hljs-string">"low"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Fan speed"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"0"</span> &gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"value"</span>&gt;</span> Off <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"value"</span>&gt;</span> Low <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"value"</span>&gt;</span> Medium <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"value"</span>&gt;</span> High <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
    </section>

    <section id="range_related_properties_spinbutton_role">
      <h3 id="x8-7-range-properties-with-spin-buttons">Range properties with spin buttons</h3>

      <p>
        The <code>aria-valuemin</code> and <code>aria-valuemax</code> properties are used only when a <code>spinbutton</code> has a defined range.
        They do not have default values, so if they are not specified, range limits will not be exposed to assistive technologies.
        Similarly, the <code>aria-valuenow</code> property is set only when a <code>spinbutton</code> has a value.
        If it is not set, a value is not exposed to assistive technologies for the <code>spinbutton</code>.
        <code>aria-valuetext</code> can be used when appropriate.
        A detailed description of the <code>spinbutton</code> role can be found in the <a href="/patterns/spinbutton/">spinbutton design pattern</a>.
      </p>

      <p>The following example sets the price of paperclips in cents.</p>

      <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"spinbutton"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"price-label"</span> <span class="hljs-attr">aria-valuenow</span>=<span class="hljs-string">"50"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"0"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"lower-price"</span>&gt;</span>Lower<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"raise-price"</span>&gt;</span>Raise<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"price-label"</span>&gt;</span>Price per paperclip: $<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"price"</span>&gt;</span>0.50<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>

      <p>If there are minimum and maximum allowed values, set the <code>aria-valuemin</code> and <code>aria-valuemax</code> properties.</p>

      <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"spinbutton"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"price-label"</span>
      <span class="hljs-attr">aria-valuemin</span>=<span class="hljs-string">"1"</span> <span class="hljs-attr">aria-valuenow</span>=<span class="hljs-string">"50"</span> <span class="hljs-attr">aria-valuemax</span>=<span class="hljs-string">"200"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"0"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"lower-price"</span>&gt;</span>Lower<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"raise-price"</span>&gt;</span>Raise<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"price-label"</span>&gt;</span>Price per paperclip: $<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"price"</span>&gt;</span>0.50<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>

      <p>The spin button example above can be made using the native HTML <code>&lt;input type="number"&gt;</code> element.</p>

      <pre><code aria-busy="false" class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Price per paperclip: $<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"number"</span> <span class="hljs-attr">min</span>=<span class="hljs-string">"0.01"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"0.5"</span> <span class="hljs-attr">max</span>=<span class="hljs-string">"2"</span> <span class="hljs-attr">step</span>=<span class="hljs-string">"0.01"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span></code></pre>
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
