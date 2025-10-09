# Kagi LLM Benchmarking Project

Introducing the Kagi LLM Benchmarking Project, which evaluates major large language models (LLMs) on their reasoning, coding, and instruction-following capabilities.

## Kagi Offline Benchmark

The Kagi "offline" Benchmark is an **unpolluted benchmark** to assess large language models (LLMs) on their strength without the use of tools (web search, code use, etc.). This benchmark generally **favors models that use chain of thought** heavily.

Unlike standard benchmarks, the tasks in this benchmark are unpublished, not found in training data, or "gamed" in fine-tuning. The task set changes over time (mostly getting more difficult) to better represent the current state of the art.

Last update: **October 8th, 2025**
Tasks: **110**
Input Tokens (all tasks): **14909**

**NOTE:** Since the July update, we have made major changes to the task set. We test much more aggressively on non-english languages, robustness to polluted tokens, noisy context and instruction following. We also replaced our hallucination benchmarks with new tasks.

Please see notes below the table if you see results you find surprising, or get in contact with us on [the user discord](https://kagi.com/discord)


<div class="minimal-table-margins">

| model                               |   %accuracy |   Cost($) |   time/task |   tokens |   TPS | provider   |
|-------------------------------------|-------------|-----------|-------------|----------|-------|------------|
| gpt-5-pro                           |        76.8 |      31.8 |       193.2 |   330943 |   5.2 | kagi (ult) |
| claude-4-opus-thinking              |        74.3 |      22.4 |        13.3 |    17058 |  11.0 | kagi (ult) |
| grok-4                              |        73.6 |       1.0 |        65.1 |     3660 |   0.5 | kagi (ult) |
| claude-4-sonnet-thinking            |        73.0 |       5.4 |        14.1 |    17872 |  10.0 | kagi (ult) |
| gpt-5                               |        72.7 |       7.1 |        32.8 |     6282 |   1.6 | kagi (ult) |
| qwen3-max                           |        72.5 |       1.9 |        15.7 |   148347 |  22.1 | openrouter |
| o3-pro                              |        72.1 |      34.2 |        87.8 |    12054 |   1.1 | kagi (ult) |
| gemini-2-5-pro                      |        70.3 |       1.7 |        20.9 |    13581 |   5.4 | kagi (ult) |
| gpt-5-mini                          |        70.3 |       4.9 |        26.7 |    10113 |   3.3 | kagi       |
| gpt-5-codex                         |        70.3 |       4.6 |        20.7 |    14993 |  94.7 | kagi       |
| deepseek-r1                         |        69.4 |       9.9 |        33.6 |    40707 |   9.8 | kagi (ult) |
| qwen-3-235b-a22b-thinking           |        69.4 |       0.1 |        27.6 |    52601 |  15.8 | kagi       |
| claude-4-5-sonnet-thinking          |        68.1 |       2.2 |        17.7 |   277846 |  44.4 | kagi (ult) |
| o3                                  |        67.6 |       4.8 |        30.9 |    12127 |   3.3 | kagi (ult) |
| o4-mini                             |        67.6 |       3.1 |        16.0 |    11224 |   6.1 | kagi       |
| qwen3-next-80b-a3b-thinking         |        66.7 |       1.0 |        58.2 |   442001 |  14.9 | openrouter |
| grok-4-fast-thinking                |        66.1 |       0.3 |         8.2 |   289270 | 311.1 | kagi       |
| arcee-ai/maestro-reasoning          |        64.9 |       2.7 |        16.7 |   200565 | 103.4 | openrouter |
| qwen-plus-2025-07-28                |        63.3 |       1.1 |         9.0 |   143402 |  37.0 | openrouter |
| stepfun-ai/step3                    |        62.3 |       1.6 |       174.2 |   417415 |   7.0 | openrouter |
| gpt-5-nano                          |        62.2 |       0.4 |        20.5 |     9587 |   3.9 | kagi       |
| grok-3                              |        61.3 |       2.6 |         6.0 |    28865 |  42.4 | kagi (ult) |
| grok-3-mini                         |        61.3 |       0.3 |         7.6 |     8661 |   9.5 | kagi       |
| cogito-v2-preview-llama-405b        |        61.1 |       2.1 |        35.4 |   201098 |  49.7 | together   |
| z-ai/glm-4.5v                       |        59.8 |       0.7 |        12.9 |   171618 |  34.0 | openrouter |
| claude-4-opus                       |        59.6 |       8.4 |         5.7 |    19505 |  29.3 | kagi (ult) |
| gpt-oss-120b                        |        58.6 |       0.4 |         2.3 |    14764 |  54.8 | kagi       |
| cogito-v2-preview-deepseek-671b     |        58.4 |       0.7 |        18.2 |   184381 |  88.5 | together   |
| claude-4-5-sonnet                   |        57.9 |       1.0 |         6.4 |   191834 |  84.9 | kagi       |
| glm-4-5                             |        57.9 |       1.0 |        39.0 |   292498 |  32.3 | kagi       |
| deepseek-v3.1-terminus              |        57.4 |       0.2 |         9.1 |   111727 |  29.9 | kagi       |
| gemini-2-5-flash-thinking           |        56.8 |       0.5 |        11.4 |    21799 |  16.7 | kagi       |
| qwen/qwen3-max                      |        55.9 |       1.1 |         7.2 |    39982 |  47.9 | openrouter |
| llama-4-maverick                    |        55.9 |       0.2 |         0.6 |    33516 | 456.3 | kagi       |
| claude-4-sonnet                     |        55.9 |       1.8 |         5.6 |    20574 |  31.1 | kagi (ult) |
| hermes-4-405b (thinking)            |        55.8 |       2.6 |        87.4 |    18490 |   1.8 | kagi       |
| qwen-3-235b-a22b (no thinking)      |        55.0 |       0.4 |        11.3 |   119875 |  85.3 | kagi       |
| Qwen3-32B-fast (thinking)           |        54.9 |       0.5 |         3.0 |   299527 |  86.4 | nebius     |
| Qwen3-30B-A3B-Thinking-2507         |        54.9 |       0.6 |         7.9 |   381277 |  41.7 | nebius     |
| qwen3-next-80b-a3b-instruct         |        54.4 |       0.1 |         4.2 |   161977 | 110.9 | openrouter |
| chatgpt-4o                          |        54.1 |       2.6 |         2.6 |    42545 | 163.1 | deprecated |
| z-ai/glm-4.5v                       |        53.5 |       0.4 |        11.0 |   187593 |  74.5 | openrouter |
| gpt-oss-20b                         |        53.2 |       0.5 |         3.3 |    38619 |  96.0 | kagi       |
| deepseek chat v3.1                  |        53.2 |       0.4 |         3.3 |   123525 | 327.9 | kagi (depr)|
| grok-code-fast-1                    |        52.5 |       1.0 |        10.1 |   323883 | 280.0 | kagi       |
| gpt-4-1                             |        52.3 |       2.1 |         4.4 |    61935 | 116.2 | deprecated |
| deepseek chat v3                    |        52.3 |       0.4 |         3.9 |    36165 |  73.1 | deprecated |
| deepseek-r1-distill-llama-70b       |        52.3 |       1.0 |         4.7 |    10321 |  17.8 | deprecated |
| deepseek/deepseek-v3.2-exp          |        52.2 |       0.2 |        17.7 |   114357 |  16.0 | openrouter |
| kimi-k2-0905 (see note below)       |        52.2 |       0.3 |        11.3 |    30772 |  23.1 | openrouter |
| cogito-v2-preview-llama-4-scout     |        52.2 |       0.3 |        12.0 |   215842 | 158.4 | together   |
| mistral-medium                      |        50.0 |       0.5 |         2.9 |   120090 |  67.8 | kagi       |
| qwen-3-coder                        |        49.5 |       0.8 |        13.8 |   116600 |  67.0 | kagi       |
| Qwen3-14B                           |        49.1 |       0.5 |        15.2 |   277558 |  78.8 | nebius     |
| Qwen3-32B (No Thinking)             |        48.7 |       0.5 |         9.9 |   292277 | 50.0  | nebius     |
| gpt-4-1-mini                        |        48.6 |       0.4 |         6.1 |    63524 |  85.9 | deprecated |
| nvidia/nemotron-nano-9b-v2          |        47.4 |       0.1 |        14.0 |   282402 |  58.1 | openrouter |
| llama-3-405b                        |        45.0 |       1.1 |         3.0 |    26712 |  77.7 | deprecated |
| baidu/ernie-4.5-300b-a47b           |        45.0 |       0.2 |         7.9 |    35671 |  36.2 | openrouter |
| kimi-k2-0711 (see note below)       |        45.0 |       1.1 |         3.3 |    84371 | 201.1 | kagi       |
| gemini-2-5-flash                    |        44.1 |       0.4 |         2.0 |    34698 | 152.3 | kagi       |
| meituan/longcat-flash-chat          |        43.9 |       0.1 |         5.2 |   125956 |  68.9 | openrouter |
| z-ai/glm-4.5-air                    |        43.0 |       0.2 |         3.5 |   117415 | 160.1 | openrouter |
| minimax/minimax-01                  |        42.5 |       0.1 |         3.1 |   107414 |  30.7 | openrouter |
| thudm/glm-4-32b                     |        42.3 |       0.1 |        10.9 |    28236 |  20.5 | openrouter |
| gemini-2-5-flash-lite               |        40.5 |       0.1 |         2.2 |    43989 | 171.8 | kagi       |
| mistral-small-3.2-24b-it            |        40.4 |       0.0 |         7.4 |   128081 |  68.0 | openrouter |
| google/gemma-3-27b-it-fast          |        40.4 |       0.1 |         2.9 |   112726 |  62.4 | nebius     |
| thedrummer/anubis-70b-v1.1          |        39.6 |       0.2 |         7.7 |    17933 |  19.3 | openrouter |
| microsoft/phi-4-reasoning-plus      |        37.8 |       0.2 |        49.8 |   441209 |  75.6 | openrouter |
| mistral-small                       |        37.8 |       0.1 |         2.2 |    31453 | 120.0 | Mistral    |
| gemini-flash 2.0                    |        37.8 |       0.1 |         2.1 |    21882 |  92.4 | deprecated |
| mistralai/devstral-medium           |        37.7 |       0.2 |         1.9 |   106959 | 210.0 | openrouter |
| mistralai/Devstral-Small-2505       |        37.7 |       0.1 |         4.1 |   146139 |  55.4 | nebius     |
| llama-4-scout                       |        36.9 |       0.1 |         0.8 |    25965 | 272.4 | deprecated |
| Qwen/Qwen2.5-VL-72B-Instruct        |        36.0 |       0.0 |         7.6 |   112318 |  42.5 | nebius     |
| grok-4-fast                         |        35.4 |       0.1 |         1.7 |   114104 | 576.8 | kagi       |
| llama-3-70b                         |        35.1 |       0.3 |         1.7 |    21423 | 104.1 | deprecated |
| minimax/minimax-01                  |        35.1 |       0.2 |         7.2 |    23132 |  27.4 | openrouter |
| gemma-3-27b                         |        35.1 |       0.1 |         4.3 |    27732 |  58.4 | deprecated |
| mistralai/devstral-small            |        34.2 |       0.0 |         5.3 |   120774 |  87.8 | openrouter |
| claude-3-haiku                      |        34.2 |       0.5 |         3.1 |    14891 |  41.1 | deprecated |
| gpt-4-1-nano                        |        33.3 |       0.1 |         3.7 |    62437 | 135.1 | deprecated |
| mistralai/codestral-2508            |        32.5 |       0.1 |         1.5 |   111730 | 270.9 | openrouter |
| arcee-ai/virtuoso-large             |        32.4 |       0.3 |         4.6 |    23175 |  43.2 | openrouter |
| google/gemma-3n-e4b-it              |        31.5 |       0.0 |        18.2 |    27557 |  12.8 | openrouter |
| hermes-4-405b (no thinking)         |        30.1 |       0.4 |         7.2 |    18826 |  22.7 | kagi       |
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
