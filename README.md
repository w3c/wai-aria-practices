# WAI-ARIA Authoring Practices

This repo prepares the [ARIA Authoring Practices Guide](https://w3c.github.io/aria-practices/) for integration into the [Web Accessibility Initiative](https://www.w3.org/WAI/) website.

The WAI website is built in Jekyll and [brings together several git submodules
into one website](https://wai-website-theme.netlify.app/technical/).

This project implements a pipeline to convert the [aria-practices repo](https://github.com/w3c/aria-practices/), which
is currently a single static HTML file served by
[gh-pages](https://pages.github.com/) and formatted and
post-processed with [ReSpec](https://pages.github.com/), into a multi-page static website to be served as a standalone resource on the
[wai-website](https://github.com/w3c/wai-website/).

## Local development

- Ensure Ruby and Node (v14 or greater) are installed.
- Clone this repo: `git clone git@github.com:bocoup/wai-aria-practices.git`
- Initialize or update submodules: `git submodule update --init --recursive`
- Install Jekyll: `bundle install`.
- Install ReSpec: `npm install --global respec`
- Run ReSpec: `respec2html --src ./_external/aria-practices/aria-practices.html --out ./_includes/aria-practices.html`
- Install npm dependencies: `npm install -C scripts/pre-build`
- Run the pre-build script: `node ./scripts/pre-build`
- Run Jekyll: `bundle exec jekyll serve -w --livereload`. (-w --livereload doesn't work on native Windows, OK in WSL)
- View the webpage at [http://localhost:4000/](http://localhost:4000/)

## Next steps

- [x] Move repo to W3C organization.
- [ ] Integrate with Netlify CI/CD.
- [Integrate this resource with the main WAI website](https://wai-website-theme.netlify.app/technical/integrate/).

## Netlify CD status

[![Netlify Status](https://api.netlify.com/api/v1/badges/2f0b3cea-856a-491f-9e98-0ff59fe6d599/deploy-status)](https://app.netlify.com/sites/wai-aria-practices2/deploys)

Click to explore
