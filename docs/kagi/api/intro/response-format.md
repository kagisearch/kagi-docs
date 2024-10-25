# Response Format

## Encoding

All responses returned from the API are encoded in JSON, unless otherwise
noted.

## Response Envelope

All responses are returned in a data envelope:

Field | Type   | Description
------|--------|-----------
meta  | object | [Request Metadata](#request-metadata)
data  | any    | Response data. Can be any valid JSON value, as documented
error | array  | [Error Object](#error-object), if an error occurred

## Request Metadata

Field          | Type   | Description
---------------|--------|-----------
id             | string | Request ID
node           | string | Server node name
ms             | int    | Request duration, in milliseconds
api\_balance   | float  | Remaining API Balance, in dollars

## Error Object

Field | Type    | Description
------|---------|-----------
code  | int     | [Error code](#error-code)
msg   | string  | Error message
ref   | string? | Error location reference

### Error Code

Code | Error
-----|------
   0 | Internal error
   1 | Malformed request
   2 | Unauthorized
 100 | No billing information
 101 | Insufficient credit
 200 | Summarize failed

## Examples

<details>
<summary>Successful response object</summary>

From the [Execute Search](../endpoints/making_requests.md) endpoint:

```json
{
  "meta": {
    "id": "ec420bfd904acf489f741494c87a50e7",
    "node": "us-central1",
    "ms": 231,
    "api_balance": 123.456
  },
  "data": [
    {
      "t": 0,
      "url": "https://kagi.com/",
      "title": "Kagi Search - A Premium Search Engine",
      "snippet": "Better search results with no ads. Welcome to Kagi (pronounced kah-gee), a paid search engine that gives power back to the user."
    },
    {
      "t": 0,
      "url": "https://kagi.com/orion",
      "title": "Orion Browser by Kagi",
      "snippet": "Orion offers native support for many Firefox and Chrome browser extensions allowing access to the world's largest eco-system of browser extensions. ",
    }
  ]
}
```

</details>

<details>
<summary>Error response object</summary>

From the [Execute Search](../endpoints/making_requests.md) endpoint:

```json
{
  "meta": {
    "id": "bcbf11d2-1afa-4e72-a0ee-2d9079d1d332",
    "node": "us-east",
    "ms": 0,
    "api_balance": 123.456
  },
  "data": null,
  "error": [
    {
      "code": 1,
      "msg": "Missing q parameter",
      "ref": null
    }
  ]
}
```

</details>
