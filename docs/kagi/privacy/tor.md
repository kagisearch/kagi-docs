# Using Kagi with Tor

The [Tor Project](https://www.torproject.org/) is a set of tools for preserving your privacy and anonymity online, by routing your internet traffic through multiple volunteer-run relays. The main way to use Tor is through [the Tor Browser](https://www.torproject.org/download/).

Kagi provides an official Tor onion service, which allows access to Kagi directly from the Tor network. Kagi's onion address is:

[kagi2pv5bdcxxqla5itjzje2cgdccuwept5ub6patvmvn3qgmgjd6vid.onion](http://kagi2pv5bdcxxqla5itjzje2cgdccuwept5ub6patvmvn3qgmgjd6vid.onion)

# Using Tor with Privacy Pass

On its own, Tor will obscure your location by hiding your IP address, which can be useful for preventing your ISP or site providers from tracking you. This isn't particularly useful when using Kagi, since you'd still normally have to be logged into your account, making all your searches theoretically linkable back to a single account.

This is where [Privacy Pass](./privacy-pass.md) comes in: with Tor and Privacy Pass together, Kagi only knows that the search is being issued by a user who previously verified that they have an account authorized to receive tokens, but nothing about the user's account, or where they're located. Follow [the Firefox / Tor Browser instructions](./privacy-pass.html#getting-started) in our Getting Started guide to set up Privacy Pass with the Tor Browser.

As always, Kagi does not link searches to accounts or permanently record them; see [our Privacy Policy](https://kagi.com/privacy) for more info.
