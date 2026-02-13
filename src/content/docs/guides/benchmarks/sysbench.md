---
title: Sysbench
sidebar:
    hidden: false
has_children: false
grand_parent: General Guides
parent: Benchmarks
pagefind: false
last_modified_date: 2026-02-04
---

Sysbench is a scriptable, multi-threaded benchmarking tool for evaluating Linux system performance, especially for databases but also CPU, memory, file I/O, and more. It's ideal for quick hardware tests without complex setups.

## Installing Sysbench

> [!NOTE] Information
>
> `sysbench` is one of the preinstalled packages for our [r/Techsupport Rescue Media](/live-sessions/linux-live-session). If you are using this live image, you may skip this section.

**Ubuntu/Debian**: 
```sh
sudo apt update && sudo apt install sysbench
```

**Fedora**:
```sh
sudo dnf install sysbench
```

**Arch Linux**:
```sh
sudo pacman -Syu sysbench
```

## Common tests to run
Use the following if you are not aware of how to use sysbench, or just want to run some common tests.

**CPU benchmark (30 minutes)**:
```sh
sysbench cpu --cpu-max-prime=20000 --threads=$(nproc) --time=1800 run
```
- Tests CPU performance by calculating prime numbers up to 20,000 using all available threads for 30 minutes.
- Events/sec shows the performance; higher is better.

**Memory benchmark (10 GB write test)**:
```sh
sysbench memory --memory-block-size=1K --memory-total-size=10G --memory-oper=write run
```
- Tests memory performance by writing 10 GB of data in 1 KB blocks.
- Transfer rate indicates memory write speed; higher is better.
- Note: If your system has less than 10 GB of RAM, adjust `--memory-total-size` accordingly.


**File I/O benchmark (10 GB random read/write test)**:
```sh
sysbench fileio --file-total-size=10G --file-test-mode=rndrw --file-num=4 prepare
sysbench fileio --file-total-size=10G --file-test-mode=rndrw --file-io-mode=async --time=60 run
sysbench fileio --file-total-size=10G cleanup
```
- Prepares a 10 GB test file, performs random read/write I/O operations for 60 seconds using 4 files, and then cleans up.
- IOPS (Input/Output Operations Per Second) indicates disk performance; higher is better.

> [!CAUTION] WARNING
>
> Always monitor system temperatures and stability during these tests to avoid overheating or hardware stress.

## Usage guidelines
This is a guide for making your own custom tests. Sysbench includes these built-in tests, each focusing on a system component.

* `cpu`: Measures CPU performance via prime number calculations.​
* `memory`: Tests memory speed for read/write operations.​
* `fileio`: Benchmarks file I/O throughput and latency.​
* `threads`: Evaluates threads subsystem efficiency.​
* `mutex`: Assesses mutex lock contention.

Lua scripts like `oltp_read_write` add database benchmarks (requires MySQL/PostgreSQL). For more information, please refer to [the official Sysbench documentation](https://github.com/akopytov/sysbench/blob/master/README.md#general-command-line-options).

### Creating a test
Run sysbench `[test]` help for test-specific options. Common commands: `prepare` (setup), `run` (benchmark), `cleanup` (teardown). Use `--threads=N` (e.g., CPU cores), `--time=60` for duration (in seconds).​

An example structure would be:

```sh
sysbench [test] prepare
sysbench [test] --threads=4 --time=60 run
sysbench [test] cleanup
```

Key options: `--time=N` (seconds), `--threads=N`, `--report-interval=10` (periodic stats).