---
layout: default
title: Clearing Windows Update Cache
nav_exclude: false
has_children: false
parent: General Guides
search_exclude: false
last_modified_date: 2022-07-17
---


# Clearing Windows Update Cache

Clearing Windows update cache is used when some updates will not complete. This could help Windows to update automatically. 

Open administrator command prompt

**1. Windows key + R, type "cmd" into the box, ctrl + shift + enter**

These next steps will stopp the update services you need to type them line by line into the command prompt:

   **2. net stop wuauserv**

   **3. net stop cryptSvc**

   **4. net stop bits**

   **5. net stop msiserver**

Now we have to remove the updated cache:

   **6. ren C:\Windows\SoftwareDistribution SoftwareDistribution.old**

   **7. ren C:\Windows\System32\catroot2 catroot2.old**

Now we must restart the update services:

   **8. net start wuauserv**

   **9. net start cryptSvc**

   **10. net start bits**

   **11. net start msiserver**
   
   
