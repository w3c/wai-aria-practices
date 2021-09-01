// More info here:
// https://accessibility.oit.ncsu.edu/it-accessibility-at-nc-state/developers/accessibility-handbook/mouse-and-keyboard-events/skip-to-main-content/#content

const body = document.querySelector("body");
const main = document.querySelector("main");

main.setAttribute("tabindex", "-1");
body.insertAdjacentHTML(
  "beforebegin",
  '<a class="skip-main" href="#main">Skip to main content</a>'
);
