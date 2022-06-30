---
layout: default
title: DISM & SFC
nav_exclude: false
has_children: false
parent: General Guides
search_exclude: false
last_modified_date: 2022-06-27
redirect_from: /books/how-to-and-guides/page/dism-and-sfc
---

# DISM and SFC

**All commands require an admin CMD or Powershell.**

*Note: DISM should be used to repair the OS files before using SFC to repair the OS.*

## Using DISM without a source
DISM is a higher level command compared to SFC that aims to do more than just to fix broken system files, instead fixing the OS image.

To restore health, run `DISM /Online /Cleanup-Image /RestoreHealth` in an admin CMD/PowerShell.

The DISM commands below check if the OS image is broken, but do not attempt to fix it.

* Basic issues: `DISM /Online /Cleanup-Image /CheckHealth`
* Deeper issues: `DISM /Online /Cleanup-Image /ScanHealth`

## Using SFC
SFC is a basic command to check and repair minor OS corruption.

In a CMD or Powershell, run `sfc /scannow`.

---
## Using DISM with a source WIM (from an ISO)

DISM normally uses an Online source to repair your system, but this sometimes leads to errors. You can use a Windows 10 ISO to get a 'clean' source locally.

1. Download the ISO using the [Windows media creation tool](https://www.microsoft.com/en-us/software-download/windows10)
2. Double click the downloaded ISO to mount it and note its drive letter in 'This PC':
![iso-0](/assets/dism-sfc/iso-0.png)
3. To repair issues with your local source, run `DISM /Online /Cleanup-Image /RestoreHealth /Source:F:\Sources\install.wim`.

---
#### Using Indices
For Windows server you may need to look into using a specifc index of the WIM

1. Check a WIMs indices
	* Powershell: `Get-WindowsImage -ImagePath F:\sources\install.wim`
    * CMD: `dism /Get-WimInfo /WimFile:F:\sources\install.wim`

2. Use the index to run a repair against your specific OS type

    `DISM /Online /Cleanup-Image /RestoreHealth /Source:wim:F:\Sources\install.wim:1`
