---
layout: default
title: Windows Security managed by IT
nav_exclude: false
has_children: false
parent: guides
search_exclude: false
last_modified_date: 2025-2-2
---

A seemingly common issue with Windows Resets seems to be that the Security subsystem will lock itself behind an "IT Administrator", akin to a domain managed machine.

This is a recoverable issue, and at an educated guess, happens due to an incorrect layering of operations when a system is onboarded after a Reset, while having to take into account the previous system configuration.

On Windows 11 systems, this can be fixed very easily by downloading and running the following executable as administrator :


[Security Health Setup](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/defu/2024/02/securityhealthsetup_e16941e14861a6d24750ecdf05c548189b33182a.exe)

[!TIP] A system restart might be needed after. 