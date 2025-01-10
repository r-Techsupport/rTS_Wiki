---
title: How to Use Multiple Disks in Windows
sidebar:
    hidden: false
has_children: false
parent: General Guides
pagefind: true
last_modified_date: 2022-10-23
redirect_from: /docs/learning/multiple-disks
---


> [!WARNING] Warning
> 
> All guides here are supplied for the purpose of offering safe methods to accomplish each goal. That does not mean the goal is safe for all users. All disks fail, we encourage users to be proactive with protecting their data by creating a [personal backup strategy](/backups) no matter what disk layout is chosen.

> [!WARNING] Warning
> Any method to accomplish these tasks without data-loss are not supported. The lazy "safe" method is never safe.

## Advantages
Many people leverage multiple disks in their systems to expand their storage capabilities, partition data way from their OS, maximize cost-performance savings, or a combination of these and other goals. The most basic and common setup seen will be a small OS SSD and a larger HDD used for storage mounted at a single drive letter. 

For the purpose of this guide we will only cover using supplementary disks with a single partition each. We do not recommend breaking disks down into partitions for organization, *use folders* for that.

## Disk setup
### Getting started on a new computer (no OS) with multiple disks
To get started on a brand new computer with no operating system, we suggest **removing all the drives that the operating system (OS) are not being installed on.** This will make sure that you are installing on the correct disk.

Then, you will need a flash drive with a bootable OS installed on it. You can follow [our guide](/installations) for creating that USB, and fully installing the OS. After installing the OS to the correct disk, you can now plug back in the other disks.

After the OS is installed you can follow the section below on [Adding a disk to an existing OS](#adding-a-disk-to-an-existing-os).

### Adding a disk to an existing OS
The first step when setting up a new storage device is to install it physically into the computer. 

This can be done be using a drive bay to store the drive that you are installing, then hooking up the power and SATA cables need to use the drive. 

For **M.2 drives** specifically, there is a slot on the motherboard to put it in, and then screw it down to hold the drive in place. From there you close up the computer, and  boot into the operating system as normal. 

Follow [our guide](/disks/disk-management) to set the new storage device up.

### Dynamic disks
Dynamic disks allows you to combine multiple disks into one, allowing you more space on a single drive letter. 

If you need to upgrade storage it is easy to add another disk without much trouble. See [our guide](/disks/dynamic-disks) on how to setup dynamic disks.

### RAID
RAID (redundant array of independent disks) is a method primarily used in servers, and is **outside of the scope** of this article.

## Using another disk for storage
Always install your applications onto your primary drive. Applications you have installed, *regardless of which drive you have installed it on*, **will not carry over** the next time you clean install Windows, even if it is on a different hard drive to your Windows drive. You can, however, install application data and games on to your secondary hard drive.

When you install applications, the data and files get stored in multiple locations and the registry (which you should **never** mess around with). Because of this, this is why every application has to be re-installed when you get a new operating system installed.

It is recommended to install all your programs onto your "C:\" Drive (Your primary drive) and then, where appropriate, change the install path for games and roaming data onto your secondary drives.

### Storing Data on my other drive(s)
Once you install your software on your primary drive, you can often point the data path to other drives. You can do this with your downloads from your internet browser, videos and pictures and any games you download, for example.

You can change your default location for your download folder by right-clicking the download folder, selecting properties > Location >, then type in or "find target" of your other drive where you want it to reside.

You can casually store any other data, like documents, pictures, and videos, on the external drive without any issues, create a new folder and keep them as you normally would.

For things like Games, often, you can change the install path to be on your external drive. When you install games using a platform like Steam, Battle.net, EA/Origin, or Epic Games, you can often tell them where to install the games or even create a new game library so games will install there by default.

See links below on how to change game installs/library paths.
You can also copy and paste the data to your other drive if you have it installed, and when the install checks the data, it will see everything is there, and you won't have to re-download everything.

- [Steam - Steam Support :: Moving a Steam Installation and Games (steampowered.com)](https://help.steampowered.com/en/faqs/view/4BD4-4528-6B2E-8327)
- [Battle.net - How Do I Install Blizzard Games on a Different Hard Drive? - Blizzard Support (battle.net)](https://us.battle.net/support/en/article/151376)
- [Origin - Back up and restore your games with Origin](https://help.ea.com/en-us/help/origin/origin/backing-up-and-restoring-your-origin-games/)
- [Epic Games - How to move an installed game from the Epic Games Launcher to another directory on your computer](https://www.epicgames.com/help/en-US/epic-games-store-c5719341124379/launcher-support-c5719357217435/how-to-move-an-installed-game-from-the-epic-games-launcher-to-another-directory-on-your-computer-a5720215231515)

> [!WARNING] Warning
> 
> If you are unsure of what you are doing, make sure you take a [backup](/backups/creating-backups) of your data.
