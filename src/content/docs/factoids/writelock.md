---
title: Removing write protection on drives
sidebar:
    hidden: false
has_children: false
parent: Factoids
pagefind: true
last_modified_date: 2024-08-13
---



> [!WARNING] Warning
> Drives are often write-locked because they are failing or dead. In those cases, it's best to back up the data on said drive.

Open CMD with admin privileges and type in the following commands line by line
1. `diskpart`
    - Command to open diskpart

2. `list disk`
    - This will show the disks in the system with a numeric number attached to each drive, you can identify the drive with the capacity

3. `select disk x`
    - Where x is the number you get for the drive from the previous command

4. `attrib disk clear readonly`
    - Clears the read-only attribute

> [!TIP] Sucess
> Command Prompt should output `Disk attibutes cleared successfully`. You can now exit Command Prompt.

