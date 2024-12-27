---
title: 'Change notes: Jekyll to Astro'
description: 'All changes and outstanding items to know about for the Jekyll to Astro migration'
---

## Completed
- Removed all `{: .no_toc }`, `{% include toc.md %}` because ToC is now on the sidebar
- Removed all H1's, they are at the top of each page now based on the title field of the frontmatter
- A route is setup that redirects `/docs/` to `/` to keep all old links working
    - https://docs.astro.build/en/guides/routing/#redirects
- Replaced callouts to "Alerts"
    - Danger is now Caution
    - Tip was added
    - Success was changed to Tip
- Frontmatter
    - Replaced
        - `nav_exclude: false` to `sidebar:\n    hidden: false`
        - `nav_exclude: true` to `sidebar:\n    hidden: true`
        - `nav_order` to `order` under the `sidebar` attribute
        - `permalink` to `slug`
        - `search_exclude: false` to `pagefind: true`
        - `search_exclude: true` to `pagefind: false`
        - `layout: default\n` removed
    - Notes
        - `parent` and `has_children` no longer used
        - `last_modified_date` no longer used, dates are pulled from Git history
- All image paths must now be relative. Absolute would require the linked files to be in `/public`
- Embeds have a new format, see [Contributing](/docs/meta/contributing#includes).
- Scripts are imported using a new method, as described [here](https://starlight-examples.netlify.app/examples/imported-code/) and implemented in [Extend-WinRE](/docs/factoids/extend-winre.mdx).
    - The "gotchya" in this is that your script ends with `?raw` to import otherwise Astro tries to parse it as JS.
- Contributors list re-worked, use this method (modified) https://starlight-examples.netlify.app/examples/git-authors/

## To Do
- Includes are broken
    - Terms
- `/assets/` will be deprecated. Markdown files in astro can only use relative paths to images so `/src/assets` will be used.