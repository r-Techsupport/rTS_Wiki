---
layout: default
title: Mounting with Dislocker
nav_exclude: false
has_children: false
parent: Disks
search_exclude: false
last_modified_date: 2022-08-25
---

# Mounting BitLocker Drive in Linux with Dislocker
Dislocker process will work in two different parts. For the first pear we will decrypt the BitLocker encryption and give a file named dislocker-file. In the second part we will mount the partition we just created. 

To do this you will need the BitLocker password, or the recovery password to decrypt the drive. If you need help finding your BitLocker key, follow this [guide](https://support.microsoft.com/en-us/windows/finding-your-bitlocker-recovery-key-in-windows-6b71ad27-0b89-ea08-f143-056f5ab347d6).

## Install Dislocker
The first step is to install Dislocker, this is already included in our [Linux Live session](/docs/live-sessions/linux-live-session). Therefore, you can skip this step.
If you did not have it installed already you can use the following command to install dislocker for Ubuntu and Debian:
```
sudo apt install dislocker
```
![install-dislocker-ubuntu.png](/assets/Dislocker/install-dislocker-ubuntu.png)

## Create Mount Points
The next step is to create two mount points. The first mounting point is for where Dislocker will generate the dislocker-file and the other mounting point is where you will mount the dislocker-file as a loop device.
The naming of the mount directories can be anything because there is no naming restrictions.
Use these commands one by one:
```
sudo mkdir -p /media/decrypt
sudo mkdir -p /media/windows-mount
```
![mount-points.png](/assets/Dislocker/ScreenShot2.png)

## Get Partition Name
To decrypt the Windows partition we need to get the name of the partition. To get the name there is another program on the Linux Live session called Gparted. We can use this tool to get the name of the partition we need.

![Device-name.png](/assets/Dislocker/ScreenShot3.png)

*This is just an exmaple, your partition name will be different*

## Decrypt the Partition and Mount
*If you have the BitLocker password*, use this dislocker command and replace <partition_name> and <password> with your actual values.
```
sudo dislocker <partition_name> -u<password> -- /media/decrypt
```

*If you only have the recovery password*, us this dislocker and replace <partition_name> and <password> with your actual values.
```
sudo dislocker <partition_name> -p<recovery_password> -- /media/decrypt
```

*There is no spaces before the password.*

After decrypting the file, now is the time to mount it that way it is accessable. To do that we enter the following command:
```
sudo mount -o loop /media/decrypt/dislocker-file /media/windows-mount
```
![Mount.png](/assets/Dislocker/ScreenShot4_1.png)

The BitLocker encrypted Windows partition is now decrypted and mounted in Linux. You can now access it from file explorer.
  
![DriveInExplorer.png](/assets/Dislocker/ScreenShot5.png)

## Troubleshooting Tips
If you get an error for wrong fs type then need to include the file type.
```
mount: /media/windows-mount: wrong fs type, bad option, bad superblock on /dev/loop35, missing codepage or helper program, or other error.
```

For NTFS, use to mount:
```
sudo mount -t ntfs-3g -o loop /media/decrypt/dislocker-file /media/windows-mount
```

For exFAT, use to mount:
```
sudo mount -t exFAT-fuse -o loop /media/decrypt/dislocker-file /media/windows-mount
```

## Unmount the Windows Partition
Once finished you can unmount the partition from file manager. By either clicking the unmount symbol beside the partition name or entering each command one by one.
```
sudo umount /media/decrypt
sudo umount /media/windows-mount
```
