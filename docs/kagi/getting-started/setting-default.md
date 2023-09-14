# Setting Kagi as Your Default Search Engine

## Table of Contents

- [Option 1: Use Orion browser by Kagi (currently for macOS/iOS only)](#orion)
- [Option 2: Using the Kagi Browser Extension](#browser_extension)
  - [Access to Safari Browsing History](#safari_extension)
  - [Note for Brave Browser Users](#brave_extension)
  - [Note for Opera Browser Users](#opera_extension)
- [Option 3: Manual Configuration](#manual_configuration)
  - [Custom use](#custom_use)
  - [Private Session link (use Kagi in private windows without logging in)](#private_session)
  - [Chromium-Based Browsers (Chrome, Edge, Brave, Vivaldi, Arc...)](#chromium_browsers)
    - [Desktop](#chromium_desktop)
    - [Mobile](#chromium_mobile)
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

[Download Orion](https://browser.kagi.com).

Tip: It is recommended you enter your private session link in Orion settings, as it will allow you to use Kagi in private windows and after clearing cookies. To do this, first go to **Orion** > **Settings**.

<img src="./media/macos_setting_default_1_orion_settings_menu.png" width="500" alt="Using Orion Notes"><br />

Next, go to the **Search** tab, select Kagi under **Search engine**, then click on **Kagi Settings**.

<img src="./media/macos_setting_default_2_orion_kagi_settings.png" width="500" alt="Using Orion Notes"><br />

A modal will appear, click the **Get Your Session Link** button to get the link with your token and paste it in the text field, then click **OK**.

<img src="./media/macos_setting_default_3_orion_session_link.png" width="500" alt="Using Orion Notes"><br />

<a name="browser_extension"></a>
## Option 2: Using the Kagi Browser Extension {#browser_extension}

Kagi is available as an extension for all major browsers. The extension sets Kagi as the default search engine and allows you to **search with Kagi even in a private window without logging in** (this can be also set manually with the use of a [private session link](https://help.kagi.com/kagi/getting-started/setting-default.html#private_session)).

Extension download links:

- [Chromium-based browsers](https://chrome.google.com/webstore/detail/cdglnehniifkbagbbombnjghhcihifij) (Chrome, Edge, Brave, Vivaldi, Arc...)
- [Firefox-based browsers](https://addons.mozilla.org/en-US/firefox/addon/kagi-search-for-firefox/)
  - If you use Firefox on Android, check out [this guide](https://blog.mozilla.org/addons/2020/09/29/expanded-extension-support-in-firefox-for-android-nightly/). Android doesn't set Kagi as the default search engine, but it allows search in private mode to work normally.
  - After installing the extension, go to the extension settings (click the puzzle piece in the top right corner of the browser window) for Kagi and enter your [private session token URL](#private_session) to be logged in automatically even when cookies have been deleted.
- [Safari for macOS](https://apps.apple.com/app/kagi-search-for-safari/id1622835804)
- [Safari for iOS and iPadOS](https://apps.apple.com/app/kagi-search-for-safari/id1607766153)
- The [xSearch](https://apps.apple.com/us/app/xsearch-for-safari/id1579902068) and [HyperWeb](https://apps.apple.com/us/app/hyperweb/id1581824571) extensions for Safari also support Kagi

If you are a macOS, iOS, or iPadOS user, you can complement your Kagi experience with the free [Orion](https://browser.kagi.com) web browser, produced by the same team that built Kagi Search.


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

If you are interested in using Kagi in private (incognito) browser windows, be sure to check our section on [private session tokens​](https://help.kagi.com/kagi/getting-started/setting-default.html#private_session).


<a name="custom_use"></a>
### Custom Use {#custom_use}

If you want to manually set Kagi ase a default search engine, use these settings:

- Kagi Search URL [https://kagi.com/search?q={searchTerms}](https://kagi.com/search?q={searchTerms})

- Kagi auto suggestions URL [https://kagi.com/api/autosuggest?q={searchTerms}](https://kagi.com/api/autosuggest?q={searchTerms})


<a name="private_session"></a>
## Private Session Link {#private_session}

To use Kagi Search inside a private browser window without logging in, you can use the Session Link feature found in your [Account Settings](https://kagi.com/settings?p=user_details).

The session link will include a special token that will allow you to log into Kagi even in a private browsing window.

Read more about [Session Link](../privacy/private-browser-sessions.md)


<a name="chromium_browsers"></a>
### Chromium-Based Browsers (Chrome, Edge, Brave, Vivaldi, Arc...) {#chromium_browsers}


<a name="chromium_desktop"></a>
#### Desktop {#chromium_desktop}

1. Open this URL in your search bar: [chrome://settings/searchEngines](chrome://settings/searchEngines).
2. Click **Add** and fill in these details:
    - **Search engine:** Kagi Search
    - **Keyword:** kagi
    - **Query URL:** https://kagi.com/search?q=%s
3. Click the three dots.
4. Click **Make default**.

Note: Opera is no longer compatible as it is restricting users from using alternative search engines. If you are an Opera user you can [reach out to Opera](https://opera.atlassian.net/servicedesk/customer/portal/9) and request them to add Kagi to their list of search engines.

<img src="./media/kagi_default_chrome.jpg" width="675" alt="Setting Kagi as Default Search Engine in Chrome"><br />


<a name="chromium_mobile"></a>
#### Mobile {#chromium_mobile}

1. Open [https://kagi.com](https://kagi.com), log in, and submit a search.
2. Open your browser’s settings. Choose **Search engine**.
3. Select **Kagi Search** from the Recently Visited section.

If you want to have Kagi Search easily available on Android after configuring Chrome, follow these steps:

1. Go to the Home screen
2. Tap and hold anywhere to show options
3. Tap on Widgets
4. Find the Chrome widgets in the list
5. Select and add the Search widget

<a name="firefox_browsers"></a>
### Firefox-Based Browsers {#firefox_browsers}


<a name="firefox_desktop"></a>
#### Desktop {#firefox_desktop}

1. Open [https://kagi.com](https://kagi.com), then right-click the browser address/search bar and select **Add Kagi Search**.
2. Open this URL in your search bar: [about:preferences#search](about:preferences#search)
3. Scroll to **Default Search Engine** and select **Kagi** from the dropdown.

To set up a private session link in Firefox, use [this extension](https://addons.mozilla.org/en-US/firefox/addon/add-custom-search-engine/) with:
[https://kagi.com/search?token=TOKEN&q=%s](https://kagi.com/search?token=TOKEN&q=%s)

<img src="./media/kagi_default_firefox1.jpg" width="675" alt="Setting Kagi as Default Search Engine in Firefox 1">

<img src="./media/kagi_default_firefox2.jpg" width="675" alt="Setting Kagi as Default Search Engine in Firefox 2">


<a name="firefox_android_mobile"></a>
#### Android Mobile {#firefox_android_mobile}

1. Tap the three-dot menu button.

<img src="./media/firefox_android.png" width="300" alt="Firefox Android Menu Button">

2. Tap **Settings**.
3. In the **General** section, tap **Search**.
4. Tap **Add search engine**.
5. A list of additional predefined search engines will be displayed.
6. Tap the **Other** radio button to add a search engine and do the following:
    - in the **Name** field, enter **Kagi**.
    - In the **Search string to use** field, enter **https://kagi.com/search?q=%s**
    - In the **Search suggestion API (optional)** field, enter **https://kagi.com/api/autosuggest?q=%s** 
    - Tap the confirmation button in the top right corner of the screen.

If your browser is configured to default to private browsing, this will require you to log back in to Kagi each time your tabs are closed. To get around this, in the **Search string to use** field, use your [session link](https://kagi.com/settings?p=user_details) and append `&q=%s` at the end.

<a name="firefox_ios"></a>
#### iOS {#firefox_ios}

1. Tap the menu button, then **Settings** > **Search** > **Add Search Engine**.
1. Enter the following:
    - **Title**: `Kagi`
    - **URL**: `https://kagi.com/search?q=%s`
1. Tap **Save**.
1. Under **Default Search Engine**, select **Kagi**.


<a name="safari"></a>
### Safari {#safari}


<a name="safari_desktop"></a>
#### Desktop {#safari_desktop}

1. Install the [Kagi Search for Safari extension](https://apps.apple.com/app/kagi-search-for-safari/id1622835804).
2. Activate the extension in **Safari** > **Preferences** > **Extensions**.
3. Enjoy Kagi search from your Safari address bar!

If you are a macOS, iOS, or iPadOS user, we strongly recommend using Kagi with the free [Orion](https://browser.kagi.com/) web browser, produced by the same team that built Kagi.


<a name="safari_ios_ipados"></a>
#### iOS & iPadOS {#safari_ios_ipados}

Use the [Orion iOS/iPadOS web browser](https://browser.kagi.com), which has native support for Kagi Search.

If you prefer to use Safari, you can use the [Kagi Search for Safari extension](https://apps.apple.com/app/kagi-search-for-safari/id1607766153).


<a name="firefox_focus"></a>
### Firefox Focus {#firefox_focus}


<a name="firefox_focus_android_mobile"></a>
#### Android Mobile {#firefox_focus_android_mobile}

1. Tap the menu button, then **Settings** > **Search** > **Search Engine** > **Add another search engine**.
1. Enter the following:
    - **Search engine name**: `Kagi`
    - **Search string to use**: (use your [session link](https://kagi.com/settings?p=user_details) and append `&q=%s` at the end)
1. Tap **Save**.


<a name="firefox_focus_ios"></a>
#### iOS {#firefox_focus_ios}

1. Tap the menu button, then **Settings** > **Search Engine** > **Add Another Search Engine**.
1. Enter the following:
    - **Name to display**: `Kagi`
    - **Search string to use**: (use your [session link](https://kagi.com/settings?p=user_details) and append `&q=%s` at the end)
1. Tap **Save**.


