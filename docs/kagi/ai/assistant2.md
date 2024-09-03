# The Assistant by Kagi

<br>

<video src="./media/assistant.mp4" width="720" type="video/mp4" autoplay muted loop playsinline disablepictureinpicture />

The Assistant by Kagi combines the unparalleled results of Kagi Search with the latest large language models (LLM), making it the perfect companion for creative, research, and programming tasks --- alongside everything else you can think of!

## Features

- Access to the latest and most performant large language models from OpenAI, Anthropic, Mistral and Google
- Multiple [custom assistants](#custom-assistants)
- The ability to control whether the Assistant has web access (powered by Kagi Search).
- Applying Kagi Search [Lenses](../features/lenses.md) and [Personalized Results](../features/website-info-personalized-results.md) to the Assistant searches
- Switch between multiple threads from a single window
- Saving Assistant threads
- Altering the Assistant configuration within the thread
	- For example, you can ask the initial question with web access enabled, and then disable it for subsequent questions!
	 - It is also possible to switch to a different LLM in the middle of a thread
- Code syntax highlighting
- [Keyboard Shortcuts](#keyboard-shortcuts)
- Export conversations to markdown format
- Share threads with others using a link
- Voice input

## Privacy

When you use the Assistant by Kagi, your data is never used to train AI models, and no account information is shared with the LLM providers. By default, threads expire after 24 hours of inactivity (can be adjusted in [settings](https://kagi.com/settings/?p=assistant)).

## Using the Assistant

The Assistant can be accessed via the Control Center located in the top right corner of all Kagi pages or by clicking on the link in the top right corner of the Kagi homepage. [The direct link](https://kagi.com/assistant) to the Assistant can also be used. 

When you first access the Assistant, you will be greeted by a familiar-looking landing page, allowing you to get right into using it.
You can either type your prompt or use voice input by pressing the microphone symbol.
You can choose which LLM you wish to use by opening the dropdown menu just left of the prompt field.

Assistant's web access can be toggled via the button below the prompt field.

## Threads

The Assistant supports threads, allowing you to keep your bagel topping ideas separate from your weekend projects.

The search bar enables you to search for that one elusive thread.
Currently the search only looks through your thread titles.

By default threads are kept for 24 hours after the last message.
If keeping threads alive permanently better fits your workflow, this setting can be adjusted in [Assistant Settings](https://kagi.com/settings/?p=assistant).
Please note that the thread saving setting is applied **when the thread is created**.

Threads can be renamed, added to Quick Access, shared, deleted, and downloaded via the `⋮` button which is displayed when you hover over the thread.

The Quick Access feature can be used to better organize your threads but it will not influence the thread saving setting.
In other words, threads added to Quick Access will also be deleted after 24 hours unless you have chosen otherwise in the settings.

You can also **preserve** threads with the star symbol, located to the left of the thread title.
Preserved threads do not expire.

## Custom Instructions

Do you prefer a more personalized Assistant experience?
You can provide custom instructions in the [Assistant Settings](https://kagi.com/settings?p=assistant).
These instructions can be utilized to refine the Assistant responses.
You can, for instance, instruct the Assistant to be more succinct or to consider your profession and location.

## Custom Assistants {#custom-assistants}

You can create Custom Assistants in the [Assistant Settings](https://kagi.com/settings?p=assistant).
It is possible to customize the LLM, settings (the use of web access, lenses, and personalized results), and the instructions for each Custom Assistant.

Assistant comes with two predefined Custom Assistants:
- **Code**. Optimized for programming tasks. It uses Claude 3.5 Sonnet and has web access.
- **Research**. Optimized for information retrieval tasks. It relies on GPT-4o and has web access.

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
| &#8963; + ? | Show Keyboard Shortcuts |

| PC Shortcut | Action |
|:--|:--|
| Ctrl + K | New Thread |
| Ctrl + Shift + S | Toggle Sidebar |
| Ctrl + Shift + C | Copy Last Response |
| Ctrl + Shift + E | Edit Last Message |
| Ctrl + Shift + Backspace | Delete Current Thread |
| Ctrl + / | Focus Prompt Box |
| Ctrl + ? | Show Keyboard Shortcuts |

## LLMs Available in The Assistant

The Assistant provides access to the following LLMs:

- Anthropic
	- Claude 3 Haiku
	- Claude 3.5 Sonnet
	- Claude 3 Opus
- OpenAI
	- GPT 3.5 Turbo
	- GPT 4
	- GPT 4 Turbo
	- GPT 4o
- Mistral AI
	- Mistral Nemo
	- Mistral Large
- Google
	- Gemini Pro
