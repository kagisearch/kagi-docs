# Search API

The Search API gives programmable access to Kagi's premium search results.

> **NOTE:** The Search API is in closed beta and available upon request. Please reach out to support@kagi.com for invite.
>
> We plan to release this API to all Kagi members after the beta period.


## Quick start

1. Get the [API key](https://kagi.com/settings?p=api) (requires a Kagi account)
2. Call the API. See below for example.

## API key

To obtain an API key you will first need to [create a Kagi account](https://kagi.com/signup?plan_id=trial). 

Then, navigate to Settings -> Advanced -> API portal, or click [here](https://kagi.com/settings?p=api) to go directly.

Click "Generate API Token".


## Pricing

The Kagi Search API is priced at $25 for 1000 queries (2.5 cents per search).

You can add funds to your API balance from the [API Billing panel](https://kagi.com/settings?p=billing_api).

## SDK

Python SDK is available through [kagiapi](https://github.com/kagisearch/kagiapi) package.

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
    "id": "69c3f5c4168f66b860e951c585550f1c",
    "node": "us-central1",
    "ms": 213,
    "api_balance": 123.456
  },
  "data": [
    {
      "t": 0,
      "url": "https://en.wikipedia.org/wiki/Steve_Jobs",
      "title": "Steve Jobs - Wikipedia",
      "snippet": "Steven Paul Jobs (February 24, 1955 – October 5, 2011) was an American businessman, inventor, and investor best known for co-founding the technology company ...",
      "thumbnail": {
        "url": "/proxy/310px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg?c=9cn5Kxse4yD05EJkf6QML9dK4clUbdQ9Oq4d5gDoyHBwiX43u0CCAEVi8DMCHFAXhMAIsLbp8IO0pmQf41WB6CWu9BNfAxhRqV-EQL_l_gnV1yD14xBDf5Sgj1vfjIF0aMOqcVwh-jMVcqkx3GjwnuZrt2Z8-tdYhu3uERcYzLTTqq5TKumyN0Q1c5n3utowEZhefA7WoUo3SNIB1-iHhCnijbEL5iAQo1iTroqppHk%3D",
        "width": null,
        "height": null
      }
    },
    {
      "t": 0,
      "url": "https://en.wikipedia.org/wiki/Steve_Jobs_(film)",
      "title": "Steve Jobs (film) - Wikipedia",
      "snippet": "Steve Jobs is a 2015 biographical drama film directed by Danny Boyle and written by Aaron Sorkin. A British-American co-production, it was adapted from the ...",
      "thumbnail": {
        "url": "/proxy/310px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg?c=9cn5Kxse4yD05EJkf6QML9dK4clUbdQ9Oq4d5gDoyHBwiX43u0CCAEVi8DMCHFAXhMAIsLbp8IO0pmQf41WB6CWu9BNfAxhRqV-EQL_l_gnV1yD14xBDf5Sgj1vfjIF0aMOqcVwh-jMVcqkx3GjwnuZrt2Z8-tdYhu3uERcYzLTTqq5TKumyN0Q1c5n3utowEZhefA7WoUo3SNIB1-iHhCnijbEL5iAQo1iTroqppHk%3D",
        "width": 310,
        "height": 300
      }
    },
    {
      "t": 0,
      "url": "https://www.apple.com/stevejobs/",
      "title": "Remembering Steve Jobs - Apple",
      "snippet": "He was a visionary that had the amazing ability to breath life into his ideas. He believed so passionately in his work that his creativity became both seductive ..."
    },
    {
      "t": 0,
      "url": "https://www.biography.com/business-leaders/steve-jobs",
      "title": "Steve Jobs: Biography, Apple Cofounder, Entrepreneur",
      "snippet": "Steve Jobs was an American inventor, designer, and entrepreneur who was the cofounder, chief executive, and chairman of Apple Inc. Born in 1955 to two University of Wisconsin graduate students who ..."
    },
    {
      "t": 0,
      "url": "https://www.britannica.com/money/Steve-Jobs",
      "title": "Steve Jobs | Biography, Education, Apple, & Facts | Britannica Money",
      "snippet": "Steve Jobs, the visionary co-founder of Apple Inc., revolutionized technology and consumer electronics with his innovative products that ...",
      "published": "2024-09-30T00:00:00Z"
    },
    {
      "t": 0,
      "url": "https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537",
      "title": "Steve Jobs: 9781451648539: Isaacson, Walter: Books - Amazon.com",
      "snippet": "Walter Isaacson&#39;s “enthralling” (The New Yorker) worldwide bestselling biography of Apple cofounder Steve Jobs. Based on more than forty interviews with ..."
    },
    {
      "t": 0,
      "url": "https://hbr.org/2012/04/the-real-leadership-lessons-of-steve-jobs",
      "title": "The Real Leadership Lessons of Steve Jobs",
      "snippet": "The essence of Jobs, I think, is that his personality was integral to his way of doing business. He acted as if the normal rules didn&#39;t apply to him.",
      "published": "2012-04-01T00:00:00Z"
    },
    {
      "t": 0,
      "url": "https://www.youtube.com/watch?v=UF8uR6Z6KLc",
      "title": "Steve Jobs' 2005 Stanford Commencement Address - YouTube",
      "snippet": "Drawing from some of the most pivotal points in his life, Steve Jobs, chief executive officer and ...",
      "published": "2008-03-07T00:00:00Z"
    },
    {
      "t": 0,
      "url": "https://www.forbes.com/profile/steve-jobs/",
      "title": "Steve Jobs - Forbes",
      "snippet": "Apple cofounder Steve Jobs finally succumbed to cancer at the age of 56 on October 5th, leaving behind a legacy that changed the computer, music, film and ..."
    },
    {
      "t": 0,
      "url": "https://allaboutstevejobs.com/",
      "title": "Home | all about Steve Jobs.com",
      "snippet": "Steve Jobs. This website is a repository of all things Steve Jobs — biography, pictures, videos of his keynotes and demos, quotes, interviews — you name it."
    },
    {
      "t": 0,
      "url": "https://www.imdb.com/title/tt2080374/",
      "title": "Steve Jobs (2015) - IMDb",
      "snippet": "A film by Danny Boyle and Aaron Sorkin that depicts three pivotal moments in the life of Steve Jobs, the visionary leader of the digital revolution. Michael Fassbender, Kate Winslet, Seth Rogen and Jeff Daniels star in this drama nominated for two Oscars."
    },
    {
      "t": 0,
      "url": "https://www.imdb.com/name/nm0423418/",
      "title": "Steve Jobs - IMDb",
      "snippet": "IMDb provides an overview of the life and career of Steve Jobs, the visionary co-founder of Apple and Pixar. Learn about his achievements, innovations, challenges, and legacy in the fields of technology, entertainment, and design."
    },
    {
      "t": 0,
      "url": "https://www.imdb.com/name/nm0423418/bio/",
      "title": "Steve Jobs - Biography - IMDb",
      "snippet": "Learn about the life and achievements of Steve Jobs, the visionary co-founder of Apple and Pixar. From his adoption and dropout to his cancer and legacy, discover his story and trivia on IMDb."
    },
    {
      "t": 0,
      "url": "https://www.thoughtco.com/steve-jobs-biography-1991928",
      "title": "Biography of Steve Jobs, Co-Founder of Apple Computers - ThoughtCo",
      "snippet": "Learn about the life and achievements of Steve Jobs, the visionary entrepreneur who co-founded Apple Computers and Pixar Animation Studios. Explore his early years, inventions, business ventures, and legacy."
    },
    {
      "t": 0,
      "url": "https://www.npr.org/2015/10/09/447165973/steve-jobs-the-story-of-the-man-behind-the-personal-computer",
      "title": "Steve Jobs: The Story Of The Man Behind The Personal Computer",
      "snippet": "The Apple founder spoke with Fresh Air&#39;s Terry Gross in 1996. Later, after he was diagnosed with cancer, Jobs asked Walter Isaacson to write his biography. Isaacson spoke to Fresh Air Oct. 25, 2011.",
      "published": "2015-10-09T00:00:00Z"
    },
    {
      "t": 0,
      "url": "https://www.npr.org/2011/10/05/123826622/apple-visionary-steve-jobs-dies-at-56",
      "title": "Steve Jobs, Poet Of Computer World, Dies - NPR",
      "snippet": "Steve Jobs (1955-2011) Apple has lost a visionary and creative genius, and the world has lost an amazing human being. Those of us who have been fortunate enough to know and work with Steve have ...",
      "published": "2011-10-05T00:00:00Z"
    },
    {
      "t": 0,
      "url": "https://www.nytimes.com/2011/10/06/business/steve-jobs-of-apple-dies-at-56.html",
      "title": "Steve Jobs of Apple Dies at 56 - The New York Times",
      "snippet": "Jim Wilson/The New York Times. By John Markoff. Oct. 5, 2011. Steven P. Jobs, the visionary co-founder of Apple who helped usher in the era of personal computers and then led a cultural ...",
      "published": "2011-10-06T00:00:00Z"
    },
    {
      "t": 0,
      "url": "https://www.businessinsider.com/steve-jobs",
      "title": "Steve Jobs' life and Apple career, from cofounder, to exile, to CEO",
      "snippet": "Apple CEO Steve Jobs introduces the new iPod mini digital music player at the 2004 Macworld Conference and Expo in San Francisco. The player can hold up to 1,000 tunes, is about the size of a ..."
    },
    {
      "t": 0,
      "url": "https://www.entrepreneur.com/growing-a-business/who-was-steve-jobs-see-the-apple-founders-career-and-more/197538",
      "title": "Steve Jobs Biography | Entrepreneur",
      "snippet": "An overview of Steve Jobs&#39; life. Steven Paul Jobs was an American business owner, entrepreneur, investor and media proprietor. He was best known for co-founding and leading Apple, one of the most ..."
    },
    {
      "t": 0,
      "url": "https://www.computerhistory.org/blog/steve-jobs/",
      "title": "Steve Jobs: From Garage to World’s Most Valuable Company",
      "snippet": "Learn how Steve Jobs and Steve Wozniak, two young electronics hobbyists, created the Apple-1 and launched the personal computer revolution. Explore their early adventures with Blue Boxes, Atari, HP and the Homebrew Computer Club."
    },
    {
      "t": 1,
      "list": [
        "Steve Jobs",
        "steve jobs death",
        "steve jobs net worth",
        "steve jobs quotes",
        "steve jobs movie",
        "steve jobs wife",
        "steve jobs daughter",
        "steve jobs biography",
        "steve jobs last words",
        "steve jobs age"
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
limit     | int                         | limit number of [Search Result](#search-result) items


#### Additional settings

Search API will inherit the setting in your account. For example you can:

- Block or promote websites ([results personalization](https://help.kagi.com/kagi/getting-started/index.html)).
- Select to receive longer or shorter search snippets (under [Settings -> Search](https://help.kagi.com/kagi/settings/search.html))


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
url       | string                      | URL
title     | string                      | Result title
snippet   | string?                     | Result snippet
published | timestamp?                  | When the result was published, if known
thumbnail | [Image](#image)?             | An image associated with the result

#### Image

Field     | Type                        | Description
----------|-----------------------------|-----------
url       | string                      | [proxied image URL](intro/image-proxy-urls.md)
height    | int?                         | Image height
width     | int?                         | Image width

#### Related Searches

Field     | Type                        | Description
----------|-----------------------------|-----------
list      | array of strings            | Related search terms
