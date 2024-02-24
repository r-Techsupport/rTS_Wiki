---
layout: default
title: Data Recovery
nav_exclude: false
has_children: true
parent: Disks
search_exclude: false
last_modified_date: 2024-02-23
---

# Data Recovery
Data recovery is a complicated process that requires care and attention to be done properdly. Look through the scenarios below to decide which method of data recovery you will need to do.

{: .warning .warning-icon }
> Attempting data recovery always has a chance to make your situation worse, causing the permanent loss of your data. For priceless data you should seek professional data recovery services.

{: .warning .warning-icon }
> If you are seeing "cyclic redundancy check" anywhere, you will not be able to attempt recovery at home and should seek professional data recovery services.

## Scenarios
### A readable disk
A small obstacle preventing you from using your computer like normal such as:
- My computer won't turn on for some reason
- My computer is BSODing when I turn it on so I cannot get to Windows like normal.
- My laptop screen broke so I can't see anything
- I cannot log into Windows for some reason

For these issues, you can [recover files with a Live Linux Session]().

### My disk was erased on accident
You have a drive that is visible in Windows but it has no data on it. This may be because:
- I deleted partitions on the wrong disk (But did not make new ones)
- I turned my computer on and it says my disk needs to be "initialized"
- My disk is "RAW" in disk management
- My disk is "unknown" in disk management
- My disk is "unallocated" in disk management

For these issues, use [Testdisk]() to recover your partition table.

### My disk was wiped and has new data on it
You had data on your disk, and it had new data written to it, replacing the old data.
- You formatted the wrong disk
- You installed Windows on the wrong disk
- You installed Linux on the wrong disk
- You formatted and then put data onto the wrong disk

For these issues, use [Photorec]() to recover individual files.

## Other resources
- [old wiki article](https://www.reddit.com/r/techsupport/wiki/livelinuxsession#wiki_recover_data_from_your_storage_drives)
- [Using Testdisk to recover partition tables](https://www.howtoforge.com/data_recovery_with_testdisk)