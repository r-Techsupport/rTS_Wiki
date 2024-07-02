---
layout: default
title: What is a bottleneck?
nav_exclude: false
has_children: false
parent: Learning
search_exclude: false
last_modified_date: 2024-07-01
---

# What is a bottleneck?
{: .no_toc}

Every PC consists of various components such as the CPU, GPU, RAM, storage, and networking devices. A bottleneck is when one of these components is slower than the others for a certain task and is holding back the performance of other components of the PC.

This is **normal** and isn't an issue *unless it is severe*. There will always be some degree of bottleneck, as achieving perfect balance across all components for all tasks is impossible.

{% include toc.md %}

## Should I Worry About Bottlenecks?

Generally **no**.

Bottlenecks are going to happen in any system. The goal should be to ensure that the most expensive components, typically the CPU and GPU, won't be severely bottlenecked by each other or the rest of the system. 

Depending on the tasks you need to perform on your PC, you may need to focus on other aspects, such as using a fast Solid State Drive (SSD) as your primary drive instead of a slower Hard Disk Drive (HDD), ensuring you have enough RAM for your needs, or obtaining a Wi-Fi or Ethernet card (network interface card) capable of matching the speed of your internet service plan.

The most common bottlenecks people ask about are CPU or GPU bottlenecks in PC gaming. Both the CPU and the GPU will have a maximum number of frames they can generate in a certain game.

The GPU’s performance limit depends on the *resolution* and the *graphics settings*. The CPU's performance is not affected by resolution or by most of the graphics settings.

The limits of the CPU depend more on other factors such as game physics or the number characters on screen, especially ones that move like other players, NPCs or vehicles.

# Should I use a bottleneck calculator?

For accurate information, *you want third-party reviews and testing*. Websites that condense 'bottlenecking' into a single number are unreliable.

They estimate results and their goal is to display ads and offer affiliate links to upgrades to make themselves money. Good resources will provide data for a specific game at a specific resolution and settings, bad websites will just try to condense it all into 'graphically intensive tasks'.

## What is a GPU bottleneck in gaming?

A GPU bottleneck is when the GPU is *running at or near 100%*. This isn't always a problem, as GPUs are designed to handle high utilization without any issues.

Many gamers prefer a GPU bottleneck or setting an FPS (Frames Per Second) cap since the GPU will be delivering as many FPS as it can, or as many FPS as are wanted, while limiting stutters and screen tearing. Gamers who prefer high resolution and high graphics settings, typically in single-player games, often choose the best GPU they can afford, paired with a CPU that is good enough to let their GPU run at 100%.

For example, if a top-tier GPU can achieve 80 FPS in 4K Ultra settings in a game, but a midrange CPU can handle 120 FPS in Ultra settings in that game, *the GPU will be the bottleneck*. If the resolution were lowered to 1080p and the GPU could do 250 FPS, but the CPU could only do 120 FPS, *the CPU would now be the bottleneck*.

## What is a CPU bottleneck in gaming?

A CPU bottleneck is when the CPU is not fast enough to keep up with how many FPS the GPU is capable of outputting, so the GPU utilization will be well below 100%.

In some scenarios, *a CPU bottleneck is inevitable*, particularly in competitive multiplayer or simulation games. In these cases, gamers often opt for the best CPU they can afford, paired with a GPU that can still achieve sufficient FPS for the desired tasks. This approach helps ensure smooth gameplay and a competitive edge through higher frame rates.

They aim for as many FPS as possible to gain a slight competitive advantage in response time and input latency for reaction-time-based games like Fortnite, Call of Duty, or Rocket League, or for fast turn times and smooth panning/zooming in simulation games like Factorio or Cities Skylines. While the best CPU can handle demanding tasks, pairing it with a lower-end GPU can still result in a CPU bottleneck, depending on the specific use case.

## How do I know if I have a CPU or GPU bottleneck, and what can I do about it?

To identify a bottleneck, use performance monitoring software. AMD, Nvidia, and Intel offer tools like [AMD Adrenalin](https://www.amd.com/en/products/software/adrenalin.html), [Nvidia Geforce Experience](https://www.nvidia.com/en-us/geforce/geforce-experience/), and [Intel Arc Control Center](https://www.intel.com/content/www/us/en/products/docs/discrete-gpus/arc/software/arc-control.html), respectively.

To check for a GPU bottleneck, play a game with the monitoring software overlay on the screen and watch your GPU utilization percentage. If it stays *near 100%* in various scenes, the GPU is the bottleneck. To increase FPS, *lower the graphical settings*, making it easier for your GPU to render each frame. Different settings can have varying impacts on performance and visual quality.

To check for a CPU bottleneck, observe your GPU utilization during gameplay. If it's *significantly below 100%*, the CPU might be the bottleneck. You can try increasing graphical settings to improve visual quality without overloading the CPU, as most settings add more work for the GPU. However, settings like *ray-tracing and draw distance* typically increase CPU workload. *Experiment* to find the best balance that looks and feels right to you.

If severe bottlenecks persist and adjusting settings doesn't help, consider hardware upgrades.

## Why am I not looking at CPU utilization?

Most games are *not designed to utilize 100% of a CPU*, especially with newer CPUs having higher core and thread counts. Many games care more about each core's performance than they do about how many cores you have.

For example: a 6-core AMD 5600X or an 8-core AMD 5800X performs similarly in most games to a 16-core AMD 5950X. The 5600X might show high utilization while the 5950X shows low utilization because the game only uses a few cores.

Since the CPU is responsible for the entire system and not just rendering frames, having nearly 100% utilization typically causes *major performance issues* like stutters, lag, or frame drops.

## What about RAM?

RAM performance, particularly its *capacity*, can significantly affect CPU performance if it's insufficient.

If you don't have enough RAM, the CPU will need to access data from the slower storage drive, causing substantial delays. While capacity is the primary concern, bandwidth (frequency and dual-channel configuration) and latency (timings) are secondary factors that can also influence performance to a lesser extent.

Upgrading or [adding more RAM](/docs/guides/how-to-know-if-you-need-more-ram) can alleviate these issues and improve overall system performance.