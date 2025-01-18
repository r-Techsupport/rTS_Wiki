---
title: Fixing a blackscreen issue that occurs after enabling Secureboot
sidebar:
    hidden: false
pagefind: true
tableOfContents: true
---
When enabling Secure Boot there is a chance that the motherboard will stop recognizing the current GPU and just give a black screen. We have no idea why it happens. The board will sometimes show a debug LED for VGA, sometimes not.

The only solution we have found is removing the GPU and using the iGPU if the system has integrated graphics, or replacing the GPU. Once replaced, you can disable Secure Boot, put the old GPU back and try enabling it again. We've seen one case where the user had it happen three times in a row, but it worked on the fourth try.

Resetting the CMOS hasn't had any effect. Uncertain about Flashback (Flash BIOS button), worth a shot if you don't have an iGPU or a second GPU at hand.
