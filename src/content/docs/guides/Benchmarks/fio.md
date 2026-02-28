---
title: Fio
description: Fio is a flexible I/O benchmark tool that generates synthetic disk workloads (sequential, random, mixed) so you can measure throughput, latency, and IOPS of drives, filesystems, or block devices on Linux and other OSes
sidebar:
    hidden: false
has_children: false
grand_parent: General Guides
parent: Benchmarks
pagefind: false
last_modified_date: 2026-02-09
---

> [!NOTE] Information
>
> `fio` is one of the preinstalled packages for our [r/Techsupport Rescue Media](/live-sessions/linux-live-session). If you are using this live image, you can skip the installation section.

> [!TIP] How to install fio
>
> Refer below for installation instructions if you are not using our live image or want to install it on your own system.
>
> <details markdown='1'>
>   <summary>Installing fio</summary>
>
> Refer below for installation instructions if you are not using our live image or want to install it on your own system.
>
> **Debian / Ubuntu / Linux Mint**:
> ```sh
> sudo apt update && sudo apt install fio
> ```
> 
> **Fedora / RHEL / CentOS / AlmaLinux**:
> ```sh
> sudo dnf install fio
> 
> ```
> 
> **Arch / Manjaro / CachyOS**:
> ```sh
> sudo pacman -Syu fio
> ```
> </details>


## Common tests to run

> [!WARNING] Warning
>
> Running fio on a mounted filesystem or active block device **can cause data loss**. Always ensure you are targeting the correct device and have backups before running tests!

**Mixed read/write test**: Real-world read/write-heavy apps.
```sh
sudo fio --name=mixed --filename=/dev/nvme0n1 --rw=randrw --bs=4k --rwmixread=70 --iodepth=32 --ioengine=libaio --direct=1 --size=10G --time_based --runtime=60 --group_reporting
```

**Random read test**: IOPS for databases.
```sh
sudo fio --name=randread --filename=/dev/nvme0n1 --rw=randread --bs=4k --iodepth=128 --ioengine=libaio --direct=1 --size=10G --time_based --runtime=60 --numjobs=4 --group_reporting
```

**Random write test**: OLTP workloads.
```sh
sudo fio --name=randwrite --filename=/dev/nvme0n1 --rw=randwrite --bs=4k --iodepth=128 --ioengine=libaio --direct=1 --size=10G --time_based --runtime=60 --numjobs=4 --group_reporting
```

**Sequential read test**: Max throughput for large files/databases.
```sh
sudo fio --name=seqread --filename=/dev/nvme0n1 --rw=read --bs=1M --iodepth=32 --ioengine=libaio --direct=1 --size=10G --time_based --runtime=60 --group_reporting
```

**Sequential write test**: Write speed for logs/backups.
```sh
sudo fio --name=seqwrite --filename=/dev/nvme0n1 --rw=write --bs=1M --iodepth=32 --ioengine=libaio --direct=1 --size=10G --time_based --runtime=60 --group_reporting
```

> [!TIP] Tip
>
> Adjust `--numjobs` for multi-queue testing.

## Usage guidelines
This is a guide for making your own custom tests. FIO runs via command line or job files (INI-style text files with `[global]` and `[jobname]` sections). The general idea usually goes:
- Target a file (`filename=testfile`) or block device (`filename=/dev/sdX` – use lsblk to identify).
- Define workload: `--rw=read` (sequential read), `--bs=4k` (block size), `--size=1G` (test size), `--runtime=60` (seconds).
- Use `--direct=1` for O_DIRECT (bypasses cache), `--ioengine=libaio` for async I/O, `--iodepth=32` (queue depth).

An example would be: 
```sh
sudo fio --name=test --filename=/tmp/testfile --rw=read --bs=4k --size=1G --numjobs=1 --time_based --runtime=30s --group_reporting
```

Output shows bandwidth (BW), IOPS, latency. Use `--output-format=json` for parsing.

### Creating custom tests
If you have a dedicated set of tests you want to create for reuse later, you will create a `.fio` job file (e.g., `nano test.fio`), then run `fio test.fio`. The general ideas on the key aspects to focus on are:
- **I/O Pattern (`rw`)**: read, write, randread, randwrite, randrw, trim, readwrite.
- **Block Size (`bs`)**: 4k, 64k, 1M; ranges like 4k-64k.
- **Engines (`ioengine`)**: sync (default), libaio (async POSIX), posixaio, io_uring (modern Linux), mmap, netsplice.
- **Other**: `numjobs` (threads), `iodepth` (queue), `size` (total data), `runtime`/`time_based`, `loops` (repeats), `verify=md5` (check data).
- **Advanced**: `rwmixread=80` (read % in mixed), `ramp_time=10s` (warmup), `stonewall` (pause between jobs).

An example job file would look like so:
```ini
[global]
ioengine=libaio
direct=1
time_based
runtime=60
group_reporting

[randread]
rw=randread
bs=4k
iodepth=32
size=10G
numjobs=4
```

You will then run this test file by typing `sudo fio test.fio`. For more information on how to create a test file, please visit the official [FIO documentation hub](https://fio.readthedocs.io/en/latest/fio_doc.html).
