# Setting Kagi as Default on Vivaldi (Desktop)

## Preferred Method

1. Visit [kagi.com](https://kagi.com/) and sign in if needed.
2. Right-click on **Kagi's search bar** (the search field on the Kagi website, not Vivaldi's address bar) and select **Add as Search Engine**.
3. Check the **Set as Default Search** checkbox and click **Add**.

## Manual Configuration (Advanced)

> **Note:** Due to a [bug](https://social.vivaldi.net/@Vivaldi/115128492728320110) in Vivaldi, the manual configuration method will not sync Kagi to the mobile version. We recommend using the preferred method above instead.

1. Type `vivaldi:settings/search/` in the address bar to access the search settings.
2. In the **Search Engine Editor** section, click the "+" button at the bottom of the list to add a new search engine, and fill in these details:
    - **Name:** Kagi Search
    - **Nickname:** k
    - **URL:** `https://kagi.com/search?q=%s` if you're not planning to use Kagi in private search. If you are, then use `https://kagi.com/search?token=TOKEN&q=%s` (replace TOKEN with the token found in your [Private Session Link](./../../privacy/private-browser-sessions))
    - **Suggest URL:** `https://kagi.com/api/autosuggest?q=%s`
    - **Image Search URL:** `https://kagi.com/reverse/upload`
    - **Image Search POST Parameters:** `file={google:imageThumbnail}`
3. Check the box marked **Set as Default Search** (and, if you want it, **Set as Private Search**)

Then, scroll to the top of the settings page.

1. Ensure that all three of the dropdowns are set to **Kagi Search**
2. Under **Allow Search Suggestions**, check both **in address field** and **in search field**

![Setting Kagi as Default Search Engine in Vivaldi](./media/kagi_default_vivaldi.png)