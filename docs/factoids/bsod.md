---
layout: default
title: Obtaining BSOD Dumps
nav_exclude: false
parent: Factoids
has_children: false
search_exclude: false
last_modified_date: 2022-08-13
---

# Obtaining BSOD Dumps

BSOD dumps allow us to further analyze a BSOD and potentially find the issue.

1. Go to `C:\Windows\Minidump` and check if you have any `.dmp` files

2. If you do have `.dmp` files, copy the folder (*not just the files in the folder*) to the desktop

3. Create a .zip file of the whole folder, NOT RAR

4. Drop the .zip file into the chat for us to look at

If you're curious, we use [WinDbg](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/debugger-download-tools) to analyze the dump.
