---
layout: default
title: "My Internet doesn't work"
nav_exclude: false
has_children: false
parent: Networking
has_toc: true
search_exclude: false
last_modified_date: 2022-09-12
---
# Basic troubleshooting steps when your Internet is not working
{: .no_toc}

{% include toc.md %}

## Scope of the problem
First you need to identify the scope of the problem. Check if only one device is affected by this problem or if multiples devices are affected.
If only one device is experiencing the problem, the cause is between that device and the last common link with other devices.
If multiple devices are affected, the cause is probably among the resources they share.
## Software problem
If one device is affected, check if it is a software problem, be it an OS setting or a program. Try a speedtest/ the connection on a [Linux Live Session](/docs/live-sessions/linux-live-session.html).
## Intermediary devices.
After you find what devices are affected and eliminate software from the equation, eliminate intermediary devices. If the device experiencing the problem is connected through WiFi, first connect it with an Ethernet cable if possible. WiFi is less reliable and stable than a wired connection.

If there are powerline adapters involved, bypass those and connect directly to the upstream device (switch, router etc.).

If you there are other devices between you and your main router/ gateway such as switches/ aditional routers/ acces points eliminate those one by one. This is done by connecting directly to the device supstream from the last.

When you find the first device where the problem is present (or reached the main router/ gateway/ modem) try different cables between that and the computer you are testing on (desktop/ laptop). Alternatively, try different ports on the switch/ router if present.
## Check the status of the connection
### Speed problem
Ideally now you have your computer connected to the first device that the problem is happening on. Right click on the Ethernet icon from the taskbar and click "Open Network & Internet settings".  
![open-network-internet-settings.png](/assets/internet-not-working/open-network-internet-settings.png)  
Click "Change adapter settings".  
![change-adapter-settings.png](/assets/internet-not-working/change-adapter-settings.png)  
Right click on your Ethernet adapter and "Status".  
![change-adapter-settings.png](/assets/internet-not-working/network-status.png)
```sh
netsh int tcp show global
```
### Connection not working
`ipconfig /all`