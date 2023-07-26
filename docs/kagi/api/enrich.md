# Enrichment APIs

The enrichment APIs are a collection of indexes that can be used to supplement other products with more novel and interesting content from around the web.

They are best used for finding non-commerical websites and "small web" discussions surrounding a particular topic. The news enrichment API offers interesting discussions and news worth reading from typically non-mainstream sources.

They are not "general" search indexes that can answer any type of query but rather these results are our 'secret sauce' and what makes Kagi results unique and interesting.

## Pricing

All `/enrich` APIs are currently billed at $2/1000 searches ($0.002 USD per search). Volume discounts are available (contact support@kagi.com for more information).

Since results are niche, we bill only when non-zero results are returned.

## Endpoints

### `GET /enrich/web`

Fetch enrichment results focused on general, non-commerical web content.

Returns an array of [Search Objects](./search.md#search-object).

#### Parameters

Field | Type     | Required | Description
------|----------|----------|-----------
q     | string   | Yes      | query


#### Example

```
curl -v \
  -H "Authorization: Bot $TOKEN" \
  "https://kagi.com/api/v0/enrich/web?q=microsoft"
```

<details>
<summary>Response</summary>

```json
{
  "meta": {
    "id": "db862c5b-c594-4480-9e0c-86a14f71cf0e",
    "node": "us-east4",
    "ms": 386
  },
  "data": [
    {
      "t": 0,
      "rank": 1,
      "url": "http://minimsft.blogspot.com/2011/01/microsoft-fy11q2-results.html",
      "title": "Mini-Microsoft: Microsoft FY11Q2 Results",
      "snippet": "Like I said, there&#39;s a big convergence ahead of us, and it will be good to start aligning a simpler development story, both for Microsoft and its partners. The biggest obvious concern is the development path for the mobile platform compared to the development path for Windows, but even there you can squint and see on the horizon the possibility for..",
      "published": "2011-01-01T00:00:00Z"
    },
    {
      "t": 0,
      "rank": 2,
      "url": "http://toastytech.com/guis/bob.html",
      "title": "Microsoft Bob",
      "snippet": "Microsoft Bob| Microsoft Bob And so Microsoft Bob disappeared in to obscurity."
    },
    {
      "t": 0,
      "rank": 3,
      "url": "https://microsoft.github.io/tilecode/",
      "title": "Microsoft TileCode",
      "snippet": null
    },
    {
      "t": 0,
      "rank": 4,
      "url": "https://docs.microsoft.com/en-us/learn/?WT.mc_id=sitertzn_homepage_mslearn-redirect-mpp",
      "title": "Microsoft Learn | Microsoft Docs",
      "snippet": "Explore a topic in-depth through guided paths or learn how to accomplish a specific task through individual modules. Welcome to Microsoft Learn Whether you&#39;re just starting or an experienced professional, our hands-on approach helps you arrive at your goals faster, with more confidence and at your own pace."
    },
    {
      "t": 0,
      "rank": 5,
      "url": "http://www.glassdoor.com/Reviews/Microsoft-Reviews-E1651.htm",
      "title": "Microsoft Reviews",
      "snippet": "Check out the 2012 Vanity Fair article called &quot;Microsoft&#39;s Lost Decade&quot;.Continue readingFormer Employee, more than 8 yearsProsMicrosoft takes great care of their people, the benefits are some of the best in tech, you can take pretty much all the PTO you want regardless of what you&#39;re actually rewarded, the annual perks are really great and the bonu.."
    },
    {
      "t": 0,
      "rank": 6,
      "url": "https://web.archive.org/web/20090831071455/http://blogs.msdn.com/oneapp/archive/2009/08/24/microsoft-introducing-oneapp.aspx",
      "title": "Microsoft OneApp : Microsoft Introducing OneApp",
      "snippet": "I am excited to introduce to you Microsoft OneApp, a new software application that will allow feature phones to run mobile apps like Facebook, Twitter, Windows Live Messenger, and other popular applications and games. Our hope is that OneApp will develop new business opportunities for partners like Blue Label Telecoms and create more opportunities ..",
      "published": "2009-08-31T07:14:55Z"
    },
    {
      "t": 0,
      "rank": 7,
      "url": "http://minimsft.blogspot.com/2012/11/a-microsoft-without-sinofsky.html",
      "title": "Mini-Microsoft: A Microsoft Without Sinofsky?",
      "snippet": "Mr. Sinofsky got a standing ovation from the Windows team during the Company Meeting for all that he&#39;s done to take them on a multi-year journey to create Windows 7 and then hit the big multi-division reset button for Windows 8. He truly demonstrated technical leadership at its best. Meanwhile, Ms. Larson-Green: best of luck following this act.",
      "published": "2012-11-01T00:00:00Z"
    },
    {
      "t": 0,
      "rank": 8,
      "url": "https://developer.microsoft.com/en-us/",
      "title": "Microsoft Developer",
      "snippet": "Build collaborative solutions with Microsoft Graph, Microsoft Viva, Office 365, SharePoint, and more. Extend and customize the Microsoft Teams platform to create and connect apps and workflows. Whether you&#39;re just starting or an experienced professional, our hands-on approach helps you arrive at your goals faster, with more confidence and at your o.."
    },
    {
      "t": 0,
      "rank": 9,
      "url": "https://en.wikipedia.org/wiki/Microsoft",
      "title": "Microsoft - Wikipedia",
      "snippet": "9] This unfolded with Microsoft acquiring Danger Inc. in 2008,[10] entering the personal computer production market for the first time in June 2012 with the launch of the Microsoft Surface line of tablet computers, and later forming Microsoft Mobile through the acquisition of Nokia&#39;s devices and services division. In 1990, Microsoft introduced the .."
    },
    {
      "t": 0,
      "rank": 10,
      "url": "https://slack.com/blog/news/dear-microsoft#.3wj6j4611",
      "title": "Dear Microsoft | Slack",
      "snippet": null
    },
    {
      "t": 0,
      "rank": 11,
      "url": "http://minimsft.blogspot.com/2010/09/microsoft-company-meeting-2010.html?showComment=1285836102916#c2255289100235206673",
      "title": "Mini-Microsoft: Microsoft Company Meeting 2010",
      "snippet": "Then all of a sudden, I&#39;m A10 and told its not performance but because everyone in my team is over 63 - so they gave me a good review - good bonus and A/10. Here&#39;s a hint for the folks that create the company meeting: If you can&#39;t get first rate talent for a good price, then don&#39;t waste the money on a host and put cookies back in the box lunches an..",
      "published": "2010-09-01T00:00:00Z"
    },
    {
      "t": 0,
      "rank": 12,
      "url": "https://github.com/Microsoft/GraphEngine",
      "title": "GitHub - microsoft/GraphEngine: Microsoft Graph Engine",
      "snippet": "Microsoft Graph Engine is a distributed in-memory data processing engine, underpinned by a strongly-typed in-memory key-value store and a general-purpose distributed computation engine. It combines the capability of fast graph exploration with the flexibility of lambda expression. If you are interested in contributing to Graph Engine, please fork t.."
    },
    {
      "t": 0,
      "rank": 13,
      "url": "http://www.cs.toronto.edu/~wayne/microsoft-sucks.html",
      "title": "Microsoft Sucks",
      "snippet": "http://www.microsoft.com/java/sdk/getstart/javac007.htm : Updating the Java Support on a User&#39;s Machine If you are placing an applet that uses COM on an HTML page accessible from the Internet, you must ensure that any users who encounter that page have a version of the Java Support for Internet Explorer that fully supports Java/COM integration. As .."
    },
    {
      "t": 0,
      "rank": 14,
      "url": "http://minimsft.blogspot.com/2010/09/microsoft-annual-review-2010.html",
      "title": "Mini-Microsoft: Microsoft Annual Review 2010",
      "snippet": "Just a quick post: some of you enjoy posting information relevant to your review, both looking at numbers and a critical view of the message given to you. It has started to happen a bit in the last post (I&#39;m going through the comments now) so I&#39;m just going to capitulate (again) and put this small post up for the 2010 Annual Review share and compar..",
      "published": "2010-09-01T00:00:00Z"
    },
    {
      "t": 0,
      "rank": 15,
      "url": "http://techrights.org/comes-vs-microsoft/text/msg00176.html",
      "title": "Microsoft Confidential ..",
      "snippet": "Lotus, Word Perfect and Borland poised to introduce their key Windows apps this FY and IBM pushing OS/2 2.0 as the new standard through newly formed alliances, it is time to analyze the MS OEM situation and give you some advice in how to win during the years to come. In understanding this best, MS convinced IBM to change the OS/2 development method.."
    },
    {
      "t": 0,
      "rank": 16,
      "url": "https://github.com/microsoft/buildxl",
      "title": "GitHub - microsoft/BuildXL: Microsoft Build Accelerator",
      "snippet": "BuildXL (Microsoft Build Accelerator) BuildXL (Microsoft Build Accelerator), is a build engine originally developed for large internal teams at Microsoft. Internally at Microsoft, BuildXL runs 150,000+ builds per day on monorepo codebases up to a half-terabyte in size with a half-million process executions per build."
    },
    {
      "t": 0,
      "rank": 17,
      "url": "https://www.microsoft.com/en-us/microsoft-365/blog/2016/11/02/introducing-microsoft-teams-the-chat-based-workspace-in-office-365/",
      "title": "Microsoft Introduces Slack Competitor, Microsoft Teams",
      "snippet": "Microsoft Teams delivers on four core promises to create a digital workspace for high performing teams. Backed by the Microsoft Graph, intelligent services are surfaced throughout the workspace to help with information relevancy, discovery and sharing. Microsoft Teams is also built on Office 365 Groups—our cross-application membership service that ..",
      "published": "2016-11-02T00:00:00Z"
    },
    {
      "t": 0,
      "rank": 18,
      "url": "https://github.com/MicrosoftEdge/MSEdge",
      "title": "GitHub - MicrosoftEdge/MSEdge: Microsoft Edge",
      "snippet": "In that context, we have been thinking through plans to adopt the Chromium open source project in the development of Microsoft Edge on the desktop to create better web-compatibility for our customers and less fragmentation of the web for all its developers, and we’re now ready to move forward. As part of this, we hope and intend to become a signifi.."
    },
    {
      "t": 0,
      "rank": 19,
      "url": "http://microsoftjobsblog.com/blog/7-reasons-to-hack---hackathons-help-you-build-your-network",
      "title": "People of Microsoft - Home - Microsoft Life",
      "snippet": "Brittany Valdes struggled to find her place between two sometimes conflicting identities: motherhood and professional life. I want to help others get a little bit closer to their own dreams.” Huong Haley, the daughter of a Vietnamese prisoner of war, speaks up about how her background—which she identifies as “first generation, low income”—surfaced .."
    },
    {
      "t": 0,
      "rank": 20,
      "url": "http://marginalrevolution.com/marginalrevolution/2012/03/microsoft-help.html",
      "title": "Microsoft Help - Marginal REVOLUTION",
      "snippet": "The trackpad: Ok, I agree, but most people who talk about how mac&#39;s are garbage aren&#39;t bothering with track pads, mice are much more accurate, more ergonomic, and faster. The screen: I&#39;ve never had a viewing angle problem, and once again, advanced users often have non-built in screens, in which case it&#39;s possible to get much higher quality screens ..",
      "published": "2012-03-01T00:00:00Z"
    },
    {
      "t": 0,
      "rank": 21,
      "url": "https://www.microsoft.com/en-us/microsoft-365/outlook/outlook-for-business",
      "title": "Microsoft Outlook for business - Microsoft",
      "snippet": "Get peace of mind with enterprise-grade security trusted by many of the world’s largest organizations. Travel and bill payments are automatically added to your calendar, and intelligent reminders help keep you on track. Previous versions include Outlook 2013, Outlook 2010, and Outlook 2007."
    },
    {
      "t": 0,
      "rank": 22,
      "url": "https://web.archive.org/web/20160312024026/https://medium.com/i-m-h-o/microsoft-heres-my-offer-80f979fdd692",
      "title": "Microsoft, here's my offer. -- I. M. H. O. -- Medium",
      "snippet": "You are close to 100.000 people strong, that’s 100.000 of the world’s most creative, smart, passionate spirits, willing to make it the best brand with the best range of products in the world. Hire me and let me compile you a list of things that are so terrible that I feel in no position to defend you anymore. Visual Studio kicks ass, the distributi..",
      "published": "2016-03-12T02:40:26Z"
    },
    {
      "t": 0,
      "rank": 23,
      "url": "https://www.windowscentral.com/microsoft",
      "title": "Microsoft | Windows Central",
      "snippet": "Traditionally a software company at heart, Microsoft dabbled in hardware with computing peripherals like mice and keyboards before going all in with the Surface line of tablets. Most consumers are familiar with Microsoft through their operating system Windows, their office software suite Microsoft Office, their home entertainment consoles Xbox, and.."
    },
    {
      "t": 0,
      "rank": 24,
      "url": "https://github.com/microsoft/microsoft-ui-xaml/blob/main/docs/roadmap.md",
      "title": "microsoft-ui-xaml/roadmap.md at main * microsoft/microsoft-ui-xaml * GitHub",
      "snippet": "WinUI is under active development by the Windows developer platform team and the roadmap will continue to evolve based on market changes and customer feedback, so please note that the plans outlined here aren&#39;t exhaustive or guaranteed. WinUI provides a number of benefits which makes it the best way to create user interfaces for Windows apps: Creat.."
    },
    {
      "t": 0,
      "rank": 25,
      "url": "http://www.minimallyminimal.com/blog/2012/7/3/the-next-microsoft.html",
      "title": "The Next Microsoft -- Minimally Minimal",
      "snippet": null,
      "published": "2012-07-03T00:00:00Z"
    },
    {
      "t": 0,
      "rank": 26,
      "url": "https://xkcd.com/1118/",
      "title": "xkcd: Microsoft",
      "snippet": "Title text: Facebook, Apple, and Google all got away with their monopolist power grabs because they don&#39;t have any &#39;S&#39;s in their names for critics to snarkily replace with &#39;$&#39;s.}} xkcd.com is best viewed with Netscape Navigator 4.0 or below on a Pentium 3±1 emulated in Javascript on an Apple IIGS at a screen resolution of 1024x1. Please enable your.."
    },
    {
      "t": 0,
      "rank": 27,
      "url": "https://www.microsoft.com/en-us/microsoft-365/blog/2016/06/06/microsoft-planner-ready-for-showtime/",
      "title": "Microsoft Planner",
      "snippet": "With Planner, teams can create new plans; organize, assign and collaborate on tasks; set due dates; update statuses and share files, while visual dashboards and email notifications keep everyone informed on progress. The firm recently adopted Planner to help team members in multiple offices manage client engagements in a more organized and collabor..",
      "published": "2016-06-06T00:00:00Z"
    },
    {
      "t": 0,
      "rank": 28,
      "url": "https://web.archive.org/web/20201108115652/https://m.signalvnoise.com/microsoft--i-forgive-you/",
      "title": "Microsoft, I forgive you! - Signal v. Noise",
      "snippet": "And perversely enough, that’s exactly what is setting it free to try harder, try again, and make an impression with a crowd that’s no longer dispositioned to reject the effort because Microsoft is the big bad wolf. It’s bizarre, but I actually want to see a resurgent, strong Microsoft. Yes, I know they’ve been pining for it, so here it is: Microsof..",
      "published": "2020-11-08T11:56:52Z"
    }
  ]
}

```

</details>

### `GET /enrich/news`

Fetch enrichment results focused on non-commercial news and discussions.

Returns an array of [Search Objects](./search#search-object).

#### Parameters

Field | Type     | Required | Description
------|----------|----------|-----------
q     | string   | Yes      | query

#### Example

```
curl -v \
  -H "Authorization: Bot $TOKEN" \
  "https://kagi.com/api/v0/enrich/news?q=microsoft"
```

<details>
<summary>Response</summary>

```json
{
  "meta": {
    "id": "549b0b24-8e14-4337-aa20-434f688b7cb1",
    "node": "us-east4",
    "ms": 233
  },
  "data": [
    {
      "t": 0,
      "rank": 1,
      "url": "https://www.cnbc.com/amp/2023/07/18/microsoft-stock-pops-on-ai-subscription-for-microsoft-365.html",
      "title": "Microsoft stock pops after it announces $30 per month A.I. subscription for Microsoft 365",
      "snippet": "Microsoft on Tuesday announced a new artificial intelligence subscription service for Microsoft 365. Microsoft shares rose as much as 5.8% Tuesday after the company announced a new artificial intelligence subscription service for Microsoft 365. It&#39;s grounded in your business data in the Microsoft Graph — that&#39;s all your emails, calendar, chats, doc..",
      "published": "2023-07-18T18:21:07Z"
    },
    {
      "t": 0,
      "rank": 2,
      "url": "https://www.microsoft.com/en-us/security/blog/2023/07/19/expanding-cloud-logging-to-give-customers-deeper-security-visibility/",
      "title": "How Microsoft is expanding cloud logging to give customers deeper security visibility | Microsoft Security Blog",
      "snippet": "Microsoft Purview Audit enables customers to centrally visualize cloud log data generated across their enterprise, thus helping them effectively respond to security events, forensic investigations, internal investigations and compliance obligations. We know customers have multiple issues to consider, including data storage capacity and which Micros..",
      "published": "2023-07-19T16:29:55Z"
    },
    {
      "t": 0,
      "rank": 3,
      "url": "https://danluu.com/us-v-ms/",
      "title": "United States v. Microsoft Corp exhibits",
      "snippet": "There are 945 public exhibits (the highest numbered exhibit is 2519, but many exhibits were only admitted under seal and many were also not admitted), so this is a work in progress as I read through exhibits. But if we look at what execs said in the mid 90s, which encompasses a lot of thoughts running into the early 90s, Microsoft execs knew exactl..",
      "published": "2023-07-19T22:13:06Z"
    },
    {
      "t": 0,
      "rank": 4,
      "url": "https://blogs.microsoft.com/blog/2023/07/18/furthering-our-ai-ambitions-announcing-bing-chat-enterprise-and-microsoft-365-copilot-pricing/",
      "title": "Furthering our AI ambitions – Announcing Bing Chat Enterprise and Microsoft 365 Copilot pricing - The Official Microsoft Blog",
      "snippet": "Second, to help commercial customers plan, we’re sharing that Microsoft 365 Copilot will be priced at $30 per user, per month for Microsoft 365 E3, E5, Business Standard and Business Premium customers, when broadly available; we’ll share more on timing in the coming months. Microsoft 365 Copilot is built on Microsoft’s trusted and comprehensive app..",
      "published": "2023-07-19T22:36:32Z"
    },
    {
      "t": 0,
      "rank": 5,
      "url": "https://www.theverge.com/2023/7/19/23800648/microsoft-teams-maybelline-ai-beauty-filter-virtual-makeup",
      "title": "Microsoft introduces Maybelline beauty filters to Teams",
      "snippet": "For Teams users, Microsoft is introducing a new AI-powered beauty feature that’s designed to “make people’s lives a little easier.” On Wednesday, Microsoft announced a new set of “virtual makeup” filters — similar to the appearance-altering effects seen across social media platforms, like TikTok’s Bold Glamour feature — coming to Microsoft Teams, c..",
      "published": "2023-07-19T21:00:03Z"
    },
    {
      "t": 0,
      "rank": 6,
      "url": "https://github.com/rany2/edge-tts",
      "title": "Use Microsoft Edge's online text-to-speech service from Python WITHOUT needing Microsoft Edge or Windows or an API key (Python)",
      "snippet": "If you only want to use the edge-tts and edge-playback commands, it would be better to use pipx: If you wish to play it back immediately with subtitles, you could use the edge-playback command: Support for custom SSML has been removed since 5.0.0 because Microsoft has taken the initiative to prevent it from working.",
      "published": "2023-07-19T22:13:06Z"
    },
    {
      "t": 0,
      "rank": 7,
      "url": "https://www.resetera.com/threads/microsoft-has-re-resurrected-shadowrun-2007s-matchmaking-service.742734/",
      "title": "Microsoft has re-resurrected Shadowrun 2007's Matchmaking Service",
      "snippet": "Though that wasn&#39;t really discovered till about a year back (I made a thread thinking it was back from the dead) and the Shadowrun community discord kinda exploded in membership gain (from like 400 to over 2k in less than a few months) which lead to a small but dedicated revival of the game. Well a few people (myself included) reached out and Micro..",
      "published": "2023-07-17T12:32:11Z"
    },
    {
      "t": 0,
      "rank": 8,
      "url": "https://www.reuters.com/technology/microsoft-offer-some-free-security-products-after-criticism-2023-07-19/",
      "title": "Microsoft to offer some free security products after criticism",
      "snippet": "WASHINGTON, July 19 (Reuters) - Microsoft Corp (MSFT.O) is expanding its suite of free security tools for customers, the software company said on Wednesday, following criticism that it was charging clients to protect themselves against Microsoft&#39;s mistakes. In a blog post published on Wednesday, Microsoft said the advanced features in Microsoft&#39;s a..",
      "published": "2023-07-19T23:54:51Z"
    },
    {
      "t": 0,
      "rank": 9,
      "url": "https://techcrunch.com/2023/07/17/microsoft-lost-keys-government-hacked/",
      "title": "Microsoft lost its keys, and the government got hacked | TechCrunch",
      "snippet": "In a blog post Friday, Microsoft said it was a matter of “ongoing investigation” how the hackers obtained a Microsoft signing key that was abused to forge authentication tokens that allowed the hackers’ access to inboxes as if they were the rightful owners. In its blog post, Microsoft said the hackers acquired one of its consumer signing keys, or M..",
      "published": "2023-07-18T10:30:29Z"
    },
    {
      "t": 0,
      "rank": 10,
      "url": "https://www.bloomberg.com/news/articles/2023-07-19/microsoft-is-on-track-to-deliver-improved-goggles-us-army-says",
      "title": "Microsoft Poised to Deliver Improved Combat Goggles, US Army Says",
      "snippet": null,
      "published": "2023-07-19T18:17:04Z"
    },
    {
      "t": 0,
      "rank": 11,
      "url": "https://www.bloomberg.com/news/articles/2023-07-19/microsoft-ceo-nadella-s-payouts-top-1-billion-on-1-000-msft-stock-boom",
      "title": "Nadella's Microsoft Payouts Top $1 Billion on 1,000% Stock Boom",
      "snippet": null,
      "published": "2023-07-19T20:03:42Z"
    },
    {
      "t": 0,
      "rank": 12,
      "url": "https://about.fb.com/news/2023/07/llama-2/",
      "title": "Meta and Microsoft Introduce the Next Generation of Llama | Meta",
      "snippet": "Microsoft and Meta recently joined a cohort of supporters that endorse the Partnership on AI’s framework for collective action in the creation and sharing of synthetic media. We have a broad range of diverse supporters around the world who believe in this approach too — including companies that have given us early feedback and are excited to build ..",
      "published": "2023-07-19T22:13:06Z"
    },
    {
      "t": 0,
      "rank": 13,
      "url": "https://www.cbsnews.com/video/microsoft-vice-president-on-the-future-of-ai-and-medicine/",
      "title": "Microsoft vice president on the future of AI and medicine",
      "snippet": "Microsoft vice president on the future of AI and medicine CBS News&#39; chief medical correspondent Dr. Jon LaPook sat down with Peter Lee, Microsoft&#39;s vice president of research and innovation, to discuss artificial intelligence and medicine. Get browser notifications for breaking news, live events, and exclusive reporting.",
      "published": "2023-07-18T12:02:12Z"
    },
    {
      "t": 0,
      "rank": 14,
      "url": "https://www.axios.com/2023/07/19/microsoft-price-tag-ai-business-office",
      "title": "Microsoft puts a price tag on its AI \"copilots\" for business",
      "snippet": "Microsoft announced Tuesday it will charge $30 per user per month for businesses that want to use its AI-infused copilots to automate work in Office products such as Word, PowerPoint and Excel. Why it matters: That will add up to a hefty chunk of change, representing the most significant new revenue opportunity for Microsoft&#39;s Office business since..",
      "published": "2023-07-19T15:47:53Z"
    },
    {
      "t": 0,
      "rank": 15,
      "url": "https://www.cnbc.com/2023/07/18/microsoft-stock-hits-all-time-high-on-new-copilot-ai-subscription.html",
      "title": "Microsoft closes at record after revealing pricing for new A.I. subscription",
      "snippet": "Microsoft&#39;s Copilot subscription service adds AI to the company&#39;s popular Office products such as Word, Excel and Teams. Microsoft shares closed at a record Tuesday after the company announced pricing for its new Microsoft 365 artificial intelligence subscription service. Microsoft&#39;s Copilot subscription service adds AI to the company&#39;s popular Off..",
      "published": "2023-07-18T23:47:57Z"
    },
    {
      "t": 0,
      "rank": 16,
      "url": "https://www.windowscentral.com/microsoft/microsoft-faces-antitrust-scrutiny-from-the-european-union",
      "title": "Microsoft faces antitrust scrutiny from the European Union over Teams, Office 365",
      "snippet": "Reportedly, the EC and Microsoft are at odds over whether the pricing of Teams limits opportunities for fair competition from similar video conferencing apps such as Slack and Zoom. Slack filed a complaint with the EU in 2020, claiming that Microsoft was &quot;force installing [Teams] for millions, blocking its removal, and hiding the true cost to enter..",
      "published": "2023-07-19T06:56:25Z"
    },
    {
      "t": 0,
      "rank": 17,
      "url": "https://www.onmsft.com/news/inspire-2023-microsoft-announces-copilot-pricing-for-e3-and-e5-customers/",
      "title": "Inspire 2023: Microsoft announces Copilot pricing for E3 and E5 customers - OnMSFT.com",
      "snippet": "Microsoft is ready to bring Copilot to Microsoft 365. Microsoft 365 Copilot is built using Microsoft’s comprehensive approach to security, identity, compliance, and responsible AI. Microsoft 365 Copilot also has the ability to jumpstart your documents, help organize your inbox and summarize your team meetings.",
      "published": "2023-07-18T15:35:18Z"
    },
    {
      "t": 0,
      "rank": 18,
      "url": "https://www.bleepingcomputer.com/news/microsoft/microsoft-expands-access-to-cloud-logging-data-for-free-after-exchange-hacks/",
      "title": "Microsoft expands access to cloud logging data for free after Exchange hacks",
      "snippet": "Microsoft expands access to cloud logging data for free after Exchange hacks This wider availability comes after Chinese hackers stole a Microsoft signing key that allowed them to breach corporate and government Microsoft Exchange and Microsoft 365 accounts to steal email. However, this does not mean Microsoft Purview Audit (Premium) is going away,..",
      "published": "2023-07-19T16:13:24Z"
    },
    {
      "t": 0,
      "rank": 19,
      "url": "https://interestingengineering.com/innovation/first-analog-optical-computer-microsoft",
      "title": "Microsoft unveils the world's first analog optical computer to solve optimization problems",
      "snippet": "Microsoft unveils the world&#39;s first analog optical computer to solve optimization problems It has teamed up with Barclays Bank to demonstrate how the computer can be used in everyday life. Created: Jun 28, 2023 07:40 AM EST",
      "published": "2023-07-19T03:43:58Z"
    },
    {
      "t": 0,
      "rank": 20,
      "url": "https://www.pcworld.com/article/1998744/14-hidden-free-tools-from-adobe-microsoft-and-co.html",
      "title": "14 free tools: Obscure yet helpful software from Adobe, Microsoft, and more",
      "snippet": "It’s important to note that the free programs from Adobe and Ashampoo are best downloaded via their own software platforms — Adobe Creative Cloud and Ashampoo Connect, respectively — which require you to create an account before you’re given access to the freebies. The Aiseesoft Free Video Converter is a very easy-to-use program that allows you to ..",
      "published": "2023-07-19T12:30:00Z"
    }
  ]
}

```

</details>
