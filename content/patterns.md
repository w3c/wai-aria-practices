---
# This is a generated file
title: "Patterns"
ref: /aria/apg/patterns/

github:
  repository: w3c/aria-practices
  branch: main
  path: aria-practices.html
feedbackmail: public-aria-practices@w3.org
permalink: /aria/apg/patterns/

sidebar: false

footer: ""

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---


<link 
  rel="stylesheet"
  href="{{ '/content-assets/wai-aria-practices/styles.css' | relative_url }}"
>
<!-- Code highlighting styles -->
<link 
  rel="stylesheet"
  href="{{ '/aria/apg/example-index/css/github.css' | relative_url }}"
>

<div>

        {% include read-this-first.html %}
        <ul class="tiles">
          
                <li class="tile tile-accordion">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/accordion/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/accordion.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Accordion (Sections With Show/Hide Functionality)</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
        An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content.</div>
                </li>
               
                <li class="tile tile-alert">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/alert/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/alert.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Alert</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
        An alert is an element that displays a brief, important message in a way that attracts the user's attention without interrupting the user's task.</div>
                </li>
               
                <li class="tile tile-alertdialog">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/alertdialog/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/alertdialog.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Alert and Message Dialogs</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
        An alert dialog  is a modal dialog that interrupts the user's workflow to communicate an important message and acquire a response.</div>
                </li>
               
                <li class="tile tile-breadcrumb">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/breadcrumb/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/breadcrumb.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Breadcrumb</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
        A breadcrumb trail consists of a list of links to the parent pages of the current page in hierarchical order.</div>
                </li>
               
                <li class="tile tile-button">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/button/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/button.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Button</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
        A button is a widget that enables users to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.</div>
                </li>
               
                <li class="tile tile-carousel">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/carousel/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/carousel.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Carousel (Slide Show or Image Rotator)</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
        A carousel presents a set of items, referred to as slides, by sequentially displaying a subset of one or more slides.</div>
                </li>
               
                <li class="tile tile-checkbox">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/checkbox/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/checkbox.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Checkbox</span>
                    </a>
                  </h2>
                  <div class="tile-introduction"><!-- The following is manually overridden by the pre-build script -->
WAI-ARIA supports two types of checkbox widgets: dual-state allows the user to toggle between two  choices -- checked and not checked -- and tri-state supports an additional third state known as partially checked.</div>
                </li>
               
                <li class="tile tile-combobox">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/combobox/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/combobox.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Combobox</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
        A combobox is an input widget with an associated popup that enables users to select a value for the combobox from a collection of possible values.</div>
                </li>
               
                <li class="tile tile-dialogmodal">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/dialogmodal/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/dialogmodal.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Dialog (Modal)</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
        A dialog is a window overlaid on either the primary window or another dialog window.</div>
                </li>
               
                <li class="tile tile-disclosure">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/disclosure/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/disclosure.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Disclosure (Show/Hide)</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
        A disclosure is a widget that enables content to be either collapsed (hidden) or expanded (visible).</div>
                </li>
               
                <li class="tile tile-feed">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/feed/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/feed.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Feed</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
        A feed is a section of a page that automatically loads new sections of content as the user scrolls.</div>
                </li>
               
                  <li class="tile tile-landmarks">
                    <h2 class="tile-name">
                      <a 
                        href="{{ '/aria/apg/example-index/landmarks/index.html' | relative_url }}"
                      >
                        <img 
                          src="{{ '/content-images/wai-aria-practices/img/landmarks.svg' | relative_url }}" 
                          alt=""
                        >
                        <span>Landmarks</span>
                      </a>
                    </h2>
                    <div class="tile-introduction">
                      Landmarks provide a powerful way to identify the 
                      organization and structure of a web page.
                    </div>
                  </li>
                 
                <li class="tile tile-link">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/link/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/link.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Link</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
        A link widget provides an interactive reference to a resource.</div>
                </li>
               
                <li class="tile tile-listbox">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/listbox/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/listbox.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Listbox</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
        A listbox widget presents a list of options and allows a user to select one or more of them.</div>
                </li>
               
                <li class="tile tile-menu">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/menu/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/menu.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Menu or Menu bar</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
        A menu is a widget that offers a list of choices to the user, such as a set of actions or functions.</div>
                </li>
               
                <li class="tile tile-menubutton">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/menubutton/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/menubutton.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Menu Button</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">A menu button is a button that opens a menu.</div>
                </li>
               
                <li class="tile tile-meter">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/meter/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/meter.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Meter</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
        A meter is a graphical display of a numeric value that varies within a defined range.</div>
                </li>
               
                <li class="tile tile-radiobutton">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/radiobutton/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/radiobutton.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Radio Group</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
        A radio group is a set of checkable buttons, known as radio buttons, where no more than one of
        the buttons can be checked at a time.</div>
                </li>
               
                <li class="tile tile-slider">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/slider/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/slider.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Slider</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
        A slider is an input where the user selects a value from within a given range.</div>
                </li>
               
                <li class="tile tile-slidertwothumb">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/slidertwothumb/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/slidertwothumb.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Slider (Multi-Thumb)</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
        A multi-thumb slider is a slider
        with two or more thumbs that each set a value in a group of related values.</div>
                </li>
               
                <li class="tile tile-spinbutton">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/spinbutton/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/spinbutton.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Spinbutton</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
        A spinbutton is an input widget that restricts its value to a set or range of discrete values.</div>
                </li>
               
                <li class="tile tile-switch">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/switch/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/switch.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Switch</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
        A switch is an input widget that allows users to choose one of two values: <q>on</q> or <q>off</q>.</div>
                </li>
               
                <li class="tile tile-table">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/table/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/table.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Table</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
        Like an HTML <code>table</code> element, a <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> table is a static tabular structure containing one or more rows that each contain one or more cells; it is not an interactive widget.</div>
                </li>
               
                <li class="tile tile-tabpanel">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/tabpanel/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/tabpanel.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Tabs</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
        Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time.</div>
                </li>
               
                <li class="tile tile-toolbar">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/toolbar/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/toolbar.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Toolbar</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">A toolbar is a container for grouping a set of controls, such as buttons, menubuttons, or checkboxes.</div>
                </li>
               
                <li class="tile tile-tooltip">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/tooltip/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/tooltip.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Tooltip Widget</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
        A tooltip is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.</div>
                </li>
               
                <li class="tile tile-treeview">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/treeview/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/treeview.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Tree View</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
        A tree view widget presents a hierarchical list.</div>
                </li>
               
                <li class="tile tile-treegrid">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/treegrid/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/treegrid.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Treegrid</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
          A treegrid widget presents a hierarchical data grid consisting of tabular information that is editable or interactive.</div>
                </li>
               
                <li class="tile tile-windowsplitter">
                  <h2 class="tile-name">
                    <a href="{{ '/aria/apg/patterns/windowsplitter/' | relative_url }}">
                      <img 
                        src="{{ '/content-images/wai-aria-practices/img/windowsplitter.svg' | relative_url }}" 
                        alt=""
                      >
                      <span>Window Splitter</span>
                    </a>
                  </h2>
                  <div class="tile-introduction">
        A window splitter is a moveable separator between two sections, or panes, of a window that enables users to change the relative size of the panes.</div>
                </li>
              
        </ul>
      
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
<script 
  src="{{ '/content-assets/wai-aria-practices/skipto.min.js' | relative_url }}"
></script>
