---
layout: default
title: DDU
nav_exclude: false
parent: Factoids
has_children: false
search_exclude: false
last_modified_date: 2022-09-11
---
# Display Driver Uninstaller (DDU)
{: .no_toc}

Display Driver Uninstaller is a program that can fully wipe display/audio drivers, to troubleshoot various issues.

> DDU does not erase any personal files. It only wipes the selected driver(s), and any associated info, such as display color profiles, settings, etc

{% include toc.md %}

## Installing DDU

1. [Download DDU](https://www.guru3d.com/files-get/display-driver-uninstaller-download,19.html) and _extract_ the .zip:

	![dduzip.png](/assets/factoids/dduzip.png)

2. Double-click on the .exe in the newly extracted folder, then click "Extract" in the dialog.
A new folder containing `Display Driver Uninstaller.exe` will be created.

	![dduextract.png](/assets/factoids/dduextract.png)
	> ❗ Do _not_ move, modify, or delete any files associated with DDU

3. [Boot in safe mode](https://support.microsoft.com/en-us/help/12376/windows-10-start-your-pc-in-safe-mode) 

4. Open `Display Driver Uninstaller.exe` from the newly created folder in the previous step

## Wiping Display Drivers

> ❗ Make sure you are in [Safe Mode](https://support.microsoft.com/en-us/help/12376/windows-10-start-your-pc-in-safe-mode) for the following steps.

### Laptops or integrated graphics
To wipe display drivers for laptops/devices with onboard graphics: Select the `Clean and do NOT restart` option for the first driver, _then_ the `Clean and restart` option for the second driver. Any GPU driver can be wiped first, the order is irrelevant.

### Desktops with a dedicated GPU
To wipe display drivers from a dedicated GPU: Select the "GPU" device type from the drop-down list on the right, select the GPU driver you wish to uninstall, and click `Clean and restart`

![ddunvidia.png](/assets/factoids/dduvideo.png)

## Reinstalling Display Drivers
  
#### For custom-built desktops
Go to the site of the GPU's manufacturer(s) ([NVIDIA](https://www.nvidia.com/Download/index.aspx), [AMD](https://www.amd.com/en/support), [Intel](https://www.intel.com/content/www/us/en/download-center/home.html)) and download the latest available display drivers.

#### For laptops/pre-built desktops:
Go to the model's support page on your manufacturer's site, and download the latest available display drivers.

> ❗ For devices with multiple GPUs, download both the integrated and dedicated GPU drivers. Install the integrated GPU drivers _first_, followed by the dedicated GPU drivers.

---

## Wiping Audio Drivers
![dduaudio.png](/assets/factoids/dduaudio.png)
  
> ❗ Make sure you are in [Safe Mode](https://support.microsoft.com/en-us/help/12376/windows-10-start-your-pc-in-safe-mode).

1. Select the "Audio" device type from the drop-down list on the right, select the Audio driver you wish to uninstall, and click `Clean and restart`

## Reinstalling Audio Drivers
#### For custom-built desktops
Go to your motherboard's support page on the manufacturer's site, and download the latest available audio drivers

#### For laptops/pre-built desktops
Go to the model's support page on your manufacturer's site, and download the latest available audio drivers.
