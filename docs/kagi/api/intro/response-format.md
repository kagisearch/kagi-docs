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

Field | Type   | Description
------|--------|-----------
id    | string | Request ID
node  | string | Server node name
ms    | int    | Request duration, in milliseconds

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

<details>
<summary>Error response object</summary>

From the [Execute Search](../endpoints/making_requests.md) endpoint:

```json
{
  "meta": {
    "id": "bcbf11d2-1afa-4e72-a0ee-2d9079d1d332",
    "node": "us-east",
    "ms": 0
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
