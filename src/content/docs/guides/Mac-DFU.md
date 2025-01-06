---
layout: default
title: Mac DFU
has_children: false
parent: General Guides
search_exclude: false
last_modified_date: 2025-01-03
---

> [!CAUTION] Caution
> This process will erase your Mac's drive. Ensure you have an adequate backup of all important data before proceeding.

## Prerequisites

- A second Mac running macOS 10.15.6 or newer
- Active Apple ID and App Store access
- Stable broadband internet connection
- 32GB free storage space for download and extraction
- Both computers should be fully charged
- Compatible connection:
    - USB-C to USB-C cable (Apple charging cable works fine)
    - USB-C to USB-A cable
    - Official Apple Thunderbolt 3 to Thunderbolt 2 adapter with cable

## Download Apple Configurator

1. Download [Apple Configurator](https://apps.apple.com/app/id1037126344) from the App Store
2. Run Apple Configurator

{: .warning .warning-icon }
> While Finder can sometimes be used for restoration, Apple Configurator is more reliable and recommended.

## Apple Silicon MacBook Instructions

1. Ensure the MacBook is powered off

2. Connect cable:
    - Left-most USB-C port on target Mac (closest to screen)
    - Any available port on host Mac

        <img src="https://cdsassets.apple.com/live/7WUAS350/images/mac-os/sonoma/apple-silicon-macbook-pro-left-side-ports-leftmost-usb-c-port-location-illustration.png" width="500" />

3. Enter DFU mode:
    - Press and hold: Power + Right Shift + Left Control + Left Option
    - Hold all keys for 10 seconds
    - Release all except Power button
    - Continue holding Power for 8 more seconds (18 total)
    - Look for DFU icon in Apple Configurator

        <img src="https://cdsassets.apple.com/live/7WUAS350/images/mac-os/sonoma/macbook-pro-keyboard-dfu-mode-startup-keyboard-combination-diagram.png" width="500" />

## Apple Silicon Desktop Instructions

1. Disconnect power from the Mac

2. Connect cable:
    - Mac Mini: Port closest to ethernet port
    - iMac: Port closest to power connector 

3. Enter DFU mode:
    - Press and hold power button
    - While holding button, connect power cable
    - Continue holding for 3-5 seconds
    - Look for DFU icon in Apple Configurator

## Intel T2 MacBook Instructions 

1. Ensure MacBook is powered off

2. Connect cable:
    - Right-most USB-C port on target Mac (front port on left side)
    - Any available port on host Mac

        <img src="https://cdsassets.apple.com/live/7WUAS350/images/mac-os/sonoma/t2-macbook-pro-left-side-ports-rightmost-usb-c-port-location-illustration.png" width="500" />

3. Enter DFU mode:
    - Press Power button for 1 second
    - While still holding Power, immediately add:
        - Right Shift
        - Left Control 
        - Left Option
    - Hold all keys for 8 seconds total
    - Look for DFU icon in Apple Configurator

        <img src="https://cdsassets.apple.com/live/7WUAS350/images/mac-os/sonoma/macbook-pro-keyboard-dfu-mode-startup-keyboard-combination-diagram.png" width="500" />

## Intel T2 Desktop Instructions 

1. Disconnect power from the Mac

2. Connect cable:
    - Mac Mini: Port next to HDMI port
    - iMac/iMac Pro: Port next to ethernet port
    - Mac Pro: Port farthest from power button

3. Enter DFU mode:
    - Press and hold power button
    - While holding button, connect power cable
    - Continue holding for 3-5 seconds
    - Look for DFU icon in Apple Configurator

## Alternative Method: DFU Blaster

If keyboard commands aren't working:

1. Visit [https://twocanoes.com/products/mac/dfu-blaster/](https://twocanoes.com/products/mac/dfu-blaster/)
2. Click "Download Free Trial"
3. Install and run the app
4. Follow on-screen instructions to enter DFU mode

> [!CAUTION] Caution
> DFU Blaster is a third-party tool. Review its licensing terms before use.

## Restore Process

> [!CAUTION] Caution
> Unplugging the cable during restoration will result in data loss and may leave your computer in an unrecoverable state.

1. Once in DFU mode, open Apple Configurator

2. For Restore:
    - Right-click the DFU icon
    - Select Advanced > Restore
    - Confirm the warning
    - Wait for download and installation (15-45 minutes)

3. Mac will automatically restart when complete

> [!TIP] Success
> When restoration completes successfully, your Mac should turn on and display the Hello screen.

> [!NOTE] Information
> If having trouble entering DFU mode:
> - Try multiple attempts with precise timing
> - Ensure using correct ports
> - Verify cable supports data transfer
> - If using adapters, try different connection methods
> - Try the alternative DFU Blaster method above

## Common Issues

If restore fails, check:
- Apple Configurator is on latest version
- Host Mac has at least 32GB free storage
- Host Mac has stable internet connection
- Using correct USB-C ports
- Cable supports both power and data
- Host and target Mac are on same OS version (Intel T2 Macs only)
- Any adapters are properly connected and supported