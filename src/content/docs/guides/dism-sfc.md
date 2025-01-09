---
title: DISM and SFC
sidebar:
    hidden: false
has_children: false
parent: General Guides
pagefind: true
last_modified_date: 2022-06-29
redirect_from: /books/how-to-and-guides/page/dism-and-sfc
---




#### **All commands require an admin CMD or PowerShell**

*Note: DISM should be used to repair the OS files before using SFC to repair the OS.*



## Using DISM without a source
DISM is a higher level command compared to SFC that aims to do more than just to fix broken system files, instead fixing the OS image.

1. In CMD or PowerShell run: 

	`DISM /Online /Cleanup-Image /RestoreHealth`

The DISM commands below check if the OS image is broken, but do not attempt to fix it.

1. Basic issues

	`DISM /Online /Cleanup-Image /CheckHealth`

2. Deeper issues

	`DISM /Online /Cleanup-Image /ScanHealth`

---
## Using SFC
SFC is a basic command to check and repair minor OS corruption.

In CMD or PowerShell run:

`sfc /scannow`

---
## Using DISM with a source WIM (from an ISO)

DISM normally uses an Online source to repair your system, sometimes this leads to errors. You can use a Windows 10 ISO to get a 'clean' source locally. Download the ISO using the [Windows media creation tool](https://www.microsoft.com/en-us/software-download/windows10)

Double click the downloaded ISO to mount it and note its drive letter in 'This PC'

![ISO image](../../../assets/dism-sfc/iso.webp)

In CMD or PowerShell run:

1. Repair issues with your local source
	
    `DISM /Online /Cleanup-Image /RestoreHealth /Source:F:\Sources\install.wim`

---
#### Using Indices
For Windows server you may need to look into using a specific index of the WIM

1. Check a WIM's indices
	* PowerShell: `Get-WindowsImage -ImagePath F:\sources\install.wim`
    * CMD: `dism /Get-WimInfo /WimFile:F:\sources\install.wim`

2. Use the index to run a repair against your specific OS type

   `DISM /Online /Cleanup-Image /RestoreHealth /Source:wim:F:\Sources\install.wim:1`
