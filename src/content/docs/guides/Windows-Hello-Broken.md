---
title: Windows Hello is not Working
sidebar:
    hidden: false
has_children: false
parent: General Guides
pagefind: true
last_modified_date: 2025-10-24
---
# User cannot log into Windows
In the event the user is unable to log into Windows via pin or Windows Hello, and using a password does not work, nor does resetting the pin work, follow the steps below to reset the login screen prompt.

![login_failed.png](../../../assets/fixing-cleanboot/login_fail.png)

There can be numerous reasons for failure to login:
- Disabled Windows services accidentally wile performing a cleanboot (Which also includes Windows Hello)
- Enabled Diagnostic Startup (which also disables Windows Hello as it is considered a non-essential service)
- Third party biometric devices or Security (Antivirus) software and outdated or corrupted drivers
- Corrupted PIN configuration or corrupted system files
- Faulty or buggy Windows updates (Such as [KB5055523](https://support.microsoft.com/en-us/topic/april-8-2025-kb5055523-os-build-26100-3775-277a9d11-6ebf-410c-99f7-8c61957461eb#id0ebbfbf=symptom))

> [!TIP] Information
> Windows Hello is a login method in addition to the default password login. If user were to be utilizing other methods of logging in such as PIN, Facial Recognition or Fingerprint, this will be utilizing Windows Hello.
>
> The reason for being unable to log in is because Windows Hello services are down. The following guide will walk the user through on how to get those services up and running again.

> [!IMPORTANT] Important
> All the screenshots depict Windows 10, but Windows 11 will operate the same exact way.

## Step 1: Restart into Windows Recovery Environment (WinRE) and load Regedit

Press and hold the `Shift` key when clicking the `Restart` button on the login page. **Keep holding the shift key** until you get the blue screen depicting troubleshooting options.

> [!NOTE] Note
> You may have to restart twice to get to the troubleshooting screen.

![shift_restart.webp](../../../assets/fixing-cleanboot/shift_restart.webp)

![windows_recovery_environment.webp](../../../assets/fixing-cleanboot/windows_recovery_environment.webp)

This will cause the PC to restart into Windows Recovery Environment, where all forms of settings appear. Here, we will need to go to `regedit` to start the login services upon booting of Windows.

Open up the terminal by selecting `Troubleshoot` -> `Advanced Options` -> `Command Prompt` as depicted below:

1. Troubleshoot
    ![get_into_regedit_1.webp](../../../assets/fixing-cleanboot/get_into_regedit_1.webp)

2. Advanced Options
    ![get_into_regedit_2.webp](../../../assets/fixing-cleanboot/get_into_regedit_2.webp)

3. Command Prompt
    ![get_into_regedit_3.webp](../../../assets/fixing-cleanboot/get_into_regedit_3.webp)

After Step 3, you will have to select your user account, type the password to access the terminal, and will be greeted to the terminal screen, where you will need to type in `regedit` to open up the corresponding application:

![terminal_regedit.webp](../../../assets/fixing-cleanboot/terminal_regedit.webp)

## Step 2: Implement potential solutions

From here, there are now two potential solutions to follow within Regedit.

> [!WARNING] Warning
> The registry is a core component of the OS. Messing up the registry may result in you having to reinstall windows!

### Solution 1: Enable Windows Hello Services

We will try to open up the **SERVICES** hive in regedit (the “folders” depicted on the side of regedit are referred to as hives).

In the top bar, type `Computer\HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services` as shown in the picture:

![regedit_services_hive.webp](../../../assets/fixing-cleanboot/regedit_services_hive.webp)

This will bring lots of folders up. These are the Microsoft Services Hive essential for your operating system, and now we will have to look for certain folders to fix the issues.

> [!NOTE] Note
> Different regedit folders may look differently from one another depending on the applications installed. However, the services hive will be identical in all Windows 10 and Windows 11 version.

If the services hive opens up, then that means that your OS is working. **If the services hive here is missing, then your Windows install may be corrupted**, and you may have to reinstall windows, following this guide [here](/windows).

Here we will look for several different registry hives and keys to fix.

> [!WARNING] Warning
> 
> Depending on the type of login you utilize, not all keys may be present! If some of these keys are missing, there is no need to worry. If all of are missing, you will have to resort to [reinstalling windows](/windows).

#### Starting the services
You will have to look for the following folders/hives, look for the "Start" key, double click it, and **set them to manual or auto startup (3/2)**. Here, I am using `Netlogon` (Start = 3) as an example, but the principle is the same for all of these:

![regedit_fix.webp](../../../assets/fixing-cleanboot/regedit_fix.webp)

> [!TIP] Information
> Note that you can search for these keys in the top search bar as well instead!

**Manual startup (Start = 3) services:**

| **Key**    | **Description**                                     | **Start Value** |
|------------|-----------------------------------------------------|-----------------|
| `lmhosts`  | TCP/IP NetBIOS Helper                               | 3               |
| `Netman`   | Network Connections                                 | 3               |
| `Netlogon` | Secure Channel between Domain Controller and Client | 3               |
| `seclogon` | Secondary Logon (Run As)                            | 3               |
| `VaultSvc` | Credential Manager                                  | 3               |
| `Wecsvc`   | Windows Event Collector                             | 3               |
| `WbioSrvc` | Windows Biometric Serviced                          | 3               |
| `wlidsvc`  | Microsoft Account Sign-in Assistant                 | 3               |
| `KeyIso`   | CNG Key (Cryptographic Key Process) Isolation       | 3               |

**Automatic startup (Start = 2) services:**

| **Key**             | **Description**                 | **Start Value** |
|---------------------|---------------------------------|-----------------|
| `Dhcp`              | DHCP Client                     | 2               |
| `EventLog`          | Windows Event Log               | 2               |
| `EventSystem`       | COM+ Event System               | 2               |
| `LanmanServer`      | Server                          | 2               |
| `LanmanWorkstation` | Workstation                     | 2               |
| `NlaSvc`            | Network Location Awareness      | 2               |
| `nsi`               | Network Store Interface Service | 2               |
| `SamSs`             | Security Accounts Manager       | 2               |

### Solution 2: Disable Windows Hello completely

We will try to open up the **PasswordLess\Device** hive in regedit. In the top bar, type `HKEY_LOCAL_MACHINE\ssoftware\Microsoft\Windows NT\CurrentVersion\PasswordLess\Device` as shown in the image below.

![regedit_device_hive.jpg](../../../assets/fixing-cleanboot/regedit_device_hive.jpg)

In this hive there will be a "Key" called `DevicePasswordLessBuildVersion`. Double click it to show the value data. Change it from 2 to 0 (which will disable Windows Hello). The system will now be reverted to logon via password only.

> [!NOTE] Note
> Once in Windows, if the user wishes to re-enable Windows Hello, they will have to re-enable this key (by changing 0 back to 2). The user may have to reconfigure the pin or biometrics after this as the Windows Hello login data will have been reset.

## Step 3: Restart and observe

Restart the PC now, and boot into normal windows. If login shows up, the fixes have worked. Otherwise, you may have to [reinstall windows](/windows), as the issue is beyond simply Windows Hello as a service failing to work.
