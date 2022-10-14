#  iOS & iPadOS Extensions

## Table of Contents

- [Overview](#overview)
- [iOS Extensions Management](#ios_management)
- [iPadOS Extensions Management](#ipados_management)
- [Safari Extensions Not Supported](#safari)

<a name="overview"></a>
## Overview

<img src="media/extensions-google-firefox.png" width="200" alt="Chrome & Firefox Logos"><br />

Orion is the first web browser to offer preliminary support for some Chrome and Firefox browser extensions on iOS and iPadOS.

We've ported [hundreds of web extension APIs](macos-extensions.md#chrome_and_firefox) to run on top of the WebKit browser engine, which also runs on iOS and iPadOS.

We’re limited in the scope of APIs we can support. But, those that we do support will work out of the box, same as on desktop. And, you can one-click install them from the [Chrome](https://chrome.google.com/webstore/category/extensions) or [Firefox](https://addons.mozilla.org/en-US/firefox/extensions/) extension websites.

<a name="ios_management"></a>
## iOS Extensions Management

1. 1. Tap the three-dot menu (•••) in the bottom-right corner of your screen.
2. Tap **Extensions**.

<img src="media/ios_manage_extensions_1.png" width="300" alt="iOS Extensions Menu Choice"><br />

3. From the **Extensions** management area, you can:
  - Use the **+** button to install Firefox, Chrome, or file-based extensions
  - Disable one or more extensions
  - Uninstall one or more extensions
  
  <img src="media/ios_manage_extensions_2.png" width="300" alt="iOS Extensions Management Area"><br />

<a name="ipados_management"></a>
## iPadOS Extensions Management

1. Tap the three-dot menu (•••) in the upper-right corner of your screen.
2. Tap **Extensions**.

<img src="media/ipados_manage_extensions_1.png" width="300" alt="iPadOS Extensions Menu Choice"><br />

3. From the **Extensions** management area, you can:
  - Use the **+** button to install Firefox, Chrome, or file-based extensions
  - Disable one or more extensions
  - Uninstall one or more extensions

  <img src="media/ipados_manage_extensions_2.png" width="500" alt="iPadOS Extensions Management Area"><br />
  
  <a name="safari"></a>
## Safari Extensions Not Supported

Unfortunately, Apple uses closed, proprietary APIs for Safari extensions rather than WebExtensions APIs. So, it is not possible to use Safari extensions with Orion or any non-Safari browser.