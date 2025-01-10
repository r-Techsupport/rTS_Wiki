---
title: Windows Maintenance
sidebar:
    hidden: false
    order: 4
has_children: false
parent: Software We Recommend
pagefind: true
last_modified_date: 2023-05-08
redirect_from: /books/software-we-recommend/page/windows-maintenance
---


## Cleaners
CCleaner and all other cleaners can be very destructive. The use of these to clean excessively can lead to increase wear on SSDs when temp file are constantly being written and deleted. 

The use of any registry 'cleaner' can also be detrimental to a machine there is never a good reason to 'clean' a registry, it is not a source of load on the system in any way.

## Driver finders
**All driver finder applications are PUPs.**
We do not recommend any driver finder applications, this list includes but is not limited to:

* Snappy Driver Installer
* IObit DriverBooster
* Driver Easy

Windows can natively handle most drivers during install, or directly from Device Manager. If you are seeking to update drivers outside of Windows Device Manager only seek them online from the [motherboard / manufacturers website](/learning/computing-101.html#support-sites), [GPU manufacturers support page](/learning/computing-101.html#gpu-driver-downloads) or [Windows Update](/learning/computing-101.html#installing-drivers) 

## Defrag
**Only use Windows built-in tools such as Drive Optimizer.** All third party tools, such as defraggler, are considered PUPs.

Defragging, or defragmenting, is only relevant on spinning platter disks, colloquially HDDs. As data is added, removed, and extended a file will inevitably be split in several locations across the disk, resulting in the drive head taking more time from physically moving around to seek the blocks of data that make the file to piece it together. Defragging a disk will try to make all blocks that make a file contiguous so the head ideally stays steady and can read files efficiently.

> [!WARNING] Do not use defragmenting tools on SSDs
> An SSD has near-instant seek times regardless of underlying fragmentation, so forcing a defragement in third-party programs will cause excessive wear and reduce their life by needlessly rewriting data.

Trim, or trimming, is a SSD's alternative to defragmentation and is only used to help inform the SDD which blocks that the filesystem has freed and aid the wear-leveling, extending the life of the SSD. The OS typically handles issuing trim commands, but can be inspected and manually invoked on Windows with the built-in Drive Optimizer utility.

On Windows specifically, you do not need to ritually run Drive Optimizer as Windows will schedule periodic defragging and trims (or "optimizing" in Microsoft's vocabulary) when your computer is idle.

> [!WARNING] For removable SSDs, especially using  separately bought enclosures
> Do check Drive Optimizer and see if it's recognized as a SSD properly as it will show "Optimized" verses "Defragmented." Some enclosures can misreport that they hold a HDD and _not_ a SSD so you might need to adjust settings to avoid defragmenting the SSD if you intend to keep it connected for extended periods.

## Advanced Uninstallers
#### Revo Uninstaller
This is one of the few maintenance tools we can recommend, and it is for a specific need. If you ever have an app break and continue to misbehave after a reinstall you may need to clear out more items than Windows natively does. 

Running this tool can clear residual configuration files and registry entries. The registry cleanup on this application has the same warning as CCleaner, it can break the OS if something goes wrong.

[Download](https://www.revouninstaller.com/start-freeware-download-portable)