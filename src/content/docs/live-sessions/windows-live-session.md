---
title: Windows Live Session
sidebar:
    hidden: false
has_children: false
parent: Live Sessions
pagefind: true
last_modified_date: 2022-07-16
redirect_from: /books/troubleshooting-with-a-live-session/chapter/windows-pe
---

## What is Windows PE

Windows PE is small bootable Windows environment made for r/Techsupport. This PE has a full GUI and select tools for basic troubleshooting or data recovery in a UI more familiar to users than Linux.

## Obtaining media
### r/Techsupport Windows PE

[Download](https://github.com/r-Techsupport/rTS_WinPe/releases/latest/download/rTS_WinPE.iso)

[Source files for rTS_WinPE](https://github.com/r-Techsupport/rTS_WinPe)

## Creating bootable media
This will require a USB that is at least the size of the ISO you downloaded.

 import LinuxInstallMedia from '../../../_includes/embeds/create-linux-install-media.mdx';

<LinuxInstallMedia />

## Boot the live media
1. Press your 'Boot menu' key when you power on the machine to access your boot options.
	* You may need to go through BIOS and change boot priority if you cannot find or hit the boot options key during boot.
2. Choose your USB
