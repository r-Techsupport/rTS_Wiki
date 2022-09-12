---
layout: default
title: "My Internet doesn't work"
nav_exclude: false
has_children: false
parent: Networking
has_toc: false
search_exclude: false
last_modified_date: 2022-09-12
---
# Basic troubleshooting steps when your Internet is not working

### 1. Identify the scope of the problem
Check if only one device is affected by this problem or if multiples devices are affected.
If only one device is experiencing the problem, the cause is between that device and the last common link with other devices.
If multiple devices are affected, the cause is probably among the resources they share.
### 2. If one device is affected, check if it is a software problem
Need to check on LLCD and link to that?!?!?!
### 3. Eliminate intermediary devices.
If the device experiencing the problem is connected through WiFi, first connect it with an Ethernet cable if possible. WiFi is less reliable and stable than a wired connection.

If there are powerline adapters involved, bypass those and connect directly to the upstream device (switch, router etc.).

If you there are other devices between you and your main router/ gateway such as switches/ aditional routers/ acces points eliminate those one by one. This is done by connecting directly to the device upstream from the last.

When you find the first device where the problem is present (or reached the main router/ gateway/ modem) try different cables between that and the computer you are testing on (desktop/ laptop). Alternatively, try different ports on the switch/ router if present.
### 4. Check the status of the connection
Ideally now you have your computer connected to the first device that the problem is happening on. 