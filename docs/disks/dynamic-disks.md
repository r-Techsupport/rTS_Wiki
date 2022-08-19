---
layout: default
title: 
nav_exclude: false
has_children: false
parent: 
grand_parent: 
has_toc: false
search_exclude: false
last_modified_date: 20:37
---

# Dynamic Partitions

> ❗ Any method to accomplish these tasks without data-loss are not supported. The lazy "safe" is never safe.

Dynamic disks allows you to combine multiple disks into one, allowing you more space on a single drive letter. If you need to upgrade storage it is easy to add another disk without much trouble. 

When multiple disks are combined into one it can be called an "array" or "volume".

## Types of dynamic volumes
### Spanned


### Striped


### Mirrored


##  Creating a dynamic disk volume
1. Hit Win+R to open the run dialog and type "diskmgmt.msc"

    > You may be asked to initialize the disk. choose GPT.
 
    ![assets/multiple-disks/diskmgmt.png](/assets/multiple-disks/diskmgmt.png) 

2. By default disks are Basic, we need to change it to Dynamic. Right click the left side where it says "Basic", choose "Convert to Dynamic Disk..."

    ![assets/multiple-disks/dynamic0.png](/assets/multiple-disks/dynamic0.png)

3. A dialog box will pop up asking you which disks you would like to convert to dynamic, select all the disks that you would like to span. 

    > ❗ Do not convert the disk containing C:\  

    > ❗ Converting a disk to dynamic will wipe it

    ![assets/multiple-disks/dynamic1.png](/assets/multiple-disks/dynamic1.png)

4.  Right click the left box again, where it now says "Dynamic". You can choose [Spanned](), [Striped](), or [Mirrored](). Find out about each below before selecting.

    ![assets/multiple-disks/dymanic-sel.png](/assets/multiple-disks/dymanic-sel.png)

    > All three options follow the same configuration manager. You can follow the following steps regardless of your chosen layout. 

5. A new wizard will appear, press "next". Two boxes are presented, one disk is in the right box. Every disk that you want added to your volume will need to be moved from the left to the right. Select each disk and choose "Add >".

    ![assets/multiple-disks/volume-creation0.png](/assets/multiple-disks/volume-creation0.png)

    ![assets/multiple-disks/volume-creation1.png](/assets/multiple-disks/volume-creation1.png)

6. Select a drive letter for your volume.

    ![assets/multiple-disks/volume-creation2.png](/assets/multiple-disks/volume-creation2.png)

7. For your format, you most likely want to use NTFS. Tick "Perform a quick format" to avoid (possible hours) of downtime. You can also name the volume, for example "Game Data".

    ![assets/multiple-disks/volume-creation3.png](/assets/multiple-disks/volume-creation3.png)

8. Conclude by pressing "Finish". Your volume should now appear in "This PC"

    ![file-explorer-thispc](/assets/multiple-disks/file-explorer-thispc.png)
