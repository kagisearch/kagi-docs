# LLMs & Privacy

When you use [Kagi Assistant](./assistant.md), we make API requests to third-party model providers to generate responses. We are committed to protecting your privacy. The table below provides an overview of how each provider handles your data, including training practices, retention policies, and links to their privacy documentation.

| Model | Model Provider | Trains on User Data via API | Data Retention for API | Privacy Policy / FAQ |
| :---- | :------------- | :-------------------------- | :--------------------- | :------------------- |
| • Claude 4.5 Sonnet<br>• Claude 4.5 Sonnet (reasoning)<br>• Claude 4.1 Opus<br>• Claude 4.1 Opus (reasoning)<br>• Claude 4.5 Haiku<br>• Claude 4.5 Haiku (reasoning) | • Anthropic<br>• Amazon Bedrock | No | 30 days (flagged prompts: 2 years) | • [Anthropic Privacy Policy](https://www.anthropic.com/legal/privacy)<br>• [Anthropic FAQ](https://privacy.anthropic.com/en/articles/7996866-how-long-do-you-store-personal-data)<br>• [Amazon Bedrock Privacy Policy](https://docs.aws.amazon.com/bedrock/latest/userguide/)<br>• [Amazon Bedrock FAQ](https://docs.aws.amazon.com/nova/latest/userguide/responsible-use.html) |
| • ChatGPT<br>• o4 mini<br>• GPT 4.1<br>• GPT 4o mini<br>• GPT 4.1 mini<br>• GPT 4.1 nano<br>• GPT 5 chat⁴<br>• GPT 5 Codex<br>• GPT 5 mini<br>• GPT 5 nano | • OpenAI¹<br>• Microsoft Azure | No | 30 days² | • [OpenAI Privacy Policy](https://openai.com/enterprise-privacy/)<br>• [Microsoft Azure Privacy Policy](https://learn.microsoft.com/en-us/azure/machine-learning/concept-data-privacy?view=azureml-api-2) |
| • o3<br>• o3 pro<br>• GPT 5 | • OpenAI¹ ³ | No | 30 days | • [OpenAI Privacy Policy](https://openai.com/enterprise-privacy/) |
| • Mistral Pixtral<br>• Mistral Large<br>• Mistral Medium<br>• Magistral Medium<br>• Magistral Large | • Mistral AI<br>• Microsoft Azure | No | 30 days | • [Mistral AI Privacy Policy](https://mistral.ai/terms/)<br>• [Microsoft Azure Privacy Policy](https://learn.microsoft.com/en-us/azure/machine-learning/concept-data-privacy?view=azureml-api-2) |
| • Mistral Small | • Nebius<br>• Mistral AI | No | 30 days | • Custom privacy agreement with Nebius<br>• [Mistral AI Privacy Policy](https://mistral.ai/terms/) |
| • Gemini 2.5 Flash<br>• Gemini 1.5 Pro<br>• Gemini 2.5 Pro<br>• Gemini 3 Pro (Preview) | • Google | No | 24 hours | • [Privacy Policy](https://cloud.google.com/vertex-ai/generative-ai/docs/data-governance#prediction) |
| • Llama 4 Maverick<br>• DeepSeek Chat V3<br>• DeepSeek R1<br>• Qwen 3 Coder | • Fireworks.ai<br>• Together.ai | No | Not stored | • [Fireworks.ai Privacy Policy](https://fireworks.ai/privacy-policy)<br>• [Fireworks.ai FAQ](https://docs.fireworks.ai/guides/security_compliance/data_handling)<br>• [Together.ai Privacy Policy](https://www.together.ai/privacy) |
| • Qwen QwQ 32b | • Groq<br>• Fireworks.ai | No | Not stored | • [Groq Privacy Policy](https://groq.com/privacy-policy/)<br>• [Fireworks.ai Privacy Policy](https://fireworks.ai/privacy-policy)<br>• [Fireworks.ai FAQ](https://docs.fireworks.ai/guides/security_compliance/data_handling) |
| • Qwen 3 235B<br>• Qwen 3 235B with Thinking | • Cerebras<br>• Nebius<br>• Fireworks.ai | No | Not stored | • [Cerebras privacy Policy](https://www.cerebras.ai/policies)<br>• Custom privacy agreement with Nebius<br>• [Fireworks.ai Privacy Policy](https://fireworks.ai/privacy-policy)<br>• [Fireworks.ai FAQ](https://docs.fireworks.ai/guides/security_compliance/data_handling) |
| • Qwen 3 32B<br>• Qwen 3 32B with Thinking<br>• Hermes 4 405B | • Nebius | No | Not stored | • Custom privacy agreement with Nebius |
| • Grok 3 Mini<br>• Grok 4<br>• Grok 4 Fast<br>• Grok 4 Fast with Thinking<br>• Grok Code Fast 1 | • xAI | No | 30 days | • [xAI Privacy Policy](https://x.ai/legal/privacy-policy)<br>• [xAI FAQ](https://docs.x.ai/docs/faq#does-xai-train-on-customers-api-requests) |
| • Kimi K2 | • Groq<br>• Nebius<br>• DeepInfra<br>• Fireworks.ai<br>• Together.ai | No | Not stored | • [Groq Privacy Policy](https://groq.com/privacy-policy/)<br>• Custom privacy agreement with Nebius<br>• [DeepInfra Privacy Policy](https://deepinfra.com/privacy)<br>• [Fireworks.ai Privacy Policy](https://fireworks.ai/privacy-policy)<br>• [Fireworks.ai FAQ](https://docs.fireworks.ai/guides/security_compliance/data_handling)<br>• [Together.ai Privacy Policy](https://www.together.ai/privacy) |
| • Kimi K2 Thinking | • DeepInfra<br>• Fireworks.ai<br>• Together.ai | No | Not stored | • [DeepInfra Privacy Policy](https://deepinfra.com/privacy)<br>• [Fireworks.ai Privacy Policy](https://fireworks.ai/privacy-policy)<br>• [Fireworks.ai FAQ](https://docs.fireworks.ai/guides/security_compliance/data_handling)<br>• [Together.ai Privacy Policy](https://www.together.ai/privacy) |
| • GPT OSS 20B<br>• GPT OSS 120B | • Groq<br>• Fireworks.ai | No | Not stored | • [Groq Privacy Policy](https://groq.com/privacy-policy/)<br>• [Fireworks.ai Privacy Policy](https://fireworks.ai/privacy-policy)<br>• [Fireworks.ai FAQ](https://docs.fireworks.ai/guides/security_compliance/data_handling) |
| • GLM-4.5 | • Fireworks.ai | No | Not stored | • [Fireworks.ai Privacy Policy](https://fireworks.ai/privacy-policy)<br>• [Fireworks.ai FAQ](https://docs.fireworks.ai/guides/security_compliance/data_handling) |

¹ The Assistant does not include a [unique user identifier](https://platform.openai.com/docs/guides/safety-best-practices#end-user-ids) for these requests.

² OpenAI is [no longer required to retain all chat logs](https://openai.com/index/response-to-nyt-data-demands/).

³ o3/o3-pro models are not yet available to Kagi via Azure and go directly to OpenAI for now.

⁴ GPT 5 chat is labeled as ChatGPT in the Assistant.
