---
title: Password Managers
sidebar:
    hidden: false
has_children: false
parent: Safety & Security
pagefind: true
last_modified_date: 2022-07-22
---



Early in 2019, Basecamp and Nest notified the world that mass break-ins had occurred against their users. It was not because they had a breach; it was not their fault at all. The mass break-ins resulted from a botnet campaign using credentials farmed from other breached companies.

Many people re-use their passwords online, any hackers can use your ‘leaked’ password on other websites when an account has been breached. Password Breaches are becoming increasingly common and often go unnoticed until they are found on the dark web or have been reported by individuals and organisations “hunting” for vulnerabilities.



---
## Breaches and issues
### haveibeenpwned
[haveibeenpwned](https://haveibeenpwned.com/) is a great site; you can enter your email, and haveibeenpwned will tell you how many breaches it has been exposed to. The site will also tell you what was revealed in that breach, such as **passwords, names, addresses, social security numbers, and other personal information** that you care about. Looking at the front page of haveibeenpwned shows the magnitude of data breaches. The current count of compromised accounts known by the site is close to 12 billion.

### Collection #1
In January 2019, an extensive collection of credentials was discovered being distributed on a popular hacking forum. The data contained almost **2.7 billion records, including 773 million unique email addresses alongside passwords** those addresses had been used on other breached services.

### Verifcations.io
In February 2019, an email validation service called verifications.io suffered a data breach. The breach was due to the data being stored in a database that was left publicly facing without a password, resulting in **763 million unique email addresses being exposed**. Many records within the data also included additional personal attributes such as **names, phone numbers, IP addresses, dates of birth and genders**. No passwords were included in the data. 

## What can you do?
**Unique passwords, every site, every time.**

The first step is minimizing the impact of an account that has the password stolen, that event is inevitable, and you can do this by ensuring that all sites use unique passwords.

“*But I will never remember that many passwords!*" - you don't need to.

I have over 450 sets of credentials and remember 6; the key is writing them down. Yes, writing down passwords is OK.\*

There is an asterisk there; it is OK to write down passwords *if they are secured*. A notebook in a locked cabinet is fine, while a sticky note on your monitor is not. We are in the modern age, so we don't use notebooks; we use password managers.

## Password Managers
A password manager is a software that holds all your other credentials in a heavily encrypted box. You only need to keep track of one master password. which should be *extra secure and not guessable*, as it unlocks every other password you have saved.

Password managers typically have browser extensions and mobile apps, which auto-fill everything and make life much easier. I never have to remember or type out long passwords, except occasionally my one master password.

Password managers often generate long, complex passwords that, realistically, will never be guessed or brute forced. These are very complicated because they don't have to be remembered. For your master password, however, it is better to use a combination of words to make it a little easier to remember. Here is a comic from [XKCD](https://xkcd.com/) that explains why:
![[XKCD 936](https://xkcd.com/936/)](https://imgs.xkcd.com/comics/password_strength.png)

## Examples
Below is a non-exhaustive list of just 3 popular password managers. The major categories and where you should start your research at are **online** and **offline** solutions. Online solutions will be web based, accessible anywhere on any device and normally have mobile apps as well as browser extensions to make use quick, easy, and universal. Offline solutions are deemed "safer" by some, but you will need to setup synchronization methods if you desire to use the same database one more than one device.

| Product | Online/Offline | Notes |
| --- | --- | --- |
| Bitwarden/Vaultwarden | Online | An opensource web based solution that works via a webpanel, browser extensions and mobile apps. Bitwarden can also hold your [totp mfa](/safety-security/mfa#totp) tokens. Vaultwarden is self-hosted version of Bitwarden.
| Lastpass | Online | A web based solution that is very popular but fell out of favor when they required payment for use on more than one platform (Desktop or Mobile) |
| KeepassKeepassXC | Offline | A popular offline solution that can be extended to include [TOTP mfa](/safety-security/mfa#totp) and other functions via plugins. You are required to find your own synchronization method to share this across devices.

---

Check out our article on [MFA](/safety-security/mfa) for the next steps you can take in securing your accounts.
