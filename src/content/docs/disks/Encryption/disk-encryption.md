---
title: Disk Encryption
sidebar:
    hidden: false
has_children: true
pagefind: true
last_modified_date: 2024-03-09
parent: Disks
---

Disk encryption is used to protect sensitive data on your devices like photos, email accounts and passwords. 

Modern phones have been using encryption by default since the early to mid 2010's, in most cases you cannot disable this functionality.

Enabling encryption on other devices, such as laptops and desktops, is a choice for the user. Encryption is more useful on mobile platforms like a laptop than a desktop but you may still choose to add these protections on any device you desire.

> [!NOTE] Information
> 
> If you are seeing BitLocker on your computer but you did not set it up would could have a device with [BitLocker OEM](https://learn.microsoft.com/en-us/windows-hardware/design/device-experiences/oem-bitlocker).

> [!WARNING] Risk of data loss with encryption
> Should something fail during the normal use of your encrypted device you may be required to use recovery methods or keys to regain access to your data. It is very important you understand and protect these methods or you may lose all chances to your data.
> 
> On phones you have no recovery options. Your data is gone when the device has an issue. For this reason we recommend [making backups](/backups/backups) of all your devices.

## Encryption Methods and Their Platforms

> [!TIP] Click on any method to view our article on the subject.

| Method | Windows | Linux | MacOS |
| ------ | ------- | ----- | ----- |
| [BitLocker](/disks/encryption/bitlocker.html) | Yes | Using [Dislocker](/disks/disk-encryption/dislocker.html) | Third party tools required |
| [FileVault](/disks/encryption/filevault.html) | No | No | Yes |
| [LUKS](/disks/encryption/luks.html) | No  | Yes | No |
| [Veracrypt](/disks/encryption/veracrypt.html) | Yes | Yes | Yes |