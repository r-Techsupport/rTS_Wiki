---
layout: default
title: Installing Windows 11
nav_exclude: false
nav_order: 2
has_children: false
parent: OS Install Guides
search_exclude: false
last_modified_date: 2023-05-20
redirect_from: /books/how-to-and-guides/page/clean-installing-windows-11
---

**Warning**: All files on the drive you plan to install Windows to will be **deleted** if you follow this guide - this is intended. Please ensure you have an adequate [backup policy](/docs/backups) in place before proceeding if you have files of value.

# Part 1: Creating USB Installer

1. Create a bootable USB flash drive using the [Media Creation Tool](https://www.microsoft.com/en-us/software-download/windows11) from Microsoft. This will also wipe any data stored on the USB flash drive.

   > ❗ Save MCT to Desktop or Downloads folder. MCT must be saved and run from outside the USB flash drive. Just moving an ISO file to the USB flash drive will not make it bootable.

2. Run MCT by double clicking it. You will be greeted with windows Terms Of Service, after reading it, press Accept.

     ![wintos.png](/assets/install-11/wintos.png)

3. You can leave this to default, press next.  

     ![kde.png](/assets/install-11/kde.png)

4. Select create installation media for another PC, and then click next.

     ![aPC.png](/assets/install-11/aPC.png)

5. Select USB flash drive, then press next.

     ![USB.png](/assets/install-11/USB.png)

6. Select the USB you want to use, press next. 

   > ❗ Warning: This step will wipe the selected USB Flash drive, so ensure you have nothing important on the USB drive, and back up all important documents.

     ![select.png](/assets/install-11/select.png)

7. Wait till MCT finish its job. this may take some time.

     ![downl.png](/assets/install-11/downl.png)

8. After MCT says it finished, shutdown your PC.

# Part 2: Installing Windows 11

   > Please make sure to disable CSM, enable Secure Boot, and enable TPM prior to installation of Windows 11.

   > It is best to disconnect all storage disks except from the main (C Drive) disk from the computer before installing Windows 11. Not doing so can accidentally result in the installer choosing the wrong disk as the boot drive and putting actual windows on another drive.

1. Boot into your USB that has the Windows 11 Media on it. 
	
	* *You can do this by entering your systems' BIOS and change the BIOS boot order to have USB media as the first priority (this can usually be found under the boot tab), or simply look for the words "boot menu" when you see your BIOS boot screen, press the corresponding function key and choose the USB flash drive to boot from it.*
    
2. Follow the steps on screen to install Windows 11. 
 
3. Click `Install now`
 	
	 [![Windows 11-2021-10-05-15-03-05.png](/assets/install-11/windows-11-2021-10-05-15-03-05.png)](/assets/install-11/windows-11-2021-10-05-15-03-05.png)

4. Continue on until you hit the license key screen. Here you can either enter your license code, or if Windows has been installed to this computer before, click on the `I don't have a product key` link.

	[![Windows 11-2021-10-05-15-02-59.png](/assets/install-11/windows-11-2021-10-05-15-02-59.png)](/assets/install-11/windows-11-2021-10-05-15-02-59.png)
       
    
    [![Windows 11-2021-10-05-15-03-29.png](/assets/install-11/windows-11-2021-10-05-15-03-29.png)](/assets/install-11/windows-11-2021-10-05-15-03-29.png)

5.  Continue on until you hit the “Which type of installation do you want?” screen. Click `Custom`. 

     [![Windows 11-2021-10-05-15-09-05.png](/assets/install-11/windows-11-2021-10-05-15-09-05.png)](/assets/install-11/windows-11-2021-10-05-15-09-05.png)

6. Click on each partition of the target drive and select delete (if you don't know the target drive, go back and unplug the drives you don't want to install windows on). ***Each means ALL*** But do you mean ALL? ***Yes, All***. Once all the partitions are gone you will be left with unallocated space. At this point click `Next`. 

    [![Windows 11-2021-10-05-15-20-37.png](/assets/install-11/windows-11-2021-10-05-15-20-37.png)](/assets/install-11/windows-11-2021-10-05-15-20-37.png)
    
    [![Windows 11-2021-10-05-15-11-30.png](/assets/install-11/windows-11-2021-10-05-15-11-30.png)](/assets/install-11/windows-11-2021-10-05-15-11-30.png)
	  
        Ensure that you only have drive 0 partitions in this window before deleting, otherwise this means you didnt disconnect other drives as noted in step 8.

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

7. Windows will now install. When it finishes it will automatically restart your machine, when your screen goes black pull out your installation USB drive.

8. Once the machine finishes restarting you will be facing the setup screen. Configure as you wish.

     > If you need to complete installation without internet access, please refer to the following guide: <https://pureinfotech.com/bypass-internet-connection-install-windows-11/>
    

You have successfully installed Windows 11.

# Bypassing network requirements
### Bypassing the network connection step
If you reached the screen seen below, but don't want to connect to WiFior are unable to connect and don't have the option for "I don't have internet", follow these steps: 
     
[![win11-network.png](/assets/install-11/win11-network.png)](/assets/install-11/win11-network.png)

1. Press Shift + F10 on your keyboard. This will bring up a Command Prompt window. 

2. Type in `OOBE\BYPASSNRO` and then press Enter. 

[![win11-network_bypass.png](/assets/install-11/win11-network_bypass.png)](/assets/install-11/win11-network_bypass.png)

The setup process will now restart. This will either give you the option for "I don't have internet", or skip to the local account creation screen. 
You can continue setting up Windows 11. 

### Bypassing the Microsoft account requirement
If you reached the screen seen below, but don't want to log into a Microsoft account or don't have one, follow these steps: 

[![win11-msft_acc_login.png](/assets/install-11/win11-msft_acc_login.png)](/assets/install-11/win11-msft_acc_login.png)

1. Type in `no@thankyou.com` and press Enter. 

[![win11-msft_acc_bypass.png](/assets/install-11/win11-msft_acc_bypass.png)](/assets/install-11/win11-msft_acc_bypass.png)

2. Type in any password and press Enter. 

[![win11-msft_acc_login_bypass2.png](/assets/install-11/win11-msft_acc_bypass2.png)](/assets/install-11/win11-msft_acc_bypass2.png)

You will get an error like seen below, but it can be ignored and you can continue setting up Windows 11. 

[![win11-msft_acc_login_bypass3.png](/assets/install-11/win11-msft_acc_bypass3.png)](/assets/install-11/win11-msft_acc_bypass3.png)
