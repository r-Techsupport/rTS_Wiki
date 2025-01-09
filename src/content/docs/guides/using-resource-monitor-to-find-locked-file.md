---
title: Using Resource Monitor To Find A Locked File
sidebar:
    hidden: false
has_children: false
parent: General Guides
pagefind: true
last_modified_date: 2023-05-08
---



If you see a popup like this telling you that you cant modify a file because it is locked or used by another process

![folderInUse.webp](../../../assets/resource-monitor/folderInUse.webp)

You can find out which process is locking or using the file with Resource Monitor. To do so follow these steps:

1. Open Resource Monitor and go to the CPU tab.

2. In the search bar at *Associated Handles* input the file name.

3. You will now see a list of processes locking the file.

See picture below for reference:

![rsmLockedFile.webp](../../../assets/resource-monitor/rsmLockedFile.webp)