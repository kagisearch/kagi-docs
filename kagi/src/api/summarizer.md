# Universal Summarizer

The Universal Summarizer is an API using powerful LLMs to summarize
content on the web, or your own documents.

## Pricing

TODO

## Types of Content that can be Summarized

You can summarize many types of web content, including:

- Text web pages, articles, and forums
- YouTube videos
- ...

## Endpoints

### Summarize Document

#### `GET/POST /summarize`

Summarizes a document, by URL or using passed text.

Returns a [Summarization Object](#summarization-object).

#### Examples

**GET request, Youtube Video, Agnes engine**

```shell
$ curl -v \
  -H "Authorization: Bot $TOKEN" \
  "https://kagi.com/api/v0/summarize?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZSRHeXYDLko"
```

<details>
<summary>Response</summary>

```json
{
  "meta": {
    "id": "120145af-f057-466d-9e6d-7829ac902adc",
    "node": "us-east",
    "ms": 7943
  },
  "data": {
    "output": "In this Youtube video, Jonathan Blow discusses the decline of software
technology and the potential collapse of civilization. He argues that technology
does not automatically improve and that great achievements in technology can be 
lost due to the fall of civilizations. Blow believes that software technology has
not improved in quite a while and that the industry is adding too much complication
to everything. He suggests that simplifying software systems is the right short-term
play and that removing complexity is still the right approach even if it doesn't
seem like it. Blow also emphasizes the importance of developing the aesthetics for
things that are not a giant horrible mess and building institutional knowledge about
how to simplify.",
    "tokens": 11757,
  }
}
```

</details>

**POST request with JSON body, song lyrics, Daphne engine**

```shell
$ curl -v \
  -XPOST https://kagi.com/api/v0/summarize \
  -H "Content-Type: application/json" \
  -H "Authorization: Bot $TOKEN" \
  -d '{"url":"https://genius.com/Brothertiger-mainsail-lyrics", "engine": "daphne"}'
```

<details>
<summary>Response</summary>

```json
{
  "meta": {
    "id": "55fc737b-29d7-4192-ab62-d23946576323",
    "node": "us-east",
    "ms": 10868
  },
  "data": {
    "output": "Brothertiger's song \"Mainsail\" is a reflective and hopeful track about escaping the mundane life and setting sail for a new adventure. The narrator is asking if the listener
 can recognize his face in a crowded room, and if they can make their escape together. The chorus is a call to action, with the narrator inviting the listener to lean forward and relax as he
 raises the mainsail on the mast. The bridge is a moment of clarity, with the narrator realizing that they can sail away from the dull life they live and find a way out of their head for the
 weekend. The song is a reminder to take a break from the everyday and explore the world around us. The imagery of the sun cascading on the narrator's back and casting a shadow on the map is
 particularly evocative and paints a vivid picture of the journey ahead.",
    "tokens": 543,
  }
}
```
</details>

#### Parameters

Parameters can be sent in any of the following ways:

- `GET` method with URL parameters
- `POST` method with JSON body
- `POST` method with `x-www-form-urlencoded` body

Field | Type | Required | Description
------|------|----------|-----------
url   | URL  | Yes  | A URL to a document to summarize. Exclusive with `text`.
text  | string  | Yes | Text to summarize. Exclusive with `url`.
engine | string | No | [Summarization engine](#summarization-engines)
summary_type  | string  | No  | [Type of summary](#summary-types)
target_language  | string  | No  | [Desired output language](#target-language-codes)

**Notes**

> Parameters `url` and `text` are exclusive. You must pass one or the other.

> Users of the `text` parameter are recommended to use the `POST` method instead,
  to avoid URL length limits.

> Total request size is limited to 1MB.

## Objects

### Summarization Object

Field     | Type      | Description
----------|-----------|------------
output    | string    | Summarization output
tokens    | int       | Amount of tokens processed

## Options

Several options are provided to control the output the summarizer
produces.

### Summary Types

Different summary types are provided that control the structure of the summary
output.

Type | Description
-----|------------
summary (default) | Paragraph(s) of summary prose
takeaways | Bulleted list of key points

### Summarization Engines

Different summarization engines are provided that will give you choices over the
"flavor" of the summarization text.

Engine | Description
-------|-----------
agnes (default) | Formal, technical, analytical summary
daphne | Informal, creative, friendly summary

### Target Language Codes

The summarizer can translate the output into a desired language, using the table
of supported language codes below.

Code | Language
-----|---------
BG | Bulgarian
CS | Czech
DA | Danish
DE | German
EL | Greek
ES | Spanish
ET | Estonian
FI | Finnish
FR | French
HU | Hungarian
ID | Indonesian
IT | Italian
JA | Japanese
KO | Korean
LT | Lithuanian
LV | Latvian
NB | Norwegian
NL | Dutch
PL | Polish
PT-BR | Portuguese (Brazilian)
PT-PT | Portuguese (European)
RO | Romanian
RU | Russian
SK | Slovak
SL | Slovenian
SV | Swedish
TR | Turkish
UK | Ukrainian
ZH | Chinese (simplified)

