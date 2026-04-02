---
title: Understanding and Troubleshooting UEFI Boot Settings
description: A guide to understanding UEFI boot settings, including CSM, and how to troubleshoot common boot issues related to UEFI configurations.
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
The Compatibility Support Module (CSM) is a feature in UEFI firmware that emulates an old legacy BIOS environment, allowing older operating systems, bootloaders, and hardware to work on modern UEFI‑based systems. 

It lets the motherboard boot from MBR‑style disks and run BIOS‑style OSes by translating UEFI hardware into a BIOS‑like interface, so 16‑ or 32‑bit bootloaders and option ROMs can still function.

### Modern OSes and UEFI
Most modern operating systems like Windows 10/11 and recent Linux versions are designed for UEFI and do not need the Compatibility Support Module (CSM). 

Enabling CSM can cause boot problems or weaken UEFI security features, so it is generally recommended to disable CSM in the UEFI/BIOS to ensure the OS runs properly and securely.

> [!IMPORTANT] Important
>
> Windows 11 requires UEFI with Secure Boot enabled, which means **CSM must be disabled for Windows 11 to boot properly**.

### Where to Find CSM Settings
CSM settings are typically found in the UEFI firmware settings under the "Boot" or "Advanced" sections. The exact location and naming can vary depending on the motherboard manufacturer and UEFI version. 

Look for options related to "Boot Mode," "Legacy Support," or "CSM" to enable or disable CSM.