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

## What can you do?
### Check for existing compromised credentials
You can check if any of your credentials have already been compromised on [haveibeenpwned](https://haveibeenpwned.com/). You can enter your email, and haveibeenpwned will tell you how many breaches it has been exposed in. The site will also tell you what was revealed in that breach, such as **passwords, names, addresses, social security numbers, and other personal information** that you care about. Looking at the front page of haveibeenpwned shows the magnitude of data breaches. The current count of compromised accounts known by the site is over to 14 billion.

### Prevent future compromises from being as damaging
#### Unique passwords, every site, every time

The first step is minimizing the impact of an account that has the password stolen, that event is inevitable, and you can do this by ensuring that all sites use unique passwords.

“*But I will never remember that many passwords!*" - you don't need to.

I have over 450 sets of credentials and remember 6; the key is writing them down. Yes, writing down passwords is OK.\*

There is an asterisk there; it is OK to write down passwords ***if they are secured***. A notebook in a locked cabinet is fine, while a sticky note on your monitor is not. We are in the modern age, so we don't use notebooks; we use password managers.

### Use a password manager
A password manager is a software that holds all your other credentials in a heavily encrypted box. You only need to keep track of one master password. which should be *extra secure and not guessable*, as it unlocks every other password you have saved.

Password managers typically come in the form of a browser extensions but many offer desktop and mobile apps, which auto-fill everything and make life much easier. I never have to remember or type out long passwords, except occasionally my one master password.

Password managers often generate long, complex passwords that, realistically, will never be guessed or brute forced. These are very complicated because they don't have to be remembered. For your master password, however, it is better to use a combination of words to make it a little easier to remember. Here is a comic from [XKCD](https://xkcd.com/) that explains why:
![[XKCD 936](https://xkcd.com/936/)](https://imgs.xkcd.com/comics/password_strength.png)

#### Examples
Below is a list of a few popular password managers. The major categories and where you should start your research at are **online** and **offline** solutions. Online solutions are web based and can be accessed from anywhere. Offline solutions are deemed "safer" by some, but you will need to setup synchronization methods to use it on multiple devices.

If you're having touble exporting and disabling your existing password manager, review the [1Password Setup](https://support.1password.com/import/) documentation, this guide works with any password manager. To export password from iOS 18.2+ follow this [Apple Support](https://support.apple.com/guide/iphone/export-passwords-iphf28f2e93e/ios) article, older versions of iOS require Keychain Access or Apple Passwords on a Mac.

| Product | Web | Notes |
| --- | --- | --- |
| Bitwarden | Online | A free open source web based solution with multi platform support. Bitwarden also offers paid plans with more features. |
| Vaultwarden | Online | A free open source unofficial server replacement for bitwarden that can be self-hosted. Valutwarden uses the Bitwarden client app. |
| 1Password | Online | A paid web based solution with multi platform support. 1Password generally has better support for Passkeys and PSKs. |
| KeePassXC | Offline | A free open source offline solution with multi platform support. KeePassXC requires plugins for MFA and syncing between devices. |
| Browser | Online | Browser, Account, and Device based password managers are more convient than than standalone options but many sacrifice security and advanced features. |
---

Check out our article on [MFA](/safety-security/mfa) for the next steps you can take in securing your accounts.

## Breaches and issues
Have you been breached? Want to read about a few other breaches? Check out the content below to learn more.

### Collection #1
In January 2019, an extensive collection of credentials was discovered being distributed on a popular hacking forum. The data contained almost **2.7 billion records, including 773 million unique email addresses alongside passwords** those addresses had been used on other breached services.

### Verifcations.io
In February 2019, an email validation service called verifications.io suffered a data breach. The breach was due to the data being stored in a database that was left publicly facing without a password, resulting in **763 million unique email addresses being exposed**. Many records within the data also included additional personal attributes such as **names, phone numbers, IP addresses, dates of birth and genders**. No passwords were included in the data. 
