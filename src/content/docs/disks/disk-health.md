---
title: Verifying Disk Health
sidebar:
    hidden: false
    order: 2
has_children: false
parent: Disks
pagefind: true
last_modified_date: 2024-02-21
---






## Definitions

S.M.A.R.T. - this is a monitoring system included in disk drives(HDDs and SSDs). Its primary function is to detect and report various indicators of drive reliability and health.

Sectors - these are sections of your hard drive that store data. Your hard drive has many many sectors.

## Important SMART Values

If you ever read a SMART report from any of the below tools it is useful understanding the common ones that you want to watch for.
Current Pending Sector Count

When a sector is detected as bad it will be counted and the disk will attempt to move it. This value can go up and down as the disk moves or recovers sectors.


## Reallocated Sectors Count

When detected as bad your disk will attempt to move a sector. If it is moved successfully this count will go up.


## Uncorrectable Sector Count

This count goes up when the disk is not able to recover and move a sector. This indicates lost data.

## Pending Sector Count

This count goes up when the disk is being read with unstable sectors on the disk. They are a precursor to Reallocated Sectors, which cause lost of data.

> [!NOTE] Information
> 
> For more info about those attributes, read [Wikipedia](https://en.wikipedia.org/wiki/Self-Monitoring%2C_Analysis_and_Reporting_Technology) and [Backblaze](https://www.backblaze.com/blog/what-smart-stats-indicate-hard-drive-failures/) articles.

## Crystal Disk Info

Crystal disk is the simplest way to get a reading on SMART within Windows. Download the application then run it to view every disk in the machine.

For directions on using CDI please see [our factoid](/factoids/cdi) about it.

### Reading CDI
The basics are color coded; if a disk shows up as Yellow/'Caution' or Red/'Bad' we recommend replacing it. 

## Hard Disk Sentinel

[Download](https://www.hdsentinel.com/download.php)

## SEAGATE (SeaTools)

### Bootable
[Info](https://www.seagate.com/manuals/software/seatools-bootable/introduction/)

[Download](https://www.seagate.com/files/old-support-files/seatools/USBbootSetup-SeaToolsBootable.zip)

### Windows Application

[Info](https://www.seagate.com/files/www-content/support-content/downloads/seatools/_shared/downloads/pdf/SeaTools-for-windows-en-us.pdf)

[Download](https://www.seagate.com/files/old-support-files/seatools/USBbootSetup-SeaToolsBootable.zip)

## SmartmonTools

You can check SMART in Linux using smartmonTools. The quick steps to get a report in Ubuntu are: (replace X with your desired disk)

```
sudo apt install smartmontools
sudo smartctl -a -d ata /dev/sdX
```

[More Info](https://help.ubuntu.com/community/Smartmontools)

### GSmartControl (GUI method)

```
sudo apt install gsmartcontrol
```

1. Open `gsmartcontrol` from the application menu
2. Select your disk once the application is opened

    *If your disk is anything but 'passed' then your disk is dying and needs to be replaced.*

3. To share your results choose 'View output' then 'Save as' and upload that file to a helper for review.
