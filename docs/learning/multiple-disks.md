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

> ❗ Any method to accomplish these tasks without data-loss are not supported. The lazy "safe" is never safe.

## Advantages
Many people leverage multiple disks in their systems to expand their storage capabilities, partition data way from their OS, maximize cost-performance savings, or a combination of these and other goals. The most basic and common setup seen will be a small OS SSD and a larger HDD used for storage mounted at a single drive letter. 

For the purpose of this guide we will only cover using supplementary disks with a single partition each. We do not recommend breaking disks down into partitions for organization, use folders for that.

## Disk setup
### Getting started on a new computer (no OS) with multiple disks
To get started on a brand new computer with no operating system, we suggest you removing all the drives that the operating system(OS) are not being installed on. Then you will need a flash drive with a bootable OS installed on it. You can follow [our guide](/docs/installations) for creating that USB, and fully installing the OS. After the OS is installed you can follow the section below on [Adding a disk to an existing OS](#adding-a-disk-to-an-existing-os).

### Adding a disk to an existing OS
The first step when setting up a new storage device is to install it physically into the computer. This can be done be using a drive bay to store the drive that you are installing, then hooking up the power and SATA cables need to use the drive. For M.2 drives there is a slot on the motherboard to put it in, and then screw it down to hold the drive in place. From there you close up the computer, and  boot into the operating system as normal. Follow [our guide](/docs/disks/disk-management) to set the new storage device up.

### Spanning partitions

> ❗ Spanning data across multiple disks increases your risk of data loss by 100% for every disk in the pool.

Spanning partitions are created out of multiple disks to look as one. Combining multiple disks into one allows you more space on a single letter, and if need to upgrade storage it is easy to add another disk without much trouble. 

1. Hit Win+R to open the run dialog and type "diskmgmt.msc"

    > You may be asked to initialize the disk. choose GPT.
 
    ![assets/multiple-disks/diskmgmt.png](assets/multiple-disks/diskmgmt.png) 

2. By default disks are Basic, we need to change it to Dynamic. Right click the left side where it says "Basic", choose "Convert to Dynamic Disk..."

    ![assets/multiple-disks/dynamic0.png](/assets/multiple-disks/dynamic0.png)

3. A dialog box will pop up asking you which disks you would like to convert to dynamic, select all the disks that you would like to span. 

    > ❗ Do not convert the disk containing C:\  

    > ❗ Converting a disk to dynamic will wipe it

    ![assets/multiple-disks/dynamic1.png](/assets/multiple-disks/dynamic1.png)

4.  Right click the left box again, where it now says "Dynamic". You can choose [Spanned](), [Striped](), or [Mirrored](). Find out about each below before selecting.

    ![assets/multiple-disks/dymanic-sel.png](/assets/multiple-disks/dymanic-sel.png)

    > All three options follow the same configuration manager. You can follow the following steps regardless of your chosen layout.

    > An array of disks are also called a "volume"

5. A new wizard will appear, press "next". Two boxes are presented, one disk is in the right box. Every disk that you want added to your volume will need to be moved from the left to the right. Select each disk and choose "Add >".

    ![assets/multiple-disks/volume-creation0.png](/assets/multiple-disks/volume-creation0.png)

    ![assets/multiple-disks/volume-creation1.png](/assets/multiple-disks/volume-creation1.png)

6. Select a drive letter for your volume.

    ![assets/multiple-disks/volume-creation2.png](/assets/multiple-disks/volume-creation2.png)

7. For your format, you most likely want to use NTFS. Tick "Perform a quick format" to avoid (possible hours) of downtime. You can also name the volume, for example "Game Data".

    ![assets/multiple-disks/volume-creation3.png](/assets/multiple-disks/volume-creation3.png)

8. Conclude by pressing "Finish". Your volume should now appear in "This PC"

    ![file-explorer-thispc](/assets/multiple-disks/file-explorer-thispc.png)

### RAID


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
