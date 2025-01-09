---
title: Ransomware
description: Learn how to deal with Crypto-ransomware
sidebar:
    hidden: false
has_children: false
parent: Safety & Security
pagefind: true
last_modified_date: 2022-06-28
redirect_from: /books/safety-and-security/page/ransomware
---

Crypto-ransomware is a large threat today and is only expected to get worse. The key to its success is the business model employed by many strains and the method of deployment used.

## I am infected! Please help!
1. Remove your infected machine from the network to prevent spread of the virus.
2. Do not panic, you are already infected and your files are already encrypted, take a breath and decide how you want to settle this issue. Hold off on removing the virus, if you come to terms with paying the ransom, removing the virus may remove your ability to decrypt the files. Remove it only after deciding on one of the below solutions.

## You have several options:
1. If you have backups you can just nuke your install and start fresh, but if you are here it can be assumed you do not have backups.
2. Try a decryptor, several exist and can be found below:
    * [Kapersky](https://noransom.kaspersky.com/) 
    * [Avast](https://www.avast.com/en-gb/ransomware-decryption-tools)
    * [Emsisoft](https://www.emsisoft.com/ransomware-decryption-tools/) 
    * [NoMoreRansom](https://www.nomoreransom.org/en/decryption-tools.html)

3. Pay a company to attempt recovery of your data. You need to assess the worth of your data and decide if this option is viable.
4. If no decryptor currently exists for your strain, you can either set the drive aside or make an image of it, to hopefully have a chance at recovering the data at a later date.
5. Pay the ransomer. This is not guaranteed, since the ransomer might not give away the decryption key at all.

These are the only options. There is no magic way to solve this, and there is no way to crack the encryption yourself.

## What do I do next?
1. [Backup your stuff immediately](/backups), preferably to multiple locations.
2. [Reinstall windows](/installations) to make sure the ransomer doesn't still have access to your system.
6. Change all your passwords that are stored locally or were entered while the PC was infected. Since the device was infected, the ransomer could have also taken those passwords
4. Enable file extensions. 
    * File extensions show what type of file you are opening. Many malicious programs disguise themselves as relatively harmless files. For example, a malicious program could show up as `invoice.docx`, but will show up as `invoice.docx.exe` with file extensions enabled.
5. Disable macros in Microsoft Office. 
    * Ransomware can also exploit macros in Office to run their malicious payloads.
6. Do not open attachments in emails that you are not expecting, see the above two points for why.
7. Stay up to date on all OS and application updates. **An unpatched system is a vulnerable system.**