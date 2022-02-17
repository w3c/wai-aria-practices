const { kebabCase } = require("lodash");
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
    oldSlug: "switch",
    newSlug: "switch",
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

const lastCharacterIsColon = (str) => {
  const chars = str.split("");
  return chars[chars.length - 1] === ":";
};

const removeLastCharacter = (str) => {
  return str.substr(0, str.length - 1);
};

const findExamplesSection = (element, newSlug) => {
  const sectionElements = element.querySelectorAll("section");
  for (const sectionElement of sectionElements) {
    const h4 = sectionElement.querySelector("h4");
    if (!h4) continue;
    if (h4.textContent === "Example" || h4.textContent === "Examples") {
      return sectionElement;
    }
  }
  throw new Error(`Expected pattern ${newSlug} to have an Example(s) section`);
};

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

    getOutline: (element) => {
      return [
        { name: "About This Pattern", slug: "about-this-pattern" },
        ...element.querySelectorAll("h4").map((h4) => {
          // Sorry this is a bit awkward
          let name = removeSectionNumbers(() => h4.textContent)();
          if (lastCharacterIsColon(name)) name = removeLastCharacter(name);
          const slug = h4.getAttribute("id") ?? kebabCase(name);
          return { name, slug };
        }),
      ];
    },

    getContent: removeSectionNumbers(
      renumberHeadings(-2, (element) => {
        const originalHeadline = element.querySelector("h3");
        originalHeadline.remove();
        element.querySelectorAll("h4").forEach((h4) => {
          h4.setAttribute("tabindex", "-1");
          if (!h4.getAttribute("id")) {
            const slug = kebabCase(
              // Sorry this is a bit awkward
              removeSectionNumbers(() => h4.textContent)()
            );
            h4.setAttribute("id", slug);
          }
        });
        element.insertAdjacentHTML(
          "afterbegin",
          '<h4 id="about-this-pattern" tabindex="-1">About This Pattern</h4>'
        );

        examplesSection = findExamplesSection(element, newSlug);
        examplesSection.classList.add("examples-section");
        examplesSection.insertAdjacentHTML(
          "afterbegin",
          `<img alt="" src="/assets/img/${newSlug}.svg" />`
        );
        return element.outerHTML;
      })
    ),
  };
});

module.exports = patternFormatters;
