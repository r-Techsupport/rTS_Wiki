---
title: Clearing GPU Shader Cache
description: If you are experiencing graphical issues (e.g., flickering, crashes, or performance degradation), clearing the GPU shader cache can help resolve them.
sidebar:
    hidden: false
parent: General Guides
has_children: false
pagefind: true
last_modified_date: 2025-04-12
---

This guide provides step-by-step instructions on how to clear the shader cache for NVIDIA, AMD, and Intel graphics cards.

## Using Display Driver Uninstaller (DDU)
This method works on both AMD and NVIDIA graphics cards and is the easiest way to clear the shader cache.

Follow the instructions in our [DDU guide](/factoids/ddu#cleaning-shader-cache-only-does-not-wipe-display-drivers) to wipe the shader cache only. This will not remove your graphics drivers, but it will clear the shader cache.

## Manually Clearing Shader Cache

### For NVIDIA Users
1. **Disable Shader Cache:**
    - Right-click your desktop and open the **NVIDIA Control Panel**.
    - Go to **Manage 3D Settings** > **Global Settings**.
    - Find **Shader Cache Size** and set it to **Disabled**. Click **Apply** and restart your PC.
2. **Delete Shader Cache Folders:**
    - Press `Win + R`, type `%localappdata%`, and press Enter.
    - Navigate to `NVIDIA` > `GLCache` and delete all folders inside.
    - Navigate back to `AppData\LocalLow\NVIDIA\PerDriverVersion\DXCache` and delete everything there as well.
3. **Run Disk Cleanup:**
    - Press `Win + S`, type `Disk Cleanup`, and open it.
    - Select your system drive (usually C:), check **DirectX Shader Cache**, and click **OK** to clear it.
4. **Re-enable Shader Cache:**
    - Go back to the NVIDIA Control Panel and re-enable the shader cache by setting **Shader Cache Size** back to **Driver Default** (or **Unlimited**). Click **Apply** and restart your PC.

### For AMD Users
1. Open the **AMD Radeon Software** (`Alt + R`).
2. Click on the **Gaming** tab, then select **Graphics**.
3. Scroll to the bottom, expand the **Advanced** section, and click on **Reset Shader Cache**.
4. **Run Disk Cleanup:**
    - Press `Win + S`, type `Disk Cleanup`, and open it.
    - Select your system drive (usually C:), check **DirectX Shader Cache**, and click **OK** to clear it.

### For Intel Users
1. **Delete Shader Cache Folders:**
    - Press `Win + R`, type `%localappdata%low\Intel\ShaderCache`, and press Enter.
    - Delete all folders and files inside the `ShaderCache` directory.
2. **Run Disk Cleanup:**
    - Press `Win + S`, type `Disk Cleanup`, and open it.
    - Select your system drive (usually C:), check **DirectX Shader Cache**, and click **OK** to clear it.

## Other potential fixes
- **Ray Tracing**: If the game hangs on "Preparing Shaders", try disabling ray tracing in the game's graphics settings, as it can cause shader compilation issues.
- **Steam Shader Pre-Caching**: If you are using Steam, try clearing the shader pre-cache by going to **Settings** > **Shader Pre-Caching** and deleting the shader cache for the specific game if listed.