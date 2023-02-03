---
layout: default
title: Disk Encryption
nav_exclude: false
nav_order: false
has_children: false
parent: safety-security
search_exclude: false
last_modified_date: 2023-02-03
---

# Disk Encryption

{: .no_toc}

{% include toc.md %}

# Disk Encryption

# Introduction

Disk encryption is the process of converting plain text data into unreadable code, using mathematical algorithms, to secure sensitive information stored on a computer's hard drive. The encryption process protects data by making it unreadable to unauthorized users, even if they have physical access to the computer's disk.

## Uses of Disk Encryption

* Protecting sensitive personal and financial information, such as passwords, social security numbers, and credit card numbers.
* Securing confidential business data, such as trade secrets, customer information, and financial records.
* Complying with legal and regulatory requirements, such as the General Data Protection Regulation (GDPR) and the Health Insurance Portability and Accountability Act (HIPAA).
* Preventing data theft, such as through theft of laptops or external hard drives.

## General Things Necessary for Secure Disk Encryption

* Backups: Regularly backing up encrypted data is important in case of disk failure or Corruption.
* Secure Passwords: The strength of disk encryption depends on the strength of the password used to encrypt the data. It is important to choose strong, unique passwords 
* Storing Passwords Safely: Passwords should be stored in a secure location, such as a password manager or a physically secure location, to prevent unauthorized access.
* Usage of a Secure Algorithm: If the Method used for Encryption is weak or has known Vulnerabilities it should not be used.

## Setting Up Full Disk Encryption on Windows using BitLocker

BitLocker is a built-in disk encryption feature in Windows that provides full disk encryption for the operating system drive, as well as additional data drives. Here's how to set up BitLocker on Windows:

1. Go to Control Panel and select System and Security.
2. Select BitLocker Drive Encryption.
3. Select the drive that you want to encrypt and click on "Turn on BitLocker."
4. Choose how you want to unlock your drive at startup, such as with a password or smart card.
5. Choose how you want to back up your recovery key, such as saving it to a USB drive or printing it.
6. Choose the encryption method and encryption settings, such as the encryption algorithm and the encryption key size.
7. Start the encryption process and wait for it to complete. This process may take several hours, depending on the size of the drive.

BitLocker is designed to lock down in the event of hardware or firmware changes, to prevent unauthorized access to the encrypted data. However, there may be times when hardware or firmware changes are necessary, such as during routine maintenance or upgrades. In these cases, BitLocker can be put into maintenance mode, allowing the changes to be made and then resumed. 
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

* Windows 10 Pro or higher
* An enabled Trusted Platform Module (TPM) version 1.2 or later






## Setting up BitLocker to Go for detachable or Portable Storage

BitLocker to Go provides a convenient and secure way to encrypt external drives and protect sensitive data stored on them. While it does have some limitations, it is a useful tool for anyone who needs to store sensitive data on an external drive. Just be sure to always keep a backup of your data and store your password in a safe place to avoid data loss.



To encrypt an external drive using BitLocker to Go, follow these steps:

1. Connect the external drive to your Windows computer.
2. Right-click on the drive in File Explorer and select "Turn on BitLocker".
3. Follow the on-screen prompts to set up a password for the drive and select the encryption options.
4. BitLocker will begin encrypting the drive, which may take some time depending on the size of the drive and the speed of your computer.

## Unlocking a BitLocker to Go Drive

To unlock a BitLocker to Go drive, simply connect it to a Windows computer and enter the password when prompted. The drive will then be unlocked and accessible just like any other drive.



### Things to keep in mind

- BitLocker to Go is Compatible with Windows operating systems that support BitLocker with no additional software required but is not Compatible with Mac OS or Linux without usage of Third-party Tools.

## Finding Bitlocker Recovery Keys 

Bitlocker recovery keys can be found in several places, depending on how Bitlocker was set up:

- In the Microsoft account: If the recovery key was saved to the Microsoft account, it can be found by signing in to the account and viewing the security information. Follow [this guide](https://support.microsoft.com/en-us/windows/finding-your-bitlocker-recovery-key-in-windows-6b71ad27-0b89-ea08-f143-056f5ab347d6).
- In the OneDrive account: If the recovery key was saved to the OneDrive account, it can be found by signing in to the account and searching for "Bitlocker."
- On a USB drive: If the recovery key was saved to a USB drive, the USB drive must be inserted into the computer to access the encrypted data.
- With the Bitlocker Recovery Console: If the recovery key was not saved to the Microsoft account or a USB drive, it can be found using the Bitlocker Recovery Console.

### It is not possible to Decrypt BitLocker without them and we will not asisst in doing so.




## Setting up VeraCrypt

VeraCrypt is a free, open-source disk encryption software for Windows, MacOS, and Linux. It allows you to create encrypted volumes and encrypt entire disks, including system drives. This article will cover the setup and use of VeraCrypt, as well as its advantages and disadvantages.

### Minimum Requirements

To use VeraCrypt, you will need a computer with a compatible operating system:

- Windows 7 or later
- MacOS X 10.6 or later
- Linux 2.6 or later

## Installing VeraCrypt

To install VeraCrypt, follow these steps:

1. Download the VeraCrypt installer from the [official website](https://veracrypt.codeplex.com/).
2. Run the installer and follow the on-screen prompts to install VeraCrypt.
3. Once installed, launch VeraCrypt and follow the steps to create an encrypted volume or encrypt an entire disk.

### Creating an Encrypted Volume

To create an encrypted volume using VeraCrypt, follow these steps:

1. Launch VeraCrypt and select "Create Volume".
2. Select "Create an encrypted file container".
3. Follow the on-screen prompts to create a password and choose the encryption options.
4. VeraCrypt will create an encrypted file container that can be mounted as a virtual drive.

### Encrypting an Entire Disk

To encrypt an entire disk using VeraCrypt, follow these steps:

1. Launch VeraCrypt and select "Encrypt a non-system partition/drive".
2. Select the drive you wish to encrypt.
3. Follow the on-screen prompts to create a password and choose the encryption options.
4. VeraCrypt will begin encrypting the drive, which may take some time depending on the size of the drive and the speed of your computer.

### Advantages and Disadvantages

Advantages

- Free and open-source
- Cross-platform compatibility
- Offers full disk encryption and encrypted volumes
- Strong encryption options

Disdvantages

- May be more difficult to set up and use than other disk encryption software
- Not as widely used as other disk encryption software, meaning there may be less support and resources available


## Setting up LUKS

LUKS (Linux Unified Key Setup) is a disk encryption specification for Linux. It provides a standard for encrypting entire storage devices, including hard drives and flash drives. This article will cover the setup and use of LUKS, as well as important things to keep in mind when using LUKS encryption.


### Minimum Requirements

To use LUKS, you will need a Linux operating system with the following minimum requirements:

- Linux kernel 2.6.x or later
- A supported Linux Distro

### Encrypting a Device with LUKS

To encrypt a device using LUKS, follow these steps:

1. Open a terminal window and enter the following command: `sudo cryptsetup luksFormat /dev/sdX` (where `/dev/sdX` is the device you wish to encrypt).
2. Follow the on-screen prompts to create a password for the encrypted device.
3. Enter the following command to open the encrypted device: `sudo cryptsetup luksOpen /dev/sdX cryptname` (where `cryptname` is the name you wish to assign to the encrypted device).
4. Create a filesystem on the encrypted device: `sudo mkfs.ext4 /dev/mapper/cryptname`
5. Mount the encrypted device: `sudo mount /dev/mapper/cryptname /mnt/mountpoint` (where `/mnt/mountpoint` is the mount point you wish to use).

### Unlocking an Encrypted Device

To unlock an encrypted device, follow these steps:

1. Open a terminal window and enter the following command: `sudo cryptsetup luksOpen /dev/sdX cryptname` (where `/dev/sdX` is the encrypted device and `cryptname` is the name you assigned to the encrypted device).
2. Enter the password for the encrypted device.
3. Mount the encrypted device: `sudo mount /dev/mapper/cryptname /mnt/mountpoint` (where `/mnt/mountpoint` is the mount point you wish to use).

### Advantages and Disadvantages

Advantages:


- LUKS is broadly availible accros Linux Distributions

Disadvantages:

- No GUi
- Requires a certain degree of knowledge of the Linux Terminal
- LUKS encryption can slow down disk access speeds.
- No way of accessing Drives on Other Operating systems wihtout usage of 3rd Party Software 

## Self-Encrypting Drives (SEDs)

Self-Encrypting Drives (SEDs) are a type of hard disk drive (HDD) or solid state drive (SSD) that encrypt all data on the disk automatically without the need for any additional software or hardware.

### Advantages and Disadvantages

Advantages

- Easy to use: SEDs are simple to use, as encryption is performed automatically in the background. No additional software or hardware is required.
- Improved performance: SEDs are designed to encrypt data at the disk controller level, which minimizes the impact on system performance.
- Increased security: SEDs encrypt all data on the disk, including data in use, which provides a higher level of security than traditional software-based encryption methods.
- More affordable: SEDs are becoming more affordable, making them an attractive option for organizations that need to secure data on a budget.

 Disadvantages

- Limited compatibility: SEDs are not compatible with all operating systems, and some systems may require additional software to use them.
- Reduced performance: In some cases, the encryption process performed by SEDs can reduce system performance.
- Insecure Encryption methods: Not every drive has equal security as it depends on the method used. If the method has flaws or is vulnerable it can't be changed in most cases.


### Risks

- Data loss: If the encryption key is lost or forgotten, the data on the SED will be inaccessible.
- Physical damage: In the event of physical damage to the SED, the encrypted data may become inaccessible.









