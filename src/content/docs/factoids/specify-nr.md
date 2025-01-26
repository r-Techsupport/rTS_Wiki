---
title: Using Specify (No-Ring 0 version)
description: Specify is an open-source windows applications that gathers various data to help us troubleshoot your computer.
sidebar:
    hidden: false
parent: Factoids
has_children: false
pagefind: true
last_modified_date: 2024-11-05
---
This is the **No-Ring 0** version, where LibreHardwareMonitor/temperature has been excluded from the report. To get temperature readings, please refer to our [HWinfo guide](/guides/hwinfo).

> [!IMPORTANT] Important
>
> No sensitive information is included in the report, we will not ask you to share private information. You can view an example specify report [here](https://spec-ify.com/profile/demo-noring0).
>
> More information can be found on our [README on GitHub](https://github.com/Spec-ify/specify/blob/main/README.md). 

## How to use Specify

1. **Download** the Specify tool from [here](https://github.com/Spec-ify/specify/releases/latest/download/Specify_noring0.exe).
2. **Run** the Specify.exe program.
    - If a User Account Control (UAC) window pops up, press yes. If a Windows Smartscreen window pops up, select "More Info" and then "Run Anyway".
3. **(Optional)** - Select Settings and enable the `Remove Username` option if you wish to redact your user name from the report.
4. Click on **Start**, wait for the program to complete scanning the system.
5. Once it is done, it will **automatically open a link and copy it to your clipboard**. Click "Close Program" at the end to exit.
6. Paste this link in the channel you are getting support from.

> [!TIP] For machines without internet access
>
> For machines without internet access, click the settings button and enable the 'Don't Upload' option. Specify will save a file titled "specify_specs.json". Please upload the file instead.

> [!INFORMATION] Data Retention Policies
>
> In compliance with [the GDPR (General Data Protection Regulation)](https://gdpr-info.eu/), the report will **be automatically deleted after 24 hours**. For more information about our data retention policies, please refer to our [README on GitHub](https://github.com/Spec-ify/specify/blob/main/README.md).