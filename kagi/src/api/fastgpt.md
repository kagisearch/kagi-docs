# FastGPT

[FastGPT](https://labs.kagi.com/fastgpt) is a Kagi service using powerful LLMs to answer user queries running a full search engine underneath. Think ChatGPT, but on steroids and faster! You can try the web app [here](https://labs.kagi.com/fastgpt).

## Quick start

1. Get the [API key](https://kagi.com/settings?p=api) (requires a Kagi account)
2. Top off your [API credits](https://kagi.com/settings?p=billing_api).
3. Call the API. See [example usage](#examples).

## API key

To obtain an API key you will first need to [create a Kagi account](https://kagi.com/signup?plan_id=trial). 

Then, navigate to Settings -> Advanced -> API portal, or click [here](https://kagi.com/settings?p=api) to go directly.

Click "Generate API Token".

## API Credits

The FastGPT API uses pre-paid API credits.
You can manage API credits in the [API billing](https://kagi.com/settings?p=billing_api) page of your Kagi settings.

Using API with insufficient credits will produce "Insufficient credit to perform this request." response message.

## Pricing

Pricing for FastGPT is a flat rate  per-query:

- 1.5¢ per query ($15 USD per 1000 queries) when `web_search` is enabled
- 0.15¢ per query ($1.5 USD per 1000 queries) when `web_search` is disabled

## Support

You can reach out through support@kagi.com, our [Discord server](https://kagi.com/discord) or [KagiFeedback.org](https://kagifeedback.org).

## Endpoints

### Answer Query

#### `POST /fastgpt`

Answer a query.

Returns a [FastGPT Answer](#fastgpt-answer).

#### Examples

**POST request with web search**

```shell
curl -v \
  -H "Authorization: Bot $TOKEN" \
  -H "Content-Type: application/json" \
  --data '{"query": "Python 3.11"}' \
  https://kagi.com/api/v0/fastgpt
```

Alternatively in python:

```python
import requests

base_url = 'https://kagi.com/api/v0/fastgpt'
data = {
    "query": "python 3.11",
}
headers = {'Authorization': f'Bot {TOKEN}'}

response = requests.post(base_url, headers=headers, json=data)
print(response.json())
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
    "output": "Python 3.11 was released in 2021 and introduced several new features compared to previous versions:
    - Faster performance: The interpreter was optimized, resulting in up to 1.25x speedup on benchmarks.[1]
    - New syntax features: Exception groups were added using PEP 654.[1]    
    - Traceback annotation: The new version includes a feature to annotate tracebacks to make them more intelligible.[2]
    - Type hint improvements: Type hints were made more powerful.[3]",
    "tokens": 757,
    "references": [
      {"title": "What's New In Python 3.11 — Python 3.11.3 documentation", "snippet": "...", "link": "https://docs.python.org/3/whatsnew/3.11.html"}, 
      {"title": "Introducing the New Features in Python 3.11 -", "snippet": "...", "link": "https://earthly.dev/blog/python-3.11-new-features/"}
    ]
  }
}
```

</details>

#### Parameters

Field | Type | Required | Description
------|------|----------|-----------
query   | string  | Yes  | A query to be answered.
web_search  | bool  | No | Whether to use web search results in answering the query. (default is true)
cache   | bool  | No  | Whether to allow cached requests & responses. (default is true)

## Objects

### FastGPT Answer

Field     | Type      | Description
----------|-----------|------------
output    | string    | Answer output
references    | array of Reference object   | The search results that are referred in the answer.
tokens    | int       | Amount of tokens processed


### Reference object

Field     | Type      | Description
----------|-----------|------------
title    | string    | Title of the referenced search result.
snippet    | string   | Snippet of the referenced search result.
url    | string      | URL of the referenced search result.
