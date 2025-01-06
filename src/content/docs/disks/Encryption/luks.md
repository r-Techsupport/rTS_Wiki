---
title: LUKS
sidebar:
    hidden: false
has_children: false
has_toc: true
grand_parent: Disks
parent: Disk Encryption
pagefind: true
last_modified_date: 2023-12-17
---

## Setting up LUKS

LUKS (Linux Unified Key Setup) is a disk encryption specification for Linux. It provides a standard for encrypting entire storage devices, including hard drives and flash drives. This article will cover the setup and use of LUKS, as well as important things to keep in mind when using LUKS encryption.

### Minimum Requirements

To use LUKS, you will need a Linux operating system with the following minimum requirements:

- Linux Kernel version 2.6.x or later
- A supported Linux Distro

### Encrypting a Device with LUKS

To encrypt a device using LUKS:

1. Open a terminal window and enter the following command: `sudo cryptsetup luksFormat /dev/sdX` (where `/dev/sdX` is the device you wish to encrypt).
2. Follow the on-screen prompts to create a password for the encrypted device.
3. Enter the following command to open the encrypted device: `sudo cryptsetup luksOpen /dev/sdX cryptname` (where `cryptname` is the name you wish to assign to the encrypted device).
4. Create a filesystem on the encrypted device: `sudo mkfs.ext4 /dev/mapper/cryptname`
5. Mount the encrypted device: `sudo mount /dev/mapper/cryptname /mnt/mountpoint` (where `/mnt/mountpoint` is the mount point you wish to use).

### Unlocking an Encrypted Device

To unlock an encrypted device:

1. Open a terminal window and enter the following command: `sudo cryptsetup luksOpen /dev/sdX cryptname` (where `/dev/sdX` is the encrypted device and `cryptname` is the name you assigned to the encrypted device).
2. Enter the password for the encrypted device.
3. Mount the encrypted device: `sudo mount /dev/mapper/cryptname /mnt/mountpoint` (where `/mnt/mountpoint` is the mount point you wish to use).

### Advantages and Disadvantages

#### Advantages

- LUKS is broadly available across Linux Distributions

#### Disadvantages

- No GUI (Graphical User Interface)
- Requires a certain degree of knowledge of the Linux Terminal
- No way of accessing Drives on Other Operating systems without usage of 3rd Party Software 

