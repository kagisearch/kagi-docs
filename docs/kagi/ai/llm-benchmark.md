# Kagi LLM Benchmarking Project

Introducing the Kagi LLM Benchmarking Project, which evaluates major large language models (LLMs) on their reasoning, coding, and instruction-following capabilities.

## Kagi Offline Benchmark

The Kagi "offline" Benchmark is an **unpolluted benchmark** to assess large language models (LLMs) on their strength without the use of tools (web search, code use, etc.). This benchmark generally **favors models that use chain of thought** heavily.

Unlike standard benchmarks, the tasks in this benchmark are unpublished, not found in training data, or "gamed" in fine-tuning. The task set changes over time (mostly getting more difficult) to better represent the current state of the art.

Last update: **August 11th, 2025**
Tasks: **110**
Input Tokens (all tasks): **14909**

**NOTE:** Since the July update, we have made major changes to the task set. We test much more aggressively on non-english languages, robustness to polluted tokens, noisy context and instruction following. We also replaced our hallucination benchmarks with new tasks.

Please see notes below the table if you see results you find surprising, or get in contact with us on [the user discord](https://discord.gg/nDh2FFGx)

<div class="minimal-table-margins">

| model                               |   %accuracy |   Cost($) |   time/task |   tokens |   TPS | provider   |
|-------------------------------------|-------------|-----------|-------------|----------|-------|------------|
| claude-4-opus-thinking              |        74.3 |      22.4 |        13.3 |    17058 |  11.0 | kagi (ult) |
| grok-4                              |        73.6 |       1.0 |        65.1 |     3660 |   0.5 | kagi (ult) |
| claude-4-sonnet-thinking            |        73.0 |       5.4 |        14.1 |    17872 |  10.0 | kagi (ult) |
| gpt-5                               |        72.7 |       7.1 |        32.8 |     6282 |   1.6 | kagi (ult) |
| o3-pro                              |        72.1 |      34.2 |        87.8 |    12054 |   1.1 | kagi (ult) |
| gemini-2-5-pro                      |        70.3 |       1.7 |        20.9 |    13581 |   5.4 | kagi (ult) |
| gpt-5-mini                          |        70.3 |       4.9 |        26.7 |    10113 |   3.3 | kagi       |
| deepseek-r1                         |        69.4 |       9.9 |        33.6 |    40707 |   9.8 | kagi (ult) |
| qwen-3-235b-a22b-thinking           |        69.4 |       0.1 |        27.6 |    52601 |  15.8 | kagi       |
| o3                                  |        67.6 |       4.8 |        30.9 |    12127 |   3.3 | kagi (ult) |
| o4-mini                             |        67.6 |       3.1 |        16.0 |    11224 |   6.1 | kagi       |
| arcee-ai/maestro-reasoning          |        64.9 |       2.7 |        16.7 |   200565 | 103.4 | openrouter |
| gpt-5-nano                          |        62.2 |       0.4 |        20.5 |     9587 |   3.9 | kagi       |
| grok-3                              |        61.3 |       2.6 |         6.0 |    28865 |  42.4 | kagi (ult) |
| grok-3-mini                         |        61.3 |       0.3 |         7.6 |     8661 |   9.5 | kagi       |
| claude-4-opus                       |        59.6 |       8.4 |         5.7 |    19505 |  29.3 | kagi (ult) |
| gpt-oss-120b                        |        58.6 |       0.4 |         2.3 |    14764 |  54.8 | kagi       |
| gemini-2-5-flash-thinking           |        56.8 |       0.5 |        11.4 |    21799 |  16.7 | kagi       |
| llama-4-maverick                    |        55.9 |       0.2 |         0.6 |    33516 | 456.3 | kagi       |
| claude-4-sonnet                     |        55.9 |       1.8 |         5.6 |    20574 |  31.1 | kagi (ult) |
| qwen-3-235b-a22b                    |        55.0 |       0.4 |        11.3 |   119875 |  85.3 | kagi       |
| chatgpt-4o                          |        54.1 |       2.6 |         2.6 |    42545 | 163.1 | deprecated |
| gpt-oss-20b                         |        53.2 |       0.5 |         3.3 |    38619 |  96.0 | kagi       |
| glm-4-5                             |        52.3 |       5.2 |        62.3 |    41434 |   5.4 | kagi (ult) |
| gpt-4-1                             |        52.3 |       2.1 |         4.4 |    61935 | 116.2 | deprecated |
| deepseek chat v3                    |        52.3 |       0.4 |         3.9 |    36165 |  73.1 | kagi       |
| deepseek-r1-distill-llama-70b       |        52.3 |       1.0 |         4.7 |    10321 |  17.8 | deprecated |
| qwen-3-coder                        |        49.5 |       0.8 |        13.8 |   116600 |  67.0 | kagi       |
| gpt-4-1-mini                        |        48.6 |       0.4 |         6.1 |    63524 |  85.9 | deprecated |
| mistral-medium                      |        45.9 |       0.3 |         4.7 |    24602 |  42.6 | kagi       |
| llama-3-405b                        |        45.0 |       1.1 |         3.0 |    26712 |  77.7 | deprecated |
| baidu/ernie-4.5-300b-a47b           |        45.0 |       0.2 |         7.9 |    35671 |  36.2 | openrouter |
| kimi-k2 (see note below)            |        45.0 |       1.1 |         3.3 |    84371 | 201.1 | kagi       |
| gemini-2-5-flash                    |        44.1 |       0.4 |         2.0 |    34698 | 152.3 | kagi       |
| thudm/glm-4-32b                     |        42.3 |       0.1 |        10.9 |    28236 |  20.5 | openrouter |
| gemini-2-5-flash-lite               |        40.5 |       0.1 |         2.2 |    43989 | 171.8 | kagi       |
| thedrummer/anubis-70b-v1.1          |        39.6 |       0.2 |         7.7 |    17933 |  19.3 | openrouter |
| microsoft/phi-4-reasoning-plus      |        37.8 |       0.2 |        49.8 |   441209 |  75.6 | openrouter |
| mistral-small                       |        37.8 |       0.1 |         2.2 |    31453 | 120.0 | kagi       |
| gemini-flash                        |        37.8 |       0.1 |         2.1 |    21882 |  92.4 | deprecated |
| llama-4-scout                       |        36.9 |       0.1 |         0.8 |    25965 | 272.4 | deprecated |
| llama-3-70b                         |        35.1 |       0.3 |         1.7 |    21423 | 104.1 | deprecated |
| minimax/minimax-01                  |        35.1 |       0.2 |         7.2 |    23132 |  27.4 | openrouter |
| gemma-3-27b                         |        35.1 |       0.1 |         4.3 |    27732 |  58.4 | deprecated |
| claude-3-haiku                      |        34.2 |       0.5 |         3.1 |    14891 |  41.1 | deprecated |
| gpt-4-1-nano                        |        33.3 |       0.1 |         3.7 |    62437 | 135.1 | deprecated |
| arcee-ai/virtuoso-large             |        32.4 |       0.3 |         4.6 |    23175 |  43.2 | openrouter |
| qwen-3-32b-thinking                 |        31.5 |       0.2 |         3.1 |    47478 | 121.6 | kagi       |
| google/gemma-3n-e4b-it              |        31.5 |       0.0 |        18.2 |    27557 |  12.8 | openrouter |
| qwen-3-32b                          |        28.8 |       0.3 |         5.7 |   105057 | 146.7 | kagi       |
| cohere/command-a                    |        28.8 |       1.9 |        11.7 |    39471 |  27.5 | openrouter |
| thedrummer/valkyrie-49b-v1          |        28.8 |       0.1 |         4.1 |    19874 |  39.4 | openrouter |
| gpt-4o-mini                         |        28.8 |       0.1 |         2.5 |    36708 | 119.8 | deprecated |
| ai21/jamba-large-1.7                |        26.1 |       1.3 |         4.4 |    19077 |  35.6 | openrouter |
| google/gemma-3-4b-it                |        25.2 |       0.0 |         3.2 |    25891 |  71.6 | openrouter |
| inception/mercury                   |        21.6 |       0.2 |         5.8 |    22982 |  35.2 | openrouter |
| inception/mercury-coder             |        20.7 |       0.1 |         5.8 |    17323 |  26.6 | openrouter |
| bytedance/ui-tars-1.5-7b            |        20.7 |       0.0 |         2.2 |    27328 | 104.5 | openrouter |
| arcee-ai/spotlight                  |        18.9 |       0.0 |         4.1 |    25414 |  52.4 | openrouter |
| microsoft/phi-4-multimodal-instruct |        17.1 |       0.0 |         2.2 |    29028 | 105.1 | openrouter |
| magistral-medium                    |        16.2 |      22.4 |       105.5 |     1328 |   0.1 | Mistral    |
| ai21/jamba-mini-1.7                 |        11.7 |       0.1 |         2.1 |    14598 |  58.2 | openrouter |
| arcee-ai/AFM-4.5B                   |        10.8 |       0.0 |         2.2 |    28208 | 112.4 | together   |
| magistral-small                     |         6.3 |       7.4 |        68.3 |     1039 |   0.1 | Mistral    |
{.sortable}

</div>

**Notes on chain of thought:** Models that use chain of thought do drastically better in this benchmark. Some models, like **kimi-k2** perform worse with our instruction following prompts (ex: "answer in only one word") seem to shut down reasoning. We also test more comprehensively on non-english/chinese languages, which seems to punish some models (Qwen3-32B).

**Model Costs:** Costs in the reasoning benchmark are mostly from the models' output tokens. **This table's cost column is not representative for input token heavy tasks like web search or retrieval.**

For example, `grok-3-mini` uses chain of thought and `grok-3` does not. This is why `grok-3-mini` outperforms its bigger sibling in this benchmark.

Reasoning models may not be the best choice for all tasks! Pick the model that performs best at what you intend to do. We will be including other benchmark tables (search, tool use, agentic task completion) shortly.

# Benchmark Questions

The reasoning benchmark is intended to measure the models in their capacity for self-correcting logical mistakes. This is essential for [LLM features in Kagi Search](./assistant.md). Many of the tasks are translated to other languages to assess model robustness across languages.

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
