# Ki: multi-step assistant

<img src="./media/ki.svg" alt="Ki Quick icon" style="display:inline; vertical-align:middle; width:24px; height:24px;" /> Ki is Kagi's advanced multi-step assistant designed to handle complex tasks that require multiple reasoning steps and tool usage. Unlike traditional AI assistants that provide single-response answers, Ki can break down complicated requests into multiple steps, using various tools and models to deliver comprehensive results.

## What makes Ki different

Ki operates as an agentic system, meaning it can autonomously decide which tools to use and when to use them based on your request. It functions as a "meta model" — an agent wrapper flow around several specialized models that each serve specific roles in the research and response process. The system includes approximately 15 different agent roles, including research agents, final-response agents, contemplation-tool agents, and librarian agents for in-depth source analysis.

## Ki modes

Ki offers three modes optimized for different use cases. All Kagi users have access to Ki Quick, while Ki and Ki Research are available exclusively to Ultimate plan subscribers:

| Feature | Ki Quick | Ki | Ki Research |
|------|---------|-------|------------|
| **Plan** | All | Ultimate | Ultimate |
| **Avg. Research & Analysis Time** | <5 secs | 10-30secs | 30sec + |
| **Kagi Search** | ✓ | ✓ | ✓ |
| **Response Planning** | ✓ | ✓ | ✓ |
| **Librarian** (in-depth source analysis) |  | ✓ | ✓ |
| **Research Planning** |  | ✓ | ✓ |
| **Python Interpreter** |  | ✓ | ✓ |
| **Image Generation** |  | ✓ | ✓ |
| **Image Editing** |  | ✓ | ✓ |
| **Reasoning Model** |  |  | ✓ |
| **Wolfram\|Alpha** |  |  | ✓ |
| **Maps Search** |  |  | ✓ |

**Ki Quick** is Kagi's fast agent, designed for quick agentic capabilities. It provides rapid responses with tool usage but prioritizes speed over depth. Choose Ki Quick when you need quick answers to straightforward tasks.

**Ki** is Kagi's smaller flagship agent. It goes deeper than Ki Quick, offering a balanced approach between speed and thoroughness. This is the recommended mode for most complex tasks that require multiple reasoning steps and tool usage.

**Ki Research** is Kagi's flagship agent, delivering frontier performance at most tasks. It provides the most thorough and comprehensive analysis, making it ideal for in-depth research, complex analysis, and tasks requiring maximum accuracy and detail.

## Available tools

Ki has access to a comprehensive toolkit that enables it to handle diverse tasks:

- **Kagi Search**: Performs web searches to find current information, news, images, and videos
- **Librarian**: Retrieves and analyzes information from documents or URLs in depth
- **Python Interpreter**: Executes code in a sandbox environment for computations, data processing, and visualizations
- **Reasoning Model**: Handles complex reasoning and multi-step problem solving
- **Wolfram|Alpha**: Provides factual data, scientific properties, and complex calculations
- **Image Generation and Editing**: Creates or modifies images based on prompts
- **Maps Search**: Finds places and points of interest
- **File Processing**: Reads and analyzes various file formats, including text, PDF, images, video, and audio

Ki can make up to 5 tool calls per query, allowing it to chain multiple operations together to accomplish complex tasks.

## When to use Ki

Ki excels at tasks that traditional assistants struggle with. Consider using Ki when you need to:

**Conduct multi-step research**: Ki can search for information, analyze the results, perform additional searches based on initial findings, and synthesize everything into a comprehensive report.

**Process and analyze data**: Upload files or provide data that need computational analysis, statistical processing, or visualization through graphs and charts.

**Benchmark or compare options**: Ki can research multiple alternatives, gather relevant metrics, and provide detailed comparisons with supporting data.

**Generate code with context**: Request Python code that Ki can actually test and verify in its sandbox environment before providing it to you.

**Stay current with recent information**: Ki can search the web for the latest information, making it aware of recent developments that base models might not know about.

**Combine multiple capabilities**: Tasks requiring a mix of search, computation, reasoning, and synthesis benefit from Ki's ability to orchestrate different tools.

## Example prompts

### Travel Planning 
I'm planning a 5-day trip to Japan in April. Research the best areas to stay in Tokyo for first-time visitors, find average hotel prices, check what the weather will be like, and create a day-by-day itinerary, including must-see attractions and local restaurants.

### Home Improvement
I need to replace my water heater. Compare tankless vs. traditional tank water heaters for a family of four, including upfront costs, energy savings over 10 years, and installation requirements. Show me the math on break-even points.


### Health & Fitness
Create a beginner strength training program for me. Research proper form for basic exercises, generate a 3-day-per-week schedule, calculate my estimated calorie needs based on my stats, and create a simple meal plan with macros.

### Financial Planning
I have $10,000 to invest. Research current index fund options, compare their expense ratios and historical returns, explain the tax implications, and create a simple diversified portfolio recommendation with percentages.

### Home Maintenance
My electricity bill jumped 40% this month. Research common causes of sudden increases, calculate what my usage patterns mean in terms of cost, and provide a checklist of things to investigate in my home.

## Accessing Ki

To access Ki, open Assistant and click the model selector dropdown.
Under the Ki tab, you'll find three options: 
- <img src="./media/ki-quick.svg" alt="Ki Quick icon" style="display:inline; vertical-align:middle; width:24px; height:24px;" /> Ki Quick
- <img src="./media/ki.svg" alt="Ki Quick icon" style="display:inline; vertical-align:middle; width:24px; height:24px;" /> Ki
- <img src="./media/ki-research.svg" alt="Ki Quick icon" style="display:inline; vertical-align:middle; width:24px; height:24px;" /> Ki Research
