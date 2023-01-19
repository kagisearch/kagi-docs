# Group Search Results

You may want to hide the [group search results](https://help.kagi.com/kagi/settings/search.html?highlight=group%20search#overview) that are bucketed under a root page, as shown below for BBC.

![Group Search Results](media/group-search-results.png)

Removing the grouped search results returns the following.

![Group Search Removed](media/group-search-hidden.png)
 
To do so you can apply the following custom CSS in your [Appearance settings](https://kagi.com/settings?p=custom_css). 

```css
.sr-group.__dl {
  display: none;
}
```
