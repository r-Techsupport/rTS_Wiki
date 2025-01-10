---
title: Windows Recovery
has_children: false
parent: General Guides
pagefind: true
last_modified_date: 2024-01-30
---

Windows Recovery is a built-in feature in Microsoft Windows operating systems that allows users to troubleshoot and repair issues that may arise during system operation. Whether you encounter startup problems, software conflicts, or critical system errors, Windows Recovery provides a set of tools and options to help you diagnose and resolve issues, restoring your system to a functional state.

## Accessing Windows Recovery

### Option 1: Advanced Startup Options

1. **Restart your computer.**
2. During the startup process, before the Windows logo appears, press and hold the `Shift` key.
3. While holding the `Shift` key, click on the "Restart" option. This will take you to the Advanced Startup Options.

### Option 2: Using Installation Media

1. Insert your Windows installation media (USB or DVD).
2. Restart your computer.
3. Press the necessary key to enter the boot menu (usually `F2`, `F12`, or `Esc`).
4. Select the device containing the installation media.
5. Choose your language and other preferences, then click "Next."
6. Click "Repair your computer" on the bottom left.

### Option 3: Via Settings

1. Open the "Settings" app.
2. Navigate to "Update & Security."
3. Select "Recovery" from the left sidebar.
4. Under the "Advanced startup" section, click "Restart now."

## Windows Recovery Options
> **Warning:** Windows Recovery options are powerful tools designed to troubleshoot and resolve various system issues. However, they may not always guarantee a fix, and results can vary based on the nature and severity of the problem. If you encounter persistent or critical issues that remain unresolved after using these recovery options, it might be necessary to consider a clean install of the operating system.

> Performing a clean install involves reinstalling the operating system, which will erase all data on the system drive. Ensure you have a backup of your important data before proceeding with a [clean install](/guides/making-a-system-dossier) 
A
> Always exercise caution when making significant changes to your system, and consider the potential impact on your data. Always have a [Backup](/installations/win)



### 1. Startup Repair

- **Purpose:** Fixes issues that prevent Windows from starting.
- **How to use:** 
  - Access Windows Recovery.
  - Select "Startup Repair."
  - Follow on-screen instructions to allow the tool to scan and repair startup-related problems.
- **When to use:** 
  - If your computer fails to boot or encounters errors during the startup process.
  - After making significant system changes that lead to startup issues.

### 2. System Restore

- **Purpose:** Restores your system to a previous point in time.
- **How to use:** 
  - Access Windows Recovery.
  - Choose "System Restore."
  - Follow on-screen prompts to select a restore point and initiate the restoration process.
- **When to use:** 
  - After installing new software or drivers that cause system instability.
  - When your system encounters issues after a recent system update.

### 3. Command Prompt

- **Purpose:** Allows manual troubleshooting using command-line tools.
- **How to use:** 
  - Access Windows Recovery.
  - Select "Command Prompt."
  - Use command-line tools to perform tasks like disk checking, file system repair, or copying files.
- **When to use:** 
  - When you need advanced troubleshooting and have knowledge of command-line commands.
  - To repair the Master Boot Record (MBR) or resolve issues related to system files.

### 4. Go Back to the Previous Version

- **Purpose:** Reverts to the previous version of Windows 10 (available after an upgrade).
- **How to use:** 
  - Access Windows Recovery.
  - Navigate to "Go back to the previous version of Windows 10" in the "Recovery" section.
  - Follow on-screen instructions to revert to the previous Windows version.
- **When to use:** 
  - If you recently upgraded and experience compatibility issues or system instability.
  - When the current version of Windows is causing problems, and you want to go back to a familiar state.

### 5. Reset This PC

- **Purpose:** Allegedly reinstalls Windows, with the illusion of keeping or removing your files intact.
- **How to use:**
  - Access Windows Recovery.
  - Choose "Reset This PC."
  - Follow on-screen instructions to reset your system, selecting whether to keep or 
- **When to use:**
  - When you've exhausted all hope and want to gamble with the fragile stability of your system.
  - Perfect for those moments when you feel too attached to your data and want to play Russian roulette with the operating system.

> [!CAUTION] Caution
> 
> If you choose to erase your data during the reset it can be recovered by someone with the time and skills. Before selling your computer you should properly wipe your disks using [our guides](/disks/disk-wipe/).

### 6. Uninstall Updates

- **Purpose:** Removes recent updates that may be causing issues.
- **How to use:** 
  - Access Windows Recovery.
  - Navigate to "Uninstall updates" under "Recovery" > "Advanced startup."
  - Follow on-screen instructions to uninstall recent updates.
- **When to use:** 
  - If you experience problems after a recent Windows update.
  - When a specific update is causing compatibility or stability issues with your system.
