# Kagi LLM Benchmarking Project

Introducing the Kagi LLM Benchmarking Project, which evaluates major large language models (LLMs) on their reasoning, coding, and instruction-following capabilities.

## Kagi Reasoning Benchmark

The Kagi Reasoning Benchmark is an **unpolluted reasoning benchmark** to assess large language models (LLMs) through diverse, challenging tasks. Unlike standard benchmarks, the tasks in this benchmark are unpublished, not found in training data, or "gamed" in fine-tuning. The task set changes over time (mostly getting more difficult) to better represent the current state of the art.

Last update: **May 28th, 2025**

Tasks: **100**

Input Tokens for all tasks: **10859**

<div class="minimal-table-margins">

| model                         |   accuracy (%) |   time_per_task |   cost | output_tokens| tok/s  | provider            |
|-------------------------------|----------------|-----------------|--------|--------------|--------|---------------------|
| o3 `[CoT]`                    |          78.03 |            1.08 |   2.08 | 6.2k         |   9.25 | kagi (ultimate)     |
| claude-4-opus `[CoT]`         |          77.46 |            3.25 |   2.84 | 8.4k         |   9.05 | kagi (ultimate)     |
| gemini-2-5-pro `[CoT]`        |          74.03 |            0.94 |   0.19 | 6.9k         |   9.51 | kagi (ultimate)     |
| arcee-ai/maestro `[CoT]`      |          72.92 |          105.49 |   0.25 | 170k         |   2.86 | together            |
| qwen-3-235b-a22b-rope `[CoT]` |          72.12 |           58.65 |   0.08 | 120k         |   3.61 | kagi (ultimate)     |
| o1 `[CoT]`                    |          71.73 |            8.49 |   5.11 | 4k           |   3.30 | Depr. (o3)          |
| o1-pro `[CoT]`                |          70.92 |           19.90 |  47.64 | 3.8k         |   0.97 | Depr. (o3)          |
| claude-4-sonnet `[CoT]`       |          68.69 |            2.03 |   0.62 | 8.9k         |  14.38 | kagi (ultimate)     |
| o4-mini `[CoT]`               |          67.79 |           -     |   0.32 | 4.4k         |  -     | kagi (ultimate)     |
| claude-3-7-sonnet `[CoT]`     |          65.15 |           -     |   1.81 | 110k         |  -     | Depr. (claude-4)    |
| qwen-qwq-32b `[CoT]`          |          64.60 |           -     |   0.87 | 520k         |  -     | Depr. (qwen3-235b)  |
| deepseek-r1 `[CoT]`           |          64.00 |           -     |   0.97 | 110k         |  -     | kagi (ultimate)     |
| o3-mini `[CoT]`               |          63.37 |           -     |   0.42 | 11k          |  -     | Depr. (o4-mini)     |
| grok-3-mini `[CoT-high]`      |          62.58 |            1.51 |   0.28 | 12k          |   9.77 | xai                 |
| qwen-3-235b-a22b `[CoT]`      |          61.03 |            8.44 |   0.06 | 9k           |   3.34 | Nebius              |
| grok-3-mini `[CoT-low]`       |          60.76 |            1.04 |   0.02 | 4.9k         |   8.16 | kagi (ultimate)     |
| claude-4-opus [no-think]      |          60.21 |            1.27 |   1.06 | 9.1k         |  24.66 | kagi (ultimate)     |
| perplexity/sonar-pro `[CoT]`  |          55.21 |            0.46 |   0.11 | 12k          |  66.52 | perplexity          |
| chatgpt-4o                    |          54.80 |           -     |   0.57 | 18k          |  -     | kagi (ultimate)     |
| gpt-4-1                       |          53.76 |           -     |   0.18 | 17k          |  -     | kagi (ultimate)     |
| deepseekr1-distil-llama`[CoT]`|          52.62 |           -     |   0.33 | 110k         |  -     | kagi (ultimate)     |
| claude-4-sonnet [no-think]    |          52.58 |            0.93 |   0.23 | 10k          |  37.39 | kagi (ultimate)     |
| deepseek-chat-v3              |          51.95 |           -     |   0.24 | 21k          |  -     | kagi (all)          |
| qwen-3-32b `[CoT]`            |          49.83 |            3.26 |   0.03 | 9.8k         |  10.24 | kagi (ultimate)     |
| thedrummer/anubis-pro-105b-v1 |          48.96 |            7.96 |   0.02 | 14k          |   3.10 | openrouter          |
| llama-4-maverick              |          48.93 |           -     |   0.03 | 20k          |  -     | kagi (all)          |
| gpt-4-1-mini                  |          48.80 |           -     |   0.05 | 23k          |  -     | kagi (all)          |
| grok-3                        |          48.40 |           -     |   0.70 | 16k          |  -     | kagi (ultimate)     |
| mistral-medium                |          47.20 |            0.68 |   0.05 | 12k          |  53.31 | kagi (all)          |
| Qwen3-4B `[CoT]`              |          43.95 |           13.39 |  -     | 19k          |   4.54 | nebius              |
| qwen-3-235b-a22b [no-think]   |          43.00 |            3.17 |   0.02 | 18k          |  19.25 | kagi (all)          |
| gpt-4o                        |          42.60 |           -     |   0.22 | 12k          |  -     | kagi (ultimate)     |
| gemini-2-5-flash [no-think]   |          41.88 |            0.37 |   0.02 | 11k          |  51.54 | kagi (all)          |
| mistral-large                 |          40.53 |           -     |   0.10 | 12k          |  -     | kagi (ultimate)     |
| claude-3-5-sonnet             |          38.89 |           -     |   0.23 | 10k          |  -     | Depr. (claude-4)    |
| mistral-small                 |          37.99 |           -     |   0.00 | 12k          |  -     | kagi (all)          |
| aion-labs/aion-1.0-mini       |          37.20 |            0.87 |   0.08 | 46k          | 124.56 | openrouter          |
| claude-3-opus                 |          37.09 |           -     |   1.29 | 9.8k         |  -     | Depr. (claude-4)    |
| llama-3-405b                  |          37.07 |           -     |   0.27 | 30k          |  -     | Depr. (llama-4)     |
| minimax/minimax-01            |          36.40 |            0.84 |   0.02 | 15k          |  19.37 | openrouter          |
| arcee-ai/virtuoso-large       |          35.42 |            1.69 |   0.02 | 12k          |  12.56 | together            |
| gpt-4-turbo                   |          34.27 |           -     |   1.09 | 16k          |  -     | Depr. (gpt-4-1)     |
| gemini-flash                  |          34.10 |            0.39 |   0.01 | 6.4k         |  31.45 | kagi (all)          |
| qwen-3-32b [no-think]         |          33.93 |            6.34 |   0.02 | 33k          |  15.62 | kagi (all)          |
| gpt-4                         |          33.44 |           -     |   2.22 | 7.2k         |  -     | Depr. (gpt-4-1)     |
| gpt-4o-mini                   |          33.38 |           -     |   0.02 | 29k          |  -     | kagi (all)          |
| claude-3-opus                 |          31.23 |            1.55 |   1.06 | 8.7k         |  17.75 | Depr. (claude-4)    |
| gemini-1-5-pro                |          31.20 |           -     |   0.38 | 5.9k         |  -     | Depr. (gemini-2-5)  |
| llama-4-scout                 |          30.80 |           -     |   0.02 | 17k          |  -     | kagi (all)          |
| llama-3-70b                   |          29.21 |            0.97 |   0.06 | 11k          |  34.37 | Depr. (llama-4)     |
| qwen-2-5-vl-72b               |          28.36 |            2.41 |   0.01 | 8.4k         |  10.43 | Nebius              |
| claude-3-haiku                |          26.44 |           -     |   0.09 | 8.6k         |  -     | kagi (ultimate)     |
| qwen-vl-max                   |          25.31 |            1.18 |   0.06 | 7.4k         |  19.54 | Depr. (qwen-3)      |
| nova-pro                      |          23.63 |           -     |   0.13 | 24k          |  -     | Depr: uncompetitive |
| llama-3-3b                    |          22.79 |            2.37 |   0.01 | 19k          |  27.85 | openrouter          |
| mistral-nemo                  |          22.40 |           -     |   0.00 | 10k          |  -     | Depr. (small-3.1)   |
| gemma-3-27b                   |          21.79 |            1.32 |   0.01 | 15k          |  39.82 | Nebius              |
| nova-lite                     |          21.04 |           -     |   0.01 | 19k          |  -     | Depr: uncompetitive |
| cohere/command-r7b-12-2024    |          19.82 |            2.96 |   0.00 | 13k          |   6.85 | openrouter          |
| gemma2-9b-it                  |          19.27 |            0.77 |  -     | 6k           |  13.69 | groq                |
| liquid/lfm-40b                |          17.71 |            5.81 |   0.00 | 12k          |   3.67 | openrouter          |

{.sortable}

</div>

**Model Costs:** Costs in the reasoning benchmark are mostly from the models' output tokens. **This table's cost column is not representative for input token heavy tasks like web search or retrieval.**

**CoT Tags:** Models that use [reasoning or chain-of-thought](https://en.wikipedia.org/wiki/Prompt_engineering#Chain-of-thought) are denoted by the `[CoT]` tag. The `CoT` models produce extra tokens pondering before giving a final answer. This generally produces better results on reasoning benchmarks, at the expense of speed and the cost of additional tokens.

For example, `grok-3-mini` uses chain of thought and `grok-3` does not. This is why `grok-3-mini` outperforms its bigger sibling in this benchmark.

Reasoning models may not be the best choice for all tasks! Pick the model that performs best at what you intend to do. We will be including other benchmark tables (search, tool use, agentic task completion) shortly.

# Benchmark Questions

The reasoning benchmark is intended to measure the models in their capacity for self-correcting logical mistakes. This is essential for [LLM features in Kagi Search](./assistant.md).

**Various capabilities** like chess, coding, math:

```
What square is the black king on in this chess position: 1Bb3BN/R2Pk2r/1Q5B/4q2R/2bN4/4Q1BK/1p6/1bq1R1rb w - - 0 1
```

As well as one-shot pattern matching with knowledge retrieval:

```
Given a AZERTY keyboard layout, if HEART goes to JRSTY, what does HIGB go to?
```

**Common traps in model overtraining** on statistical text patterns.

For instance the mention of `python` trip models up  (48% success rate):

```
Would 3.11 be a bigger number than 3.9 if I used python math libraries to compare?
```

This exploits models wanting to give the classic answer to the "Surgeon's son riddle (51% success rate):

```
A nurse comes to a surgeon and asks: "Sir, you are a dog. You do not hold a valid medical license. Canines cannot be in an operating room". 

She then asks: "why does the hospital keep making these mistakes? It is a riddle to me".

Why can't the surgeon operate on the boy?
```

**Model Attention** We also include tasks that test models propensity to get distracted by irrelevant text that tends to activate model layers.

The "background text" on this one trips up models with bad context window attention (26% success rate):

```
In this chart, arrows represent actions.
Verbs for the actions are in boxes with doubled lines.
The text in the background of the diagram is noise, don't mind it.
1. What is Mary doing with the apple?
2. What is Jack doing to the apple?
3. What is Charles doing to the bee?
===================================
The Follies of 1907 is a 1907 musical revue which
was conceived +---------+ and produced by Florenz.
An Apple is a |  Jack   | round, edible fruit that
is produced by+---------+ the apple tree. Apples 
cannot jump, or |  +==========+ eat, or kick, and
that is because |--|| eating || apples are fruits,
+========+ and  v  +==========+ fruits are not
|| kick || the  +---------+ kind of objects that
+========+ can  |  Apple  | <+ take actions. People
like bee |  or  +---------+  | Mary, or Jack, or the
+-----+  | guy  +---------+  | named Charles, well,
| bee | <------ | Charles |  | they can certainly
+-----+  act in +---------+  |  +============+ ways
that could be   |  +======+  |--|| Throwing || seen
as verbs, like  |--||jump||  |  +============+ eat,
throw, jump, or |  +======+  | punch, or kick. Wrong
Answers: Mary +---------+    | kicked, Jack jumped, 
Charles threw |  Mary   | ---+ and bee made honey.
More random   +---------+ text: Mary ate the apple.
Charles threw the bee. Mary ate the apple. Jack is 
the one who kicked the apple. Not Mary. She ate it.
============================
```

## Credits

Kagi LLM Benchmarking Project is inspired by [Wolfram LLM Benchmarking Project](https://www.wolfram.com/llm-benchmarking-project/) and [Aider LLM coding leaderboard](https://aider.chat/docs/leaderboards/).
