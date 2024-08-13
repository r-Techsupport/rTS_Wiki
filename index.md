---
layout: default
title: Homepage
nav_exclude: true
last_modified: 2022-06-25
---

# Highlighted Content
* How to clean install [Windows](/windows)
* Believe you are infected? View our recommendations for dealing with [malware](/docs/safety-security/malware-guide)
* Improve your cyber hygiene with [MFA](/docs/safety-security/mfa) and a [personal backup plan](/docs/backups)

---
## Who is writing this wiki? The contributors!

<ul class="list-style-none">
{% for contributor in site.github.contributors %}
  <li class="d-inline-block mr-1">
     <a href="{{ contributor.html_url }}"><img src="{{ contributor.avatar_url }}" width="32" height="32" alt="{{ contributor.login }}"/></a>
  </li>
{% endfor %}
</ul>

## How can I contribute?
This site is created via [Github Pages](https://pages.github.com/), the repository can be found [here](https://github.com/r-Techsupport/rTS_Wiki). For those wishing to contribute to this, please checkout our [Contributing Guide](/docs/meta/contributing).
