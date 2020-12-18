# wai-aria-practices

This repo is was created to allow the the serving of the
[aria-practices](https://w3c.github.io/aria-practices/) content directly from
the [WAI website](https://www.w3.org/WAI/).

The WAI website is build in jekyll and brings together several git submodules
into one website. You can read more details about the techincal architecture
[here](https://wai-website-theme.netlify.app/technical/).

This project is currently in a spike phase to understand any roadblocks in
moving the [aria-practices repo](https://github.com/w3c/aria-practices/) which
is currently a single static html file served by
[gh-pages](https://pages.github.com/) and formatted and
post-processed with [ReSpec](https://pages.github.com/) to the
[wai-website](https://github.com/w3c/wai-website/). 

This README serves as documentation for this spike.

This repo was created by following the instructions in [Creating a New
Resource](https://wai-website-theme.netlify.app/technical/new-resource/) which
sets up a new repo via a github w3c template. This instructions were
stright-forward and should not need to be repeated expect for `netlify init`.

In order to deploy to production [netlify](https://www.netlify.com/) is used. It also is used 
generate site previews for individual resources like this one. At the time of
the spike, I was missing the [WAI netlify
credential](https://wai-website-theme.netlify.app/technical/#netlify). So for
now I just setup this repo with my own creditials for experimentation. Later is
should be moved to the offical W3C WAI site. Currently the preview of this site
updates on every push to master and a preview is generated for every PR. You can
view the preview of "production" [here](https://wai-aria-practices.netlify.app/link/to/page/).

To run this resource locally you can follow the instructions for [checking out
an existing
resource](https://wai-website-theme.netlify.app/technical/existing-resource/).
I've summarized them here:

1. Clone this repo. `git clone git@github.com:bocoup/wai-aria-practices.git`
2. Initialize submodules `git submodule update --init --recursive`
3. Install Jeykyll. `bundle install`. In order to do this, you need to have the [correct pre-reqs installed for Nokogiri](https://nokogiri.org/tutorials/installing_nokogiri.html). 
4. Run Jekyll `bundle exec jekyll serve --livereload`. 
5. View the webpage at `http://127.0.0.1:4000/wai-aria-practices/link/to/page/`

In order to pull in `aria-practices`, I added it as a submodule with `git
submodule add git@github.com:w3c/aria-practices.git _external/aria-practices`. 
This should not need to be repeated. But in order to update submodules you can
run `git submodule update --init --recursive`.
