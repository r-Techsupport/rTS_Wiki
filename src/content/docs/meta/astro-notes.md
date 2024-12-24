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
    - Notes
        - `parent` and `has_children` no longer used
        - `last_modified_date` no longer used, dates are pulled from Git history

## To Do
- Includes are broken