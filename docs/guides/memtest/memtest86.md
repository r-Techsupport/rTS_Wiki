---
layout: default
title:  Memtest86+
nav_exclude: false
has_children: false
#grand_parent: General Guides
parent: General Guides
search_exclude: false
last_modified_date: 2023-01-22
redirect_from: /books/how-to-and-guides/page/running-memtest86
---

# Memtest86+

Memtest86+ is a small tool that allows you to test memory for issues.

## 1. Obtaining media
You may also use the [official Memtest86+ ISO](https://www.memtest.org/download/v7.00/mt86plus_7.00_64.iso.zip), or the [install tool for Windows](https://www.memtest.org/download/v7.00/mt86plus_7.00_USB_Installer.exe).

## 2. Creating bootable media
This will require a USB that is at least the size of the ISO you downloaded.

Follow the [Linux media guide](/docs/installations/install-linux#step-2-creating-installation-media) to create the install media. **If you use Rufus, make sure to select MBR/Legacy/BIOS even if your system supports GPT/UEFI.**

## Run Memtest86+

**This media needs to be booted in Legacy/CSM mode. They will not work when loaded in UEFI mode**
If you used the official Memtest86+ media, it will boot straight into the test.

## 3. Results
Let the test run for 8 passes, which will most likely last overnight. Any errors means you have a bad RAM stick or DIMM (RAM slot). If you see any errors early, you can end the test there and start narrowing it down to which stick/slot.

If you have a failure, then test each stick individually, and in different slots to isolate the failure to a stick or slot.
