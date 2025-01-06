---
title: Rebuild Icon Cache
sidebar:
    hidden: false
has_children: false
parent: General Guides
pagefind: true
last_modified_date: 2023-05-08
---


Are your icons blank or do they not refresh correctly? Your icon database has probably corrupt, and we need to rebuild it. The same thing can happen with thumbnails too if they do not display correctly. In this case we need to delete the corrupt cache files, and rebuild the icon cache and clear the thumbnail cache.

### Deleting Icon Cache
1. Hit "win + r" key combo > type `cmd` > hit "CTRL + SHIFT + ENTER" key combination to open command prompt as an admin.
2. Open Task Manager > Find the process "Windows Explorer" > right click and "End process" on it 
3. In the admin Command Prompt, type the following commands in order.
	```
	cd /d %userprofile%\AppData\Local\Microsoft\Windows\Explorer
	attrib –h iconcache_*.db
	del iconcache_*.db
	start explorer
	```

4. Reboot the computer, and your icon cache should be fully restored.

### Clear Thumbnail Cache
1. Hit "win + r" key combo > type `cmd` > hit "CTRL + SHIFT + ENTER" key combination to open command prompt as an admin.
2. Open Task Manager > Find the process "Windows Explorer" > right click and "End process" on it
3. In the admin Command Prompt, type the following commands in order.
	```
	cd /d %userprofile%\AppData\Local\Microsoft\Windows\Explorer
	attrib –h thumbcache_*.db 
	del thumbcache_*.db 
	start explorer
	```

4. Reboot the computer, and everything should be resolved.
