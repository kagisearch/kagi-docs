# Search API

The Search API gives programmable access to Kagi's premium search results.

> **NOTE:** The Search API is currently only available to customers of the
> Kagi Teams plan.

## Pricing

Searching using the API is billed by attributing the searches to your
personal account, as if you were searching on kagi.com directly.

## Endpoints

### Execute Search

#### `GET /search`

Performs a search.

Returns an array of [Search Objects](#search-object).

#### Examples

##### Query for "steve jobs"

```shell
curl -v \
  -H "Authorization: Bot $TOKEN" \
  https://kagi.com/api/v0/search\?q=steve+jobs
```

<details>
<summary>Response</summary>

```json
{
  "meta": {
    "id": "f82bee15-ae0b-4b32-9a9e-05490fe3a8e4",
    "node": "us-east",
    "ms": 600
  },
  "data": [
    {
      "t": 0,
      "rank": 1,
      "url": "https://en.wikipedia.org/wiki/Steve_Jobs",
      "title": "Steve Jobs - Wikipedia",
      "snippet": "<b>Steven</b> Paul <b>Jobs</b> (February 24, 1955 – October 5, 2011) was an American business magnate, industrial designer, media proprietor, and investor."
    },
    {
      "t": 0,
      "rank": 2,
      "url": "https://www.britannica.com/biography/Steve-Jobs",
      "title": "Steve Jobs | Biography, Education, Apple, &amp; Facts | Britannica",
      "snippet": " <b>Steve Jobs</b>, in full Steven Paul Jobs, (born February 24, 1955, San Francisco, California, U.S.—died October 5, 2011, Palo Alto, California),&nbsp;...",
      "published": "2023-02-20T00:00:00Z",
      "thumbnail": {
        "height": "215",
        "width": "235",
        "url": "/proxy/images?c=_m3km2RjA3G0qleowsZXHZb9NEn0fSsEYIHbKzMDyAFb4nUPIanknmQV_g0rmdCIejcEcQCTt4ajT_Aa79GTOD7WmjrV5DsiBZeNpavs0Eya6cEpBPChtvsDxI4AbIuMJtQoHfXWg3kc7Qf5QYMmYYFUGBX_u9j3TnFPoKiBYc4%3D"
      }
    },
    {
      "t": 0,
      "rank": 3,
      "url": "https://www.britannica.com/summary/Steve-Jobs",
      "title": "Steve Jobs summary | Britannica",
      "snippet": "Under <b>Jobs</b>’s guidance, Apple became an industry leader and one of the most valuable companies in the world. Its other notable products include iTunes (2001), the iPod (2001), the iPhone (2007), and the iPad (2010)."
    },
    {
      "t": 0,
      "rank": 4,
      "url": "https://old.reddit.com/r/linuxmemes/comments/11w56v1/richard_stallmans_ted_talk_in_the_style_and_voice/",
      "title": "Richard Stallman's ted talk in the style and voice of Steve Jobs (voice synthesis from elevenlabs.io, some text from ChatGPT)",
      "snippet": "For every good post you&#39;ll get a desktop with an Intel Core i7-6700K 4.0GHz Quad-Core Processor, cooled with a NZXT Kraken X61 106.1 CFM Liquid CPU Cooler. This also includes Kingston HyperX Fury Black 16GB (2 x 8GB) DDR4-2133 Memory, a Samsung 850 EVO-Series 500GB 2.5&quot; Solid State Drive, and a Gigabyte GeForce GTX 980 Ti 6GB Video Card. No making ..",
      "published": "2023-03-21T03:18:37Z"
    },
    {
      "t": 0,
      "rank": 5,
      "url": "https://www.biography.com/business-leaders/steve-jobs",
      "title": "Steve Jobs - Movie, Daughter &amp; Death - Biography",
      "snippet": "<b>Steven</b> Paul <b>Jobs</b> was an American inventor, designer and entrepreneur who was the co-founder, chief executive and chairman of Apple Computer.",
      "published": "2023-03-07T16:05:24Z"
    },
    {
      "t": 0,
      "rank": 6,
      "url": "https://www.apple.com/stevejobs/",
      "title": "Remembering Steve Jobs - Apple",
      "snippet": "<b>Steve Jobs</b>. It is very hard to lost someone like mr. Jobs who was a really an inspiration to many and who somehow had a notable influence in the world that&nbsp;..."
    },
    {
      "t": 0,
      "rank": 7,
      "url": "https://history-computer.com/steve-jobs-complete-biography/",
      "title": "Steve Jobs — Complete Biography, History and Inventions",
      "snippet": "<b>Steve Jobs</b> was an American entrepreneur, computer designer and businessman. He cofounded the Apple company and oversaw the invention of the Apple, iMac and Macintosh computers as well as the iPod, iPhone and iPad. His vision of inexpensive computers designed for regular people helped launch the personal computing industry."
    },
    {
      "t": 0,
      "rank": 8,
      "url": "https://www.imdb.com/title/tt2080374/",
      "title": "Steve Jobs (2015) - IMDb",
      "snippet": "<b>Steve Jobs</b> takes us behind the scenes of the digital revolution, to paint a portrait of the man at its epicenter. The story unfolds backstage at three iconic&nbsp;...",
      "thumbnail": {
        "height": "283",
        "width": "178",
        "url": "/proxy/images?c=_m3km2RjA3G0qleowsZXHUN0rLADoR7ML9K_Ch885rX8GtSLAAITk3F0ekUFI20I7FcP7hYCmq1SQ15P1kzK9uN_syd0lcsbDjebMXL--DQQnVEfmGGbk4fF2QFKbAPa18saGbCAeyKiQZ9NHS6DcY1WkrxT3COt0R3VL1ET9sg%3D"
      }
    },
    {
      "t": 0,
      "rank": 9,
      "url": "https://www.imdb.com/name/nm0423418/bio",
      "title": "Steve Jobs - Biography - IMDb",
      "snippet": "Steven Paul <b>Jobs</b> was born on 24 February 1955 in San Francisco, California, to students Abdul Fattah Jandali and Joanne Carole Schieble who were unmarried at the time and gave him up for adoption. He was taken in by a working class couple, Paul and Clara <b>Jobs</b>, and grew up with them in Mountain View, California."
    },
    {
      "t": 0,
      "rank": 10,
      "url": "https://allaboutstevejobs.com/",
      "title": "Home | all about Steve Jobs.com",
      "snippet": "This website is a repository of all things <b>Steve Jobs</b> — biography, pictures, videos of his keynotes and demos, quotes, interviews — you name it."
    },
    {
      "t": 1,
      "list": [
        "Steve Jobs",
        "steve jobs movie",
        "steve jobs death",
        "steve jobs net worth",
        "steve jobs daughter",
        "steve jobs quotes",
        "steve jobs wife",
        "steve jobs kids",
        "steve jobs book"
      ]
    }
  ]
}
```

</details>

#### Query Parameters

Field     | Type                        | Description
----------|-----------------------------|-----------
q         | string                      | query
limit     | int                         | limit number of [Search Result](../objects.md#search-result) items


## Objects

### Search Object

Search objects can have various structures, identified by an integer type
field, `t`. This will dictate the remainder of the object structure.

#### Search Object Type ID

t     | Type
------|-------------------------------
0     | [Search Result](#search-result)
1     | [Related Searches](#related-searches)

#### Search Result

Field     | Type                        | Description
----------|-----------------------------|-----------
rank      | int                         | Result rank
url       | string                      | URL
title     | string                      | Result title
snippet   | string?                     | Result snippet
published | timestamp?                  | When the result was published, if known
thumbnail | [Image](#image)             | An image associated with the result

#### Image

Field     | Type                        | Description
----------|-----------------------------|-----------
url       | string                      | [proxied image URL](intro/image-proxy-urls.md)
height    | int                         | Image height
width     | int                         | Image width

#### Related Searches

Field     | Type                        | Description
----------|-----------------------------|-----------
list      | array of strings            | Related search terms
