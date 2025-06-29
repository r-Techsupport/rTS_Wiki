---
title: Boot Windows into safe mode
description: Guide on how to boot Windows into safe mode for troubleshooting
sidebar:
    hidden: false
has_children: false
parent: Factoids
pagefind: true
last_modified_date: 2025-6-29
---

Windows has a troubleshooting mode called safe mode, where Windows will load only critical drivers and services necessary for proper function. It is especially useful when issues exist in normal mode or when uninstalling drivers used by Windows.
All non-critical drivers and services will not be loaded. For example for graphics Windows will use a generic driver instead of one provided by vendor like Nvidia, AMD, Intel, etc. Services for gaming platforms, anti-cheats, peripheral controls, audio software wont run unless explicitly started.

Windows in safe mode will have a limited resolution, black background, and will display `Safe mode` text in corners as well as build version on top of desktop.

![Safe mode desktop](../../../assets/safe-mode-assets/safemode-4.png)

To boot Windows into safe mode, follow below steps.

## Windows is bootable

Following methods will set boot into safe mode from a working Windows system. Start with a first method and, if a method fails, move to next one.

   <details>
      <summary>Method 1: Using Windows Recovery Environment</summary>

    1. Open Start menu, press and hold Shift key, and click Restart.
![Start menu restart with shift](../../../assets/safe-mode-assets/safemode-1.png)

    2. When Windows Recovery Environment shows with Choose an option, click Troubleshoot, then Advanced options, then Start-up Settings, then Restart. PC will reboot.
    3. After reboot Windows will present boot options. Press 5 on keyboard to start Windows in safe mode with networking.

   </details>
   <details>
      <summary>Method 2: Using msconfig</summary>

 > [!CAUTION]
 > Follow the steps exactly as stated unless guided by a staff member. Changing other settings in msconfig may cause Windows to fail to boot.

 > [!NOTE]
 > After tasks in safe mode are done, make sure to follow exit safe mode steps below. Otherwise Windows will boot back into safe mode after rebooting.

    1. Open Start menu, type msconfig and press Enter. A System Configuration window will open.
    2. Select Boot tab, check Safe boot and select Network. Click Apply and OK. Click Restart on following System Configuration dialog window. PC will reboot.
![msconfig safemode](../../../assets/safe-mode-assets/safemode-2.png)

    3. After reboot Windows will boot into safe mode.
    4. Once all required tasks in safe mode are done, follow Exit safe mode steps below.
   </details>
   <details>
      <summary>Method 3: Using command prompt</summary>

 > [!CAUTION]
 > Follow the steps exactly as stated unless guided by a staff member.
 > Double-check typed commands with the guide. A mistype may cause Windows to fail to boot.

 > [!NOTE]
 > After tasks in safe mode are done, make sure to follow exit safe mode steps below. Otherwise Windows will boot back into safe mode after rebooting.

    1. Open Start menu, type cmd, confirm that Command Prompt is selected and press at the same time Control, Shift and Enter. Alternatively click Run as administrator. Confirm opening the app when prompted.
    2. Type the following command and press Enter. Command will confirm successful operation once ran.
```
bcdedit /set {current} safemode Network
```
    3. Close Command prompt and reboot the PC.
    4. After reboot Windows will boot into safe mode.
    5. Once all required tasks in safe mode are done, follow Exit safe mode steps below.
   </details>


## Windows fails to boot

Following methods will set boot into safe mode outside of Windows system. Start with a first method and, if a method fails, move to next one.

   <details>
      <summary>Method 1: Trigger Windows Recovery Environment during boot</summary>

Windows will automatically open recovery environment when it fails to boot 3 times. If Windows crashes during boot, skip to step 4. Otherwise, follow steps below:

     1. Start PC and wait for Windows boot animation to show (spinning circle).
     2. Use any of the following methods.

         - Press reset button on PC case.
         - Press power button for 5 seconds.
         - Switch off or unplug power from power supply. Power on the power supply.
         - If PC is a laptop and has removable battery, remove it. Plug battery back in.

     3. Repeat step 1 until Windows shows Please wait or Preparing automatic repair during boot.
     4. Wait until blue screen with Recovery or Automatic repair shows.
     5. Click See advanced repair options, then Troubleshoot, then Advanced options, then Start-up Settings, then Restart. PC will reboot.
     6. After reboot Windows will present boot options. Press 5 on keyboard to start Windows in safe mode with networking..

   </details>
   <details>
      <summary>Method 2: Using bootable USB with Windows setup</summary>

You can use a bootable USB with a Windows setup to run Windows in safe mode. Follow the Windows installation guide until you see Select setup option then follow steps below:
     1. Select Repair my PC and click Next. Select keyboard layout when prompted.
![Setup repair PC](../../../assets/safe-mode-assets/safemode-3.png)

     2. Click Troubleshoot, then Advanced options, then Command Prompt.
     3. Type the following command and press Enter. Command will confirm successful operation once ran.
```
bcdedit /set {default} safeboot Network
```
    4. Close Command prompt and reboot the PC.
    5. After reboot Windows will boot into safe mode.
    6. Once all required tasks in safe mode are done, follow Exit safe mode steps below.
   </details>


## Exit safe mode

If you entered safe mode using msconfig or command prompt method, you need to disable the safe mode before rebooting, otherwise Windows will boot back into safe mode.

To disable safe mode, use one of the following methods below.

<details>
   <summary>Method 1: Using msconfig</summary>

 > [!CAUTION]
 > Follow the steps exactly as stated unless stated by otherwise a staff member. Changing other settings in msconfig may cause Windows to fail to boot.

    1. Open Start menu, type msconfig and press Enter. A System Configuration window will open.
    2. Select Boot tab, uncheck Safe boot, then click Apply and OK. Click Restart on following System Configuration dialog window. PC will reboot.
    3. After reboot Windows will boot into safe mode.
    4. Once all required tasks in safe mode are done, follow Exit safe mode steps below.
</details>

<details>
   <summary>Method 2: Using command prompt</summary>

 > [!CAUTION]
 > Follow the steps exactly as stated unless stated otherwise by a staff member.
 > Double-check typed commands with the guide. A mistype may cause Windows to fail to boot.

    1. Open Start menu, type cmd, confirm that Command Prompt is selected and press at the same time Control, Shift and Enter. Alternatively click Run as administrator. Confirm opening the app when prompted.
    2. Type the following command and press Enter. Command will confirm successful operation once ran.
```
bcdedit /deletevalue {current} safeboot
```
    3. Close Command prompt and reboot the PC.
    4. After reboot Windows will boot into safe mode.
    5. Once all required tasks in safe mode are done, follow Exit safe mode steps below.
</details>

## External guides

- [Microsoft startup settings](https://support.microsoft.com/en-us/windows/windows-startup-settings-1af6ec8c-4d4a-4b23-adb7-e76eef0b847f)
- [Dell guide](https://www.dell.com/support/kbdoc/en-us/000124344/how-to-boot-to-safe-mode-in-windows-10) (works also for non-Dell PCs)