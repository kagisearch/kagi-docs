# Summarize Page
Summarize Page (or Universal Summarizer as it's also called) is a way to summarize any page, video or podcast (given a transcript).

There are currently four ways to summarize a page:

1. Directly in the search results
2. Via bang
3. Via API
4. On a [dedicated page](https://kagi.com/summarizer/index.html), independent of a previous search

All, apart from the API, are free for every paid Kagi user.

Summarize Page is made using Kagi's own, in-house models. There are currently three models in use:
1. Agnes (Consumer-grade, accessible via the web or API)
2. Cecil (Consumer-grade, currently API-only)
2. Muriel (Enterprise-grade, currently API-only)

## In search results

You may find individual pages that you would like to summarize and Kagi is the first engine to offer a Summarize Page option. Expand the page options next to a search results and select "Summarize Page" and Kagi will use its proprietary Universal Summarizer technology in the back end to provide an easily digestible synthesis.

![Summarize Page](media/summarize_page.png){data-zoomable}

Once complete you will see the individual page summary appear below the result.

![Summarized Page](media/summarized_page.png){data-zoomable}

After reading the summary you can even choose to proceed to [Discuss this document](./ask-questions.md).

## Via bang

Quickly summarize any page using the [bang `!sum`](../features/bangs.md#universal-summarizer).

## Via API
See [Summarizer API](../api/summarizer.md) for more details.

As mentioned at the start, two models are offered in the API. As for the differences between the two AI models, here is them summarizing the same [document](https://arxiv.org/pdf/2112.11446.pdf).

**Agnes:**

> The PDF document titled “Scaling Language Models: Methods, Analysis & Insights from Training Gopher” presents an analysis of Transformer-based language model performance across a wide range of model scales, from models with tens of millions of parameters up to a 280 billion parameter model called Gopher. The models are evaluated on 152 diverse tasks, achieving state-of-the-art performance across the majority. The study finds that gains from scale are largest in areas such as reading comprehension, fact-checking, and the identification of toxic language, but logical and mathematical reasoning see less benefit. The document also provides a holistic analysis of the training dataset and models behavior, covering the intersection of model scale with bias and toxicity. Finally, the study discusses the application of language models to AI safety and the mitigation of downstream harms. The key implication of this study is that larger language models can significantly improve performance on a wide range of natural language processing tasks, but there are also concerns about the potential for bias and toxicity in these models.
> The paper also provides a holistic analysis of the training dataset and the model’s behavior, examining the intersection of model scale with bias and toxicity. It discusses the application of language models to AI safety and the mitigation of downstream harms.

**Muriel:**

> This PDF document presents an analysis of Transformer-based language model performance across various scales, focusing on a 280 billion parameter model called Gopher. The models are evaluated on 152 diverse tasks, achieving state-of-the-art performance in the majority of them. The most significant gains from scaling are observed in areas such as reading comprehension, fact-checking, and toxic language identification, while logical and mathematical reasoning see less benefit.
>
> The paper also provides a holistic analysis of the training dataset and the model’s behavior, examining the intersection of model scale with bias and toxicity. It discusses the application of language models to AI safety and the mitigation of downstream harms.
>
> Key findings include:
> 1. Gopher outperforms current state-of-the-art language models in approximately 81% of tasks with comparable results, particularly in knowledge-intensive domains such as fact-checking and general knowledge.
> 2. Larger models are more likely to generate toxic responses when provided with toxic prompts, but they can also more accurately classify toxicity.
> 3. Gains from scale are largest in areas like reading comprehension, fact-checking, and the identification of toxic language. However, logical and mathematical reasoning see less benefit.
>
> The document also discusses challenges and future directions, such as:
> 1. Towards efficient architectures: The need for more efficient architectures to reduce the computational cost of training and inference.
> 2. Challenges in toxicity and bias: Addressing the issues of toxicity and bias in language models to ensure safe and fair AI systems.
> 3. Safety benefits and risks: Balancing the potential benefits of language models in AI safety with the risks associated with their misuse.
>
> In conclusion, the paper highlights the improved performance of large-scale language models like Gopher in various tasks and emphasizes the importance of addressing challenges related to toxicity, bias, and AI safety.

## Universal Summarizer landing page

There's <https://kagi.com/summarizer> where you can enter the URL of any page, PDF, PPTX, MP3, video etc that you want to have summarized.

![Universal Summarizer landing page](media/universal-summarizer_landing_page.png){data-zoomable}
