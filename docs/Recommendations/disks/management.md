---
layout: default
title: Disk/Partition Management
nav_exclude: false
has_children: false
nav_order: one
parent: Disks
grand_parent: Software We Recommend
search_exclude: false
last_modified_date: 2022-06-15
---

# Disk & Partition Management

## Disk Managment
You can open disk managment by pressing Win+R and typing `diskmgmt.msc`.

Disk managment can only be run from a installed copy of windows, and has limits on what partitions and disks can be edited. For a more robust solution, consider using diskpart or gparted.

### Create a new partition
New partitions can only be created from unallocated space.

1. Right click on the unallocated space and choose "New Simple Volume".

    [![NewSimpleVolume-DiskManager.png](/assets/disk-management/newsimplevolume-diskmanager.png)](/assets/disk-management/newsimplevolume-diskmanager.png)

2. By default, the size will be the entire unallocated space. Most of the time, this is fine.

    [![NewVolume-Prompt-1a.png](/assets/disk-management/newvolume-prompt-1a.png)](/assets/disk-management/newvolume-prompt-1a.png)

3. You can assign your new partition any drive letter you would like. However, assigning `A` or `B` may cause issues.

    [![NewVolume-Prompt-2a.png](/assets/disk-management/newvolume-prompt-2a.png)](/assets/disk-management/newvolume-prompt-2a.png)

4. Set the filesystem to one of three options (there are 3 options (you may have less depending on your drive):

    | FAT32 | Desgined to be used with smaller USB drives 32GB or less in size. |
    | exFAT | Desgined to be used with all USB drives. Can replace FAT32. |
    | NTFS | Designed to be used with hard drives and SSDs of all sizes, internal and external. |

    Set the label to what you want.
    [![NewVolume-Prompt-3a.png](/assets/disk-management/newvolume-prompt-3a.png)](/assets/disk-management/newvolume-prompt-3a.png)

### Change drive letter
1. Right click on an existing partition and choose "Change Drive Letter and Paths...".
2. If the drive doesn't already have a letter, choose "Add..." on the open dialog. If it already has a letter, "Change...". To remove the drive letter, choose "Remove".  
    [![NewDriveLetter.png](/assets/disk-management/newdriveletter.png)](/assets/disk-management/newdriveletter.png)

### Change file system
**Note: This is a destructive action, and all data on the drive will be deleted.**
1. Right click on an existing partition and choose "Format...".
2. Leaving allocation unit size at default and quick format selected will usually work.
3. Choose a filesystem:

    | FAT32 | Desgined to be used with smaller USB drives 32GB or less in size. |
    | exFAT | Desgined to be used with all USB drives. Can replace FAT32. |
    | NTFS | Designed to be used with hard drives and SSDs of all sizes, internal and external. |

4. Click "OK" to format the drive.

[![FormatDrive.png](/assets/disk-management/formatdrive.png)](/assets/disk-management/formatdrive.png)

### Changing drive label.
1. Right click on an existing partition and choose "Properties".
2. From this menu, you can change your drive label to anything you would like

### Deleting a partition
1. Right click on an existing partition and choose "Delete Volume..."
2. Click "Yes" to delete the partition. You will loose all data on this partiton.

## Diskpart
Diskpart is a command line tool that doesn't have as many restrictions as disk manager. It is still limited when working on the `C:` drive, and not a good tool for partition manipulation. To use it on the `C:` drive, run it from run from the windows installer or from the [windows PE](/docs/LiveSessions/windows-live-session.html).

This guide will walk you through wiping a disk and creating a single empty partition using the entire drive. However, this will not securely erase your data, see [the wiping disks article](/docs/LiveSessions/linux/linux-wipe-disks.html) to do that.

1. To open diskpart, you will need an elevated command prompt. Just type `diskpart` and diskpart will load.
2. To identify your disk, type `list disk`, then type `select disk X` where X is the disk number. (Choosing the wrong disk will cause data loss)

    [![ListDisk.png](/assets/disk-management/listdisk.png)](/assets/disk-management/listdisk.png)

3. To wipe all partitions from your disk, type `clean`
4. For disk type and partition structure, most cases will want basic and GPT. If this disk needs to be read on older systems, use MBR instead of GPT. Run `convert basic` and `convert gpt`.
5. To create the raw partition, run `create primary partition`. If you picked MBR, run `active` after creating the partition.
6. Run `detail disk` and `list partition` to ensure that your disk looks correct and you have both the partition and volume selected. You should have a star next to the volume and partition.

    If either the partition or volume is missing, type `exit`, reconnect your drive and start over.

    If the partition or volume isn't selected (you can tell by the star on the right), type `select partition X` or `select volume X`.

    [![Detail-PreFormat.png](/assets/disk-management/detail-preformat.png)](/assets/disk-management/detail-preformat.png)

7. To format tbe partition, type `format fs=<filesystem>`. For what file system to use, reference the following:

    | FAT32 | Desgined to be used with smaller USB drives 32GB or less in size. |
    | exFAT | Desgined to be used with all USB drives. Can replace FAT32. |
    | NTFS | Designed to be used with hard drives and SSDs of all sizes, internal and external. |

    To add a label at this stage, add `label=<label>` to your command.

    If you are using NTFS and want to enable file compression, add `compress` to your format command.

    To significantly speed up the format time, add `quick`.

    A full format command will look something like `format fs=fat32 label=Drive quick`. This will do a quick format with a label of "Drive" and file system of FAT32.

8. To assign a drive letter to the new partition, run `assign letter=X` where X is the letter you choose.
9. Type `exit` to close diskpart. Your drive is formatted.

### GParted
This is used via a Linux live environment. 

Gparted has the advantage of working on almost any disk, when in Windows you cannot operate extensively on your main `C:\` drive but Gparted is booted from its own media and not running on `C:\` so it does not have this restriction. 

Gparted can be downloaded from [here](https://gparted.org/livecd.php). Read how to use GParted [here](https://rtech.support/books/troubleshooting-with-a-linux-live-session/page/manipulating-partitions-and-disks-with-gparted).
