# Kagi LLM Benchmarking Project

Introducing the Kagi LLM Benchmarking Project, which evaluates major large language models (LLMs) on their reasoning, coding, and instruction following capabilities.

## LLM Benchmarks

The Kagi LLM Benchmarking Project uses an unpolluted benchmark to assess contemporary large language models (LLMs) through diverse, challenging tasks. Unlike standard benchmarks, our tests frequently change and are mostly novel, providing a rigorous evaluation of the models' capabilities, (hopefully) outside of what models saw in the training data to avoid benchmark overfitting. 

Last updated **February 27, 2025**


### General purpose models

| Model | Accuracy (%) | Tokens | Total Cost ($) | Median Latency (s) | Speed (tokens/sec) |
|-----------------------------|---------------|--------|----------------|------------------|-------------------|
| **OpenAI** gpt-4.5-preview | 69.35 | 14061 | 2.15409 | 8.86 | 11.27  |
| **Google** gemini-2.0-pro-exp-02-05 | 60.78 | 6420 | 0.32164 | 1.72 | 51.25 |
| **Anthropic** claude-3-7-sonnet-20250219 |  53.23 | 12196 | 0.20533 | 2.82| 54.12 |
| **OpenAI** gpt-4o | 48.39 | 10371 | 0.12033 | 2.07 | 48.31 |
| **Anthropic** claude-3-5-sonnet-20241022 | 43.55 | 9869 | 0.17042 | 2.69 | 50.13 |
| **DeepSeek** Chat V3 | 41.94 | 22381 | 0.00719 | 4.04  | 63.82 |
| **Mistral** Large-2411 | 41.94 | 12500 | 0.09042 | 3.07 | 38.02 |
| **Amazon** Nova-Pro | 40.32 | 15160 | 0.05426 | 3.08 | 60.42 |
| **Google** gemini-2.0-flash-lite-preview-02-05 |  38.71 | 9470 | 0.01282 | 0.72| 116.74 |
| **Anthropic** Claude-3.5-haiku-20241022 | 37.10 | 9695 | 0.05593 | 2.08 | 56.60 |
| **Google** gemini-2.0-flash |  37.10 | 10366 | 0.01852 | 1.04| 83.24|
| **Meta** llama-3.1-405B-Instruct-Turbo  (Together.ai) | 35.48 | 12315 | 0.09648 | 2.33 | 33.77 |
| **Meta** llama-3.3-70b-versatile (Groq) | 33.87 | 15008 | 0.01680 | 0.63 | 220.90|
| **Microsoft** phi-4 14B (local) | 32.26 | 17724 | n/a | n/a | n/a |
| **Meta** llama-3.1-70b-versatile | 30.65 | 12622 | 0.01495 | 1.42 | 82.35 |
| **Amazon** Nova-Lite | 24.19 | 16325 | 0.00431 | 2.29 | 87.93 |
| **Google** gemini-1.5-flash | 22.58 | 6806 | 0.00962 | 0.66 | 77.93 |
| **Amazon** Nova-Micro | 22.58 | 16445 | 0.00253 | 1.97 | 106.47 |
| **Alibaba** Qwen-2.5-72B | 20.97 | 8616 | 0.07606 | 9.08 | 10.08 |
| **OpenAI** gpt-4o-mini | 19.35 | 13363 | 0.00901 | 1.53 | 66.41 |
| **Anthropic** Claude-3-haiku-20240307| 9.68 | 10296 | 0.01470 | 1.44 | 108.38 |
| **TII** Falcon3 7B (local) | 9.68 | 18574 | n/a | n/a | n/a |



### Reasoning models

Reasoning models are optimized for multi-step reasoning and often produce better results on reasoning benchmarks, at the expense of latency and cost. They may not be suitable for all general purpose LLM tasks.

| Model | Accuracy (%) | Tokens | Total Cost ($) | Median Latency (s) |
|-----------------------------|---------------|--------|----------------|------------------|
| **OpenAI** o1 | 74.19 | 85120 | 5.20579 | 13.26 |
| **Deepseek** R1 | 70.97 | 152944 | 0.33854 | 17.02|
| **OpenAI** o3-mini (high) | 64.52 | 243143 | 1.07707 |  15.99  |
| **Alibaba** Qwen QWQ-32B | 62.96 | 45293 | 0.068 | 5.6 |
| **OpenAI** o1-mini | 62.90 | 56219 | 0.69509 |6.30 | 
| **OpenAI** o3-mini | 62.90 | 102059 | 0.45630 |  17.39  |
| **Anthropic** claude-3-7-sonnet-20250219 (8192 thinking budget) |  62.90 | 179395 | 2.71853 | 25.90  |
| **Google** gemini-2.0-flash-thinking-exp-01-21 | 58.33  | 14433 |  0.67431 | 5.91 |
| **Deepseek** r1-distill-llama-70b (Groq) | 46.77 | 43517 | 0.04686 | 2.60 | 260.41 |









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



## Credits

Kagi LLM Benchmarking Project is inspired by [Wolfram LLM Benchmarking Project](https://www.wolfram.com/llm-benchmarking-project/) and [Aider LLM coding leaderboard](https://aider.chat/docs/leaderboards/).
