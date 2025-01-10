---
title: How to Cleanboot Windows
sidebar:
    hidden: false
parent: Factoids
has_children: false
pagefind: true
last_modified_date: 2022-10-31
---


## What is a Cleanboot?

A clean boot is a type of boot where only necessary processes will start up when Windows boots.

This step identifies if the issue is with Windows itself, or a third-party program.

## How to Cleanboot

1. Open the run window with Windows Key + R.

2. Type `msconfig` and press Enter.

3. Enable clean boot by following the GIF below.

![Cleanboot](../../../assets/factoids/cleanboot.gif)

> [!CAUTION] Caution
> WARNING: Please ensure that "Hide all Microsoft services" is ticked on as seen in the GIF. Accidentally disabling Microsoft services will prevent you from typing in your password or PIN during login, locking you out of your OS. 

In the event of a failed Cleanboot, where you may have disabled all Microsoft services, follow [this guide](/guides/fixing-cleanboot) to fix it.
