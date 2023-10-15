---
layout: default
title: Making a System Dossier
nav_exclude: false
has_children: false
parent: General Guides
search_exclude: false
last_modified_date: 2022-07-01
redirect_from: /books/how-to-and-guides/page/making-a-system-dossier
---

# Making a System Dossier
{: .no_toc}

{% include toc.md %}

## General System Information
None of the tools here do everything, but oftentimes all of them don't need to be run.
### Specify
Specify is a tool that gathers information about your OS, software, and hardware, and allows convenient ways to save and share it. You can download Specify [here](https://spec-ify.com/download).

To use this tool, run `Specify.exe` and follow the prompts. Once done, it will automatically open a link and copy it to your clipboard.
 
Links are automatically deleted after 24 hours. You can choose to redact your username and/or OneDrive commercial name from the report if you feel it's sensitive information.
> ℹ️ If you receive a "Windows protected your PC" pop up, click `More info` then `Run anyway`.
>
> 📶 For machines without internet access, select the "Don't Upload" option. Upload `specify_specs.json` to the [official website](https://spec-ify.com/) to generate a report.

### Get-Specs
Alternatively, you can use [Get-Specs](https://github.com/r-Techsupport/Get-Specs/releases/latest/download/Get-Specs.zip) to get similar information.

To use this tool, extract `Get-Specs.zip` and run `Specs.cmd` inside the newly extracted folder. Click "Start" and once done, click "Upload" to open a link and copy it to your clipboard, or click "View" to open a `.html` file in your browser. 

Links are automatically deleted after 24 hours, a permanent `TechSupport_Specs.html` file will be generated in the folder regardless.
> ℹ️: Do *not* move, modify, or delete any files inside of the extracted folder. If you receive a "Windows protected your PC" pop up, click `More info` then `Run anyway`.
### msinfo32
msinfo32 is built into Windows. It will provide some of the same information Speccy does. This is more focused on hardware and OS than installed software.

It is best if you run this tool with elevated privileges, but it won't force you to.

You can open the tool by typing `msinfo32` into a command line, or you can open it using run (Win+R).

When saving information from msinfo32, you can choose to save or export. Both of these provide all of the information seen.
* Saving will create a .nfo file, which allows it to be opened in msinfo32 later. It can be read by hand as well. It will be larger than export.
* Exporting will create a .txt file, which is easiest to read without msinfo32. It cannot be opened by msinfo32 at a later date

### dxdiag
dxdiag is also built into Windows. It provides very basic information about your system but has a few things that nothing else provides.

It is best if you run this tool with elevated privileges, but it won't force you to.

You can open the tool by typing `dxdiag` into a command line, or you can open it using run (Win+R).

There is only one way to save the information from dxdiag, which is the "Save All Information..." button. It will create a small .txt file.

## Useful for crashes or blackscreens
These are not a replacement for general system information tools, these should only be an additional tool you use.

### HWiNFO stress tests and logging
[Link to separate guide](/docs/guides/hwinfo)

This provides a view of how your system runs under load. This is useful to determine hardware faults or overheating issues.

### Dump files
Dump files are what Windows uses to save information before a crash. You might have dump files in C:\Windows\Minidump.

If you do, copy the folder to the desktop and create a zip file of it.

### Power Supply
If you are using a desktop computer, getting the make and model of your power supply can help identify if that is the problem.

None of these tools can identify it, you have to look at your PSU if you don't know. Saying "500W Gold" doesn't give any real information about your power supply.

## Useful for networking issues
These are not a replacement for general system information tools, these should only be an additional tool you use.

### ipconfig
ipconfig is a command-line tool built into Windows. This outputs information into the command line and you are responsible for saving it. You can use [pastebin](https://www.pastebin.com), or save it to a text file.

* Running `ipconfig /all` will give information about network adapters and current network connection status.
* Running `ipconfig /displaydns` will give information about currently cached information

### ifconfig.me
ifconfig.me is a site will which give information about your external network connection and status. You can use the command line to get information using the `curl` commands. This outputs information into the command line and you are responsible for saving it. You can use [pastebin](https://www.pastebin.com), or save it to a text file.

* Running `curl ifconfig.me/all` will give give information out external connection status.

If you get the error `Could not resolve host`, just saying that is fine.

## Other, single-task tools
These are not a replacement for general system information tools, these should only be an additional tool you use.

### winver
winver is a tool built into Windows. It will give information about the Windows version, build, and skew.

You can open the tool by typing `winver` into a command line, or you can open it using run (Win+R).

Taking a screenshot, or manually copying the relevant information is acceptable.
* For version and build, you need the line: `Version ____ (OS Build ___.___)`
* For skew, you need the line: `The Windows __ ____ operating system and...`

### slmgr
slmgr is a tool built into Windows. It will give information about the current license and licensing status.

You can open the tool by typing `slmgr /dli` into a command line, or you can open it using run (Win+R).

Most of this information can be useful, it is recommended that you take a screenshot of the window that pops up.

### Crystal disk info
Crystal disk info (CDI) is a tool for obtaining the SMART status of all attached drives.

You can download it [here](https://osdn.net/projects/crystaldiskinfo/downloads/73319/CrystalDiskInfo8_7_0.exe).

For saving information, `Edit` -> `Copy` then either save it to a text file or use [Pastebin](https://www.pastebin.com)
