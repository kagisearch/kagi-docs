# Kagi LLM Benchmarking Project

Introducing the Kagi LLM Benchmarking Project, which evaluates major large language models (LLMs) on their reasoning, coding, and instruction following capabilities.

## Kagi Reasoning Benchmark

The Kagi Reasoning Benchmark is an **unpolluted reasoning benchmark** to assess large language models (LLMs) through diverse, challenging tasks. Unlike standard benchmarks, the tasks in this benchmark are unpublished, not to be found in training data or "gamed" in finetuning. The task set those frequently changes, providing a rigorous evaluation of the models' capabilities, (hopefully) outside of what models saw in the training data to avoid benchmark overfitting. 

Last update: **May 6th, 2025** 

Tasks: *100* 

Avg. Input Tokens for all tasks: **8861**

<div class="minimal-table-margins">

| model | provider | accuracy_avg | time | cost | cost_index | speed_index | consistency_index | out_tokens | tps | |-------------------------------------|------------|----------------|--------|--------|--------------|---------------|---------------------|--------------|-------| 
| arcee-ai/maestro-reasoning | kagi (soon) | 60.05 | 130k | 2.04 | 0.29 | 0.00 | 0.70 | 400k | 3.00 | 
| Qwen3-235B-A22B | kagi (soon) | 58.58 | 79k | 0.73 | 0.80 | 0.00 | 0.76 | 290k | 3.64 | 
| o3 | kagi (ultimate) | 57.34 | 1.6k | 41.25 | 0.01 | 0.04 | 0.72 | 12k | 7.75 | 
| Qwen3-14B | kagi (soon) | 56.15 | 65k | - | - | 0.00 | 0.70 | 310k | 4.71 | 
| o1 | openai | 54.17 | 3.7k | 57.40 | 0.01 | 0.01 | 0.83 | 6.3k | 1.69 | 
| claude 3.7 (extended) | kagi (ultimate) | 53.28 | 3.7k | 22.94 | 0.02 | 0.01 | 0.70 | 160k | 44.50 | 
| gemini-2-5-pro | kagi (ultimate) | 50.56 | 9k | 2.86 | 0.18 | 0.01 | 0.81 | 15k | 1.68 | 
| o4-mini | kagi (all) | 49.75 | 1.7k | 4.74 | 0.10 | 0.03 | 0.75 | 9.8k | 5.73 | 
| o3-mini | kagi (all) | 48.38 | 5k | 4.85 | 0.10 | 0.01 | 0.82 | 16k | 3.15 | 
| deepseek-r1 | kagi (ultimate) | 45.51 | 8.5k | 7.79 | 0.06 | 0.01 | 0.74 | 180k | 21.80 | 
| deepseek-r1-distill-llama-70b | kagi (all) | 45.34 | 6.9k | 1.21 | 0.38 | 0.01 | 0.77 | 200k | 28.46 | 
| grok-3-mini (reasoning: high) | kagi (ultimate) | 43.77 | 3k | 0.59 | 0.75 | 0.01 | 0.65 | 12k | 3.88 | 
| gpt-4-1 | kagi (ultimate) | 42.52 | 1.8k | 2.29 | 0.19 | 0.02 | 0.72 | 23k | 12.46 | 
| sonar-reasoning-pro | openrouter | 40.97 | 2.5k | 4.18 | 0.10 | 0.02 | 0.77 | 20k | 7.80 | 
| grok-3 | kagi (ultimate) | 39.83 | 5.5k | 7.06 | 0.06 | 0.01 | 0.71 | 35k | 6.25 | 
| gpt-4-1-mini | kagi (all) | 39.36 | 11k | 0.22 | 1.77 | 0.00 | 0.84 | 24k | 2.18 | 
| chatgpt-4o | kagi (ultimate) | 38.05 | 3.2k | 7.70 | 0.05 | 0.01 | 0.73 | 25k | 7.84 | 
| QVQ-72B-preview | nebius | 35.82 | 68k | - | - | 0.00 | 0.68 | 190k | 2.78 | 
| perplexity/sonar-pro | openrouter | 35.78 | 0.44k | 2.05 | 0.17 | 0.08 | 0.78 | 29k | 65.36 | 
| llama-4-maverick | kagi (ultimate) | 35.42 | 7.9k | 0.71 | 0.50 | 0.00 | 0.67 | 40k | 5.03 | 
| Llama-3.3-70B-Instruct | kagi (deprecated) | 33.33 | 2.1k | - | - | 0.02 | 0.81 | 24k | 11.30 | 
| microsoft/phi-4-reasoning | openrouter | 32.60 | 49k | - | - | 0.00 | 0.67 | 180k | 3.73 | 
| microsoft/phi-4-reasoning-plus | openrouter | 32.35 | 48k | - | - | 0.00 | 0.67 | 160k | 3.33 | 
| deepseek v3 | kagi (all) | 31.69 | 9.4k | 1.11 | 0.29 | 0.00 | 0.74 | 44k | 4.67 | 
| thedrummer/anubis-pro-105b-v1 | openrouter | 31.62 | 8.7k | 0.15 | 2.11 | 0.00 | 0.81 | 27k | 3.16 | 
| llama-4-scout | kagi (all) | 31.16 | 9.8k | 0.20 | 1.58 | 0.00 | 0.74 | 36k | 3.65 | 
| llama-3-70b | kagi (deprecated) | 30.39 | 1.4k | 0.59 | 0.52 | 0.02 | 0.80 | 40k | 28.05 | 
| cohere/command-a | openrouter | 29.66 | 11k | - | - | 0.00 | 0.84 | 34k | 2.99 | 
| mistral-large | kagi (ultimate) | 29.36 | 2.5k | 0.97 | 0.30 | 0.01 | 0.88 | 30k | 12.12 | 
| llama-3-405b | kagi (deprecated) | 28.92 | 1.5k | 1.76 | 0.16 | 0.02 | 0.88 | 27k | 17.74 | 
| minimax/minimax-01 | openrouter | 27.45 | 2.2k | 0.18 | 1.54 | 0.01 | 0.84 | 39k | 18.01 | 
| mistral-small-it-0325 | kagi (all) | 27.45 | 11k | - | - | 0.00 | 0.83 | 36k | 3.18 | 
| google/gemma-3-4b-it | openrouter | 25.49 | 6.5k | - | - | 0.00 | 0.82 | 35k | 5.37 | 
| Qwen/Qwen2.5-Coder-32B-Instruct-fas | nebius | 25.49 | 11k | - | - | 0.00 | 0.82 | 25k | 2.28 | 
| arcee-ai/coder-large | together | 25.37 | 1k | 0.10 | 2.56 | 0.02 | 0.82 | 25k | 23.70 | 
| arcee-ai/virtuoso-large | together | 24.75 | 19k | 0.28 | 0.88 | 0.00 | 0.85 | 51k | 2.73 | 
| gemini-flash | kagi (all) | 24.51 | 0.78k | 0.23 | 1.08 | 0.03 | 0.72 | 13k | 17.35 | 
| gpt-4-1-nano | OpenAI | 24.39 | 11k | 0.10 | 2.35 | 0.00 | 0.70 | 27k | 2.51 | 
| gpt-4o-mini | kagi (deprecated) | 24.02 | 6.8k | 0.18 | 1.32 | 0.00 | 0.77 | 20k | 3.01 | 
| gemma-3-27b | kagi (all) | 23.50 | 5.4k | 0.07 | 3.53 | 0.00 | 0.82 | 13k | 2.50 | 
| mistralai/Mixtral-8x22B-Instruct-v0 | nebius | 23.28 | 4.1k | - | - | 0.01 | 0.83 | 22k | 5.32 | 
| mistral-small | mistral | 22.35 | 8.6k | 0.02 | 10.16 | 0.00 | 0.79 | 20k | 2.35 | 
| nova-pro | kagi (deprecated) | 21.57 | 1.3k | 0.63 | 0.34 | 0.02 | 0.80 | 18k | 14.44 | 
| mistralai/Mistral-Nemo-Instruct-240 | nebius | 20.83 | 3.8k | - | - | 0.01 | 0.86 | 22k | 5.75 | 
| liquid/lfm-7b | openrouter | 19.85 | 4.4k | - | - | 0.00 | 0.85 | 25k | 5.63 | 
| ai21/jamba-1.6-large | openrouter | 19.85 | 8.4k | - | - | 0.00 | 0.81 | 20k | 2.43 | 
| microsoft/phi-4-multimodal-instruct | openrouter | 18.63 | 4.5k | - | - | 0.00 | 0.86 | 23k | 5.01 | 
| cohere/command-r7b-12-2024 | openrouter | 18.23 | 3.8k | 0.01 | 29.79 | 0.00 | 0.80 | 29k | 7.71 | 
| gemma2-9b-it | groq | 18.14 | 1k | - | - | 0.02 | 0.84 | 14k | 14.14 | 
| llama-3-3b | kagi (deprecated) | 17.89 | 26k | 0.07 | 2.51 | 0.00 | 0.85 | 56k | 2.15 | 
| microsoft/Phi-3.5-mini-instruct | nebius | 17.65 | 5.8k | - | - | 0.00 | 0.82 | 34k | 5.96 | 
| microsoft/Phi-3.5-MoE-instruct | nebius | 17.33 | 37k | - | - | 0.00 | 0.81 | 98k | 2.66 | 
| nova-lite | kagi (deprecated) | 17.16 | 5.4k | 0.05 | 3.29 | 0.00 | 0.82 | 27k | 5.01 |
| liquid/lfm-40b | openrouter | 14.95 | 6.5k | 0.01 | 16.11 | 0.00 | 0.80 | 25k | 3.81 | 

{.sortable}

</div>

**Note:** Costs in this table are heavy on output tokens, due to the nature of the benchmark tasks. These are not representative costs for use of these models as an agent, where the ratio of input to output tokens will be much different.

**NOTE:** The table shows models completing >0.95% of 100 Tasks 

Reasoning models are denoted by the `CoT` column. They are optimized for multi-step reasoning and often produce better results on reasoning benchmarks, at the expense of latency and cost. They may not be suitable for all general purpose LLM tasks.

The table includes metrics such as overall mode quality (measured as percent of correct responses), total tokens output (some models are less verbose by default, affecting both cost and speed), total cost to run the test and average speed in tokens per second at the time of testing.

The scores for accuracy per second and accuracy per dollar are normalized accuracy scores for speed and cost. Higher scores are better.

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
