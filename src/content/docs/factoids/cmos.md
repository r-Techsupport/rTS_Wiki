---
title: How to Reset CMOS
sidebar:
    hidden: false
parent: Factoids
has_children: false
pagefind: true
last_modified_date: 2024-11-05
---



## Method 1: Removing the CMOS battery


1. Unplug PSU power cable from wall, this ensures no power is going to the PC. If on laptop, disconnect the battery from the motherboard as well.

2. Remove CMOS battery. This is a small 'watch battery' in your motherboard (see below).

	![CMOS battery](../../../assets/factoids/cmos.webp)

	 > [!NOTE] Information
     > 
	 > Some laptops may lack a dedicated CMOS battery but use the main battery for its functionality, other laptops may have the battery covered like this: ![laptop CMOS](../../../assets/cmos/cmos-laptop.jpg)
	


3. Press and hold PC power button for 30 seconds, this clears out any remaining charge in your PC.

4. Reinsert the CMOS battery, reconnect power and try starting the machine.

## Method 2: Using the CMOS Clear pins
The CMOS Clear pins are present on many desktop and even some laptop motherboards. If you can locate the CMOS clear pins (Note: Different motherboards label the CMOS clear pins differently, ASUS labels it as CLRTC, Gigabyte labels it CMOS_CLEAR, etc.)

1. Unplug PSU power cable from wall, this ensures no power is going to the PC. If on laptop, disconnect the battery from the motherboard as well.

2. Locate and identify the CMOS clear pins. Note that it may differ in name from manufacturer to manufacturer of the motherboard.

3. Using a screwdriver, short the two pins by inserting the screwdriver between the two pins (see below).

	![CMOS reset using screwdriver](../../../assets/factoids/cmos_screwdriver.webp)

4. Hold the screwdriver in place for roughly 20-30 seconds. Press the power button multiple times while holding the screwdriver in place. Once the time expires, remove the screwdriver, reconnect power, and try restarting the machine.
