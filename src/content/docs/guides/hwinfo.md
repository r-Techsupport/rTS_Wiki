---
title: HWiNFO - Full Guide
sidebar:
    hidden: false
has_children: false
parent: General Guides
pagefind: true
last_modified_date: 2022-06-28
redirect_from: /books/how-to-and-guides/page/hwinfo-full-guide
---



To start troubleshooting using HWiNFO, follow this guide. It will walk you though how to setup logging and stress testing.

> [!NOTE] Information
If you are specifically told to use HWInfo for game logging, ignore the steps pertaining to Furmark and Prime95 (i.e. follow steps 1, 4, 5 and 6). If told you are doing a stress test, you must download all 3 programs and follow all steps accordingly. None of the programs are optional during a stress test.
>
> ***<u class="blink">Read the entirety of step 1 and 2 before complaining that downloads aren't working.</u>***

1. Download HWiNFO from [here](https://www.fosshub.com/HWiNFO.html)

    **All versions will work the same. You won't have to install the portable version.**

2. Download Prime95 from [here (64-bit)](https://www.mersenne.org/ftp_root/gimps/p95v308b9.win64.zip) or [here (32-bit)](https://www.mersenne.org/ftp_root/gimps/p95v307b9.win32.zip)

    **If you are using chrome, you may need to copy-paste these links into a new tab, or right click and "save link as".**

3. Download Furmark 2 from [here](https://geeks3d.com/furmark/downloads/)

    ![furmark1.webp](../../../assets/hwinfo/furmark1.webp)

    **Recommended you get the 64 bit version!**

4. Start HWiNFO and launch it in sensors only mode

    ![hwinfo-1 .webp](../../../assets/hwinfo/hwinfo1.webp)

    **If you get a warning about an embedded EC sensor, just click "Do not monitor"**

5. In the sensors only mode window, go to settings and set the global polling frequency to 250 ms and press ok.

    ![hwinfo-2.webp](../../../assets/hwinfo/hwinfo2.webp)

    ![hwinfo-3.webp](../../../assets/hwinfo/hwinfo3.webp)

6. Start the logging process by clicking the green + with the paper icon and save a CSV file to a location.

    ![hwinfo-4.webp](../../../assets/hwinfo/hwinfo4.webp)

7. Next, wait for 2-5 minutes just as soon as you started logging with HWiNFO to get the idle temperatures, then launch Prime95.

    ![p95-1.webp](../../../assets/hwinfo/p951.webp)

8. Start the "Blend" test.

    ![p95-2.webp](../../../assets/hwinfo/p952.webp)

9. It will look like this when running.

    ![p95-3.webp](../../../assets/hwinfo/p953.webp)
 
10. After you get prime95 running, install and launch furmark. Set the following in the options:
    - Set **Graphics Test** to `Furmark Knot  (GL)`
    - Change the resolution to match your monitor. If you don't see your resolution listed, you can use custom resolution.
    - Checkmark the following boxes:
        - BFC
        - Display OSI
        - DXT5

    ![furmark2.webp](../../../assets/hwinfo/furmark2.webp)

    > Note: There's an option called Artifact scanner. Only run this in case you suspect your GPU may be artifacting (and specified by the helper).

11. Leave furmark as the top window on your screen.

    ![furmark3.webp](../../../assets/hwinfo/furmark3.webp)

## Note

All 3 programs need to be running for at least 10 minutes, or until your PC crashes. Start the timer after you get furmark running for the best results. Ensure the Furmark window is on top, and **do not use your computer** during the 10 minutes.

## Results

If you are getting help from the discord, you can just upload the .csv file directly to discord.

If you are getting help from the Reddit, or the CSV file is too large for discord, upload the csv to [https://www.catbox.moe/](https://www.mediafire.com/)
