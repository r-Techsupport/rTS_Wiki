---
layout: default
title: Important drivers to download
nav_exclude: false
has_children: false
parent: General Guides
search_exclude: false
last_modified_date: 2024-02-01
---

# What to do after installing/reinstalling Windows

{: .no_toc}

{% include toc.md %}

## After installation

This guide is to quickly set up your Windows desktop after installation of Windows. It will outline the key necessary steps to quickly set up your PC in installing drivers so you can begin using it as soon as possible.

> ❗ For installing/reinstalling Windows, please refer to [this guide](/docs/installations/win).

## Drivers/Applications you need to download:

To find most necessary drivers, you would need to head to the motherboard page. This can easily be found by searching for `<Company name> <Motherboard model> drivers` in a search engine, for example: `ASUS TUF X670e Plus Wifi drivers`.

> ❗ Note that some motherboards have the WiFi variant named differently to their standard products. `ASUS TUF X670e Plus Wifi` is a different motherboard to simply `ASUS TUF X670e Plus`!

> ❗ For laptops and prebuilts, the same logic also applies. If from an OEM like HP and Dell, search up your laptop and exact model, for example `Dell Vostro 7590 drivers`. To find the laptop/prebuilt model exactly, refer to the FAQ below. Do note that non-OEM prebuilts, such as Origin PC, Build Redux, etc. utilize commercial products so the previous points apply instead.

### Important drivers:

The following is a list of drivers you would need to install and where to find them:

| Driver | Definition | Where to find them |
| ------ | ---------- | ------------------ |
| Wifi drivers | Sometimes referred to as wireless/network/LAN drivers, they enable you to have wifi on your PC. Keep in mind not all motherboards are wifi supported, so ensure the motherboard you have is the wifi variant. If using a WiFi dongle, then windows update will take care of them, or you will have to manually install the drivers. | If motherboard is wifi variant, then from motherboard drivers page. Otherwise, if dongle, then from the dongle product support page (may be included with windows updates). |
| Bluetooth drivers | May be included with the network drivers/wireless/LAN drivers, these allow you to connect your devices via bluetooth, such as wireless headsets, controllers, etc. Same logic also applies with dongle.| If motherboard is wifi variant, then from motherboard drivers page. Otherwise, if dongle, then from the dongle product support page (may be included with windows updates). |
| Chipset drivers | Drivers for chipset to allow features of CPU to integrate well with the OS and motherboard. | Motherboard drivers page. |
| Audio drivers | Allows for function of the 3.5mm audio jacks included with the motherboard (front panel extension and back). | Motherboard drivers page |
| USB drivers | Usually included in Windows updates, but in case you are using an older motherboard, you many need to install USB drivers if you find some of the front/back USB ports not working. | Motherboard driver page |
| Graphics drivers | Dependant on GPU, if GPU drivers are available on motherboard page **do not download them**! GPU drivers on the motherboard page typically are outdated and we highly recommend you head to the appropriate GPU manufacturer and download the driver from there. If you are using iGPU, then download from AMD or Intel, depending on what CPU you are running. | If AMD GPU, download from: https://www.amd.com/en/support. If NVidia GPU, download from: https://www.nvidia.com/download/index.aspx. If Intel GPU, download from: https://www.intel.com/content/www/us/en/support/products/80939/graphics.html. |

**Once that is done, make sure to update Windows after this installing all these important drivers by opening up Settings -> Updates -> Update Windows. This step cannot be ignored!**

### Optional drivers and applications:

These drivers are optional and mainly for RGB control purposes, or custom button assignments for keyboards and mouse (if applicable).

- Motherboard control center (For example, ASUS Armory Crate, Gigabyte Control Center, MSI Center, etc.) - Purely optional for RGB control, and optional driver updates, but can introduce extra bloatware. 
- Peripheral drivers (For example Logitech GHub for mice and keyboard) - RGB control and extra button assignment and customization, sometimes necessary for stuff like HOTAS joysticks, Rudder pedals, steering wheels, etc.

## FAQ - Frequently Asked Questions

- **What is my laptop/prebuilt model?** - If you are unaware of what your laptop/prebuilt model is, you can easily find it the following ways (Note the following only applies to OEM devices):
    - Search up `System Information` in the Windows search bar, or `sysinfo`, select the first option. The laptop information will be displayed there in the `System Model name` field. If not displayed, refer to the next question.
    - Search up `dxdiag` in the search bar, run it (its alternate name is directX diagnostics tool), the first page will tell you the model of your laptop/prebuilt in the `System model` secion.

- **What is my motherboard model?** - If you have a non-OEM prebuilt, particularly system integrators such as Origin PC, Build Redux, chances are they are utilizing standard commercial components in which case the motherboard model will yield results instead. Search up `System Information` in the Windows search bar, or `sysinfo`, select the first option. The laptop information will be displayed there in the `Baseboard product` field. Alternatively, running Specify will also tell you the necessary information: https://spec-ify.com/download.

- **I cannot find the drivers on the motherboard page!** - If using an older motherboard, for example a TUF Z370, then it is likely that the page you are looking at is currently the Windows 11 drivers section. Select OS as Windows 10, and all drivers will be listed there. Windows 10 drivers will work in Windows 11.