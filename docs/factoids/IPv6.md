---
layout: default
title: Turning Off IPv6
nav_exclude: false
has_children: false
parent: Factoids
search_exclude: false
last_modified_date: 2022-08-29
---

# Turning Off IPv6
Turning off [IPv6](/docs/learning/terms#ipv6-address) can help troubleshoot internet issues.

1. Press Win + R to launch the run box

2. Type `ncpa.cpl` into the box, and hit Enter

    ![ncpa.png](/assets/factoids/runNCPA.png)

3. Select the internet adapter that is currently in use, and right click and select properties

    ![InternetAdapter.png](/assets/factoids/internetAdapter.png)

4. Uncheck the box for Internet Protocol Version 6 (TCP/IPv6)

    ![internetProperties.png](/assets/factoids/internetProperties.png)
 
5. Test to see if the issue continues. 

## Turning Off IPv6 (Powershell)

1. Right click on the start menu and run Powershell (Windows Terminal) as admin.

2. Enter this command: `Get-NetAdapter | ? {-not $_.Virtual -and $_.Status -eq "Up" } | foreach {Disable-NetAdapterBinding -InterfaceAlias $_.Name -ComponentID ms_tcpip6}`

3. Test to see if the issue continues.
