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

**All methods of creating boot media are destructive and will WIPE the USB flash drive or external disk.**

### Windows
1. Download and run [Rufus](https://rufus.ie/)
2. Select “ISO Image” and then browse for the ISO image.
3. Select which flash drive you want to put the installer on.
4. Select the target system type, `GPT/UEFI` or `MBR/BIOS` 
	* For modern systems `GPT/UEFI` is preferred. For legacy systems use `MBR/BIOS`
5. Click “Start” and wait for it to finish.

### MacOS
1. Download and run [Etcher](https://www.balena.io/etcher/)
2. Select your downloaded ISO
3. Select your target drive
4. Click "Flash" and wait for it to finish.

### Linux
1. Run `lsblk` to list all disks in your system, identify your flash drive by size. It will look something like `/dev/sd[letter]`

**The following command is dangerous. Ensure it is run against the correct disk**

2. Use `dd if=/path/to/image.iso of=/dev/sd[letter]` to create a bootable drive from the ISO.
3. Wait until dd finishes. dd does not display progress, but when it finishes, the terminal will display the next prompt.

## Boot the live media
1. Press your 'Boot menu' key when you power on the machine to access your boot options.
	* You may need to go through BIOS and change boot priority if you cannot find or hit the boot options key during boot.
2. Choose your USB
