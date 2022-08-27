---
layout: default
title: Using Crystal Disk Info
nav_exclude: false
parent: Factoids
has_children: false
search_exclude: false
last_modified_date: 2022-08-13
---

# Using Crystal Disk Info (CDI)
1. To check hard drive health, download [Crystal Disk Info](https://osdn.net/projects/crystaldiskinfo/downloads/76716/CrystalDiskInfo8_15_2.exe/)
2. At the top of the program's window, copy the contents `Edit -> Copy`
3. If you are being helped in Discord you can paste the content directly with Ctrl + V. If this was requested on the subreddit please put it on [Pastebin](https://pastebin.com) then supply the link in your comment.

# Analyzing SMART data in Crystal Disk Info (CDI):
*S.M.A.R.T.* is a monitoring system included in drives (*SSDs* and *HDDs*), its primary function is to detect and report various indicators of a drive's reliablity and health. 

When analyzing a disk's health, it may be best to look at the raw SMART values, which are usually hexadecimal. 

If detailed SMART data is unavailable (*as is the case with most NVMe drives, for instance*), you can refer to other indicators such as a drive's health percentage. Although this is less reliable.

## IMPORTANT:

**Any app that uses SMART data to analyse drive health is just a diagnostic utility. It can not and should not be used to completely evaluate drive health as there are many factors that won’t show up**

### **A drive can indicate as being "healthy" and still fail _without any warning_, regardless of SMART data**

> For more information on analyzing disk health, please read the following article: https://rtech.support/docs/disks/disk-health.html


