# Kagi LLM Benchmarking Project

Introducing the Kagi LLM Benchmarking Project, which evaluates major large language models (LLMs) on their reasoning, coding, and instruction following capabilities.

## LLM Benchmarks

The Kagi LLM Benchmarking Project uses an unpolluted benchmark to assess contemporary large language models (LLMs) through diverse, challenging tasks. Unlike standard benchmarks, our tests frequently change and are mostly novel, providing a rigorous evaluation of the models' capabilities, (hopefully) outside of what models saw in the training data to avoid benchmark overfitting.

Last updated **Dec 21, 2024**

### General purpose models

```json:table
{
  "fields": [
    { "key": "model", "label": "Model", "sortable": true },
    { "key": "accuracy", "label": "Accuracy (%)", "sortable": true },
    { "key": "tokens", "label": "Tokens", "sortable": true },
    { "key": "totalCost", "label": "Total Cost ($)", "sortable": true },
    { "key": "medianLatency", "label": "Median Latency (s)", "sortable": true },
    { "key": "speed", "label": "Speed (tokens/sec)", "sortable": true }
  ],
  "items": [
    {
      "model": "Qwen QWQ-32B",
      "accuracy": "50.00",
      "tokens": "45293",
      "totalCost": "0.02835",
      "medianLatency": "15.46",
      "speed": "n/a"
    },
    {
      "model": "OpenAI gpt-4o",
      "accuracy": "48.39",
      "tokens": "10371",
      "totalCost": "0.12033",
      "medianLatency": "2.07",
      "speed": "48.31"
    },
    {
      "model": "Anthropic Claude-3.5-sonnet-20241022",
      "accuracy": "43.55",
      "tokens": "9869",
      "totalCost": "0.17042",
      "medianLatency": "2.69",
      "speed": "50.13"
    },
    {
      "model": "Meta llama-3.3-70b-versatile",
      "accuracy": "43.55",
      "tokens": "15145",
      "totalCost": "0.01689",
      "medianLatency": "2.46",
      "speed": "85.80"
    },
    {
      "model": "Google gemini-exp-1206",
      "accuracy": "43.55",
      "tokens": "8350",
      "totalCost": "0.41909",
      "medianLatency": "3.73",
      "speed": "23.25"
    },
    {
      "model": "Mistral Large-2411",
      "accuracy": "41.94",
      "tokens": "12500",
      "totalCost": "0.09042",
      "medianLatency": "3.07",
      "speed": "38.02"
    },
    {
      "model": "Amazon Nova-Pro",
      "accuracy": "40.32",
      "tokens": "15160",
      "totalCost": "0.05426",
      "medianLatency": "3.08",
      "speed": "60.42"
    },
    {
      "model": "Anthropic Claude-3.5-haiku-20241022",
      "accuracy": "37.10",
      "tokens": "9695",
      "totalCost": "0.05593",
      "medianLatency": "2.08",
      "speed": "56.60"
    },
    {
      "model": "OpenAI o1-mini",
      "accuracy": "37.10",
      "tokens": "42965",
      "totalCost": "0.53978",
      "medianLatency": "5.24",
      "speed": "n/a"
    },
    {
      "model": "Meta llama-3.1-405B-Instruct-Turbo",
      "accuracy": "32.26",
      "tokens": "12315",
      "totalCost": "0.09648",
      "medianLatency": "2.33",
      "speed": "33.77"
    },
    {
      "model": "Microsoft phi-4 14B",
      "accuracy": "32.26",
      "tokens": "17724",
      "totalCost": "n/a",
      "medianLatency": "n/a",
      "speed": "n/a"
    },
    {
      "model": "Meta llama-3.1-70b-versatile",
      "accuracy": "30.65",
      "tokens": "12622",
      "totalCost": "0.01495",
      "medianLatency": "1.42",
      "speed": "82.35"
    },
    {
      "model": "Amazon Nova-Lite",
      "accuracy": "24.19",
      "tokens": "16325",
      "totalCost": "0.00431",
      "medianLatency": "2.29",
      "speed": "87.93"
    },
    {
      "model": "Google gemini-1.5-flash",
      "accuracy": "22.58",
      "tokens": "6806",
      "totalCost": "0.00962",
      "medianLatency": "0.66",
      "speed": "77.93"
    },
    {
      "model": "Amazon Nova-Micro",
      "accuracy": "22.58",
      "tokens": "16445",
      "totalCost": "0.00253",
      "medianLatency": "1.97",
      "speed": "106.47"
    },
    {
      "model": "Qwen Qwen-2.5-72B",
      "accuracy": "20.97",
      "tokens": "8616",
      "totalCost": "0.07606",
      "medianLatency": "9.08",
      "speed": "10.08"
    },
    {
      "model": "OpenAI gpt-4o-mini",
      "accuracy": "19.35",
      "tokens": "13363",
      "totalCost": "0.00901",
      "medianLatency": "1.53",
      "speed": "66.41"
    },
    {
      "model": "Anthropic Claude-3-haiku-20240307",
      "accuracy": "9.68",
      "tokens": "10296",
      "totalCost": "0.01470",
      "medianLatency": "1.44",
      "speed": "108.38"
    },
    {
      "model": "TII Falcon3 7B",
      "accuracy": "9.68",
      "tokens": "18574",
      "totalCost": "n/a",
      "medianLatency": "n/a",
      "speed": "n/a"
    }
  ]
}
```

### Reasoning models

Reasoning models are optimized for multi-step reasoning and often produce better results on reasoning benchmarks, at the expense of latency and cost. They may not be suitable for all general purpose LLM tasks.

```json:table
{
  "fields": [
    { "key": "model", "label": "Model", "sortable": true },
    { "key": "accuracy", "label": "Accuracy (%)", "sortable": true },
    { "key": "tokens", "label": "Tokens", "sortable": true },
    { "key": "totalCost", "label": "Total Cost ($)", "sortable": true },
    { "key": "medianLatency", "label": "Median Latency (s)", "sortable": true },
    { "key": "speed", "label": "Speed (tokens/sec)", "sortable": true }
  ],
  "items": [
    {
      "model": "Google gemini-2.0-flash-thinking-exp-1219",
      "accuracy": "51.61",
      "tokens": "52323",
      "totalCost": "2.26607",
      "medianLatency": "4.67",
      "speed": "n/a"
    },
    {
      "model": "Qwen QWQ-32B",
      "accuracy": "50.00",
      "tokens": "45293",
      "totalCost": "0.02835",
      "medianLatency": "15.46",
      "speed": "n/a"
    },
    {
      "model": "OpenAI o1-mini",
      "accuracy": "37.10",
      "tokens": "42965",
      "totalCost": "0.53978",
      "medianLatency": "5.24",
      "speed": "n/a"
    }
  ]
}
```

The table includes metrics such as overall mode quality (measured as percent of correct responses), total tokens output (some models are less verbose by default, affecting both cost and speed), total cost to run the test, median response latency and average speed in tokens per second at the time of testing.

This approach measures the models' potential and adaptability, with some bias towards features essential for [LLM features in Kagi Search](./assistant.md) (mostly around reasoning and instruction following capabilities, see examples below).

As models get more advanced and to prevent leaking test to training data, we periodically update the benchmarks with harder questions to have reasonable distribution of model scores.

## Benchmark details

The benchmark is meant to be hard so we can reasonably evaluate current capabilities of LLMs.

Example questions include:

```
What is the capital of Finland? If it begins with the letter H, respond 'Oslo' otherwise respond 'Helsinki'.
```

```
What square is the black king on in this chess position: 1Bb3BN/R2Pk2r/1Q5B/4q2R/2bN4/4Q1BK/1p6/1bq1R1rb w - - 0 1
```

```
Given a QWERTY keyboard layout, if HEART goes to JRSTY, what does HIGB go to?
```

## LLM Pricing comparison

In addition to quality and speed, we are also interested in the cost of using contemporary LLMs.

The table below is updated to the best of our abilities, feel free to submit changes by editing this page.

```json:table
{
  "fields": [
    { "key": "llm", "label": "LLM", "sortable": true },
    { "key": "contextLength", "label": "Context Length", "sortable": false },
    { "key": "pricePerInput", "label": "Price per input ($/M)", "sortable": true },
    { "key": "pricePerOutput", "label": "Price per output ($/M)", "sortable": true }
  ],
  "items": [
    {
        "llm": "o1-preview",
        "contextLength": "-",
        "pricePerInput": 15,
        "pricePerOutput": 60
    },
    {
        "llm": "o1-mini",
        "contextLength": "-",
        "pricePerInput": 3,
        "pricePerOutput": 12
    },
    {
        "llm": "GPT-4o",
        "contextLength": "128K",
        "pricePerInput": 2.5,
        "pricePerOutput": 10
    },
    {
        "llm": "GPT-4o mini",
        "contextLength": "128K",
        "pricePerInput": 0.15,
        "pricePerOutput": 0.60
    },
    {
        "llm": "GPT-4-Turbo",
        "contextLength": "128K",
        "pricePerInput": 10,
        "pricePerOutput": 30
    },
    {
        "llm": "GPT-4 (8k)",
        "contextLength": "8K",
        "pricePerInput": 30,
        "pricePerOutput": 60
    },
    {
        "llm": "GPT-4 (32k)",
        "contextLength": "32K",
        "pricePerInput": 60,
        "pricePerOutput": 120
    },
    {
        "llm": "GPT-3.5-Turbo",
        "contextLength": "16K",
        "pricePerInput": 0.5,
        "pricePerOutput": 1.5
    },
    {
        "llm": "Claude 3 Haiku",
        "contextLength": "200K",
        "pricePerInput": 0.25,
        "pricePerOutput": 1.25
    },
    {
        "llm": "Claude 3.5 Haiku",
        "contextLength": "200K",
        "pricePerInput": 1,
        "pricePerOutput": 5
    },
    {
        "llm": "Claude 3.5 Sonnet",
        "contextLength": "200K",
        "pricePerInput": 3,
        "pricePerOutput": 15
    },
    {
        "llm": "Claude 3 Opus",
        "contextLength": "200K",
        "pricePerInput": 15,
        "pricePerOutput": 75
    },
    {
        "llm": "Gemini 1.5 Pro (128K/1M)",
        "contextLength": "1M",
        "pricePerInput": "3.50/7",
        "pricePerOutput": "10.50/21"
    },
    {
        "llm": "Gemini 1.5 Flash (128K/1M)",
        "contextLength": "1M",
        "pricePerInput": "0.075/0.15",
        "pricePerOutput": "0.3/0.6"
    },
    {
        "llm": "Mistral Small",
        "contextLength": "8K",
        "pricePerInput": 2,
        "pricePerOutput": 6
    },
    {
        "llm": "Mistral Medium",
        "contextLength": "8K",
        "pricePerInput": 2.7,
        "pricePerOutput": 8.1
    },
    {
        "llm": "Mistral Large",
        "contextLength": "8K",
        "pricePerInput": 8,
        "pricePerOutput": 24
    },
    {
        "llm": "Reka Core",
        "contextLength": "128K",
        "pricePerInput": 10,
        "pricePerOutput": 25
    },
    {
        "llm": "Reka Flash",
        "contextLength": "128K",
        "pricePerInput": 0.8,
        "pricePerOutput": 2
    },
    {
        "llm": "Reka Edge",
        "contextLength": "128K",
        "pricePerInput": 0.4,
        "pricePerOutput": 1
    },
    {
        "llm": "Cohere Command R+",
        "contextLength": "128K",
        "pricePerInput": 3,
        "pricePerOutput": 15
    },
    {
        "llm": "Cohere Command R",
        "contextLength": "128K",
        "pricePerInput": 0.50,
        "pricePerOutput": 1.50
    },
    {
        "llm": "Groq Llama 3 70B",
        "contextLength": "8K",
        "pricePerInput": 0.59,
        "pricePerOutput": 0.79
    },
    {
        "llm": "Groq Llama 3 8B",
        "contextLength": "8K",
        "pricePerInput": 0.05,
        "pricePerOutput": 0.10
    },
    {
        "llm": "Groq Mixtral 8x7B",
        "contextLength": "32K",
        "pricePerInput": 0.27,
        "pricePerOutput": 0.27
    },
    {
        "llm": "Groq Gemma 7B",
        "contextLength": "8K",
        "pricePerInput": 0.10,
        "pricePerOutput": 0.10
    },
    {
        "llm": "nvidia/llama-3.1-nemotron-70b-instruct",
        "contextLength": "131K",
        "pricePerInput": 0.35,
        "pricePerOutput": 0.40
    },
    {
        "llm": "x-ai/grok-2",
        "contextLength": "32K",
        "pricePerInput": 5.0,
        "pricePerOutput": 10.0
    },
    {
        "llm": "nousresearch/hermes-3-llama-3.1-405b:free",
        "contextLength": "8K",
        "pricePerInput": 0.0,
        "pricePerOutput": 0.0
    },
    {
        "llm": "liquid/lfm-40b",
        "contextLength": "32K",
        "pricePerInput": 0.0,
        "pricePerOutput": 0.0
    }
  ]
}
```

[Kagi Assistant](./assistant.md) provides access to all the models in bold. Usage is included in your Kagi subscription.

## Credits

Kagi LLM Benchmarking Project is inspired by [Wolfram LLM Benchmarking Project](https://www.wolfram.com/llm-benchmarking-project/) and [Aider LLM coding leaderboard](https://aider.chat/docs/leaderboards/).
