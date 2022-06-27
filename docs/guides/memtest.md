---
layout: default
title: Running Memtest86+
nav_exclude: false
has_children: false
parent: General Guides
search_exclude: false
last_modified_date: 2022-06-27
---


# Running Memtest86+

## What is a Linux Live Session

Linux is a great OS that has a major advantage when it comes to troubleshooting; it can be run from a USB flashdrive in a 'live' state without installing to a hard disk. This allows you to use a wide range of tools to manipulate the disks, data, and hardware of your computer/OS without worrying about anything running on it.

## Obtaining media
### r/Techsupport Rescue Media
A Linux ISO has been made for r/Techsupport that has memtest86+ included in the environment.

[Download](https://github.com/r-Techsupport/rTS_Debian/releases/latest/download/rTS_RescueMedia.iso)

[Source files for Debian live-build](https://github.com/r-Techsupport/rTS_Debian)

### Official Memtest86+ V5.31b
You may also use the official Memtest86+ ISO.

[Download](http://www.memtest.org/download/5.31b/memtest86+-5.31b.iso.zip)

Or the install tool for Windows.

[Download](http://memtest.org/download/5.31b/memtest86+-5.31b.usb.installer.zip)

## Creating bootable media
This will require a USB that is at least the size of the ISO you downloaded.

**All methods of creating boot media are destructive and will WIPE the USB flashdrive or external disk.**

### Windows
1. Download and run [Rufus](https://rufus.ie/)
2. Select “ISO Image” and then browse for the ISO image.
3. Select which flash drive you want to put the installer on.
4. Select the target system type  `MBR/BIOS` 
	* Memtest can only be run when booted as `Legacy/MBR/BIOS`
5. Click “Start” and wait for it to finish.

### MacOS
1. Download and run [Etcher](https://www.balena.io/etcher/)
2. Select your downloaded ISO
3. Select your target drive
4. Click "Flash" and wait for it to finish.

### Linux
1. Run `lsblk` to list all disks in your system, identify your flash drive by size. It will look something like `/dev/sd[letter]`

## Boot the live media
1. Press your 'Boot menu' key when you power on the machine to access your boot options.
	* You may need to go through BIOS and change boot priority if you cannot find or hit the boot options key during boot.
2. Choose your USB
3. Once it boots select 'Try' or 'Live'

## Run Memtest86+

**Both of these media need to be booted in Legacy/CSM mode. They will not work when loaded in UEFI mode**

### rTechsupport Rescue Media
If you booted the rTechSupport Rescue Media then you will be able to choose Memtest86+ on the welcome screen.

![memtest.png](/assets/memtest/rts_memtest.png)

### Official Memtest86+ media
If you used the official Memtest86+ media, it will boot straight into the test.

## Results
Let the test run for 8 passes, most likely overnight, any errors means you have a bad RAM stick or DIMM (RAM slot). If you see any errors early, you can end the test there and start narrowing it down to which stick/slot.

If you have a failure, then test each stick individually, and in different slots to isolate the failure to a stick or slot.
