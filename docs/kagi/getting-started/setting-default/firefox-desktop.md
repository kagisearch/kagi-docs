> Not your browser/OS? Return to [the hub page](../../../kagi/getting-started/setting-default.md) for setting Kagi as the default search engine.
# Setting Kagi as Default on Firefox (Desktop)

## Kagi Search Extension (Recommended)

The easiest way to set Kagi as default on Firefox is by installing our [browser extension](https://addons.mozilla.org/en-US/firefox/addon/kagi-search-for-firefox/).

### Setting up the Kagi Extension in Firefox

<br />

<video src="./media/kagi_extension_firefox_desktop.mp4" width="720" type="video/mp4" autoplay muted loop playsinline disablepictureinpicture />

<br />

To enhance your browsing experience with Kagi, follow these steps to set Kagi as your default search engine in Firefox:

1. Launch Firefox.
2. Install the Kagi Search extension from [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/kagi-search-for-firefox/) by clicking the **Add to Firefox** button.
3. You will be prompted to confirm you want to add the extension. Check the **Allow this extension to run in Private Windows** option, then click **Add**.
4. In the next dialog, check **Pin extension to toolbar** and click **OK**.
5. A dialog will ask *"Kagi Search for Firefox would like to change your default search engine from Google to Kagi. Is that OK?"* Click **Yes**.
6. Click the **Kagi** icon in Firefox's toolbar. It will display Kagi's Privacy Notice. Click **Allow access**.
7. If you see a message saying *No Kagi session found*, click the **Let's go!** link (you may need to log into Kagi if you haven't already).

## Manual Configuration

1. Open [https://kagi.com](https://kagi.com), then right-click the browser address/search bar and select **Add Kagi Search**.
2. Open this URL in your search bar: [about:preferences#search](about:preferences#search)
3. Scroll to **Default Search Engine** and select **Kagi** from the dropdown.

<img src="./media/kagi_default_firefox1.jpg" width="675" alt="Setting Kagi as Default Search Engine in Firefox 1">

<img src="./media/kagi_default_firefox2.jpg" width="675" alt="Setting Kagi as Default Search Engine in Firefox 2">

To set up a private session link in Firefox:

1. Open this URL in your search bar: [about:preferences#search](about:preferences#search)
1. Click the "Add" button below the table under the heading "Search Shortcuts"
1. Click the "Advanced" button on the bottom of the popup that opens
1. Enter the following values:
	1. **Search engine name**: `Kagi Search`
	1. **URL with %s in place of search term**: `https://kagi.com/search?token=TOKEN&q=%s` (replace TOKEN with the token found in your [private session link​](./../../privacy/private-browser-sessions))
	1. **Keyword (optional)**: `kagi`
	1. **Suggestions URL with %s in place of search term (optional)**: `https://kagisuggest.com/api/autosuggest?q=%s`
1. Click the "Save Engine" button
1. Select the new "Kagi Search" as your default search engine using the dropdown at the top of this page.

To enable search suggestions in private windows:

1. Open this URL in your search bar: [about:preferences#search](about:preferences#search)
1. Select "Show search suggestions in Private Windows" underneath the **Search Suggestions** heading.
