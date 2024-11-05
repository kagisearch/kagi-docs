# Restoring Bookmarks, Reading List, and Named Windows in Orion

If you are experiencing issues with your bookmarks, reading list, or named windows in Orion, you can restore them from the automatic backups created after each update.

## Backup Location and Naming Convention

- Orion creates backups of your bookmarks, reading list, and named windows after each update. These backups are stored in the ```~/Library/Application Support/Orion/Defaults/``` directory.
- The backup folders are named with the prefix "bk_" followed by a version number. The folder with the highest version number contains the most recent backup.

## Step-by-Step Instructions

1. Close Orion if it is currently running.
2. Open Finder and navigate to the ```~/Library/Application Support/Orion/Defaults/``` directory:
   - Click on the Finder icon in your dock.
   - In the menu bar, select **Go** > **Go to Folder** or press **Shift-Command-G** on your keyboard.
   - Paste the following path: ```~/Library/Application Support/Orion/Defaults/```
3. Locate the backup folder with the highest version number (it will start with "bk_") and open it.
4. To restore:
   - **Bookmarks**: Copy the "favourites.plist" file from the backup folder to the "Defaults" folder, replacing the existing file.
   - **Reading List**: Copy the "reading_list.plist" file from the backup folder to the "Defaults" folder, replacing the existing file.
   - **Named Windows**: Copy the ".local_named_windows.plist" file from the backup folder to the "Defaults" folder, replacing the existing file.
5. Launch Orion to see the restored data.
