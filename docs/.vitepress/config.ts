import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kagi's Docs",
  description: "Kagi Search Help",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Kagi', link: '/kagi/' },
      { text: 'Orion', link: '/orion/' }
    ],

    sidebar: {
      '/kagi/': sidebarKagi(),
      '/common/': sidebarKagi(),
      '/orion/': sidebarOrion()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kagisearch/kagi-docs' }
    ],
    search: {
      // provider: 'local'
      provider: 'algolia',
      options: {
        // https://github.com/vuejs/vitepress/blob/main/types/docsearch.d.ts
        /*
         * Docsearch
         */
        // appId: '9I636LYHG7',
        // apiKey: '9d3f84a3dd65cd4a34dc0937e57a54be',
        // indexName: 'kagi',
          //
        /*
         * GROW Plan
        */
        appId: 'KX359CJ2OY',
        apiKey: '9cfd923a26bff9dafd7844f20c71944c',
        indexName: 'kagi-docs',
        translations: {
            modal: {
                footer: {
                    searchByText: '',
                }
            }
        }
      }
    },
    editLink: {
      pattern: 'https://github.com/kagisearch/kagi-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  },
  rewrites: {},
  ignoreDeadLinks: true
})

function sidebarKagi() {
  return [
      {
          text: 'About',
          items: [
            {
              text: 'Company',
              collapsed: true,
              link: '/kagi/company/index',
              items: [
                { text: 'About', link: '/kagi/company/index' },
                { text: 'Say no to Ads', link: '/kagi/company/noads' },
                { text: 'Product', link: '/kagi/company/products' },
                { text: 'History', link: '/kagi/company/history' },
                { text: 'Name', link: '/kagi/company/meaning',
                    collapsed: true,
                    items: [
                        { text: 'Mascot', link: '/kagi/company/mascot' },
                        { text: 'Logo', link: '/kagi/company/logo' },
                    ]
                },
                { text: 'Assets', link: '/kagi/company/assets' },
                { text: 'Jobs', link: '/kagi/company/hiring-kagi',
                    collapsed: true,
                    items: [
                        { text: 'Work on Kagi Search', link: '/kagi/company/hiring-kagi' },
                        { text: 'Work on Orion Browser', link: '/kagi/company/hiring-orion' },
                    ]
                },
                { text: 'Donations', link: '/kagi/company/donations' },
                { text: 'Contact Us', link: '/kagi/company/contact' },
              ]
            },
            {
                text: 'Support and Community',
                collapsed: true,
                link: '/kagi/support-and-community/index',
                items: [
                    { text: 'Roadmap & Feedback Forum', link: '/kagi/support-and-community/roadmap_feedback' },
                    { text: 'Public Beta', link: '/kagi/getting-started/public-beta' },
                    { text: 'Reporting a Bug', link: '/kagi/support-and-community/bug-reporting' },
                    { text: 'Email Support', link: '/kagi/support-and-community/email-support' },
                    { text: 'Discord Server', link: '/kagi/support-and-community/discord-server' },
                    { text: 'Blog', link: '/kagi/support-and-community/blog' },
                    { text: 'Share with Friends and Family', link: '/kagi/support-and-community/share-kagi' },
                ]
            },
            {
                text: 'Contribute',
                collapsed: true,
                link: '/kagi/support-and-community/contribute',
                items: [
                    { text: 'Translations', link: '/kagi/support-and-community/contribute_translations' },
                    { text: 'Open Source', link: '/kagi/support-and-community/open-source' },
                ]
            }
          ]
      },
      {
          text: 'User Guide',
          items: [
            {
                text: 'Getting Started',
                link: '/kagi/getting-started/',
                collapsed: true,
                items: [
                    { text: 'Quick Start', link: '/kagi/getting-started' },
                    { text: 'Frequently Asked Questions', link: '/kagi/getting-started/faqs' },
                    { text: 'Set Kagi as Your Default Search Engine', link: '/kagi/getting-started/setting-default' },
                    { text: 'Application Integrations', link: '/kagi/getting-started/application-integrations' },
                ]
            },
            {
                text: 'Plans & Payment',
                link: '/kagi/plans/plan-types',
                collapsed: true,
                items: [
                    { text: 'Plan Types', link: '/kagi/plans/plan-types' },
                    { text: 'Why Pay for Search', link: '/kagi/plans/why-pay-for-search' },
                    { text: 'Pick The Plan', link: '/kagi/plans/pick-the-plan' },
                    { text: 'Premium Plans', link: '/kagi/plans/premium-plan' },
                    { text: 'Ultimate Plan', link: '/kagi/plans/ultimate-plan' },
                    { text: 'Family Plan', link: '/kagi/plans/family-plan' },
                    { text: 'Gift Kagi', link: '/kagi/plans/gift-kagi' },
                ]
            },
            {
                text: 'Features',
                collapsed: true,
                link: '/kagi/features/search-operators',
                items: [
                    { text: 'Search Operators', link: '/kagi/features/search-operators' },
                    { text: 'Bangs', link: '/kagi/features/bangs' },
                    { text: 'Sharing Results', link: '/kagi/features/share-results' },
                    { text: 'Shopping Searches', link: '/kagi/features/shopping',
                        collapsed: true,
                        items: [
                            { text: 'Search Shortcuts', link: '/kagi/features/search-shortcuts' },
                        ]
                    },
                    { text: 'Lenses', link: '/kagi/features/lenses'},
                    { text: 'Website Info & Personalized Results', link: '/kagi/features/website-info-personalized-results' },
                    { text: 'Filtering Results', link: '/kagi/features/filtering-results' },
                    { text: 'Customizing Kagi CSS', link: '/kagi/features/custom-css' },
                    { text: 'Turning Off Animations', link: '/kagi/features/turning-off-animations' },
                    { text: 'Redirects', link: '/kagi/features/redirects' },
                    { text: 'Code Searches', link: '/kagi/features/code' },
                    { text: 'Verbatim Search', link: '/kagi/features/verbatim' },
                ]
            },
            {
                text: 'AI', link: '/kagi/ai/kagi-ai',
                collapsed: true,
                items: [
                    { text: 'Summarize Results', link: '/kagi/ai/summarize-results' },
                    { text: 'Summarize Page', link: '/kagi/ai/summarize-page' },
                    { text: 'Discuss', link: '/kagi/ai/ask-questions' },
                    { text: 'AI Usage Pricing', link: '/kagi/ai/ai-usage-pricing' },
                ]
            },
            {
                text: 'Results', link: '/kagi/search-details/search-sources',
                collapsed: true,
                items: [
                    { text: 'Sources', link: '/kagi/search-details/search-sources' },
                    { text: 'Quality', link: '/kagi/search-details/search-quality' },
                    { text: 'Speed', link: '/kagi/search-details/search-speed' },
                ]
            },
            {
                text: 'Privacy & Security', link: '/kagi/privacy/privacy-protection',
                collapsed: true,
                items: [
                    { text: 'Privacy Protection', link: '/kagi/privacy/privacy-protection' },
                    { text: 'Private Browser Sessions', link: '/kagi/privacy/private-browser-sessions' },
                    { text: 'Security', link: '/kagi/privacy/security' },
                ]
            },
            {
                text: 'Settings',
                collapsed: true,
                link: '/kagi/settings/accessing',
                items: [
                    { text: 'Accessing Settings', link: '/kagi/settings/accessing' },
                    { text: 'General', link: '/kagi/settings/general' },
                    { text: 'Appearance', link: '/kagi/settings/appearance' },
                    { text: 'Search', link: '/kagi/settings/search' },
                    { text: 'Privacy', link: '/kagi/settings/privacy' },
                    { text: 'Lenses & Personalized Results', link: '/kagi/settings/lenses-and-personalized-results' },
                    { text: 'Billing', link: '/kagi/settings/billing' },
                    { text: 'Advanced', link: '/kagi/settings/advanced' },
                    { text: 'Account', link: '/kagi/settings/account' },
                    { text: 'Delete Your Account', link: '/kagi/plans/delete-account' },
                ]
            },
            {
                text: 'Compare Kagi', link: '/kagi/why-kagi/kagi-vs-competition',
                collapsed: true,
                items: [
                    { text: 'Kagi vs. Google', link: '/kagi/why-kagi/kagi-vs-google' },
                    { text: 'Kagi vs. DuckDuckGo', link: '/kagi/why-kagi/kagi-vs-duckduckgo' },
                    { text: 'Kagi vs. Brave Search', link: '/kagi/why-kagi/kagi-vs-brave' },
                ]

            },
            {
                text: 'Community Addons', link: '/kagi/community-addons/index',
            }
          ]
      },
      {
          text: 'Developers',
          items: [
              {
                  text: 'API', link: '/kagi/api/overview',
                  collapsed: true,
                  items: [
                    {
                        text: 'Introduction', link: '/kagi/api/overview',
                        collapsed: true,
                        items: [
                            { text: 'API Version', link: '/kagi/api/intro/api-version' },
                            { text: 'Authentication', link: '/kagi/api/intro/auth' },
                            { text: 'Base API URL', link: '/kagi/api/intro/api-url' },
                            { text: 'Response Format', link: '/kagi/api/intro/response-format' },
                            { text: 'Image Proxy URLs', link: '/kagi/api/intro/image-proxy-urls' },
                        ]
                    },
                    { text: 'Universal Summarizer API', link: '/kagi/api/summarizer'},
                    { text: 'FastGPT API', link: '/kagi/api/fastgpt'},
                    { text: 'Search API', link: '/kagi/api/search'},
                    { text: 'Enrichment API', link: '/kagi/api/enrich'},
                  ]
              }

          ]
      },
      {
          text: 'Credit',
          items: [
              { text: 'Contributors', link: '/kagi/misc/contributors' },
              { text: 'Kudos', link: '/kagi/misc/kudos' },
          ]
      }
  ]
}

function sidebarOrion() {
  return [
    {
        text: 'About',
        items: [
            {
              text: 'Company',
              collapsed: true,
              link: '/orion/company/index',
              items: [
                { text: 'About', link: '/orion/company/index' },
                { text: 'Products', link: '/orion/company/products' },
                { text: 'History', link: '/orion/company/history' },
                { text: 'Name', link: '/orion/company/meaning' },
                { text: 'Mascot', link: '/orion/company/mascot' },
                { text: 'Logo', link: '/orion/company/logo' },
                { text: 'Assets', link: '/orion/company/assets' },
                { text: 'Jobs', link: '/orion/company/hiring-kagi',
                    collapsed: true,
                    items: [
                        { text: 'Work on Kagi Search', link: '/orion/company/hiring-kagi' },
                        { text: 'Work on Orion Browser', link: '/orion/company/hiring-orion' },
                    ]
                },
                { text: 'Donations', link: '/orion/company/donations' },
                { text: 'Contact us', link: '/orion/company/contact' },
              ]
            },
            {
                text: 'Support & Community', link: '/orion/support-and-community/',
                collapsed: true,
                items: [
                    { text: 'Getting help and contributing', link: '/orion/support-and-community/' },
                    { text: 'Orion is in Public Beta', link: '/orion/getting-started/public-beta' },
                    { text: 'Supported OS Versions', link: '/orion/support-and-community/os-versions' },
                    { text: 'Product Roadmap & Feedback Forum', link: '/orion/support-and-community/roadmap-feedback-forum',
                        collapsed: true,
                        items: [
                            { text: 'Reporting a bug', link: '/orion/support-and-community/bug-reporting' },
                        ]
                    },
                    { text: 'Discord Server', link: '/orion/support-and-community/discord-server' },
                    { text: 'Email Support', link: '/orion/support-and-community/email-support' },
                    { text: 'macOS Keyboard Shortcuts', link: '/orion/support-and-community/keyboard-shortcuts' },
                ]
            },
            {
                text: 'Contribute',
                collapsed: true,
                link: '/orion/support-and-community/contribute',
                items: [
                    { text: 'Feedback', link: '/orion/support-and-community/contribute' },
                    { text: 'Documentation', link: '/orion/support-and-community/contribute_documentation' },
                    { text: 'Translations', link: '/orion/support-and-community/contribute_translations' },
                ]
            },
        ]
    },
    {
        text: 'User Guide',
        items: [
            {
                text: 'Getting Started',
                collapsed: true,
                link: '/orion/getting-started/quick-start',
                items: [
                    { text: 'Quick Start', link: '/orion/getting-started/quick-start' },
                    { text: 'Installing Orion', link: '/orion/getting-started/installing-orion' },
                    { text: 'Importing Data From Other Browsers', link: '/orion/getting-started/importing' },
                    { text: 'Default Search Engine', link: '/orion/support-and-community/troubleshooting-webpage-issues' },
                    { text: 'Troubleshooting Extension Issues', link: '/orion/support-and-community/troubleshooting-extension-issues' },
                ]
            },
            { text: 'Orion+', link: '/orion/orion-plus/orion-plus'},
            {
                text: 'Features',
                collapsed: true,
                link: '/orion/features/website-settings',
                items: [
                    { text: 'Website Settings', link: '/orion/features/website-settings'},
                    { text: 'Password Manager', link: '/orion/features/password-management'},
                    { text: 'Syncing Data', link: '/orion/features/syncing-data'},
                    { text: 'Reader Mode', link: '/orion/features/reader-mode'},
                    { text: 'Vertical Tabs', link: '/orion/features/vertical-tabs'},
                    { text: 'Tab Groups', link: '/orion/features/tab-groups'},
                    { text: 'Profiles', link: '/orion/features/profiles'},
                    { text: 'Quick Searches', link: '/orion/features/quick-searches'},
                    { text: 'Viewing Web Archives', link: '/orion/features/web-archives'},
                    { text: 'Picture-in-Picture Videos', link: '/orion/features/pip'},
                    { text: 'Focus Mode', link: '/orion/features/focus-mode'},
                    { text: 'Low Power Mode', link: '/orion/features/low-power-mode'},
                    { text: 'Allow Copy Paste', link: '/orion/features/allow-copy-paste'},
                    { text: 'Edit Text on Page', link: '/orion/features/edit-text-on-page'},
                    { text: 'Float on Top', link: '/orion/features/float-on-top'},
                    { text: 'Show Console Errors', link: '/orion/features/show-errors'},
                    { text: 'Block Auto-Play', link: '/orion/features/block-auto-play'},
                    { text: 'Notes', link: '/orion/features/notes'},
                    { text: 'Reading List', link: '/orion/features/reading-list'},
                ]
            },
            {
                text: 'Browser Extensions',
                collapsed: true,
                link: '/orion/browser-extensions/macos-extensions',
                items: [
                    { text: 'macOS Extensions', link: '/orion/browser-extensions/macos-extensions'},
                    { text: 'uBlock Origin on macOS', link: '/orion/browser-extensions/ublock-origin'},
                    { text: 'iOS & iPadOS Extensions', link: '/orion/browser-extensions/ios-ipados-extensions'},
                    { text: '1Password', link: '/orion/browser-extensions/1password'},
                ]
            },
            {
                text: 'Privacy & Security',
                collapsed: true,
                link: '/orion/privacy-and-security/ad-tracking-blocking',
                items: [
                    { text: 'Configure Ad & Tracking Blocking', link: '/orion/privacy-and-security/ad-tracking-blocking'},
                    { text: 'Respecting Privacy', link: '/orion/privacy-and-security/respecting-privacy'},
                    { text: 'Protecting Privacy', link: '/orion/privacy-and-security/protecting-privacy'},
                    { text: 'Preventing Fingerprinting', link: '/orion/privacy-and-security/preventing-fingerprinting'},
                ]
            },
            {
                text: 'Why Orion?',
                collapsed: true,
                link: '/orion/why-orion/orion-vs-safari',
                items: [
                    { text: 'Orion vs. Safari', link: '/orion/why-orion/orion-vs-safari'},
                    { text: 'Orion vs. Chrome, Firefox, & Others', link: '/orion/why-orion/kagi-vs-others'},
                    { text: 'Speed', link: '/orion/why-orion/orion-speed'},
                    { text: 'Memory Usage', link: '/orion/why-orion/memory-usage'},
                ]
            },

            { text: 'Frequently Asked Questions', link: '/orion/faq/faq'},
            { text: 'Technical Information', link: '/orion/misc/technical'},
            { text: 'Live stats', link: '/orion/misc/stats'},
        ]
    },
    {
        text: 'Credits',
        items: [
            { text: 'Contributors', link: '/orion/misc/contributors'},
            { text: 'Kudos', link: '/orion/misc/kudos'},
        ]
    }
  ]
}
