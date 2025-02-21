# Kagi's AI Integration Philosophy

Generative AI is a hot topic, but the technology still has flaws. Critics of AI go as far as to [say](https://www.nytimes.com/2023/03/08/opinion/noam-chomsky-chatgpt-ai.html) that "*[AI] will degrade our science and debase our ethics by incorporating into our technology a fundamentally flawed conception of language and knowledge*."

From an information retrieval point of view, relevant to our context of a search engine, we should acknowledge the two main limitations of the current generation of AI.

1. Large language models (LLMs) should not be blindly trusted to provide factual information accurately. They have a significant risk of generating incorrect information or fabricating details (confabulating). This can easily mislead people who are not approaching LLMs pragmatically.  (*This is a product of the auto-regressive nature of these models where the output is predicted one token at a time, and once it strays away from the "correct" path, for which the probability grows exponentially with the length of the output, it is "doomed" to the end of output, without the ability to plan ahead or correct itself*).

2. LLMs are not intelligent in the human sense. They have no understanding of the actual physical world. They do not have their own genuine opinions, emotions, or sense of self. We must avoid attributing human-like qualities to these systems or thinking of them as having human-level abilities. They are limited AI technologies. (*In a way, they are similar to how a wheel can get us from point A to point B, sometimes much more efficiently than the human body can, but it lacks the ability to plan and the agility of the human body to get us everywhere a human body can*).

These limitations require us to pause and reflect on the impact on the search experience before incorporating this new technology for our customers. As a result, we came up with an AI integration philosophy that is guided by these principles:

1. **AI should be used in a closed, defined context relevant to search** (don't make a therapist inside the search engine, for example).  
2. **AI should be used to enhance the search experience, not to create it or replace it** (meaning AI is opt-in and on-demand, similar to how we use JavaScript in Kagi, where search still works perfectly fine when JS is disabled in the browser).
3. **AI should be used to the extent that it enhances our humanity, not diminish it** (AI should be used to support users, not replace them).

While it's important to use AI tools responsibly and not overly rely on them, the design of these tools can sometimes make it difficult.

Therefore, a well-designed tool should have features that allow for a seamless transfer of control back to the user when the tool fails, such as an autopilot system in aviation that can pass control back to the pilot when it fails or be overridden by the pilot at any time.

Additionally, an AI tool should be able to indicate when it has low confidence in its answers, especially when dealing with uncertain data so that users can make informed decisions based on the tool's limitations. Regrettably, current large language models (LLMs) lack a "ground truth" understanding of the world, making such evaluations unattainable. This remains a fundamental challenge with the present generation of LLM architecture, a problem that all contemporary generative AI systems share.
