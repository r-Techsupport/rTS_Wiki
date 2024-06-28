---
layout: default
title: What is a bottleneck?
nav_exclude: false
has_children: false
parent: Learning
search_exclude: false
last_modified_date: 2024-06-18
---

# What is a bottleneck?
{: .no_toc}

Your PC has a series of components such as CPU, GPU, RAM, storage, and networking devices. A bottleneck is when one of these components is slower than the others for a certain task and is holding back the maximum performance of the rest of the PC.

This is **normal** and isn't an issue *unless it is severe*. There will always be some degree of bottleneck, it's impossible for everything to be perfectly balanced, let alone at all times in all different tasks.

{% include toc.md %}

## Is a bottleneck something I should worry about?

Generally **no**.

There will always be some sort of bottleneck in a system but a good rule is you want the most expensive components to be able to perform at their best.

For most systems, that would be the CPU and GPU being able to keep up with each other. It could also be something like using a Solid State Drive (SSD) as your C: drive in Windows instead of a Hard Disk Drive (HDD), having enough RAM for what you're using the computer for, or getting a WiFi or ethernet card that's at least capable of going as fast as the internet service you're paying for.

The most common bottlenecks people ask about are CPU or GPU bottlenecks for PC gaming.  A CPU and a GPU will both have a maximum number of FPS they can get in a game.

For the GPU this number will change a lot depending on the graphical settings and the resolution; 4K Ultra is a lot more work for the GPU than 1080p Low. A CPU does not care if you're playing at 1080p or 4K, but it can care about certain settings.

One *will always* bottleneck the other in games unless there is an *outside factor* like a frame limit (many people limit their FPS to save power or provide a smoother experience) or a game engine limit (common examples would be Apex Legends which won't go over 300 FPS or Grand Theft Auto V which will run into problems if you try to go over ~180 FPS).

## What is a GPU bottleneck in gaming?

A GPU bottleneck is when your GPU is *running at or near 100%*. GPUs are designed to be able to run at or near 100% utilization *without issues* and having a GPU bottleneck is how many people who prefer visually demanding single player games at high resolutions and high settings decide to set up their PC.

Many of these people want the best GPU they can afford and the cheapest CPU that is able to keep up with it in the games they like. You could have the best GPU in the world and if it can only do 80 FPS in 4K Ultra but your cheap CPU can do 120 FPS in Ultra settings, *you'll still have a GPU bottleneck in 4K Ultra*.

If you were playing in 1080p Ultra on that same PC it would now be a situation where you're getting that 120 FPS but only using less than half the power of your GPU. It's the same PC but a different bottleneck *depending on how you use it*.

## What is a CPU bottleneck in gaming?

A CPU bottleneck is when the CPU is not fast enough to keep up with how many frames per second (FPS) the GPU is capable of outputting, so the GPU utilization will be well below 100%.

*This isn't always a bad thing*.

Many people who play competitive multiplayer games or simulation games design their systems to have a CPU bottleneck. They want as many FPS as possible for a slight competitive advantage in response time and input latency for competitive, reaction-time based games (like Fortnite, Call of Duty or Rocket League) or fast turn times and smooth panning/zooming in simulation games (like Factorio or Cities Skylines) and want the best CPU they can get paired with a GPU that's good enough to keep up at lower graphical settings and/or resolution.

You can have the best CPU on the market and still have a CPU bottleneck using a fairly cheap GPU depending on what you're doing with the PC.

## How do I know if I have a CPU or GPU bottleneck and what can I do about it?

Seeing if you have a GPU bottleneck or CPU bottleneck is relatively easy with *performance monitoring software*.

AMD, Nvidia and Intel all have first party monitoring software you can use with their products; [AMD Adrenalin](https://www.amd.com/en/products/software/adrenalin.html), [Nvidia Geforce Experience](https://www.nvidia.com/en-us/geforce/geforce-experience/), and [Intel Arc Control Center](https://www.intel.com/content/www/us/en/products/docs/discrete-gpus/arc/software/arc-control.html); you should pick the one that matches your GPU.

To see if you have a GPU bottleneck you play a game with the monitoring software overlay on the screen and watch your GPU utilization percentage. If the GPU is staying at or near 100% utilization in various scenes, then you have a GPU bottleneck in that game. If you want higher FPS you can turn down the graphical settings, making it easier for your GPU to draw each frame and your FPS should go up. Different settings can have a more noticeable impact on performance or on visual quality than others.

To see if you have a CPU bottleneck you'd do the same process and look at your GPU utilization percentage, the farther away from 100% it's staying, the more headroom your current GPU has. You can try turning up some graphical settings to improve visual quality. With most settings, this will add more work for the GPU while adding little to no extra work for the CPU. Ray-tracing and Draw Distance are two settings that typically do increase the amount of work the CPU has to do. It's best to experiment a bit and find what looks and feels the best to you.

If you have a severe bottleneck and want more performance out of your PC but adjusting the balance of the settings isn't improving things enough for you then it would be time to consider hardware upgrades.

## Why am I not looking at CPU utilization?

Most games are *not designed to utilize 100% of a CPU*, especially with newer CPUs having higher core and thread counts. Many games care more about each core's performance than they do about how many cores you have.

For example: a 6-core AMD 5600X or an 8-core AMD 5800X will perform about as well in most games as a 16-core AMD 5950X. The 5600X might show fairly high utilization while the 5950X shows very low utilization because a specific game was only designed to really utilize 4 cores, or even only 1 core.

## What about RAM?

For the most part RAM is *tied* into CPU performance.

There are three aspects to ram performance: capacity (how many GB of ram you have), bandwidth (what frequency your ram is running at and whether it's in dual channel or not), and latency (what timings your RAM is running at, notably different from frequency).

The main one that can hold you back is *capacity*. If your computer runs out of free RAM space, your CPU will have to ask for information from the storage drive directly which takes significantly longer than having things stored in RAM and ready for the CPU to see. The best thing to do would be to upgrade or [add more RAM](/docs/guides/how-to-know-if-you-need-more-ram).

## What about bottleneck calculators?

Websites that try to take everything you just read and condense it into *one number* are ***misleading***.

If they do have a setting for a specific CPU with a specific GPU in a specific game at a specific resolution with specific graphical settings, they likely made that number up.

In the best case scenario they compared some real numbers to come up with an estimate. They definitely did not test everything they claimed to provide. These sites usually just want to show you some ads and/or get you to buy something using their affiliate link so they can get a cut of the profits.

There are places that do honest third party reviews and testing and post their results, bottleneck calculator websites are not one of those places.
