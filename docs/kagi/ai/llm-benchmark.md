# Kagi LLM Benchmarking Project

Introducing the Kagi LLM Benchmarking Project, which evaluates major large language models (LLMs) on their reasoning, coding, and instruction following capabilities.

## LLM Benchmarks

The Kagi LLM Benchmarking Project uses an unpolluted benchmark to assess contemporary large language models (LLMs) through diverse, challenging tasks. Unlike standard benchmarks, our tests frequently change and are mostly novel, providing a rigorous evaluation of the models' capabilities, (hopefully) outside of what models saw in the training data to avoid benchmark overfitting. 

Last updated **April 17th, 2025**. We rebuild this table often. We change the benchmark tasks every update, so scores are not comparable over time.

Note that the costs in this table are heavy on output tokens, due to the nature of the benchmark tasks. These are not representative costs for use of these models as an agent, where the ratio of input to output tokens will be much different.

```json:table
{
  "filter": true,
  "fields": [
    { "key": "model", "label": "model", "type": "string" },
    { "key": "cot", "label": "CoT", "type": "yesno" }, 
    { "key": "accuracy", "label": "accuracy", "type": "number" },
    { "key": "time", "label": "time", "type": "number" },
    { "key": "cost", "label": "cost", "type": "number" },
    { "key": "tokens", "label": "tokens", "type": "number" },
    { "key": "speedTokensPerSecond", "label": "speed (t/s)", "type": "number" },
    { "key": "accuracyPerDollar", "label": "accuracy/$ score", "type": "number" },
    { "key": "accuracyPerSecond", "label": "accuracy/sec score", "type": "number" }
  ],
  "items": [
    { "model": "o3", "cot": "Y", "accuracy": 76.29, "time": 502, "cost": 2.57191, "tokens": 6056, "speedTokensPerSecond": 12, "accuracyPerDollar": 29, "accuracyPerSecond": 15 },
    { "model": "claude-3-7-extended-thinking", "cot": "Y", "accuracy": 71.34, "time": 847, "cost": 2.20567, "tokens": 81931, "speedTokensPerSecond": 96, "accuracyPerDollar": 32, "accuracyPerSecond": 8 },
    { "model": "gemini-2-5-pro", "cot": "Y", "accuracy": 68.72, "time": 381, "cost": 0.257, "tokens": 9905, "speedTokensPerSecond": 25, "accuracyPerDollar": 267, "accuracyPerSecond": 18 },
    { "model": "qwen-qwq-32b", "cot": "Y", "accuracy": 65.94, "time": 763, "cost": 0.11994, "tokens": 340400, "speedTokensPerSecond": 446, "accuracyPerDollar": 553, "accuracyPerSecond": 8 },
    { "model": "o1", "cot": "Y", "accuracy": 65.44, "time": 502, "cost": 6.55213, "tokens": 3678, "speedTokensPerSecond": 7, "accuracyPerDollar": 9, "accuracyPerSecond": 13 },
    { "model": "o3-mini", "cot": "Y", "accuracy": 65.16, "time": 502, "cost": 0.52675, "tokens": 10333, "speedTokensPerSecond": 20, "accuracyPerDollar": 123, "accuracyPerSecond": 12 },
    { "model": "deepseek-r1", "cot": "Y", "accuracy": 64.06, "time": 301, "cost": 1.16229, "tokens": 101071, "speedTokensPerSecond": 335, "accuracyPerDollar": 55, "accuracyPerSecond": 21 },
    { "model": "o4-mini", "cot": "Y", "accuracy": 62.27, "time": 502, "cost": 0.41746, "tokens": 4253, "speedTokensPerSecond": 8, "accuracyPerDollar": 149, "accuracyPerSecond": 12 },
    { "model": "grok-3-mini", "cot": "N", "accuracy": 59.17, "time": 784, "cost": 0.07626, "tokens": 5822, "speedTokensPerSecond": 7, "accuracyPerDollar": 775, "accuracyPerSecond": 7 },
    { "model": "deepseek-r1-distill-llama-70b", "cot": "Y", "accuracy": 54.41, "time": 381, "cost": 0.40643, "tokens": 91634, "speedTokensPerSecond": 240, "accuracyPerDollar": 133, "accuracyPerSecond": 14 },
    { "model": "gpt-4-1", "cot": "N", "accuracy": 54.17, "time": 1318, "cost": 0.2275, "tokens": 15526, "speedTokensPerSecond": 11, "accuracyPerDollar": 238, "accuracyPerSecond": 4 },
    { "model": "chatgpt-4o", "cot": "N", "accuracy": 53.09, "time": 847, "cost": 0.72127, "tokens": 16250, "speedTokensPerSecond": 19, "accuracyPerDollar": 73, "accuracyPerSecond": 6 },
    { "model": "deepseek", "cot": "N", "accuracy": 50.34, "time": 301, "cost": 0.32012, "tokens": 21391, "speedTokensPerSecond": 71, "accuracyPerDollar": 157, "accuracyPerSecond": 16 },
    { "model": "grok-3", "cot": "N", "accuracy": 50.34, "time": 784, "cost": 0.92201, "tokens": 16723, "speedTokensPerSecond": 21, "accuracyPerDollar": 54, "accuracyPerSecond": 6 },
    { "model": "llama-4-maverick", "cot": "N", "accuracy": 46.09, "time": 542, "cost": 0.04311, "tokens": 21573, "speedTokensPerSecond": 39, "accuracyPerDollar": 1069, "accuracyPerSecond": 8 },
    { "model": "o1-pro", "cot": "Y", "accuracy": 44.38, "time": 502, "cost": 59.5752, "tokens": 2628, "speedTokensPerSecond": 5, "accuracyPerDollar": 0, "accuracyPerSecond": 8 },
    { "model": "gpt-4-1-mini", "cot": "N", "accuracy": 44.06, "time": 1318, "cost": 0.05571, "tokens": 21309, "speedTokensPerSecond": 16, "accuracyPerDollar": 790, "accuracyPerSecond": 3 },
    { "model": "claude-3-7-sonnet", "cot": "Y", "accuracy": 42.94, "time": 301, "cost": 0.30431, "tokens": 10852, "speedTokensPerSecond": 36, "accuracyPerDollar": 141, "accuracyPerSecond": 14 },
    { "model": "claude-3-opus", "cot": "N", "accuracy": 41.57, "time": 847, "cost": 1.94389, "tokens": 11545, "speedTokensPerSecond": 13, "accuracyPerDollar": 21, "accuracyPerSecond": 4 },
    { "model": "claude-3-sonnet-v2", "cot": "N", "accuracy": 41.22, "time": 301, "cost": 0.26061, "tokens": 9759, "speedTokensPerSecond": 32, "accuracyPerDollar": 158, "accuracyPerSecond": 13 },
    { "model": "mistral-large", "cot": "N", "accuracy": 39.42, "time": 100, "cost": 0.12415, "tokens": 12682, "speedTokensPerSecond": 126, "accuracyPerDollar": 317, "accuracyPerSecond": 39 },
    { "model": "claude-3-sonnet-v1", "cot": "N", "accuracy": 37.12, "time": 301, "cost": 0.33792, "tokens": 13942, "speedTokensPerSecond": 46, "accuracyPerDollar": 109, "accuracyPerSecond": 12 },
    { "model": "mistral-small", "cot": "N", "accuracy": 36.47, "time": 100, "cost": 0.00382, "tokens": 12585, "speedTokensPerSecond": 125, "accuracyPerDollar": 9547, "accuracyPerSecond": 36 },
    { "model": "llama-3-405b", "cot": "N", "accuracy": 35.85, "time": 542, "cost": 0.33991, "tokens": 23255, "speedTokensPerSecond": 42, "accuracyPerDollar": 105, "accuracyPerSecond": 6 },
    { "model": "llama-3-70b", "cot": "N", "accuracy": 34.78, "time": 542, "cost": 0.10628, "tokens": 19295, "speedTokensPerSecond": 35, "accuracyPerDollar": 327, "accuracyPerSecond": 6 },
    { "model": "gemini-flash", "cot": "N", "accuracy": 34.4, "time": 381, "cost": 0.0128, "tokens": 7337, "speedTokensPerSecond": 19, "accuracyPerDollar": 2687, "accuracyPerSecond": 9 },
    { "model": "llama-4-scout", "cot": "N", "accuracy": 33.43, "time": 542, "cost": 0.02634, "tokens": 17873, "speedTokensPerSecond": 32, "accuracyPerDollar": 1269, "accuracyPerSecond": 6 },
    { "model": "gpt-4-turbo", "cot": "N", "accuracy": 32.51, "time": 1318, "cost": 1.37861, "tokens": 13371, "speedTokensPerSecond": 10, "accuracyPerDollar": 23, "accuracyPerSecond": 2 },
    { "model": "gpt-4o-mini", "cot": "N", "accuracy": 30.98, "time": 784, "cost": 0.02758, "tokens": 22813, "speedTokensPerSecond": 29, "accuracyPerDollar": 1123, "accuracyPerSecond": 3 },
    { "model": "claude-3-haiku", "cot": "N", "accuracy": 29.63, "time": 847, "cost": 0.12328, "tokens": 10100, "speedTokensPerSecond": 11, "accuracyPerDollar": 240, "accuracyPerSecond": 3 },
    { "model": "nova-pro", "cot": "N", "accuracy": 29.12, "time": 100, "cost": 0.15737, "tokens": 15317, "speedTokensPerSecond": 153, "accuracyPerDollar": 185, "accuracyPerSecond": 28 },
    { "model": "gemini-pro-1-5", "cot": "N", "accuracy": 28.99, "time": 381, "cost": 0.50243, "tokens": 6591, "speedTokensPerSecond": 17, "accuracyPerDollar": 57, "accuracyPerSecond": 7 },
    { "model": "gpt-4-1-nano", "cot": "N", "accuracy": 27.83, "time": 1318, "cost": 0.01078, "tokens": 19488, "speedTokensPerSecond": 14, "accuracyPerDollar": 2581, "accuracyPerSecond": 2 },
    { "model": "nova-lite", "cot": "N", "accuracy": 26.09, "time": 100, "cost": 0.01007, "tokens": 16421, "speedTokensPerSecond": 164, "accuracyPerDollar": 2590, "accuracyPerSecond": 25 },
    { "model": "llama-3-3b", "cot": "N", "accuracy": 17.58, "time": 542, "cost": 0.01212, "tokens": 24539, "speedTokensPerSecond": 45, "accuracyPerDollar": 1450, "accuracyPerSecond": 3 },
    { "model": "mistral-nemo", "cot": "N", "accuracy": 14.37, "time": 100, "cost": 0.00128, "tokens": 8719, "speedTokensPerSecond": 87, "accuracyPerDollar": 11226, "accuracyPerSecond": 14 }
  ]
}```

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
