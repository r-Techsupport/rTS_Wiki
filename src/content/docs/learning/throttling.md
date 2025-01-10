---
title: Throttling
sidebar:
    hidden: false
has_children: false
parent: Learning
pagefind: true
last_modified_date: 2022-10-02
---



> This information was obtained from the [Suggest a Laptop discord](https://discord.com/invite/pes68JM)

CPU throttling occurs when the CPU is under enough load and unable to keep maximum turbo for the number of utilized cores (usually all cores). 

*Throttling happens in one of four ways:*

## Thermal Throttling

**Thermal throttling** occurs when the CPU heats up to a thermal threshold, set by either the OEM (Original Equipment Manufacturer), or the company behind the CPU's generation (for example, the Intel i5-12600 throttles at 100° C).

Once the CPU hits the threshold, it begins reducing the clock speed (also reducing power draw), with the goal of reducing thermal output. 

Thermals outside of manufacturer specification reduces CPU lifespan and is **NEVER** a good thing.  

## Power Limit Throttling

**Power limit throttling** happens when a system is not configured to provide enough power to the CPU to allow it clock up under load. 

Most CPUs default power limits are too low to stop throttling from happening under normal circumstances, so manufacturers that set or allow higher power limits to be set are relatively commonplace.

## VRM/Current Limit Throttling

**VRM throttling** is a blanket term for a wide range of problems, but most commonly, the core components on a motherboard are insufficiently specced, insufficiently cooled, or a combination of both or the CPU cannot draw enough current (measured in amps) to fully boost to a maximum clock speed. 

It is difficult to diagnose, and usually **unfixable** even if diagnosed without replacing the motherboard.

## Idle Throttling

This is the only throttle that happens **under ideal conditions.** This means the CPU underclocks when not stressed to reduce power draw and thermals. This is the only throttle reported to the operating system as throttling by the CPU. This typically isn't an issue.

