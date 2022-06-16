---
layout: default
title: Troubleshooting Port Forwards
nav_exclude: false
has_children: false
parent: Networking
search_exclude: false
last_modified_date: 2022-06-16
---
# Troubleshooting Port Forwards
This is not a guide on *how* to port forward, it is only made to address issues once your forward is made.

## Definitions

* Private IP
	
	A private IP is used within your house or by ISPs with CGNAT and is in the following ranges 
    
    * 192.168.0.0 - 192.168.255.255 (most common)
    * 172.16.0.0 – 172.31.255.255
    * 10.0.0.0 - 10.255.255.255
    * 10.64.0.0 - 10.127.255.255 ([CGNAT](#cgnat))

* Public IP
	
    Any other IP

## Common issues

### CGNAT 

CGNAT is 'Carrier Grade NAT', it means that your router is given a private IP by your ISP then a larger block (such as your neighborhood) is assigned one public IP.

To determine that you are not subject to CGNAT check your router admin panel to verify that the IP on the WAN interface is a public IP. It should match what online tools say your public IP is. 

If your IP is private, or does not match what online tools state then you may be subject to CGNAT. Verify that you are not dealing with [multiple routing devices](https://rtech.support/books/networking/page/troubleshooting-port-forwards#bkmrk-multiple-routing-dev), if you are not using multiple routing devices then you need to call your ISP to request a public IP to be assigned to your router (this may have a fee associated).

### Multiple routing devices
A network should only have 1 routing device (typically a router). Every routing device will create its own network, leading to 'double-nat' meaning you will need to port forward twice. This is complex solution and we suggest eliminating the double-nat.

If you are using an ISP provided modem/router combo and a personal router then you must place the modem/router into 'passthrough' mode (not bridged mode).

This issue can also arise when using a second router as a wireless access point. If you are using a second router only to create wifi then you should plug it into the network via a LAN port or force the device into AP mode if it does not want to function with only the LAN port in use. Ensure the WAN port on the router is left empty for this to work with most devices. Using only the LAN port should stop the unit from routing and creating a new network.

## Firewalls/VPNs
### Firewalls

In Windows ensure both the Public and Private firewalls are deactivated, these are 2 distinct walls in Windows so ensure **both** are off.

For Linux ensure that iptables are `ACCEPT` for `INPUT` and `OUTPUT` with no `DROP` or `REJECT` present in the tables. Ensure that UFW/Firewalld are set to permissive.

### VPNs
Uninstall all VPN software when troubleshooting network connectivity, fail-safe switches can cause issues with local traffic being restricted randomly.

## Wrong listening address
Check that a service is actually listening on the proper port and address, sometimes things are not listening at all or on the wrong address.

To check listening services in Windows you can use `netstat -nat | findstr LISTENING` in CMD.

In Linux, ensure that `net-tools` is installed to have the `netstat` utility then run `netstat -natlpu`

### Possible listening issues
If you do not see your desired port at all in this output then your service is not listening. You should check the server logs for issues.

If you see a server listening on IPv6 only (typically :::) then you need to figure out why. If you can configure what address a server listens on then set `0.0.0.0` this represents 'all IPv4' and is a standard listening address.

### Windows

IPv4
```
TCP    0.0.0.0:445            0.0.0.0:0              LISTENING       InHost
```
IPv6
```
TCP    [::]:445               [::]:0                 LISTENING       InHost
```
### Linux

IPv4
```
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      1113/sshd
```
IPv6
```
tcp6       0      0 :::22                   :::*                    LISTEN      1113/sshd
```

## I cannot connect using my public IP, but others can

This is an issue some routers have, they are not able to route your public IP back to themselves. You need to use your internal IP or get a new unit.

## Game specific notes

### Minecraft listening on IPv6
If your Minecraft server is listening on IPv6 then add `-Djava.net.preferIPv4Stack=true` as a java argument in your launch script. See the example:

```
java -Xms128M -Xmx4096M -Djava.net.preferIPv4Stack=true -jar server.jar
```
