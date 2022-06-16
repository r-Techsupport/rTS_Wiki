---
layout: default
title: Homepage
nav_exclude: true
---
# rTechSupport Wiki
## Highlighted Content
How to clean install [Windows 10]() and [Windows 11]()

Believe you are infected? View our recomendations for dealing with [Malware Removal]()

#### Who is writing this wiki? The contributors!

<ul class="list-style-none">
{% for contributor in site.github.contributors %}
  <li class="d-inline-block mr-1">
     <a href="{{ contributor.html_url }}"><img src="{{ contributor.avatar_url }}" width="32" height="32" alt="{{ contributor.login }}"/></a>
  </li>
{% endfor %}
</ul>
