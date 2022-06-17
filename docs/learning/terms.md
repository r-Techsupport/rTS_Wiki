---
layout: default
title: Terms & Commands
nav_exclude: false
has_children: false
parent: Learning
search_exclude: false
last_modified_date: 2022-06-16
---

# Terms & Commands

## Terms
### Hardware

| Term | Definition |
| ---- | ---------- |
| Operating System (OS) | The piece of software which controls your CPU, and which you run applications on (e.g. Windows). |
| Central Processing Unit (CPU) | The brain of the computer, which controls other components. |
| Graphics Processing Unit (GPU) | Controls graphics (what you see). Can be integrated into the CPU, or on a seperate card |
| Random Access Memory (RAM) | Temporary storage for the CPU. |
| Power Supply Unit (PSU) | Converts the electricity from the wall into the right form, to be used in the computer. |
| Peripheral Component Interconnect (PCI) | A connector for expansion cards and more. |
| PCI Express (PCIe) | The successor of PCI, used on modern systems. |
| (Navigation keys) NavKeys | Ins, Del, Home, End, Page Up, Page Down |
| Keyboard and Mouse (KB/M) | The device which you type on, and the device which you move the cursor with. |
| Hz | The frequency at which something operates (cycles per second).  |

### Software

| Term | Definition |
| ---- | ---------- |
| Personal Computer (PC) | A computer used for personal use. |
| WINE | A tool for running Windows applications on Linux/MacOS/BSD. |
| PlayOnLinux (PoL) | A tool that makes WINE easier to use. |
| Linux Distribution (Distro) | A version of the Linux operating system that is packaged with other components (e.g. Ubuntu). |
| Linux Desktop Environment (DE) | A collection of components which make up the GUI for Linux operating systems. |
| Super Key | The "Windows Key" but in Linux-speak |
| Teletype (TTY) | Terminal / console / text-only session |
| Basic Input Output System (BIOS) | Motherboard firmware that describes how the hardware should function and which operating system to boot. |
| [Unified] Extensible Firmware Interface ([U]EFI) | A type of BIOS used on newer computers. |

### Malware

| Term | Definition |
| ---- | ---------- |
| Malware | Malicious software. |
| Virus | A type of malware that spreads itself to infect more computers. |
| Trojan | A type of malware that misleads users into thinking that it is a legitimate program. Named after the Greek Trojan horse. |
| Worm | A type of malware that spreads itself. The difference between a worm and a virus is that a virus needs to be run on a host computer to spread, while a worm is independent. |
| Antivirus (AV) | A program that runs constantly in the background, scanning files on download, on access, or on a schedule |
| Anti-malware (AM) | A program that runs on demand to check for residual PUPs or other issues. |
| Potentially Unwanted Program (PUP) | A generic term for an application that may not be malicious but is not wanted/intended regardless. |

## Disks/Storage

| Term | Definition |
| ---- | ---------- |
| Hard Disk Drive (HDD) | A storage device with spinning platters that is very cheap. |
| Solid State Drive (SSD) | A storage device with no moving parts that is very fast. |
| Redundant Array of Inexpensive Disks (RAID) | A set of storage drives which are combined to make them larger, moroe reliable, or faster. |
| Master Boot Record (MBR) | The partition table format that precedes GPT. Also called the DOS/MSDOS partition table. |
| GUID Partition Table (GPT) | A newer (better) partition table. |
| Bit (b) | A single 1 or 0 used by your computer. |
| Byte (B) | 8 Bits |
| Kilobyte (KB) | 1000 Bytes |
| Megabyte (MB) | 1000 Kilobytes |
| Gigabyte (GB) | 1000 Megabytes |
| Terabyte (TB) | 1000 Gigabytes |
| Kibibyte (KiB) | 1024 Bytes |
| Mebibyte (MiB) | 1024 Kibibytes |
| Gibibyte (GiB) | 1024 Mebibytes |
| Tebibyte (TiB) | 1024 Gibibytes |

### Networking

| Term | Definition |
| ---- | ---------- |
| Internet Protocol (IP) | The primary protocol used to transfer data over the internet. |
| IP address | A series of numbers that identifies a computer on the internet. |
| IPv4 address | A format of IP addresses, consisting of 4 sets numbers from 0-255 (e.g. 10.15.1.58) |
| IPv6 address | A format of IP addresses, consisting of 8 sets of hexadecimal numbers from 0-FFFF (e.g. fe80:3b71:ed9b:924e:f925:dfad:964a:5d26). |
| Domain Name System (DNS) | The protocol that maps domains to IP addresses. |
### Other

| Term | Definition |
| ---- | ---------- |
| Hexadecimal (hex) | Base-16 numbers, consisting of digits 0-F. |
| Microsoft (MS/MSFT) | The company that makes Windows and other products. |

<!-- Note: It is debated whether kilobytes/megabytes//gigabytes/terabytes should be in multiples of 1000 or 1024. You should use context to decide which application uses which multiple.-->

## Commands

### Universal

| Shortcut | Action |
| -------- | ------ |
| Ctrl + A | Select All |
| Ctrl + C | Copy |
| Ctrl + P | Print |
| Ctrl + S | Save |
| Ctrl + V | Paste |
| Ctrl + X | Cut |
| Ctrl + Z | Undo |
| Ctrl + W | Close tab (in most web browsers) |
| Alt + Tab | Switch window |
| Alt + F4 | Closes program |
| Alt + Space | Window options |
| PrtScrn | Takes a screenshot of your entire screen and saves it to your clipboard (paste in eg. mspaint) |
| Alt + PrtScrn | Takes a screenshot of the active window and saves it to your clipboard (paste in eg. mspaint) |
| Home | Go to the start of a page |
| End | Go to the end of a page |
| PgUp | Go up a page |
| PgDown | Go down a page |
| Del | Deletes everything in front of the marker, not behind like Backspace does |
| Ins | In some programs, write over what you have already written if the marker is placed where there is already text |
| NumLock | Toggles the numpad between numbers and arrows/navkeys |

### Windows-specific

| Shortcut | Action |
| -------- | ------ |
| WinKey + R | Run a command |
| WinKey + E | Start the explorer |
| WinKey + X | Open the Quick Link menu, which contains links to tools such as Device Manager and Event Viewer. |
| WinKey + ArrowKeys | Move a window around |
| Ctrl + Shift + Esc | Opens Task Manager |

These are just the major ones, [more here](https://support.microsoft.com/en-us/help/12445/windows-keyboard-shortcuts).

### Linux-specific

| Shortcut | Action |
| -------- | ------ |
| Alt + Drag | Moves windows, from any point, rather than just from the title bar |
| Ctrl + Shift + U | Allows you to enter a 4-digit [Unicode character code](https://en.wikipedia.org/wiki/List_of_Unicode_characters) to type special characters |
| Ctrl + Shift + V | Paste into a Terminal |
| Ctrl + Alt + T | Opens a Terminal |
| Ctrl + Alt + F1|F6 - Allows you to enter TTY 1 through 6 |
| Ctrl + Alt + F7 | Returns you to a GUI session. Technically you can have more on F8-F12, but this is uncommon. |
| Ctrl + Esc | In XFCE, open the Whisker Menu |
| Super | In Ubuntu Unity, open the Dash |

