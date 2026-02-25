---
title: Ext2 File System Programs
description: e2fsprogs provides essential utilities for managing ext2, ext3, and ext4 filesystems (which are used by many Linux distros), including tools like e2fsck for checking, resize2fs for resizing, badblocks for scanning bad sectors, and debugfs for debugging.
sidebar:
    hidden: false
has_children: false
has_toc: true
grand_parent: Disks
parent: Disk-Management
pagefind: true
last_modified_date: 2025-12-22
---

This guide will go over the numerous tools this software suite has to offer, basic and advanced filesystem and recovery options.

> [!NOTE] Information
>
> `e2fsprogs` is one of the preinstalled packages for our [r/Techsupport Rescue Media](/live-sessions/linux-live-session). If you are using this live image, you can skip the installation section.

> [!TIP] How to install e2fsprogs
>
> Refer below for installation instructions if you are not using our live image or want to install it on your own system.
>
> <details markdown='1'>
>   <summary>Installing e2fsprogs</summary>
>
> **Debian / Ubuntu / Linux Mint**:
> ```sh
> sudo apt update && sudo apt install e2fsprogs
> ```
> 
> **Fedora / RHEL / CentOS / AlmaLinux**: 
> ```sh
> sudo dnf install e2fsprogs
> ```
> 
> **Arch / Manjaro / CachyOS**:
> ```sh
> sudo pacman -Syu e2fsprogs
> ```
> </details>

## Tools

The rest of the guide will be going over the different methods and tools available. Note, it is best to have a basic understanding of what stuff like `/dev/sdb` and `/dev/sdb1` represent. A guide to understanding it can be found [here](/disks/disk-management/linux-filesystem-overview/).

> [!WARNING] Warning
>
> Some of these operations are DESTRUCTIVE (i.e. they will delete data). Double check the comments before running the commands.

### Basic Repair Operations

#### Check and Repair Filesystem (e2fsck)

**Basic automatic repair:**

```bash
# Unmount first (REQUIRED)
sudo umount /dev/sdb1

# Automatic repair (answer yes to all)
sudo e2fsck -y /dev/sdb1

# Force check even if filesystem appears clean
sudo e2fsck -fy /dev/sdb1
```

**Interactive repair:**

```bash
# Manual decisions for each error
sudo e2fsck /dev/sdb1

# With verbose output
sudo e2fsck -v /dev/sdb1
```

**Check for bad blocks during repair:**

```bash
# Read-only bad block scan + filesystem check
sudo e2fsck -c /dev/sdb1

# Read-write bad block scan (DESTRUCTIVE - erases data)
sudo e2fsck -cc /dev/sdb1
```

#### Surface Scan for Bad Blocks (badblocks)

**Read-only test (safe):**

```bash
# Non-destructive scan, show progress
sudo badblocks -sv /dev/sdb

# Save bad block list to file
sudo badblocks -sv -o badblocks.txt /dev/sdb

# Use bad block list during filesystem check
sudo e2fsck -l badblocks.txt /dev/sdb1
```

**Write test (DESTRUCTIVE):**

```bash
# WARNING: Erases ALL data on device
sudo badblocks -wsv /dev/sdb

# Non-destructive read-write test (very slow)
sudo badblocks -nsv /dev/sdb
```

#### Resize Filesystem (resize2fs)

**Expand filesystem:**

```bash
# After expanding partition with gparted
# Unmount first
sudo umount /dev/sdb1

# Check filesystem before resizing
sudo e2fsck -f /dev/sdb1

# Expand to fill partition
sudo resize2fs /dev/sdb1

# Remount
sudo mount /dev/sdb1 /mnt
```

**Shrink filesystem:**

```bash
# Unmount and check
sudo umount /dev/sdb1
sudo e2fsck -f /dev/sdb1

# Shrink to specific size (e.g., 50GB)
sudo resize2fs /dev/sdb1 50G

# Now shrink partition with gparted to match
```

### Advanced Operations

#### Recover Deleted Files (debugfs)

**Interactive recovery:**

```bash
# Open filesystem in debugfs
sudo debugfs /dev/sdb1

# Inside debugfs:
debugfs> lsdel              # List recently deleted files
debugfs> ls -d <inode>      # Check if file recoverable
debugfs> dump <inode> /tmp/recovered_file   # Recover file
debugfs> quit
```

#### Modify Filesystem Parameters (tune2fs)

**View current settings:**

```bash
# Display all filesystem parameters
sudo tune2fs -l /dev/sdb1 | less
```

**Optimize for USB drives:**

```bash
# Disable journaling (faster for flash drives)
sudo tune2fs -O ^has_journal /dev/sdb1

# Reduce reserved space from 5% to 1%
sudo tune2fs -m 1 /dev/sdb1
```

**Enable/disable features:**

```bash
# Enable journaling
sudo tune2fs -j /dev/sdb1

# Change to writeback mode (faster, less safe)
sudo tune2fs -o journal_data_writeback /dev/sdb1

# Set filesystem label
sudo tune2fs -L "MyDrive" /dev/sdb1

# Set max mount count before forced check
sudo tune2fs -c 30 /dev/sdb1

# Disable automatic time-based checks
sudo tune2fs -i 0 /dev/sdb1
```

#### Backup and Restore Metadata (e2image)

**Create metadata backup:**

```bash
# Backup filesystem metadata (not file contents)
sudo e2image -r /dev/sdb1 - | gzip > sdb1_metadata.img.gz

# Raw backup including file contents (use for recovery)
sudo e2image -ra /dev/sdb1 sdb1_backup.img
```

**Restore metadata:**

```bash
# Restore metadata from backup
zcat sdb1_metadata.img.gz | sudo e2image -I /dev/sdb1 -
```

#### Change File Attributes (chattr/lsattr)

**Make files immutable:**

```bash
# Prevent deletion/modification (even by root)
sudo chattr +i important_file.txt

# View attributes
lsattr important_file.txt

# Remove immutable flag
sudo chattr -i important_file.txt
```

**Append-only files:**

```bash
# Only allow appending (good for logs)
sudo chattr +a logfile.txt
```