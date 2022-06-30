---
layout: default
title: Wiping Disks
nav_exclude: false
nav_order: 2
has_children: false
parent: Disks
search_exclude: false
last_modified_date: 2022-06-15
redirect_from: /books/troubleshooting-with-a-linux-live-session/page/wiping-disks
---

# Wiping Disks
This guide uses the [Linux live session](/docs/live-sessions/linux-live-session).
## HDD
`nwipe` is a fork of `dwipe` which is the utility used in the popular [DBAN](https://dban.org/) solution.

1. Open "terminal emulator" from the application menu
2. Run `sudo nwipe` in the terminal to launch our nwipe session
3. Navigate up and down the list with the arrow keys, select disks by size with the space bar. 
	* Removing extra disks from the machine may make this selection easier. **Choosing the wrong disk will cause data loss**
	* You can change the wipe method by pressing `m`. DoD short is the default and recomended method. It makes 3 passes over the disk.
    * You can change the number of rounds by pressing `r`. This multiplies the method. Leaving DoD short and setting 2 rounds would make 6 passes (1 is recommended).
4. Press capital `S` to start the process

## SSD
[Secure erase article on kernel.org](https://ata.wiki.kernel.org/index.php/ATA_Secure_Erase)

### NVMe SSD
This relies on the application `nvme-cli`. It might not be included on all Linux distros, you might have to install it. It is included in the r/Techsupport rescue media.
1. Open "terminal emulator" from the application menu.
2. Run `sudo nvme list` to see the list of valid nvme drives.
	* Some SSDs will not be listed here. If your drive isn't listed, put your computer to sleep and then wake it up. This is mainly an issue with Samsung drives.
3. Run `sudo nvme format -s2 /dev/nvmeX` where X is the location of your drive.
	* Example: `sudo nvme format -s2 /dev/nvme0n1` **Choosing the wrong disk will cause data loss**
    * Some manufacturers lock their drives. If you get an invalid field error, you will have to use a tool from your SSDs manufacturer. When doing this, make sure you do a secure erase.
