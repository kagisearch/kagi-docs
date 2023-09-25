# Private Browser Session Link

The simplest way to use Kagi in a private browser session is to install one of our [browser extensions](../getting-started/setting-default.md#browser_extension) and then add your Session Link to the extension.

However, you can also use the Session Link feature to automatically log in to Kagi when performing a search from a private browsing window, if you prefer manual setup.

## Obtaining a Session Link

A Session Link is a special Kagi URL that contains a "login token."
You can use a Session Link to automatically log into your existing Kagi session from anywhere, including within private browser sessions.

You can visit your [Account settings](https://kagi.com/settings?p=user_details) to get your Session Link:

<img src="./media/session_link.png" width="500" alt="Session Link"><br />

Because a Session Link provides access to your Kagi account, it should always be kept private.

**Never share your Session Link with others.**

To use this link in a browser's custom search engine, you may need to append a placeholder of `&q=%s`, like so:

```
https://kagi.com/search?token=...&q=s
```

This link will become invalid if you sign out of the session that you copied it from.
Each time you sign in, a new link is generated, so you may need to replace it.

You may have multiple active Session Links by signing in on multiple devices or browsers.

Read on for more details concerning sessions.

## Managing Sessions

A Session Link is attached to the Kagi session it was copied from.
You can Sign Out of that Kagi session if you need to invalidate the Session Link for any reason.

1. Open the session link in a private window
2. Open the Control Center by clicking the icon on the top right of any page
3. Click "Sign Out" to log out and invalidate the link.

Alternatively, changing your password on your [Account settings](https://kagi.com/settings?p=user_details) will invalidate all sessions.

Sessions will also expire after 90 days of being unused.

<img src="./media/sign_out.png" width="300" alt="Sign Out"><br />
