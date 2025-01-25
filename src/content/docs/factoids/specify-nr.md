---
title: Using Spec-Ify (No-Ring 0 version)
sidebar:
    hidden: false
parent: Factoids
has_children: false
pagefind: true
last_modified_date: 2024-11-05
---

Spec-Ify is a custom made, [open-source](https://github.com/Spec-ify/specify) windows app that gathers system information like Operating System, Hardware specifications, and Software information/errors to help us troubleshoot your computer.

> This is the **No-Ring 0** version, where LibreHardwareMonitor/temperature has been excluded from the report. To get temperature readings, please refer to our [HWinfo guide](/guides/hwinfo).

> [!IMPORTANT] Important!
>
> Nothing sensitive is included in the report, we will not ask you to share private information. Do note that if you wish to hide your windows username, enable remove usernames in settings brefore clicking start.

> [!INFORMATION] Data Retention Policies
>
> In compliance with [GDPR (General Data Protection Regulation)](https://gdpr-info.eu/), the report will **be automatically deleted after 24 hours**. For more information about our data retention policies, please refer to our [README on GitHub](https://github.com/Spec-ify/specify/blob/main/README.md).

### How to use Spec-Ify

1. **Download** the Spec-Ify tool from the following link: https://spec-ify.com/download
2. **Run** the Spec-Ify.exe program.
    - If a User Account Control (UAC) window pops up, press yes. If a Windows Smartscreen window pops up, select "More Info" and then "Run Anyway".
3. **(Optional)** - Select Settings and enable the `Remove Username` option if you wish to redact your computer name.
4. Click on **Start**, wait for the program to complete scanning the system.
5. Once it is done, it will **automatically open a link and copy it to your clipboard**. Click "Close Program" at the end to exit.
6. Paste this link in the channel you are getting support from.

> [!TIP] For machines without internet access
>
> For machines without internet access, click the settings button and enable the 'Don't Upload' option. Specify will save a file titled "specify_specs.json". Please upload the file instead.

An example of a Spec-Ify report:
![specify-result.png](../../../assets/specify/specify-result.png)

### Issues running Spec-Ify

If Spec-Ify fails to produce a link, or crashes, re-run this tool, but enable the **Debug Logging** option in settings.

![specify-debug.png](../../../assets/specify/specify-debug.png)