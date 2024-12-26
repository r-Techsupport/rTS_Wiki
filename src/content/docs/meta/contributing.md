---
layout: default
title: Contributing to the Wiki
sidebar:
    hidden: false
    order: 8
has_children: false
parent: Information
pagefind: true 
lastUpdated: 2024-06-28
---
Hello! Would you like to create an article for this wiki or want to modify something? Here's how to contribute!

Requires some knowledge of Markdown. See [@adam-p](https://github.com/adam-p)'s cheatsheet [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). This article will also only cover how to style them properly, so read other articles in this wiki to get a feel of how to structure your article.

If you want to see the docs for our theme (Just the Docs), click [here](https://just-the-docs.github.io/just-the-docs/).

Already read this but don't know where to start? Check the [issues page](https://github.com/r-Techsupport/rTS_Wiki/issues) for the repository!

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
- https://starlight.astro.build/reference/frontmatter/

**The FrontMatter Header contains all of the metadata of the page**, including title, parent category, and date of last modification. **This is required** and should always be placed on the **first line of the file**.

Here is the header for this specific page:

### Jekyll
```
---
layout: default
title: Contributing to the Wiki
sidebar:
    hidden: false
has_children: false
parent: Information
pagefind: true
last_modified_date: 2023-02-04
---
```

### Astro
```
---
title: Contributing to the Wiki
description:
sidebar:
    hidden: false           (nav_exclude)
pagefind: true              (Search_exclude)
tableOfContents: true
template: doc
prev: false
next: false
draft: false
---
```

The most important thing, and only really required field is `title:`

The title contains the name that will be displayed for the page on the sidebar and the H1 on the page.

You can copy the codeblock above to your markdown file and replace all the fields.

## Page Headers

For the sake of consistency across the pages:

## These should be used for different sections of the page
`## These should be used for different sections of the page`

### Always arrange headers in order
`### Always arrange headers in order`

#### Like so.
`#### Like so.`

## Images

To add a custom image, place your image in `/assets/<page-name>/<image.png>`, and link to it like:

`![![Table of Contents Code](../../../assets/writing-articles/toc1.png)]`

(see [Table of Contents](#table-of-contents) above for a live example.)

## Page Styling

### Bolding and Italicizing

**Bold** (`**Bold**`) important words/phrases and *Italicize* (`*Italicize*`) them to emphasize like:

Applications you have installed, *regardless of which drive you have installed it on*, **will not carry over** the next time you clean install Windows, even if it is on a different hard drive to your Windows drive. [(source)](/docs/learning/multiple-disks)

### Alerts
Alerts are used to "call out" specific information. We have a number of these at our disposal and their paradigms are outlined below. Please adhere to this paradigm for consistency.

The format to create an Alert is below. You can add additonal "quote" `>` lines without issue. Use blank quote lines for spacing.

```
> [!WARNING] Warning
> It is very important that you remember to **power-off the motherboard** and switch-off and unplug the PSU after each component test. Do this before you remove or install anything.
```

#### Caution

> [!CAUTION] Caution
> Caution block
> 
> Use `> [!CAUTION] Caution` for caution blocks
> 
> Caution boxes contain critical information that, if dismissed, will lead to operational or security issues!
> 
> Data deletion Alerts should be Caution Alerts!

#### Warnings

> [!WARNING] Warning
> Warning block
> 
> Use `> [!WARNING] Warning` for warning blocks
> 
> Warning boxes contain information that may lead to issues and should not be quickly dismissed. 

#### Information

> [!NOTE] Information
> Info block
> 
> Use `> [!NOTE] Information` for info blocks
> 
> Info boxes contain notes or helpful hints that may be safely ignored. 

#### Important

> [!IMPORTANT] Important
> Important block
> 
> Use `> [!IMPORTANT] Important` for important blocks
> 
> Crucial information necessary for users to succeed.

#### Tip

> [!TIP] Tip
> Tip block
> 
> Use `> [!TIP] Tip` for tip blocks
> 
> Tangential comments that are not directly related to the article but could be worth knowing.



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

## Directory pages
Use a `.mdx` file in the root of any directory, named the same as the directory. This is `backups.mdx`:

```mdx
---
title: Backups
sidebar:
    hidden: true
slug: /backups
tableOfContents: false
---

import DirectoryLinks from '/src/components/DirectoryLinks.astro';

<DirectoryLinks directory="backups" />
```