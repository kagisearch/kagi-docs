# Kagi LLM Benchmarking Project

Introducing the Kagi LLM Benchmarking Project, which evaluates major large language models (LLMs) on their reasoning, coding, and instruction following capabilities.

## LLM Benchmarks

The Kagi LLM Benchmarking Project uses an unpolluted benchmark to assess contemporary large language models (LLMs) through diverse, challenging tasks. Unlike standard benchmarks, our tests frequently change and are mostly novel, providing a rigorous evaluation of the models' capabilities, (hopefully) outside of what models saw in the training data to avoid benchmark overfitting. 

Last updated **April 17th, 2025**. We rebuild this table often. We change the benchmark tasks every update, so scores are not comparable over time.

Note that the costs in this table are heavy on output tokens, due to the nature of the benchmark tasks. These are not representative costs for use of these models as an agent, where the ratio of input to output tokens will be much different.

| model                         | is_reasoning   | accuracy(%)|   time |   cost ($) |   tokens |   speed (t/s) |
|:------------------------------|:---------------|-----------:|-------:|-----------:|---------:|--------------:|
| o3                            | Y              |      80.76 |    502 |       2.57 |     6056 |            12 |
| gemini-2-5-pro                | Y              |      78.35 |    381 |       0.26 |     9905 |            25 |
| o1                            | Y              |      75.59 |    502 |       6.55 |     3678 |             7 |
| claude-3-7-extended-thinking  | Y              |      74.24 |    847 |       2.21 |    81931 |            96 |
| o4-mini                       | Y              |      73.81 |    502 |       0.42 |     4253 |             8 |
| o3-mini                       | Y              |      71.57 |    502 |       0.53 |    10333 |            20 |
| qwen-qwq-32b (groq)           | Y              |      71.23 |    763 |       0.14 |   340400 |           446 |
| deepseek-r1                   | Y              |      69.95 |    301 |       1.16 |   101071 |           335 |
| grok-3-mini                   | N              |      68.67 |    784 |       0.08 |     5822 |             7 |
| chatgpt-4o                    | N              |      60.92 |    847 |       0.72 |    16250 |            19 |
| deepseek-r1-distill-llama-70b | Y              |      60.91 |    381 |       0.09 |    91634 |           240 |
| gpt-4-1                       | N              |      60.72 |   1318 |       0.43 |    15526 |            11 |
| grok-3                        | N              |      58.55 |    784 |       0.22 |    16723 |            21 |
| deepseek-chat-v3 (fireworks)  | N              |      56.94 |    301 |       0.02 |    21391 |            71 |
| llama-4-maverick (groq)       | N              |      54.2  |    542 |       0.13 |    21573 |            39 |
| gpt-4-1-mini                  | N              |      52.66 |   1318 |       0.43 |    21309 |            16 |
| mistral-large                 | N              |      49.47 |    100 |       0.21 |    12682 |           126 |
| claude-3-opus                 | N              |      46.27 |    847 |       0.18 |    11545 |            13 |
| claude-3-7-sonnet             | Y              |      45.84 |    301 |       0.12 |    10852 |            36 |
| mistral-small                 | N              |      45.49 |    100 |       0.21 |    12585 |           125 |
| llama-3-405b                  | N              |      44.44 |    542 |       0.43 |    23255 |            42 |
| o1-pro                        | Y              |      44.38 |    502 |       0.15 |     2628 |             5 |
| gemini-flash                  | N              |      43.67 |    381 |       0.14 |     7337 |            19 |
| llama-3-70b                   | N              |      41.16 |    542 |       0.43 |    19295 |            35 |
| llama-4-scout (groq)          | N              |      41.16 |    542 |       0.03 |    17873 |            32 |
| gpt-4-turbo                   | N              |      40.24 |   1318 |       0.43 |    13371 |            10 |
| gpt-4o-mini                   | N              |      39.5  |    784 |       0.22 |    22813 |            29 |
| gemini-pro                    | N              |      36.52 |    381 |       0.14 |     6591 |            17 |
| nova-pro                      | N              |      35    |    100 |       0.21 |    15317 |           153 |
| claude-3-haiku                | N              |      33.82 |    847 |       0.18 |    10100 |            11 |
| gpt-4-1-nano                  | N              |      33.04 |   1318 |       0.43 |    19488 |            14 |
| nova-lite                     | N              |      31.54 |    100 |       0.21 |    16421 |           164 |
| mistral-nemo                  | N              |      20.12 |    100 |       0.21 |     8719 |            87 |
| llama-3-3b                    | N              |      19.42 |    542 |       0.43 |    24539 |            45 |

Reasoning models are optimized for multi-step reasoning and often produce better results on reasoning benchmarks, at the expense of latency and cost. They may not be suitable for all general purpose LLM tasks.

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
