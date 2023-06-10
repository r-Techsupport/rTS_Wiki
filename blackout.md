---
layout: default
title: Blackout
nav_exclude: true
search_exclude: false
last_modified_date: 2023-06-09
permalink: /blackout

discord: '[Discord Server](/discord)'
---

# r/TechSupport has Gone Dark
{: .no_toc }
If you found your way to this page then r/TechSupport has been marked as private. You probably have a lot of questions. We will try our best to answer them all here.

<details markdown="block">
  <summary>
    Contents
  </summary>
1. TOC
{:toc}
</details>

### What is going on?
On April 8, 2023 [Reddit announced they would begin charging for usage of their API effective June 19, 2023](https://www.reddit.com/r/reddit/comments/12qwagm/an_update_regarding_reddits_api/). In the announcement Reddit expressed their concern with the "expansive access to data" acquired through their API and how they "have an obligation to [their] communities to be responsible stewards of this content." 

As the moderators of a technical support subreddit, we could not agree more. Currently, data from Reddit is utilized freely to train [large language models (LLM)](https://en.wikipedia.org/wiki/Large_language_model), which are the base for AI technologies such as ChatGPT. As all of you can imagine, this can become problematic very quickly for a multitude of reasons.

So then what's the big deal? We agree with Reddit, right? Well, that's where things get tricky. 

Over the years Reddit has picked up the particularly annoying habit of not really following through with their promises. From [promises of building new tools for moderators](https://www.reddit.com/r/announcements/comments/3cbo4m/we_apologize/) to [promsing to give more visibility when users follow you](https://www.reddit.com/r/announcements/comments/cevm31/update_regarding_user_profile_transparency), Reddit has either, at best, barely followed through with their promise or, at worst, completely missed the mark on what they promised. 

### What does this have to do with third-party reddit applications and why is everyone screaming about them dying because of Reddit?
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

Maybe you use one of them daily. Perhaps it is the only way you browse Reddit. Many of them offer insane customization to tailor your Reddit experience to exactly what you want.

These third party applications, which will be referred to as 3PAs from here on, and others heavily rely on Reddit's API. Many of the developers work alone on their applications as a labor of love to the Reddit community. Most only charge a small fee for pro versions of their application. 

To put it simply, Reddit gave developers of these applications very little time to prepare. Most developers learned around the end of May what the cost would be. Considering the changes would go into effect on July 19th, giving approximately 30 days to prepare by optimizing the applications to possibly minimize costs and setting up models for possible subscriptions to help with costs is ridiculous.

And what was Reddit's response? 

In his recent disaster of an AMA when asked [why the timeline of charging for the API was so strict](https://reddit.com/r/reddit/comments/145bram/addressing_the_community_about_changes_to_our_api/jnk280m/), [u/spez](https://reddit.com/user/spez) responded, "[I acknowledge it was a tight timeline. For what it’s worth, we are continuing to chat with many of the developers who still want to work with us](https://reddit.com/r/reddit/comments/145bram/addressing_the_community_about_changes_to_our_api/jnk8m0z/)."

They do not care if they made it difficult for 3PAs. They have no desire to remedy the situation to allow 3PAs to properly prepare nor to lower costs. Unfortunately, this means it has put several developers in a rough spot. Many have already announced they will be shutting down their applications come June 30th. 

We can go on an on about this, but we are not the developers and cannot give the proper perspective on the issue. So, here is a list of all the developers describing the issue from their perspectives. We urge you to take the time to read through their posts, once their subreddits are up if they are participating in the blackout. 

If anything please read through the post made by Apollo's developer, Christian, as he gives a very well thought out detailed explination on why he has been forced to shut down Apollo.

### Why are people mentioning that it will harm those that require accessible websites?
There is no way to put this mildly, so we'll just come out with it. Reddit's lack of accessiblity on their 17 year old website is disgraceful. The fact that they have not implemented anything for accessibility in their official mobile app is inexcusable. Their lack of care towards the concerns raised by the [r/blind](https://www.reddit.com/r/Blind/) moderators and community is disgusting.

[u/spez](https://reddit.com/user/spez) stated in his recent AMA, "[We are working with RedReader and Dystopia to make sure they have access and will continue to work with others. We’ll review requests to ensure that the app is non-commercial and focused on accessibility needs. Approved apps can use the Data API for free. For our own apps, there is no excuse. We will do better](https://reddit.com/r/reddit/comments/145bram/addressing_the_community_about_changes_to_our_api/jnkccq7/)". Reddit is very aware of how awful their site is for those requiring accessibility. It took outrage from the Reddit community for them to admit they were wrong.

We will have to keep our fingers crossed that Reddit will follow through with creating a more accessible site as the free API for accessible 3PAs to use might only be temporary.

We encourage you all to please read through [the post by r/blind moderators](https://www.reddit.com/r/Blind/comments/13zr8h2/reddits_recently_announced_api_changes_and_the/) on the issues they face with the possible loss of 3PAs with accessibility features.

### What about NSFW content?
TODO: Fill this out. I'm not super versed on this part.

### Why would the moderators of a subreddit for tech support care about all of this? How does this affect you?
As moderators we strive to make our subreddit a welcoming, safe, and helpful place for our users. Over the years we have had to supplment our community with external sources maintained by our moderator team and a group of other volunteers. Simply put, Reddit does not offer the resources necessary for us to fully support our community.

[Since 2015 Reddit admins have been promising to build and improve tools for moderators](https://www.reddit.com/r/announcements/comments/3cbo4m/we_apologize/). Though Reddit has made [some improvements over the years](https://reddit.com/r/reddit/comments/107orxe/ringing_in_2023_with_a_2022_reflection_on_mod/), it is far from the features offered by popular moderation tools such as [toolbox](https://reddit.com/r/toolbox/).

Moderators heavily rely on 3PAs to help with everyday moderation. Frankly, it is close to impossible to moderate large subreddits without them. Losing 3PAs for moderation would make it difficult to
- Have a set list of commands to allow any users helping others to link to approved guides
- Identify extremely active, helpful users in the subreddit
- Moderate anything via mobile devices
- Identify posts requiring a question to be answered
- Quickly identify spam

This is a sentiment shared by most, if not all, moderators with subreddits participating in the blackout. Reddit's changes to their API affects everyone. Users and moderators. Developers and their 3PAs. 

On June 6th [we announced we would, along with over 3000 subreddits, go dark starting June 12th](https://www.reddit.com/r/techsupport/comments/142ox2a/rtechsupport_will_be_going_dark_on_june_12_in/) in order to protest against the changes to the API. After [u/spez](https://reddit.com/user/spez)'s AMA on June 9, 2023 we decided to private the subreddit until Reddit makes a concerted effort to reevaluate and reverse their decisions on the API changes.

### Why would you do this to us?
We know this decision affects our users heavily. We understand this may anger some of you. We did not make this decision easily. As we said in our original post on the blackout, we truly believe this is in the best interest of the community. 

We want our users to know they wont be left hanging, however. Though our subreddit will be closed, we will have our live chat open in our {{page.discord}}, 24/7, as it always has been. Our wiki will also be available to everyone. We ask our users to please spread the word to others requiring tech support about these resources.

### How can we help?
Starting June 12th we ask if everyone can limit or completely stop their use of Reddit. This will help us with our protest. We want to limit traffic to the site as much as possible.

## Additional Resources
- [What We Want](https://www.reddit.com/r/Save3rdPartyApps/comments/13yh2te/what_we_want/)
- [Don't Let Reddit Kill 3rd Party Apps!](https://www.reddit.com/r/Save3rdPartyApps/comments/13yh0jf/dont_let_reddit_kill_3rd_party_apps/)
- [Reddit is killing 3rd-party Apps (infographic)](https://preview.redd.it/91zby5ht044b1.jpg?width=1116&format=pjpg&auto=webp&v=enabled&s=746417bbd904506fc8c7b9c702c16b7fbb47bf06)
- [Reddit to the Visually Impaired: "You no  longer have a voice on this site."](https://www.reddit.com/r/ModCoord/comments/13zbf3n/reddit_to_the_visually_impaired_you_no_longer/)
- [How Reddit Became the Enemy - w/ Apollo Developer Christian Selig](https://www.youtube.com/watch?v=Ypwgu1BpaO0)
- [Addressing the community about changes to our API](https://www.reddit.com/r/reddit/comments/145bram/addressing_the_community_about_changes_to_our_api/)
- [CEO spez AMA Overview](https://www.reddit.com/r/ModCoord/comments/145bzus/ceo_spez_ama_overview/)
- [Today's AMA With Spez Did Nothing to Alleviate Concerns: An Open Response](https://www.reddit.com/r/ModCoord/comments/145l7wp/todays_ama_with_spez_did_nothing_to_alleviate/)

## Official Protest Subreddits
- [r/Save3rdPartyApps](https://www.reddit.com/r/Save3rdPartyApps)
- [r/ModCoord](https://www.reddit.com/r/ModCoord)

## 3PA Developer Announcements on the Situation
- [Apollo](https://www.reddit.com/r/apolloapp/comments/144f6xm/apollo_will_close_down_on_june_30th_reddits/)
- [Sync](https://www.reddit.com/r/redditsync/comments/144jp3w/sync_will_shut_down_on_june_30_2023/)
- [Reddit is Fun](https://www.reddit.com/r/redditisfun/comments/144gmfq/rif_will_shut_down_on_june_30_2023_in_response_to/)
- [Narwhal](https://www.reddit.com/r/getnarwhal/comments/144pdom/update_on_narwhal_w_the_upcoming_reddit_api/)
- [ReadReader](https://www.reddit.com/r/RedReader/comments/145du4j/update_4_redreader_granted_noncommercial/)
- [Boost (A small response to a question)](https://www.reddit.com/r/BoostForReddit/comments/145cdmg/comment/jnmvllu)