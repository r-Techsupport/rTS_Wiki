---
title: EOL Operating Systems
sidebar:
    hidden: false
has_children: false
parent: Learning
pagefind: true
last_modified_date: 2024-07-09
redirect_from: /books/how-to-and-guides/page/eol-software
tableOfContents: false
---
Operating systems and software have a maximum date of support (End of Life/EOL), after which it will no longer get any upgrades. This means that new vulnerabilities discovered in the OS won't get patched, opening the door for malware. This page is written for Windows users, but a lot of the information may apply to users of other operating systems.

***[HAVING A VULNERABLE SYSTEM IS NOT JUST YOUR ISSUE!](/safety-security/security-rant)***

## Upgrading to a supported OS
This is the only option that guarantees you can keep using all of the latest software, as a lot of it also cuts support for older OS releases.

There is still some choices you can make of which version and edition of Windows you want. Windows 10 and 11 have various editions, the most common being Home and Pro. Home is the way to go for most users, as Pro just adds a few features that you probably wouldn't notice or ever use. A list of all differences can be found [here](https://en.wikipedia.org/wiki/Windows_10_editions#Comparison_chart).

If you are in school, you should see if you are eligible for a license for Windows Education. If not, see if you have a way to obtain a Windows 10 Home license. If not, you can very likely upgrade your Windows 7 or 8.1 installation for free. If none of those options work for you, and you need to pay for a new license, the Home version is preferable.

Windows used to perform two annual updates before 2022, named accordingly `2xHx`, with `2x` being replaced with current year and H standing for first or second half For example 20H2 (Second half of 2020) and 21H1 (First half of 2021), but since 2022, `2xh1` (first half-year) will not be released anymore, with only `2xH2` (second half-year) versions coming out instead. It is always recommended to be on the latest version as it has the most security patches, and therefore is the safest. This is a list of the most popular Windows versions that are still **supported** at the time of writing this article.

|OS|Name|EOL Date|
|-|-|-|
|Win8.1|~~8.1*~~|2023-1-10|
|Win10|~~2004~~|2021-12-14|
|Win10|~~20H2~~|2022-05-10|
|Win10|~~21H1~~|2022-12-13|
|Win10|~~21H2~~|2023-06-13|
|Win10|22H2|2025-10-14|
|Win11|~~21H2~~|2023-10-10|
|Win11|22H2|2024-10-08|
|Win11|23H2|2025-11-11|

\* Excluding Home edition

For versions not listed here, check out the lifecycle information from Microsoft: [Windows 8.1](https://docs.microsoft.com/en-us/lifecycle/products/windows-81), [Windows 10](https://docs.microsoft.com/en-us/lifecycle/products/windows-10-home-and-pro), [Windows 11](https://docs.microsoft.com/en-us/lifecycle/products/windows-11-home-and-pro-version-21h2)

If you need help installing a newer version of Windows, check out [our guide](/windows).
## Switch to a Linux distro

These days, Linux distros are truly a great alternative to Windows. Linux is very stable and secure, and does everything an average user wants, whether that be Facebook or writing essays. If you are a gamer, Linux has thousands of native games and many more are available via Steam's [ProtonDB](https://www.protondb.com/). Proton's support is getting expanded daily, Battleye and EAC support has been released  recently, meaning you will soon be able to play almost all of the current AAA games natively. However, you can play the majority of games on Steam on Linux with no hassle by just switching on the Proton compatibility layer.

If you play games with heavy DRM, or play VR games, or frequently use Adobe products, Linux may not be a good option for you. But even if you do play those games or use those products, you also have the option of dual-booting, so that you can have both Windows and Linux installed at the same time. This post doesn't go too much into detail on Linux, since the below links are already great resources.

Most importantly, Linux is 100% free, so you can give it a try without any risks, and switch back to Windows whenever you wish.

For more information about switching to Linux, see [this post](https://www.reddit.com/r/linux_gaming/comments/edaq0s/guide_migrating_to_linux_in_2020/) on the Linux gaming subreddit

When you are ready to install Linux, you can check out [our guide](/installations/install-linux)

If you'd like a more concrete guide, [this PDF](https://github.com/aaronfranke/Linux-tools/raw/master/ubuntu-only/qsg.pdf) focuses specifically on setting up Ubuntu for gaming, including setting up drivers, Steam, and more, with a focus on dual-booting
## Switch to a Mac

This is the only option that requires you to buy new hardware, since macOS can only run on Apple hardware as per their TOS. Macs are great systems overall; they are very secure and are a favorite option of many developers and businesses.

The biggest downside of getting a Mac are that they are expensive. If you are a gamer, vastly fewer games support macOS. These days, Mac is a worse choice for gaming than Linux is.

## Disconnect your computer from the Internet

This is a fairly simple option that doesn't need too much explanation. If you unplug your computer from the Internet, you can't get viruses from the Internet. As long as you don't pass around infected USB flash drives, then you are pretty much immune from viruses if you aren't connected to the Internet. Of course, for many people, this makes your computer unusable.

## Stop using traditional computers entirely

If you don't like newer versions of Windows, or Linux distros, or Mac, you need to be on the Internet, and you don't want to be insecure, then the only option left is to stop using traditional computers entirely. For a lot of people, this is an unacceptable option, but many people can get away with living in the modern world only using phones and tablets, so it's worth mentioning.

Also, Chromebooks are great if you don't need to do anything on your computer except for browsing the web.
How to stay secure on any system

## Other security tips
No matter what option you choose, there are plenty of ways to stay secure online.

* Blocking ads helps a ton due to malvertizing. The browser extension [uBlock Origin](https://ublockorigin.com/) (Chrome, Firefox, Opera) does a great job at blocking ads. Additionally, it's a great idea to get a hosts-file adblocker or a Pi-hole to block ads before they even get to your system in the first place.

<!--
* The browser extension HTTPS Everywhere (Chrome, Firefox, Opera) will automatically redirect you to the secure version of a website, if there is one. Firefox offers a native tool that does the same, you can check out the guide on how to enable it [here](https://blog.mozilla.org/security/2020/11/17/firefox-83-introduces-https-only-mode/). This is a simple and easy way to improve your security while browsing the web. 
-->

## Conclusion

You should do something to stay secure. Whether you switch to a newer version of Windows, switch to a Linux distro such as Ubuntu, switch to a Mac, unplug your computer from the Internet, or throw it away, both you and [the people around you](/safety-security/security-rant) will be more secure. And once you've decided what system you're going to use, there are many ways to make it more secure.
