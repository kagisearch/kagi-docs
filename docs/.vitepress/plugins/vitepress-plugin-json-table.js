export function vitepressPluginJsonTable() {
  return {
    name: 'vitepress-json-table',
    config() {
      return {
        markdown: {
          config(md) {
            const defaultFence = md.renderer.rules.fence || ((tokens, idx, options, env, self) => {
              // Basic default renderer escape
              return `<pre><code class="${options.langPrefix}${tokens[idx].info.trim().split(' ')[0]}">${md.utils.escapeHtml(tokens[idx].content)}</code></pre>`
            });

            md.renderer.rules.fence = (tokens, idx, options, env, self) => {
              const token = tokens[idx];
              const info = token.info.trim();

              if (info === 'json:table') {
                try {
                  const json = JSON.parse(token.content);
                  let props = '';

                  if (json && typeof json === 'object' && json.fields && Array.isArray(json.fields) && json.items && Array.isArray(json.items)) {
                    // Ensure fields have key and label
                    if (!json.fields.every(field => field && typeof field.key === 'string' && typeof field.label === 'string')) {
                       return `<pre>Invalid JSON structure: Each item in 'fields' array must be an object with 'key' and 'label' strings.</pre>`;
                    }

                    // --- Prop Generation ---
                    // Use &apos; for single quotes within the attribute value
                    props += `:fields='${JSON.stringify(json.fields).replace(/'/g, '&apos;')}' `;
                    props += `:items='${JSON.stringify(json.items).replace(/'/g, '&apos;')}' `;

                    // Pass filter prop only if explicitly true
                    if (json.filter === true) {
                      props += `:filter='true' `; // Pass as boolean prop
                    }

                    return `<div class='vp-json-table-wrapper overflow-x-auto'><SortableTable ${props.trim()}/></div>`;

                  } else {
                    // --- Invalid Structure Error ---
                    return `<pre>Invalid JSON structure: JSON must be an object containing 'fields' (array) and 'items' (array).</pre>`;
                  }
                } catch (e) {
                  // --- Invalid JSON Error ---
                  return `<pre>Invalid JSON format: ${e.message}</pre>`;
                }
              }

              // Fallback to default fence renderer
              return defaultFence(tokens, idx, options, env, self);
            }
          }
        }
      }
    }
  }
}