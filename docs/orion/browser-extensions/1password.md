# 1Password & Orion

## 1Password Extension

1Password is now compatible with Orion thanks to the joint effort between 1Password and Orion teams. To use 1Password in Orion you will need the latest version of 1Password browser extension (to get it, choose **Tools** > **Extensions**, then click **Popular Extensions** in Orion).

<img src="./media/macos_1password_popular_extensions_menu.png" width="500" alt="Popular Extensions Menu"><br />

<img src="./media/macos_1password_popular_extensions_window.png" width="500" alt="1Password Extension for Orion"><br />

<img src="./media/macos_1password_popular_extensions_permissions.png" width="500" alt="1Password Extension for Orion - Permissions"><br />

## 1Password App

To use 1Password with Orion, you need to have the 1Password app installed (version 8.10.16 +), since it allows browser whitelisting (you will need to add Orion as a whitelisted app).

## Whitelisting Orion in 1Password

To add Orion as a whitelisted app in 1Password, you first need to enable custom browser support, you can find this option in **1Password** > **‌Settings** > **Labs** > **Enable custom browser support** > **Connect to browsers not explicitly vetted by 1Password**.

<img src="./media/macos_1password_1p_whitelisting_settings_menu.png" width="500" alt="1Password Settings Menu"><br />

<img src="./media/macos_1password_1p_whitelisting_custom_browser_support.png" width="500" alt="1Password - Custom Browser Support"><br />

<img src="./media/macos_1password_1p_whitelisting_connect_to_browsers.png" width="500" alt="1Password - Connect to Browsers"><br />

Next, you need to add Orion to the list of Trusted Browsers, to do this go to **1Password** > **‌Settings** > **Browser** > **Add Browser**, then select **Orion** in your Applications folder and click **Open**, you will be presented with a modal to provide Orion with access to 1Password. To continue, press **Authorize**.

<img src="./media/macos_1password_1p_whitelisting_settings_menu.png" width="500" alt="1Password Settings Menu"><br />

<img src="./media/macos_1password_1p_whitelisting_trusted_browsers.png" width="500" alt="1Password Settings - Trusted Browsers"><br />

<img src="./media/macos_1password_1p_whitelisting_open_modal.png" width="500" alt="1Password Settings - Select Orion in the Open Modal"><br />

<img src="./media/macos_1password_1p_whitelisting_authorize_orion.png" width="500" alt="1Password Settings - Authorize Orion"><br />

## 1Password Global Autofill

1Password 8 for macOS has a global autofill feature that does not require using any browser extension. To use it, click inside a login field and press the **Command** and **\\** keys at the same time.
