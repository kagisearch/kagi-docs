# Setting Kagi as Your Default Search Engine

For a better experience we recommend setting Kagi as your default in your browser.
Choose your browser below for instructions:


| **Orion** | **Chrome** | **Safari** | **Firefox** |
|---|---|---|---|
| <img src="./setting-default/media/orion_icon.png"   alt="Orion"  width="96"> | <img src="./setting-default/media/chrome_icon.png"  alt="Chrome"  width="96"> | <img src="./setting-default/media/safari_icon.png" alt="Safari" width="96"> | <img src="./setting-default/media/firefox_icon.png" alt="Firefox" width="96"> |
| [Mac](./setting-default/orion-mac.md)<br>[iPhone / iPad](./setting-default/orion-iphone-ipad.md) | [Desktop / Mac](./setting-default/chromium-desktop.md)<br>[iPhone / iPad](./setting-default/chromium-mobile.md)<br>[Android](./setting-default/chromium-mobile.md) | [Mac](./setting-default/safari-mac.md)<br>[iPhone / iPad](./setting-default/safari-iphone-ipad.md) | [Desktop / Mac](./setting-default/firefox-desktop.md)<br>[iPhone / iPad](./setting-default/firefox-ios.md)<br>[Android](./setting-default/firefox-android.md) |


| **Edge** | **Brave** | **Vivaldi** | **Firefox Focus** |
|---|---|---|---|
| <img src="./setting-default/media/edge_icon.png"    alt="Edge"    width="96"> | <img src="./setting-default/media/brave_icon.png"   alt="Brave"   width="96"> | <img src="./setting-default/media/vivaldi_icon.png" alt="Vivaldi" width="96"> | <img src="./setting-default/media/firefox_focus_icon.png" alt="Firefox Focus" width="96"> |
| [Desktop / Mac](./setting-default/chromium-desktop.md)<br>[iPhone / iPad](./setting-default/edge-ios.md)<br>[Android](./setting-default/chromium-mobile.md) | [Desktop / Mac](./setting-default/chromium-desktop.md)<br>[iPhone / iPad](./setting-default/brave-ios.md)<br>[Android](./setting-default/chromium-mobile.md) | [Desktop / Mac](./setting-default/vivaldi-desktop.md)<br>[iPhone / iPad](./setting-default/vivaldi-ios.md)<br>[Android](./setting-default/chromium-mobile.md) | [iPhone / iPad](./setting-default/firefox-focus-iphone-ipad.md)<br>[Android](./setting-default/firefox-focus-android.md) |


## Custom Use {#custom_use}

If you want to manually set Kagi as a default search engine, use these settings:

- Kagi Search URL `https://kagi.com/search?q=%s`

- Kagi auto suggestions URL `https://kagi.com/api/autosuggest?q=%s`

- Kagi auto suggestions URL (Privacy Pass) `https://kagisuggest.com/api/autosuggest?q=%s`

- Reverse image search URL `https://kagi.com/reverse/upload`. 
    * For image search to work, you have to pass the image you are trying to reverse-search in a `file` POST parameter. For example, in Vivaldi to achieve this you have to set "POST parameters of image search" to `file={google:imageThumbnail}`
