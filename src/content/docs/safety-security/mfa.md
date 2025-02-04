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
SMS MFA is considered insecure since it is vulnerable to [SIM Swapping](https://www.europol.europa.eu/media-press/newsroom/news/sim-highjackers-how-criminals-are-stealing-millions-highjacking-phone-numbers). It is also the least portable solution, requiring you have cell reception and access to that phone number. SMS codes often show up as lock screen notifications which is an even bigger security risk.

## TOTP
Time based One Time Password (TOTP) is the most recommended method of MFA. The most prevalent example of MFA in a standard user's life is using Google Authenticator, Steam Guard, or DUO Mobile.

These apps make a 6 digit code every 30 seconds. This code is being generated with a "seed", generally from a QR code, and the current time. 

### Setup
These are a few other good TOTP options, and while Google Authenticator can be used for many different sites or apps, it cannot be backed up or transfered to other devices.

We recommend using something that can be backed up or synchronized rather than a basic static TOTP application.

* Ente Auth
    * A popular open source cross platform TOTP app with cloud backup and multi device syncing.
* A Password Manager
    * Many standalone password managers support TOTP codes, read more in our 
[Password Managers](/safety-security/pw-managers/) guide.

## Passkeys
Passkeys are used to sign in instead of a password and MFA while offering better security and phishing resistance. Passkeys can only be used on the site where they were created and require both devices to be in the same physical location. While they can be setup on a device or PSK we recommend keeping them in a standalone password manager for multi device syncing.

## Hardware tokens
Hardware tokens also called PSKs (Physical Security Keys) are typically USB Devices, NFC Fobs, or SmartCards. This guide will ignore SmartCards as they are rarely used by consumers.

PSKs are can be used used directly via FIDO or as a Passkey. Some passkeys also offer biometrics like fingerprint recognition for additional security.
We recommend using a second MFA technology as these small devices are easy to break or lose.

Advanced users will be most familiar with USB devices such as Yubikeys and generic U2F/FIDO devices. These are typically plugged into a PC or tapped on a Phone for authentication.

## Backup Codes
Many sites, Password Managers, and TOTP applications will create backup/recovery/emergency/legacy codes during setup. These codes can be used to reset your password or 2FA in case you lose access to them.
**DO NOT** store these codes on your device or in a Password Manager, we recommend printing them out and storing them in a secure location. 
-# We do not condone breaking into fort knox and or starting a country in pursuit of more secure backup code storage facilites.

## Useful Resources
| Link | Notes | Site |
| --- | --- | --- |
| [2FA Directory](https://2fa.directory/) | List of sites that support TOTP 2FA | 1Password | 
| [Passkeys Directory](https://passkeys.directory/) | List of sites that support Passkeys | 1Password |
| [Supported Devices](https://passkeys.dev/device-support/) | List of devices that support Passkeys | FIDO |
| [Passkeys Demo](https://passkeys-demo.appspot.com/) | See how Passkeys work on your device | Google |
| [Password Managers](/safety-security/pw-managers/) | Wiki article on Password Managers | RTS |
---
