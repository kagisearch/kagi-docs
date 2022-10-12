# Response Format

## Encoding

All responses returned from the API are encoded in JSON, unless otherwise
noted.

## Response Envelope

All responses are returned in a data envelope:

Field | Type   | Description
------|--------|-----------
meta  | object | [Request Metadata](objects.md#request-metadata)
data  | any    | Response data. Can be any valid JSON value, as documented
error | array  | [Error](objects.md##error-object), if an error occured

## Examples

<details>
<summary>Full successful response object</summary>

From the [Execute Search]() endpoint:

```json
{
  "meta": {
    "id": "2a5b8993-d1bf-468b-9766-5afa50727bd4",
    "node": "us-east",
    "ms": 500
  },
  "data": [
    {
      "t": 0,
      "rank": 1,
      "url": "https://kagi.com",
      "title": "Kagi Search",
      "snippet": "Let's fetch!",
    },
    {
      "t": 0,
      "rank": 2,
      "url": "https://browser.kagi.com",
      "title": "Orion Browser by Kagi",
      "snippet": "Incredible performance. Total Protection.",
    }
  ]
}
```
</details>
