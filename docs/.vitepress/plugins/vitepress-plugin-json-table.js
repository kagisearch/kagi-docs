import fs from 'fs'

export function vitepressPluginJsonTable() {
  return {
    name: 'vitepress-json-table',
    config() {
      return {
        markdown: {
          config(md) {
            const defaultFence = md.renderer.rules.fence || ((tokens, idx) => tokens[idx].content)

            md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
              const token = tokens[idx]
              const info = token.info.trim()

              if (info === 'json:table') {
                try {
                  const json = JSON.parse(token.content)
                  let props = ''

                  if (json.fields && json.items) {
                    props += `:fields='${JSON.stringify(json.fields).replace(/'/g, '&#39;')}' `
                    props += `:items='${JSON.stringify(json.items).replace(/'/g, '&#39;')}' `
                    if (json.filter === true) {  // Check if filter is explicitly true
                      props += `:filter='true' `
                    }
                  } else {
                    props = `:data='${JSON.stringify(json).replace(/'/g, '&#39;')}'`
                  }

                  return `<div class='overflow-x-auto'><SortableTable ${props}/></div>`
                } catch (e) {
                  return `<pre>Invalid JSON: ${e.message}</pre>`
                }
              }

              return defaultFence(tokens, idx, options, env, slf)
            }
          }
        }
      }
    }
  }
}
