---
layout: default
title: Turning off IPV6
nav_exclude: false
has_children: false
parent: Factoids
search_exclude: false
last_modified_date: 2022-08-25
---

# Internet Protocol Version 6 Off
Internet protocol version 6 could be causing you to not connect to the internet. Therefore, turning it off to see if it is a problem.

1. Hit the keys win + r to launch the run box.

2. Type `ncpa.cpl` into the box, and hit enter.

![ncpa.png](/assets/factoids/runNCPA.png)

3. Select the internet adapter that is currently in use, and right click and select properties. 

![InternetAdapter.png](/assets/factoids/internetAdapter.png)

4. Uncheck the box for Internet Protocol Version 6 (TCP/IPv6)

![internetProperties.png](/assets/factoids/internetProperties.png)