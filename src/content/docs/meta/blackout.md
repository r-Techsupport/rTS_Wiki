---
title: Blackout
sidebar:
    hidden: true
pagefind: false
---


{: .no_toc }
Last Updated {{page.last_modified_date}}
{: .label }
If you found your way to this page, then r/TechSupport WAS AT SOME POINT set as private. You probably have a lot of questions. We will try our best to answer them all here.

___

> [!NOTE] Live Chat on Discord
>
> Our Live Chat is still open! You can join by clicking [here](/discord).

___

{% include toc_numbered.md %}

## What is going on?
On April 8, 2023 [Reddit announced they would begin charging for usage of their API effective June 19, 2023](https://www.reddit.com/r/reddit/comments/12qwagm/an_update_regarding_reddits_api/). In the announcement, Reddit expressed their concern with the "expansive access to data" acquired through their API and how they "have an obligation to [their] communities to be responsible stewards of this content." 

As the moderators of a technical support subreddit, we could not agree more. Currently, data from Reddit is utilized freely to train [Large Language Models (LLM)](https://en.wikipedia.org/wiki/Large_language_model), which are the base for AI technologies such as ChatGPT. As you may imagine, this can become problematic very quickly for a multitude of reasons. However, there are also many benefits to LLMs. Even Reddit's engineers have pointed out [machine learning is very beneficial to Reddit](https://www.redditinc.com/blog/the-benefits-of-machine-learning-to-study-small-dataset-of-social-conversations).

So then what's the big deal? We agree with Reddit for the most part, right? Well, here's where things get tricky: Reddit's changes to their API, with regard to cost and usage, introduced several issues that would drastically change how most users use Reddit. They have stated that their goal is to make these updates with as little disruption as possible. However, if the revelations over the past few days have been any indication, this will not be the case.

Over the years Reddit has picked up the particularly annoying habit of failing to follow through with their promises. From [promises of building new tools for moderators](https://www.reddit.com/r/announcements/comments/3cbo4m/we_apologize/) to [promising to give more visibility when users follow you](https://www.reddit.com/r/announcements/comments/cevm31/update_regarding_user_profile_transparency), Reddit has either, at best, barely followed through with their promise or, at worst, completely missed the mark on what they promised. 

## What does this have to do with third-party Reddit applications and why is everyone screaming about them dying because of Reddit?
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

We encourage you to please read through [the post by r/blind moderators](https://www.reddit.com/r/Blind/comments/13zr8h2/reddits_recently_announced_api_changes_and_the/) on the issues they face with the loss of 3PAs with accessibility features, as well as [this recent update from the r/blind moderators](https://www.reddit.com/r/Blind/comments/14nzwkm/they_finally_did_it_reddit_made_it_impossible_for/) where, despite reddit's promise to work with them for accessibility features, Reddit instead made it impossible for moderation teams needing accessibility options to moderate their own subreddits.

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

___

## YOU are important to r/TechSupport and we couldn't do this without YOU
We want to thank you all for supporting our subreddit every day. From the users that volunteer their time to help someone with an issue to the users asking questions for others to find the answer to in the future, we appreciate you all immensely.

-- r/TechSupport Moderators

<blockquote class="twitter-tweet" data-dnt="true" data-theme="dark"><p lang="en" dir="ltr">well im fresh out of ideas <a href="https://t.co/plKChB8J8D">pic.twitter.com/plKChB8J8D</a></p>&mdash; Linus Tech Tips (@LinusTech) <a href="https://twitter.com/LinusTech/status/1668732524162416653?ref_src=twsrc%5Etfw">June 13, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

___

## Participating Subreddits

[Plain Text List](https://www.reddit.com/r/ModCoord/wiki/index/){: .btn .btn-purple .mt-2 .mr-2 }
[Pretty List](https://reddark.untone.uk/){: .btn .btn-green .mt-2 .mr-2 }
[Top Subs](https://save3rdpartyapps.com/){: .btn .mt-2 .btn-blue}

### Live Counter of Subreddits Going Dark, Twitch [reddark_247](https://www.twitch.tv/reddark_247)

<iframe src="https://player.twitch.tv/?channel=reddark_247&parent=rtech.support&muted=true" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620" id="twitch_reddark"></iframe>

___

## Protest Information

[r/ModCoord](https://www.reddit.com/r/ModCoord){: .btn .btn-blue .mt-2 .mr-2 }
[r/Save3rdPartyApps](https://www.reddit.com/r/Save3rdPartyApps){: .btn .btn-purple .mt-2}

### Announcements

{: .mb-4 .mt-3 .ml-3 }

<details markdown="block">

  <summary>June 1, 2023</summary>

{: .ml-5 .mb-2 }

  <div markdown="block">
  r/ModCoord
  {: .label .mr-0 .ml-0 }

  Official
  {: .label .label-green .mr-0 .ml-0 }

  [What is this subreddit? What is happening here?](https://www.reddit.com/r/ModCoord/comments/13xmmuo/what_is_this_subreddit_what_is_happening_here/)
  {: .d-inline }
  </div>

{: .ml-5 }

  <div markdown="block">
  r/ModCoord
  {: .label .mr-0 .ml-0 }

  Official
  {: .label .label-green .mr-0 .ml-0 }

  [An open letter on the state of affairs regarding the API pricing and third party apps and how that will impact moderators and communities.](https://www.reddit.com/r/ModCoord/comments/13xh1e7/an_open_letter_on_the_state_of_affairs_regarding/)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 2, 2023</summary>

{: .ml-5 .mb-2 }

  <div markdown="block">
  r/Save3rdPartyApps
  {: .label .label-purple .mr-0 .ml-0 }

  Official
  {: .label .label-green .mr-0 .ml-0 }

  [What We Want](https://www.reddit.com/r/Save3rdPartyApps/comments/13yh2te/what_we_want/)
  {: .d-inline }
  </div>
  
{: .ml-5 }

  <div markdown="block">
  r/Save3rdPartyApps
  {: .label .label-purple .mr-0 .ml-0 }

  Official
  {: .label .label-green .mr-0 .ml-0 }

  [Don't Let Reddit Kill 3rd Party Apps!](https://www.reddit.com/r/Save3rdPartyApps/comments/13yh0jf/dont_let_reddit_kill_3rd_party_apps/)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 6, 2023</summary>

{: .ml-5 }

  <div markdown="block">
  r/ModCoord
  {: .label .mr-0 .ml-0 }

  Official
  {: .label .label-green .mr-0 .ml-0 }

  [These API changes are spreading the cracks in our already overtaxed community teams](https://www.reddit.com/r/ModCoord/comments/142z08m/these_api_changes_are_spreading_the_cracks_in_our/)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 7, 2023</summary>

{: .ml-5 }

  <div markdown="block">
  r/ModCoord
  {: .label .mr-0 .ml-0 }

  Official
  {: .label .label-green .mr-0 .ml-0 }

  [Reddit held a call today with some developers regarding the API changes. Here are some thoughts along with the call notes.](https://www.reddit.com/r/ModCoord/comments/143rk5p/reddit_held_a_call_today_with_some_developers/)
  {: .d-inline }
  </div>
  
</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 9, 2023</summary>

{: .ml-5 .mb-2 }

  <div markdown="block">
  r/ModCoord
  {: .label .mr-0 .ml-0 }

  Official
  {: .label .label-green .mr-0 .ml-0 }

  [Today's AMA With Spez Did Nothing to Alleviate Concerns: An Open Response](https://www.reddit.com/r/ModCoord/comments/145l7wp/todays_ama_with_spez_did_nothing_to_alleviate/)
  {: .d-inline }
  </div>

{: .ml-5 }

  <div markdown="block">
  r/ModCoord
  {: .label .mr-0 .ml-0 }

  [CEO spez AMA Overview](https://www.reddit.com/r/ModCoord/comments/145bzus/ceo_spez_ama_overview/)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 11, 2023</summary>

{: .ml-5 .mb-2 }

  <div markdown="block">
  r/ModCoord
  {: .label .mr-0 .ml-0 }

  Official
  {: .label .label-green .mr-0 .ml-0 }

  [Reddit Blackout 2023 - Save 3rd Party Apps](https://www.reddit.com/r/ModCoord/comments/1476fkn/reddit_blackout_2023_save_3rd_party_apps/)
  {: .d-inline }
  </div>

{: .ml-5 }

  <div markdown="block">
  r/Save3rdPartyApps
  {: .label .label-purple .mr-0 .ml-0 }

  Official
  {: .label .label-green .mr-0 .ml-0 }

  [Reddit Blackout 2023 - Save 3rd Party Apps!](https://www.reddit.com/r/Save3rdPartyApps/comments/1476ioa/reddit_blackout_2023_save_3rd_party_apps/)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 13, 2023</summary>

{: .ml-5 .mb-2 }

  <div markdown="block">
  r/ModCoord
  {: .label .mr-0 .ml-0 }

  Official
  {: .label .label-green .mr-0 .ml-0 }

  [Indefinite Blackout: Next Steps, Polling Your Community, and Where We Go From Here](https://www.reddit.com/r/ModCoord/comments/148ks6u/indefinite_blackout_next_steps_polling_your/)
  {: .d-inline }
  </div>

{: .ml-5 }

  <div markdown="block">
  r/Save3rdPartyApps
  {: .label .label-purple .mr-0 .ml-0 }

  Official
  {: .label .label-green .mr-0 .ml-0 }

  [The Fight Continues](https://reddit.com/r/Save3rdPartyApps/comments/148m42t/the_fight_continues/)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 15, 2023</summary>

{: .ml-5 }

  <div markdown="block">
  r/ModCoord
  {: .label .mr-0 .ml-0 }

  Official
  {: .label .label-green .mr-0 .ml-0 }

  [Mods will be removed one way or another: Spez responds to the API Protest Blackout.](https://www.reddit.com/r/ModCoord/comments/14ahqjo/mods_will_be_removed_one_way_or_another_spez/)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 16, 2023</summary>

{: .ml-5 }

  <div markdown="block">
  r/Save3rdPartyApps
  {: .label .label-purple .mr-0 .ml-0 }

  Official
  {: .label .label-green .mr-0 .ml-0 }

  [Reddit protest and the next steps](https://www.reddit.com/r/Save3rdPartyApps/comments/14b8i62/reddit_protest_and_the_next_steps/)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 17, 2023</summary>

{: .ml-5 }

  <div markdown="block">
  r/ModCoord
  {: .label .mr-0 .ml-0 }

  Official
  {: .label .label-green .mr-0 .ml-0 }

  [Moderators Voice Concerns Over Reddit’s Threatening Behavior](https://www.reddit.com/r/ModCoord/comments/14bwfai/moderators_voice_concerns_over_reddits/)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 18, 2023</summary>

{: .ml-5 }

  <div markdown="block">
  r/ModCoord
  {: .label .mr-0 .ml-0 }

  Official
  {: .label .label-green .mr-0 .ml-0 }

  [Alternative forms of protest, in light of admin retaliations](https://www.reddit.com/r/ModCoord/comments/14cr2is/alternative_forms_of_protest_in_light_of_admin/)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 19, 2023</summary>

{: .ml-5 }

  <div markdown="block">
  r/apolloapp
  {: .label .label-yellow .mr-0 .ml-0 }

  [I want to debunk Reddit's claims, and talk about their unwillingness to work with developers, moderators, and the larger community, as well as say thank you for all the support](https://www.reddit.com/r/apolloapp/comments/14dkqrw/i_want_to_debunk_reddits_claims_and_talk_about/)
  {: .d-inline }
  </div>

</details>

___

## Blackout and Reddit API in the Media

{: .mb-4 .mt-3 .ml-3 }

<details markdown="block">

  <summary>April 18, 2023</summary>

{: .ml-5 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  Paywall
  {: .label .label-yellow .mr-0 .ml-0 }

  [The New York Times, By Mike Isaac - Reddit Wants to Get Paid for Helping to Teach Big A.I. Systems](https://www.nytimes.com/2023/04/18/technology/reddit-ai-openai-google.html)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 1, 2023</summary>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [CNN Business, By Brian Fung - Reddit sparks outrage after a popular app developer said it wants him to pay $20 million a year for data access](https://edition.cnn.com/2023/06/01/tech/reddit-outrage-data-access-charge/index.html)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [IGN, By Ryan Leston - New Reddit API Pricing Strategy Could Mean Big Trouble for Popular Third-Party Apps](https://www.ign.com/articles/new-reddit-api-pricing-strategy-could-mean-big-trouble-for-popular-third-party-apps)
  {: .d-inline }
  </div>

{: .ml-5 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [CNBC, By Rohan Goswami - Reddit will charge hefty fees to the many third-party apps that access its data](https://www.cnbc.com/2023/06/01/reddit-eyeing-ipo-charge-millions-in-fees-for-third-party-api-access.html)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 3, 2023</summary>

{: .ml-5 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Youtube, Snazzy Labs - How Reddit Became the Enemy - w/ Apollo Developer Christian Selig](https://www.youtube.com/watch?v=Ypwgu1BpaO0)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 5, 2023</summary>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Youtube, Louis Rossmann - Reddit is killing their brand in the worst possible way](https://www.youtube.com/watch?v=JqL-G3GFqRU)
  {: .d-inline }
  </div>
  
{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [The Verge, By Jon Porter - Major Reddit communities will go dark to protest threat to third-party apps](https://www.theverge.com/2023/6/5/23749188/reddit-subreddit-private-protest-api-changes-apollo-charges)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Vice Motherboard, By Jason Koebler - Reddit in Mass Revolt Over Astronomical API Fees That Would Kill Third Party Apps](https://www.vice.com/en/article/5d99pn/reddit-api-apollo-app-controversy-explained)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  German
  {: .label .label-green .mr-0 .ml-0 }

  [Heise Online - Protest gegen API-Preise: Große Subreddits werden tagelang stillgelegt](https://www.heise.de/news/Protest-gegen-API-Preise-Grosse-Subreddits-werden-tagelang-stillgelegt-9164783.html)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [PC Gamer, By Andy Chalk - Major subreddit admins are going to war with Reddit over monetization changes that will kill many third-party apps](https://www.pcgamer.com/major-subreddit-admins-are-going-to-war-with-reddit-over-monetization-changes-that-will-kill-many-third-party-apps/)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Ars Technica, By Ron Amadeo - Reddit’s plan to kill third-party apps sparks widespread protests](https://arstechnica.com/gadgets/2023/06/reddits-plan-to-kill-third-party-apps-sparks-widespread-protests/?utm_brand=arstechnica&utm_social-type=owned&utm_source=mastodon&utm_medium=social)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [The Register, By Brandon Vigiarolo - Reddit blackout planned over app-killing API prices](https://www.theregister.com/2023/06/05/reddit_blackout_planned_over_appkilling/)
  {: .d-inline }
  </div>

{: .ml-5 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Dexerto, By Brad Norton - Why is there a Reddit blackout? June 12 revolt planned amid backlash over API changes](https://www.dexerto.com/tech/reddit-blackout-june-12-revolt-planned-amid-backlash-api-changes-2167318/)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 6, 2023</summary>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  Dutch
  {: .label .label-green .mr-0 .ml-0 }

  [Tweakers, By Rard van der Hoeven, Vijf vragen over het protest tegen de geplande api-aanpassingen van Reddit](https://tweakers.net/nieuws/210552/vijf-vragen-over-het-protest-tegen-de-geplande-api-aanpassingen-van-reddit.html)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  Paywall
  {: .label .label-yellow .mr-0 .ml-0 }

  [Bloomberg, By Priya Anand - Reddit on New Pricing Plan: Company ‘Needs to Be Fairly Paid’](https://www.bloomberg.com/news/articles/2023-06-06/reddit-on-new-pricing-plan-company-needs-to-be-fairly-paid?leadSource=uverify%20wall#xj4y7vzkg)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Windows Central, By Cole Martin - Top Reddit communities going dark to protest third-party API charges](https://www.windowscentral.com/software-apps/reddit-going-dark-to-protest-third-party-api-charges)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [The Independent, By Anthony Cuthbertson - Reddit blackout: More than 1,000 subreddits to go dark in protest to new changes](https://www.independent.co.uk/tech/reddit-blackout-date-protest-subreddits-b2352492.html)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Kotaku, By Luke Plunkett - Reddit Communities Are 'Going Dark' To Protest Wildly Unpopular App Changes](https://kotaku.com/reddit-blackout-going-dark-protest-apollo-apps-api-ios-1850512837)
  {: .d-inline }
  </div>

{: .ml-5 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [PCMag, By Marco Marcelline - Popular Subreddits Going Dark to Protest Reddit Charging for API Access](https://www.pcmag.com/news/popular-subreddits-going-dark-to-protest-reddit-charging-for-api-access)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 7, 2023</summary>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Youtube, LMG Clips - Reddit Hates Their Users](https://www.youtube.com/watch?v=LEGCHnoEsLM)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [SFGATE, By Stephen Council - Reddit announces plan to lay off 90 workers as subreddits plan mass protest](https://www.sfgate.com/tech/article/reddit-layoffs-90-protest-plan-18140277.php)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Techinnowire - Reddit’s New API Pricing: A Boon or Bane for User Experience?](https://www.techinnowire.com/reddit-api-pricing-a-boon-or-bane-for-user-experience/)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Engadget, By Karissa Bell - Reddit says some accessibility apps won’t have to pay for its API](https://www.engadget.com/reddit-says-some-accessibility-apps-wont-have-to-pay-for-its-api-213401412.html)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Adnroid Authority, By C. Scott Brown - https://www.engadget.com/reddit-says-some-accessibility-apps-wont-have-to-pay-for-its-api-213401412.html](https://www.androidauthority.com/reddit-third-party-apps-accessibility-3332934/)
  {: .d-inline }
  </div>

{: .ml-5 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [The Verge, By Jay Peters - Reddit will exempt accessibility-focused apps from its unpopular API pricing changes](https://www.theverge.com/2023/6/7/23752804/reddit-exempt-accessibility-apps-api-pricing-changes)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 8, 2023</summary>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [TechCrunch, By Sarah Perez - Reddit makes an exception for accessibility apps under new API terms](https://techcrunch.com/2023/06/08/reddit-makes-an-exception-for-accessibility-apps-under-new-api-terms/)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [The Verge, By Jay Peters - Apollo for Reddit is shutting down](https://www.theverge.com/2023/6/8/23754183/apollo-reddit-app-shutting-down-api)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [MacRumors, By Juli Clover - Popular Reddit App Apollo Shutting Down on June 30](https://www.macrumors.com/2023/06/08/apollo-shutting-down-june-30/)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [9To5Mac, By Zac Hall - Apollo shutting down due to Reddit’s unaffordable API](https://9to5mac.com/2023/06/08/apollo-app-shutting-down/)
  {: .d-inline }
  </div>

{: .ml-5 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Engadget, By Karissa Bell - Reddit CEO will host an AMA on API changes as thousands of subreddits plan to 'go dark'](https://www.engadget.com/reddit-ceo-will-host-an-ama-on-api-changes-as-thousands-of-subreddits-plan-to-go-dark-193423226.html)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 9, 2023</summary>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Youtube, Linus Tech Tips - Ban me, Twitch! - WAN Show June 9, 2023](https://www.youtube.com/watch?v=Rt78MqJDozY&t=5050s)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Youtube, SomeOrdinaryGamers - We Have To Talk About The Reddit Blackout](https://www.youtube.com/watch?v=fBruoybHryU)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Evening Standard, By Saqib Shah - Reddit blackout: Why subreddits are protesting to save third-party apps](https://www.standard.co.uk/tech/reddit-third-party-apps-blackout-movement-b1085610.html)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  German
  {: .label .label-green .mr-0 .ml-0 }

  [Heise Online, By Martin Holland - Teure API-Preise bei Reddit: Beliebte Dritt-Anwendung Apollo wird eingestellt](https://www.heise.de/news/Kosten-fuer-Reddit-API-Beliebte-Dritt-Anwendung-Apollo-wird-eingestellt-9181977.html)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [TechCrunch, By Sarah Perez - Reddit CEO doubles down on attack on Apollo developer in drama-filled AMA](https://techcrunch.com/2023/06/09/reddit-ceo-doubles-down-on-attack-on-apollo-developer-in-drama-filled-ama/)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [BBC, By Tom Gerken - Reddit blackout: Subreddits to go private on Monday](https://www.bbc.com/news/technology-65855608)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Android Authority, By C. Scott Brown - Reddit CEO does AMA, doesn't address or even mention upcoming subreddit protests](https://www.androidauthority.com/reddit-ceo-ama-2023-3333702/)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Tech Monitor, By Ryan Morrison - Reddit apps to shut down over API pricing hike which could see bills hit $20m a year](https://techmonitor.ai/technology/software/reddit-api-blackout-price-hike)  
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [University of Minnesota Twin Cities - Upcoming Reddit blackout and the future of third-party applications](https://twin-cities.umn.edu/news-events/upcoming-reddit-blackout-and-future-third-party-applications)
  {: .d-inline }
  </div>

{: .ml-5 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [LifeHacker, By Beth Skwarecki - Why Your Favorite Subreddits Are Going Dark on June 12](https://lifehacker.com/why-your-favorite-subreddits-are-going-dark-on-june-12-1850521188)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 10, 2023</summary>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Youtube, Louis Rossmann - A word on reddit, blackouts, & effective protesting](https://www.youtube.com/watch?v=U06rCBIKM5M)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Wired, By Boone Ashworth - The Reddit App War Is Getting Messy](https://www.wired.com/story/the-reddit-app-war-is-getting-messy/)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Sportskeeda, By Aniket Srivastava - Why are NFL communities joining Reddit blackout? Exploring issues around API changes](https://www.sportskeeda.com/nfl/why-nfl-communities-joining-reddit-blackout-exploring-issues-around-api-changes)
  {: .d-inline }
  </div>

{: .ml-5 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [The Scotsman, By Charlotte Hawes - Reddit blackout: Subreddits to be made private in huge protest - here’s why](https://www.scotsman.com/read-this/reddit-blackout-subreddits-to-be-made-private-in-huge-protest-heres-why-4177985)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 11, 2023</summary>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [NBC Bay Area - Reddit communities to go dark Monday to protest third-party app changes](https://www.nbcbayarea.com/news/local/reddit-communities-to-go-dark-monday-to-protest-third-party-app-changes/3249862/)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Insider, By Jyoti Mann - Reddit users are planning a 48-hour blackout to protest its new pricing policy](https://www.businessinsider.com/reddit-users-plan-blackout-protest-new-pricing-policy-2023-6)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Yahoo News, By Anna Bernardo - Dota 2, VALORANT, other gaming subreddits to join Reddit Blackout](https://sg.news.yahoo.com/dota-2-valorant-other-gaming-subreddits-to-join-reddit-blackout-061138639.html)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Tech Times, By John Lopez - Gaming Subreddits Join Reddit Blackout Against Drastic API Pricing Hike](https://www.techtimes.com/articles/292488/20230611/gaming-subreddits-join-reddit-blackout-against-drastic-api-pricing-hike.htm)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Mac Rumors, By Joe Rossignol - Apple Subreddit Goes Dark in Protest of Reddit's API Pricing Changes](https://www.macrumors.com/2023/06/11/apple-subreddit-goes-dark/)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Apple Insider, By Malcolm Owen - All the Apple subreddits set to go dark in protest of Reddit's API charges](https://appleinsider.com/articles/23/06/11/apple-subreddits-set-to-go-dark-to-protest-reddit-api-charges)
  {: .d-inline }
  </div>

{: .ml-5 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [The Guardian, By Alex Hern - Reddit communities to ‘go dark’ in protest over third-party app charges](https://www.theguardian.com/technology/2023/jun/11/reddit-communities-to-go-dark-in-protest-over-third-party-app-charges)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 12, 2023</summary>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Youtube, penguinz0 - The Death of Reddit](https://www.youtube.com/watch?v=-xGqqR_ewLo)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Youtube, Philip DeFranco - This Pride Controversy Has Gotten Out of Control, Reddit Blackout, & Cracker Barrel Has Fallen…](https://youtu.be/IlqB6zfEAFU?t=547)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Youtube, Fireship - Reddit's API rug pull](https://www.youtube.com/watch?v=Ch6zNEq9fwM)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Washington Post, By Shera Avi-Yonah, Annabelle Timsit - Why have many Reddit communities gone private? The blackout, explained.](https://www.washingtonpost.com/technology/2023/06/12/reddit-blackout-begins/)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Sky News, By Tom Acres - Reddit blackout: Thousands of communities are doing dark today - here's why](https://news.sky.com/story/reddit-blackout-thousands-of-communities-are-doing-dark-today-heres-why-12899280)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Aljazeera, By Mohammed Haddad - Why are thousands of Reddit pages going dark for 48 hours?](https://www.aljazeera.com/news/2023/6/12/why-are-thousands-of-reddit-pages-going-dark-for-48-hours)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  Paywall
  {: .label .label-yellow .mr-0 .ml-0 }

  [Bloomberg, By Alex Millson - Reddit Blackout Begins as Forums Protest Charges for Developers](https://www.bloomberg.com/news/articles/2023-06-12/why-are-reddit-pages-private-subreddits-go-dark-to-protest-third-party-charges?leadSource=uverify%20wall#xj4y7vzkg)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Independent, By Anthony Cuthbertson, Vishwam Sankaran - Reddit blackout: More than 3,000 subreddits to go dark in protest to new changes](https://www.independent.co.uk/tech/reddit-blackout-date-protest-subreddits-b2352492.html)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Business Insider, By Lina Batarags - Reddit users are going on a 48-hour blackout. Here are the biggest subreddits that won't be available during this time.](https://www.businessinsider.com/biggest-subreddits-affected-by-48-hour-blackout-list-private-2023-6)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  Japanese
  {: .label .label-green .mr-0 .ml-0 }

  [Soft Antenna - Redditの大規模ストライキが始まる。API利用料金の大幅値上げに多くのユーザーが反発](https://softantenna.com/blog/reddit-blackout/)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  Paywall
  {: .label .label-yellow .mr-0 .ml-0 }

  [Los Angeles Times, By Helen Li - Thousands of Reddit communities go dark to protest new data fees](https://www.latimes.com/business/story/2023-06-12/subreddits-go-dark-as-users-protest-reddits-new-developer-fees)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Reuters - Explainer: Reddit protest: Why are thousands of subreddits going dark?](https://www.reuters.com/technology/reddit-protest-why-are-thousands-subreddits-going-dark-2023-06-12/)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Yahoo Finance, By Karissa Bell - Reddit sees more than 6,000 communities 'go dark' in protest over API changes](https://finance.yahoo.com/news/reddit-sees-more-than-6000-communities-go-dark-in-protest-over-api-changes-095311637.html)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [NBC News, By David Ingram - Reddit communities go private to protest pricing plan for apps](https://www.nbcnews.com/tech/social-media/reddit-private-subreddit-blackout-protest-message-rcna88457)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Ars Technica, By Scharon Harding - API pricing protests caused Reddit to crash for 3 hours](https://arstechnica.com/gadgets/2023/06/api-pricing-protests-caused-reddit-to-crash-for-3-hours/)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  Paywall
  {: .label .label-yellow .mr-0 .ml-0 }

  [The New York Times, By Michael Levenson - Reddit Communities Go Dark to Protest New App Policy](https://www.nytimes.com/2023/06/12/business/media/reddit-subreddit-blackout-protest.html)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Android Police, By Manuel Vonau - Reddit blackout explained: Why subreddits have gone dark](https://www.androidpolice.com/reddit-blackout-why-subreddits-dark/)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [CBC, By Aloysius Wong - What's going on with Reddit today?](https://www.cbc.ca/news/business/reddit-blackout-1.6873756)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  Portuguese
  {: .label .label-green .mr-0 .ml-0 }

  [Expresso 50, By Hugo Séneca - Mais de 6500 grupos de debate do Reddit estão em greve. Será que o Reddit cede?](https://expresso.pt/sociedade/tecnologia/2023-06-12-Mais-de-6500-grupos-de-debate-do-Reddit-estao-em-greve.-Sera-que-o-Reddit-cede--60805545)
  {: .d-inline }
  </div>

{: .ml-5 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [PCMag, By Michael Kan - Quiet Day on Reddit: Major Subreddits Go Dark to Protest API Changes](https://www.pcmag.com/news/quiet-day-on-reddit-major-subreddits-go-dark-to-protest-api-changes)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 13, 2023</summary>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Youtube, PBS NewsHour - Reddit users go dark in protest of policy that could shut out third-party apps](https://www.youtube.com/watch?v=8E2o1zhy0fU)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Youtube, Moon - Why Reddit is Collapsing: The Coming Reddit Crisis](https://www.youtube.com/watch?v=zL0yFvkLMQc)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [NPR, By Bobby Allyn - Online messaging boards are protesting Reddit's controversial new fees](https://www.npr.org/2023/06/13/1181868228/online-messaging-boards-are-protesting-reddits-controversial-new-fees)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Electronic Frontier Foundation (EFF), By Rory Mir - What Reddit Got Wrong](https://www.eff.org/deeplinks/2023/06/what-reddit-got-wrong)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [The Verge, By David Pierce and Nilay Patel - Apollo’s Christian Selig explains his fight with Reddit — and why users revolted](https://www.theverge.com/2023/6/13/23759180/reddit-protest-private-apollo-christian-selig-subreddit)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [The Verge, By Casey Newton - How Reddit set itself up for a fall](https://www.theverge.com/2023/6/13/23759130/reddit-protests-history-community-growth-moderation)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [The Verge, By Jay Peters - Reddit communities with millions of followers plan to extend the blackout indefinitely](https://www.theverge.com/2023/6/13/23759674/reddit-mods-blackout-protest-extended-indefinitely)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [The Verge, By Mia Sato and Jay Peters - Reddit CEO tells employees that subreddit blackout ‘will pass’](https://www.theverge.com/2023/6/13/23759559/reddit-internal-memo-api-pricing-changes-steve-huffman)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Android Authority, By C. Scott Brown - r/Android gives statement: It will extend its shutdown, but not indefinitely](https://www.androidauthority.com/r-android-shutdown-3334877/)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Youtube, SomeOrdinaryGamers - The Reddit Blackout Got Worse...](https://www.youtube.com/watch?v=1BLMq0o7n-E)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Lifehacker, By Pranay Parab - Three Things You Should Do Before Deleting Your Reddit Account](https://lifehacker.com/three-things-you-should-do-before-deleting-your-reddit-1850534879)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [We Got This Covered, By Staci White - Reddit reportedly removing moderators and forcing subreddits to reopen to break protest](https://wegotthiscovered.com/social-media/reddit-reportedly-removing-moderators-and-forcing-subreddits-to-reopen-to-break-protest/)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Youtube, LMG Clips - Reddit F***ed Up](https://www.youtube.com/watch?v=-zthI7doQDk)
  {: .d-inline }
  </div>

{: .ml-5 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [The Verge, By Jay Peters - Google is getting a lot worse because of the Reddit blackouts](https://www.theverge.com/2023/6/13/23759942/google-reddit-subreddit-blackout-protests)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 14, 2023</summary>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Youtube, TechLinked - “This One Will Pass”](https://www.youtube.com/watch?v=bQ7IAKWno_o)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [YouTube, Philip DeFranco - He Faked His Death To Teach His Family A Lesson, Book Banning Banned, & Today’s News 6.14.23](https://www.youtube.com/watch?v=RieDjQOx694&t=225s)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  Paywall
  {: .label .label-yellow .mr-0 .ml-0 }

  [Forbes, By Peter Suciu - Reddit Blackout Casts Spotlight On Its Failure To Turn A Profit](https://www.forbes.com/sites/petersuciu/2023/06/14/reddit-blackout-casts-spotlight-on-its-failure-to-turn-a-profit/?sh=6325540458c3)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [CBC - ELI5: What's the deal with the Reddit blackout? \| About That](https://www.cbc.ca/player/play/2227647043520)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [SFGATE, By Stephen Council - Reddit users refuse to back down in blackout after CEO's ‘trivializing’ memo](https://www.sfgate.com/tech/article/reddit-protest-blackout-huffman-ceo-18152414.php)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Breitbart, By Lucas Nolan - Left-Wing Reddit Faces Continuing User Rebellion After CEO Brushes Off Concerns](https://www.breitbart.com/tech/2023/06/14/left-wing-reddit-faces-continuing-user-rebellion-after-ceo-brushes-off-concerns/)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Search Engine Journal, By Kristi Hines - Popular Reddit Communities Support These App Developers In Prolonged Protest](https://www.searchenginejournal.com/popular-reddit-communities-extend-protest/489341/#close)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [LifeHacker, By Beth Skwarecki - The Reddit Blackout Is Over, but the Protest Isn’t](https://lifehacker.com/the-reddit-blackout-is-over-but-the-protest-isn-t-1850539204)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Neowin, By John Callaham - Many Reddit subreddits, including popular Windows communities, are still "dark" right now](https://www.neowin.net/news/many-reddit-subreddits-including-popular-windows-communities-are-still-dark-right-now/)
  {: .d-inline }
  </div>
  
{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [TechRadar, By Muskaan Saxena - The Reddit blackout has left Google barren and full of holes](https://www.techradar.com/opinion/the-reddit-blackout-has-left-google-barren-and-full-of-holes)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Vice, By Jason Koebler - The Reddit Protest Is a Battle for the Soul of the Human Internet](https://www.vice.com/en/article/g5yykm/the-reddit-protest-is-a-battle-for-the-soul-of-the-human-internet)
  {: .d-inline }
  </div>
  
{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [TechDirt, By Mike Masnick - Reddit Blackout Crashes The Site As Reddit Users Realize They’re In The Power Position](https://www.techdirt.com/2023/06/13/reddit-blackout-crashes-the-site-as-reddit-users-realize-theyre-in-the-power-position/)
  {: .d-inline }
  </div>
  
{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [The Guardian, By Alex Hern - Reddit moderators vow to continue blackout in API access fees row](https://www.theguardian.com/technology/2023/jun/14/reddit-moderators-vow-to-continue-blackout-in-api-access-fees-row)
  {: .d-inline }
  </div>
  
{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Vox, By Sara Morrison - The ongoing Reddit Blackout, explained](https://www.vox.com/technology/2023/6/14/23760738/reddit-blackout-explained-subreddit-apollo-third-party-apps)
  {: .d-inline }
  </div>
  
{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Fortune, By Chris Morris - Reddit’s CEO just infuriated his striking moderators by saying ‘this one will pass,’ the way ‘all blowups’ do. They want to keep the site dark indefinitely](https://fortune.com/2023/06/14/reddit-blackout-extended-ceo-leaked-memo-blowup-will-pass-moderators/)
  {: .d-inline }
  </div>
  
{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Wired, By Justin Pot - How to Download Your Reddit Data](https://www.wired.com/story/how-to-download-your-reddit-data/)
  {: .d-inline }
  </div>
  
{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Gizmodo, By Jody Serrano - Subreddits Are Planning an Indefinite Blackout in Response to Leaked Reddit CEO Memo](https://gizmodo.com/subreddits-are-planning-an-indefinite-blackout-in-respo-1850537972)
  {: .d-inline }
  </div>
  
{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [CNN Business, By Brian Fung - The Reddit blackout shows no signs of stopping](https://www.cnn.com/2023/06/14/tech/reddit-blackout)
  {: .d-inline }
  </div>
  
{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  Japanese
  {: .label .label-green .mr-0 .ml-0 }

  [Gigazine - RedditのAPI有料化に伴う抗議活動は「収益に悪影響を与えていない」とRedditのCEOが表明、従業員に「身を守るためにReddit関係者であることは隠して」とも通達](https://gigazine.net/news/20230614-reddit-api-ceo-employees/)
  {: .d-inline }
  </div>
  
{: .ml-5 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Adweek, By Catherine Perloff - Ripples Through Reddit as Advertisers Weather Moderators Strike](https://www.adweek.com/social-marketing/ripples-through-reddit-as-advertisers-weather-moderators-strike/)
  {: .d-inline }
  </div>
  
{: .ml-5 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [PCMag, By Michael Kan - Thousands of Subreddits Pledge to Remain Dark to Protest Reddit API Change](https://www.pcmag.com/news/thousands-of-subreddits-pledge-to-remain-dark-to-protest-reddit-api-change)
  {: .d-inline }
  </div>
  
{: .ml-5 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Inc., By Jason Aten - Reddit CEO Steve Huffman's Third-Party API Debacle Is Making Elon Musk Look Like a Strategic Genius](https://www.inc.com/jason-aten/reddit-ceo-steve-huffmans-third-party-api-debacle-is-making-elon-musk-look-like-a-strategic-genius.html)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 15, 2023</summary>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Youtube, penguinz0 - Is Reddit Actually Dead](https://www.youtube.com/watch?v=OjfoALlRqoo)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Youtube, Louis Rossmann - Reddit CEO calls unpaid moderators' concerns "noise" - time to send a message he won't forget.](https://www.youtube.com/watch?v=ZOm_UKGyrZg)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Tweet
  {: .label .label-red .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Twitter, Dexerto - "Reddit is allegedly threatening to remove moderators of subreddits if they don't reopen"](https://twitter.com/Dexerto/status/1669487450622681089)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Kotaku, By Luke Plunkett - Reddit's CEO Is Just Making Everything Worse](https://kotaku.com/reddit-ceo-steve-huffman-strike-protest-blackout-api-1850545732)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [NBC News, By David Ingram - Reddit CEO slams protest leaders, saying he'll change rules that favor ‘landed gentry’  ](https://www.nbcnews.com/tech/tech-news/reddit-protest-blackout-ceo-steve-huffman-moderators-rcna89544)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Mac Rumors, By Juli Clover - Reddit Threatens to Remove Moderators From Subreddits Continuing Apollo-Related Blackouts](https://www.macrumors.com/2023/06/15/reddit-threatens-to-remove-subreddit-moderators/)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [The Verge, By Jay Peters - Reddit CEO Steve Huffman: Reddit ‘was never designed to support third-party apps’](https://www.theverge.com/2023/6/15/23762501/reddit-ceo-steve-huffman-interview-protests-blackout)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [NPR, By Bobby Allyn and Steve Inskeep - Reddit CEO Steve Huffman: 'It's time we grow up and behave like an adult company'](https://www.npr.org/2023/06/15/1182457366/reddit-ceo-steve-huffman-its-time-we-grow-up-and-behave-like-an-adult-company?origin=NOTIFY)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Ars Technica, By Scharon Harding - As the Reddit war rages on, community trust is the casualty](https://arstechnica.com/gadgets/2023/06/the-reddit-protests-are-winding-down-so-whats-next/?utm_brand=arstechnica&utm_social-type=owned&utm_source=mastodon&utm_medium=social)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Mother Jones, By Ali Breland - Why Reddit Is Destined to Turn to Crap](https://www.motherjones.com/politics/2023/06/reddit-blackout/)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Inc. Australia, By Jason Aten - Reddit CEO Steve Huffman’s Third-Party API Debacle Is Making Elon Musk Look Like a Strategic Genius](https://www.inc-aus.com/jason-aten/reddit-ceo-steve-huffmans-third-party-api-debacle-is-making-elon-musk-look-like-a-strategic-genius.html)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  Paywall
  {: .label .label-yellow .mr-0 .ml-0 }

  [The Washington Post, By Megan McArdle - Opinion \| Reddit followed Goodwill's playbook. Now Redditors are on strike.](https://www.washingtonpost.com/opinions/2023/06/15/reddit-profits-goodwill-strike/)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Bloomberg, By Dave Lee - Opinion \| Reddit Made the Mistake of Ignoring Its Core Users](https://www.bloomberg.com/opinion/articles/2023-06-15/reddit-should-heed-its-users-as-well-as-investors?leadSource=uverify%20wall)
  {: .d-inline }
  </div>

{: .ml-5 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Defector, By Alex Pareene - The Last Page Of The Internet](https://defector.com/the-last-page-of-the-internet)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 16, 2023</summary>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Youtube, Linus Tech Tips - Oh Twitch...... - WAN Show June 16, 2023](https://www.youtube.com/watch?v=i8qkqfC190s&t=7065s)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Youtube, The Damage Report - Reddit Users Turn on CEO Steve Huffman After API Announcement](https://www.youtube.com/watch?v=RWbdtXmpGZs)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Youtube, Louis Rossmann - Reddit forcibly breaks strike; this is an UNINVESTABLE company!](https://www.youtube.com/watch?v=JPLbnNDjo5Y)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Youtube, Eli the Computer Guy - REDDIT FIRING MODS for PROTESTING - tyrant CEO DEMANDS democracy](https://www.youtube.com/watch?v=6EwSjWIpw-w)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [CNBC, By Hayden Field and Jonathan Vanian - Reddit is in crisis as prominent moderators loudly protest the company’s treatment of developers](https://www.cnbc.com/2023/06/16/reddit-in-crisis-as-prominent-moderators-protest-api-price-increase.html)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  German
  {: .label .label-green .mr-0 .ml-0 }

  [Heise, By Martin Holland - Reddit: Geschäftsführer geht in die Offensive, Drohung an Moderatoren](https://www.heise.de/news/Blackout-Reddits-Geschaeftsfuehrer-geht-in-die-Offensive-Drohung-an-Moderatoren-9189426.html)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Reuters, By Anita Ramaswamy - Reddit’s golden geese foul up its IPO plans](https://www.reuters.com/breakingviews/reddits-golden-geese-foul-up-its-ipo-plans-2023-06-16/)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [PCMag, By Michael Kan - Reddit CEO Threatens to Boot Moderators Who Back Blackout Protest](https://www.pcmag.com/news/reddit-ceo-threatens-to-boot-moderators-who-back-blackout-protest)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [The Verge, By Jay Peters - RIF developer counters Reddit CEO’s claims that he didn’t want to work with Reddit](https://www.theverge.com/2023/6/16/23763661/reddit-rif-is-fun-developer-ceo-steve-huffman)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [TechDirt, By Mike Masnick - Reddit CEO Triples Down, Insults Protesters, Whines About Not Making Enough Money From Reddit Users](https://www.techdirt.com/2023/06/16/reddit-ceo-triples-down-insults-protesters-whines-about-not-making-enough-money-from-reddit-users/)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Business Insider, By Lindsay Dodgson - Reddit CEO says the mods leading a punishing blackout are too powerful and he will change the site's rules to weaken them](https://www.businessinsider.com/reddit-ceo-will-change-rules-to-make-mods-less-powerful-2023-6)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [CNN Business, By Brian Fung - Reddit’s fight with its most powerful users enters new phase as blackout continues](https://www.cnn.com/2023/06/16/tech/reddit-blackout-fight/index.html)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [NBC News, By David Ingram - Reddit CEO praises Elon Musk’s cost-cutting as protests rock the platform](https://www.nbcnews.com/tech/tech-news/reddit-blackout-protest-private-ceo-elon-musk-huffman-rcna89700)
  {: .d-inline }
  </div>

{: .ml-5 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [The Verge, By Jay Peters and Mia Sato - Here’s the note Reddit sent to moderators threatening them if they don’t reopen](https://www.theverge.com/2023/6/16/23763538/reddit-blackout-api-protest-mod-replacement-threat)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 17, 2023</summary>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Youtube, penguinz0 - Redditors Gave Up](https://www.youtube.com/watch?v=sNFkHWsGM4Y)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Youtube, TechLinked - Intel, I’m not calling it that.](https://www.youtube.com/watch?v=-zdV-0yL5II&t=370s)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Youtube, Louis Rossmann - Reddit CEO learns going to war with the internet is a LOSING battle](https://www.youtube.com/watch?v=Cb458PRJ43s)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Engadget, By Igor Bonifacic - Reddit’s average daily traffic fell during blackout, according to third-party data](https://www.engadget.com/reddits-average-daily-traffic-fell-during-blackout-according-to-third-party-data-194721801.html)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [The Guardian, By John Naughton - There is no moral high ground for Reddit as it seeks to capitalise on user data](https://www.theguardian.com/commentisfree/2023/jun/17/there-is-no-moral-high-ground-for-reddit-as-it-seeks-to-capitalise-on-user-data)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Business Insider, By Kenneth Niemeyer - One of Reddit's largest communities is protesting changes to the platform by posting only photos of John Oliver 'looking sexy'](https://www.businessinsider.com/reddit-community-is-protesting-by-posting-sexy-john-oliver-photos-2023-6)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Wired, By Boone Ashworth - The Reddit Blackout Is Breaking Reddit](https://www.wired.com/story/the-reddit-blackout-is-breaking-reddit/)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [New York Magazine, By John Herrman - Reddit and the End of Online ‘Community’](https://nymag.com/intelligencer/2023/06/reddit-and-the-end-of-online-community.html)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Business Insider, By Jyoti Mann - People are starting to place bets on Reddit's civil war](https://www.businessinsider.com/reddit-people-are-starting-to-place-bets-on-civil-war-2023-6)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [CBC, Trans activist celebrates Pride in the face of hate, the White House Gift Shop strikes again, the fight over Reddit's API pricing and more \| Episode 655](https://www.cbc.ca/listen/live-radio/1-14-day-6/clip/15991938-trans-activist-celebrates-pride-face-hate-white-house)
  {: .d-inline }
  </div>

{: .ml-5 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Inc., By Jason Aten - Reddit's CEO Says Third-Party Apps Add 'No Value.' How He Completely Lost the Thread](https://www.inc.com/jason-aten/reddits-ceo-says-third-party-apps-add-no-value-hes-measuring-it-all-wrong.html)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 18, 2023</summary>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Youtube, Philip DeFranco - Woman Wakes Up in Coffin At Her Wake, The Growing Problem With “Going Electric”, & More](https://youtu.be/X63LgdlCMZE?t=156)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Bleeping Computer, By Lawrence Abrams - Reddit hackers threaten to leak data stolen in February breach](https://www.bleepingcomputer.com/news/security/reddit-hackers-threaten-to-leak-data-stolen-in-february-breach/)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Forbes, By Barry Collins - If Your Reddit Feed Is Full Of John Oliver, Here’s Why](https://www.forbes.com/sites/barrycollins/2023/06/18/if-your-reddit-feed-is-full-of-john-oliver-heres-why)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [TechRadar, By Allisa James - Discord, Twitter, Reddit, and Tumblr have something in common and it's not good](https://www.techradar.com/opinion/discord-twitter-reddit-and-tumblr-have-something-in-common-and-its-not-good)
  {: .d-inline }
  </div>

{: .ml-5 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [The Verge, By Jay Peters - Three of the biggest Reddit communities reopened in the funniest way possible](https://www.theverge.com/2023/6/17/23764729/reddit-users-pics-gifs-subreddits-john-oliver)
  {: .d-inline }
  </div>

</details>

{: .mb-4 .ml-3 }

<details markdown="block">

  <summary>June 19, 2023</summary>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Video
  {: .label .label-purple .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [Youtube, Louis Rossmann - What pisses me off about the failed Reddit protest...](https://www.youtube.com/watch?v=VYij7Ic5p8k)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [BBC News, By Tom Gerken - Why is Reddit full of pictures of John Oliver?](https://www.bbc.com/news/technology-65949412)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [The Verge, By Alex Castro - Reddit hackers demand $4.5 million ransom and API pricing changes](https://www.theverge.com/2023/6/19/23765895/reddit-hack-phishing-leak-api-pricing-steve-huffman)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [TechCrunch, By Ivan Mehta - Reddit communities adopt alternative forms of protest as the company threats action on moderators](https://techcrunch.com/2023/06/19/reddit-communities-adopt-alternative-forms-of-protest-as-the-company-threats-action-on-moderators)
  {: .d-inline }
  </div>

{: .ml-5 .mb-2 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  [TechCrunch, By Carly Page - Hackers threaten to leak 80GB of confidential data stolen from Reddit](https://techcrunch.com/2023/06/19/hackers-threaten-to-leak-80gb-of-confidential-data-stolen-from-reddit/)
  {: .d-inline }
  </div>

{: .ml-5 }

  <div markdown="block">
  Article
  {: .label .mr-0 .ml-0 }

  English
  {: .label .label-green .mr-0 .ml-0 }

  Paywall
  {: .label .label-yellow .mr-0 .ml-0 }

  [Financial Times, By Hannah Murphy - Reddit stands firm in clash with users as blackout on forums escalates](https://www.ft.com/content/1d432529-0839-4f73-a1a7-6a8d4497799b)
  {: .d-inline }
  </div>

</details>

___

## Resources and Further Reading
### From Reddit
- [An Update Regarding Reddit's API](https://www.reddit.com/r/reddit/comments/12qwagm/an_update_regarding_reddits_api/)
- [Addressing the community about changes to our API](https://www.reddit.com/r/reddit/comments/145bram/addressing_the_community_about_changes_to_our_api/)
- [Data API Terms](https://www.redditinc.com/policies/data-api-terms)
- [Developer Terms](https://www.redditinc.com/policies/developer-terms)
- [Mod Code of Conduct Rule 4 & 2 and Subs Taken Private Indefinitely](https://reddit.com/r/ModSupport/comments/14a5lz5/mod_code_of_conduct_rule_4_2_and_subs_taken/jo9wdol/)

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
