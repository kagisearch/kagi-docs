# Universal Summarizer

The Universal Summarizer is an API using powerful LLMs to summarize content on the web, or your own documents, of any length.

## API credits

This API uses pre-paid API credits. You can manage API credits in the [API billing](https://kagi.com/settings?p=billing_api) page of your Kagi settings.

Using API with insufficient credits will produce "Insufficient credit to perform this request." response message.

## Pricing

Price for our consumer grade models (Agnes/Daphne) is **$0.030** per **1,000** tokens processed. If you are subscribed to the Kagi Ultimate [plan](https://kagi.com/pricing), discounted pricing at **$0.025** per **1,000** tokens processed is automatically applied.

Notes:

- Tokens include all tokens processed in + out.
- Any request over 10,000 tokens is billed as 10,000 tokens, regardless of the length of the document.
- Accessing cached summaries of the same URL is always free.

Our enterprise-grade Muriel summarization engine costs a **flat rate of $1 per summary**, regardless of the length of the document. Muriel produces higher quality summaries, especially for long documents. It also provides longer and more detailed summaries than our consumer-grade model. See the difference [here](https://blog.kagi.com/universal-summarizer#muriel).

To use Muriel just enter "muriel" as the "engine" parameter in the API call.

## Privacy

Read how is summarization data handled in our [privacy policy](https://kagi.com/privacy#Summarizer).

## API Key

You can get an API key [here](https://kagi.com/settings?p=api) (requires a Kagi Search account).

You can reach out through support@kagi.com, our [Discord server](https://kagi.com/discord) or [KagiFeedback.org](https://kagifeedback.org).

## Types of Content that can be Summarized

You can summarize many types of web content, including:

- Text web pages, articles, and forum threads
- PDF documents
- PowerPoint documents (.pptx)
- Audio files (mp3/wav)
- YouTube URLs
- Twitter Threads

Unlike other summarization products, Universal Summarizer can **summarize content of any length**.

See [demo](https://kagi.com/summarizer) for examples or [blog post](https://blog.kagi.com/universal-summarizer) to learn more.

## Endpoints

### Summarize Document

#### `GET/POST /summarize`

Summarizes a document, by URL or using passed text.

Returns a [Summarization Object](#summarization-object).

#### Examples

**GET request, Youtube Video, Agnes engine**

```shell
curl -v \
  -H "Authorization: Bot $TOKEN" \
  "https://kagi.com/api/v0/summarize?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZSRHeXYDLko"
```

Alternatively in python:

```python
import requests

base_url = 'https://kagi.com/api/v0/summarize'
params = {
    "url": "https://www.youtube.com/watch?v=ZSRHeXYDLko",
    "summary_type": "summary",
    "engine": "agnes"
}
headers = {'Authorization': f'Bot {TOKEN}'}

response = requests.post(base_url, headers=headers, params=params)
print(response.json())
```

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

**POST request with JSON body, song lyrics, Daphne engine**

```shell
$ curl -v \
  -XPOST https://kagi.com/api/v0/summarize \
  -H "Content-Type: application/json" \
  -H "Authorization: Bot $TOKEN" \
  -d '{"url":"https://genius.com/Brothertiger-mainsail-lyrics", "engine": "daphne"}'
```

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
cache   | bool  | No  | Whether to allow cached requests & responses. (default is true)

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
takeaway | Bulleted list of key points

### Summarization Engines

Different summarization engines are provided that will give you choices over the
"flavor" of the summarization text.

Engine | Description
-------|-----------
agnes (default) | Formal, technical, analytical summary
daphne | Informal, creative, friendly summary
muriel | Best-in-class summary using our enterprise-grade model

### Target Language Codes

The summarizer can translate the output into a desired language, using the table
of supported language codes below.

If no language is specified, the document's original language is allowed to
influence the summarizer's output. Specifying a language will add a an explicit
translation step, to translate the summary to the desired language.

For example, if a document is mostly written in Spanish, the summary output may
itself be in Spanish or contain Spanish passages. Specifying "EN" will ensure
all passages are translated as English.


Code | Language
-----|---------
BG | Bulgarian
CS | Czech
DA | Danish
DE | German
EL | Greek
EN | English
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
PT | Portuguese
RO | Romanian
RU | Russian
SK | Slovak
SL | Slovenian
SV | Swedish
TR | Turkish
UK | Ukrainian
ZH | Chinese (simplified)
