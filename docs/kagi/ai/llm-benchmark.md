# Kagi LLM Benchmarking Project

Introducing the Kagi LLM Benchmarking Project, which evaluates major large language models (LLMs) on their reasoning, coding, and instruction following capabilities.

## LLM Benchmarks

The Kagi LLM Benchmarking Project uses an unpolluted benchmark to assess contemporary large language models (LLMs) through diverse, challenging tasks. Unlike standard benchmarks, our tests frequently change and are mostly novel, providing a rigorous evaluation of the models' capabilities, (hopefully) outside of what models saw in the training data to avoid benchmark overfitting. 

Last updated **Nov 4, 2024**.

| Model | Accuracy (%) | Tokens | Total Cost ($) | Median Latency (s) | Speed (tokens/sec) |
|-----------------------------|---------------|--------|----------------|------------------|-------------------|
| **Anthropic** Claude-3.5-sonnet-20241022 | 43.33 | 9633 | 0.16649 | 2.38 | 55.53 |
| **OpenAI** o1-mini | 41.67 | 42874 | 0.53454 | 4.62 | n/a |
| **Anthropic** Claude-3.5-haiku-20241022 | 40.00 | 9738 | 0.05605 | 1.84 | 66.92 |
| **OpenAI** gpt-4o | 40.00 | 11172 | 0.12801 | 1.59 | 49.90 |
| **OpenRouter** nvidia/llama-3.1-nemotron-70b-instruct | 38.33 | 17413 | 0.00951 | 10.52 | 18.35 |
| **OpenRouter** x-ai/grok-beta | 35.59 | 12187 | 0.21690 | 3.29 | 43.34 |
| **Together** Meta-Llama-3.1-405B-Instruct-Turbo | 35.00 | 13306 | 0.10075 | 2.45 | 40.44 |
| **OpenAI** gpt-4-turbo | 30.00 | 11460 | 0.40902 | 3.17 | 34.01 |
| **Groq** llama-3.1-70b-versatile | 30.00 | 10879 | 0.01344 | 1.85 | 80.75 |
| **OpenAI** gpt-4o-mini | 20.00 | 13181 | 0.00884 | 1.58 | 82.08 |
| **OpenRouter** meta-llama/llama-3.2-3b-instruct | 18.33 | 13003 | 0.00081 | 0.89 | 94.52 |
| **OpenAI** gpt-3.5-turbo | 8.33 | 4136 | 0.02132 | 0.72 | 59.10 |
| **Anthropic** Claude-3-haiku-20240307 | 8.33 | 10387 | 0.01481 | 1.24 | 118.84 |


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
