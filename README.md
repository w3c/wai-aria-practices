# wai-aria-practices

This repo is was created to allow the the serving of the
[aria-practices](https://w3c.github.io/aria-practices/) content directly from
the [WAI website](https://www.w3.org/WAI/).

The WAI website is built in jekyll and brings together several git submodules
into one website. You can read more details about the techincal architecture
[here](https://wai-website-theme.netlify.app/technical/).

This project is currently in a spike phase to understand any potential roadblocks in
moving the [aria-practices repo](https://github.com/w3c/aria-practices/) which
is currently a single static html file served by
[gh-pages](https://pages.github.com/) and formatted and
post-processed with [ReSpec](https://pages.github.com/) to the
[wai-website](https://github.com/w3c/wai-website/). 

## Design Overview

In order to serve `aria-practices` in a `wai-website` resource format without
making any changes to the existing `aria-practices` infrastructure. This repo
pulls in `aria-practices` as a submodule. 

The index of `aria-practices` is processed with `respec2html` which generates
the table of contents, inserts meta-data in to the document, and ensures that
links are fixed in the documents. 

That processed document is parsed and them broken up into 3 seperate html files
which are included in the main `content/index.html` file that is served by
jekyll. 

By generated seperate html files for these html elements they can be modified to
follow the page layout of a standard `wai-website` resource.

## Local development

1. Clone this repo. `git clone git@github.com:bocoup/wai-aria-practices.git`
2. Initialize submodules `git submodule update --init --recursive`
3. Install Jeykyll. `bundle install`. In order to do this, you need to have the [correct pre-reqs installed for Nokogiri](https://nokogiri.org/tutorials/installing_nokogiri.html). 
4. Run `./script/pre-build` to update assert from aria-practices
5. Run Jekyll `bundle exec jekyll serve --livereload`. 
6. View the webpage at [http://127.0.0.1:4000/wai-aria-practices/aria-practices/](http://127.0.0.1:4000/wai-aria-practices/aria-practices/)

## Next steps

0. Fix bugs (see list below).
1. Move repo to `w3c` organization.
2. Get `w3c` netlify credientials. (Currently deploying the rmeritz's private
   creds on a free account).
3. Setup [netlify](https://wai-website-theme.netlify.app/technical/#netlify) previews for this resource `netlify init`
4. [Integrate this resource with the main WAI
   website](https://wai-website-theme.netlify.app/technical/integrate/)
5. Update the [Navigation](https://wai-website-theme.netlify.app/technical/integrate/) of the main WAI website to include this resource

## Bug List

1. The site works locally but is not being successfully deployed to netlify
   anymore. I'm pretty sure it is a problem with the github submodules and/or the symlinks. 
2. Inserting the table of contents generated by ReSpec into the TOC strucure
   used by WAI is causing every element to be numbered twice.

## Misc. Notes from Spike
This repo was created by following the instructions in [Creating a New
Resource](https://wai-website-theme.netlify.app/technical/new-resource/) which
sets up a new repo via a github w3c template. This instructions were
stright-forward and should not need to be repeated except for `netlify init`.

In order to deploy to production [netlify](https://www.netlify.com/) is used. It also is used 
generate site previews for individual resources like this one. At the time of
the spike, I was missing the [WAI netlify
credential](https://wai-website-theme.netlify.app/technical/#netlify). So for
now I just setup this repo with my own creditials for experimentation. Later is
should be moved to the offical W3C WAI netlify site and a w3c repo. Currently the preview of this site
updates on every push to master and a preview is generated for every PR. You can
view the preview of "production" [here](https://wai-aria-practices.netlify.app/aria-practices/).

To run this resource locally you can follow the instructions for [checking out
an existing
resource](https://wai-website-theme.netlify.app/technical/existing-resource/). 
I've summarized them in the local development section above.

In order to pull in `aria-practices`, I added it as a submodule with `git
submodule add git@github.com:w3c/aria-practices.git _external/aria-practices`. 
This should not need to be repeated. But in order to update submodules you can
run `git submodule update --init --recursive`.

I wrote a small script that can be run with `./scripts/pre-build` that copies
the `body` from the original `aria-at-practices` into a file in the `_includes`
directory. This file would be the appropriate place to add of command that would
parse the existing html file to create a table of contents file and fix the
links in the existing includes file.

The script also adds a symlink for all the example files such that all links to
the examples now work as well. They look exactly like they looked in the
original practices, but if we want to add them into the `wai-website` template
we could follow a very similar solution that we used for the aria-practices
index page.
