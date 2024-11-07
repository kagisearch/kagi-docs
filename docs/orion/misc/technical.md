# Technical Information

We’re still working on our official documentation, but here are a few points of interest if you’d like to get your "hands dirty" with Orion's advanced features.

# Orion Web Extensions API support

Orion supports a growing number of Web Extensions APIs, and with them a growing number of both Chrome and Firefox extensions.

We maintain a list of officially supported APIs in [this document](https://docs.google.com/spreadsheets/d/14IgSRVop4psUTgtLZlvYJYrAArhvL3WvRlUdzdQbIoQ/edit?usp=sharing).

Our goal is to eventually support 100% of APIs on Desktop and all APIs that are possible to support on iOS/iPadOS (due to Apple restrictions).

To debug extension issues, follow the [troubleshooting guide](../support-and-community/troubleshooting/troubleshooting-extension-issues.md).

## Check Orion browser context (for example in extension)

Check availability of window.KAGI object.

## Orion iOS/iPadOS technical information

How do I add support for opening Orion from my app?

```
orion://open-url?url=url to open an URL
orion://search?q=query to perform search
```

## Orion macOS technical information


Location of Open Tabs
```
~/Library/Application\ Support/Orion/Defaults/named_windows.plist (Seems to contain only the tabs of the named window with lowest ID integer)
~/Library/Application\ Support/Orion/Defaults/.local_named_windows.plist (Contains tabs from all named windows)
```

Location of additional tab metadata
```
~/Library/Application\ Support/Orion/Defaults/.LocalTabsCache.plist
```
Above contains metadata and cached content from iCloud synchronized tabs

Location of Bookmarks
```
~/Library/Application\ Support/Orion/Defaults/favourites.plist
```

Location of History
```
~/Library/Application\ Support/Orion/Defaults/history
```

Location of Orion Settings (includes Pinned Tabs)
```
~/Library/Preferences/com.kagi.kagimacOS.plist
```

Location of Profiles
```
~/Library/Application Support/Orion/profiles (plist format)
```

Location of Snapshots
```
~/Library/Application Support/Orion/snapshots/snapshots.plist
```

Installed Extensions
```
cd ~/Library/Application\ Support/Orion/Defaults/Extensions
```

Orion's WebKit Cache
```
cd ~/Library/WebKit/com.kagi.kagimacOS
```

Orion's App Cache
```
cd ~/Library/Caches/com.kagi.kagimacOS
```

Delete Single Preferences
```
defaults delete com.kagi.kagimacOS NewTabOpensTo
defaults delete com.kagi.kagimacOS NewWindowOpensTo
defaults delete com.kagi.kagimacOS HomePageURL
```

Reset Orion Preferences/Bookmarks/History/Extensions
```
rm -rf ~/Library/Application\ Support/Orion
defaults delete com.kagi.kagimacOS
```

Remove Cookies
```
rm -rf ~/Library/HTTPStorages/com.kagi.kagimacOS.binarycookies
```

Backup Bookmarks to your user folder
```
cp ~/Library/Application\ Support/Orion/Defaults/favourites.plist ~/
```

Parse Reading List as json and print all URLs
```
plutil -convert json -o - ~/Library/Application\ Support/Orion/Defaults/reading_list.plist | jq -r '.[].url.relative'
```

Start Orion without any extensions active
> Rename ~/Library/Application Support/Orion/Defaults/Extensions directory before launch. And after that rename this directory to Extensions again to have them back.


Orion's history is an sqllite database. Here's a simple snippet to get you started
```
sqlite3 ~/Library/Application\ Support/Orion/Defaults/history 'SELECT url FROM history_items INNER JOIN visits ON visits.history_item_id = history_items.id GROUP BY url ORDER BY count(visits.visit_time) DESC LIMIT 10'
```

And here's a one-liner that will let you fuzzy search your history using fzf
```
sqlite3 ~/Library/Application\ Support/Orion/Defaults/history 'SELECT DISTINCT url FROM history_items' | fzf --ansi --multi | sed 's#.*\(https*://\)#\1#' | xargs open
```
### Migrating and Syncing Settings and Data of Orion Browser

Copy Orion settings from one Mac to another
> Copy ~/Library/Preferences/com.kagi.kagimacOS.plist to the same location on another Mac.

If you are just getting started with Orion RC and would like to copy over your settings/configuration, you can use this command:
```
cp -r ~/Library/Application\ Support/Orion ~/Library/Application\ Support/Orion\ RC
```

If the above command does not import all of your data (profiles, extensions, etc.), try using the following tool:

[Tool to migrate Orion settings and data to Orion RC](https://github.com/cybercitizen7/orion-migration)


### Change start page wallpaper to custom image
To change to a custom wallpaper run this command with correct path to picture you want to change it to
```
defaults write com.kagi.kagimacOS backgroundImageOnStartPage file:///Users/james/Pictures/62068712ee1c9.jpg
```

### I prefer the original WebKit PDF viewer!

Sure, toggle Develop -> Experimental Features -> Enable PDF.js Viewer.

