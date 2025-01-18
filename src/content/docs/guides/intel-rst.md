---
title: Missing drives during Windows install
description: Resolving missing disk drives issues during Windows installation
---
During the installation of Windows 10 and Windows 11 you may encounter an error message:

> "We couldn't find any drives. To get a storage driver, click load driver."

![We couldnt find any drives](../../../assets/intel-rst/missing_drives.webp)

If you are certain disk is plugged in, to resolve this issue you have two choices:
- Easiest: [Disable Intel RST in BIOS](#disable-intel-rst-in-bios)
- If you want to use RAID: [Load an Intel RST Driver](#load-an-intel-rst-driver)

## Disable Intel RST in BIOS
The easiest way to resolve this issue is to disable Intel RST in your BIOS. On many laptops and select motherboard, Intel RST is enabled by default.

The menus vary between manufacturers and models, but the basic entries you want to find may be called "Storage" or "Disk" mode. 

This field should currently be set to "RAID" and you want to change it to "AHCI".

On some systems you may find a "VMD setup/controller" option, disabling this will have the same effect on RST.

You can reboot and load back into the Windows install USB and complete the installation without issue.

### Asus
Possible menus to disable RAID include:
- (EZ Mode) Intel Rapid Storage Technology => OFF
- Advanced\VMD setup menu\Enable VMD controller => Disabled
- Advanced\System Agent (SA)\VMD setup menu\Enable VMD controller => Disabled
- Advanced\Integrated Peripherals\RAID Configuration (Intel VMD)\Enable RAID/Optane Function => Disabled
- Advanced\PCH Storage Configuration\SATA Mode selection => AHCI Mode

Below are helpful images for some ASUS BIOS
![Asus RST BIOS menu](../../../assets/intel-rst/asus_rst0.webp)
![Asus RST BIOS menu](../../../assets/intel-rst/asus_rst1.webp)
![Asus RST BIOS menu](../../../assets/intel-rst/asus_rst2.webp)
![Asus RST BIOS menu](../../../assets/intel-rst/asus_rst3.webp)

### Gigabyte Aorus
Possible menus to disable RAID include:
- Chipset\SATA Mode => AHCI
- Settings\IO Ports\SATA Mode => AHCI
- Settings\IO Ports\NVMe RAID mode => Disabled
- Settings\VMD setup menu\Enable VMD Controller => Disabled
- Peripherals\SATA Mode Selection => AHCI
- Peripherals\SATA Configuration\SATA Mode Selection => AHCI

Below are helpful images for some Gigabyte Aorus BIOS
![Aorus RST VMD BIOS menu](../../../assets/intel-rst/aorus_rst0.webp)
![Aorus RST VMD BIOS menu](../../../assets/intel-rst/aorus_rst1.webp)

### MSI
Note: Some MSI motherboards have a function called M.2/Optane Genie, which will automatically configure RAID even if RAID is manually disabled. Ensure that M.2/Optane Genie function is disabled as well.

Possible menus to disable M.2/Optane Genie include:
- (EZ Mode) M.2\Optane Genie => OFF
- Advanced\Integrated Peripherals\M.2/Optane Genie => Disabled

Possible menus to disable RAID include:
- Advanced\Integrated Peripherals\SATA Mode => AHCI Mode
- Advanced\Integrated Peripherals\RAID Configuration (Intel VMD)\Enable RAID/Optane Function => Disabled

Below are helpful images for some MSI BIOS
![MSI RST VMD BIOS menu](../../../assets/intel-rst/msi_rst0.webp)

### HP 
Note: Some HP desktops/laptops have RST option permanently turned on and it's impossible to change.

Possible menus to disable RAID include:
- Advanced\System Options\Configure Storage Controller for RAID => Unchecked
- Configuration\SATA Emulation => AHCI

Below are helpful images for some HP BIOS
![HP RST VMD BIOS menu](../../../assets/intel-rst/HP_rst0.webp)
![HP RST VMD BIOS menu](../../../assets/intel-rst/HP_rst1.webp)

## Load an Intel RST Driver
If you would like to use RAID and leave Intel RST on then you will need to download the Intel RST driver [from your motherboard or laptop manufacturers support page](/learning/computing-101/#support-sites), then put that on your Windows install USB.

See below for some guides from various manufactures on this process.

### MSI
- https://www.msi.com/support/technical_details/NB_Installation_Unrecognizable

### Asus
- https://www.asus.com/support/faq/1044458/
