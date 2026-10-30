# Search API

The Search API gives programmable access to Kagi's premium search results.

## API Reference

The full Search API reference is available at **[kagi.com/api/docs](https://kagi.com/api/docs)**.

## Example

```shell
curl https://kagi.com/api/v1/search \
  -H "Authorization: Bearer $KAGI_API_KEY" \
  -H 'Content-Type: application/json' \
  -d '{
    "query": "Your query here"
  }'
```

## Additional Settings

The Search API inherits settings from your account. For example:

- Block or promote websites ([results personalization](https://help.kagi.com/kagi/getting-started/index.html))
- Select longer or shorter search snippets ([Settings → Search](https://help.kagi.com/kagi/settings/search.html))

## Legacy API

The previous v0 Search API is documented in [Search API (Legacy)](search-legacy.md).
