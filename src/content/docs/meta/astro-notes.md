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
    - New
        - description
            - This will be displayed on the "card" for a note on its Index page and under the page title
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
- Embeds have a new format, see [Contributing](/meta/contributing#includes).
- Scripts are imported using a new method, as described [here](https://starlight-examples.netlify.app/examples/imported-code/) and implemented in [Extend-WinRE](/factoids/extend-winre).
    - The "gotchya" in this is that your script ends with `?raw` to import otherwise Astro tries to parse it as JS.
- Contributors list re-worked, use this method (modified) https://starlight-examples.netlify.app/examples/git-authors/
- The "index" notes "recommendations.md" are now index.mdx and are hidden from the sidebar but are searchable. They present a directory listing of their respective notes.
- Redirect_from frontmatter does not work, this is now configured in `astro.config.mjs` but should really be deprecated entirely. 
    - Need to audit for Bookstack links that still exist, `/docs` to `/` is already being handled and that is all we will support
- `/assets/` has been deprecated. Markdown files in astro can only use relative paths to images so `/src/assets` will be used.
- rules page has been updated

## To Do
- Includes are broken
    - Terms
- Move menu to left of icon in m
- Clicking a header should change the URL (make them hrefs)