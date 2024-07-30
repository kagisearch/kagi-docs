# Kagi LLM Benchmarking Project

Introducing the Kagi LLM Benchmarking Project, which evaluates major large language models (LLMs) on their reasoning, coding, and generalization capabilities.

## Using an unpolluted benchmark to measure the performance of contemporary


Our tests are based on diverse and challenging tasks. Unlike widely used specific LLM benchmarks, our tests frequently change and are mostly novel to LLMs, providing a rigorous assessment of their capabilities. This approach ensures that we effectively measure the true potential and adaptability of these models.

Last updated July 26 2024.

| Model                                    | Tokens | Total Cost ($) | Median Latency (s) | Speed (tokens/sec) | Accuracy |
|------------------------------------------|--------|----------------|--------------------|--------------------|----------|
| OpenAIProvider('gpt-4o')                 | 7482   | 0.14310        | 1.60               | 48.00              | 52.00%   |
| AnthropicProvider('claude-3-5-sonnet-20240620') | 6595   | 0.12018        | 2.54               | 48.90              | 46.00%   |
| MistralProvider('mistral-large-latest')  | 5097   | 0.06787        | 3.08               | 18.03              | 44.00%   |
| GroqProvider('llama-3.1-70b-versatile')  | 5190   | 0.00781        | 0.71               | 81.62              | 40.00%   |
| OpenAIProvider('gpt-4o-mini')            | 6029   | 0.00451        | 1.64               | 36.92              | 34.00%   |
| DeepSeekProvider('deepseek-chat')        | 7310   | 0.00304        | 4.81               | 17.20              | 32.00%   |
| AnthropicProvider('claude-3-haiku-20240307') | 5642   | 0.00881        | 1.33               | 55.46              | 28.00%   |
| GroqProvider('llama-3.1-8b-instant')     | 6628   | 0.00085        | 2.26               | 82.02              | 28.00%   |
| DeepSeekProvider('deepseek-coder')       | 8079   | 0.00327        | 4.13               | 16.72              | 28.00%   |
| OpenAIProvider('gpt-4')                  | 2477   | 0.33408        | 1.32               | 16.68              | 26.00%   |
| MistralProvider('open-mistral-nemo')     | 4135   | 0.00323        | 0.65               | 82.65              | 22.00%   |
| OpenAIProvider('gpt-3.5-turbo')          | 1569   | 0.01552        | 0.51               | 45.03              | 22.00%   |

## Benchmark details

The benchmark is meant to be hard so we can reasonably evaluate current capabilities of LLMs.

Example questions include:

```
What square is the black king on in this chess position: 1Bb3BN/R2Pk2r/1Q5B/4q2R/2bN4/4Q1BK/1p6/1bq1R1rb w - - 0 1
```

```
Given a QWERTY keyboard layout, if HEART goes to JRSTY, what does HIGB go to?
```

```
#include <stdio.h>
#define  f(f,g){z e=0;for(;e<f;e++)g;}
#define  i(f,g)static z f(z a){return g;}
#define  j(f,g)static void f(z*a,z*b,z*c){g}
#define  h(f,g)static z f(z a,z b,z c){return g;}
#define  g(f,g,h,i,j)static z f(z b){z a=g,c=h;for(;i)a=j;return a;}
typedef unsigned char y;typedef unsigned long long z;extern y*w;static z b(z a,z b){return a>>b|a<<(64-b);}i(_,
(a>>6)^b(a,61)^b(a,19))i(_a,b(a,39)^b(a,28)^b(a,34))h(x,((a^b)&c)^(a&b))i(u,b(a,41)^b(a,18)^b(a,14))h(t,(((((3*(a*c+b*b)>>9)+(3*
b*c>>32))*a>>21)+(3*a*a*b>>6)+((b>>4)*(b>>4)*b>>46))>>18)+a*a*a)h(m,t((b<<16)|(c>>48),(c>>24)%(1<<24),c%(1<<24))>>48<a)h(s,(a&b)
^(~a&c))i(r,b(a,1)^b(a,8)^(a>>7))g(o,0,0,c<8;c++,a*256+w[b*8+c])g(d,0,0,c<13;c++,a*31+w[b*13+c]-96)g(p,0,4,c;c/=2,a|c*m(b,a|c,a)
)g(q,0,1ull<<63,c;c/=2,a|c*m(b,p(b),a|c))g(v,b>1,2,c<b;c++,a&&b%c)g(l,b?l(b-1)+1:2,a,!v(c);c++,c+1)j(n,z d=a[7]+u(a[4])+s(a[4],a
[5],a[6])+q(l(*b))+c[*b%16];f(8,a[7-e]=e-3?e-7?a[6-e]:d+_a(a[0])+x(a[1],a[2],a[3]):d+a[3])f(16*(*b%16>14),c[e]+=c[(e+9)%16]+r(c[
(e+1)%16])+_(c[(e+14)%16])))j(k,f(8,b[e]=a[e])f(80,n(a,&e,c))f(8,a[e]+=b[e]))int main(){z a[8],b[8],c[16];f(8,a[e]=d(e))f(16,c[e
]=e-15?o(e):d(8))k(a,b,c);f(16,c[e]=e?e-15?0:11264:1ull<<63)k(a,b,c);f(8,printf("%016llx%s",a[e],e-7?"":"\n"))return!w;}y*w=(y*)
"crsmyiajqhwy{unwa|hjoi`hlxhpxrzb~edko~rtr~ileqyjk`znqgsuitvgqnfdfa||wedvnmhozkpokootqzcexeld~oibqzpcsuw{ib{x`m`hsa`jmn}wcfzpb";

What does this program do, in one sentence?
```


## LLM Pricing comparison

In addition to quality and speed, we are also interested in the cost of LLMs. 

The table below is updated to the best of our abilities, feel free to submit changes by editing this page.


| LLM                    | Context Length | Price per input ($/M) | Price per output ($/M) |
|------------------------|----------------|-----------------------|------------------------|
| **GPT-4o**                    | 128K             | 5                    | 15                     |
| GPT-4o mini                    | 128K             | 0.15                    | 0.60                     |
| **GPT-4-Turbo**           | 128K           | 10                    | 30                     |
| GPT-4 (8k)              | 8K             | 30                    | 60                     |
| **GPT-4 (32k)**           | 32K            | 60                    | 120                    |
| **GPT-3.5-Turbo**         | 16K            | 0.5                   | 1.5                    |
| **Claude 3 Haiku**        | 200K           | 0.25                  | 1.25                   |
| **Claude 3.5 Sonnet**       | 200K           | 3                     | 15                     |
| **Claude 3 Opus**         | 200K           | 15                    | 75                     |
| **Gemini 1.5 Pro** (128K/1M)       | 1M             | 3.50/7                     | 10.50/21                     |
| Gemini 1.5 Flash (128K/1M)        | 1M             | 0.35/0.70                     | 0.53/1.05                     |
| **Mistral Small**         | 8K             | 2                     | 6                      |
| **Mistral Medium**        | 8K             | 2.7                   | 8.1                    |
| **Mistral Large**         | 8K             | 8                     | 24                     |
| Reka Core              | 128K           | 10                    | 25                     |
| Reka Flash             | 128K           | 0.8                   | 2                      |
| Reka Edge              | 128K           | 0.4                   | 1                      |
| Cohere Command R+      | 128K           | 3                     | 15                     |
| Cohere Command R       | 128K           | 0.50                  | 1.50                   |
| Groq Llama 3 70B       | 8K             | 0.59                  | 0.79                   |
| Groq Llama 3 8B        | 8K             | 0.05                  | 0.10                   |
| Groq Mixtral 8x7B      | 32K            | 0.27                  | 0.27                   |
| Groq Gemma 7B          | 8K             | 0.10                  | 0.10                   |

[Kagi Assistant](./assistant.md) provides access to all the models in bold. Usage is included in your Kagi subscription.


