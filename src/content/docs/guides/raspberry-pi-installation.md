---
title: Raspberry Pi Installation
sidebar:
    hidden: false
has_children: false
parent: General Guides
pagefind: true
last_modified_date: 2022-06-28
---

The Raspberry Pi is a multi-purpose credit-card-sized computer. You can use it to do many cool things. For example, you can host a website, a file server, or other servers on it. You can create a home surveillance system. You can set up a retro game system with emulators. Maybe you want to control a robot with the programmable pins. Or, you can just use it as a regular cheap desktop computer.

This guide will be focusing on setting up Raspberry Pi OS. Some things may be a little bit different if you’re using another OS on your Raspberry Pi, however, many concepts will still apply.

## Pre-installation

Before we begin, you should be sure to have everything you will need. You will need one of each of these:

   *  Raspberry Pi, preferably the newest model. At the time of writing, that’s the Raspberry Pi 4.
   *  An USB-C power adapter which can handle at least 3A (at 5.1V DC or ~15.3W total).
   *  A micro-HDMI cable, and a micro-HDMI output device, for displaying the desktop.
   *  A Micro-SD card for storing the OS and any other files, 8GB size is minimum while 32GB is recommended.
   *  You may need a Micro-SD card to USB adapter if your computer can’t read Micro-SD cards
   *  (Recommended) A case to place the device in, so it stays clean and safe.

Consider purchasing a “Starter kit”, which includes a Raspberry Pi 4, a case, a power adapter, and heatsinks.

## Downloading & installing Raspberry Pi OS

*  Download and run the [Raspberry Pi imaging utility](https://www.raspberrypi.org/blog/raspberry-pi-imager-imaging-utility/)
*  Plug in your Micro-SD card into your computer.
   
Now you will see a list of available operating systems.

* You will probably want to install Raspberry Pi OS, as it has the desktop experience available.
* You will also get multiple other choices such as: (Media player) - Kodi OS, Emulation or Game OS amongst others.
* Press Ctrl+shift+x to see the settings for the OS, it is recommended you set up WiFi and SSH.
* Choose the OS you desire, select your SD card and hit wipe

If you have a case for your Raspberry Pi, start by inserting the device into the case. Next, insert the Micro-SD card. You will also have to connect a keyboard/mouse and a display.

The last thing you should connect is the power. The Raspberry Pi powers on as soon as it receives power.

Once it boots up, you will see your selected OS.

## Post-Installation Configuration

Perform all updates.

1. Open the software update menu and update your system. Do this for each OS you installed.
2. On Raspberry Pi OS, you can also open a terminal and manually type `sudo apt update` and then `sudo apt upgrade` to update the system. You will have to enter your password each time, the default is `raspberry`.

You can use ssh for terminal access if you enabled it, almost every OS has OpenSSH built in, meaning there shouldn't be a need for 3rd party apps.

* To set it up in Raspberry Pi OS, read the [SSH guide](https://www.raspberrypi.org/documentation/remote-access/ssh/) in the Raspberry Pi documentation.
* For other OSes, it’s somewhere in the menus. It varies depending on the OS.
* When connecting, the default username is `pi` and the default password is `raspberry`.

## Things To Keep In Mind

On Linux, most software is installed via the repositories. In most cases you will **not** be downloading new software from a web browser. When you do download software, you should look for a .deb package whenever possible

Since software is managed by the package manager, you can easily update your system. Regularly either use the built-in software updater tool or run `sudo apt update && sudo apt upgrade -y` to keep your system updated.
