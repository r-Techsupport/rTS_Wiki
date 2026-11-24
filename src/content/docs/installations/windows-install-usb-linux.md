---
layout: default
title: Create Windows 11 Install USB on Linux
sidebar:
    hidden: false
has_children: false
parent: General Guides
pagefind: true
last_modified_date: 2026-11-24
description: A guide for how to create a Windows 11 install USB on a Linux device.
---

> [!IMPORTANT] Important
>
> This guide only covers creating the Windows install USB! For the installation steps, continue on from the step in [Installing Windows 11 page](../install-11/#bios-and-setup) after creating the MCT!

## Prerequisites

* An internet connection.
* A working Linux computer (Any distro).
* A USB flash drive that is at least 16 GB or greater.

> [!NOTE] Why not an 8 GB USB?
>
> The ISO file utilized in this install method is greater than 8 GB for modern Windows versions (26H2 is 8.4 GB for example). A 8 GB USB unfortunately only has 7.45 GB of usable space, and therefore will not be able to be utilized for this procedure.
>
> The installer created by Windows MCT however is different and can still be contained within the 8 GB limit published by Microsoft for installation requirements.

Do note that simply dropping the ISO file into the USB will not make it bootable! You need to properly flash the USB drive such that the BIOS of the target system will acknowledge it and boot the installer.

> [!CAUTION] Caution
>
> This procedure will wipe the USB Flash drive, so ensure you have nothing important on the USB drive, and back up all important documents.

## Creating and preparing the installation media

### Downloading the ISO

Download the Windows 11 ISO file from the [Download Windows 11](https://www.microsoft.com/en-us/software-download/windows11) page. Scroll down to the section titled "**Download Windows 11 Disk Image (ISO) for x64 devices**" and select the download option.

![USB.png](../../../assets/install-11/usb-linux-mac/ISO_download.png)

> [!NOTE] Information
>
> The options "**Windows 11 Installation Assistant**" and "**Create Windows 11 Installation Media**" (if visible) cannot be used as those are `.exe` file downloads, which will not work on Linux.

Once this is done, there are numerous ways of flashing the ISO to the USB drive. This guide will cover two of them:

* Using Ventoy to create a bootable environment for the USB.
* Manual flashing of the ISO using `wimlib`/`wimtools`, `dosfstools`, `mtools`, `parted` and `rsync`.

### Method 1: Using Ventoy (Easy Method)

Follow the [Linux instructions of our Ventoy guide](../../guides/ventoy/#linux) to create the bootable Environment. Then follow the usage section in order to understand how to use it.

### Method 2: Manual flashing

1. Open up your Terminal. Install the required tools `wimlib`/`wimtools`, `dosfstools`, `mtools`, `parted` and `rsync`.

    > [!TIP] How to install the required tools
    >
    > Refer below for installation instructions on different Linux distros.
    >
    > <details markdown='1'>
    >   <summary>Installing the required tools</summary>
    >
    > **Debian / Ubuntu / Linux Mint**:
    >
    > ```sh
    > sudo apt update
    > sudo apt install wimtools dosfstools mtools parted rsync
    > ```
    >
    > **Fedora / RHEL / CentOS / AlmaLinux**:
    >
    > ```sh
    > sudo dnf install wimlib dosfstools mtools parted rsync
    > 
    > ```
    >
    > **Arch / Manjaro / CachyOS**:
    >
    > ```sh
    > sudo pacman -S wimlib dosfstools mtools parted rsync
    > ```
    >
    > </details>

2. Identify and wipe the USB and **format it to FAT32**. Utilize GParted for a GUI based approach.

    > [!CAUTION] Caution
    >
    > This step will wipe the selected USB Flash drive, so ensure you have nothing important on the USB drive, and back up all important documents.

    If you wish to manually partition it using shell commands, you may utilize the instructions below.

    > [!TIP] How to format and wipe the USB to FAT32
    >
    > Follow the [How to identify drives in Linux](../../disks/identify-drives-linux) guide if you are unsure about the drive you are formatting.
    >
    > <details markdown='1'>
    >   <summary>Selecting and formatting USB to FAT32</summary>
    >
    > * List all disks using `lsblk`.
    > * Reconfirm USB size and model. Assume in this case its `/dev/sdb`
    > >
    > > ```sh
    > > sudo wipefs -a /dev/sdb
    > > ```
    > >
    > * Partition the USB accordingly:
    > >
    > > ```sh
    > > sudo parted /dev/sdb --script mklabel gpt
    > > sudo parted /dev/sdb --script mkpart primary fat32 1MiB 100%
    > > sudo parted /dev/sdb --script set 1 boot on
    > > ```
    > >
    > * Now format it to FAT32:
    > >
    > > ```sh
    > > sudo mkfs.vfat -F 32 -n WININSTALL /dev/sdb1
    > > ```
    > >
    > </details>

3. Rename the ISO downloaded in step 1 to `Win11.iso`. Mount the ISO and USB (assuming its still in the `Downloads` directory):

    ```sh
    sudo mkdir -p /mnt/iso /mnt/usb
    sudo mount -o loop ~/Downloads/Win11.iso /mnt/iso
    sudo mount /dev/sdb1 /mnt/usb
    ```

    Verify that it did mount using `ls` (these should show all the files accordingly in the mounts):

    ```sh
    ls /mnt/iso
    ls /mnt/usb
    ```

4. Copy everything to the USB except `install.wim`:

    ```sh
    rsync -av --exclude=sources/install.wim /mnt/iso/ /mnt/usb/
    ```

5. Split the `.WIM` file onto the USB into multiple `.SWM` files.

    ```sh
    sudo wimsplit /mnt/iso/sources/install.wim /mnt/usb/sources/install.swm 3800
    ```

    > [!NOTE] Information
    >
    > This step is necessary as the `.WIM` file is larger than the FAT32 single-file size limit of 4 GB (typically 6 GB or greater).

    Verify the split is successful using `ls`:

    ```sh
    ls -lh /mnt/usb/sources/install*.swm
    ```

6. Unmount the USB which is now ready for use.

    ```sh
    sudo umount /mnt/iso /mnt/usb
    ```

## Post Windows Install Media creation steps

Once the flashing is complete, you can now insert it into the target computer to install Windows to. Continue on from the step in [Installing Windows 11 page](../install-11/#bios-and-setup) after creating the MCT.
