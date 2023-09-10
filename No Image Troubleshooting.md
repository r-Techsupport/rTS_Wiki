---
layout: default
title: No Image Troubleshooting
nav_exclude: false
has_children: false
parent: General Guides
search_exclude: false
last_modified_date: 2023-09-10
---

# How To Troubleshoot a PC That Doesnt Output an Image

> This guide will mention basic steps to help you fix your pc not showing anything on the monitor. note that this guide is meant to be for a setup that is known to be functional before. if your build is new, there other things you want to check, feel free to ask for help in our [discord](/discord).
 
> When the guide says "HARDWARE ISSUE", then it means you reached a dead end of troubleshooting unless you have spare parts that you can use or you are willing to buy some. Alternatively you can always just take it to a repair shop and ask them to help you with it or ask family members or friends if you can borrow a part for short time for troubleshooting purposes.

## Pre troubleshooting things to do:
1- Making sure of power cables are connected and receiving power .
2- Safety First!! Never touch or move any of the parts inside the pc while its still on. feel to do that for any cable that is outside the case. This is important for both your own safety and to prevent accidentally killing some of the hardware.
3- List of hardware parts models and signs of life (this will help you (and us) to reach for manuals and give a better look of whats going on and what you can try).
> CPU:
 Motherboard:
 RAM:
 dGPU:
 PSU:
 (Example: no fans no LEDs and nothing tell that its receiving power)
4-The state of debugging LEDs or the beeping code or the 7-segment display code or anything acting as one (some mobos doesnt come with any of the mentioned before) .
5- Ground yourself as a good practice, you dont want static near your parts. 

### Step 1: CMOS reset
Follow [this](/docs/factoids/cmos) guide to do a CMOS reset.

### step 2: reseating the part that is referred to in the POST debug code
This includes reseating power cables from the PSU to the parts, reseating all cables is also good. 

### step 3: remove additional extensions
Things like drives and other extras like front panel and other things that the pc can boot without them.
> but how will the pc boot without a drive??
Well… the pc doesnt really need a drive to boot, you should be able to reach bios or get a message saying something like “no boot disk detected”.
If this step succeeded in giving you an image on the monitor, this means that one of the things you disconnected is what causing the issue. We have seen failing drives preventing boot alot of times. It is a common HARDWARE ISSUE. And even a secondary drive (not the OS drive) can cause that.

### step 4: using only one RAM stick
This step is something you want to do if the dram led keep staying on.
You also want to try the other sticks and/or try using other RAM slots.
If this solve the issue, it is very likely a HARDWARE ISSUE with either the stick or the slot. 

### step 5: try using iGPU instead
If you have an iGPU, its a good idea to try using it. Make sure that you unplug your dGPU first because alot of motherboards disable it when dGPU is detected
If this solve the issue, it is very likely a HARDWARE ISSUE with either the dGPU or the PCIE slot.

### Step 6: using another monitor or video cable
Sometimes, the issue isnt with the pc but with the monitor or the cable. By using another, you eliminate that out. It is also possible that the port is what causing it so switching from HDMI to DisplayPort and vice versa is a good idea.
This indicate that its a HARDWARE ISSUE.

### Step 7: replacing parts
It a HARDWARE ISSUE. This is the hard to accept fact. a part failed and you need to replace it with another, it is also the only way to be sure which part is the one failing in some cases (eg. CPU or motherboard failure). 

#### if you have any questions feel free to join our [discord](/discord) and ask them!!

