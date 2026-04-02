---
title: Understanding and Troubleshooting UEFI Boot Settings
sidebar:
    hidden: false
parent: Factoids
has_children: false
pagefind: true
last_modified_date: 2026-04-01
---
UEFI (Unified Extensible Firmware Interface) is a modern firmware interface that has replaced the traditional BIOS in most computers. It provides a more flexible and powerful environment for booting and managing hardware. 

However, UEFI can sometimes cause boot issues if not configured correctly. This guide will help you understand common UEFI boot issues and how to troubleshoot them.

## CSM (Compatibility Support Module) Issues
The Compatibility Support Module (CSM) is a component inside UEFI firmware that emulates a traditional legacy BIOS environment, so that older operating systems, bootloaders, and hardware (that don’t understand UEFI) can still work on modern UEFI‑based motherboards. It lets the motherboard boot MBR‑style disks and legacy BIOS‑based operating systems (for example, very old Windows or Linux installs) even though the firmware itself is UEFI‑based.

It effectively “translates” UEFI hardware into a BIOS‑like environment, so 16‑ or 32‑bit bootloaders and option ROMs can still run.

### Modern OSes and UEFI
Most modern operating systems (like Windows 10/11, and recent Linux distributions) are designed to work with UEFI and do not require CSM. In fact, enabling CSM can sometimes cause issues with booting modern OSes, as it may interfere with UEFI features and security measures. If you are using a modern OS, it is generally recommended to disable CSM in the UEFI settings to ensure optimal performance and compatibility.

> [!IMPORTANT] Important
> Windows 11 requires UEFI with Secure Boot enabled, which means CSM must be disabled for Windows 11 to boot properly.

### Where to Find CSM Settings
CSM settings are typically found in the UEFI firmware settings under the "Boot" or "Advanced" sections. The exact location and naming can vary depending on the motherboard manufacturer and UEFI version. 

Look for options related to "Boot Mode," "Legacy Support," or "CSM" to enable or disable CSM.