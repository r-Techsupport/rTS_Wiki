---
layout: default
title: Using chkdsk
nav_exclude: false
has_children: false
parent: Disks
search_exclude: false
last_modified_date: 2023-01-10
---
# Using chkdsk
`chkdsk` is a utility to check and repair issues with the filesystems on disks in Windows. 

> Interrupting chkdsk is not recommended. However, canceling or interrupting chkdsk should not leave the volume any more corrupt than it was before chkdsk was run. Running chkdsk again checks and should repair any remaining corruption on the volume.

If chkdsk cannot work on the drive, a message appears that asks you if you want to check the drive the next time you restart the computer.

> Chkdsk cannot run because the volume is in use by another process. Would you like to schedule this volume to be checked the next time the system restarts? (Y/N)

## chkdsk C: /f
Fixes errors on the disk, this is the first option you should try.

## chkdsk C: /r
Locates bad sectors and recovers readable information.

`/r` includes the functionality of `/f`, with the additional analysis of physical disk errors.

> ❗`chkdsk C: /r` can and will delete files that are corrupted, this is not a tool to be ran on a drive that has unique data.
