---
title: MFA
sidebar:
    hidden: false
has_children: false
parent: Safety & Security
pagefind: true
last_modified_date: 2022-07-16
redirect_from: /books/safety-and-security/page/mfa
---





Multi-Factor Authentication (MFA), also called Two-Factor Authentication (2FA), is using 2 or more forms of authentication to gain access to an account or resource. In most cases the 1st form of authentication is your password, we then add a second in the form of a one time code.

The method to obtain this code can vary, in most cases the code is coming from a text message (SMS), an application on your phone or computer, or a hardware token.

As the world moves to be more secure more and more responsibility is being put on the user. When setting up MFA most sites will give you 10 backup codes. **These must be retained**. In a perfect world you **will** lose all access to your account should your MFA and backup tokens be lost.

## SMS
SMS MFA is considered insecure, since it is vulnerable to [SIM Jacking](https://nakedsecurity.sophos.com/2020/03/17/europol-busts-up-two-sim-swapping-hacking-rings/). It is also the least portable solution, requiring you to keep the same phone number forever and having cell reception whenever you want to use it.

## TOTP
Time based One Time Password (TOTP) is the most recommended method of MFA. The most prevalent example of MFA in a standard user's life is using Google Authenticator, Steam Authenticator or Blizzzard Authenticator.

These apps make a 6 digit code every 30 seconds. This code is being generated with a "seed", generally from a QR code, and the current time. 

### Issues
If the time on your device is off by a few seconds, you will see that codes are not accurate for the entire 30 seconds, and if your time drifts by more than 30 seconds your codes will never work.

### Setup
These are all mobile based applications, and while Google Authenticator can be used for many different sites or apps, it is not portable and is an issue to backup or transfer.

We recommend using something that can be backed up or synchronized instead of a basic static TOTP application.

* Authy 
    * A popular application that can be used on desktop and mobile. It synchronizes and requires a telephone number for use.
* KeePass
    * Plugins are available for this manager to also store MFA.
* Bitwarden
    * Under the Pro plan you can keep TOTP seeds in your manager.
* Your password manager
    * Check if your choice of password manager supports TOTP out of the box. Typically this can be a field you can add to your entry, and sometimes named "One-Time Password" or something else.

## Hardware tokens
Hardware tokens are typically keyfobs, USB devices, or smartcards. For the purpose of this guide we will only talk about keyfobs and USB devices, since smartcards almost never are used by consumers. 

In the keyfob form, a hardware token is typically generating a 6 digit code, much like a TOTP application. The most popular consumer application of these would be DUO.

Advanced users will be most familiar with USB devices such as Yubi or the generic U2F/FIDO devices. These are typically inserted into a machine for authentication.
