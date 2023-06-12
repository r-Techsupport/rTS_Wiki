---
layout: default
title: Blackout
nav_exclude: true
search_exclude: true
last_modified_date: 2023-06-12
redirect_from: /blackout
---

# r/TechSupport has Gone Dark
{: .no_toc }
Last Updated {{page.last_modified_date}}
{: .label }
If you found your way to this page, then r/TechSupport has been set as private. You probably have a lot of questions. We will try our best to answer them all here.

___

{: .info }
> **Live Chat on Discord**
>
> Our Live Chat will be open during the Reddit Blackout Protest. You can join by clicking [here](/discord).

___

{% include toc_numbered.md %}

## What is going on?
On April 8, 2023 [Reddit announced they would begin charging for usage of their API effective June 19, 2023](https://www.reddit.com/r/reddit/comments/12qwagm/an_update_regarding_reddits_api/). In the announcement, Reddit expressed their concern with the "expansive access to data" acquired through their API and how they "have an obligation to [their] communities to be responsible stewards of this content." 

As the moderators of a technical support subreddit, we could not agree more. Currently, data from Reddit is utilized freely to train [Large Language Models (LLM)](https://en.wikipedia.org/wiki/Large_language_model), which are the base for AI technologies such as ChatGPT. As you may imagine, this can become problematic very quickly for a multitude of reasons. However, there are also many benefits to LLMs. Even Reddit's engineers have pointed out [machine learning is very beneficial to Reddit](https://www.redditinc.com/blog/the-benefits-of-machine-learning-to-study-small-dataset-of-social-conversations).

So then what's the big deal? We agree with Reddit for the most part, right? Well, here's where things get tricky: Reddit's changes to their API, with regard to cost and usage, introduced several issues that would drastically change how most users use Reddit. They have stated that their goal is to make these updates with as little disruption as possible. However, if the relevations over the past few days have been any indication, this will not be the case.

Over the years Reddit has picked up the particularly annoying habit of failing to follow through with their promises. From [promises of building new tools for moderators](https://www.reddit.com/r/announcements/comments/3cbo4m/we_apologize/) to [promising to give more visibility when users follow you](https://www.reddit.com/r/announcements/comments/cevm31/update_regarding_user_profile_transparency), Reddit has either, at best, barely followed through with their promise or, at worst, completely missed the mark on what they promised. 

## What does this have to do with third-party reddit applications and why is everyone screaming about them dying because of Reddit?
I'm sure you all have heard of the various third-party mobile applications. To name a few...
- Apollo
- Narwhal
- Joey
- Reddit is Fun
- BaconReader
- Sync
- Relay
- RedReader
- Boost
- Infinity
- Pager
- ReddPlanet
- Slide

Maybe you use one of them daily. Perhaps it is the only way you browse Reddit. Many of them offer insane customization to tailor your Reddit experience to exactly what you want.

These third-party applications (3PAs) rely heavily on Reddit's API. Many of the developers work alone on their applications as a labor of love to the Reddit community. Most only charge a small fee for pro versions of their application. 

To put it simply, Reddit gave developers of these applications very little time to prepare. Most developers learned around the end of May what the cost would be. Considering the changes to cost would go into effect on July 1st, giving approximately 30 days to prepare by optimizing the applications to possibly minimize costs and setting up models for possible subscriptions to help with costs is ridiculous.

And what was Reddit's response? 

In his recent disaster of an AMA when asked [why the timeline of charging for the API was so strict](https://reddit.com/r/reddit/comments/145bram/addressing_the_community_about_changes_to_our_api/jnk280m/), [u/spez](https://reddit.com/user/spez) responded, 
> "[I acknowledge it was a tight timeline. For what it’s worth, we are continuing to chat with many of the developers who still want to work with us](https://reddit.com/r/reddit/comments/145bram/addressing_the_community_about_changes_to_our_api/jnk8m0z/)".

They do not care if they made it difficult for 3PAs. They have no desire to remedy the situation to allow 3PAs to properly prepare nor to lower costs. Unfortunately, this has put several developers in a rough spot. Many have already announced they will be shutting down their applications come June 30th. 

We can go on and on about this, but we are not the developers and cannot give the proper perspective on the issue. So, [we have compiled a list of developers describing the issue from their perspectives](/blackout#3pa-developer-announcements-on-the-situation). We urge you to take the time to read through their posts, once their subreddits are up if they are participating in the blackout. 

If anything, please read through the post made by Apollo's developer, Christian, as he gives a very well thought out and detailed explanation on why he has been forced to shut down Apollo.

## Why are people mentioning that it will harm those that require accessible websites?
There is no way to put this mildly, so we'll just come out with it. Reddit's lack of accessibility on their almost 18 year old website is disgraceful. The fact that they have not implemented anything for accessibility in their official mobile app is inexcusable. Their lack of care towards the concerns raised by the [r/blind](https://www.reddit.com/r/Blind/) moderators and community is disgusting.

[u/spez](https://reddit.com/user/spez) stated in his recent AMA, 
> "[We are working with RedReader and Dystopia to make sure they have access and will continue to work with others. We’ll review requests to ensure that the app is non-commercial and focused on accessibility needs. Approved apps can use the Data API for free. For our own apps, there is no excuse. We will do better](https://reddit.com/r/reddit/comments/145bram/addressing_the_community_about_changes_to_our_api/jnkccq7/)".

Reddit is very aware of how awful their site is for those requiring accessibility. It took outrage from the Reddit community for them to admit they were wrong. And now, as we see from his statement, they are offloading the responsibility to 3PAs, while giving very little guidance on how a 3PA will qualify for free usage of the API.

We will have to keep our fingers crossed that Reddit will follow through with creating a more accessible site as the free API for accessible 3PAs might only be temporary.

We encourage you to please read through [the post by r/blind moderators](https://www.reddit.com/r/Blind/comments/13zr8h2/reddits_recently_announced_api_changes_and_the/) on the issues they face with the possible loss of 3PAs with accessibility features.

## What about NSFW content?
NSFW content is available everywhere on the internet. Reddit has opted to remove NSFW content from being available through their API. We realize it's not easy to see why this could create issues, however this has caused problems in the past. We will be [quoting the points made in the original post from r/ModCoord](https://www.reddit.com/r/ModCoord/comments/13xmmuo/what_is_this_subreddit_what_is_happening_here/) as we feel they said it best:
> - NSFW (18+) content and related subreddits are facing new restrictions, making certain content inaccessible via the API, rendering moderation via automated processes null and void.
- The changes are likely to lead to an increase in spam, necessitating excessive human moderation or resulting in overrun communities, given the significance of mature content as a traffic driver on the platform.
- Besides NSFW communities, these changes also affect diverse spaces like art forums, minor chat rooms, and nudist lifestyle communities, which require oversight of user activities in mature content domains.
- While the stated reasons for these restrictions include legal compliance and enhancing content creator control, we argue that third-party apps could implement similar measures for content display.

## Why would the moderators of a subreddit for tech support care about all of this? How does this affect you?
As moderators we strive to make our subreddit a welcoming, safe, and helpful place for our users. Over the years we have had to supplement our community with external sources maintained by our moderator team and a group of other volunteers. Simply put, Reddit does not offer the resources necessary for us to fully support our community.

[Since 2015 Reddit admins have been promising to build and improve tools for moderators](https://www.reddit.com/r/announcements/comments/3cbo4m/we_apologize/). Though Reddit has made [some improvements over the years](https://reddit.com/r/reddit/comments/107orxe/ringing_in_2023_with_a_2022_reflection_on_mod/), it is far from the features offered by popular moderation tools such as [toolbox](https://reddit.com/r/toolbox/).

Moderators heavily rely on 3PAs to help with everyday moderation. Frankly, it is close to impossible to moderate large subreddits without them. Losing 3PAs for moderation would make it difficult to
- Have a set list of commands to allow any users helping others to link to approved guides
- Identify extremely active, helpful users in the subreddit
- Moderate anything via mobile devices
- Quickly identify posts requiring a question to be answered
- Quickly identify spam

This is a sentiment shared by most, if not all, moderators with subreddits participating in the blackout. Reddit's changes to their API affects everyone. Users and moderators. Developers and their 3PAs. 

On June 6th [we announced we would, along with over 3000 subreddits, go dark starting June 12th](https://www.reddit.com/r/techsupport/comments/142ox2a/rtechsupport_will_be_going_dark_on_june_12_in/) in order to protest against the changes to the API. After [u/spez](https://reddit.com/user/spez)'s AMA on June 9, 2023, we decided to private the subreddit until Reddit makes a concerted effort to reevaluate and reverse their decisions on the API changes.

## Why would you do this to us?
We know this decision affects our users heavily. We understand this may anger some of you. We did not make this decision easily. As we said in our original post on the blackout, we truly believe this is in the best interest of the community.

We want to show Reddit there is power in numbers. Our moderators matter. Our users matter. Our communities matter. We have a voice. Reddit cannot continue to grow without all of us.

We want our users to know they won't be left hanging, however. Though our subreddit will be closed, we will have our live chat open in our [Discord Server](/discord), 24/7, as it always has been. Our wiki will also be available to everyone. We ask our users to please spread the word to others requiring tech support about these resources.

## How can we, the users, help?
Starting June 12th, we ask if everyone can limit or completely stop their use of Reddit until the protest is over. This will help us with our protest. We want to limit traffic to the site as much as possible.

## YOU are important to r/TechSupport and we couldn't do this without YOU
We want to thank you all for supporting our subreddit every day. From the users that volunteer their time to help someone with an issue to the users asking questions for others to find the answer to in the future, we appreciate you all immensely.

-- r/TechSupport Moderators

___

## Participating Subreddits
7047 Subreddits Participating as of 12-06-2023 at 6 UTC
{: .label .label-green }

[Plain Text List](https://www.reddit.com/r/ModCoord/wiki/index/){: .btn .btn-purple .mr-2 }
[Pretty List](https://reddark.untone.uk/){: .btn .btn-green .mr-2 }
[Top Subs](https://save3rdpartyapps.com/){: .btn .btn-blue}

### Live Counter of Subreddits Going Dark, Twitch [reddark_247](https://www.twitch.tv/reddark_247)

<iframe src="https://player.twitch.tv/?channel=reddark_247&parent=rtech.support&muted=true" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620" id="twitch_reddark"></iframe>

___

## Blackout and Reddit API in the Media
April 18, 2023
: - [[Article, English, Paywall] New York Times, By Mike Isaac - Reddit Wants to Get Paid for Helping to Teach Big A.I. Systems](https://www.nytimes.com/2023/04/18/technology/reddit-ai-openai-google.html)

June 1, 2023
: - [[Article, English] CNN Business, By Brian Fung - Reddit sparks outrage after a popular app developer said it wants him to pay $20 million a year for data access](https://edition.cnn.com/2023/06/01/tech/reddit-outrage-data-access-charge/index.html)
: - [[Article, English] IGN, By Ryan Leston - New Reddit API Pricing Strategy Could Mean Big Trouble for Popular Third-Party Apps](https://www.ign.com/articles/new-reddit-api-pricing-strategy-could-mean-big-trouble-for-popular-third-party-apps)
: - [[Article, English] CNBC, By Rohan Goswami - Reddit will charge hefty fees to the many third-party apps that access its data](https://www.cnbc.com/2023/06/01/reddit-eyeing-ipo-charge-millions-in-fees-for-third-party-api-access.html)

June 3, 2023
: - [[Video, English] Youtube, Snazzy Labs - How Reddit Became the Enemy - w/ Apollo Developer Christian Selig](https://www.youtube.com/watch?v=Ypwgu1BpaO0)

June 5, 2023
: - [[Video, English] Youtube, Louis Rossmann - Reddit is killing their brand in the worst possible way](https://www.youtube.com/watch?v=JqL-G3GFqRU)
: - [[Article, English] The Verge, By Jon Porter - Major Reddit communities will go dark to protest threat to third-party apps](https://www.theverge.com/2023/6/5/23749188/reddit-subreddit-private-protest-api-changes-apollo-charges)
: - [[Article, English] Vice Motherboard, By Jason Koebler - Reddit in Mass Revolt Over Astronomical API Fees That Would Kill Third Party Apps](https://www.vice.com/en/article/5d99pn/reddit-api-apollo-app-controversy-explained)
: - [[Article, German] Heise Online - Protest gegen API-Preise: Große Subreddits werden tagelang stillgelegt](https://www.heise.de/news/Protest-gegen-API-Preise-Grosse-Subreddits-werden-tagelang-stillgelegt-9164783.html)
: - [[Article, English] PC Gamer, By Andy Chalk - Major subreddit admins are going to war with Reddit over monetization changes that will kill many third-party apps](https://www.pcgamer.com/major-subreddit-admins-are-going-to-war-with-reddit-over-monetization-changes-that-will-kill-many-third-party-apps/)
: - [[Article, English] ArsTechnica, By Ron Amadeo - Reddit’s plan to kill third-party apps sparks widespread protests](https://arstechnica.com/gadgets/2023/06/reddits-plan-to-kill-third-party-apps-sparks-widespread-protests/?utm_brand=arstechnica&utm_social-type=owned&utm_source=mastodon&utm_medium=social)
: - [[Article, English] The Register, By Brandon Vigiarolo - Reddit blackout planned over app-killing API prices](https://www.theregister.com/2023/06/05/reddit_blackout_planned_over_appkilling/)
: - [[Article, English] Dexerto, By Brad Norton - Why is there a Reddit blackout? June 12 revolt planned amid backlash over API changes](https://www.dexerto.com/tech/reddit-blackout-june-12-revolt-planned-amid-backlash-api-changes-2167318/)

June 6, 2023
: - [[Article, Dutch] Tweakers, By Rard van der Hoeven, Vijf vragen over het protest tegen de geplande api-aanpassingen van Reddit](https://tweakers.net/nieuws/210552/vijf-vragen-over-het-protest-tegen-de-geplande-api-aanpassingen-van-reddit.html)
: - [[Article, English, Paywall] Bloomberg, By Priya Anand - Reddit on New Pricing Plan: Company ‘Needs to Be Fairly Paid’](https://www.bloomberg.com/news/articles/2023-06-06/reddit-on-new-pricing-plan-company-needs-to-be-fairly-paid?leadSource=uverify%20wall#xj4y7vzkg)
: - [[Article, English] Windows Central, By Cole Martin - Top Reddit communities going dark to protest third-party API charges](https://www.windowscentral.com/software-apps/reddit-going-dark-to-protest-third-party-api-charges)
: - [[Article, English] Independent, By Anthony Cuthbertson - Reddit blackout: More than 1,000 subreddits to go dark in protest to new changes](https://www.independent.co.uk/tech/reddit-blackout-date-protest-subreddits-b2352492.html)
: - [[Article, English] Kotaku, By Luke Plunkett - Reddit Communities Are 'Going Dark' To Protest Wildly Unpopular App Changes](https://kotaku.com/reddit-blackout-going-dark-protest-apollo-apps-api-ios-1850512837)
: - [[Article, English] PCMag, By Marco Marcelline - Popular Subreddits Going Dark to Protest Reddit Charging for API Access](https://www.pcmag.com/news/popular-subreddits-going-dark-to-protest-reddit-charging-for-api-access)

June 7, 2023
: - [[Video, English] Youtube, LMG Clips - Reddit Hates Their Users](https://www.youtube.com/watch?v=LEGCHnoEsLM)
: - [[Article, English] SFGATE, By Stephen Council - Reddit announces plan to lay off 90 workers as subreddits plan mass protest](https://www.sfgate.com/tech/article/reddit-layoffs-90-protest-plan-18140277.php)
: - [[Article, English] Techinnowire - Reddit’s New API Pricing: A Boon or Bane for User Experience?](https://www.techinnowire.com/reddit-api-pricing-a-boon-or-bane-for-user-experience/)
: - [[Article, English] Engadget, By Karissa Bell - Reddit says some accessibility apps won’t have to pay for its API](https://www.engadget.com/reddit-says-some-accessibility-apps-wont-have-to-pay-for-its-api-213401412.html)
: - [[Article, English] Adnroid Authority, By C. Scott Brown - https://www.engadget.com/reddit-says-some-accessibility-apps-wont-have-to-pay-for-its-api-213401412.html](https://www.androidauthority.com/reddit-third-party-apps-accessibility-3332934/)
: - [[Article, English] The Verge, By Jay Peters - Reddit will exempt accessibility-focused apps from its unpopular API pricing changes](https://www.theverge.com/2023/6/7/23752804/reddit-exempt-accessibility-apps-api-pricing-changes)

June 8, 2023
: - [[Article, English] TechCrunch, By Sarah Perez - Reddit makes an exception for accessibility apps under new API terms](https://techcrunch.com/2023/06/08/reddit-makes-an-exception-for-accessibility-apps-under-new-api-terms/)
: - [[Article, English] The Verge, By Jay Peters - Apollo for Reddit is shutting down](https://www.theverge.com/2023/6/8/23754183/apollo-reddit-app-shutting-down-api)
: - [[Article, English] MacRumors, By Juli Clover - Popular Reddit App Apollo Shutting Down on June 30](https://www.macrumors.com/2023/06/08/apollo-shutting-down-june-30/)
: - [[Article, English] 9To5Mac, By Zac Hall - Apollo shutting down due to Reddit’s unaffordable API](https://9to5mac.com/2023/06/08/apollo-app-shutting-down/)
: - [[Article, English] Engadget, By Karissa Bell - Reddit CEO will host an AMA on API changes as thousands of subreddits plan to 'go dark'](https://www.engadget.com/reddit-ceo-will-host-an-ama-on-api-changes-as-thousands-of-subreddits-plan-to-go-dark-193423226.html)

June 9, 2023
: - [[Video, English] Youtube, Linus Tech Tips - Ban me, Twitch! - WAN Show June 9, 2023](https://www.youtube.com/watch?v=Rt78MqJDozY&t=5050s)
: - [[Video, English] Youtube, SomeOrdinaryGamers - We Have To Talk About The Reddit Blackout](https://www.youtube.com/watch?v=fBruoybHryU)
: - [[Article, English] Evening Standard, By Saqib Shah - Reddit blackout: Why subreddits are protesting to save third-party apps](https://www.standard.co.uk/tech/reddit-third-party-apps-blackout-movement-b1085610.html)
: - [[Article, German] Heise Online, By Martin Holland - Teure API-Preise bei Reddit: Beliebte Dritt-Anwendung Apollo wird eingestellt](https://www.heise.de/news/Kosten-fuer-Reddit-API-Beliebte-Dritt-Anwendung-Apollo-wird-eingestellt-9181977.html)
: - [[Article, English] TechCrunch, By Sarah Perez - Reddit CEO doubles down on attack on Apollo developer in drama-filled AMA](https://techcrunch.com/2023/06/09/reddit-ceo-doubles-down-on-attack-on-apollo-developer-in-drama-filled-ama/)
: - [[Article, English] BBC, By Tom Gerken - Reddit blackout: Subreddits to go private on Monday](https://www.bbc.com/news/technology-65855608)
: - [[Article, English] Android Authority, By C. Scott Brown - Reddit CEO does AMA, doesn't address or even mention upcoming subreddit protests](https://www.androidauthority.com/reddit-ceo-ama-2023-3333702/)
: - [[Article, English] Tech Monitor, By Ryan Morrison - Reddit apps to shut down over API pricing hike which could see bills hit $20m a year](https://techmonitor.ai/technology/software/reddit-api-blackout-price-hike)
: - [[Article, English] University of Minnesota Twin Cities - Upcoming Reddit blackout and the future of third-party applications](https://twin-cities.umn.edu/news-events/upcoming-reddit-blackout-and-future-third-party-applications)
: - [[Article, English] LifeHacker, By Beth Skwarecki - Why Your Favorite Subreddits Are Going Dark on June 12](https://lifehacker.com/why-your-favorite-subreddits-are-going-dark-on-june-12-1850521188)

June 10, 2023
: - [[Video, English] Youtube, Louis Rossmann - A word on reddit, blackouts, & effective protesting](https://www.youtube.com/watch?v=U06rCBIKM5M)
: - [[Article, English] Wired, By Boone Ashworth - The Reddit App War Is Getting Messy](https://www.wired.com/story/the-reddit-app-war-is-getting-messy/)
: - [[Article, English] Sportskeeda, By Aniket Srivastava - Why are NFL communities joining Reddit blackout? Exploring issues around API changes](https://www.sportskeeda.com/nfl/why-nfl-communities-joining-reddit-blackout-exploring-issues-around-api-changes)
: - [[Article, English] The Scotsman, By Charlotte Hawes - Reddit blackout: Subreddits to be made private in huge protest - here’s why](https://www.scotsman.com/read-this/reddit-blackout-subreddits-to-be-made-private-in-huge-protest-heres-why-4177985)

June 11, 2023
: - [[Video, English] NBC Bay Area - Reddit communities to go dark Monday to protest third-party app changes](https://www.nbcbayarea.com/news/local/reddit-communities-to-go-dark-monday-to-protest-third-party-app-changes/3249862/)
: - [[Article, English] Insider, By Jyoti Mann - Reddit users are planning a 48-hour blackout to protest its new pricing policy](https://www.businessinsider.com/reddit-users-plan-blackout-protest-new-pricing-policy-2023-6)
: - [[Article, English] Yahoo News, By Anna Bernardo - Dota 2, VALORANT, other gaming subreddits to join Reddit Blackout](https://sg.news.yahoo.com/dota-2-valorant-other-gaming-subreddits-to-join-reddit-blackout-061138639.html)
: - [[Article, English] Tech Times, By John Lopez - Gaming Subreddits Join Reddit Blackout Against Drastic API Pricing Hike](https://www.techtimes.com/articles/292488/20230611/gaming-subreddits-join-reddit-blackout-against-drastic-api-pricing-hike.htm)
: - [[Article, English] Mac Rumors, By Joe Rossignol - Apple Subreddit Goes Dark in Protest of Reddit's API Pricing Changes](https://www.macrumors.com/2023/06/11/apple-subreddit-goes-dark/)
: - [[Article, English] Apple Insider, By Malcolm Owen - All the Apple subreddits set to go dark in protest of Reddit's API charges](https://appleinsider.com/articles/23/06/11/apple-subreddits-set-to-go-dark-to-protest-reddit-api-charges)
: - [[Article, English] The Guardian, By Alex Hern - Reddit communities to ‘go dark’ in protest over third-party app charges](https://www.theguardian.com/technology/2023/jun/11/reddit-communities-to-go-dark-in-protest-over-third-party-app-charges)

June 12, 2023
: - [[Article, English] Sky News, By Tom Acres - Reddit blackout: Thousands of communities are doing dark today - here's why](https://news.sky.com/story/reddit-blackout-thousands-of-communities-are-doing-dark-today-heres-why-12899280)
: - [[Article, English] Aljazeera, By Mohammed Haddad - Why are thousands of Reddit pages going dark for 48 hours?](https://www.aljazeera.com/news/2023/6/12/why-are-thousands-of-reddit-pages-going-dark-for-48-hours)
: - [[Article, English, Paywall] Bloomberg, By Alex Millson - Reddit Blackout Begins as Forums Protest Charges for Developers](https://www.bloomberg.com/news/articles/2023-06-12/why-are-reddit-pages-private-subreddits-go-dark-to-protest-third-party-charges?leadSource=uverify%20wall#xj4y7vzkg)
: - [[Article, English] Independent, By Anthony Cuthbertson, Vishwam Sankaran - Reddit blackout: More than 3,000 subreddits to go dark in protest to new changes](https://www.independent.co.uk/tech/reddit-blackout-date-protest-subreddits-b2352492.html)
: - [[Article, English] Insider, By Lina Batarags - Reddit users are going on a 48-hour blackout. Here are the biggest subreddits that won't be available during this time.](https://www.businessinsider.com/biggest-subreddits-affected-by-48-hour-blackout-list-private-2023-6)
: - [[Article, Japanese] Soft Antenna - Redditの大規模ストライキが始まる。API利用料金の大幅値上げに多くのユーザーが反発](https://softantenna.com/blog/reddit-blackout/)

___

## Resources and Further Reading
### From Reddit
- [An Update Regarding Reddit's API](https://www.reddit.com/r/reddit/comments/12qwagm/an_update_regarding_reddits_api/)
- [Addressing the community about changes to our API](https://www.reddit.com/r/reddit/comments/145bram/addressing_the_community_about_changes_to_our_api/)
- [Data API Terms](https://www.redditinc.com/policies/data-api-terms)
- [Developer Terms](https://www.redditinc.com/policies/developer-terms)

### Official Protest Subreddits
- [r/Save3rdPartyApps](https://www.reddit.com/r/Save3rdPartyApps)
  - [What We Want](https://www.reddit.com/r/Save3rdPartyApps/comments/13yh2te/what_we_want/)
  - [Don't Let Reddit Kill 3rd Party Apps!](https://www.reddit.com/r/Save3rdPartyApps/comments/13yh0jf/dont_let_reddit_kill_3rd_party_apps/)
  - [Reddit is killing 3rd-party Apps (infographic)](https://preview.redd.it/91zby5ht044b1.jpg?width=1116&format=pjpg&auto=webp&v=enabled&s=746417bbd904506fc8c7b9c702c16b7fbb47bf06)
- [r/ModCoord](https://www.reddit.com/r/ModCoord)
  - [What is this subreddit? What is happening here?](https://www.reddit.com/r/ModCoord/comments/13xmmuo/what_is_this_subreddit_what_is_happening_here/)
  - [An open letter on the state of affairs regarding the API pricing and third party apps and how that will impact moderators and communities.](https://www.reddit.com/r/ModCoord/comments/13xh1e7/an_open_letter_on_the_state_of_affairs_regarding/)
  - [These API changes are spreading the cracks in our already overtaxed community teams](https://www.reddit.com/r/ModCoord/comments/142z08m/these_api_changes_are_spreading_the_cracks_in_our/)
  - [Reddit held a call today with some developers regarding the API changes. Here are some thoughts along with the call notes.](https://www.reddit.com/r/ModCoord/comments/143rk5p/reddit_held_a_call_today_with_some_developers/)
  - [CEO spez AMA Overview](https://www.reddit.com/r/ModCoord/comments/145bzus/ceo_spez_ama_overview/)
  - [Today's AMA With Spez Did Nothing to Alleviate Concerns: An Open Response](https://www.reddit.com/r/ModCoord/comments/145l7wp/todays_ama_with_spez_did_nothing_to_alleviate/)
  - [Reddit Blackout 2023 - Save 3rd Party Apps](https://www.reddit.com/r/ModCoord/comments/1476fkn/reddit_blackout_2023_save_3rd_party_apps/)

### Thoughts from Other Subreddit Moderators
- [AskHistorians and uncertainty surrounding the future of API access](https://www.reddit.com/r/AskHistorians/comments/142w159/askhistorians_and_uncertainty_surrounding_the/)
- [The future of /r/videos.](https://www.reddit.com/r/videos/comments/145vns0/the_future_of_rvideos/)

### 3PA Developer Announcements on the Situation
- [Apollo](https://www.reddit.com/r/apolloapp/comments/144f6xm/apollo_will_close_down_on_june_30th_reddits/)
- [Sync](https://www.reddit.com/r/redditsync/comments/144jp3w/sync_will_shut_down_on_june_30_2023/)
- [Reddit is Fun](https://www.reddit.com/r/redditisfun/comments/144gmfq/rif_will_shut_down_on_june_30_2023_in_response_to/)
- [Narwhal](https://www.reddit.com/r/getnarwhal/comments/144pdom/update_on_narwhal_w_the_upcoming_reddit_api/)
- [RedReader](https://www.reddit.com/r/RedReader/comments/145du4j/update_4_redreader_granted_noncommercial/)
- [Boost (A small response to a question)](https://www.reddit.com/r/BoostForReddit/comments/145cdmg/comment/jnmvllu)
- [ReddPlanet](https://www.reddit.com/r/ReddPlanet/comments/145pf4e/reddit_finally_responded_to_me_unfortunately/)
- [Pager](https://www.reddit.com/r/pager/comments/144hc20/pager_will_shutdown_on_june_30th_the_api_changes/)
- [Slide](https://www.reddit.com/r/slideforreddit/comments/141rpcf/slide_will_be_dead_in_the_water_in_less_than_four/)
