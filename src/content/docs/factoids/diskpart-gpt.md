---
title: Making a GPT Partition Table in Diskpart
sidebar:
    hidden: false
parent: Factoids
has_children: false
pagefind: true
last_modified_date: 2022-10-31
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

Make note of the disk you want to install to from the step above. Run the following commands. (Replace `#` with the disk number you want to convert.) 

```
sel disk #
clean
convert gpt
```

