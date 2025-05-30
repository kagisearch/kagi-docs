# Setting Kagi as Your Default Search Engine

## Table of Contents

- [Option 1: Use Orion browser by Kagi (currently for macOS/iOS only)](#orion)
- [Option 2: Using the Kagi Browser Extension](#browser_extension)
  - [Setting up the Extension](#setting_up_extension)
    - [Google Chrome](#setting_up_extension_google_chrome)
    - [Safari for Mac](#setting_up_extension_safari_mac)
	    - [Choosing a Search Engine to Redirect (Mac)](#choosing_a_search_engine_to_redirect_mac)
    - [Safari for iOS](#setting_up_extension_safari_ios)
	    - [Choosing a Search Engine to Redirect (iOS)](#choosing_a_search_engine_to_redirect_ios)
  - [Note for Safari Users: Browsing History](#safari_extension)
  - [Note for Brave Browser Users](#brave_extension)
  - [Note for Opera Browser Users](#opera_extension)
- [Option 3: Manual Configuration](#manual_configuration)
  - [Custom use](#custom_use)
  - [Private Session link (use Kagi in private windows without logging in)](#private_session)
  - [Chromium-Based Browsers (Chrome, Edge, Brave, Vivaldi, Arc...)](#chromium_browsers)
    - [Desktop](#chromium_desktop)
    - [Mobile (iOS/Android)](#chromium_mobile)
  - [Firefox-Based Browsers](#firefox_browsers)
    - [Desktop](#firefox_desktop)
    - [Android Mobile](#firefox_android_mobile)
    - [iOS](#firefox_ios)
  - [Safari](#safari)
    - [Desktop](#safari_desktop)
    - [iOS & iPadOS](#safari_ios_ipados)
  - [Firefox Focus](#firefox_focus)
    - [Android Mobile](#firefox_focus_android_mobile)
    - [iOS](#firefox_focus_ios)
  - [Custom Use](#custom_use)



<a name="orion"></a>
## Option 1: Use Orion browser by Kagi (currently for macOS/iOS only) {#orion}

If you use Apple devices with macOS/iOS/iPadOS you can use Orion browser by Kagi. It has Kagi built-in and is the easiest option to start using Kagi.

[Download Orion](https://kagi.com/orion/).

You can also scan the QR Code below to download Orion on your iPhone or iPad:

![Orion for iOS QR Code](./media/orion_ios_qr_code.png){width=256px data-zoomable}

Tip: It is recommended you enter your private session link in Orion settings, as it will allow you to use Kagi in private windows and after clearing cookies. To do this, first go to **Orion** > **Settings**.

<img src="./media/macos_setting_default_1_orion_settings_menu.png" width="500" alt="Orion - Settings Menu"><br />

Next, go to the **Search** tab, select Kagi under **Search engine**, then click on **Kagi Settings**.

<img src="./media/macos_setting_default_2_orion_kagi_settings.png" width="500" alt="Orion - Kagi Settings"><br />

A modal will appear, click the **Get Your Session Link** button to get the link with your token and paste it in the text field, then click **OK**.

<img src="./media/macos_setting_default_3_orion_session_link.png" width="500" alt="Orion - Session Link"><br />

<a name="browser_extension"></a>
## Option 2: Using the Kagi Browser Extension {#browser_extension}

Kagi is available as an extension for all major browsers. The extension sets Kagi as the default search engine on some browsers/platforms and allows you to **search with Kagi even in a private window without logging in** (this can be also set manually with the use of a [private session link](#private_session)).

Extension download links:

- [Chromium-based browsers](https://chrome.google.com/webstore/detail/cdglnehniifkbagbbombnjghhcihifij) (Chrome, Edge, Brave, Vivaldi, Arc...)
  - After installing the extension make sure to [set Kagi as your default search engine](#chromium_browsers).
- [Firefox-based browsers](https://addons.mozilla.org/en-US/firefox/addon/kagi-search-for-firefox/)
  - If you use Firefox on Android, please know there are [many known limitations](https://github.com/kagisearch/browser_extensions/issues/3) with the extension, at this moment. That means you need to follow the [Firefox Android search setup](#firefox_android_mobile) above to search with Kagi.
  - After installing the extension, if your profile deletes cookies frequently, go to the extension settings (click the puzzle piece in the top right corner of the browser window) for Kagi and enter your [private session token URL](#private_session) to be logged in automatically even when cookies have been deleted.
  - If you run into a problem of not being logged in to Kagi on incognito sessions, try manually setting your session token. If that doesn't work, try disallowing it on Incognito, saving the session token manually, and then re-allowing it again.
- [Safari for macOS/iOS](https://apps.apple.com/app/kagi-search-for-safari/id1622835804)
  - You can also scan the QR code below to download the extension on your iPhone or iPad:
![Kagi for Safari QR Code](./media/kagi_safari_extension_qr_code.png){width=256px data-zoomable}
- The [xSearch](https://apps.apple.com/app/xsearch-for-safari/id1579902068), [QueryDial](https://apps.apple.com/app/querydial/id6478811925) and [HyperWeb](https://apps.apple.com/app/hyperweb/id1581824571) extensions for Safari also support Kagi

If you are a macOS, iOS, or iPadOS user, you can complement your Kagi experience with the free [Orion](https://browser.kagi.com) web browser, produced by the same team that built Kagi Search.

<a name="setting_up_extension"></a>
### Setting up the Extension {#setting_up_extension}

<br />

###

<br />




<a name="safari_extension"></a>
### Note for Safari Users: Browsing History {#safari_extension}

When you install the Kagi Search browser extension in Safari, you will see the extension requires access to your browsing history. This access is needed so the extension can intercept queries sent to other search engines and instead send them to Kagi Search.

No data from your browsing history is sent to Kagi Search beyond the search queries you make while running the extension. All queries made to Kagi Search are anonymized, never being tied to your specific Kagi Search account.


<a name="brave_extension"></a>
### Note for Brave Users: Settings Update {#brave_extension}

In addition to installing the Kagi Browser Extension, Brave users must also make a settings change in the Brave web browser:

1. Go to **Settings** > **Search engine** ([link](brave://settings/?search=index+other+search)).
2. Turn on the "Index other search engines" option.


<a name="opera_extension"></a>
### Note for Opera Users: No Longer Compatible {#opera_extension}

Opera is no longer compatible as it is restricting users from using alternative search engines. If you are an Opera user you can [reach out to Opera](https://opera.atlassian.net/servicedesk/customer/portal/9) and request them to add Kagi to their list of search engines.

<a name="manual_configuration"></a>
## Option 3: Manual Configuration {#manual_configuration}

You can configure your web browser manually to use Kagi as its default search engine.

If you are interested in using Kagi in private (incognito) browser windows, be sure to check our section on [private session tokens​](#private_session).


<a name="custom_use"></a>
### Custom Use {#custom_use}

If you want to manually set Kagi as a default search engine, use these settings:

- Kagi Search URL `https://kagi.com/search?q=%s`

- Kagi auto suggestions URL `https://kagi.com/api/autosuggest?q=%s`


<a name="private_session"></a>
### Private Session Link {#private_session}

To use Kagi Search inside a private browser window without logging in, you can use the Session Link feature found in your [Account Settings](https://kagi.com/settings?p=user_details).

The session link will include a special token that will allow you to log into Kagi even in a private browsing window.

Read more about [Session Link](../privacy/private-browser-sessions.md)


<a name="chromium_browsers"></a>
### Chromium-Based Browsers (Chrome, Edge, Brave, Vivaldi, Arc...) {#chromium_browsers}

Unfortunately, as [this github issue](https://github.com/kagisearch/browser_extensions/issues/2) is tracking, there is a limitation with Chromium-based browsers, which don't allow extensions to set default search engines. As such, you need to do it manually.



<a name="chromium_mobile"></a>
###

<a name="firefox_browsers"></a>
### Firefox-Based Browsers {#firefox_browsers}


<a name="firefox_desktop"></a>

<a name="firefox_android_mobile"></a>
###
<a name="firefox_ios"></a>
###

<a name="safari"></a>
### Safari {#safari}


<a name="safari_desktop"></a>
###

<a name="safari_ios_ipados"></a>
###

<a name="firefox_focus"></a>
### Firefox Focus {#firefox_focus}


<a name="firefox_focus_android_mobile"></a>
###

<a name="firefox_focus_ios"></a>
###