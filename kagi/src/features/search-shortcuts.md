# Search Shortcuts

Search shortcuts allow you to redirect your query to other search engines, or your personal favorite sites using custom bangs.

![More menu location](media/more-menu.png)

You can click these entries, and your current search will be performed on the listed site.

## Customizing Shortcuts

By pressing "Customize", you can make changes to the shortcut menu.

![More menu location](media/more-menu-customize.png)

Using the toggle will change which shortcuts are shown.
<svg width="32" height="17" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="31" height="16" rx="8" fill="#8DC16A" stroke="black"/>
<circle cx="23" cy="8" r="5.5" fill="white" stroke="black"/>
</svg>

You can delete a shortcut by pressing the trash can that appears when hovering.
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 13.75C3.175 13.75 2.5 13.075 2.5 12.25L2 3H12L11.5 12.25C11.5 13.075 10.825 13.75 10 13.75H4ZM8.875 0.25L9.625 1H12.25V2.5H1.75V1H4.375L5.125 0.25H8.875ZM4 4.75H5V12.2556H4V4.75ZM6 4.75H7.99219V12.2556H6V4.75ZM9.01172 4.75H9.9987V12.2556H9.01172V4.75Z" fill="#FD6820"></path> </svg>

You can click and drag the shortcuts in this menu to reorder them, either by their name or the drag icon.
<svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z M1.5 8C2.32843 8 3 7.32843 3 6.5C3 5.67157 2.32843 5 1.5 5C0.671573 5 0 5.67157 0 6.5C0 7.32843 0.671573 8 1.5 8Z M3 11.5C3 12.3284 2.32843 13 1.5 13C0.671573 13 0 12.3284 0 11.5C0 10.6716 0.671573 10 1.5 10C2.32843 10 3 10.6716 3 11.5Z M6.5 3C7.32843 3 8 2.32843 8 1.5C8 0.671573 7.32843 0 6.5 0C5.67157 0 5 0.671573 5 1.5C5 2.32843 5.67157 3 6.5 3Z M8 6.5C8 7.32843 7.32843 8 6.5 8C5.67157 8 5 7.32843 5 6.5C5 5.67157 5.67157 5 6.5 5C7.32843 5 8 5.67157 8 6.5Z M6.5 13C7.32843 13 8 12.3284 8 11.5C8 10.6716 7.32843 10 6.5 10C5.67157 10 5 10.6716 5 11.5C5 12.3284 5.67157 13 6.5 13Z" fill="currentColor"></path> </svg>

## Adding and Editing Shortcuts

Clicking "Add shortcut" in the menu, will open a dialog where you can create new custom shortcuts.

Clicking an existing shortcut will allow you to edit it exactly the same manner.

![Add new shortcut](media/more-menu-add-edit.png)

#### Search Engine Name

This field is the name of the shortcut that will be shown in the menu.

It has an autocomplete enabled that will make suggestion from our database of shortcuts:

![Shortcut Autocomplete](media/more-menu-autocomplete.png)

Picking an option from the autocomplete will fill in the rest of the form for you.
You can then make any changes you'd like.

If you have copied a shortcut, it can also be pasted in this field, and the form will be filled out automatically.

#### URL

This field is the URL that your search will be sent to.

Any place in the URL that you write `%s` will be substituted for your search terms.

For example, if the URL is:

`https://wikipedia.org/w/index.php?search=%s`

Then searching for "Steve Jobs" with this shortcut will send you to:

<a href="https://wikipedia.org/w/index.php?search=Steve+Jobs">https://wikipedia.org/w/index.php?search=Steve+Jobs</a>

#### Bang Shortcut

This field assigns a custom [Bang](bangs.md) to your shortcut, so you can invoke the shortcut from anywhere you search.

For example, if this field is set to "cool", you can invoke this shortcut by typing "!cool" in your search bar.

![Bang Shortcut](media/more-menu-cool.png)

#### Sharing Custom Shortcuts

To share a shortcut, start by opening the Edit dialog for your shortcut.

You can copy a shortcut's settings to your clipboard by pressing the copy button. 
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="6" width="12" height="16" rx="1" stroke="currentColor" stroke-width="2"></rect>
<path d="M4 20V4C4 2.89543 4.89543 2 6 2H18" stroke="currentColor" stroke-width="2"></path>
</svg>

This will copy some text like this:

```
Crystal API Docs
https://crystal-lang.org/api/latest/#q=%s
!cr
```

You can send this text to your friends, and it can be pasted into the [Search Engine Name](#search-engine-name) field when they Add a shortcut.

This will automatically fill out the form with those settings.

![Copying Shortcuts](media/more-menu-copy-pasta.png)
