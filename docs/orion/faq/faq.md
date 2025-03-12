# Frequently Asked Questions (FAQ)

## Table of Contents

- [What is Orion?](#what-is-orion)
- [How do I replay the intro video](#how-do-i-replay-the-intro-video)
- [Why is it important for an app to be native?](#why-is-it-important-for-an-app-to-be-native)
- [Why use Orion instead of Safari?](#why-use-orion-instead-of-safari)
- [Why use Orion instead of Chrome, Firefox or other browsers based on Chromium/Firefox?](#why-use-orion-instead-of-chrome-firefox-or-other-browsers-based-on-chromium-firefox)
- [How fast is Orion?](#how-fast-is-orion)
- [How much memory does Orion use?](#how-much-memory-does-orion-use)
- [How does Orion respect my online privacy?](#how-does-orion-respect-my-online-privacy)
- [How does Orion protect my online privacy?](#how-does-orion-protect-my-online-privacy)
- [How do I clear Cookies?](#how-do-i-clear-cookies)
- [How does Orion support extensions?](#how-does-orion-support-extensions)
- [Does Orion have an iPhone or iPad app?](#does-orion-have-an-iphone-or-ipad-app)
- [Is there any way to get a previous build of Orion?](#is-there-any-way-to-get-a-previous-build-of-orion)
- [How do I enable Debug menu?](#how-to-use-debug-menu)
- [How do I access my Favorites via shortcuts (CMD + #)?](#how-do-i-access-my-favorites-via-shortcuts-cmd)
- [Orion is displaying wrong icons for Favorites and Frequently Visited pages — how can I fix that?](#orion-is-displaying-wrong-icons-for-favorites-and-frequently-visited-pages-—-how-can-i-fix-that)
- [How do I change the app icon?](#how-do-i-change-the-app-icon)
- [Should I use the Chrome or Firefox version of an extension in Orion?](#whichext)
- [Does Orion have unique features?](#features)
- [Will Orion have feature xyz?](#featuresupport)
- [Why is the ad-blocker turned on by default in Orion?](#noads)
- [Is Orion open-source?](#oss)
- [Is Orion truly safe if it's not open-source?](#ossprivacy)
- [How will Orion make money?](#business)
- [Why does Orion look very similar to Safari (and not Chrome or Firefox)?](#based)
- [Any "pro tips" for Orion users?](#tips)
- [Why are some of the sites added to content blocker settings as OFF by default?](#contentblocker)
- [Help! A site isn't working!](#compatibility)
- [Is there a public issue tracker?](#issuetracker)
- [What is Orion based on?](#tech)
- [How to reset Orion to factory settings?](#reset)
- [Are there plans for a Windows/Linux/Android version of Orion?](#other_os_support)

<a name="what_is_orion"></a>
## What is Orion?

Orion is a native, lightning-fast, and privacy-protecting browser for Apple users, open to the web and all its standards and protocols. It's based on the [WebKit](https://en.wikipedia.org/wiki/WebKit) open-source browser engine that also powers Apple's Safari web browser. One day, we hope everyone will say Orion is the best browser for all Apple devices.

Orion was built for professionals by professionals, but anyone can benefit from it. Installing Orion with its default settings on any Apple device will cut down on annoying ads and speed up page loads. We want everyone to enjoy the web.

<a name="intro_vide"></a>
## How do I replay the intro video?

Watch it here in even higher quality!

<video src="./media/orion_intro_video.mp4#t=0.1" width="720" type="video/mp4" preload="metadata" controls disablepictureinpicture />

<a name="native"></a>
## Why is it important for an app to be native?

We take pride in Orion being 100% native on macOS/iOS/iPadOS.

Let's define what native means first: A native macOS app is an app that is specifically designed for the Apple macOS operating system and utilizes its APIs, frameworks, UI components, and guidelines.

The main benefits of native apps include:

- Ensuring that the app feels familiar to users. HIG provides guidance on how to design an intuitive UI that follows platform conventions and therefore provides a consistent experience across apps for new and veteran users.

- It is generally accepted that Apple knows what it is doing when design is in question. It is probably a good idea to follow its lead and probably one of the reasons you own a Mac or an iPhone. Following the extensive Human Interface Guidelines (HIG) makes any designer's job easier, not harder.

- Any long-time Mac user can easily see how Chrome or Firefox look and feel out of place on a Mac. These browsers were originally designed for Windows, but they work and look the same even on macOS or Linux, when those are clearly different operating systems with different conventions, design rules, and aesthetics.

- Native integrations allow apps to use powerful components provided by the OS. For example, Orion utilizes Keychain to store passwords or gets the benefit of Live Text recognition of text in images. This makes apps more powerful while being leaner and easier to build and maintain at the same time.

- Finally, and maybe most importantly, using native components and frameworks generally makes apps faster, better for battery life, and overall snappier.

<a name="orion_over_safari"></a>
## Why use Orion instead of Safari?

Safari is truly one of the best browsers you can use on macOS, and we're grateful to Apple for creating such a solid foundation. By basing Orion on Safari's tech stack, then adding productivity enhancements such as built-in ad-blocking, Orion can provide users with [exactly what they need](../why-orion/orion-vs-safari.md).


<a name="orion_over_chrome"></a>
## Why use Orion instead of Chrome, Firefox, or other browsers based on Chromium/Firefox?

Google and Mozilla have made great technological strides over the past decades. We're grateful for those efforts because they help us take [the next step in browser evolution](../why-orion/kagi-vs-others.md).

<a name="howfast"></a>
## How fast is Orion?

We are... ahem.. [fast](../why-orion/orion-speed.md).

<a name="memory"></a>
## How much memory does Orion use?

Orion is lightweight, with [advanced memory-use technology](../why-orion/memory-usage.md) that includes the best closed-tab management of all contemporary browsers.

<a name="respectprivacy"></a>
## How does Orion respect my online privacy?

Orion has no built-in telemetry, so it can never "phone home" and risk exposing your data. Orion is truly and verifiably a [privacy-respecting browser](../privacy-and-security/respecting-privacy.md) — unlike those that only offer the illusion of privacy.

<a name="protectprivacy"></a>
## How does Orion protect my online privacy?

Web ads have steadily eroded the online experience with their layout crowding, page slowing, annoying popups, and insidious malware. Yet, most browsers do not block ads by default. [Orion is different](../privacy-and-security/protecting-privacy.md).

<a name="cookies"></a>
## How do I clear cookies?

Go to _Settings->Orion->Manage_ to search and clear individual site cookies OR _Orion->Reset_ to reset ALL cookies, history, bookmarks, etc.

<a name="extensions"></a>
## How does Orion support extensions?

Orion supports browser extensions based on open-standard WebExtensions APIs. These are the same APIs that power browser extensions for Chrome and Firefox. So, we support many of those extensions on [macOS](../browser-extensions/macos-extensions.md), [iOS](../browser-extensions/ios-ipados-extensions.md), and [iPadOS](../browser-extensions/ios-ipados-extensions.md).

<a name="iOS"></a>
## Does Orion have an iPhone or iPad app?

Yep, Orion is available for both [iOS](https://apps.apple.com/app/orion-browser-by-kagi/id1484498200) and [iPadOS](https://apps.apple.com/app/orion-browser-by-kagi/id1484498200?platform=ipad).

<a name="oldbuilds"></a>
## Is there any way to get a previous build of Orion?

Yes, things don't always go as planned and mistakes can happen. If you ever need a previous version, you need to type a specific URL to get the version you want:  https://cdn.kagi.com/updates/{Current_OS}/{Orion_Beta_Version}.zip

### Examples: Version 0.99.125-beta
- [cdn.kagi.com/updates/14_0/125.zip](https://cdn.kagi.com/updates/14_0/125.zip)  (Sonoma)
- [cdn.kagi.com/updates/13_0/125.zip](https://cdn.kagi.com/updates/13_0/125.zip)  (Ventura)
- [cdn.kagi.com/updates/12_0/125.zip](https://cdn.kagi.com/updates/12_0/125.zip)  (Monterey)
- [cdn.kagi.com/updates/11_0/125.zip](https://cdn.kagi.com/updates/11_0/125.zip)  (Big Sur)
- [cdn.kagi.com/updates/10_15/125.zip](https://cdn.kagi.com/updates/10_15/125.zip) (Catalina)
- [cdn.kagi.com/updates/10_14_0/125.zip](https://cdn.kagi.com/updates/10_14/125.zip) (Mojave)

<a name="debugmenu"></a>
## How to use Debug menu?

Orion's debug menu contains a number of commands that can be of interest to "advanced" users. To enable the Debug menu, type the following in the terminal:

> defaults write com.kagi.kagimacOS DebugMenu 1

If you use Orion RC (release candidate), replace with com.kagi.kagimacOS.RC.

When you relaunch Orion, you'll find a new Debug menu, located to the right of the Help menu.

- Test Web Page: Web page for testing with default configuration and without any WebExtension scripts

- Reset Welcome Animation State: To reset the welcome animation flag to see it again on the next launch

- Reset Preferences: Reset all global settings

- Clear Website Data: Remove all website data (cache, cookies, etc.)

- Clear Content Blocking Lists: Remove the Content Blocking List so that it can be initialized again on next launch

- Clear Policy Cache: Removes WebRequest APIs request/response blocking (from WebExtensions like uBlock Origin) cache

- Disable Resource Interceptor: Bypass any requests/response interception (used by WebRequests API) to reduce request/response delay

- Disable Reloading Tab on WebKit Crash: Disables the auto-reload feature of the webpage when the WebContent process crashes

- Show Debug Log: Shows WebExtension API console logs for testing/debugging

- Factory Reset: Wipe all data and reset Orion to factory settings

You can read more about Orion's advanced features in the [technical documentation](../misc/technical.md).

<a name="favorites_shortcuts"></a>
## How do I access my Favorites via shortcuts (CMD + #)?

Go to Orion Settings -> Tabs, and uncheck "Use ⌘1—⌘9 to switch tabs."

Note that Orion uses a Bookmarks bar that is separate from Favorites for more control, so you would need to copy the bookmarks you want to the Bookmarks bar folder.

<a name="wrongicons"></a>
## Orion is displaying wrong icons for Favorites and Frequently Visited pages — how can I fix that?

The easiest way to fix incorrect icons is to purge the websites cache. You can accomplish this with the following steps:

**On iOS**\
Settings -> Data Management -> Clear History and Websites Data -> Toggle on *Websites Cache* -> Tap Clear.

**On macOS**\
Develop -> Empty Cache.

<a name="changeicon"></a>
## How do I change the app icon?

There are two possible ways. For a quick and easy solution using Finder:
1. Make sure default (1st) icon is selected in Preferences->Appearance 
2. Find and select Orion in Finder
3. From Finder's app menu, select File -> Get Info
4. From the icon that appears at the top next to Orion's name, either drag & drop your new icon, or select it and paste your new icon from the clipboard

To revert back to the original icon, select and press delete on the icon.

This works best for previewing the icon change, but will not work across updates, as the icon will be reset. For that, you can use an app like [Pictogram](https://pictogramapp.com).

<a name="whichext"></a>
## Should I use the Chrome or Firefox version of an extension in Orion? {#whichext}
Orion supports both Chrome and Firefox extensions. Usually they're similar, but sometimes the extension developer puts extra effort in one version, maybe because they prefer that browser. 

With Orion, you can try both and use the one that works best for you. Orion is the only browser in the world that makes this choice possible!

<a name="features"></a>
## Does Orion have unique features? {#features}
Yes! Modern browsers have so many untapped opportunities for innovation that we had to dig in and explore. We're excited with the results, so here are a few examples.

- Focus Mode allows the user to completely remove toolbars. Browse the web distraction-free!
- Low Power Mode extends your battery life by reducing Orion's power consumption up to 90%.
- Orion also features native vertical/tree-style tabs, if you prefer this alignment.

Read more about [Orion features](https://blog.kagi.com/orion-features).

<a name="featuresupport"></a>
## Will Orion have feature xyz? {#featuresupport}
In short, the answer to this (and other similar questions) is:

- If it is a native OS feature and it makes sense to have in a browser then yes, Orion as a native app will have it, sooner or later. An example is translation API which was introduced in Monterey and which we will happily integrate.
- If it is not, then yes, Orion can still have it, if the feature request on [orionfeedback.org](https://orionfeedback.org/) garners enough support (upvotes).

In principle, we are building an open browser. The sky is the limit and we will build features based on our available resources and perception of what best helps our users consume the web in a faster, more secure and more productive way.

<a name="noads"></a>
## Why is the ad-blocker turned on by default in Orion? {#noads}
Over [700 million devices block online ads](https://www.statista.com/statistics/435252/adblock-users-worldwide/), creating the largest silent protest in human history. We too believe in a cleaner, more humane web. 

Orion blocks both first-party and third-party ads, trackers and other annoyances by default to make your online adventures more enjoyable and more private. It also saves you time, battery and data. Yes, it may occasionally break a site, but in most cases the benefit outweighs the risk, and you can disable the blocker for that site in the settings menu (gear icon on the browser toolbar).

<a name="oss"></a>
## Is Orion open-source? {#oss} 
We're working on it! We've started with some of [our components](https://github.com/OrionBrowser) and intend to open more in the future.

Forking WebKit, porting hundreds of APIs, and writing a browser app from scratch has been challenging for our small team. Properly maintaining an open-source project takes time and resources that we are currently short on. If you would like to contribute, please consider becoming active on [orionfeedback.org](https://orionfeedback.org/).

<a name="ossprivacy"></a>
## Is Orion truly safe if it's not open-source? {#ossprivacy}
The idea that "open-source = trustworthy" only goes so far. For example, the same tech company that offers a popular open-source browser also has the largest ad/tracking network in history, with that browser playing a significant role in it. Another company with a closed-source browser (using WebKit like Orion) is at the forefront of privacy awareness and technologies in its products. 

To properly protect your data, you need good answers to two questions:

Does this browser collect and send data anywhere?
How does this browser make money?
For the first question, what happens to your collected data is always closed-source, even on open-source browsers. Unlike Orion, most modern browsers send hundreds of data packets out, and each contains private information like your IP address and browser fingerprint, in addition to any other data they send. No open-source browser vendor has opened the code that processes this collected data.

Find out whether your browser respects your privacy by launching a network proxy ([Proxyman](https://proxyman.io/), [mitmproxy](https://mitmproxy.org/), and [Charles](https://www.charlesproxy.com/) are good options on macOS). With Orion, you'll see zero unexpected requests in your network traffic log by default. You'll see something very different with nearly every other browser.

For the second question, companies that produce popular, free, open-source browsers also generate a lot of revenue. How does that happen? Knowing where their browsers sit in that chain of revenue can tell you whether you can trust that browser with your private information.

<a name="business"></a>
## How will Orion make money? {#business} 
[Orion+](https://browser.kagi.com/orionplus.html) version allows users to support Orion's development. Will it generate revenue? That's up to you. Regardless, all funding for Orion will come from its users rather than ads, tracking, data monetization or any other indirect method. 

We want Orion to be the number one Mac browser because it uses engineering craftsmanship and attention to detail to provide a superior product experience and unmatched features that work for everyone, from power users to neophytes.

We believe this project will deliver an experience that its users value enough to support. We believe this enough to promise that we'll never resort to ads or other such funding methods. Orion makes it possible, and you make Orion possible. 

<a name="based"></a>
## Why does Orion look very similar to Safari (and not Chrome or Firefox)? {#based}
We see Safari as the "reference" implementation from the OS manufacturer itself, Apple. So using Safari as our reference ensures that Orion follows best practices in design, engineering, interactions, and more. We respect the decisions that Apple made and abide by them at every point where they serve our users' interests.

<a name="tips"></a>
## Any "pro tips" for Orion users? {#tips}
Blocking web fonts can have a profound effect on news sites. On cnn.com, the average page size dropped from ~7MB to ~2MB, eliminating more than 70% of unnecessary data transfer. Those sites will load faster, use less bandwidth, and often look more readable too!

Also, on any sites that don't require logging in, disabling cookies is a great way to boost your speed and privacy.

<a name="contentblocker"></a>
## Why are some of the sites added to content blocker settings as OFF by default? {#contentblocker}
Orion comes with a built-in content blocker that, in rare cases, can affect the proper functionality of some websites.
We decided to maintain a whitelist of websites where the content blocker will be turned off by default. This list currently consists of:

- browserbench.org \
The content blocker in general interferes with JavaScript performance benchmarking.
We decided it is best to have it off to measure the real speed of WebKit's JavaScript engine.
- wizzair.com \
Interference with the rendering of the website

<a name="compatibility"></a>
## Help! A site isn't working! {#compatibility}
Orion has a "Compatibility mode" in the settings menu.
Enabling it will suspend your currently running extensions (the most common cause of problems) and save the setting for this website so it works when you visit it again. 

If the site still fails, you may want to test it in Safari. If it works there,
please report the problem to us via our [Discord server](https://kagi.com/discord).

<a name="issuetracker"></a>
## Is there a public issue tracker? {#issuetracker}
Yes. Please use [orionfeedback.org](https://orionfeedback.org/) (requires registration) to submit bug reports and feature requests as well as to upvote existing posts.

<a name="tech"></a>
## What is Orion based on? {#tech}
Orion shares much of the same technology as Safari, such as the WebKit rendering engine. We're grateful for all the performance and privacy features that Apple and its contributors built into this tech.

<a name="reset"></a>
## How to reset Orion to factory settings? {#reset}
The easiest way is by navigating to **Orion** > **Reset Orion**. Alternatively, you can enable the Debug menu and click Factory Reset.

<a name="other_os_support"></a>
## Are there plans for a Windows/Linux/Android version of Orion? {#other_os_support}
We currently do not have the resources to hire a new team to do any of these platforms yet.

Since Orion is funded by its users only, it is entirely up to the number of subscribers and Orion+ sales we have that will enable funding a new team to make Orion for any new platform. And building a browser is not cheap, especially one on top of WebKit.

Ways you can help accelerate this is:

- [Contribute](../support-and-community/contribute.md) to Orion development with your time
- Help spread the word about Orion to attract more users
- Get [Orion+](https://browser.kagi.com/orionplus.html) and financially support development

---

If you are experiencing issues, please [open a ticket](https://orionfeedback.org/) with as much detail as possible, and we will review it ASAP.

For other inquiries or simply to connect, you can email support@kagi.com.
