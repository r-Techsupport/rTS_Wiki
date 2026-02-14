---
title: Using hw-probe for Hardware Diagnostics (Linux)
description: hw-probe is a Linux hardware probing tool that collects detailed information about your system's hardware and generates a report that can be shared for troubleshooting.
sidebar:
    hidden: false
parent: Factoids
has_children: false
pagefind: true
last_modified_date: 2024-11-05
---

> [!IMPORTANT] Important
>
> No sensitive information is included in the report, we will not ask you to share private information. You can view an example hw-probe report [here](https://linux-hardware.org/?probe=2080287906).

> [!NOTE] Information
>
> `hw-probe` is one of the preinstalled packages for our [r/Techsupport Rescue Media](/live-sessions/linux-live-session). If you are using this live image, you can skip the installation section.

<details markdown='1'>
  <summary>Installing hw-probe</summary>

Refer below for installation instructions if you are not using our live image or want to install it on your own system.

**Debian / Ubuntu / Linux Mint**:
```sh
sudo apt update && sudo apt install hw-probe
```

**Fedora / RHEL / CentOS / AlmaLinux**:
```sh
sudo dnf install hw-probe

```

**Arch / Manjaro / CachyOS**:
```sh
sudo pacman -Syu hw-probe
```

More detailed alternative methods of installing hw-probe can be found on the [official website](https://linux-hardware.org/?view=howto)
</details>

## Using hw-probe
To generate a hardware report, open a terminal and run the following command:

```sh
sudo -E hw-probe -all -upload
```

This will result in output similar to the following:

```
Probe for hardware ... Ok
Reading logs ... Ok
Uploaded to DB, Thank you!

Probe URL: https://linux-hardware.org/?probe=[URL HERE]
```

You can then share the generated URL with support personnel or on the r/techsupport reddit/discord to help diagnose hardware issues or get recommendations for drivers and configurations.