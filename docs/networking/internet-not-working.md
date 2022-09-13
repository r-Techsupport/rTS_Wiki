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
If one device is affected, check if it is a software problem, be it an OS setting or a program.

### Network reset
Various connectivity problems are fixed with the following 3 commands. To run them seach "cmd.exe" in the start menu, right click "Command Prompt" and click on "Run as administrator".
```
ipconfig /flushdns
netsh interface ip reset
netsh winsock reset
```
After you have run them, reboot your computer and check.

### TCP Global Parameters
A common problem in Windows is when an application changes the TCP Global Parameters. To check these seach "cmd.exe" in the start menu, right click "Command Prompt" and click on "Run as administrator". Once opened, type `netsh interface tcp show global`. Everything should like in the following image:  
![tcp-global.png](/assets/internet-not-working/tcp-global.png)  
Usually the "Receive-Side Scaling State" and "Receive Window Auto-Tuning Level" are the changed parameters. If that is the case, run `netsh interface tcp set global rss=enabled` and `netsh interface tcp set global autotuninglevel=normal`.

### Programs interfering
If you know you have VPNs or third-party Antivirus/ Antimalware applications installed, keep in mind that any of those might cause the problem. To stop those from interfering try a speedtest/ check the connection on a [Linux Live Session](/docs/live-sessions/linux-live-session.html). If the problem is not present here, there is a very high chance that a program is the source.

Boot back into Windows and perform a [Cleanboot](/docs/factoids/cleanboot.md). If the problem gets solved by this you will have to keep re-enable services to find which one is the cause. A good way of doing this is through binary search. This procedure implies that you enable half of the disabled services and check.  
If the problem is not present, continue doing this until it shows up.  
If it is present, disable half of the services you just enabled.  
You keep doing this until get to the services that is causing the problem.

## Intermediary devices
After you find what devices are affected and eliminate software from the equation, eliminate intermediary devices. If the device experiencing the problem is connected through WiFi, first connect it with an Ethernet cable if possible. WiFi is less reliable and stable than a wired connection.

If there are powerline adapters involved, bypass those and connect directly to the upstream device (switch, router etc.).

If you there are other devices between you and your main router/ gateway such as switches/ aditional routers/ acces points eliminate those one by one. This is done by connecting directly to the device supstream from the last.

When you find the first device where the problem is present (or reached the main router/ gateway/ modem) try different cables between that and the computer you are testing on (desktop/ laptop). Alternatively, try different ports on the switch/ router if present.

## Finding the cause
### Speed problem
Ideally now you have your computer connected to the first device that the problem is happening on. Right click on the Ethernet icon from the taskbar and click "Open Network & Internet settings".  
![open-network-internet-settings.png](/assets/internet-not-working/open-network-internet-settings.png)  
Click "Change adapter settings".  
![change-adapter-settings.png](/assets/internet-not-working/change-adapter-settings.png)  
Right click on your Ethernet adapter and "Status".  
![change-adapter-settings.png](/assets/internet-not-working/network-status.png)  
The "Speed" property is what your computer negotiates at with the upstream device. Most devices nowadays support 1 Gigabit, but for that all 8 connectors and contacts must work on both sides. If only one is faulty, the speed will default to 100 Mbps (only 4 connections need to work for this speed). If both devices you connect support Gigabit and you only see 100 Mbps here, the cable is faulty or slightly loose. There is a slim chance that the port on the computer or the upstream device is at fault, but that is by far less common.  
![negotiated-speed.png](/assets/internet-not-working/negotiated-speed.png)
### Connection not working at all
`ipconfig /all`