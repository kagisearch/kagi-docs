# Community CSS Benchmark

The Community CSS Benchmark is a benchmark for testing how LLMs handle novel problems. In this case, we told each LLM to write a CSS file that makes Kagi mimik OSX 10.4 Tiger. We gave it Kagi's html and an amazing example CSS [Kagi Catppuccin Mocha](https://repo.jcrabapple.com/jcrabapple/82208449e52b434a8e695c8124fa3f79) to give it context on the problem. 

## Kagi Ki
Model Date: Not provided, but it is based on Anthropic Sonnet 4
Note: Since there are two versions of Kagi Ki, based on what plan you have, it is important to note that this is Ki available with the Ultimate plan.
![Summarize Page](media/ki_css){data-zoomable}

## OpenAI GPT-5 High
Model Date: August 7th, 2025
![Summarize Page](media/gpt_5_high_css){data-zoomable}

## OpenAI GPT-5 Medium
Model Date: August 7th, 2025
![Summarize Page](media/gpt_5_medium_css){data-zoomable}

## OpenAI GPT-5 Low
Model Date: August 7th, 2025
![Summarize Page](media/gpt_5_low_css){data-zoomable}

## OpenAI GPT-5 Mini
Model Date: August 7th, 2025
![Summarize Page](media/gpt_5_mini_css){data-zoomable}

## OpenAI GPT-5 Nano
Model Date: August 7th, 2025
Note: There was no visible change to the CSS despite having written a file.
![Summarize Page](media/gpt_5_nano_css){data-zoomable}

## OpenAI GPT-4.1
Model Date: April 14th, 2025
![Summarize Page](media/gpt_4_1_css){data-zoomable}

## OpenAI o4 mini
Model Date: April 16th, 2025
Note: o4 mini instantly times out despite multiple attempts running this benchmark.

## OpenAI o3 pro
Model Date: June 10th, 2025
![Summarize Page](media/o3_pro_css){data-zoomable}

## Anthropic Claude 4 Sonnet Reasoning
Model Date: May 14th, 2025
![Summarize Page](media/sonnet_4_reasoning_css){data-zoomable}

## Anthropic Claude 4.1 Opus Reasoning
Model Date: August 5th, 2025
![Summarize Page](media/opus_4_1_reasoning_css){data-zoomable}

## Google Gemini 2.5 Flash
Model Date: June 17th, 2025
Note: Initial CSS was too large so it was given two opportunities to get within 20,000 characters. First it was prompted to get below 20,000 characters, then it was prompted to get below 20,000 characters including spaces.
![Summarize Page](media/gemini_2_5_flash_css){data-zoomable}

## Google Gemini 2.5 Flash Lite
Model Date: July 22nd, 2025
![Summarize Page](media/gemini_2_5_flash_lite_css){data-zoomable}

## Google Gemini 2.5 Pro
Model Date: June 17th, 2025
![Summarize Page](media/gemini_2_5_pro_css){data-zoomable}

## xAI Grok 3 Mini
Model Date: February 17th, 2025
Note: The given prompt reached the model output limit and it was unable to complete the CSS file.

## xAI Grok 4
Model Date: Via grok.com, no specific date provided
Note: Kagi gave an error that no output was available for this query so it was tested on grok.com. Keep in mind that it is not using Kagi's system prompt. Grok also exceeded the character limit so it was given an opportunity to get within 20,000 characters.
![Summarize Page](media/grok_4_css){data-zoomable}
