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
<script src="../../../../content-assets/wai-aria-practices/shared/js/skipto.js"></script>


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
    
    <p>
      The APG Task Force relies on broad community representation and participation to continuously improve the usefulness and quality of the APG.
      There are a variety of ways you can contribute and help promote development of accessible experiences.
    </p>
    <section id="working_groups">
      <h2>Join a Working Group</h2>

      <h3>ARIA Authoring Practices Group Task Force</h3>
      <p>
        The <a href="https://www.w3.org/WAI/ARIA/task-forces/practices/">ARIA Authoring Practices Task Force</a> is a sub-group of the <a href="https://www.w3.org/WAI/ARIA/">ARIA Working Group</a> and meets weekly to coordinate the development of the practices.  Members are expected to regularly attend meetings and to actively contribute to the development of the practices.  Examples of member contributions include:
      </p>
      <ul>
        <li>Testing examples for WCAG compliance</li>
        <li>Reviewing and editing example documentation</li>
        <li>Creating code and test cases for examples</li>
        <li>Creating and editing patterns of aria usage</li>
        <li>Reviewing issues and responding to commenters</li>
      </ul>

      <p>NOTE: Participation in the task force is limited to members of the W3C and invited experts.</p>

      <h3>ARIA and Assistive Technologies Community Group</h3>
      <p>
        The <a href="https://www.w3.org/community/aria-at/">ARIA and Assistive Technologies Community Group</a> is testing the implementation of assistive technology support for ARIA.  The community group also works with AT vendors to improve the consistency of how ARIA information is conveyed to users.  Results of implementation testing are integrated into the APG implementation reports.  The group meets weekly to coordinate the development of tests and testing with assistive technologies.  Members are expected to regularly attend meetings and to actively contribute to the assistive technology testing.</p>

      <p>NOTE: Participation in the community group is open to anyone.</p>
    </section>

    <section id="other_ways">
      <h2>Other Ways to Contribute</h2>

      <h3>Raise a Github Issue</h3>
      <p>
        The APG Task Force uses github issues to manage the activities of the working group.  Creating an issue is the best way to ask a question or report problems with an example or other information in the APG.  Please review the issues list to see if your question has been asked or your problem reported.  If an issue already exists feel free to add your own comments to the issue.  New issues are reviewed in the weekly APG meetings.
      </p>
      <p>
        <a target="_blank" href="https://github.com/w3c/aria-practices/issues">View and create APG issues on GitHub.</a>
      </p>

      <h3>Contribute Code via GitHub</h3>
      <p>
        Many valuable contributions are made by people who find or raise issues of interest in our GitHub repository and then submit proposed changes via a GitHub pull request.
        If you choose this path, please start by studying our guidelines for contributing to the repository and maintaining code quality.
      </p>
      <a target="_blank" href="https://github.com/w3c/aria-practices">View ReadMe in the GitHub repository</a>

      <h3>Mailing Lists</h3>
      <p>
        The APG Task Force uses the public aria-practices mailing list for email discussion.
        Meeting announcements, agendas, and links to minutes are sent to the mailing list.
        While GitHub issues are the preferred place to discuss APG content, the mailing list is available to anyone who would prefer to communicate with the APG Task Force via email.
      </p>
      <p>
        <a target="_blank" href="https://lists.w3.org/Archives/Public/public-aria-practices/">View the aria-practices mailing list archive</a>
      </p>
    </section>

  </div>

</div>
<script 
  src="{{ '/content-assets/wai-aria-practices/shared/js/skipto.js' | relative_url }}"
></script>