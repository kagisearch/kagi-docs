# Kagi LLM Benchmarking Project

Introducing the Kagi LLM Benchmarking Project, which evaluates major large language models (LLMs) on their reasoning, coding, and instruction following capabilities.

## LLM Benchmarks

The Kagi LLM Benchmarking Project uses an unpolluted benchmark to assess contemporary large language models (LLMs) through diverse, challenging tasks. Unlike standard benchmarks, our tests frequently change and are mostly novel, providing a rigorous evaluation of the models' capabilities, (hopefully) outside of what models saw in the training data to avoid benchmark overfitting. 

Last updated **April 17th, 2025**. We rebuild this table often. We change the benchmark tasks every update, so scores are not comparable over time.

Note that the costs in this table are heavy on output tokens, due to the nature of the benchmark tasks. These are not representative costs for use of these models as an agent, where the ratio of input to output tokens will be much different.

<div class="minimal-table-margins">

| model                         | CoT |   accuracy |   time |     cost |   tokens |   speed (t/s) |   accuracy/$ score |   accuracy/sec score |
|:------------------------------|:----|-----------:|-------:|---------:|---------:|--------------:|-------------------:|---------------------:|
| o3                            | Y   |      76.29 |    502 |  2.57191 |     6056 |            12 |                 29 |                   15 |
| claude-3-7-extended-thinking  | Y   |      71.34 |    847 |  2.20567 |    81931 |            96 |                 32 |                    8 |
| gemini-2-5-pro                | Y   |      68.72 |    381 |  0.257   |     9905 |            25 |                267 |                   18 |
| qwen-qwq-32b                  | Y   |      65.94 |    763 |  0.11994 |   340400 |           446 |                553 |                    8 |
| o1                            | Y   |      65.44 |    502 |  6.55213 |     3678 |             7 |                  9 |                   13 |
| o3-mini                       | Y   |      65.16 |    502 |  0.52675 |    10333 |            20 |                123 |                   12 |
| deepseek-r1                   | Y   |      64.06 |    301 |  1.16229 |   101071 |           335 |                 55 |                   21 |
| o4-mini                       | Y   |      62.27 |    502 |  0.41746 |     4253 |             8 |                149 |                   12 |
| grok-3-mini (reasoning: low)  | Y   |      59.17 |    784 |  0.07626 |     5822 |             7 |                775 |                    7 |
| deepseek-r1-distill-llama-70b | Y   |      54.41 |    381 |  0.40643 |    91634 |           240 |                133 |                   14 |
| gpt-4-1                       | N   |      54.17 |   1318 |  0.2275  |    15526 |            11 |                238 |                    4 |
| chatgpt-4o                    | N   |      53.09 |    847 |  0.72127 |    16250 |            19 |                 73 |                    6 |
| deepseek                      | N   |      50.34 |    301 |  0.32012 |    21391 |            71 |                157 |                   16 |
| grok-3                        | N   |      50.34 |    784 |  0.92201 |    16723 |            21 |                 54 |                    6 |
| llama-4-maverick              | N   |      46.09 |    542 |  0.04311 |    21573 |            39 |               1069 |                    8 |
| o1-pro                        | Y   |      44.38 |    502 | 59.5752  |     2628 |             5 |                  0 |                    8 |
| gpt-4-1-mini                  | N   |      44.06 |   1318 |  0.05571 |    21309 |            16 |                790 |                    3 |
| claude-3-7-sonnet             | Y   |      42.94 |    301 |  0.30431 |    10852 |            36 |                141 |                   14 |
| claude-3-opus                 | N   |      41.57 |    847 |  1.94389 |    11545 |            13 |                 21 |                    4 |
| claude-3-sonnet-v2            | N   |      41.22 |    301 |  0.26061 |     9759 |            32 |                158 |                   13 |
| mistral-large                 | N   |      39.42 |    100 |  0.12415 |    12682 |           126 |                317 |                   39 |
| claude-3-sonnet-v1            | N   |      37.12 |    301 |  0.33792 |    13942 |            46 |                109 |                   12 |
| mistral-small                 | N   |      36.47 |    100 |  0.00382 |    12585 |           125 |               9547 |                   36 |
| llama-3-405b                  | N   |      35.85 |    542 |  0.33991 |    23255 |            42 |                105 |                    6 |
| llama-3-70b                   | N   |      34.78 |    542 |  0.10628 |    19295 |            35 |                327 |                    6 |
| gemini-flash                  | N   |      34.4  |    381 |  0.0128  |     7337 |            19 |               2687 |                    9 |
| llama-4-scout                 | N   |      33.43 |    542 |  0.02634 |    17873 |            32 |               1269 |                    6 |
| gpt-4-turbo                   | N   |      32.51 |   1318 |  1.37861 |    13371 |            10 |                 23 |                    2 |
| gpt-4o-mini                   | N   |      30.98 |    784 |  0.02758 |    22813 |            29 |               1123 |                    3 |
| claude-3-haiku                | N   |      29.63 |    847 |  0.12328 |    10100 |            11 |                240 |                    3 |
| nova-pro                      | N   |      29.12 |    100 |  0.15737 |    15317 |           153 |                185 |                   28 |
| gemini-pro-1-5                | N   |      28.99 |    381 |  0.50243 |     6591 |            17 |                 57 |                    7 |
| gpt-4-1-nano                  | N   |      27.83 |   1318 |  0.01078 |    19488 |            14 |               2581 |                    2 |
| nova-lite                     | N   |      26.09 |    100 |  0.01007 |    16421 |           164 |               2590 |                   25 |
| llama-3-3b                    | N   |      17.58 |    542 |  0.01212 |    24539 |            45 |               1450 |                    3 |
| mistral-nemo                  | N   |      14.37 |    100 |  0.00128 |     8719 |            87 |              11226 |                   14 |

{.sortable}

</div>

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
