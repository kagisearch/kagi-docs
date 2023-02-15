#  Orion iOS & iPadOS Web Extension Support

## Table of Contents

- [Overview](#overview)
- [Enabling 3rd party extensions installation](#enable_installation)
- [iOS Extensions Management](#ios_management)
- [iPadOS Extensions Management](#ipados_management)
- [Safari Extensions Not Supported](#safari)

<a name="overview"></a>
## Overview

<img src="media/extensions-google-firefox.png" width="200" alt="Chrome & Firefox Logos"><br />

Orion is the first web browser to offer preliminary support for Chrome and Firefox browser extensions on iOS and iPadOS.

Much of what we said about [Web Extensions support on desktop Orion](macos-extensions.md) stands, with further limitations in the scope of APIs we can support which are imposed by Apple. This results in a smaller number of extensions that are currently fully functional on iOS and iPadOS. But small number is better than zero, and you can one-click install them from the [Chrome](https://chrome.google.com/webstore/category/extensions) or [Firefox](https://addons.mozilla.org/en-US/firefox/extensions/) extension websites.

<a name="enable_installation"></a>
## Enabling 3rd party extensions installation

1. Tap the three-dot menu (•••) in the bottom-right corner of your screen.
2. Tap **Settings**
3. Scroll to the **Extensions** settings group, and toggle Chrome or Firefox extensions on or off

Note that the extension support is still in beta. Extension may not be fully supported yet and if you encounter problems, website issues or performance issues, you can easily disable or uninstall it in the **Extensions** list after tapping the three-dot menu (•••) in the bottom-right (on iPhone; for iPads, it's in the top-right) corner of your screen (iPhone).

<a name="ios_management"></a>
## iOS Extensions Management

1. Tap the three-dot menu (•••) in the bottom-right corner of your screen.
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
