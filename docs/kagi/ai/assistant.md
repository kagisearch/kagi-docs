# The Assistant by Kagi

<br>

<video src="./media/assistant.mp4" width="720" type="video/mp4" autoplay muted loop playsinline disablepictureinpicture />

The Assistant by Kagi combines top large language models (LLM) with optional results from Kagi Search, making it the perfect companion for creative, research, and programming tasks — alongside everything else you can think of! All this is included in a single subscription!

>**NOTE:** The Assistant is currently available to users with the [Kagi Ultimate plan](../plans/ultimate-plan.md).

## Features

- Access to the latest and most performant large language models from OpenAI, Anthropic, Meta, Google, Mistral, Amazon, Alibaba and DeepSeek.
- Multiple [custom assistants](#custom-assistants)
- The ability to control whether the Assistant has web access (powered by Kagi Search)
- Applying Kagi Search [Lenses](../features/lenses.md) and [Personalized Results](../features/website-info-personalized-results.md) to the Assistant searches
- Switch between multiple threads within a single window
- Saving Assistant threads
- Uploading files to use as context
- Altering the Assistant configuration within the thread
	- For example, you can ask the initial question with web access enabled, and then disable it for subsequent questions!
	 - It is also possible to switch to a different LLM in the middle of a thread
- Code syntax highlighting
- [Keyboard Shortcuts](#keyboard-shortcuts)
- Export conversations to markdown format
- Share threads with others using a link
- Voice input

## Privacy

When you use the Assistant by Kagi, your data is never used to train AI models (not by us or by the LLM providers), and no account information is shared with the LLM providers. By default, threads expire after 24 hours of inactivity. This behavior can be adjusted in the [settings](https://kagi.com/settings/?p=assistant).

## Using the Assistant

The Assistant can be accessed via the Control Center located in the top right corner of all Kagi pages or by clicking on the link in the top right corner of the Kagi homepage. [The direct link](https://kagi.com/assistant) to the Assistant can also be used.

When you first access the Assistant, you will be greeted by a familiar-looking landing page, allowing you to get right into using it.
You can either type your prompt or use voice input by pressing the microphone symbol.
You can choose which LLM you wish to use by opening the dropdown menu just below the prompt field.

The Assistant's web access can be toggled via the button below the prompt field.

## Which model to choose

We maintain the [Kagi LLM Benchmarking Project](./llm-benchmark.md) to measure model quality in various scenarios.

Another important aspect is the privacy policy of the model provider. See our [LLM Privacy Comparison](./llms-privacy.md) for a detailed overview of how each provider handles your data.

## Threads

The Assistant supports threads, allowing you to keep your bagel topping ideas separate from your weekend projects.

The search bar enables you to search for that one elusive thread.
Currently, the search only looks through your thread titles.

By default threads are kept for 24 hours after the last message.
If keeping threads alive permanently better fits your workflow, you can adjust this setting in [Assistant Settings](https://kagi.com/settings/?p=assistant).
Please note that the thread saving setting is applied **when the thread is created**.

Threads can be renamed, added to Quick Access, shared, deleted, and downloaded via the `⋮` button which is displayed when you hover over the thread.

The Quick Access feature can be used to better organize your threads but it will not influence the thread saving setting.
In other words, threads added to Quick Access will also be deleted after 24 hours, unless you have chosen otherwise in the settings.

You can also **preserve** threads with the star symbol, located to the left of the thread title.
Preserved threads do not expire.

## Uploading Files to Assistant

The Assistant by Kagi supports file uploads, allowing you to provide additional context or information for your queries.

This can be useful for tasks like:

- Summarizing a document
- Extracting key insights from a report
- Analyzing data in a spreadsheet
- Describing an image
- Distilling main points from an audio file

To upload a file:

1. Click the paperclip icon in the prompt input box.
2. Select the file or image you wish to upload.
3. Provide a prompt with instructions to process the file or leave blank to summarize it.

Important considerations for file uploads:

**File size limit:** The maximum file size for uploads is 8MB.
**Processing time:** Larger files may take a few moments to process.
**Context retention:** Uploaded file content remains in the conversation context for subsequent messages.

The Assistant supports various file formats across different categories, including:

| File Type | Supported Formats |
|:--|:--|
| Text | txt, text, md (and other text-based formats) |
| Rich Format | pdf, docx, pptx |
| Spreadsheets | csv, tsv, xlsx, json, jsonl |
| Image | jpg, jpeg, png, gif, tiff, tif, webp |
| Audio | 3gpp, aa, aac, aax, act, aiff, amr, ape, au, awb, dct, dss, dvf, flac, gsm, iklax, ivs, m4a, m4b, m4p, mp4, mmf, mp3, mpc, msv, ogg, opus, ra, rm, sln, tta, vox, wav, wma, wvpla |

Note: Unsupported formats may be treated as binary files.

## Custom Instructions

Do you prefer a more personalized Assistant experience?
You can provide custom instructions in the [Assistant Settings](https://kagi.com/settings?p=assistant).
These instructions can be utilized to refine the Assistant responses.
You can, for instance, instruct the Assistant to be more succinct or to consider your profession and location.

## Custom Assistants {#custom-assistants}

You can create Custom Assistants in the [Assistant Settings](https://kagi.com/settings?p=assistant).
It is possible to customize the LLM, settings (the use of web access, lenses, and personalized results), and the instructions for each Custom Assistant.

The Assistant comes with a built-in **Code** Custom Assistant that is optimized for programming tasks. It uses Claude 3.5 Sonnet and has web access.

For more details, refer to the [Custom Assistants](./custom-assistants.md) page.

## Keyboard Shortcuts {#keyboard-shortcuts}

The following keyboard shortcuts are available in the Assistant by Kagi on Mac and PC.

| Mac Shortcut | Action |
|:--|:--|
| &#8984; + K | New Thread |
| &#8984; + Shift + S | Toggle Sidebar |
| &#8984; + Shift + C | Copy Last Response |
| &#8984; + Shift + E | Edit Last Message |
| &#8984; + Shift + Backspace | Delete Current Thread |
| &#8984; + / | Focus Prompt Box |
| &#8984; + . | Show Keyboard Shortcuts |

| PC Shortcut | Action |
|:--|:--|
| Ctrl + K | New Thread |
| Ctrl + Shift + S | Toggle Sidebar |
| Ctrl + Shift + C | Copy Last Response |
| Ctrl + Shift + E | Edit Last Message |
| Ctrl + Shift + Backspace | Delete Current Thread |
| Ctrl + / | Focus Prompt Box |
| Ctrl + . | Show Keyboard Shortcuts |

## LLMs Available in The Assistant

The Assistant provides access to the following LLMs:

| Provider    | Model                                                                     |
|-------------|---------------------------------------------------------------------------|
| Anthropic   | [Claude 3.7 Sonnet with extended thinking](https://kagi.com/assistant?profile=claude-3-7-sonnet)|
| Anthropic   | [Claude 3.7 Sonnet](https://kagi.com/assistant?profile=claude-3-sonnet)   |
| Anthropic   | [Claude 3 Opus](https://kagi.com/assistant?profile=claude-3-opus)         |
| Anthropic   | [Claude 3 Haiku](https://kagi.com/assistant?profile=claude-3-haiku)  
| OpenAI      | [GPT 4o](https://kagi.com/assistant?profile=gpt-4o)                       |
| OpenAI      | [GPT 4o Mini](https://kagi.com/assistant?profile=gpt-4o-mini)             |
| OpenAI      | [o3 Mini](https://kagi.com/assistant?profile=o3-mini)             |
| Mistral AI  | [Mistral Pixtral](https://kagi.com/assistant?profile=mistral-nemo)        |
| Mistral AI  | [Mistral Large](https://kagi.com/assistant?profile=mistral-large)         |
| Google      | [Gemini 1.5 Pro](https://kagi.com/assistant?profile=gemini-pro)           |
| <span title="Hosted by Firework AI" style="border-bottom: 1px dotted; cursor: help;">Meta</span>    | [Llama 3.3 70B](https://kagi.com/assistant?profile=llama-3-70b)   |
| <span title="Hosted by Firework AI" style="border-bottom: 1px dotted; cursor: help;">Meta</span>    | [Llama 3.1 405B](https://kagi.com/assistant?profile=llama-3-405b) |
| <span title="Hosted by Firework AI" style="border-bottom: 1px dotted; cursor: help;">Alibaba</span> | [Qwen QwQ 32b](https://kagi.com/assistant?profile=qwen-qwq-32b)   |
| Amazon  | [Nova Lite](https://kagi.com/assistant?profile=nova-lite)                     |
| Amazon  | [Nova Pro](https://kagi.com/assistant?profile=nova-pro)                       |
| DeepSeek | [Chat V3](https://kagi.com/assistant?profile=deepseek)                       |
| DeepSeek | [R1](https://kagi.com/assistant?profile=deepseek-r1)                         | 


You can learn more about how these models compare in the [Kagi LLM Benchmarking Project](./llm-benchmark.md) page.

## Bangs

You can quickly access The Assistant using the following [bangs](../features/bangs.md):

- `!ai`, `!as`, `!assistant`, `!research`, `!answer`, `!discuss`, `!expert`, `!llm`, `!custom`, and `!asst`: These bangs direct you to the general Assistant interface for various types of queries.

- `!chat`: This bang accesses The Assistant with internet access turned off.

- `!code`: Use this bang to access the built-in **Code** Custom Assistant, which is tailored for coding-related queries.

- `!ki`: This bang accesses The Assistant with the Ki profile, providing a specialized interaction.

Each bang is designed to optimize your search experience by directing you to the most appropriate version of The Assistant for your needs.

## URL Parameters

You can specify a particular model in the Assistant's URL by including a `profile` parameter.
`https://kagi.com/assistant?profile=gpt-4o&q=%s`
The available model names can be found in the table above.

This can also be used with custom assistants, as described on the [custom assistant documentation](./custom-assistants.md#url-parameters).

The `internet` parameter can be used to turn on and off internet access, set to `true` to enable, anything else to disable. This overrides the internet setting of the profile used.

The `lens` parameter can be used to set the lens if internet access is enabled. The value of this is the lowercase format of the lens name, for example, `https://kagi.com/assistant?lens=programming&q=%s` will use the Programming lens.

Here is an example of a URL that disables internet access, uses the **Claude 3 Haiku** model, and applies the **Programming lens**:  
```https://kagi.com/assistant?profile=claude-3-haiku&internet=false&lens=programming&q=%s```

## Availability

The Assistant is available to all Kagi Ultimate members.
If you are on a different plan you can upgrade from the [Billing Settings](https://kagi.com/settings?p=billing_plan) page.

We also offer an Ultimate upgrade for Family Plans, you can upgrade from the [Family Management](https://kagi.com/settings?p=account_members) page.

## FAQ

**Q**: What is Kagi’s stance about using LLMs in search?\
**A**: We continue to relentlessly focus on the core search experience and build thoughtfully integrated features on top of it. Read more about it in our [AI Integration Philosophy](../why-kagi/ai-philosophy.md) page.
