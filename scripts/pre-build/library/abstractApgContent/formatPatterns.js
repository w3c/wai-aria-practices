const removeLinks = require("../../utilities/removeLinks");
const renumberHeadings = require("../../utilities/renumberHeadings");
const removeSectionNumbers = require("./removeSectionNumbers");
const getIntroductionFormatter = require("./getIntroduction");

const patterns = [
  {
    oldSlug: "accordion",
    newSlug: "accordion",
  },
  {
    oldSlug: "alert",
    newSlug: "alert",
  },
  {
    oldSlug: "alertdialog",
    newSlug: "alertdialog",
  },
  {
    oldSlug: "breadcrumb",
    newSlug: "breadcrumb",
  },
  {
    oldSlug: "button",
    newSlug: "button",
  },
  {
    oldSlug: "carousel",
    newSlug: "carousel",
  },
  {
    oldSlug: "checkbox",
    newSlug: "checkbox",
  },
  {
    oldSlug: "combobox",
    newSlug: "combobox",
  },
  {
    oldSlug: "dialog_modal",
    newSlug: "dialogmodal",
  },
  {
    oldSlug: "disclosure",
    newSlug: "disclosure",
  },
  {
    oldSlug: "feed",
    newSlug: "feed",
  },
  {
    oldSlug: "grid",
    newSlug: "grid",
  },
  {
    oldSlug: "link",
    newSlug: "link",
  },
  {
    oldSlug: "Listbox",
    newSlug: "listbox",
  },
  {
    oldSlug: "menu",
    newSlug: "menu",
  },
  {
    oldSlug: "menubutton",
    newSlug: "menubutton",
  },
  {
    oldSlug: "meter",
    newSlug: "meter",
  },
  {
    oldSlug: "radiobutton",
    newSlug: "radiobutton",
  },
  {
    oldSlug: "slider",
    newSlug: "slider",
  },
  {
    oldSlug: "slidertwothumb",
    newSlug: "slidertwothumb",
  },
  {
    oldSlug: "spinbutton",
    newSlug: "spinbutton",
  },
  {
    oldSlug: "table",
    newSlug: "table",
  },
  {
    oldSlug: "tabpanel",
    newSlug: "tabpanel",
  },
  {
    oldSlug: "toolbar",
    newSlug: "toolbar",
  },
  {
    oldSlug: "tooltip",
    newSlug: "tooltip",
  },
  {
    oldSlug: "TreeView",
    newSlug: "treeview",
  },
  {
    oldSlug: "treegrid",
    newSlug: "treegrid",
  },
  {
    oldSlug: "windowsplitter",
    newSlug: "windowsplitter",
  },
];

const patternFormatters = patterns.map(({ oldSlug, newSlug }) => {
  return {
    permalink: `/patterns/${newSlug}/`,
    permalinkReplacesFormerAnchorId: oldSlug,

    slug: newSlug,

    identify: (element) =>
      element.classList.contains("widget") &&
      element.getAttribute("id") === oldSlug,

    getName: removeLinks(
      removeSectionNumbers((element) => element.querySelector("h3").innerHTML)
    ),

    getIntroduction: getIntroductionFormatter(newSlug),

    getContent: removeSectionNumbers(
      renumberHeadings(-2, (element) => {
        const originalHeadline = element.querySelector("h3");
        originalHeadline.remove();
        return element.outerHTML;
      })
    ),
  };
});

module.exports = patternFormatters;
