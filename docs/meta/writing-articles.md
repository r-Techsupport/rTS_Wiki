---
layout: default
title: Creating Wiki Articles
nav_exclude: false
has_children: false
parent: Information
search_exclude: false
last_modified_date: 2023-02-04
---

# Creating Wiki Articles
{: .no_toc }

Hello! Would you like to write an article for this wiki? Here's how to write one!

Requires some knowledge of Markdown. See [@adam-p](https://github.com/adam-p)'s cheatsheet [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

{% include toc.md %}

## Header

### What is the header?

**The header contains all of the metadata of the page**, including title, parent category, and date of last modification.

Here is the header for this specific page:

```
---
layout: default
title: Creating Wiki Articles
nav_exclude: false
has_children: false
parent: Information
search_exclude: false
last_modified_date: 2023-02-04
---
```

The important things for you to look at are `title:` and `parent:`
The title contains the name that will be displayed for the page on the sidebar. The parent assigns the page's category in that sidebar.

You can copy the codeblock above to your markdown file and replace all the fields.

## Table of Contents

To add a table of contents to your page, add this AFTER your first Heading (usually the title):

![Table of Contents Code](/assets/writing-articles/toc1.png)

This will output a table of contents that looks like what this page has. If you would like a numbered table of contents, replace `toc.md` with `toc_numbered.md`

## Page Styling

### General Rules

**Bold** (`**Bold**`) important words/phrases and *Italicize* (`*Italicize*`) like:

Applications you have installed, *regardless of which drive you have installed it on*, **will not carry over** the next time you clean install Windows, even if it is on a different hard drive to your Windows drive. [(source)](/docs/learning/multiple-disks.md)

### Warnings

Warnings like:

> ❗ It is very important that you remember to **power-off the motherboard** and switch-off and unplug the PSU after each component test. Do this before you remove or install anything. [(source)](/docs/factoids/breadboarding.md)

are just blockquotes in markdown.

```
> ❗ It is very important that you remember to **power-off the motherboard** and switch-off and unplug the PSU after each component test. Do this before you remove or install anything.
```

To let the user know that it IS a warning, add the ❗ emoji to the beginning.


### Hyperlinks

You can link to headings in the current file with:

`[headers](#headers)`

[headers](#headers)

and to other pages with

`[bsod](/docs/factoids/bsod.md)`

[bsod](/docs/factoids/bsod.md)