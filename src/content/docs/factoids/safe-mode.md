---
title: Boot Windows into safe mode
sidebar:
    hidden: false
has_children: false
parent: Factoids
pagefind: true
last_modified_date: 2025-6-29
---

To enter safe mode, follow below steps.

<details>
   <summary>Windows is bootable</summary>

   <details>
      <summary>Method 1: Use Windows Recovery Environment</summary>

    1. Open Start menu, press and hold Shift key, and click Restart.
    2. When Windows Recovery Environment shows with Choose an option, click Troubleshoot, then Advanced options, then Start-up Settings, then Restart. PC will reboot.
    3. After reboot Windows will present boot options. Press 5 on keyboard to start Windows in safe mode with networking.

   </details>
   <details>
      <summary>Method 2: Use msconfig</summary>

 > [!CAUTION]
 > Follow the steps exactly as stated unless stated by otherwise a staff member. Changing other settings in msconfig may cause Windows to fail to boot.

    1. Open Start menu, type msconfig and press Enter. A System Configuration window will open.
    2. Select Boot tab, check Safe boot and select Network. Click Apply and OK. Click Restart on following System Configuration dialog window. PC will reboot.
    3. After reboot Windows will boot into safe mode.
    4. Once all required tasks in safe mode are done, follow Exit safe mode steps below.
   </details>
   <details>
      <summary>Method 3: Use command prompt</summary>

 > [!CAUTION]
 > Follow the steps exactly as stated unless stated otherwise by a staff member. Changing other settings may cause Windows to fail to boot.
 > Double-check typed commands with the guide.

    1. Open Start menu, type cmd, confirm that Command Prompt is selected and press at the same time Control, Shift and Enter. Alternatively click Run as administrator. Confirm opening the app when prompted.
    2. Type the following command and press Enter. Command will confirm successful operation once ran.
```
bcdedit /set {current} safemode Network
```
    3. Close Command prompt and reboot the PC.
    4. After reboot Windows will boot into safe mode.
    5. Once all required tasks in safe mode are done, follow Exit safe mode steps below.
   </details>
</details>


<details>
   <summary>Windows fails to boot</summary>

   <details>
      <summary>Method 1: Trigger Windows Recovery Environment during boot</summary>
   </details>
   <details>
      <summary>Method 2: Use bootable USB with Windows setup</summary>
   </details>
</details>