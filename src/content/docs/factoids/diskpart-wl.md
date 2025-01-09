---
title: Removing write protection on drives using DiskPart
sidebar:
    hidden: false
parent: Factoids
has_children: false
pagefind: true
last_modified_date: 2024-02-15
---


Open Command Prompt or PowerShell as admin then follow the steps below.

```
diskpart
list disk
```

![Windows 11-2021-10-05-15-09-53.png](../../../assets/install-11/windows-11-2021-10-05-15-09-53.webp)

![Windows 11-2021-10-05-15-10-13.png](../../../assets/install-11/windows-11-2021-10-05-15-10-13.webp)

![Windows 11-2021-10-05-15-10-24.png](../../../assets/install-11/windows-11-2021-10-05-15-10-24.webp)

![Windows 11-2021-10-05-15-10-39.png](../../../assets/install-11/windows-11-2021-10-05-15-10-39.webp)

Make note of the disk you want to remove the write lock on from the step above.

```
select disk x
attrib disk clear readonly
```

If successful, Command Prompt should output 'Disk attributes cleared successfully'
You can now exit Command Prompt
Keep in mind that drives are often write-locked because they are failing or dead. In those cases, it's best to back up the data on said drive.
