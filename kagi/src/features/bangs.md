# Bangs

Kagi supports all [DuckDuckGo-style bangs](https://duckduckgo.com/bang). Bangs are shortcuts starting with exclamation points (!) that quickly take you to search results on other sites.

For example, searching Kagi for **!w Monty Python** will search Wikipedia directly for "Monty Python" and take you to that Wikipedia search result.

![Bang Example](media/bang.gif)

Bangs can also be used regionally. For example, you can search with  **!de [query]** or **!nl [query]** to switch your region to Germany or Netherlands on the fly.

Some of the more popular search bangs include:

- **!r** for [Reddit](https://www.reddit.com)
- **!u** for [Urban Dictionary](https://www.urbandictionary.com)
- **!imd** for the [Internet Movie Database](https://www.imdb.com/)
- **!i** for Kagi Images
- **!m** for Kagi Maps
- **!n** for Kagi News
- **!v** for Kagi Videos
- **!help**  to search this knowledge base for information about Kagi Search

## Suppoted Bang Syntaxes

For convenience, Kagi supports placing the bang trigger elsewhere in your query.

Here is the full list of patterns that we support:

- `!g query`
- `g! query`
- `query !g`
- `query g!`

## Feeling Lucky

Sometimes, you just know the first result will be what you want.
Or, you could be "feeling lucky" enough to take the chance!

When you start your query with `!(space)query`, Kagi will redirect you to the first search result.

![Feeling Lucky Example](media/feeling-lucky-example.png)

Here is the full list of "feeling lucky" patterns that we support:

- `! query`
- `query !`
- `\query`
