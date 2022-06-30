---
layout: default
title: Linux Live Session
nav_exclude: false
has_children: false
parent: Live Sessions
search_exclude: false
last_modified_date: 2022-06-15
redirect_from: /books/troubleshooting-with-a-live-session/chapter/linux-live-environment
---
# Linux Live Session
## What is a Linux Live Session

Linux is a great OS that has a major advantage when it comes to troubleshooting, it can be run from a USB flashdrive in a 'live' state without installing to a hard disk. This allows you to use a wide range of tools to manipulate the disks, data, and hardware of your computer/OS without worrying about anything running on it.

**The username and password for the media is `user` and `live`**

## 1. Obtaining media
### r/Techsupport Rescue Media
A Linux ISO has been made for r/Techsupport that has many of the proper tools pre-installed to make rescuing a system easier. If you are unfamiliar with Linux we recommend that you use this version. 

[Download](https://github.com/r-Techsupport/rTS_Debian/releases/latest/download/rTS_RescueMedia.iso)

[Source files for Debian live-build](https://github.com/r-Techsupport/rTS_Debian)

### Official Xubuntu Media
You may also use the official Xubuntu ISO and load your own tools as needed.

[Download](https://xubuntu.org/download/)

## 2. Creating bootable media
This will require a USB that is at least the size of the ISO you downloaded.

**All methods of creating boot media are destructive and will WIPE the USB flasdrive or external disk.**

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

## 3. Boot the live media
1. Press your 'Boot menu' key when you power on the machine to access your boot options.
	* You may need to go through BIOS and change boot priority if you cannot find or hit the boot options key during boot.
2. Choose your USB
3. Once it boots select 'Try' or 'Live'

## Things to do
* [Wipe disks](/docs/disks/disk-wipe)
* [Data Recovery](/docs/guides/data-recovery)
* [Disk Manipulation with Gparted](/docs/disks/gparted)
* [Verify Disk Heath](/docs/disks/disk-health#smartmontools)
