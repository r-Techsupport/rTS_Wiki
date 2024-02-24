---
layout: default
title: Using Testdisk to recover partitions
nav_exclude: false
has_children: false
parent: Data Recovery
grand_parent: Disks
search_exclude: false
last_modified_date: 2024-02-23
---
# Using Testdisk to recover partitions
## Overview

{% include embeds/use-linux-live-session.md %}

{% include embeds/data-recovery-warning.md %}

This guide was written using a Windows 11 host that has a 128GB C:\ drive and a 256GB D:\ drive called "Game_Data". The D:\ drive is holding an application, it has been validated that the application can be launched after recovery.

## Using Testdisk
1. From the Live media desktop click the application menu in the top left and open "Terminal Emulator"

    ![Opening Testdisk from the applications menu](/assets/testdisk/testdisk0.png)

2. In the terminal type "testdisk" to start the application. Use the arrow keys to select "No Log" and hit Enter. 

    ![Launching Testdisk in terminal](/assets/testdisk/testdisk1.png)

3. When Testdisk opens you will see a list of disks, most likely you will only see your USB though. Use the arrow keys to highlight and select "Sudo" with Enter to load more disks.

    ![Selecting Sudo in Testdisk](/assets/testdisk/testdisk2.png)

4. You should now see all possible disks. You will use the Up and Down arrows to select the disk you want to operate on then hit Enter to Proceed.

    {: .info .info-icon }
    > Select your disk based on it's size. If you have multiple disks of the same size removing the extra disks is the safest way to proceed.

    {: .warning .warning-icon }
    > If you do not see your disk here then you should seek professional data recovery services.

    ![Complete disk selection in Testdisk](/assets/testdisk/testdisk3.png)

5. Testdisk will attempt to determine the partition table that is on the disk. If it is correct or if you do not know press Enter to proceed otherwise correct the selection.

    {: .info .info-icon }
    > Most modern systems should be using a "EFI GPT" table type

    ![Partition table selection in Testdisk](/assets/testdisk/testdisk4.png)

6. Press Enter to Analyze the disk

    ![Disk analysis confirmation](/assets/testdisk/testdisk5.png)

7. Press Enter to begin a "Quick Search".

    {: .info .info-icon }
    > You may be told a partitions cannot be recovered. Make note of this and press "Continue"

    ![Quick scan in Testdisk for partitions](/assets/testdisk/testdisk6.png)

8. If you are lucky, Testdisk has found a partition. From here you can use "p" to list the files in the partition to confirm it is correct (Hit "q" to exit that view.) Then hit Enter to proceed to the next step.

    ![Partition discovery Testdisk](/assets/testdisk/testdisk7.png)

    {: .info .info-icon }
    > Notes on recovering multiple partitions
    > 
    > - If multiple partitions are found you can use the arrow keys to move between them. Select the partitions you want to restore with the Space bar. Some of those partitions may be duplicates and some may be labeled "Found using backup sector
    > 
    > - You may not be able to select all partitions, for instance duplicate partitions will make an error if both are selected.
    > 
    > - Selected partitions are shown in green.
    > 
    > ![Multiple partitions example](/assets/testdisk/testdisk8.png)

9. At this stage you can press Enter to "Deeper search" if this is not the correct partition or press the Right Arrow and Enter to "Write" the partition(s) to the disk.

    ![Write or deeper search screen](/assets/testdisk/testdisk9.png)

    {: .info .info-icon }
    > An example of multiple partitions being written
    > 
    > ![Multiple partitions that can be written](/assets/testdisk/testdisk10.png)

10. After writing the partition back to the disk you will be brought back to Step 6. You can close the terminal and shutdown your computer. Remove the USB then boot your computer again to validate if partition recovery was a success.

    {: .info .info-icon }
    > If you restored an OS disk, it most likely won't be bootable but it is hopefully readable. You can refer to [Recoverying files from a readable disk](/docs/disks/data-recovery/reading-linux) for the next steps in recovering your data.

{: .warning .warning-icon }
> After completing a partition or table recovery it is recommended you backup your data and properly reformat the disk. Follow [Diskpart clean](/docs/factoids/diskpart-clean) directions to do that.