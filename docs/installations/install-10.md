---
layout: default
title: Installing Windows 10
nav_exclude: false
nav_order: 1
has_children: false
parent: OS Install Guides
search_exclude: false
last_modified_date: 2022-06-30
redirect_from: /books/how-to-and-guides/page/clean-installing-windows-10
---
# Installing Windows 10
**Warning**: All files on the drive you plan to install Windows to will be **deleted** if you follow this guide - this is intended. Please ensure you have an adequate [backup policy](/docs/backups) in place before proceeding if you have files of value.

1. Using a USB flash drive **at least 8 gigabytes in size**, create a bootable USB flash drive using the [Media Creation Tool](https://www.microsoft.com/en-us/software-download/windows10) from Microsoft. This will also wipe any data stored on the USB flash drive.

    >It is best to disconnect all storage disks except from the main (C Drive) disk from the computer before installing Windows 10.

2. Boot into your USB that has the Windows 10 Media on it. 

    * *You can do this by entering your systems' BIOS and change the BIOS boot order to have USB media as the first priority (this can usually be found under the boot tab), or simply look for the words "boot menu" when you see your BIOS boot screen, press the corresponding function key and choose the USB flash drive to boot from it.*

3. Follow the steps on screen to install Windows 10.

4. Click Install now

     ![10-0.png](/assets/install-10/10-0.png)

5. Continue on until you hit the license key screen. Here you can either enter your license code or, if Windows has been installed to this computer before, click on the "I don't have a product key" link.

    ![10-1.png](/assets/install-10/10-1.png)

6. Continue on until you hit the “Which type of installation do you want?” screen. Click "Custom". 

    ![10-2.png](/assets/install-10/10-2.png)

7. Click on each partition of the target drive and select delete. ***Each means ALL*** But do you mean ALL? ***Yes, All***. Once all the partitions are gone you will be left with unallocated space. At this point click next. 

    ![10-3.png](/assets/install-10/10-3.png)

    ![10-4.png](/assets/install-10/10-4.png)

    > #### MBR Issues
    > If you receive an error about your disk being MBR like this:
    >
    > [![the-selected-disk-has-an-mbr-partition-table-01.png](/assets/install-11/the-selected-disk-has-an-mbr-partition-table-01.png)](/assets/install-11/the-selected-disk-has-an-mbr-partition-table-01.png)
    > 
    >
    > then press `Shift+F10` to open CMD and follow below.
    > ```
    > diskpart
    > list disk
    > ```
    > 
    > [![Windows 11-2021-10-05-15-09-53.png](/assets/install-11/windows-11-2021-10-05-15-09-53.png)](/assets/install-11/windows-11-2021-10-05-15-09-53.png)
    >
    > [![Windows 11-2021-10-05-15-10-13.png](/assets/install-11/windows-11-2021-10-05-15-10-13.png)](/assets/install-11/windows-11-2021-10-05-15-10-13.png)
    >
    > [![Windows 11-2021-10-05-15-10-24.png](/assets/install-11/windows-11-2021-10-05-15-10-24.png)](/assets/install-11/windows-11-2021-10-05-15-10-24.png)
    >
    > [![Windows 11-2021-10-05-15-10-39.png](/assets/install-11/windows-11-2021-10-05-15-10-39.png)](/assets/install-11/windows-11-2021-10-05-15-10-39.png)
    >
    > Make note of the disk you want to install to from the step above.
    > ```
    > sel disk #
    > convert gpt
    > clean
    > ```
    > 
    > [![Windows 11-2021-10-05-15-10-51.png](/assets/install-11/windows-11-2021-10-05-15-10-51.png)](/assets/install-11/windows-11-2021-10-05-15-10-51.png)
    > [![Windows 11-2021-10-05-15-11-01.png](/assets/install-11/windows-11-2021-10-05-15-11-01.png)](/assets/install-11/windows-11-2021-10-05-15-11-01.png)
    > [![Windows 11-2021-10-05-15-11-13.png](/assets/install-11/windows-11-2021-10-05-15-11-13.png)](/assets/install-11/windows-11-2021-10-05-15-11-13.png)
    > 
    > You can exit the CMD and click `next` again.
    > [![Windows 11-2021-10-05-15-09-40.png](/assets/install-11/windows-11-2021-10-05-15-09-40.png)](/assets/install-11/windows-11-2021-10-05-15-09-40.png)

8. Windows will now install. When it finishes it will automatically restart your machine, when your screen goes black pull out your installation USB drive.

9. Once the machine finishes restarting you will be facing the setup screen. Configure as you wish.

You have successfully installed Windows 10.
