# Custom Assistants

The Assistant’s Custom Assistants allow you to create specialized LLM personalities tailored to your specific needs, preferences, and use cases.

## Creating a Custom Assistant

1. Navigate to the [Custom Assistants](https://kagi.com/settings/?p=assistant) page (Settings > Assistant > Custom Assistants)
2. Click **Add New**.
3. Configure your assistant with these settings:

- **Assistant Name**: Give your assistant a memorable name
- **Custom Bang Name**: Create a shortcut to quickly access this assistant
- **Internet Access**: Toggle to allow access to Kagi Search results
- **Lens**: Choose a specific lens to focus searches on particular domains
- **Personalized Results**: Enable to apply your search customizations
- **Model**: Select your preferred LLM model based on:
	- Speed
	- Quality
	- Cost
	- Context Window
- **Response Instructions**: Define how your assistant should interact (1500 characters max)

## Using Custom Assistants

Select your Custom Assistant from the model-selection dropdown menu below the prompt bar to begin interaction.

## Example Configurations

Here are a few example configurations you can use to get started. You can also visit [Anthropic’s Prompt Library](https://docs.anthropic.com/en/prompt-library/library) for more useful prompts.

### Professional Writer Assistant
```markdown
Name: Writing Pro
Bang: !write
Internet Access: Enabled (for current writing trends and examples)
Lens: Entire Internet
Instructions: Respond in a professional tone with clear, concise language. Focus on grammar, style, and clarity. Provide constructive feedback on writing samples. When appropriate, suggest improvements while maintaining the original message's intent.
```

### Coding Mentor
```markdown
Name: Code Guide
Bang: !code
Internet Access: Enabled (for documentation and best practices)
Lens: Programming
Instructions: Explain programming concepts clearly with practical examples. Use best practices and modern conventions. Include comments in code examples. Focus on readability and maintainability. Highlight potential pitfalls and optimization opportunities.
```

### Academic Researcher
```markdown
Name: Research Aid
Bang: !research
Internet Access: Enabled (for current research and papers)
Lens: Academic
Instructions: Provide comprehensive, academic-style responses with clear citations. Focus on peer-reviewed sources when available. Present balanced viewpoints on complex topics. Highlight key findings and methodologies.
```

### Recipe Helper
```markdown
Name: Chef Assistant
Bang: !chef
Internet Access: Enabled (for recipes and cooking techniques)
Lens: Recipes
Instructions: Provide clear, step-by-step cooking instructions. Focus on practical cooking tips, ingredient substitutions, and technique explanations. Include serving sizes and preparation times.
```

### News Analyst
```markdown
Name: News Guide
Bang: !news
Internet Access: Enabled (for current events)
Lens: World News
Instructions: Analyze current events with balanced perspective. Provide context for news developments. Focus on factual reporting and multiple viewpoints. Summarize key points clearly.
```

## Tips for Effective Instructions

- Be specific about desired tone and style
- Include relevant expertise areas
- Specify preferred response format
- Use positive instructions ("provide examples" rather than "don't be vague")
- Consider including:
  - Preferred citation style
  - Response length preferences
  - Specific areas of focus
  - Format requirements
  - Language level (technical, casual, academic)

## Best Practices

1. Test your assistant with various prompts
2. Refine instructions based on responses
3. Create different assistants for distinct use cases
4. Use clear, actionable language in instructions
5. Update settings as your needs change

Remember that well-crafted instructions lead to more accurate and useful responses. Take time to think about your specific needs and how to communicate them effectively.
