/**
 * markdownItJsonTablePlugin
 * A markdown-it plugin that looks for code blocks labeled as "json:table"
 * and renders a <GenericTable> component with the parsed JSON as props.
 */
export function markdownItJsonTablePlugin(md) {
  // Capture the original fence renderer
  const defaultFenceRenderer = md.renderer.rules.fence ||
    function(tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };

  md.renderer.rules.fence = function(tokens, idx, options, env, self) {
    const token = tokens[idx];
    // Check if it's labeled as "json:table"
    const info = token.info.trim();
    if (info === 'json:table') {
      try {
        // Attempt to parse the code block content as JSON
        const tableData = JSON.parse(token.content.trim());

        // Return a string of HTML that includes the <GenericTable> component
        // with the JSON data passed as a prop.
        // You must ensure <GenericTable> is globally registered in VitePress.
        return `<GenericTable :tableData='${JSON.stringify(tableData)}' />`;
      } catch (error) {
        // If JSON parsing fails, fall back to default fence rendering
        console.error('Error parsing JSON for json:table:', error);
      }
    }

    return defaultFenceRenderer(tokens, idx, options, env, self);
  };
}

