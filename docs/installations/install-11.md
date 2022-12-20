---
layout: default
title: Installing Windows 11
nav_exclude: false
nav_order: 2
has_children: false
parent: OS Install Guides
search_exclude: false
last_modified_date: 2022-06-16
redirect_from: /books/how-to-and-guides/page/clean-installing-windows-11
---
# Installing Windows 11

**Warning**: All files on the drive you plan to install Windows to will be **deleted** if you follow this guide - this is intended. Please ensure you have an adequate [backup policy](/docs/backups) in place before proceeding if you have files of value.

> Please make sure to disable CSM, enable Secure Boot, and enable TPM prior to installation of Windows 11.

1. Create a bootable USB flash drive using the [Media Creation Tool](https://www.microsoft.com/en-us/software-download/windows11) from Microsoft. This will also wipe any data stored on the USB flash drive.

    > It is best to disconnect all storage disks except from the main (C Drive) disk from the computer before installing Windows 11.

2. Boot into your USB that has the Windows 11 Media on it. 
	
	* *You can do this by entering your systems' BIOS and change the BIOS boot order to have USB media as the first priority (this can usually be found under the boot tab), or simply look for the words "boot menu" when you see your BIOS boot screen, press the corresponding function key and choose the USB flash drive to boot from it.*
    
3. Follow the steps on screen to install Windows 11. 
 
4. Click `Install now`
 	
	 [![Windows 11-2021-10-05-15-03-05.png](/assets/install-11/windows-11-2021-10-05-15-03-05.png)](/assets/install-11/windows-11-2021-10-05-15-03-05.png)

5. Continue on until you hit the license key screen. Here you can either enter your license code, or if Windows has been installed to this computer before, click on the `I don't have a product key` link.

	[![Windows 11-2021-10-05-15-02-59.png](/assets/install-11/windows-11-2021-10-05-15-02-59.png)](/assets/install-11/windows-11-2021-10-05-15-02-59.png)
       
    
    [![Windows 11-2021-10-05-15-03-29.png](/assets/install-11/windows-11-2021-10-05-15-03-29.png)](/assets/install-11/windows-11-2021-10-05-15-03-29.png)

6.  Continue on until you hit the “Which type of installation do you want?” screen. Click `Custom`. 

	[![Windows 11-2021-10-05-15-09-05.png](/assets/install-11/windows-11-2021-10-05-15-09-05.png)](/assets/install-11/windows-11-2021-10-05-15-09-05.png)

7. Click on each partition of the target drive and select delete (if you don't know the target drive, go back and unplug the drives you don't want to install windows on). ***Each means ALL*** But do you mean ALL? ***Yes, All***. Once all the partitions are gone you will be left with unallocated space. At this point click `Next`. 

	[![Windows 11-2021-10-05-15-20-37.png](/assets/install-11/windows-11-2021-10-05-15-20-37.png)](/assets/install-11/windows-11-2021-10-05-15-20-37.png)
    
	[![Windows 11-2021-10-05-15-11-30.png](/assets/install-11/windows-11-2021-10-05-15-11-30.png)](/assets/install-11/windows-11-2021-10-05-15-11-30.png)
	
    <details markdown="1">
    <summary markdown=span>
    
    **Error: Windows cannot be installed on this disk. The selected disk has an MBR partition table.**
    
    </summary>

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

    </details>

## Finishing up

8. Windows will now install.

9. Once complete you will be facing the setup screen. Configure as you wish.
    
    
You have successfully installed Windows 11.
