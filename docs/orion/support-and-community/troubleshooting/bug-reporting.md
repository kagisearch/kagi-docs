# Reporting a Bug

When reporting a bug, it is important to give us as much information as
possible to help narrow down what the issue may be. Browsers are
very complex pieces of software—every detail matters!

Whenever you open a bug report, you will be given a template that you can
fill out that will help you write your report. Here is a breakdown of what is
included, and how it helps us!

## Describe Your Issue

1. **Steps to reproduce**. This is the most important piece of information
for any bug report. Please include a clear list of instructions to reproduce the issue, even if you think it may be obvious.
If we cannot reproduce the problem, we are not able to fix it.

**Important note**: Most likely cause of problems on web pages is Content blocking
and Web extension. You can rule out both quickly by enabling [Compatibility mode](./troubleshooting-webpage-issues.md#orion-compatibility-mode).

The second most likely cause of issues is WebKit, Orion's rendering engine.
This is why we will ask you to check if the same problems exists in Safari
browser. If it does, it is most likely caused by WebKit and this can be more
difficult for us to fix. In this case, you are encouraged to [submit a bug
report to WebKit](https://webkit.org/reporting-bugs/).

**Important note**: You can also check if the issue is present using
[Safari Technology Preview](https://developer.apple.com/safari/technology-preview/)
if this available and applicable to you.

2. **Expected behavior**. What did you expect would happen? Indicating how
other browsers behave may be useful. Use a screenshot/video to make your
point if needed.

3. **A screenshot or video of the issue**. Very often, this is the **best** way to help us understand your issue. A picture really is worth a thousand words when it comes to bug reports!

## Give Us Some Context

1. **Orion and OS version; hardware type**. What is the version of Orion, your
system and what hardware you are running. You can copy this from Orion ->
About menu if unsure. There is a lot of debug information available in Help
-> Copy Debug Info to Clipboard that can be useful to us.


2. **Image/Video**. It is always helpful to upload images/videos. Our site will allow dragging and dropping files as you write.


3. **Provide process logs**. If you are experiencing glitches, freezes or beachballs, you can include process logs from within Activity Monitor. Select the main Orion process (look for the Orion icon) from the list and under View, select Sample Process. You can save that analysis as a text file and attach it to your report.

## Things to Try

Sometimes there are a few things you can do to help us narrow down certain issues. Depending on the problem, you can try:

- Turning on [Compatibility mode](./troubleshooting-webpage-issues.md#orion-compatibility-mode)
- Disabling all browser extensions
- Restarting Orion

## Common Questions

### My report includes NSFW media

Please don't post explicit images, videos, or text directly on the site.

If you can, please censor the images. Otherwise, you can leave them out. If we need them, we will ask you to provide them another way.

### I just have a question or want to chat with other Orion users!

If you are just looking to chat or need some help, you are welcome to join our [Discord server](../discord-server.md).
