---
# This file was generated by scripts/pre-build/library/formatForJekyll.js
title: "Contributing to the APG"
ref: /ARIA/apg/about/contributing/

github:
  repository: w3c/aria-practices
  branch: main
  path: content/about/contributing/contributing.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/about/contributing/

sidebar: true



# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---
<meta charset="UTF-8" />
<meta content="width=device-width, initial-scale=1.0" name="viewport" />
<title>Contributing to the APG</title>

<script src="../../../../content-assets/wai-aria-practices/shared/js/highlight.pack.js"></script>
<script src="../../../../content-assets/wai-aria-practices/shared/js/app.js"></script>


<link 
  rel="stylesheet"
  href="{{ '/content-assets/wai-aria-practices/styles.css' | relative_url }}"
>
<!-- Code highlighting styles -->
<link 
  rel="stylesheet"
  href="{{ '/content-assets/wai-aria-practices/shared/css/github.css' | relative_url }}"
>

<script>
const addBodyClass = undefined;
const enableSidebar = true;
if (addBodyClass) document.body.classList.add(addBodyClass);
if (enableSidebar) document.body.classList.add('has-sidebar');
</script>
    

<script>
    const parentPage = window.location.pathname.match(
      /\/(patterns|practices|about)\//
    )?.[1];
    if (parentPage) {
      const parentHref = 'a[href*="' + parentPage + '"]';
      document.querySelector(parentHref).classList.add('active');
    }
  </script>
<div>

  <div>
    

    <section id="introduction">
      <h2>Introduction  </h2>
      <p>
        Continuous improvement to the utility and quality of the ARIA Authoring Practices Guide (APG) depends on broad community input and participation.
        Anyone may contribute feedback, suggestions, or code via the channels described below.
        However, if you would like to contribute regularly, please consider
        <a href="#joining-the-authoring-practices-task-force">joining the Authoring Practices Task Force</a>.
        As a task force participant, you and your organization have greater influence over APG development, and are listed as contributors where appropriate.
      </p>
    </section>

    <section id="providing-feedback">
      <h2>Providing feedback</h2>
      <p>
        The APG provides two public feedback channels -- GitHub and email.
        Links to both are provided at the bottom of every page in the APG.
      </p>
      <p>
        GitHub issues are the best way to ask a question, make a suggestion,  or report a problem.
        Before creating a new issue, it is helpful if you first review existing issues to determine whether there is an issue addressing the same concern.
        If so, please comment on that issue rather than raising another.
        If the concern you would like addressed is related to an example implementation of an APG pattern, at the bottom of the page, next to the revision date, there is a link named "Related Issues".
        That link opens a GitHub project containing all issues associated with the relevant pattern and its examples.
      </p>
      <p>
        <a href="https://github.com/w3c/aria-practices/issues">View and create APG issues on GitHub.</a>
      </p>
      <p>
        The task force also uses the aria-practices public mailing list for email discussion.
        Meeting announcements, agendas, and links to minutes are sent to the mailing list.
        While GitHub issues are the preferred place to discuss APG content, the mailing list is available to anyone who would prefer to communicate by
        <a href="mailto:public-aria-practices@w3.org">sending email to the ARIA Authoring Practices public mailing list</a>.
      </p>
      <p>
        <a href="https://lists.w3.org/Archives/Public/public-aria-practices/">View the aria-practices mailing list archive</a>.
      </p>
    </section>
    
    <section id="Making-improvements-to-documentation-or-code">
      <h2>Making improvements to documentation or code</h2>
      <p>
        If you would like to help improve the APG with enhancements or fixes to documentation or code, please adhere to the following procedure.
      </p>
      <ol>
        <li>Get your development environment ready:
          <ul>
            <li>
              Install and configure linters as described in the
              <a href="https://github.com/w3c/aria-practices#code-conformance">code conformance section of the repository readme</a>.
            </li>
            <li>
              Read our wiki page about
              <a href="https://github.com/w3c/aria-practices/wiki/Submitting-Pull-Requests">preparing and submitting pull requests</a>.
            </li>
          </ul>
        </li>
        <li>Comment in an existing issue or raise a new issue, expressing your willingness to help and briefly summarizing the nature of your proposed resolution.</li>
        <li>An editor will confirm there are no conflicting plans and, if needed, provide guidance.</li>
        <li>Do some fabulous work and submit a pull request.</li>
        <li>Watch your GitHub notifications and respond to feedback during the pull request review process.</li>
      </ol>
      <p>
        If you run into any difficulties, please feel free to ask questions either via a GitHub issue or by
        <a href="mailto:public-aria-practices@w3.org">sending email to the ARIA Authoring Practices public mailing list</a>.
      </p>
    </section>

    <section id="joining-the-authoring-practices-task-force">
      <h2>Joining The Authoring Practices Task Force</h2>
      <p>
        The APG is developed by the
        <a target="_blank" href="https://www.w3.org/WAI/ARIA/task-forces/practices/">ARIA Authoring Practices Task Force</a>,
        which  is a sub-group of the
        <a target="_blank" href="https://www.w3.org/WAI/ARIA/">ARIA Working Group</a>.
        The task force meets weekly to coordinate work on development of the APG.
        Task force participants are expected to regularly attend meetings and to actively contribute.
        Examples of contributions include:
      </p>
      <ul>
        <li>Testing the functionality and accessibility of example implementations of the APG patterns</li>
        <li>Fixing bugs and implementing  enhancements in example implementations of the APG patterns</li>
        <li>Helping write responses to community feedback</li>
        <li>Reviewing and editing documentation</li>
        <li>Designing or engineering pattern implementation examples</li>
        <li>Creating and editing patterns and practices for ARIA usage</li>
      </ul>
      <p>
        To participate in the  Authoring Practices Task Force, you first need to
        <a href="https://www.w3.org/WAI/ARIA/participation">become a participant in the ARIA Working Group</a>.
        If you are already a participant in the ARIA Working Group, contact
        <a href="https://www.w3.org/staff/#dmontalvo">Daniel Montalvo</a>
        and request membership in the Authoring Practices Task Force.
      </p>
    </section>

    <section id="Helping-provide-assistive-technology-support-data">
      <h2>Helping provide assistive technology support data</h2>
      <p>
        The assistive technology support tables included on APG example pages, e.g.,
        <a href="../../patterns/radio/examples/radio-activedescendant/#at-support">Assistive Technology Support for Radio Group Example Using aria-activedescendant</a>,
        are provided by the
        <a href="https://www.w3.org/groups/cg/aria-at/">ARIA and Assistive Technologies (ARIA-AT) Community Group</a>.
        The ARIA-AT community group aims to ensure APG patterns have consistent and interoperable accessibility support.
        If you would like to contribute to this aspect of the APG, you can learn more about the ARIA-AT project and how to contribute at
        <a href="https://aria-at.w3.org/">ARIA and Assistive Technologies Home</a>.
        </p>
    </section>

  </div>

</div>
<script src="{{ '/content-assets/wai-aria-practices/shared/js/skipto.js' | relative_url }}"></script>

