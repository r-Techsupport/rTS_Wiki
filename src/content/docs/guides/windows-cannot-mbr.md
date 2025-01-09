---
title: Windows cannot be installed on this disk
description: Resolving Windows installation errors related to MBR disks
---
During the instalaltion of Windows 10 and Windows 11 you may encounter an error message:

> Windows cannot be installed on this disk. The selected disk has an MBR partition table

![the-selected-disk-has-an-mbr-partition-table-01.png](../../../assets/install-11/the-selected-disk-has-an-mbr-partition-table-01.webp)

## Resolution
1.  Press `Shift+F10` to open CMD and follow below.
    ![Windows 11-2021-10-05-15-09-53.png](../../../assets/install-11/windows-11-2021-10-05-15-09-53.webp)

2. Type `diskpart` and press Enter
    ![Windows 11-2021-10-05-15-10-24.png](../../../assets/install-11/windows-11-2021-10-05-15-10-24.webp)

3. Type `list disk` and press Enter
    ![Windows 11-2021-10-05-15-10-39.png](../../../assets/install-11/windows-11-2021-10-05-15-10-39.webp)

4. Make note of the disk you want to install to from the step above then type `sel disk #` and press Enter

    ![Windows 11-2021-10-05-15-10-51.png](../../../assets/install-11/windows-11-2021-10-05-15-10-51.webp)

5. Type `convert gpt` and press Enter
    ![Windows 11-2021-10-05-15-11-01.png](../../../assets/install-11/windows-11-2021-10-05-15-11-01.webp)

6. Type `clean` and press Enter
    ![Windows 11-2021-10-05-15-11-13.png](../../../assets/install-11/windows-11-2021-10-05-15-11-13.webp)

7. You can exit the CMD and click `Next` again.
    ![Windows 11-2021-10-05-15-09-40.png](../../../assets/install-11/windows-11-2021-10-05-15-09-40.webp)