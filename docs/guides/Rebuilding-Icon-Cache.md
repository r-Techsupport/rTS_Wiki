---
layout: default
title: Rebuild Icon Cache
nav_exclude: false
has_children: false
parent: General Guides
search_exclude: false
last_modified_date: 2022-09-02
---

# Rebuilding Icon Cache
Are your icons blank or do they not refresh correctly, then your icon database has probably gotten courrupted, and we need to rebuild it. The same thing can happen with thumbnails too if they do not display correctly. In this case we need to delete the corrupt cache files, and rebuild the icon cache and clear the thumbnail cache.

### Deleting Icon Cache
1. The first step is to open file explorer > Folder Options > View > show Hidden System Files

![ShowHiddenFiles.png](/assets/Icon Cache/ShowHiddenFIles.png)

2. Then nagivate to the folder located in C:\Users\\%username%\AppData\Local

3. Scroll down until you find a file called `IconCache.db`, delete that file

4. After deleting the file nagivate to the folder Microsoft > Windows > Explorer

5. Delete the rest of the iconcache_ files in there.

6. Reboot the computer.

If unable to delete the iconcache files under the Explorer folder then close all open programs. Next open Task Manager > Find the process `Windows Explorer` > right click and End process on it. Following that close Task Manager hit win + r key combo > type `cmd` > hit CTRL + SHIFT + ENTER key combination to open command prompt as a admin. Here we will type in the following commands in order.
```
cd /d %userprofile%\AppData\Local\Microsoft\Windows\Explorer
attrib –h iconcache_*.db
del iconcache_*.db
start explorer
```

After this reboot the computer, and your icon cache should be fully restored.

### Clear Thumbnail Cache
This is the following the same procedure as mentioned above only this time typing in these commands:
```
cd /d %userprofile%\AppData\Local\Microsoft\Windows\Explorer
attrib –h thumbcache_*.db 
del thumbcache_*.db 
start explorer
```

Reboot the computer as a final step, and everything should be resolved.
