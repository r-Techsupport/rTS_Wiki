---
title: Linux Filesystem Overview
sidebar:
    hidden: false
has_children: false
has_toc: true
grand_parent: Disks
parent: Disk-Management
pagefind: true
last_modified_date: 2025-12-22
---

This is a very short guide and basic intro to understanding how the Linux filesystem works.

Linux filesystems are the way Linux organizes and accesses storage, similar to how Windows organizes drives and folders, but with a more flexible, device-and-partition oriented model.

## What is a Filesystem?
The filesystem is the structure of directories and files on a storage device. In Windows, you see drives like C: or D:, whereas in Linux, devices and their partitions appear as entries under `/dev` and are mounted (made accessible) at specific folders in the single directory tree starting at `/`. 

If you are a Windows user, think of mounting as “plugging in a USB drive or another partition so its contents appear under a chosen folder in your existing file system.” When a device is mounted, its files show up at a mount point, just like a folder path you navigate to.

Partitions are slices of a physical disk. A disk can be partitioned into multiple sections, each potentially holding its own filesystem. In Windows terms, this is like having multiple volumes on a single drive. So you can have C:, D:, E: volumes on a single physical drive, but in File Explorer, each are treated as "their own separate drives". Linux accesses them as separate devices and then mounts them into the filesystem tree.

> [!NOTE] Information
>
> There is no benefit to having multiple volumes excess on a single drive. If you have more than two partitions on a drive (with the exception of the C: drive having recovery and boot partitions), you are doing something wrong and inadvertently can decrease the lifespan of your device due to excess reads and writes to the drive.

#### Devices and Partitions
`/dev/sdX` and `/dev/hdX` are device files representing disks. The X is a letter for the drive (a, b, c, …). For example, `/dev/sda` is the first detected disk, similar to “the first hard drive” in Windows. This is a raw block device and contains data, not yet organized into files.

Each disk can be divided into partitions, like `/dev/sda1`, `/dev/sda2`, etc. These are sub-blocks of the disk that can each hold a separate filesystem. Think of them as separate logical drives on a single physical disk.

#### The Filesystem and mounting
The filesystem is the organized layout on a partition, such as ext4, btrfs, xfs, or NTFS. It defines how files and directories are stored, named, and accessed. Linux can use many filesystems, and Windows commonly uses NTFS or FAT32, which Linux can also read/write (with varying support) via drivers.

A mount point is a directory where a filesystem is attached. For example, you might mount a USB drive at `/mnt/usb` or `/media/flash`, so its files appear under that path. The act of mounting makes the device’s filesystem visible in your overall directory tree.

Mounting attaches a filesystem to a chosen folder; unmounting detaches it, making its contents inaccessible until mounted again. If a drive is still mounted, unplugging it could corrupt data, so unmount first.

#### `/dev/sdb` vs `/dev/sdb1`
`/dev/sdb` is the entire second detected disk. `/dev/sdb1` is the first partition on that disk. You typically mount a partition (like `/dev/sdb1`) rather than the whole disk (unless mounting a filesystem that spans the entire drive).​

### The Linux Tree analogy
Think of your Linux filesystem as a large tree. The root `/` is the trunk. Disks and partitions are branches exposed under `/dev`, and their contents are attached to mount points (folders) along the tree.

To access data on a disk, identify the right partition (like /dev/sdb1) and mount it to a folder (like `/mnt/backup`). To remove it safely, unmount first, then you can unplug the device.

### Analogy to Windows
Your C: drive is like a partition on a disk. In Linux, that partition would be a device like `/dev/sda1`. Before you can see it in Linux, it must be mounted to a directory, such as /`mnt/c` or `/media/WindowsC`, which is like opening that drive in Windows Explorer. Mount points are just folders where the OS shows the contents of the partition.

If you add another drive, it appears as `/dev/sdb` (the second disk). Its partitions, such as `/dev/sdb1`, won’t be visible until mounted to a folder, e.g., `/mnt/backup`.​

## Common workflows and examples

**Listing devices and partitions:**
- `lsblk `shows the block devices and their partitions in a tree, including where they are mounted. This helps map `/dev/sdb`, `/dev/sdb1`, and their mount points.
- `fdisk -l` or `parted -l` provides partitioning details like partition type and size.

**Mounting a partition:**
- `sudo mount /dev/sdb1 /mnt/mydrive`
- After mounting, files become accessible at `/mnt/mydrive`. If the directory doesn’t exist, create it with `sudo mkdir -p /mnt/mydrive` first.

**Unmounting:**
- `sudo umount /mnt/mydrive`
- If a partition is busy (open files, terminal in that directory), you may need to close apps or use lsof to identify what’s using it.