---
layout: default
title: Create Windows 11 Install USB on Linux
sidebar:
    hidden: false
has_children: false
parent: General Guides
pagefind: true
last_modified_date: 2026-11-24
description: A guide for how to create a Windows 11 install USB on a Linux device.
---

> [!IMPORTANT] Important
>
> This guide only covers creating the Windows install USB! For the installation steps, continue on from the step in [Installing Windows 11 page](../install-11/#bios-and-setup) after creating the MCT!

## Prerequisites

* An internet connection.
* A working Linux (any distro) computer.
* A USB flash drive that is at least 16 GB or greater.

> [!NOTE] Why not an 8 GB USB?
>
> The ISO file utilized in this install method is greater than 8 GB for modern Windows versions (26H2 is 8.4 GB for example). A 8 GB USB unfortunately only has 7.45 GB of usable space, and therefore will not be able to be utilized for this procedure.
>
> The installer created by Windows MCT however is different and can still be contained within the 8 GB limit published by Microsoft for installation requirements.
