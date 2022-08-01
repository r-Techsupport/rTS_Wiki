---
layout: default
title: Data Retrieval
nav_exclude: false
has_children: false
parent: Disks
search_exclude: false
last_modified_date: 2022-06-28
---

# Data Retrieval

This article relies on the live media [created here](/docs/live-sessions/linux-live-session)

[old wiki article](https://www.reddit.com/r/techsupport/wiki/livelinuxsession#wiki_recover_data_from_your_storage_drives)

## From a readable disk using a Linux Live Session
Open the File Manager from the applications menu, you should see your disk in the pane on the left. In the below image, it is the "11GB Volume"

![image1](/assets/data-recovery/dr0.png)

Double click the desired disk and it should open in the file manager.

![image2](/assets/data-recovery/dr1.png)

Once opened, you can drag and drop files to another disk that you mount into the system just like in Windows.

## Testdisk to recover partitions or a partition table 

This is usually reservered for software/virus issues that cause partition table damage. Not for a damaged disk.

[Using Testdisk to recover partition tables](https://www.howtoforge.com/data_recovery_with_testdisk)


## Data Recovery Flow Chart

![image3](https://www.data-medics.com/recovery/wp-content/uploads/2016/03/Data-Recovery-Procedure.png)

## Cloning Software

Before starting data recovery on a damage disk, it is important to clone the disk to a new one. This will help avoid causing additional damage to the original disk.

You can use ddrescue in a Linux Live session, or you can use CloneZilla.

[Clonezilla Download](https://clonezilla.org/downloads.php)

## Recovery Software

Once you have a cloned disk, or if the data isnt very important and you decide to recover directly from the damage disk, there are many options for recovery software.

We recommend a paid software called R-Studio Pro.

You can use the software for free to run a scan on the disk, which generally gives you a decent idea of the possibility of file recovery.

Once you have a scan completed, you can then back up the scan data and purchase the full software, then load the scan data back in and start the recovery process.

[R-Studio Website](https://www.r-studio.com/)

## Professional Data Recovery

There are many companies out there that will attempt a recovery for you. 

If your data is very important, we recommend that you contact one of them to get a quote. We are unable to currently recommend any specific companies, so please do your research.
