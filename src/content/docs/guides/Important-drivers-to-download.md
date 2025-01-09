---
title: Important drivers to download
sidebar:
    hidden: false
has_children: false
parent: General Guides
pagefind: true
last_modified_date: 2024-02-01
---







## After installation

This guide is to quickly set up your Windows desktop after installation of Windows. It will outline the key necessary steps to quickly set up your PC in installing drivers so you can begin using it as soon as possible.

> [!NOTE] Reinstalling Windows
> 
> For installing/reinstalling Windows, please refer to [this guide](/installations/win).

## Drivers/Applications you need to download:

### Custom builds:
To find most necessary drivers, you would need to head to the motherboard page. This can easily be found by searching for `<Company name> <Motherboard model> drivers` in a search engine, for example: `ASUS TUF X670e Plus Wifi drivers`.

> [!NOTE] Different Motherboard variants
> Note that some motherboards have the WiFi variant named differently to their standard products. `ASUS TUF X670e Plus Wifi` is a different motherboard to simply `ASUS TUF X670e Plus`!

### Laptops and prebuilts:

For laptops and prebuilts, the same logic also applies. If from an OEM like HP and Dell, search up your laptop and exact model, for example `Dell Vostro 7590 drivers`.

If you are unaware of what your laptop/prebuilt model is, you can easily find it the following ways (Note the following only applies to OEM devices):
    - Search up `System Information` in the Windows search bar, or `sysinfo`, select the first option. The laptop information will be displayed there in the `System Model name` field. If not displayed, refer to the next question.
    - Search up `dxdiag` in the search bar, run it (its alternate name is DirectX diagnostics tool), the first page will tell you the model of your laptop/prebuilt in the `System model` section.

### System Integrators / Unknown motherboard:
If you have a non-OEM prebuilt, particularly system integrators such as Origin PC, Build Redux, chances are they are utilizing standard commercial components in which case the motherboard model will yield results instead.

If you don't know the motherboard model, search up `System Information` in the Windows search bar, or `sysinfo`, select the first option. The laptop information will be displayed there in the `Baseboard product` field. 

Alternatively, running Specify will also tell you the necessary information: https://spec-ify.com/download.


### Important drivers:

The following is a list of drivers you would need to install and where to find them:

| Driver | Definition | Where to find them |
| ------ | ---------- | ------------------ |
| Wi-Fi drivers | Sometimes referred to as wireless/network/LAN drivers, they enable you to have WiFi on your PC. Keep in mind not all motherboards are WiFi supported, so ensure the motherboard you have is the WiFi variant. If using a WiFi dongle, then windows update will take care of them, or you will have to manually install the drivers. | If motherboard is Wi-Fi variant, then from motherboard drivers page. Otherwise, if dongle, then from the dongle product support page (may be included with windows updates). |
| Bluetooth drivers | May be included with the network drivers/wireless/LAN drivers, these allow you to connect your devices via Bluetooth, such as wireless headsets, controllers, etc. Same logic also applies with dongle.| If motherboard is Wi-Fi variant, then from motherboard drivers page. Otherwise, if dongle, then from the dongle product support page (may be included with windows updates). |
| Chipset drivers | Drivers for chipset to allow features of CPU to integrate well with the OS and motherboard. | Motherboard drivers page. |
| Audio drivers | Allows for function of the 3.5mm audio jacks included with the motherboard (front panel extension and back). | Motherboard drivers page |
| USB drivers | Usually included in Windows updates, but in case you are using an older motherboard, you many need to install USB drivers if you find some of the front/back USB ports not working. | Motherboard driver page |
| Graphics drivers | Dependent on GPU, if GPU drivers are available on motherboard page **do not download them**! GPU drivers on the motherboard page typically are outdated and we highly recommend you head to the appropriate GPU manufacturer and download the driver from there. If you are using iGPU, then download from AMD or Intel, depending on what CPU you are running. | If AMD GPU, download from: https://www.amd.com/en/support. If NVIDIA GPU, download from: https://www.nvidia.com/download/index.aspx. If Intel GPU, download from: https://www.intel.com/content/www/us/en/support/products/80939/graphics.html. |

**Once that is done, make sure to update Windows after this installing all these important drivers by opening up Settings -> Updates -> Update Windows. This step cannot be ignored!**

### Optional drivers and applications:

These drivers are optional and mainly for RGB control purposes, or custom button assignments for keyboards and mouse (if applicable).

- Motherboard control center (For example, ASUS Armory Crate, Gigabyte Control Center, MSI Center, etc.) - Purely optional for RGB control, and optional driver updates, but can introduce extra bloatware. 
- Peripheral drivers (For example Logitech GHub for mice and keyboard) - RGB control and extra button assignment and customization, sometimes necessary for stuff like HOTAS joysticks, Rudder pedals, steering wheels, etc.

### Unsupported and blacklisted applications and software

> [!NOTE] Blacklisted Software
> 
> To find the full list of applications and software we do not encourage the use of or support, please refer to [our blacklist](/recommendations/blacklist).

- **System Optimizers, Cleaners and debloaters:** 

    We do not support any form of system optimizers and cleaners and highly discourage the use of them as they falsely advertise: "clean up Windows to make it less bloated". This is false. 
    
    > [!WARNING] Warning
    > Windows is a heavy OS and all features that come with it are necessary to its functioning. Using these scripts can easily cause system instability at best, and broken OS's at worst (If you want a lighter OS, run run Linux instead!). 
    
    Such applications include, but are not limited to:

    - WinDebloater
    - WinScript
    - Debloat-Windows
    - Tron Script
    - AtlasOS

    If you utilized these tools, it is highly recommended you reinstall Windows (again) by following [this guide](/windows).

- **Driver finders:**

    Please refer to [this page](/recommendations/maintenance#driver-finders) to view our stance on driver finders. We consider them PUPs in short. The best way to update drivers is to use the tools officially supported by the motherboard manufacturers and peripheral manufacturers and manual installation of them, or let Windows Update take care of them.

    The reason for us not supporting them is most of these driver finders utilize non-up-to-date databases for finding drivers and can potentially install faulty or non-compatible drivers for a device.

    The following applications are not supported and are blacklisted:
    - SnappyDriver Installer
    - DriverBooster
    - DriverEasy

## Frequently Asked Question(s)

- **I cannot find the drivers on the motherboard page!** - If using an older motherboard, for example a TUF Z370, then it is likely that the page you are looking at is currently the Windows 11 drivers section. Select OS as Windows 10, and all drivers will be listed there. Windows 10 drivers will work in Windows 11.