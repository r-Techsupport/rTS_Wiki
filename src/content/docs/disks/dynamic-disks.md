---
title: Dynamic Disks
sidebar:
    hidden: false
has_children: false
parent: Disks
has_toc: false
pagefind: true
last_modified_date: 2022-10-23
---



> [!WARNING] Warning
> Any method to accomplish these tasks without data-loss are not supported. The lazy "safe" method is never safe.

Dynamic disks allows you to combine multiple disks into one, allowing you more space on a single drive letter. If you need to upgrade storage it is easy to add another disk without much trouble. 

When multiple disks are combined into one it can be called an "array" or "volume".

## Types of dynamic volumes
### Spanned
Also called `JBOD` this is several disks laid side by side with data written randomly across them. When using '2' 1TB disks, you will have a total of 2TB of space. This is not fault tolerant, losing either disk will result in a loss of all data.

> 📝  Data is written sequentially, starting at the head of one disk and moving through each disk as they fill

### Striped
Data will be broken in to equal parts and written to every disk in the group. By splitting the data across several disks you improve the read speeds back off the disk. This is typically used for performance gains on HDDs. Like spanning, losing any one disk results in a loss of all data.

### Mirrored
A fault tolerant solution where data is duplicated (mirrored) between disks. This is used to protect against disk failure in a data set but is NOT a backup method by itself. Losing any disk in this array will result in NO data loss, but a new disk must replace the bad.

##  Creating a dynamic disk volume
1. Hit Win+R to open the run dialog and type "diskmgmt.msc"

    > You may be asked to initialize the disk. choose GPT.
 
    ![assets/multiple-disks/diskmgmt.webp](../../../assets/multiple-disks/diskmgmt.webp) 

2. By default disks are Basic, we need to change it to Dynamic. Right click the left side where it says "Basic", choose "Convert to Dynamic Disk..."

    ![assets/multiple-disks/dynamic0.webp](../../../assets/multiple-disks/dynamic0.webp)

3. A dialog box will pop up asking you which disks you would like to convert to dynamic, select all the disks that you would like to span. 

    > [!WARNING] Warning
    > Do not convert the disk containing C:\  

    > [!WARNING] Warning
    > Converting a disk to dynamic will wipe it

    ![assets/multiple-disks/dynamic1.webp](../../../assets/multiple-disks/dynamic1.webp)

4.  Right click the left box again, where it now says "Dynamic". You can choose [Spanned](), [Striped](), or [Mirrored](). Find out about each below before selecting.

    ![assets/multiple-disks/dymanic-sel.webp](../../../assets/multiple-disks/dymanic-sel.webp)

    > All three options follow the same configuration manager. You can follow the following steps regardless of your chosen layout. 

5. A new wizard will appear, press "next". Two boxes are presented, one disk is in the right box. Every disk that you want added to your volume will need to be moved from the left to the right. Select each disk and choose "Add >".

    ![assets/multiple-disks/volume-creation0.webp](../../../assets/multiple-disks/volume-creation0.webp)

    ![assets/multiple-disks/volume-creation1.webp](../../../assets/multiple-disks/volume-creation1.webp)

6. Select a drive letter for your volume.

    ![assets/multiple-disks/volume-creation2.webp](../../../assets/multiple-disks/volume-creation2.webp)

7. For your format, you most likely want to use NTFS. Tick "Perform a quick format" to avoid (possible hours) of downtime. You can also name the volume, for example "Game Data".

    ![assets/multiple-disks/volume-creation3.webp](../../../assets/multiple-disks/volume-creation3.webp)

8. Conclude by pressing "Finish". Your volume should now appear in "This PC"

    ![file-explorer-thispc](../../../assets/multiple-disks/file-explorer-thispc.webp)

### References
[Breakdown of dynamic volumes](https://www.linkedin.com/pulse/whats-dynamic-disk-storage-simple-spanned-striped-jasmin-kahriman)