---
layout: default
title: Disk Encryption
nav_exclude: false
has_children: true
search_exclude: false
last_modified_date: 2023-12-17
parent: Disks
---
# Disk Encryption
Disk encryption is used to protect sensitive data on your devices like photos, email accounts and passwords. 

Modern phones have been using encryption by default since the early to mid 2010's, in most cases you cannot disable this functionality.

Enabling encryption on other devices, such as laptops and desktops, is a choice for the user. Encryption is more useful on mobile platforms like a laptop than a desktop but you may still choose to add these protections on any device you desire.

> ⓘ If you are seeing Bitlocker on your computer but you did not set it up would could have a device with [Bitlocker OEM](https://learn.microsoft.com/en-us/windows-hardware/design/device-experiences/oem-bitlocker).

> ❗ **Risk of data loss with encryption**<br>
> Should something fail during the normal use of your encrypted device you may be required to use recovery methods or keys to regain access to your data. It is very imporatnt you understand and protect these methods or you may lose all chances to your data. <br>
> On phones you have no recovery options. Your data is gone when the device has an issue. For this reason we recommend [making backups](/docs/backups/backups.md)) of all your devices.

## Encryption Methods and Their Platforms

> ⓘ Click on any method to view our article on the subject.

| Method | Windows | Linux | MacOS |
| ------ | ------- | ----- | ----- |
| [Bitlocker](/docs/disks/encryption/bitlocker.html) | Yes | Using [Dislocker](/docs/disks/disk-encryption/dislocker.html) | Third party tools required |
| [FileVault](/docs/disks/encryption/filevault.html) | No | No | Yes |
| [LUKS](/docs/disks/encryption/luks.html) | No  | Yes | No |
| [Veracrypt](/docs/disks/encryption/veracrypt.html) | Yes | Yes | Yes |