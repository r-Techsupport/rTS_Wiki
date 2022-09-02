---
layout: default
title: Breadboarding
nav_exclude: false
has_children: false
parent: General Guides
search_exclude: false
last_modified_date: 2022-09-02
---


# Breadboarding
Known as an out of case install or "breadboarding" a computer.

This is not a troubleshooting guide to troubleshoot a new build failure, but a guide to avoid one.
New hardware that doesn't work is more common than you think, especially when it comes to Motherboards.

The usual safety-first rules apply here: Stay grounded and don't do this on a carpeted floor or wearing clothing containing synthetics, because it creates static-electricity. A good idea is to wear an anti-static wrist-strap.

The first thing you need to find out and write down is your Motherboard's beep codes, either from the manual or from the manufacturer's support site on the Internet. You will then need a small speaker salvaged from an old case or temporally removed from the one you're about to install in, although some Motherboards have their own speaker built-in.

Next you will need an on/off switch or failing that a small screwdriver can be used to short out the on/off pins where the switch normally connects to the motherboard. You short the pins to power on and you short the pins again to power off.

**Note: It is very important that you remember to power-off the Motherboard and switch-off and unplug the PSU after each component test. Do this before you remove or install anything.**

With the board in its anti-static cover, lay it on a piece of cardboard along with everything else in the Motherboard's box. I've used the kitchen table here covered with a large cotton towel as that is where most of you will assemble your new PC. The kitchen floor doesn't have carpet, so it's a good place to proceed.

![Post_Thumb.png](/assets/Breadboarding/post_Thumb.png)

A single #2 Phillips head screwdriver would be ideal for this but the closest you have will be fine for a one-off build.

Carefully remove the anti-static bag. Before installing the [CPU](/docs/learning/terms), now is the time to inspect the board's CPU socket for any obvious damage or any tiny debris that might have fallen in at the factory during packaging. Also inspect the [RAM](/docs/learning/terms) and [PCIe](/docs/learning/terms). Install the CPU and HSF applying a thin coat of thermal paste between the two with the edge of a credit card (never use a razor blade). Connect the HSF fan wires to the correct board socket. Plug in the main 24 pin ATX 12volt power connector and the 4 or 8 pin EPS 12 volt power connector into the Motherboard.

![CPUinstalled.png](/assets/Breadboarding/CPUinstalled.png)

Plug-in and turn on the [PSU's](/docs/learning/terms) power and then the board's power. A board and CPU that works should now give you a RAM failure beep code. If the CPU is faulty, you may or may not get a CPU failure beep code (depending on the board's bios). If you do get a faulty CPU beep code, you have a faulty or incorrectly installed CPU.

If you get no codes and the HSF fan doesn't rotate (nothing works) and you have checked that your CPU is installed correctly, your Motherboard, CPU and PSU all need proper testing to determine which one of them is faulty.

**Next: Turn off power. -- Remember to Turn Off Power, between each of the following steps and make no changes unless the power is off.**

We are now going to test all of your RAM sticks and the Motherboard's RAM slots.
If the board and CPU are working and you have heard the RAM error code, you are now ready to install the 1st. stick of RAM into the board's No.1 RAM slot. If the RAM is OK, you should now hear a video card failure beep code. (Now and between each additional step: - Turn off Power again) Remove that stick of RAM and inset your next stick into the same slot. Test all of your RAM in this working slot and then use one of them to test all other slots for the video card beep code.

With the power off, lift the Motherboard and place it on a breadboard (breadboarding a computer) so you have the height needed to install the video card. The card's flange will sit over the edge of the board as shown in the photo. If the video card is good, you should now hear a single beep. Congratulations, that's your post beep.

![Fullinstalled.png](/assets/Breadboarding/Fullinstalled.png)

You can now (with the power off) plug in your monitor, mouse and keyboard and enter the BIOS to make sure your boot priority is set to CD as first boot. If your optical drive is new, you can plug that in also to test it and even connect your hard drive and set up your OS if you want too! For help with setting up Windows, click [here](/windows).

After you have disconnected everything, it's time to start installing your new hardware into your case with the foreknowledge that everything works. There are plenty of "how-to" guides on building a computer all over the net, so you don't need one here. Choose a recent one with photos.


Credit for article goes to [Lee](https://forums.whatthetech.com/index.php?showtopic=120814)