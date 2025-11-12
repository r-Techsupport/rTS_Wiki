---
title: Blacklist
sidebar:
    hidden: false
    order: 2
has_children: false
parent: Software We Recommend
description: This serves as a master list of banned software that we do not permit in the community.
pagefind: true
last_modified_date: 2025-06-18
redirect_from: /books/software-we-recommend/page/blacklist
---
## EOL OS 
<ins>Any</ins> EOL OS is unsupported, it does not need to be listed here, but here are some examples
### Windows
| Name          | Notes |
| --- | ---|
| Win9x |
| Windows XP |                                                                                                                                                                                                  
| Windows Vista |                                                                                                                                                                                                            
| Windows 7     |                                                                                                                                                                                                            
| Windows 10    | Windows 10 has lost product support as a whole. See [Windows 10 EOL](/installations/install-10) for more information. |
| Windows 11    | [See here](https://docs.microsoft.com/en-us/lifecycle/products/windows-11-home-and-pro) to check which versions are currently supported. You can type `winver` into the start menu to see your current version. |
### Linux
Please check with the distro provider for the exact times. All versions of Linux prior to their 2012 release are considered unsupported.
| Name | Notes|
|--- | --- |
| Ubuntu 12.04 and before  |
| Fedora Linux 25 and before | Please [see here](https://docs.fedoraproject.org/en-US/releases/eol/) for unsupported Fedora versions | 

## Unsupported OS
Any custom Windows ISO is unsupported. They are not endorsed by Microsoft and often remove or cripple important Windows features like Windows Update and Windows Defender. The developers of these ISOs can also decide whether or not to implement malware and put the user in danger. These unsupported OSs are not limited to but include the ones listed below.
* AtlasOS
* ReviOS
* Tiny10
* Tiny11

## Debloaters
These break machines and are black boxes for troubleshooting. If you have an issue with an OS don't use it. Do not break it then expect help.

| Name | Notes |
| --- | --- | 
| Win10Debloater | Sycnex |
| Win10Script | ChrisTitusTech |
| Debloat-Windows-10 | W4RH4WK |
| Tron Script | bmrf |

## Browsers

Any browsers listed below are blacklisted. Apart from the main 3: Chrome (including Edge, Opera, Vivaldi), Firefox and Safari, any other browser should be used with extreme caution. Browsers included with antivirus are blacklisted no matter what.

| Name | Notes |
| ---  | --- |
| AVG Secure Browser | 
| Avast Secure Browser |
| UC Browser |
| Baidu Browser |
| Torch Browser |
| Yandex | Uses its own DNS |

## Benchmark tools

| Name | Notes |
| --- | --- |
| UserBenchMark | UserBenchMark is biased and untrusted |

## Driver finders
[See here](/recommendations/maintenance#driver-finders) for our stance and instructions on drivers. Driver finders are most times malware. All driver finders are blacklisted, it doesn't have to be listed here.
* SnappyDriver Installer
* IObit DriverBooster
* DriverEasy

## Activation Scripts
Do not use activation scripts. They breach Microsoft's terms of service. We do not endorse piracy.

**Please purchase your own Windows copy**

All activators are blacklisted regardless of trust; it does not have to be listed here.

| Name | Notes |
| ---- | ----- |
| KMSPico | Many malicious copies of this software exist. |
| AAct | Bundled with many malicious Office installers | 
| MAS (Microsoft Activation Scripts) | Is against Microsoft's terms of service |  


## Freeware/Shareware sites

This isn't software but the software on these website is almost always malicious. Any software downloaded from these websites are blacklisted.

These websites are notorious for installing malware and PUPs on your device. **You should always download software directly from the manufacturer or provider**.

We never recommend freeware sites. They are all blacklisted even if they're not present on this list.

| Name | Notes |
| ---- | ----- |
| Softonic (*.softonic.com) | 
| CNET (*.cnet.com) | News articles present on its subdomains are most of the time bogus and fake |
| FileHippo (*.filehippo.com) | 
| Filehorse (*.filehorse.com) |
| Softpedia (*.softpedia.com) |
| Software informer (*.software.informer.com) | News articles present on its subdomains are most of the time bogus and fake |

## System cleaners/optimizers
Cleaners have a long record of use in the Windows community but often times are abused, leading to broken systems and many wasted writes on an SSD. 

System cleaners or optimizers often do more harm then good, and don't solve issues. Always determine your real issue and solve it with a more direct method.

All cleaners/optimizers are blacklisted, it doesn't have to be listed here.

| Name | Notes |
| --- | --- | 
| Advanced SystemCare | IOBit |
| Ccleaner | Piriform |
| iolo System Mechanic | iolo |
| Outbyte PC Repair | Outbyte |

## Audio manipulation programs
Programs that use virtual cables sometimes permanently damage Windows audio systems. Sometimes software like this is required and is not always dangerous; just be careful with the knobs and buttons.

* Voicemod
* Voicemeeter
* Clownfish

## Third-party AVs
See [here](/recommendations/av) for our stance on AV Tools. It doesn't have to be listed here to be blacklisted. Most antiviruses are considered PUPs.

| Name | Notes |
| --- | --- | 
| Avast |
| AVG |
| Comodo |
| Kaspersky | Banned in a few countries across the world |
| McAfee | Bundled with malicious software and is a common topic for malicious websites | 
| Norton | 360 versions are known cryptominers | 
| Webroot |

## Precompiled Windows PE
Various PE distributions are illegal for various reasons such as distributing pirated/TOS breaking applications or requiring de facto payment prior to download.

* Hirens
* Gandalf

## Vendors
This list of vendors offer nothing to the community or make multiple products that are considered PUPs/Malware.

| Name | Notes |
| --- | --- |
| IOBit | All products |

## Powershell Oneliners
Any powershell script that uses the following format is blacklisted:
```
irm <url> | iex
```
or 
```
iwr <url> | iex
```

It does not have to be listed here to be blacklisted. Below are some notable examples.

| Name | Notes | 
| --- | --- |
| get.activated.win | 
| *.keytool.cc | Malicious | 
| *.wslm.net |
| Many others |
