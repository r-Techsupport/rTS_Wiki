---
layout: default
title: Hybrid Graphics and Optimus
nav_exclude: false
has_children: false
parent: Learning
search_exclude: false
last_modified_date: 2022-09-02
---

# Hybrid Graphics on Laptops
A laptop with hybrid graphics means that the laptop has 2 GPUs: one that is integrated into the CPU (a.k.a iGPU) and a more powerful dedicated GPU (a.k.a dGPU). On hybrid graphics, your laptop's screen will run on your iGPU. A majority of your programs will also run on your iGPU while more graphically demanding applications, like games and video editors, will use the dGPU and take advantage of its graphical power. 

## Nvidia Optimus/AMD DSG and MUX Switch
Nvidia Optimus, AMD Dynamic Switchable Graphics (DSG) and multiplexer (MUX) switches are all terms that refer to the technology used to switch between the iGPU and dGPU. "Optimus" refers to the GPU passthrough with Intel/AMD iGPUs and Nvidia dGPUs while AMD's "DSG" refers to the GPU passthrough with both AMD iGPUs and dGPUs. When a program uses the dGPU on a system with Optimus/DSG, the dGPU gets passed through the iGPU before the program gets shown on the screen. This is because the laptop's screen is connected to the iGPU. However, in doing so, it incurs a performance loss. This process can be bypassed with a MUX switch or by connecting an external monitor. 

A MUX switch is a hardware switch that connects the screen to the iGPU or directly to the dGPU. This can be accessed through the laptop's BIOS or through software provided by the laptop's manufactuer. Sadly, these MUX switches aren't available on every laptop with hybrid graphics so you'll have to look up whether or not your laptop has one. Ixf your laptop doesn't have one, you'll have to connect a external monitor to the laptop to bypass Optimus/DSG. 