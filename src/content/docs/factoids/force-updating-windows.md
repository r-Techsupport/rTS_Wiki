---
title: Force updating Windows
sidebar:
    hidden: false
parent: Factoids
has_children: false
pagefind: true
last_modified_date: 2024-03-09
---
## Using the Windows media creation tool "Update now" option
To force update Windows 10 [go to the Microsoft site](https://www.microsoft.com/en-us/software-download/windows10) and click 'update now'

To force update Windows 11 download the "Windows 11 Installation Assistant" [from Microsoft](https://www.microsoft.com/en-us/software-download/windows11) then run it.

## Using a mounted ISO
If the Windows 10 upgrade tool or the Windows 11 installation assistant fails to update Windows and you are on an old version number of Windows, you can try downloading then mounting the "ISO" file for the OS.

### Windows 10
1. Download the Windows 10 Media Creation Tool [from the Microsoft site](https://www.microsoft.com/en-us/software-download/windows10) by clicking "Download now" under the "Create Windows 10 installation media"
2. Run the downloaded tool and choose "Create installation media" instead of "Upgrade this PC now" when you run it.
3. Choose the appropriate language and edition values then click "Next"
4. Choose "ISO" and click "Next"
5. Choose a location to save the file too then click "Save"

### Windows 11
1. Download the "ISO" from the "Download now" button under "Download Windows 11 Disk image (ISO) for ... devices" on the [Windows 11 download page](https://www.microsoft.com/en-us/software-download/windows11).
    - You may need to choose several options from dropdowns and choose "Download now" several times.

### Windows 10 and 11
1. Once you have the ISO downloaded double click the file to mount it, it will appear as a CD drive under "This PC"
2. Open the drive and run "setup.exe" to attempt the update again.

## Using a USB
This is perhaps the best method of the three. This will also wipe any data stored on the USB flash drive that is used.

1. Create the install media from Part 1 of our [Windows 10](/installations/install-10#part-1-creating-usb-installer) or [Windows 11](/installations/install-11#part-1-creating-usb-installer) install guides.
2. Open the created USB in File Explorer and run "setup.exe" to force upgrade Windows.