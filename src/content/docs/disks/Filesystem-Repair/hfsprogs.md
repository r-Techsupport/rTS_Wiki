---
title: HFSProgs Utility
sidebar:
    hidden: false
has_children: false
has_toc: true
grand_parent: Disks
parent: Filesystem-Repair
pagefind: true
last_modified_date: 2025-12-22
---

`hfsprogs` offers tools for Apple's HFS and HFS+ filesystems, such as mkfs.hfsplus for formatting and fsck.hfsplus for checking, aiding Mac-Linux file exchange.

This guide will go over the numerous tools this software suite has to offer, basic and advanced filesystem and recovery options.

## Installing e2fsprogs

> [!NOTE] Information
>
> `hfsprogs` is one of the preinstalled packages for our [r/Techsupport Rescue Media](/live-sessions/linux-live-session). If you are using this live image, you may skip this section.

**Ubuntu/Debian**: 
```sh
sudo apt update && sudo apt install hfsprogs
```

**Fedora**: 
```sh
sudo dnf install hfsprogs
```

**Arch Linux**:
Install from AUR or similar AUR helper.
```sh
yay -Syu hfsprogs
```

## Tools

The rest of the guide will be going over the different methods and tools available. Note, it is best to have a basic understanding of what stuff like `/dev/sdb` and `/dev/sdb1` represent. A guide to understanding it can be found [here](/disks/filesystem-repair/linux-filesystem-overview/).

### Basic Repair Operations

#### Check and Repair HFS+ (fsck.hfsplus)

**Basic check:**

```bash
# Unmount first
sudo umount /dev/sdb2

# Check filesystem
sudo fsck.hfsplus /dev/sdb2

# Force check
sudo fsck.hfsplus -f /dev/sdb2
```

**Automatic repair:**

```bash
# Answer yes to all repairs
sudo fsck.hfsplus -y /dev/sdb2

# Verbose output
sudo fsck.hfsplus -yfv /dev/sdb2
```

**Advanced repair:**

```bash
# Rebuild catalog B-tree
sudo fsck.hfsplus -r /dev/sdb2

# Force rebuild of entire filesystem structures
sudo fsck.hfsplus -yf /dev/sdb2
```

#### Mount HFS+ Filesystems

**Read-write mount:**

```bash
# Standard mount
sudo mkdir -p /mnt/mac
sudo mount -t hfsplus /dev/sdb2 /mnt/mac

# Force mount (ignore journal)
sudo mount -t hfsplus -o force,rw /dev/sdb2 /mnt/mac
```

**Read-only mount (safe):**

```bash
# Mount read-only to prevent changes
sudo mount -t hfsplus -o ro /dev/sdb2 /mnt/mac
```

### Advanced Operations

#### Disable Journaling (for better Linux support)

```bash
# Disable HFS+ journal (makes Linux access easier)
sudo mount -t hfsplus -o force /dev/sdb2 /mnt/mac
sudo umount /mnt/mac
sudo hfsplus /dev/sdb2

# Inside hfsplus tool:
> attribute B /dev/sdb2
# Look for kHFSVolumeJournaledBit and unset it
```

#### Create HFS+ Filesystem

```bash
# Format as HFS+
sudo mkfs.hfsplus -v "MacDrive" /dev/sdb2

# With case-sensitive option
sudo mkfs.hfsplus -v "MacDrive" -s /dev/sdb2
```