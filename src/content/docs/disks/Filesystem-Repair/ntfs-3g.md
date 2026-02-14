---
title: NTFS-3G Utility
description: ntfs-3g enables read/write access to Windows NTFS filesystems on Linux via FUSE, supporting mounting, permissions, and compression.
sidebar:
    hidden: false
has_children: false
has_toc: true
grand_parent: Disks
parent: Filesystem-Repair
pagefind: true
last_modified_date: 2025-12-22
---

This guide will go over the numerous tools this software suite has to offer, basic and advanced filesystem and recovery options.

> [!NOTE] Information
>
> `ntfs-3g` is one of the preinstalled packages for our [r/Techsupport Rescue Media](/live-sessions/linux-live-session). If you are using this live image, you may skip the installation section.

<details markdown='1'>
  <summary>Installing ntfs-3g</summary>

Refer below for installation instructions if you are not using our live image or want to install it on your own system.

**Debian / Ubuntu / Linux Mint**:
```sh
sudo apt update && sudo apt install ntfs-3g
```

**Fedora / RHEL / CentOS / AlmaLinux**: 
```sh
sudo dnf install ntfs-3g fuse
```

**Arch / Manjaro / CachyOS**: 
```sh
sudo pacman -Syu ntfs-3g
```
</details>

## Tools

The rest of the guide will be going over the different methods and tools available. Note, it is best to have a basic understanding of what stuff like `/dev/sdb` and `/dev/sdb1` represent. A guide to understanding it can be found [here](/disks/filesystem-repair/linux-filesystem-overview/).

### Basic Repair Operations

#### Check and Repair NTFS (ntfsfix)

**Quick fix (mount issues):**

```bash
# Unmount if mounted
sudo umount /dev/sdb1

# Quick repair (fixes common issues)
sudo ntfsfix /dev/sdb1

# Clear "dirty" flag
sudo ntfsfix -d /dev/sdb1
```

> [!NOTE] Information
>
> `ntfsfix` is LIMITED - it only fixes basic issues. For serious NTFS corruption, use Windows `chkdsk`, which will require the [Windows installation media](/installations/install-11/) or a [WinPE media](/live-sessions/windows-live-session/).

#### Mount NTFS with Recovery Options

**Safe read-only mount:**

```bash
# Mount read-only to prevent further damage
sudo mount -t ntfs-3g -o ro /dev/sdb1 /mnt/windows
```

**Force mount with recovery:**

```bash
# Ignore errors and mount anyway
sudo mount -t ntfs-3g -o recover,remove_hiberfile /dev/sdb1 /mnt/windows

# Remove Windows hibernation file if blocking
sudo mount -t ntfs-3g -o remove_hiberfile /dev/sdb1 /mnt/windows
```

### Advanced Operations

#### Clone NTFS Partition (ntfsclone)

**Create compressed image:**

```bash
# Clone to image file (sparse, compressed)
sudo ntfsclone --save-image -o windows_backup.img /dev/sdb1

# With progress bar
sudo ntfsclone --save-image -o windows_backup.img /dev/sdb1 --force
```

**Restore from image:**

```bash
# Restore image to partition
sudo ntfsclone --restore-image -i windows_backup.img /dev/sdb1
```

**Clone to another drive:**

```bash
# Direct partition-to-partition clone
sudo ntfsclone -O /dev/sdc1 /dev/sdb1
```

#### Resize NTFS (ntfsresize)

**Check if resize is safe:**

```bash
# Dry-run (no changes made)
sudo ntfsresize -n -s 50G /dev/sdb1
```

**Shrink NTFS:**

```bash
# Unmount first
sudo umount /dev/sdb1

# Resize to 50GB
sudo ntfsresize -s 50G /dev/sdb1

# Then resize partition with gparted
```

**Expand NTFS:**

```bash
# First expand partition with gparted
# Then expand filesystem to fill partition
sudo ntfsresize /dev/sdb1
```

#### Extract Files Without Mounting (ntfscat)

**Copy files without mounting:**

```bash
# List files
sudo ntfsls /dev/sdb1

# List recursively
sudo ntfsls -R /dev/sdb1 /Users

# Copy specific file
sudo ntfscat /dev/sdb1 /Users/Documents/important.doc > recovered.doc
```