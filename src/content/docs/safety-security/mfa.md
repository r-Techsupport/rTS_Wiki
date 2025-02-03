---
title: MFA
sidebar:
    hidden: false
has_children: false
parent: Safety & Security
pagefind: true
last_modified_date: 2025-01-29
redirect_from: /books/safety-and-security/page/mfa
---





Multi-Factor Authentication (MFA), also called Two-Factor Authentication (2FA), is using 2 or more forms of authentication to gain access to an account or resource. In most cases the 1st form of authentication is your password, we then add a second in the form of a one time code.

The method to obtain this code can vary, in most cases the code is coming from a text message (SMS), an application on your phone or computer, or a hardware token.

As the world moves to be more secure more and more responsibility is being put on the user. When setting up MFA most sites will give you 10 backup codes. **These must be retained**. In a perfect world you **will** lose all access to your account should your MFA and backup tokens be lost.

## SMS
SMS MFA is considered insecure, since it is vulnerable to [SIM Jacking](https://nakedsecurity.sophos.com/2020/03/17/europol-busts-up-two-sim-swapping-hacking-rings/). It is also the least portable solution, requiring you to keep the same phone number forever and having cell reception whenever you want to use it. SMS codes usually show up as notifications which is an even bigger security risk.

## TOTP
Time based One Time Password (TOTP) is the most recommended method of MFA. The most prevalent example of MFA in a standard user's life is using Google Authenticator, Steam Authenticator or Blizzzard Authenticator.

These apps make a 6 digit code every 30 seconds. This code is being generated with a "seed", generally from a QR code, and the current time. 

### Issues
If the time on your device is off by a few seconds, you will see that codes are not accurate for the entire 30 seconds, and if your time drifts by more than 30 seconds your codes will never work.

### Setup
These are all mobile based applications, and while Google Authenticator can be used for many different sites or apps, it cannot be backed up or transfered to other devices.

We recommend using something that can be backed up or synchronized instead of a basic static TOTP application.

* Ente Auth
    * A popular open source cross platform TOTP app with cloud backup and multi device syncing.
* A Password Manager
    * Many standalone password managers support TOTP codes, read more in our 
[Password Managers](/safety-security/pw-managers) guide.

## Passkeys
Passkeys are used to sign in instead of a password and MFA while offering better security and phishing resistance. Passkeys can only be used on the site where they were created and require both devices to be in the same physical location. 

We recommend storing passkeys in your password manager so they sync across all your devices. For more information on supported devices check the W3C/FIDO [passkeys.dev](https://passkeys.dev/docs/reference/) documentation. To check which sites support Passkeys refer to the [passkeys.directory](https://passkeys.directory/) refrence. If you want to see how Passkeys work on your device, use the [Google Passkeys](https://passkeys-demo.appspot.com/) demo.

## Hardware tokens
Hardware tokens also called PSKs (Physical Security Keys) are typically USB Devices, NFC Fobs, or SmartCards. This guide will ignore SmartCards as they are rarely used by consumers.

PSKs are usually used directly via FIDO or as a Passkey. Some passkeys also offer biometrics like fingerprint regocnition for additional security.`
We reccomend using multiple PSKs or a diffrent MFA technology as these small devices are easy to lose.

Advanced users will be most familiar with USB devices such as Yubikeys and generic U2F/FIDO devices. These are typically plugged into a PC or tapped on a Phone for authentication.
