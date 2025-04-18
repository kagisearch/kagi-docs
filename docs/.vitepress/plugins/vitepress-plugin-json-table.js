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
                    // Process fields: Ensure key/label exist, add defaults for sortable and type
                    const processedFields = json.fields.map(field => {
                      // Basic validation for key and label existence
                      if (!field || typeof field.key !== 'string' || typeof field.label !== 'string') {
                         console.warn("[vitepress-plugin-json-table] Invalid field structure detected, skipping field:", field); // Log warning
                         return null; // Mark as invalid for filtering
                      }
                      return {
                        ...field,
                        // Ensure sortable defaults to true if not explicitly set to false
                        sortable: field.sortable !== false,
                        // Ensure type defaults to 'string' if not provided or invalid type
                        type: typeof field.type === 'string' ? field.type : 'string' // Includes 'number', 'size', 'duration', 'weight', 'yesno' etc.
                      };
                    }).filter(field => field !== null); // Remove invalid fields

                    // Check if any valid fields remain after processing
                    if (processedFields.length === 0 && json.fields.length > 0) {
                       return `<pre>Invalid JSON structure: No valid 'fields' found. Each field must be an object with 'key' and 'label' strings.</pre>`;
                    }
                     if (processedFields.length !== json.fields.length) {
                         console.warn("[vitepress-plugin-json-table] Some invalid field definitions were ignored."); // Log warning if some were filtered
                     }

                    // --- Prop Generation ---
                    // Use &apos; for single quotes within the attribute value
                    props += `:fields='${JSON.stringify(processedFields).replace(/'/g, '&apos;')}' `; // Pass processed fields
                    props += `:items='${JSON.stringify(json.items).replace(/'/g, '&apos;')}' `;

                    // Pass filter prop only if explicitly true
                    if (json.filter === true) {
                      props += `:filter='true' `; // Pass as boolean prop
                    }

                    // Add other top-level JSON properties as props if needed in the future
                    // Example: if (json.someOtherOption) { props += `:some-other-option='${JSON.stringify(json.someOtherOption)}'`; }

                    // Wrap the component for better styling control if needed
                    return `<div class='vp-json-table-wrapper not-prose overflow-x-auto'><SortableTable ${props.trim()}/></div>`;

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