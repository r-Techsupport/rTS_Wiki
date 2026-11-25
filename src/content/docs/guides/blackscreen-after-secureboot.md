---
title: Black screen issue that occurs after enabling SecureBoot
sidebar:
    hidden: false
pagefind: true
tableOfContents: true
last_modified_date: 2026-11-24
---
Enabling Secure Boot can sometimes leave the system with a black screen, including no motherboard logo or access to the BIOS setup screen.

This does not necessarily mean that the motherboard has stopped detecting the GPU or that the GPU is faulty. The problem may be related to how the motherboard initializes graphics in UEFI mode.

## Why this happens

> [!NOTE] Information
>
> The motherboard may also show a VGA debug LED, even though, as mentioned previously, this does not mean the GPU is faulty in all scenarios.

One possible cause is a compatibility issue between the motherboard's UEFI firmware and the graphics card's firmware. UEFI uses the Graphics Output Protocol (GOP) to provide graphics before Windows and its graphics driver take over. On a dedicated graphics card, the UEFI graphics driver is normally included in the card's firmware (VBIOS).

Depending on the motherboard and its existing configuration, enabling Secure Boot may also change related firmware settings or how UEFI components are validated. A graphics-firmware compatibility or initialization problem can therefore become apparent after Secure Boot is enabled.

Possible causes include:

- A compatibility bug between the motherboard firmware and the graphics card's UEFI graphics firmware.
- Missing or incompatible GOP support, particularly on older graphics cards.
- A display-initialization issue affecting a particular output, monitor, or connection, such as DisplayPort.
- Secure Boot rejecting a UEFI component that is not trusted by its current configuration.

> [!IMPORTANT] Important
>
> CSM is a legacy compatibility feature, not a solution for this guide. Keep the system configured for UEFI booting rather than enabling CSM to work around the problem.

## Recovering the display

The immediate goal is to regain access to the BIOS. If necessary, temporarily disable Secure Boot while investigating the cause. The intended final configuration is UEFI booting with Secure Boot enabled.

### Use integrated graphics or another graphics card

If changing the display connection does not help, try supported integrated graphics or temporarily install another graphics card with known UEFI support.

**For integrated graphics:**

1. Shut down the computer, switch off the power supply, and unplug the power cable.
2. If necessary, remove the dedicated graphics card so the system uses integrated graphics.
   - **Note:** On some motherboards, having a graphics card may result in the integrated graphics to be disabled, and simply removing it will not revert the changes. In this scenario, a [CMOS reset](../factoids/cmos) is required to restore integrated graphics functionality.
3. Connect the monitor to a motherboard display output.
4. Start the computer and enter the BIOS.

> [!NOTE] Information
>
> Motherboard display outputs only work if the system has supported integrated graphics.

Once you can access the BIOS:

1. Temporarily disable Secure Boot, leaving UEFI booting enabled and CSM disabled.
2. Save the changes and shut down.
3. If you removed or replaced the original graphics card, reinstall it and reconnect the monitor.
4. Check whether the display works again.

If the original graphics card works with Secure Boot disabled, investigate firmware compatibility before enabling it again. Once again, temporarily using another GPU does not establish that the original GPU is defective.

## Before enabling Secure Boot again

### Check for firmware fixes

Once the display is working:

- Check the motherboard manufacturer's support page for BIOS updates addressing graphics compatibility, Secure Boot, or startup issues.
- Check the graphics card manufacturer's support page for applicable UEFI, VBIOS, or display-firmware updates.
- Use only official updates intended for the exact hardware.

> [!NOTE] Information
>
> A normal Windows graphics-driver update does not update the graphics card's pre-boot firmware.

### Confirm the system works with Secure Boot disabled

Keep CSM disabled and confirm that:

1. The motherboard logo and BIOS setup are visible.
2. Windows starts successfully.
3. The original graphics card produces a display consistently.

If the BIOS display is still missing with Secure Boot disabled, address the UEFI graphics or display-initialization problem first.

If the problem occurs only when Secure Boot is enabled, follow the motherboard manufacturer's instructions for its standard Secure Boot configuration.

> [!WARNING] Warning
>
> Do not randomly delete Secure Boot keys or enroll custom keys.

> [!CAUTION] Caution
>
> Before changing firmware settings or updating firmware, make sure you have access to your BitLocker or Device Encryption recovery key, if enabled. Do not clear the TPM to troubleshoot this display issue.

After applying an appropriate fix, enable Secure Boot again and verify that both the BIOS display and Windows startup work normally.
