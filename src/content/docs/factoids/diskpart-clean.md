---
title: Cleaning a Disk in Diskpart
sidebar:
    hidden: false
parent: Factoids
has_children: false
pagefind: true
last_modified_date: 2022-10-31
---

> [!CAUTION] Caution
> Note that cleaning the disk **will remove any data stored on it.**

Open Command Prompt or PowerShell as admin then follow the steps below.

```
diskpart
list disk
```

![Windows 11-2021-10-05-15-09-53.png](../../../assets/install-11/windows-11-2021-10-05-15-09-53.webp)

![Windows 11-2021-10-05-15-10-13.png](../../../assets/install-11/windows-11-2021-10-05-15-10-13.webp)

![Windows 11-2021-10-05-15-10-24.png](../../../assets/install-11/windows-11-2021-10-05-15-10-24.webp)

![Windows 11-2021-10-05-15-10-39.png](../../../assets/install-11/windows-11-2021-10-05-15-10-39.webp)

Make note of the disk you want to clean from the step above.

```
sel disk #
clean
```

Follow the below steps to you want to partition and format the drive. You will want to do this unless otherwise instructed.
```
create partition=primary
format quick fs=ntfs
assign letter=E
```

You can change the file type to a different one if so chooses, FAT32 or exFAT are examples. You can also change the letter to any letter that is *not in use*. 
