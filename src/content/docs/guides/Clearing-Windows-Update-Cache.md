---
title: Clearing Windows Update Cache
sidebar:
    hidden: false
has_children: false
parent: General Guides
pagefind: true
last_modified_date: 2022-07-30
---




Clearing Windows update cache is used when some updates will not complete. This could help Windows to update automatically. 

1. Open administrator command prompt:

    **Windows key + R, type "cmd" into the box, ctrl + shift + enter**

2. These steps will stop the update services, type them line by line into the command prompt:
    ```
    net stop wuauserv
    net stop cryptSvc
    net stop bits
    net stop msiserver
    ```
3. Now we have to remove the updated cache:
    ```
	ren C:\Windows\SoftwareDistribution SoftwareDistribution.old
	ren C:\Windows\System32\catroot2 catroot2.old
    ```
4. Now we must restart the update services:
    ```
	net start wuauserv
	net start cryptSvc
	net start bits
	net start msiserver
    ```
5. Now you should reboot and try windows updates again.
 
