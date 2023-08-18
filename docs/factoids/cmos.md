---
layout: default
title: How to Reset CMOS
nav_exclude: false
parent: Factoids
has_children: false
search_exclude: false
last_modified_date: 2023-05-08
---

# Resetting the CMOS

## Method 1: Removing the CMOS battery
The CMOS battery is present in all laptops and desktops, and is the failsafe option for most products.

1. Unplug PSU power cable from wall, this ensures no power is going to the PC. If on laptop, disconnect the battery from the motherboard as well.

2. Remove CMOS battery. This is a small 'watch battery' in your motherboard (see below).

	![cmos battery](/assets/factoids/cmos.jpeg)

3. Press and hold PC power button for 30 seconds, this clears out any remaining charge in your PC.

4. Reinsert the CMOS battery, reconnect power and try starting the machine.

## Method 2: Using the CMOS Clear pins
The CMOS Clear pins are present on many desktop and even some laptop motherboards. If you can locate the CMOS clear pins (Note: Different motherboards label the CMOS clear pins differently, ASUS lables it as CLRTC, Gigabyte labels it CMOS_CLEAR, etc.)

1. Unplug PSU power cable from wall, this ensures no power is going to the PC. If on laptop, disconnect the battery from the motherboard as well.

2. Locate and identify the CMOS clear pins. Note that it may differ in name from manufacturer to manufacturer of the motherboard.

3. Using a screwdriver, short the two pins by inserting the screwdriver between the two pins (see below).

	![cmos reset using screwdriver](/assets/factoids/cmos_screwdriver.png)

4. Hold the screwdriver in place four roughly 20-30 seconds. Press the power button multiple times while holding the screwdriver in place. Once the time expires, remove the screwdriver, reconnect power, and try restarting the machine.
