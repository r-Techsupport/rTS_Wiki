---
title: Stress-ng
sidebar:
    hidden: false
has_children: false
grand_parent: General Guides
parent: Memory Testing
pagefind: false
last_modified_date: 2026-02-03
---

Stress-ng is a system stress tool that hammers CPU, memory, I/O, kernel interfaces, and more so you can shake out hardware faults, thermal issues, and kernel bugs. This is not meant to function as a precise benchmark. 

> [!IMPORTANT] Important
> 
> Stresss-ng is best used with monitoring tools to observe system behavior under stress. It is highly recommended to utilize `top`, `htop`, temps (`sensors`), and logs (`dmesg -w`) while running stress-ng. If you prefer a GUI, you may utilize hardinfo or gnome-system-monitor.

## Installing stress-ng

> [!NOTE] Information
>
> `stress-ng` is one of the preinstalled packages for our [r/Techsupport Rescue Media](/live-sessions/linux-live-session). If you are using this live image, you may skip this section.

**Ubuntu/Debian**: 
```sh
sudo apt update && sudo apt install stress-ng
```

**Fedora**:
```sh
sudo dnf upgrade && sudo dnf install stress-ng

```

**Arch Linux**:
```sh
sudo pacman -Syu stress-ng
```

## Common tests to run
Use the following if you are not aware of how to use stress-ng, or just want to run some common tests.

**Full CPU and memory stress test (1 hour)**:
```sh
sudo stress-ng --cpu 0 --vm 1 --vm-bytes 60% --timeout 1h --metrics-brief
```
- Stresses all CPU cores and allocates 60% of RAM for memory stress.

**Network stress test (10 min)**:
```sh
sudo stress-ng --sock 4 --udp 4 --timeout 10m --metrics-brief
```
- Stresses TCP and UDP sockets.

**Scheduler and context switching (10 min)**:
```sh
sudo stress-ng --class os --seq 1 --timeout 10m --metrics-brief
```
- Stresses process scheduling, voluntary yields, and CPU affinity.

**Inter-process communication (IPC) (10 min)**:
```sh
sudo stress-ng --pipe 8 --msg 4 --sem 4 --timeout 10m --metrics-brief
```
- Stresses pipes, message queues, and semaphores.

**Cache stress test (10 min)**:
```sh
sudo stress-ng --cache 0 --l1cache 0 --llc-cache 0 --timeout 10m --metrics-brief
```
- Stresses all CPU cache levels (L1, L2, LLC).

**Filesystem I/O stress test (10 min)**:
```sh
cd /tmp  # or a dir with >50GB free space
sudo stress-ng --class filesystem --seq 1 --timeout 10m --metrics-brief
```
- Stresses filesystem I/O using sequential read/write operations.

**Comprehensive system stress test (30 min)**:
```sh
sudo stress-ng --class all --seq 1 --timeout 30m --metrics-brief
```
- Stresses a wide range of system components including CPU, memory, I/O, and kernel interfaces. Comprehensive but may be intensive. Monitor system temperature very closely.

## Usage guidelines
This is a guide for making your own custom tests. When running stress-ng, you can specify the type of stress test, the number of workers, and the duration. Here are some common examples:

* Run a single CPU stressor on all cores for 60s:
    ```
    stress-ng --cpu 0 --timeout 60s --metrics-brief
    ```

* RAM/virtual memory stress, all cores, 2 minutes:
    ```
    stress-ng --vm 0 --vm-bytes 80% --timeout 2m --metrics-brief
    ```

* Filesystem I/O stress (temp files in current directory) for 2 minutes:
    ```
    stress-ng --hdd 4 --timeout 2m --metrics-brief
    ```

* Run several types together:
    ```
    stress-ng --cpu 4 --vm 2 --io 2 --timeout 2m --metrics-brief
    ```

The most common flags you may use while running stress-ng are:
- `--timeout 60s` or `-t 60s`: how long to run that test.
- `--metrics-brief`: show summary stats at the end.
- `--verify`: add basic correctness checks where supported (slower but safer).
- `--class cpu --seq 1 -t 30s`: run all CPU-related stressors one after another.

An example of a "full system" stress test:
```sh
stress-ng --class cpu --class vm --class io --seq 1 --timeout 30s --metrics-brief
```
This walks through CPU, memory, and I/O stressors sequentially, 30 seconds each.

### More details on stressors
Stress-ng calls each test a “stressor”. There are 300+; you won’t memorize them, so you discover and filter them:

- List all stressors:
    ```
    stress-ng --stressors
    ```
- List stressors that support --verify:
    ```
    stress-ng --verifiable
    ```

- Show stressors by class, e.g. all CPU-related:
    ```
    stress-ng --class cpu\?
    ```

- or all memory-related:
    ```
    stress-ng --class vm\?
    ```

Each stressor has its own --name and optional --name-ops etc. A few common families:

- CPU / compute: `--cpu`, `--matrix`, `--bitops`, `--crc32`, `--zlib`, vector/math variants.​
- Memory / VM: `--vm`, `--bigheap`, `--brk`, `--mmap`, `--stack`, cache-related tests.​
- Filesystem / I/O: `--hdd`, `--aio`, `--aiol`, `--dir`, `--dentry`, `--lockf`, many fs-specific tests.​
- Scheduler / OS: `--switch`, `--yield`, `--futex`, `--timer`, `--signal`, `--pipe`, `--affinity`.​
- Network: `--sock`, `--udp`, `--tcp`, `--dccp`, etc.​
- “Pathological” (can hang a box): enabled only if you add `--pathological`, e.g. `--bind-mount`, `--smi`, `--cpu-online`.

To see the extra functions and options for a specific stressor, run:
```sh
man stress-ng
# /vm-  (search for a specific stressor like vm, hdd, matrix, etc.)
```
The man page sections list every stressor (`--access`, `--acl`, `--affinity`, `--aio`, `--vm`, `--bigheap`, …) with a short explanation and available -ops and tuning options.

For a full list of stressors and options, refer to the [official stress-ng documentation](https://manpages.debian.org/testing/stress-ng/stress-ng.1.en.html) or run `stress-ng --help` in the terminal.