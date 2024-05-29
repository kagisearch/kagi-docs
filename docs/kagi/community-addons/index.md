# Community Add-ons

Members of the Kagi community have brought Kagi to their favorite tools!
You can find a list below of integrations that our users have contributed to other products, or built themselves.

If you created or found a Kagi integration with other products or tools, we would happily welcome a [pull request to this page](https://github.com/kagisearch/kagi-docs/edit/main/kagi/src/support-and-community/open-source.md)!

## Raycast

[Raycast](https://www.raycast.com/) is a extendible launcher application for MacOS.

- [FastGPT for Raycast](https://www.raycast.com/http.james/kagi-fastgpt): Bring the power of our [FastGPT API](../api/fastgpt.md) right to your desktop.

## Alfred

[Alfred](https://www.alfredapp.com/) is a macOS utility for adding custom hotkeys, actions, and more.

- [Kagi Alfred Workflow](https://github.com/david-ros/kagi-alfred-workflow): Collection of custom keywords to instantly open Kagi
- [FastGPT Alfred Workflow](https://github.com/david-ros/fastgpt-alfred-workflow): Access our [FastGPT API](../api/fastgpt.md) from your desktop using Alfred.

## PopClip

[PopClip](https://www.popclip.app) is a macOS utility tool that pops up with a menu of actions when you select text on your screen.

- [Kagi search extension for PopClip](https://www.popclip.app/extensions/x/1e35e): Search Kagi from anywhere using PopClip.

## Bookmarklets

You can drag one of the following links to the bookmarks bar in your browser to immediately access a specific function of Kagi for the page in your current tab. You may rename the bookmarks however you want afterwards.

<a href="javascript:location='https://kagi.com/discussdoc?url='+encodeURIComponent(location)">Discuss Document (same window)</a><br>
<a href="javascript:(function(){window.open('https://kagi.com/discussdoc?url='+encodeURIComponent(location))})()">Discuss Document (new window/tab)</a><br>
<a href="javascript:location='https://kagi.com/summarizer/index.html?url='+encodeURIComponent(location)">Summarize (same window)</a><br>
<a href="javascript:(function(){window.open('https://kagi.com/summarizer/index.html?url='+encodeURIComponent(location))})()">Summarize (new window/tab)</a><br>

## Firefox Context Menu Add-on

Adds a button to the right click context menu on Firefox that allows you to open URLs in Kagi Summarizer

[Unofficial Kagi Link Summarizer Add-on](https://addons.mozilla.org/en-US/firefox/addon/unofficial-kagi-linksummarizer/)

## Apple Shortcuts

[Summarize URL](https://www.icloud.com/shortcuts/8d2668c84ad34203b47c519e066ce205): Summarize any URL using the Share Sheet or your Clipboard on your iPhone, iPad or Mac - Credits to [Sean Chou](https://twitter.com/sychou)

[Ask Kagi](https://www.icloud.com/shortcuts/c92d096f37984fe4b756a6ff2eafc795): Ask Kagi's FastGPT AI questions, Siri will read out the result. Great for idle questions in the car! You must insert your own API key, get your API key [here](https://help.kagi.com/kagi/api/fastgpt.html#quick-start) - Credits to [Alex Schuldberg](https://bsky.app/profile/schuldberg.com)

## Script Kit

- [FastGPT for Script Kit](https://scriptkit.com/api/new?name=kagi-fastgpt&url=https://gist.githubusercontent.com/awakenedhaggis/bd9dbf2421325117f7e5c20f62e1c99f/raw/9ab7d843fdfb2bf3b1e3c65e5c4774fe896abc91/kagi-fastgpt.ts): Access our [FastGPT API](../api/fastgpt.md) directly from your desktop using Script Kit.

## Chrome Extension

[FastGPT to Markdown](https://chromewebstore.google.com/detail/kagi-fastgpt-to-markdown/bamhebecdlhhkedgncapjoofbohgiogc): Copy Kagi FastGPT question and answer to your clipboard, nicely formatted in Markdown.

## Emacs
- [kagi.el](https://codeberg.org/bram85/kagi.el): Emacs package that provides access to the Kagi FastGPT and Universal Summarizer API.

## BangNavigator

[BangNavigator](https://github.com/FaFre/bang_navigator) is a privacy-centric search and research browser designed to enhance your mobile search experience while ensuring your personal data and identity remains secure during research.

Some of the features are:

- **Privacy by Default**: Incognito mode is enabled by default to keep your searches and browsing history private.
- **Full Browser Functionality**: Includes all the essential features of a basic browser to browse the web efficiently.
- **Kagi Integration**: Seamlessly integrates Kagi's search, assistant, and summarizer tools within a user-friendly interface.
- **Easy Sharing**: Share URLs or text from any app directly into BangNavigator without the need to copy and paste, for direct use with summarizer/assistant.
- **Quick Summarization**: Long press any link on a website to get a summary via Kagi's summarizer.
- **Enhanced Text Interaction**: Custom context menu allows for easy passage of marked text to Kagi's search or assistant tools.
- **Home Widget**: Includes a home screen widget for quick actions, enhancing productivity.
- **Speech Input**: Supports voice commands for hands-free operation and accessibility.
- **PDF processing**: Open and directly summarize/prompt PDF documents.

## kago! for kagi

[kago! for kagi](https://play.google.com/store/apps/details?id=com.ryvelia.kago) is a community-developed app designed to bring the search capabilities of Kagi to mobile devices, similar to how Google Go functions. Built using Flutter, this app focuses on providing a fast and easy search experience for users on the go. It is an uncommercial project, aiming to improve accessibility without any commercial intent, and will soon be open-sourced to allow for community contributions. Currently, Kago! for Kagi is available only for Android, and you can find it on the [Google Play Store](https://play.google.com/store/apps/details?id=com.ryvelia.kago).
