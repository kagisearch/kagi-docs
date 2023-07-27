# Password Management

## Table of Contents
- [Password Storage & Sync](#password_storage_sync)
- [Importing Safari Passwords into Orion on macOS](#import_safari_passwords)
- [Syncing Passwords in Orion](#syncing_passwords)
  - [macOS](#syncing_passwords_macos)
  - [iOS](#syncing_passwords_ios)
  - [iPadOS](#syncing_passwords_ipados)
- [1Password & Orion](#1password)

<a name="password_storage_sync"></a>
## Password Storage & Sync {#password_storage_sync}

Many users of Safari on Apple devices use iCloud Keychain to automatically sync Safari data, including website passwords, across devices.

Third-party web browsers, like Orion, cannot sync with the Keychain used by Safari. Orion must use its own Orion-specific Keychain. Safari cannot see the Orion Keychain and Orion cannot see the Safari Keychain.

If you want to use your Safari passwords in Orion, you will need to import the passwords into Orion on macOS. Then, you can use the passwords in Orion on all Apple devices through Orion's own Keychain sync.

<a name="import_safari_passwords"></a>
## Importing Safari Passwords into Orion on macOS {#import_safari_passwords}

Orion on macOS can import your passwords from Safari 15+ on macOS. These versions of Safari ship with macOS 12 (Monterey) and macOS 13 (Ventura). They are also available on macOS 11 (Big Sur) through the [Safari Technology Preview](https://developer.apple.com/safari/download/).

Once you have Safari 15+, follow these steps in Orion:

1. Click the **File** menu, choose **Import From**, and choose **Safari**.

<img src="./media/macos_import_from_safari.png" width="300" alt="Importing from Safari"><br />

2. Orion can import many different types of data from Safari, including passwords. Check and uncheck your desired import data and then click the **Import** button.

<img src="./media/macos_safari_import.png" width="300" alt="Safari Import"><br />

<a name="syncing_passwords"></a>
## Syncing Passwords in Orion {#syncing_passwords}

To sync Orion passwords across devices, perform these steps <u>on each device</u>.

<a name="syncing_passwords_macos"></a>
### macOS {#syncing_passwords_macos}

1. Click the Apple menu (), click **System Preferences**, and click **Apple ID**.
   - If you're using macOS 3.14 (Mojave), you don't need to click Apple ID.
   
<img src="./media/macos_open_system_prefs_menu.png" width="300" alt="Open macOS System Preferences"><br />

<img src="./media/macos_appleid_button.png" width="500" alt="Open macOS System Preferences"><br />

2. In your iCloud/Apple ID settings, check the **Keychain** box if it isn't already checked.

<img src="./media/macos_icloud_keychain.png" width="500" alt="Open macOS System Preferences"><br />

<a name="syncing_passwords_ios"></a>
### iOS {#syncing_passwords_ios}

1. Open the Settings app for your device.
2. Tap your name at the top of Settings.
3. Tap iCloud.
4. Turn on **Passwords and Keychain** if it isn't already on.

<img src="./media/ios_icloud.png" width="300" alt="iOS iCloud Settings"><br />

<img src="./media/ios_keychain.png" width="300" alt="iOS iCloud Keychain Settings"><br />

<a name="syncing_passwords_ipados"></a>
### iPadOS {#syncing_passwords_ipados}

1. Open the Settings app for your device.
2. Tap your name at the top left corner of Settings.
3. Tap iCloud.

<img src="./media/ipados_system_settings.png" width="500" alt="ipadOS iCloud Settings"><br />

4. Turn on **Keychain** if it isn't already on.

<img src="./media/ipados_icloud.png" width="500" alt="iPadOS iCloud Settings fro Keychain"><br />

<img src="./media/ipados_keychain.png" width="500" alt="iPadOS iCloud Keychain Settings"><br />

<a name="1password"></a>
## 1Password & Orion {#1password}

1Password has not yet added support for Orion. Because of this, the 1Password browser extension does not function properly in Orion.

We have been told by 1Password that their development team is working on a new feature to allow users to choose their trusted browser. This will hopefully allow 1Password's browser extension to then work with Orion. 1Password has not given us any time estimate for when this new feature will be released.

In the meantime, 1Password 8 for macOS has a global autofill feature that does not require using any browser extension. Click inside a login field and press the **command** and <b>\\</b> keys at the same time.
