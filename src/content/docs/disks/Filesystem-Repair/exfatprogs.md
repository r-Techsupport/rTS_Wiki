---
title: ExfatProgs Utility
sidebar:
    hidden: false
has_children: false
has_toc: true
grand_parent: Disks
parent: Filesystem-Repair
pagefind: true
last_modified_date: 2025-12-22
---

`exfatprogs` supplies utilities for the exFAT filesystem used in cross-platform USB/SD cards, including mkfs.exfat for creation, fsck.exfat for repair, and tune.exfat for labeling.

This guide will go over the numerous tools this software suite has to offer, basic and advanced filesystem and recovery options.

## Installing exfatprogs

> [!NOTE] Information
>
> `exfatprogs` is one of the preinstalled packages for our [r/Techsupport Rescue Media](/live-sessions/linux-live-session). If you are using this live image, you may skip this section.

**Ubuntu/Debian**: 
```sh
sudo apt update && sudo apt install exfatprogs
```

**Fedora**:
```sh
sudo dnf install exfatprogs
```

**Arch Linux**:
```sh
sudo pacman -Syu exfatprogs
```

## Tools

The rest of the guide will be going over the different methods and tools available. Note, it is best to have a basic understanding of what stuff like `/dev/sdb` and `/dev/sdb1` represent. A guide to understanding it can be found [here](/disks/filesystem-repair/linux-filesystem-overview/).

### Basic Repair Operations

#### Check and Repair exFAT (fsck.exfat)

**Basic check:**

```bash
# Unmount first
sudo umount /dev/sdb1

# Check filesystem
sudo fsck.exfat /dev/sdb1

# Automatic repair
sudo fsck.exfat -y /dev/sdb1
```

**Thorough check:**

```bash
# Full verification
sudo fsck.exfat -a /dev/sdb1

# Verbose output
sudo fsck.exfat -v /dev/sdb1
```

#### Mount exFAT

```bash
# Standard mount
sudo mkdir -p /mnt/exfat
sudo mount -t exfat /dev/sdb1 /mnt/exfat

# With specific options
sudo mount -t exfat -o uid=1000,gid=1000 /dev/sdb1 /mnt/exfat
```

### Advanced Operations

#### Create exFAT Filesystem

```bash
# Format as exFAT
sudo mkfs.exfat /dev/sdb1

# With label
sudo mkfs.exfat -n "MyUSB" /dev/sdb1

# With specific cluster size (for large files)
sudo mkfs.exfat -n "LargeFiles" -c 128 /dev/sdb1
```

#### Change exFAT Label

```bash
# Set volume label
sudo exfatlabel /dev/sdb1 "NewLabel"

# View current label
sudo exfatlabel /dev/sdb1
```

#### Dump exFAT Information

```bash
# Show filesystem information
sudo dumpexfat /dev/sdb1
```