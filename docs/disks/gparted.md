---
layout: default
title: Disk Manipulation with Gparted
nav_exclude: false
has_children: false
parent: Disks
search_exclude: false
last_modified_date: 2022-06-29
---

# Manipulating partitions and disks with Gparted
{: .no_toc}

This article relies on the live media [created here](/docs/live-sessions/linux-live-session) or the official media can be downloaded from [here](https://gparted.org/livecd.php).

{% include toc.md %}

## Overview
Gparted is a Linux/gnu front-end to the `parted` tool. It is the recommended method for manipulating disks when using a Linux live session.

## Working with a new disk
### Create partition table
A disk needs a partition table made as the first step in formatting. This is generally an `MBR`/`msdos` or `GPT` table. `GPT` is preferred for all modern applications.

Select a disk in Gparted from the drop-down in the top right

![Selecting a disk in gparted](/assets/gparted/gparted_disk_sel.png)

To create your table, hover over 'device' with your disk selected.

![creating a table in gparted](/assets/gparted/gparted_create_table.png)

#### Create partition
To create a partition on a disk right click any unallocated space and choose 'New'. 

![creating a partition in gparted](/assets/gparted/gparted_create_part.png)

Choose your size and location on the disk by dragging the sliders, the entire box or entering values manually. It is recommended to make partitions starting at the head (start) of the disk and work your way right.

Primary partitions are the typical user partition. Logical or extended are for more advanced setups.

![creating a partition in gparted 2](/assets/gparted/gparted_create_part2.png)

Typical file system types and uses are:

|Type|OS Compatibility|Use|Limitations
|---|---|---|---|
|NTFS|Windows, with read natively on Linux/BSD or MacOS|Windows OS and data partitions|
|ext2/3/4|Linux/BSD, with read on other OS via third party tools|Linux/BSD OS and data partitions
|Fat32|Read/Write natively on most OS|Removable media|Fat32 file systems cannot hold files larger than 4GB|
|exFat|Read/Write natively on most OS|Removable media|
HFS/+|MacOS native with read on other OS via third party tools|MacOS OS and data partitions

## Working with existing disks
**Manipulating partitions is dangerous and can result in a loss of data. It is recommended you have your data/disks images backed up prior to executing the following procedures.**

### How partitions can move
When working with partitions it is important to understand how you can move them. 

1. You can only enlarge a partition to the right
2. You can only shrink a partition to the left
3. Partitions can move left or right
4. Partitions cannot move around each other

### Enlarge/Move/Shrink partitions
To change the size of a partition right click it and choose 'resize/move'. You can manipulate the size the same way as when making a new partition.

![resizing a partition in gparted](/assets/gparted/gparted_part_res.png)

#### Enlarging
If enlarging a partition ensure you have enough **empty** space to the immediate right of the partition. If you do not, move the neighbor partition far enough right that you have space for your enlargement operation.

#### Shrinking
**Shrinking is not recommended**, make a new partition and move your data.

You can only shrink a partition as far as data is dispersed through a partition. A partition may need to be defragmented before significant size changes are possible.

#### Moving
Moving partitions takes a very long time. It is recommended that you restore data to an desired disk layout rather than change an existing one.

## Finalizing changes
When you are done making changes to disk choose the 'Check' at the top to save those changes, confirm and the changes will start processing. **If you shrunk, or moved partitions this can take a very long time.**

![final step gparted](/assets/gparted/gparted_disk_final.png)
