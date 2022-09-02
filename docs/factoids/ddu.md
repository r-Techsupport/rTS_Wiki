---
layout: default
title: Using DDU
nav_exclude: false
parent: Factoids
has_children: false
search_exclude: false
last_modified_date: 2022-08-29
---
# Display Driver Uninstaller (DDU)

Display Driver Uninstaller (DDU) is a program that can fully wipe display/audio drivers, to troubleshoot various issues.

<sup> **Display Driver Uninstaller does not erase any personal files, it only wipes the selected driver(s)**

## Installing Display Driver Uninstaller (DDU):

### **1.** [**Download DDU**](https://www.guru3d.com/files-get/display-driver-uninstaller-download,19.html) **and _extract_ the .zip**:

![dduzip.png](/assets/factoids/dduzip.png)

### **2. Click on the .exe in the newly extracted folder, click "Extract"**
A new folder containing _Display Driver Uninstaller.exe_ will be created

![dduextract.png](/assets/factoids/dduextract.png)
### **3.** [**Boot in safe mode**](https://support.microsoft.com/en-us/help/12376/windows-10-start-your-pc-in-safe-mode) 
 **Open _Display Driver Uninstaller.exe_ from the newly created folder in the previous step**

## Wiping Display Drivers:
![ddunvidia.png](/assets/factoids/dduvideo.png)

###### **Make sure you are in _Safe Mode_ for the following steps:**

1. Select the "GPU" device type from the drop-down list on the right, select the desired GPU driver you wish to uninstall, and click `Clean and restart`
  
    **To wipe display drivers for laptops/devices with onboard graphics: Select the `Clean and do NOT restart` option for the first driver, then the `Clean    and   restart` option for the second driver. The order is irrelevant**

## Wiping Audio Drivers:
![dduaudio.png](/assets/factoids/dduaudio.png)
1. Select the "Audio" device type from the drop-down list on the right, select the desired Audio driver you wish to uninstall, and click `Clean and restart`


  

## Reinstalling Display Drivers
### For Desktops/Pre-built Desktops
Go to the site of the GPU's manufacturer(s) ([NVIDIA](https://www.nvidia.com/Download/index.aspx), [AMD](https://www.amd.com/en/support), [Intel](https://www.intel.com/content/www/us/en/download-center/home.html)) and download the latest available drivers.

### For Laptops
Go to the laptop's support page on the manufacturer's site, and download the latest available drivers.

###### **For devices with multiple GPUs, download both the integrated and dedicated GPU drivers, install the integrated GPU drivers first, followed by the dedicated GPU drivers**

## Reinstalling Audio Drivers
### For custom-built desktops
Go to your motherboards support page on the manufacturer's page, and download the latest available audio drivers

### For laptops/pre-built desktops
Go to the laptop's/pre-built's support page on the manufacturer's site, and download the latest available audio drivers.




