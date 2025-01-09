---
title: What is a bottleneck?
sidebar:
    hidden: false
has_children: false
parent: Learning
pagefind: true
last_modified_date: 2024-07-18
---




A PC consists of various components such as the CPU, GPU, RAM, storage, and networking devices. A bottleneck occurs when one of these components is slower than the others for a certain task and is holding back the performance of other components of the PC.

This is **normal** and isn't an issue *unless it is severe*. There will always be some degree of bottleneck, as achieving perfect balance across all components for all tasks is impossible.

Some popular benchmarking tools include 3DMark, PassMark, Geekbench, CineBench and HWINFO. These tools can measure the speed and performance of different components in your system and give you an overall score. You can use these scores to compare your system's performance with other similar systems and identify areas that might be bottlenecking. In order to test out all the components in your system correctly, here is another guide made by us that would help you run a stress test and log the data, generating a .CSV file which one of our helpers can read and analyze. You can find the guide to this topic [here](https://rtech.support/docs/guides/hwinfo.html)



## Should I Worry About Bottlenecks?

Generally **no**.

Bottlenecks are going to happen in any system. The goal should be to ensure that the most expensive components, typically the CPU and GPU, won't be severely bottlenecked by each other or the rest of the system. 

The most common bottlenecks people ask about are CPU or GPU bottlenecks in PC gaming. Both the CPU and the GPU will have a maximum number of frames they can generate in a certain game.

The GPU's performance limit depends on the *resolution* and the *graphics settings*. The CPU's performance is not affected by resolution or by most of the graphics settings.

CPU limits depend more on other factors such as game physics or the number of characters on screen, especially ones that move like other players, NPCs or vehicles.

## Should I use a bottleneck calculator?

For accurate information, *check third-party reviews and tests*. Websites that condense 'bottlenecking' into a single number are unreliable.

They estimate results and their goal is to display ads and offer affiliate links to upgrades to make themselves money. Good resources will provide data for a specific game at a specific resolution and settings, bad websites will just try to condense it all into 'graphically intensive tasks'.

## What is a GPU bottleneck in gaming?

A GPU bottleneck is when the GPU is *running at or near 100%*. This isn't always a problem, as GPUs are designed to handle high utilization without any issues.

Many people design their systems to have a GPU bottleneck since the GPU will be delivering as many frames per second (FPS) as it can. People who prefer high resolution and high graphics settings, typically in single-player games, often choose the best GPU they can get, paired with a CPU that is good enough to keep up and let their GPU run at 100%. 

For example, if a top-tier GPU can achieve 80 FPS in 4K Ultra settings in a game, but a midrange CPU can handle 120 FPS in Ultra settings in that game, *the GPU will be the bottleneck*. If the resolution were lowered to 1080p and the GPU could do 200 FPS, but the CPU could only do 120 FPS, *the CPU would now be the bottleneck in the system*.

## What is a CPU bottleneck in gaming?

A CPU bottleneck is when the CPU is not fast enough to keep up with how many FPS the GPU is capable of outputting, so the GPU utilization will be well below 100%.

In some types of games, like competitive shooters at lower settings or some simulation games, a CPU bottleneck is *much more likely* and many people design their systems the opposite way, with the best CPU they can get and a good enough GPU to keep up. 

## Can I have a system with neither kind of bottleneck?

There is a third type of bottleneck, an artificial one where the FPS is capped. Neither the CPU nor the GPU will be at their limit. This can provide benefits such as a smoother experience with less stuttering or reducing power usage.

An FPS cap can also be used to avoid screen tearing, a graphical glitch that can happen when the FPS is higher than the monitor's refresh rate.

## How to identify a CPU or GPU bottleneck and how to address it?

To identify a bottleneck, use performance monitoring software. AMD, Nvidia, and Intel offer tools like [AMD Adrenalin](https://www.amd.com/en/products/software/adrenalin.html), [Nvidia Geforce Experience](https://www.nvidia.com/en-us/geforce/geforce-experience/), and [Intel Arc Control Center](https://www.intel.com/content/www/us/en/products/docs/discrete-gpus/arc/software/arc-control.html), that can monitor performance.

To check for a bottleneck, play a game with the monitoring software overlay on the screen and watch the GPU utilization percentage. If it stays *near 100%* in various scenes, the GPU is the bottleneck. To increase FPS, *lower the graphical settings*, making it easier for the GPU to render each frame. Different settings can have varying impacts on performance and visual quality.

If it's *significantly below 100%*, the CPU might be the bottleneck. Try increasing graphical settings to improve visual quality and see if the FPS remains stable. Most settings only add more work for the GPU. However, settings like *ray-tracing and draw distance* increase the CPU's workload. *Experiment* to find the balance that looks and feels best.

If severe bottlenecks persist and adjusting settings doesn't help, consider hardware upgrades.

## Why am I not looking at CPU utilization?

Most games *do not fully utilize all CPU cores*, especially with newer CPUs having more cores and threads. Games often prioritize *individual core performance* over the number of cores.

For example: a 6-core AMD 5600X or an 8-core AMD 5800X performs similarly in most games to a 16-core AMD 5950X. The 5600X might show high utilization, while the 5950X shows low utilization because the game only uses a few cores.

Since the CPU is responsible for the entire system and not just rendering frames, having nearly 100% utilization typically causes *major performance issues* like stutters, lag, or frame drops.

## What about RAM?

RAM can significantly affect CPU performance.

If the system *does not have enough RAM*, the CPU will need to access data from the slower storage drive, causing substantial delays. While capacity is the primary concern, bandwidth (frequency and dual-channel configuration) and latency (timings) *can also affect CPU performance*.

Upgrading or [adding more RAM](/guides/how-to-know-if-you-need-more-ram) can alleviate these issues and improve overall system performance.
