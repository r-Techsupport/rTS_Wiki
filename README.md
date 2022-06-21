# rTS_Wiki
## Article Creation
1. Pages go into their respective directory under `/docs`
2. Nothing should be placed in root. A
3. All wiki pages that are to be processed need to have the extension `.md`. 
  * The files are written in markdown. Make a PR with any changes that you have.
4. All pages need a FrontMatter header. A inclusive example of one would be
  ```
  ---
  layout: default
  title: Linux Live Session
  nav_exclude: false
  has_children: false
  parent: Live Sessions
  grand_parent: Live Sessions
  has_toc: true
  search_exclude: false
  last_modified_date: 2022-06-15
  ---
  ```
 Parent, and Grandparent are optional based on use case

## Images
Images should be put in `/assets/<page_name>/<image.png>` and are referenced like so `![Windows install image](/assets/install-10/10-0.png)`

## [Theme docs](https://just-the-docs.github.io/just-the-docs/)
* [Children and grandchildren](https://just-the-docs.github.io/just-the-docs/docs/navigation-structure/#pages-with-children)

## Table of Contents Example
```
# Disk & Partition Management
{: .no_toc}

{% include toc.md %}

## Disk Managment
```

## Testing Locally
1. Ensure you have `ruby` and `gem` installed.
2. `gem install jekyll bundler`
3. `bundle install`
4. `bundle exec jekyll serve`
5. Open http://localhost:4000/
