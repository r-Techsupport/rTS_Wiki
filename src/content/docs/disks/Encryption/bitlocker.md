---
title: BitLocker
sidebar:
    hidden: false
has_children: false
has_toc: true
grand_parent: Disks
parent: Disk Encryption
pagefind: true
last_modified_date: 2023-12-17
---


BitLocker is a built-in disk encryption feature in Windows that provides full disk encryption for the operating system drive, as well as additional data drives. It is the most accessible solution to anyone wishing to add disk encryption on their computer.

## Setting Up Full Disk Encryption on Windows using BitLocker
Here's how to set up BitLocker on Windows:

1. Go to Control Panel and select System and Security.
2. Select BitLocker Drive Encryption.
3. Select the drive that you want to encrypt and click on "Turn on BitLocker."
4. Choose how you want to unlock your drive at startup, such as with a password or smart card.
5. Choose how you want to back up your recovery key, such as saving it to a USB drive or printing it.
6. Choose the encryption method and encryption settings, such as the encryption algorithm and the encryption key size.
7. Start the encryption process and wait for it to complete. This process may take several hours, depending on the size of the drive.

> [!WARNING] Hardware Change Warning
> **Changing your motherboard or CPU may "break" BitLocker and require recovery.**
> 
> BitLocker is designed to lock down in the event of hardware or firmware changes, to prevent unauthorized access to the encrypted data. However, there may be times when hardware or firmware changes are necessary, such as during routine maintenance or upgrades. In these cases, BitLocker can be put into maintenance mode, allowing the changes to be made and then resumed.
>
> If you are already "broken" please see [Finding BitLocker Recovery Keys](#finding-bitlocker-recovery-keys)

## How to put BitLocker into maintenance mode:

1. Go to Control Panel and select System and Security.
2. Select BitLocker Drive Encryption.
3. Select the drive that is encrypted with BitLocker.
4. Click on "Suspend protection."
5. Make the necessary hardware or firmware changes.
6. Go back to BitLocker Drive Encryption and click on "Resume protection."
7. Enter the BitLocker password and wait for the encryption process to resume.

### Minimum Requirements for BitLocker / BitLocker to Go

In order to use BitLocker, your computer must meet the following minimum requirements:

* Windows 10 Pro or newer Pro edition Windows
* An enabled Trusted Platform Module (TPM) version 1.2 or later

## Setting up BitLocker to Go for detachable or Portable Storage

BitLocker to Go provides a convenient and secure way to encrypt external drives and protect sensitive data stored on them. While it does have some limitations, it is a useful tool for anyone who needs to store sensitive data on an external drive. Just be sure to always keep a backup of your data and store your password in a safe place to avoid data loss.

> [!WARNING] Warning
> BitLocker to Go is compatible with Windows operating systems that support BitLocker with no additional software required, but it is **NOT compatible** with MacOS or Linux without the use of third-party tools.

To encrypt an external drive using BitLocker to Go, follow these steps:

1. Connect the external drive to your Windows computer.
2. Right-click on the drive in File Explorer and select "Turn on BitLocker".
3. Follow the on-screen prompts to set up a password for the drive and select the encryption options.
4. BitLocker will begin encrypting the drive, which may take some time depending on the size of the drive and the speed of your computer.

## Unlocking a BitLocker to Go Drive

To unlock a BitLocker to Go drive, simply connect it to a Windows computer and enter the password when prompted. The drive will then be unlocked and accessible just like any other drive.

## Finding BitLocker Recovery Keys 

BitLocker recovery keys can be found in several places, depending on how BitLocker was set up:

- In the Microsoft account: If the recovery key was saved to the Microsoft account, it can be found by signing in to the account and viewing the security information. Follow [this guide](https://support.microsoft.com/en-us/windows/finding-your-bitlocker-recovery-key-in-windows-6b71ad27-0b89-ea08-f143-056f5ab347d6) to retrieve it.
- In the OneDrive account: If the recovery key was saved to the OneDrive account, it can be found by signing in to the account and searching for "BitLocker".
- On a USB drive: If the recovery key was saved to a USB drive, the USB drive must be inserted into the computer to access the encrypted data.
- With the BitLocker Recovery Console: If the recovery key was not saved to the Microsoft account or a USB drive, it can be found using the BitLocker Recovery Console.

> [!WARNING] Warning
> It is not possible to decrypt BitLocker drives without them and we will not assist in doing so.
