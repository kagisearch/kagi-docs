# Bangs

Bangs are shortcuts starting with exclamation points (!) that quickly take you to search results on other sites. For example, searching Kagi for **!w Monty Python** will search Wikipedia directly for "Monty Python" and take you to that Wikipedia search result. Bangs that perform searches on external sites are [never counted as searches](../plans/plan-types.md#how-searches-are-counted) for the purpose of billing/usage.

![Bang Example](media/bang.gif)

To take advantage of Bangs make sure you have enabled Bangs in your [Search](https://kagi.com/settings?p=search) settings. You can also set up Quick Bangs and Custom Bangs, continue reading to learn more.

![Enable Bangs](media/enable_bangs.png)

Note that Kagi supports all [DuckDuckGo-style bangs](https://duckduckgo.com/bang).

## Bang Examples


Some of the more popular search bangs include:

- **!help** \<query> to search this knowledge base for information about Kagi Search. Try "!help search operators" in Kagi.
- **!i** \<query> for Kagi Images
- **!m** \<query> for Kagi Maps
- **!n** \<query> for Kagi News
- **!v** \<query> for Kagi Videos


### Regional bangs

You can use for example **!de [query]** or **!nl [query]** to switch your region to Germany or Netherlands on the fly.

### AI related bangs

- **!sum** \<url> - Key moments of the page in [Universal Summarizer](../ai/summarize-page.md)
- **!sumk** \<url> -  Alias of `!sum`
- **!discuss** \<url> - Discuss Document chat
- **!answer** \<search terms> - Search & open "Quick Answer"

### Kagi Assistant bangs

- **!fast** \<query> - Fast Assistant. Kagi search coupled with a fast AI model. Optimized for speed, while not sacrificing quality.
- **!expert** \<query> - Expert Assistant. Multiple Kagi searches (and external services) together with the best available AI model for the highest accuracy and comprehensive responses.
- **!code** \<query> - Code Assistant. Tuned for programming tasks and uses a powerful AI model for programming.
- **!chat** \<query> - Chat Assistant. Allows direct access to a variety of large language models for creative tasks.
- **!custom** \<query> - Custom Assistant. Allows you to further customize one of the existing modes.

### Search on external websites

 
- **!yt** \<query> for [YouTube](https://youtube.com)
- **!r** \<query> for [Reddit](https://www.reddit.com)
- **!u** \<query> for [Urban Dictionary](https://www.urbandictionary.com)
- **!imd** \<query> for the [Internet Movie Database](https://www.imdb.com/)

And many more! (Kagi supports all [DuckDuckGo bangs](https://duckduckgo.com/bang))

## Supported Bang Syntaxes

For convenience, Kagi supports placing the bang trigger elsewhere in your query.

Here is the full list of patterns that we support:

- `!g query`
- `g! query`
- `query !g`
- `query g!`

## Quick Bangs

For convenience, Kagi allows you to customize Quick Bangs which do not require an exclamation (!).

Configure Quick Bangs under [Search](https://kagi.com/settings?p=search) in the Kagi Settings.

<img src="./media/quick_bangs.png" alt="Quick Bangs">

## Custom Bangs

You can also create your own Custom Bangs in [Advanced Settings](https://kagi.com/settings?p=advanced).

<img src="./media/custom_bang_settings.png" alt="Custom Bangs">

Once you "Open Bangs" you will see any existing custom bangs.

<img src="./media/custom_bang_in_settings.png" alt="Custom Bang in Settings">

From here you can "Add Bang" to define new custom bangs.

<img src="./media/custom_bang_editor_settings.png" alt="Custom Bang Editor in Settings">

You can create your own Custom Bangs in Kagi using the [Search Shortcuts menu](search-shortcuts.md).

## Watch a Demo

You can see a full demo of using bangs - default, new and custom - by watching the video below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/4Cy8PHrVs5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Feeling Lucky

Sometimes, you just know the first result will be what you want.
Or, you could be "feeling lucky" enough to take the chance!

When you start your query with `!(space)query`, Kagi will redirect you to the first search result.

![Feeling Lucky Example](media/feeling-lucky-example.png)

Here is the full list of "feeling lucky" patterns that we support:

- `! query`
- `query !`
- `\query`

