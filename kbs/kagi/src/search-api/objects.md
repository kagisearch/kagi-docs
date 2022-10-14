# Objects

The following is a listing of all objects returned by the various API endpoints.

## Request Metadata

Field | Type   | Description
------|--------|-----------
id    | string | Request ID
node  | string | Server node name
ms    | int    | Request duration, in milliseconds

## Error Object

Field | Type    | Description
------|---------|-----------
code  | int     | Error code
msg   | string  | Error message
ref   | string? | Error location reference

## Search Object

Search objects can have various structures, identified by an integer type
field, `t`. This will dictate the remainder of the object structure.

### Search Object Type ID

t     | Type
------|-------------------------------
0     | [Search Result](#search-result)
1     | [Related Searches](#related-searches)

### Search Result

Field     | Type                        | Description
----------|-----------------------------|-----------
rank      | int                         | Result rank
url       | string                      | URL
title     | string                      | Result title
snippet   | string?                     | Result snippet
published | timestamp?                  | When the result was published, if known
thumbnail | [Image](#image)             | An image associated with the result

### Image

Field     | Type                        | Description
----------|-----------------------------|-----------
url       | string                      | [proxied image URL](#image-urls)
height    | int                         | Image height
width     | int                         | Image width

### Related Searches

Field     | Type                        | Description
----------|-----------------------------|-----------
list      | array of strings            | Related search terms
