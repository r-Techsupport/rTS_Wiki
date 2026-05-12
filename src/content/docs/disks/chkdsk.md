---
title: Using chkdsk
sidebar:
    hidden: false
has_children: false
parent: Disks
pagefind: true
last_modified_date: 2023-01-10
---

`chkdsk` is a utility to check and repair issues with the filesystems in Windows. Windows will run it automatically, if Windows detects potentially corrupted files on the volume, however it can be run manually if needed.

Before running `chkdsk`, make sure you have appropriate backups first. Guide on proper backup practices can be found here: https://rtech.support/backups/everyone-needs-backups/

> [!CAUTION] Caution
> If system has a suspected failing disk or RAM, do not run chkdsk, doing so may further corrupt data on the disk and make data permanently irrecoverable. Either move data to a healthy disk or solve the RAM problem.

> [!IMPORTANT] Important
> Interrupting chkdsk is not recommended. However, canceling or interrupting chkdsk should not leave the volume any more corrupt than it was before chkdsk was run. Running chkdsk again checks and should repair any remaining corruption on the volume.

If chkdsk cannot work on the drive, a message appears that asks you if you want to check the drive the next time you restart the computer.

> Chkdsk cannot run because the volume is in use by another process. Would you like to schedule this volume to be checked the next time the system restarts? (Y/N)

## Running `chkdsk`
Open a terminal window with administrator privileges and run the following command:

```chkdsk c:```

Utility will begin to check C: volume for problems in read-only mode, it wont attempt any fixes. You can replace `C:` with other drive letter you want to check.

Time needed to check the volume depends on how fast disk is and number of problems found. It may be anything from 5-10 minutes on SSDs to even 2 hours on large HDDs.

If utility found no problems, it will print following message: 
```
Windows has scanned the file system and no problems were found.
No further action is required.
``` 

Otherwise, the utility will print message:
```
Errors found. CHKDSK cannot continue in read-only mode`
```

If any errors are found, you can continue with commands below.

## chkdsk c: /f
Attempts to fix errors on the disk.

## chkdsk c: /r
Locates bad sectors and attempts to recover readable information.

`/r` includes the functionality of `/f`, with the additional analysis of physical disk errors.

> [!CAUTION] Caution
>`chkdsk c: /r` can and will delete files that are corrupted, this is not a tool to be ran on a drive that has unique data.
