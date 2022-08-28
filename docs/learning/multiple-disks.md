---
layout: default
title: How to Use Multiple Disks in Windows
nav_exclude: false
has_children: false
parent: Learning
search_exclude: false
last_modified_date: 2022-08-18
---

# How to Use Multiple Disks in Windows

> ❗ All guides here are supplied for the purpose of offering safe methods to accomplish each goal. That does not mean the goal is safe for all users. All disks fail, we encourage users to be proactive with protecting their data by creating a [personal backup strategy](/docs/backups) no matter what disk layout is chosen.

> ❗ Any method to accomplish these tasks without data-loss are not supported. The lazy "safe" method is never safe.

## Advantages
Many people leverage multiple disks in their systems to expand their storage capabilities, partition data way from their OS, maximize cost-performance savings, or a combination of these and other goals. The most basic and common setup seen will be a small OS SSD and a larger HDD used for storage mounted at a single drive letter. 

For the purpose of this guide we will only cover using supplementary disks with a single partition each. We do not recommend breaking disks down into partitions for organization, use folders for that.

## Disk setup
### Getting started on a new computer (no OS) with multiple disks
To get started on a brand new computer with no operating system, we suggest you removing all the drives that the operating system(OS) are not being installed on. Then you will need a flash drive with a bootable OS installed on it. You can follow [our guide](/docs/installations) for creating that USB, and fully installing the OS. After the OS is installed you can follow the section below on [Adding a disk to an existing OS](#adding-a-disk-to-an-existing-os).

### Adding a disk to an existing OS
The first step when setting up a new storage device is to install it physically into the computer. This can be done be using a drive bay to store the drive that you are installing, then hooking up the power and SATA cables need to use the drive. For M.2 drives there is a slot on the motherboard to put it in, and then screw it down to hold the drive in place. From there you close up the computer, and  boot into the operating system as normal. Follow [our guide](/docs/disks/disk-management) to set the new storage device up.

### Dynamic disks
Dynamic disks allows you to combine multiple disks into one, allowing you more space on a single drive letter. If you need to upgrade storage it is easy to add another disk without much trouble. See [our guide](/docs/disks/dynamic-disks) on how to setup dynamic disks.

### RAID
RAID (redundant array of independent disks) will work one of two ways. First, a set of RAID disks will back up the data present on them by using muliple disks to store the same data. This will protect the data stored on them therefore the data will be there even if one drive fails. The second form of RAID will allow you to expand storage, or make input/output faster by allowing these operations to overlap on multiple disks. The second method however will not backup your data, and if one drive fails all the data will be lost. There are multiple RAID levels that cover each of these and some that will cover both. 

## Using another disk for storage
Always install your applications onto your primary drive. You can not install applications onto your second drive because you think it means you won't have to reinstall them next time you clean install windows. Everything will have to be installed again, but you can install the application data and games onto the secondary drive.

When you install applications, the data and files get stored in multiple locations and the registry (which you should never mess around with). Because of this, this is why every application has to be re-installed when you get a new operating system installed.

It is recommended to install all your programs onto your "C:\" Drive (Your primary drive) and then, where appropriate, change the install path for games and roaming data onto your secondary drives.

Storing Data on my other drive(s)
Once you install your software on your primary drive, you often can point the data path to other drives. You can do this with your downloads from your internet browser, videos and pictures and any games you download, for example.

You can change your default location for your download folder by right-clicking the download folder, selecting properties > Location >, then type in or "find target" of your other drive where you want it to reside.

You can casually store any other data, like documents, pictures, and videos, on the external drive without any issues, create a new folder and keep them as you usually would.

For things like Games, often, you can change the install path to be on your external drive. When you install games using a platform like Steam, Battle.net, EA/Origin, or Epic Games, you can often tell them where to install the games or even create a new game library so games will install there by default.

See links below on how to change game installs/library paths.
You can also copy and paste the data to your other drive if you have it installed, and when the install checks the data, it will see everything is there, and you won't have to re-download everything.

Steam - Steam Support :: Moving a Steam Installation and Games (steampowered.com)
Battle.net - How Do I Install Blizzard Games on a Different Hard Drive? - Blizzard Support (battle.net)
Origin - Copy your game install folder to your other drive, then reinstall, pointing to the new location
Epic Games - Copy your game install folder to your other drive, then reinstall, pointing to the new location

If you are unsure of what you are doing, make sure you take a backup of your data.
