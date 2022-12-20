---
layout: default
title: DDU Audio
nav_exclude: false
parent: Factoids
has_children: false
search_exclude: false
last_modified_date: 2022-10-31
---

# Display Driver Uninstaller (DDU)

## What is DDU?
Display Driver Uninstaller is a program that can fully wipe display/audio drivers, to troubleshoot various issues.

> DDU does not erase any personal files. It only wipes the selected driver(s), and any associated info, such as display color profiles, settings, etc

## Installing DDU
{% include embeds/ddu_install.md %}

## Wiping Audio Drivers
![dduaudio.png](/assets/factoids/dduaudio.png)

> ❗ Make sure you are in [Safe Mode](https://support.microsoft.com/en-us/help/12376/windows-10-start-your-pc-in-safe-mode).

* Select the "Audio" device type from the drop-down list on the right, select the Audio driver you wish to uninstall, and click `Clean and restart`

## Reinstalling Audio Drivers
#### For custom-built desktops
Go to your motherboard's support page on the manufacturer's site, and download the latest available audio drivers

#### For laptops/pre-built desktops
Go to the model's support page on your manufacturer's site, and download the latest available audio drivers.
