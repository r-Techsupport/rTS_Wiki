---
title: Troubleshooting UEFI Boot Settings
description: A guide to understanding UEFI boot settings, and how to troubleshoot common boot issues related to UEFI configurations.
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

## TPM (Trusted Platform Module) Issues
The Trusted Platform Module (TPM) is a hardware component that provides secure cryptographic functions and is used for features like BitLocker encryption and Windows Hello.

Windows 11 requires TPM 2.0 for installation and operation, so if your system does not have a compatible TPM or if TPM is disabled in the UEFI firmware, you may encounter issues when trying to install or run Windows 11.

> [!IMPORTANT] Important
>
> We do not recommend utilizing any tool or "OS modification" that claims to bypass the TPM requirement for Windows 11, as these methods can lead to security vulnerabilities and may cause instability or other issues with the operating system.
>
> If your hardware does not meet the TPM requirements for Windows 11, it is recommended to switch to another operating system with no such requirements (such as Linux), or to upgrade your hardware to meet the requirements if you want to use Windows 11.

### Where to Find TPM Settings
TPM settings are typically found in the UEFI firmware settings under the "Security" or "Advanced" sections. Look for options related to "TPM," "Security Device," or "Trusted Platform Module" to enable or disable TPM.

## Secureboot Issues
Secure Boot is a security feature built into UEFI firmware that ensures only trusted, digitally signed software can run during the boot process, blocking unauthorized or malicious code (like boot‑level rootkits) from loading before the OS starts.

It checks digital signatures of the firmware, bootloader, and OS components, allowing only those signed by trusted authorities (such as Microsoft or the device manufacturer).

> [!INFORMATION] Note
>
> **Having [Secure Boot on is mandatory on Windows 11](https://support.microsoft.com/en-us/windows/windows-11-and-secure-boot-a8ff1202-c0d9-42f5-940f-843abef64fad).** Many anti-cheats and DRM protections used by apps and games also require it.

### Where to Find Secure Boot Settings
Secure Boot settings are typically found in the UEFI firmware settings under the "Security" or "Boot" sections. 

Look for options related to "Secure Boot," "Secure Boot Control," or "Secure Boot Mode" to enable or disable Secure Boot.

Some boards also have a “OS Type” or “OS Type / Secure Boot OS” dropdown where you must select “Windows UEFI mode” for Secure Boot to work correctly with Windows 11.

> [!IMPORTANT] Important
>
> Sometimes enabling Secure Boot can cause a black screen to occur. Please find more information about it [here](/guides/blackscreen-after-secureboot).

## GPT vs MBR Issues
UEFI firmware typically requires the boot drive to be partitioned using the GPT (GUID Partition Table) scheme, while older BIOS systems use the MBR (Master Boot Record) scheme. 

GPT was introduced as a successor to MBR and offers several advantages, including support for larger drives and more partitions. If your drive is partitioned with MBR, you may encounter boot issues when trying to boot in UEFI mode. 

> [!INFORMATION] Note
>
> In the case of Windows 11, the installer will not even allow you to proceed with the installation if the drive is not GPT‑formatted.

### Converting MBR to GPT during installation
During installation of Windows 10/11, if you encounter an error about the drive being MBR when trying to install in UEFI mode, you can convert the drive to GPT using diskpart by following the guide linked [here](/factoids/diskpart-gpt).

> [!WARNING] Converting MBR to GPT
>
> Converting a drive from MBR to GPT will erase all data on the drive, so make sure to back up any important data before proceeding with the conversion.

> [!CAUTION] Using mbr2gpt.exe
> 
> If you are upgrading from Windows 10 to Windows 11 but you are using a MBR drive, the recommended way is to [clean install Windows 11](/installations/install-11) via USB and convert the drive to GPT during installation instead of relying on the `mbr2gpt` tool.
>
> The tool, while advertised by Microsoft as a "safe" way to convert drives is considered dangerous or high risk as it deals with low-level partition table manipulation. If something goes wrong during this process, it can lead to complete data loss, as well as result in a non-bootable system that may require a full reinstall of the OS to fix.