# Assistant

Kagi Assistant is a product feature backed by Kagi Search and large language models.

**Kagi Assistant is currently in open beta and available to [Ultimate plan](https://kagi.com/pricing) members.**

## Assistant Modes

### Research

Research assistant uses Kagi search and external sources like Wolfram Alpha, together with an AI model to answer your queries.
This model also allows you to upload a file (up to 16 MB) or provide a URL (article, PDF, video, podcast, etc.) to use as context.
If an image is provided it will be processed using GPT4 Vision.

![Kagi Assistant - Research](./media/assistant_research.png){width=500px data-zoomable}

This mode is available in two variants:

- `Fast`: Kagi search coupled with a fast LLM (`Claude 3 Haiku`). Optimized for speed, while not sacrificing quality. Access directly with the `!fast` bang.
- `Expert`: Multiple Kagi searches (and external services) together with a better LLM (`GPT-4o`) for the highest accuracy and comprehensive responses. Access directly with the `!expert` bang.

Research Assistant supports using [Lenses](../features/lenses.md) to filter the types of websites used as context to generate an answer. Lenses are predefined categories that help you focus on specific topics or sources. This allows you to restrict results to more trustworthy or relevant sites for your needs. To enable this feature, toggle the Lenses switch and select one of the available options.

![Research Assistant - Lenses](./media/assistant_research_lenses.png){width=500px data-zoomable}


### Code

Code assistant is tuned for programming tasks and uses a powerful AI model for programming.

![Kagi Assistant - Code](./media/assistant_code.png){width=500px data-zoomable}

This mode uses `gpt-4o`.

Access directly with the `!code` bang.

### Chat

Chat assistant allows direct access to a variety of large language models for creative tasks.

![Kagi Assistant - Chat](./media/assistant_chat.png){width=500px data-zoomable}

This mode supports the following models:

- OpenAI
  - GPT 3.5 Turbo
  - GPT 4
  - GPT 4 Turbo
  - GPT 4o
- Anthropic
  - Claude 3 Haiku
  - Claude 3.5 Sonnet
  - Claude 3 Opus
- Google
  - Gemini Pro
- Mistral AI
  - Mistral Small
  - Mistral Large
 
Access directly with the `!chat` bang.

![LLMs supported by Kagi Assistant](https://kagifeedback.org/assets/files/2024-03-26/1711457673-662718-image.png)

### Custom

Custom assistant allows you to further customize one of the existing modes.

![Kagi Assistant - Custom](./media/assistant_custom.png){width=500px data-zoomable}

Select the base mode (and variant/model where applicable) and add your own custom instructions. Setup is detailed in the [Assistant settings help page](../settings/assistant.md#custom-assistant).

Access directly with the `!custom` bang.

## Tips and Tricks for using Kagi Assistant

- Assistant has a character limit of 16,000 for each prompt in a conversation.
- You can input math equations using the LaTeX format.
- Using the copy button will copy the response to your clipboard preserving any formatting using markdown.
- Assistant supports syntax highlighting in generated code snippets.
- For optimal results, interact with the Assistant in a natural language. For instance, "Who was Alan Turing?" will yield a better response than simply "Alan Turing".
- When using Code Assistant, it is recommended to specify the programming language you are using as part of your prompt.

## Chat Mode Scorecard Criteria

When you visit Assistant's Chat Mode landing page, you will be presented with a scorecard comparing different aspects of each model.

The Privacy column in the scorecard rates each model based on how it handles user data. The criteria are:

- 1 circle: No data retention period specified. 
- 2 circles: Data retained for more than 30 days before deletion.
- 3 circles: Data retained for 30 days or less before deletion.  
- 4 circles: No data retained.

None of the models train on user data.

Check also [Kagi LLM Benchmarking Project](./llm-benchmark.md).

