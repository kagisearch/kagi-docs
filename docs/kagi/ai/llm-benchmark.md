# Kagi LLM Benchmarking Project

Introducing the Kagi LLM Benchmarking Project, which evaluates major large language models (LLMs) on their reasoning, coding, and instruction following capabilities.

## LLM Benchmarks

The Kagi LLM Benchmarking Project uses an unpolluted benchmark to assess contemporary large language models (LLMs) through diverse, challenging tasks. Unlike standard benchmarks, our tests frequently change and are mostly novel, providing a rigorous evaluation of the models' capabilities, (hopefully) outside of what models saw in the training data to avoid benchmark overfitting. 

Last updated **Dec 18, 2024**

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


| LLM                                | Context Length | Price per input ($/M) | Price per output ($/M) |
|------------------------------------|----------------|-----------------------|------------------------|
| o1-preview                         | -              | 15                    | 60                     |
| o1-mini                            | -              | 3                     | 12                     |
| **GPT-4o**                         | 128K           | 2.5                   | 10                     |
| **GPT-4o mini**                    | 128K           | 0.15                  | 0.60                   |
| **GPT-4-Turbo**                    | 128K           | 10                    | 30                     |
| GPT-4 (8k)                         | 8K             | 30                    | 60                     |
| **GPT-4 (32k)**                    | 32K            | 60                    | 120                    |
| **GPT-3.5-Turbo**                  | 16K            | 0.5                   | 1.5                    |
| **Claude 3 Haiku**                 | 200K           | 0.25                  | 1.25                   |
| Claude 3.5 Haiku                   | 200K           | 1                     | 5                      |
| **Claude 3.5 Sonnet**              | 200K           | 3                     | 15                     |
| **Claude 3 Opus**                  | 200K           | 15                    | 75                     |
| **Gemini 1.5 Pro** (128K/1M)       | 1M             | 3.50/7                | 10.50/21               |
| Gemini 1.5 Flash (128K/1M)         | 1M             | 0.075/0.15            | 0.3/0.6                |
| **Mistral Small**                  | 8K             | 2                     | 6                      |
| **Mistral Medium**                 | 8K             | 2.7                   | 8.1                    |
| **Mistral Large**                  | 8K             | 8                     | 24                     |
| Reka Core                          | 128K           | 10                    | 25                     |
| Reka Flash                         | 128K           | 0.8                   | 2                      |
| Reka Edge                          | 128K           | 0.4                   | 1                      |
| Cohere Command R+                  | 128K           | 3                     | 15                     |
| Cohere Command R                   | 128K           | 0.50                  | 1.50                   |
| Groq Llama 3 70B                   | 8K             | 0.59                  | 0.79                   |
| Groq Llama 3 8B                    | 8K             | 0.05                  | 0.10                   |
| Groq Mixtral 8x7B                  | 32K            | 0.27                  | 0.27                   |
| Groq Gemma 7B                      | 8K             | 0.10                  | 0.10                   |
| nvidia/llama-3.1-nemotron-70b-instruct | 131K           | 0.35                  | 0.40                   |
| x-ai/grok-2                    | 32K            | 5.0                   | 10.0                   |
| nousresearch/hermes-3-llama-3.1-405b:free | 8K             | 0.0                   | 0.0                    |
| liquid/lfm-40b                 | 32K            | 0.0                   | 0.0                    |

[Kagi Assistant](./assistant.md) provides access to all the models in bold. Usage is included in your Kagi subscription.


## Credits

Kagi LLM Benchmarking Project is inspired by [Wolfram LLM Benchmarking Project](https://www.wolfram.com/llm-benchmarking-project/) and [Aider LLM coding leaderboard](https://aider.chat/docs/leaderboards/).
