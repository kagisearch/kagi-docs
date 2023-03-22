# Authentication

## Getting a Token

You can obtain a token from the [Search API Settings](https://kagi.com/settings?p=api) page.

Tokens do not expire, but note that:

- **The token will only be shown to you once.** This is to prevent an attacker
  who has access to your account from getting your active API token as well.
- Generating a new token will invalidate the old one.
- If you are removed from a billing plan that has Search API access, your
  API credentials will also be removed.

## Passing Authorization in Requests

Authentication is supplied as a standard `Authorization` HTTP header, with
a valid API token, using the form `$TOKEN_TYPE $TOKEN`.

Example:

```
Authorization: Bot AADAfUCEQwM._ascRlUhf7wXGjkrsDqDkWb74JfyGs3d2_QqUpcQsO0
```

Currently, the only token type is `Bot`.

## IP Limit

To help secure and control your account's API access, you can optionally
set up an IP address limit, which will cause our API to reject any requests
made with your API token that do not originate from the listed IP address.

You can configure this on the
[Search API Settings](https://kagi.com/settings?p=api) page.
