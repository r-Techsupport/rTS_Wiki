---
title: How to do an In-Place Install/Upgrade
sidebar:
    hidden: false
has_children: false
parent: General Guides
pagefind: true
last_modified_date: 2025-01-23
---

An in-place upgrade reinstalls Windows over your current setup without losing your files, settings, or apps. It refreshes system files to fix issues like system corruption or configuration problems by replacing core OS files. This is the highly preferred alternative to a reset, and the outcome is the same too.

> [!WARNING] Do not use the built-in Reset features of Windows!
>
> These options do not perform a full system reinstall and can result in a broken OS. Resets use the current OS image as a base, which means any issues from the old installation can carry over and potentially cause further damage.

> [!NOTE] Neither Resets nor In-Place upgrades help with removing Malware!
>
> Please refer to our [official malware](/safety-security/malware-guide) guide below to see how to deal with malware.

Follow either method 1 or 2 to perform this action.

### Method 1: Downloading the Windows ISO file
1. Download the Windows ISO file from Microsoft's official website:
    - Windows 11: https://www.microsoft.com/en-us/software-download/windows11
        - Scroll all the way to the bottom to get the direct link to download the ISO.
    - Windows 10: https://www.microsoft.com/en-us/software-download/windows10
        - Follow the instructions provided on the page to see how you can download the ISO file using the Media Creation Tool.
2. Double click the downloaded ISO file to mount it.
3. Head to the mounted drive by double clicking it.
4. In the mounted drive folder, select "setup.exe".
5. Follow the on-screen instructions to proceed with the in-place upgrade/install.

    ![method-1-steps.jpg](/src/assets/in-place-upgrade/method-1-steps.jpg)

### Method 2: Utilizing Recovery Settings

> [!NOTE] This method will only work in Windows 11 24H2 and higher!
>
> Windows 11 23H2 or lower, or Windows 10 installs will not be able to utilize this method. [Please refer to method 1 instead](/guides/in-place-upgrade/#method-1-downloading-the-windows-iso-file).

1. Open up settings, and head to `System` -> `Recovery`.
2. You will be met with multiple options, select "Fix problems using Windows Update."
    - It may have a button labled "Reinstall now".

    ![method-2-steps.png](/src/assets/in-place-upgrade/method-2-steps.png)