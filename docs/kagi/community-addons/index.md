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
- [Kagi for Alfred](https://github.com/ljuillerat/alfred-kagi): A powerful Alfred workflow to interact with Kagi Search services

## PopClip

[PopClip](https://www.popclip.app) is a macOS utility tool that pops up with a menu of actions when you select text on your screen.

- [Kagi search extension for PopClip](https://www.popclip.app/extensions/x/1e35e): Search Kagi from anywhere using PopClip.

## Bookmarklets

You can drag one of the following links to the bookmarks bar in your browser to immediately access a specific function of Kagi for the page in your current tab. You may rename the bookmarks however you want afterwards.

<a href="javascript:location='https://kagi.com/discussdoc?url='+encodeURIComponent(location)">Discuss Document (same window)</a><br>
<a href="javascript:(function(){window.open('https://kagi.com/discussdoc?url='+encodeURIComponent(location))})()">Discuss Document (new window/tab)</a><br>
<a href="javascript:location='https://kagi.com/summarizer/index.html?url='+encodeURIComponent(location)">Summarize (same window)</a><br>
<a href="javascript:(function(){window.open('https://kagi.com/summarizer/index.html?url='+encodeURIComponent(location))})()">Summarize (new window/tab)</a><br>
<a href="javascript:location='https://translate.kagi.com/'+encodeURIComponent(location)">Translate (same window)</a><br>
<a href="javascript:(function(){window.open('https://translate.kagi.com/'+encodeURIComponent(location))})()">Translate (new window/tab)</a><br>

## Firefox Context Menu Add-on

Adds a button to the right click context menu on Firefox that allows you to open URLs in Kagi Summarizer

[Unofficial Kagi Link Summarizer Add-on](https://addons.mozilla.org/en-US/firefox/addon/unofficial-kagi-linksummarizer/)

## Apple Shortcuts

[Summarize URL](https://www.icloud.com/shortcuts/8d2668c84ad34203b47c519e066ce205): Summarize any URL using the Share Sheet or your Clipboard on your iPhone, iPad or Mac - Credits to [Sean Chou](https://twitter.com/sychou)

[Ask Kagi](https://www.icloud.com/shortcuts/c92d096f37984fe4b756a6ff2eafc795): Ask Kagi's FastGPT AI questions, Siri will read out the result. Great for idle questions in the car! You must insert your own API key, get your API key [here](https://help.kagi.com/kagi/api/fastgpt.html#quick-start) - Credits to [Alex Schuldberg](https://bsky.app/profile/schuldberg.com)

[Talk to Kagi](https://www.dropbox.com/scl/fi/3v7pv92cold4zwfikn0bi/Talk-to-Kagi.shortcut?rlkey=yp3yjoukdpdspa5nmr4rjsig0&e=1&dl=0): an enhanced version of Ask Alex Schuldberg's Ask Kagi that makes use of Siri's native Text-to-Speech, as well as a conversational loop with a limited memory of previous questions for context. Credits to [Jesse Garrison](https://nightlight.io)

## Script Kit

- [FastGPT for Script Kit](https://scriptkit.com/api/new?name=kagi-fastgpt&url=https://gist.githubusercontent.com/awakenedhaggis/bd9dbf2421325117f7e5c20f62e1c99f/raw/9ab7d843fdfb2bf3b1e3c65e5c4774fe896abc91/kagi-fastgpt.ts): Access our [FastGPT API](../api/fastgpt.md) directly from your desktop using Script Kit.

## Chrome Extension

[FastGPT to Markdown](https://chromewebstore.google.com/detail/kagi-fastgpt-to-markdown/bamhebecdlhhkedgncapjoofbohgiogc): Copy Kagi FastGPT question and answer to your clipboard, nicely formatted in Markdown.

## Emacs
- [kagi.el](https://codeberg.org/bram85/kagi.el): Emacs package that provides access to the Kagi FastGPT and Universal Summarizer API.

## Lensai: The Privacy-Focused & AI-Powered Research Browser with Kagi integration

[Lensai](https://github.com/FaFre/lensai) enhances your mobile research experience while keeping your personal data and identity secure. 
Powered by advanced AI tools and browser extensions, Lensai offers modern features designed to elevate your browsing experience.

Some of the features are:

- **Privacy by Default**: Incognito mode is enabled by default to keep your searches and browsing history private.
- **[Kagi Integration](https://github.com/FaFre/lensai/wiki/Kagi-Tools)**: Seamlessly integrates Kagi's search, assistant, and summarizer tools within a user-friendly interface.
- **[Easy Sharing](https://github.com/FaFre/lensai/wiki/Kagi-Tools)**: Share URLs or text from any app directly into Lensai without the need to copy and paste, for direct use with summarizer/assistant.
- **[Quick Summarization](https://github.com/FaFre/lensai/wiki/Browser)**: Long press any link on a website to get a summary via Kagi's summarizer.
- **[Content Blocking](https://github.com/FaFre/lensai/wiki/Content-Blocking)**: A powerful content blocker is enabled by default to filter out ads, malware, and tracking sites.
- **[Home Widgets](https://github.com/FaFre/lensai/wiki/Home-Widget)**: Includes home screen widgets in three different sizes for quick actions, enhancing productivity.
- **[PDF processing](https://github.com/FaFre/lensai/wiki/Kagi-Tools)**: Open and directly summarize/prompt PDF documents.
- **Reader Mode**: Extract and simplify web pages, enhancing readability by removing ads, sidebars, and other non-essential elements.
- **[Chat Archive](https://github.com/FaFre/lensai/wiki/Chat-Archive)**: Easily archive conversations with the Kagi assistant on your device and search through them locally
- **[Bang Repository](https://github.com/FaFre/lensai/wiki/Bangs)**: Automatically synchronizes all official Kagi Bangs from the official Repository and makes them available through a convenient interface.
- **[Enhanced Text Interaction](https://github.com/FaFre/lensai/wiki/Browser)**: Custom context menu allows for easy passage of marked text to Kagi's search or assistant tools.
- **[Speech Input](https://github.com/FaFre/lensai/wiki/Kagi-Tools)**: Supports voice commands for hands-free operation and accessibility.
