# Installing Orion

## Apple Devices

You can download an installer for [Orion for macOS](https://orionbrowser.com/platforms/macos) and read its latest [release notes](https://orionbrowser.com/updates/orion-release-notes).

You can install [Orion for iOS/iPadOS](https://apps.apple.com/app/orion-browser-by-kagi/id1484498200) from the App Store and read its latest [release notes](https://orionbrowser.com/updates/orion-iOS-release-notes.html). 

You can also scan the QR code below to download Orion on your iPhone or iPad:
![Orion for iOS QR Code](./media/orion_ios_qr_code.png){width=256 height=256}

Orion is free, and no account or signup is required to use it.

## Linux

:::warning Note
The open beta version of Orion for Linux is currently available to everyone.

This version is intended for testing and [reporting bugs in the Orion Feedback Forum](https://orionfeedback.org/t/desktop-linux).

While each version is a significant leap forward, some features may still be missing, so depending on your use case, Orion might not yet be ready for everyday use.
:::

#### Installation

You can find instructions for installing and using Flatpak for your distro [here](https://flatpak.org/setup/).

After you've set up Flatpak, you can install Orion using the `flatpak install` command:

```bash
flatpak remote-add --if-not-exists  orion-beta https://flatpak.orionbrowser.com/orion-beta.flatpakrepo
```

```bash
flatpak install orion-beta com.kagi.Orion
```

#### Update Orion 

```bash
flatpak update
```
