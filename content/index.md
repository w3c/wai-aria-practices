---
# translation notes are after after "#" in this section

title: "Page Title"
ref: /link/to/page/   # Translators, do not change this

github:
  repository: w3c/wai-resource-template
  path: content/index.md    # Add the language shortcode to the middle of the filename, for example: content/index.fr.md
permalink: /link/to/page/   # Add the language shortcode to the end, with no slash at end, for example: /link/to/page/fr

lang: en   # Change "en" to the translated language shortcode
last_updated: 2020-02-20   # Put the date of this translation YYYY-MM-DD (with month in the middle)
# translators:   # remove from the beginning of the line: "# " and add your name(s)
# - name: Translator 1's Name
# - name: Translator 2's Name
# contributors:
# - name: Contributor 1's Name
# - name: Contributor 2's Name

footer: > # Text in footer in HTML
  <p> This is the text in the footer </p>

---

{::nomarkdown}
{% include box.html type="start" title="Summary" class="" %}
{:/}

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod architecto excepturi incidunt, odit modi quidem deserunt doloremque molestias saepe. Iste dolor non repellendus laudantium. Nihil velit mollitia voluptatem ullam libero.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include toc.html type="start" title="Page Contents" %}
{:/}

- This will be replaced by an automatically generated TOC when using Markdown formatting.
{:toc}

{::nomarkdown}
{% include toc.html type="end" %}
{:/}

## Heading Level 2

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione placeat ab laboriosam. **Assumenda aut, praesentium (bold)** commodi _nesciunt natus (italic)_ ipsum fugiat with **link markdown**:
* [[Exact Title of Page on WAI website - uses double brackets and permalink]](/permalink/to/page/)
* [link to WAI website that's not exact title of page - uses single brackets and permalink](/permalink/to/page/)
* [link to page off the WAI website - uses single brackets and full URI](https://example.com)

### Heading Level 3

1. This is 
2. a nice
3. ordered
4. list.

#### Heading Level 4


* And this is a
* bullet list

- You can use asterisks
- or dashes. Whatever floats
- your boat :-)

##### Heading Level 5

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione placeat ab laboriosam. Assumenda aut, praesentium commodi nesciunt natus ipsum fugiat voluptates nisi ipsam voluptas recusandae, a. Sunt eos veritatis numquam

## Heading Level 2

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione placeat ab laboriosam. Assumenda aut, praesentium commodi nesciunt natus ipsum fugiat voluptates nisi ipsam voluptas recusandae, a. Sunt eos veritatis numquam

### Heading Level 3

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione placeat ab laboriosam. Assumenda aut, praesentium commodi nesciunt natus ipsum fugiat voluptates nisi ipsam voluptas recusandae, a. Sunt eos veritatis numquam
