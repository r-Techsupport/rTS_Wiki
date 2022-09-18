---
layout: default
title: Making a GPT Partition Table in Diskpart
nav_exclude: false
parent: Factoids
has_children: false
search_exclude: false
last_modified_date: 2022-08-09
---
# Making a GPT Partition Table in Diskpart
Open Command Prompt or PowerShell as admin then follow the steps below.

```
diskpart
list disk
```

[![Windows 11-2021-10-05-15-09-53.png](/assets/install-11/windows-11-2021-10-05-15-09-53.png)](/assets/install-11/windows-11-2021-10-05-15-09-53.png)

[![Windows 11-2021-10-05-15-10-13.png](/assets/install-11/windows-11-2021-10-05-15-10-13.png)](/assets/install-11/windows-11-2021-10-05-15-10-13.png)

[![Windows 11-2021-10-05-15-10-24.png](/assets/install-11/windows-11-2021-10-05-15-10-24.png)](/assets/install-11/windows-11-2021-10-05-15-10-24.png)

[![Windows 11-2021-10-05-15-10-39.png](/assets/install-11/windows-11-2021-10-05-15-10-39.png)](/assets/install-11/windows-11-2021-10-05-15-10-39.png)

Make note of the disk you want to install to from the step above.
```
sel disk #
convert gpt
clean
```

