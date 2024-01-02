---
layout: default
title: Contributing to the Wiki
nav_exclude: false
nav_order: 8
has_children: false
parent: Information
search_exclude: false 
last_modified_date: 2023-02-09
---

# Contributing to the Wiki
{: .no_toc }

Hello! Would you like to create an article for this wiki or want to modify something? Here's how to contribute!

Requires some knowledge of Markdown. See [@adam-p](https://github.com/adam-p)'s cheatsheet [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). This article will also only cover how to style them properly, so read other articles in this wiki to get a feel of how to structure your article.

If you want to see the docs for our theme (Just the Docs), click [here](https://just-the-docs.github.io/just-the-docs/).

Already read this but don't know where to start? Check the [issues page](https://github.com/r-Techsupport/rTS_Wiki/issues) for the repository!

{% include toc.md %}

## Creating the File

[Fork the wiki's repository](https://github.com/r-Techsupport/rTS_Wiki/fork), clone your fork to your computer, and go to the repo folder.

Create your Markdown file (`.md`) in the respective category in `docs/`.

`docs/guides/` contain various step-by-step guides for the user to follow.

`docs/factoids/` contain the articles that are either copied from, or linked to by embeds.

`docs/learning/` contains education articles like [Computing 101](/docs/learning/Computing-101)

## Testing Locally

You can host the wiki locally to check what your articles will look like: 

1. Ensure you have `ruby` and `gem` installed. Run the following commands in the folder containing `Gemfile`:
2. `gem install jekyll bundler`
3. `bundle install`
4. `bundle exec jekyll serve`
5. The site should be hosted at: [http://localhost:4000/](http://localhost:4000/)

After doing step 3, you can just skip to step 4 if you want to test the site again.

## Creating the Pull Request

 Once your changes are complete you can [open a pull request (PR)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) to the master branch.

## FrontMatter Header

**The FrontMatter Header contains all of the metadata of the page**, including title, parent category, and date of last modification. **This is required** and should always be placed on the **first line of the file**.

Here is the header for this specific page:

```
---
layout: default
title: Contributing to the Wiki
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

## Page Headers

For the sake of consistency across the pages:

# Headers like these are for the for the main title of the page
{: .no_toc }
`# Headers like these are for the for the main title of the page`

## These should be used for different sections of the page
{: .no_toc }
`## These should be used for different sections of the page`

### Always arrange headers in order
{: .no_toc }
`### Always arrange headers in order`

#### Like so.
{: .no_toc }
`#### Like so.`

## Table of Contents

To add a table of contents to your page, add this **AFTER** your first header (usually the title):

![Table of Contents Code](/assets/writing-articles/toc1.png)

This will output a table of contents that looks like what this page has. If you would like a numbered table of contents, replace `toc.md` with `toc_numbered.md`

Add `{: .no_toc }` below a heading if you do not want that heading to be included in the Table of Contents.

```
# Contributing to the Wiki
{: .no_toc }
```

## Images

To add a custom image, place your image in `/assets/<page-name>/<image.png>`, and link to it like:

`![![Table of Contents Code](/assets/writing-articles/toc1.png)]`

(see [Table of Contents](#table-of-contents) above for a live example.)

## Page Styling

### Bolding and Italicizing

**Bold** (`**Bold**`) important words/phrases and *Italicize* (`*Italicize*`) them to emphasize like:

Applications you have installed, *regardless of which drive you have installed it on*, **will not carry over** the next time you clean install Windows, even if it is on a different hard drive to your Windows drive. [(source)](/docs/learning/multiple-disks)

### Callouts
#### Warnings

Warnings like:

> ❗ It is very important that you remember to **power-off the motherboard** and switch-off and unplug the PSU after each component test. Do this before you remove or install anything. [(source)](/docs/factoids/breadboarding.md)

are just blockquotes in markdown.

```
> ❗ It is very important that you remember to **power-off the motherboard** and switch-off and unplug the PSU after each component test. Do this before you remove or install anything.
```

To let the user know that it IS a warning, add the ❗ emoji to the beginning.

#### Information

> ⓘ Info block<br>
> Use the ⓘ emoji for info blocks

### Hyperlinks

You can link to headers in the current page with:

`[Page Header](#page-header)`

[Page Header](#page-header)

and to other pages with

`[BSOD Article](/docs/factoids/bsod)`

[BSOD Article](/docs/factoids/bsod)

### Collapsible Sections

If you want the content to be collapsible, add:

```
<details markdown="1">

    <summary>The Title</summary>

    The Content

</details>
```

<details markdown="1">

    <summary>The Title</summary>

    The Content

</details>
