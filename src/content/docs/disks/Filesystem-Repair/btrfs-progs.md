---
title: BTRFS-Progs Utility
sidebar:
    hidden: false
has_children: false
has_toc: true
grand_parent: Disks
parent: Filesystem-Repair
pagefind: true
last_modified_date: 2025-12-22
---

`btrfs-progs` delivers management tools for the Btrfs filesystem, featuring mkfs.btrfs for creation, btrfs subvolume operations, scrub for integrity checks, and snapshot support.​

This guide will go over the numerous tools this software suite has to offer, basic and advanced filesystem and recovery options.

## Installing e2fsprogs

> [!NOTE] Information
>
> `btrfs-progs` is one of the preinstalled packages for our [r/Techsupport Rescue Media](/live-sessions/linux-live-session). If you are using this live image, you may skip this section.

**Ubuntu/Debian**: 
```sh
sudo apt update && sudo apt install btrfs-progs
```

**Fedora**:
More than likely pre-installed, but feel free to run the following:
```sh
sudo dnf upgrade && sudo dnf install btrfs-progs

```

**Arch Linux**:
```sh
sudo pacman -Syu btrfs-progs
```

## Tools

The rest of the guide will be going over the different methods and tools available. Note, it is best to have a basic understanding of what stuff like `/dev/sdb` and `/dev/sdb1` represent. A guide to understanding it can be found [here](/disks/filesystem-repair/linux-filesystem-overview/).

### Basic Repair Operations

#### Check Btrfs (btrfs check)

**Read-only check (safe):**

```bash
# Unmount first
sudo umount /dev/sdb1

# Basic check (no repairs)
sudo btrfs check /dev/sdb1

# More thorough check
sudo btrfs check --check-data-csum /dev/sdb1
```

**Repair mode (dangerous):**

```bash
# WARNING: Can cause data loss!
# Only use if filesystem won't mount
sudo btrfs check --repair /dev/sdb1

# Initialize extent tree (last resort)
sudo btrfs check --repair --init-extent-tree /dev/sdb1
```

#### Scrub Btrfs (while mounted)

**Online verification and repair:**

```bash
# Mount first
sudo mount /dev/sdb1 /mnt/btrfs

# Start scrub (checks and repairs checksums)
sudo btrfs scrub start /mnt/btrfs

# Check scrub status
sudo btrfs scrub status /mnt/btrfs

# Wait for completion
sudo btrfs scrub start -B /mnt/btrfs  # Blocking mode
```

#### Balance Btrfs

**Rebalance filesystem:**

```bash
# Mount filesystem
sudo mount /dev/sdb1 /mnt/btrfs

# Full balance (reallocate all data)
sudo btrfs balance start /mnt/btrfs

# Balance only metadata
sudo btrfs balance start -m /mnt/btrfs

# Balance data blocks
sudo btrfs balance start -d /mnt/btrfs
```

### Advanced Operations

#### Rescue Super Block

**Recover from backup superblock:**

```bash
# Try alternate superblock
sudo btrfs rescue super-recover /dev/sdb1

# Zero corrupt log (if mount fails)
sudo btrfs rescue zero-log /dev/sdb1

# Fix corrupted chunk tree
sudo btrfs rescue chunk-recover /dev/sdb1
```

#### Restore from Snapshot

**List snapshots:**

```bash
# Mount filesystem
sudo mount /dev/sdb1 /mnt/btrfs

# List snapshots
sudo btrfs subvolume list /mnt/btrfs

# Show snapshot info
sudo btrfs subvolume show /mnt/btrfs/.snapshots/snapshot1
```

**Restore files from snapshot:**

```bash
# Snapshots are accessible as subdirectories
cd /mnt/btrfs/.snapshots/snapshot1
cp -r important_files /destination/
```

**Rollback to snapshot:**

```bash
# Set snapshot as default subvolume
sudo btrfs subvolume set-default <snapshot-id> /mnt/btrfs

# Or manually restore
sudo btrfs subvolume snapshot /mnt/btrfs/.snapshots/snapshot1 /mnt/btrfs/restored
```

#### Check and Repair Device

```bash
# Scan for Btrfs filesystems
sudo btrfs device scan

# Show filesystem info
sudo btrfs filesystem show /dev/sdb1

# Check device stats
sudo btrfs device stats /mnt/btrfs

# Clear error stats
sudo btrfs device stats -z /mnt/btrfs
```