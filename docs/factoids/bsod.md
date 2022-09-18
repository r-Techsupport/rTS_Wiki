---
layout: default
title: Obtaining BSOD Dumps
nav_exclude: false
parent: Factoids
has_children: false
search_exclude: false
last_modified_date: 2022-09-16
---

# Obtaining BSOD Dumps

Blue Screen of Death (BSOD) memory dumps allow us to further analyze a BSOD and potentially find the issue.

1. Navigate to your Windows directory by opening the Run dialog (Win+R) and typing `%WINDIR%`. You can also do this from any folder by clicking in the navigation bar.

![](https://user-images.githubusercontent.com/8887005/188329591-fb107638-78f9-4875-b09b-e9835b43407d.PNG)

![](https://user-images.githubusercontent.com/8887005/188329596-8b426f05-7225-4ccf-a4a0-8b8dfbbbc744.PNG)

2. Find the folder named `Minidump` and open it to double check to see if you have any `.dmp` files.

3. If you have dump files, copy the entire folder (*not just the files in the folder*) to the Downloads folder. This will require administrator permissions.

4. Create a .zip file of the whole folder by right clicking the folder -> `Send to` -> `Compressed (zip) folder`

![CompressDump.png](/assets/factoids/CompressDump.png)

5. Drop the .zip file into the chat for the tech support team to analyze.

# Common Issues

## Access is Denied

If you are receiving an error that access is denied when opening the Windows Directory, your account does not have the permissions required to view system files. You will need to have access to an administrator account before we can help you further.

If you are receiving an Access is Denied error when creating the .zip file in step 4, you most likely did not copy the Minidump folder to the desktop. Windows will not allow you to modify the Minidump folder inside the Windows directory. It must be copied elsewhere.

## No Minidump folder exists

In the event no Minidump folder is present in the Windows directory, it's likely that your system is not properly configured to create dump files in the event of a BSOD. Please follow the guide [here](https://www.tenforums.com/tutorials/5560-configure-windows-10-create-minidump-bsod.html) to properly configure your system.

## The Minidump folder is empty.

First, double check the dump configuration settings following the guide [here](https://www.tenforums.com/tutorials/5560-configure-windows-10-create-minidump-bsod.html). Provided your settings are correct, Windows failed to create a minidump. This can occur for a few reasons:

1. The failure was so sudden that windows did not have enough time to create a dump before the system shut down. In this case, your event viewer will have logged an Error 41 with partial information about the crash. You can open your Event Viewer through the start menu, or with the Run dialog (Win+R -> `eventvwr.exe`). The log will be under Windows Logs->System. The details tab (Not the general tab) may have partial error information in the form of a bugcheck code.

2. If no corresponding error 41 exists, or the error 41 recorded a bugcheck code of `0`, your pagefile was either corrupted or for some reason inaccessible at the time of the BSOD. This is indicative of Operating System corruption or drive failure. This can sometimes be corrected through [DISM or the System File Checker (SFC)](/docs/guides/dism-sfc).

## The file will not upload to Discord.

If your file is stuck on `Processing...` when uploading it to Discord, you are attemping to upload a dump file directly from the Minidump folder. Depending on your account's permissions, Windows prevents this but does not provide any sort of notification. Please follow the steps above to copy and upload the entire Minidump folder rather than the individual dump files.

If you're curious, we use [WinDbg](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/debugger-download-tools) to analyze the dump.
