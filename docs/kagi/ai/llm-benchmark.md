# Kagi LLM Benchmarking Project

Introducing the Kagi LLM Benchmarking Project, which evaluates major large language models (LLMs) on their reasoning, coding, and instruction following capabilities.

## LLM Benchmarks

The Kagi LLM Benchmarking Project uses an unpolluted benchmark to assess contemporary large language models (LLMs) through diverse, challenging tasks. Unlike standard benchmarks, our tests frequently change and are mostly novel, providing a rigorous evaluation of the models' capabilities, (hopefully) outside of what models saw in the training data to avoid benchmark overfitting. 

Last updated **Dec 6, 2024**


| Model | Accuracy (%) | Tokens | Total Cost ($) | Median Latency (s) | Speed (tokens/sec) |
|-----------------------------|---------------|--------|----------------|------------------|-------------------|
| **Qwen** QWQ-32B | 50.00 | 45293 | 0.02835 | 15.46 | n/a |
| **OpenAI** gpt-4o | 48.39 | 10371 | 0.12033 | 2.07 | 48.31 |
| **Meta** llama-3.3-70b-versatile | 43.55 | 15145 | 0.01689 | 2.46 | 85.80 |
| **Anthropic** Claude-3.5-sonnet-20241022 | 43.55 | 9869 | 0.17042 | 2.69 | 50.13 |
| **Mistral** Large-2411 | 41.94 | 12500 | 0.09042 | 3.07 | 38.02 |
| **Amazon** Nova-Pro | 40.32 | 15160 | 0.05426 | 3.08 | 60.42 |
| **Anthropic** Claude-3.5-haiku-20241022 | 37.10 | 9695 | 0.05593 | 2.08 | 56.60 |
| **OpenAI** o1-mini | 37.10 | 42965 | 0.53978 | 5.24 | n/a |
| **Meta** llama-3.1-405B-Instruct-Turbo | 32.26 | 12315 | 0.09648 | 2.33 | 33.77 |
| **Meta** llama-3.1-70b-versatile | 30.65 | 12622 | 0.01495 | 1.42 | 82.35 |
| **Amazon** Nova-Lite | 24.19 | 16325 | 0.00431 | 2.29 | 87.93 |
| **Google** gemini-1.5-flash | 22.58 | 6806 | 0.00962 | 0.66 | 77.93 |
| **Amazon** Nova-Micro | 22.58 | 16445 | 0.00253 | 1.97 | 106.47 |
| **Qwen** Qwen-2.5-72B | 20.97 | 8616 | 0.07606 | 9.08 | 10.08 |
| **OpenAI** gpt-4o-mini | 19.35 | 13363 | 0.00901 | 1.53 | 66.41 |
| **Anthropic** Claude-3-haiku-20240307 | 9.68 | 10296 | 0.01470 | 1.44 | 108.38 |




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
