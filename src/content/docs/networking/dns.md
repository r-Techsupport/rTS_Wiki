---
title: Domain Name System
sidebar:
    hidden: false
has_children: false
parent: Networking
has_toc: true
pagefind: true
last_modified_date: 2023-02-03
---





## What is DNS?

DNS, or the Domain Name System, is the system that translates human-readable domain names (e.g. www.google.com) into machine-readable IP addresses (e.g. 216.58.194.174). It acts as a sort of phonebook for the internet, allowing users to access websites and other online resources using easy-to-remember names instead of difficult-to-remember numerical addresses.

## List of DNS Providers

*You can use any of the following depending on your Personal Preference.*

| **Provider**       | **IPv4 Addresses**            | **IPv6 Addresses**                     |
|-------------------|-----------------------------|----------------------------------------|
| **Google Public DNS** | 8.8.8.8  <br> 8.8.4.4   | 2001:4860:4860::8888  <br> 2001:4860:4860::8844 |
| **Cloudflare**    | 1.1.1.1  <br> 1.0.0.1       | 2606:4700:4700::1111  <br> 2606:4700:4700::1001 |
| **OpenDNS**       | 208.67.222.222  <br> 208.67.220.220 | 2620:119:35::35  <br> 2620:119:53::53 |
| **Quad9**         | 9.9.9.9  <br> 149.112.112.112 | 2620:fe::fe  <br> 2620:fe::9          |


## How to Revert to Standard DNS Providers

The process of reverting to a standard DNS provider varies depending on the operating system you are using. Here are the steps for some common operating systems:

### Windows

1. Click the Start button and type "Control Panel" in the search bar.
2. Click "Network and Sharing Center."
3. Click "Change adapter settings."
4. Right-click the network connection you want to change and select "Properties."
5. Select "Internet Protocol Version 4 (TCP/IPv4)" and click "Properties."
6.  Select "Use the following DNS server addresses" and enter the preferred DNS server addresses for the provider [you want to use](#list-of-dns-providers).
7. Click OK to save the changes.
8. Press Win+r and enter ```ipconfig /flushdns``` then press OK to Confirm, this will clear IPs and domains resolved using your old DNS provider.

To change the IPv6 address you follow the same format, except the only difference is step 5 where you select "Internet Protocol Version 6 (TCP/IPv6)" and click "Properties."

### MacOS

1. Click the Apple menu and select "System Preferences."
2. Click "Network."
3. Select the network connection you want to change and click "Advanced."
4. Click the "DNS" tab.
5. Click the "+" button to add a new DNS server address and enter the preferred DNS server addresses for the provider [you want to use](#list-of-dns-providers).
6. Click OK to save the changes.

### Linux

The specific steps to change the DNS server in Linux depend on the distribution you are using. For most distributions, you can change the DNS server by editing the `/etc/resolv.conf` file and adding the preferred DNS server addresses for the provider [you want to use](#list-of-dns-providers).
