---
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

If you want to see the docs for our theme (Starlight), click [here](https://starlight.astro.build/).

Already read this but don't know where to start? Check the [issues page](https://github.com/r-Techsupport/rTS_Wiki/issues) for the repository!

## Using Hyde
[Hyde](https://github.com/r-Techsupport/hyde) is an internal rTS project that is a web editor and CMS for Jekyll/git static sites. You can most easily edit the wiki by visiting https://hyde.rtech.support in your browser and opening the existing file or creating a new file in `src/content/docs/`.

## Using git locally
### Creating the File

[Fork the wiki's repository](https://github.com/r-Techsupport/rTS_Wiki/fork), clone your fork to your computer, and go to the repo folder.

Create your Markdown file (`.md`) in the respective category in `src/content/docs/`.

`src/content/docs/guides/` contain various step-by-step guides for the user to follow.

`src/content/docs/factoids/` contain the articles that are either copied from, or linked to by embeds.

`src/content/docs/learning/` contains education articles like [Computing 101](/learning/Computing-101)

### Testing locally

You can host the wiki locally to check what your articles will look like: 

Ensure you have `nodejs` installed. Run the following commands in the root of the project:

```bash
npm install
npm run dev
```

The site should be viewable at [http://localhost:4321/](http://localhost:4321/)

### Creating the pull request

Once your changes are complete you can [open a pull request (PR)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) to the master branch.

When your PR is submitted a Github Action will build and publish a test website, commenting a link to it. You will be able to view your site live at that link and it will be updated on every commit in your PR until it is merged.

## Frontmatter header
- https://starlight.astro.build/reference/frontmatter/

**The FrontMatter Header contains all of the metadata of the page**, including title and a page description. **This is required** and should always be placed on the **first line of the file**.

Here is the header for this specific page:

### Astro
```
---
title: Contributing to the Wiki
description:
sidebar:
    hidden: false
pagefind: true
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

## Page headers

For the sake of consistency across the pages:

## These should be used for different sections of the page
`## These should be used for different sections of the page`

### Always arrange headers in order
`### Always arrange headers in order`

#### Like so.
`#### Like so.`

#### Only the first word is capitalized
`#### Only the first word is capitalized`

## Images

To add a custom image, place your image in `/assets/<page-name>/<image.png>`, and link to it like:

`![Table of Contents Code](../../../assets/writing-articles/toc1.webp)`

(see [Table of Contents](#table-of-contents) above for a live example.)

## Includes
Includes (also called embeds or transcludes) are a way to embed one small note into many other notes.

1. Create a `.md` file in `/src/_includes/embeds`, it does not need to have any [Frontmatter](#frontmatter-header).
    - If your embed will contain other emebds it should be created as a `.mdx` file instead of `.md`
2. Create a `.mdx` file in whatever docs directory you desire.
    - A `.mdx` file is a `.md` file that can contain JSX. All of your normal markdown text and Frontmatter will be used like normal in this file.
3. Using a relative path to the file you want to embed use a block like below anywhere in the file that you want to insert the content of the embed note:
    - The white space between the import and `<>` statement is required.
    ```
    import LinuxInstallMedia from '../../../_includes/embeds/create-linux-install-media.mdx';

    <LinuxInstallMedia />
    ```

## Page styling

### Bolding and italicizing

**Bold** (`**Bold**`) important words/phrases and *Italicize* (`*Italicize*`) them to emphasize like:

Applications you have installed, *regardless of which drive you have installed it on*, **will not carry over** the next time you clean install Windows, even if it is on a different hard drive to your Windows drive. [(source)](/learning/multiple-disks)

### Alerts
Alerts are used to "call out" specific information. We have a number of these at our disposal and their paradigms are outlined below. Please adhere to this paradigm for consistency.

The format to create an Alert is below. You can add additonal "quote" `>` lines without issue. Use blank quote lines for spacing.

> [!IMPORTANT] Important
> If you use a link in a callout, you must have an extra blank line between the title and your body as seen below

```
> [!WARNING] Warning
> 
> It is very important that you remember to **power-off the motherboard** and switch-off and unplug the PSU after each component test. Do this before you remove or install anything. [ExampleLink](https://contoso.com)
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

`[BSOD Article](/factoids/bsod)`

[BSOD Article](/factoids/bsod)

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

## Directory or index pages
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