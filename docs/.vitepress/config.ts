import { defineConfig } from 'vitepress'
import { SearchPlugin } from 'kagi-sidekick-vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Kagi's Docs",
    description: "Kagi Search Help",
    head: [
        ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
        ['link', { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }],
        ['meta', { name: "msapplication-TileColor", content: "#ffffff" }],
        ['meta', { name: "theme-color", content: "#ffffff" }],
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Kagi', link: '/kagi/' },
            { text: 'Orion', link: '/orion/' }
        ],

        sidebar: {
            '/': sidebarKagi(),
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
    vite: {
        resolve: {
            preserveSymlinks: true,
        },
        plugins: [SearchPlugin({
            origin: "https://sidekick.kagi.com"
        })]
    },
    ignoreDeadLinks: true,
    sitemap: {
        hostname: 'https://help.kagi.com'
    }
})

function sidebarKagi() {
    return [
        {
            text: 'About',
            items: [
                {
                    text: 'Company',
                    collapsed: true,
                    link: '/kagi/company/',
                    items: [
                        { text: 'About', link: '/kagi/company/' },
                        { text: 'Products', link: '/kagi/company/products' },
                        { text: 'History', link: '/kagi/company/history' },
                        { text: 'Assets', link: '/kagi/company/assets' },
                        {
                            text: 'Jobs', link: '/kagi/company/hiring-kagi',
                            collapsed: true,
                            items: [
                                { text: 'Jobs at Kagi Search', link: '/kagi/company/hiring-kagi' },
                                { text: 'Jobs at Orion Browser', link: '/kagi/company/hiring-orion' },
                            ]
                        },
                        { text: 'Open Source Support', link: '/kagi/company/donations' },
                        { text: 'Contact Us', link: '/kagi/company/contact' },
                    ]
                },
                {
                    text: 'Plans & Payment',
                    link: '/kagi/plans/plan-types',
                    collapsed: true,
                    items: [
                        { text: 'Plan Types', link: '/kagi/plans/plan-types' },
                        { text: 'Premium Plans', link: '/kagi/plans/premium-plan' },
                        { text: 'Ultimate Plan', link: '/kagi/plans/ultimate-plan' },
                        { text: 'Family Plan', link: '/kagi/plans/family-plan' },
                        { text: 'Team Plan', link: '/kagi/plans/team-plan' },
                        { text: 'Gift Kagi', link: '/kagi/plans/gift-kagi' },
                        { text: 'Payment Methods', link: '/kagi/plans/payment-methods' },
                    ]
                },
                {
                    text: 'Support and Community',
                    collapsed: true,
                    link: '/kagi/support-and-community/',
                    items: [
                        { text: 'Get Connected', link: '/kagi/support-and-community/' },
                        { text: 'Reporting a Bug', link: '/kagi/support-and-community/bug-reporting' },
                        { text: 'Email Support', link: '/kagi/support-and-community/email-support' },
                        { text: 'Share with Friends and Family', link: '/kagi/support-and-community/share-kagi' },
                    ]
                },
                {
                    text: 'Frequently Asked Questions',
                    collapsed: true,
                    link: '/kagi/faq/faq',
                    items: [
                        { text: 'General', link: '/kagi/faq/faq' },
                        { text: 'Sales Tax / VAT', link: '/kagi/faq/sales-tax-vat' },
                    ]
                },
                {
                    text: 'Contribute',
                    collapsed: true,
                    link: '/kagi/support-and-community/contribute',
                    items: [
                        { text: 'Translations', link: '/kagi/support-and-community/contribute_translations' },
                        { text: 'Open Source', link: '/kagi/support-and-community/open-source' },
                        { text: 'Contributors', link: '/kagi/support-and-community/contributors' },
                        { text: 'Kudos', link: '/kagi/support-and-community/kudos' },
                    ]
                },
                { text: 'Live Stats', link: '/kagi/support-and-community/stats' }
            ]
        },
        {
            text: 'Why Kagi',
            items: [
                { text: 'Why Pay for Search', link: '/kagi/why-kagi/why-pay-for-search' },
                { text: 'Say no to Ads', link: '/kagi/why-kagi/noads' },
                { text: 'Kagi vs. Others', link: '/kagi/why-kagi/kagi-vs-competition' },
                {
                    text: 'Privacy & Security', link: '/kagi/privacy/privacy-protection',
                    collapsed: true,
                    items: [
                        { text: 'Privacy Protection', link: '/kagi/privacy/privacy-protection' },
                        { text: 'Private Browser Sessions', link: '/kagi/privacy/private-browser-sessions' },
                        { text: 'Two Factor Authentication', link: '/kagi/privacy/two-factor-authentication' },
                        { text: 'Log in with QR Code', link: '/kagi/privacy/log-in-with-qr-code' },
                        { text: 'Content Policy', link: '/kagi/privacy/content-policy' },
                        { text: 'Security', link: '/kagi/privacy/security' },
                        { text: 'Legal Safe Harbor', link: '/kagi/privacy/safe-harbor' },
                    ]
                },
                {
                    text: 'Results', link: '/kagi/search-details/search-sources',
                    collapsed: true,
                    items: [
                        { text: 'Sources', link: '/kagi/search-details/search-sources' },
                        { text: 'Quality', link: '/kagi/search-details/search-quality' },
                        { text: 'Speed', link: '/kagi/search-details/search-speed' },
                        { text: 'Small Web in Search Results', link: '/kagi/search-details/small-web-in-search-results' },
                    ]
                },
                { text: 'AI Philosophy', link: '/kagi/why-kagi/ai-philosophy' },
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
                        { text: 'Quick Start', link: '/kagi/getting-started/' },
                        { text: 'Set Kagi as Your Default Search Engine', link: '/kagi/getting-started/setting-default' },
                        { text: 'Application Integrations', link: '/kagi/getting-started/application-integrations' },
                    ]
                },
                {
                    text: 'Search Features',
                    collapsed: true,
                    link: '/kagi/features/website-info-personalized-results',
                    items: [
                        { text: 'Website Info & Personalized Results', link: '/kagi/features/website-info-personalized-results' },
                        { text: 'Lenses', link: '/kagi/features/lenses' },
                        { text: 'Keyboard Shortcuts', link: '/kagi/features/search-operators' },
                        { text: 'Bangs', link: '/kagi/features/bangs' },
                        { text: 'Sharing Results', link: '/kagi/features/share-results' },
                        { text: 'Search Shortcuts', link: '/kagi/features/search-shortcuts' },
                        { text: 'Filtering Results', link: '/kagi/features/filtering-results' },
                        { text: 'Customizing Kagi CSS', link: '/kagi/features/custom-css' },
                        { text: 'Turning Off Animations', link: '/kagi/features/turning-off-animations' },
                        { text: 'Redirects', link: '/kagi/features/redirects' },
                        { text: 'Code Searches', link: '/kagi/features/code' },
                        { text: 'Verbatim Search', link: '/kagi/features/verbatim' },
                        { text: 'Kagi Maps', link: '/kagi/features/maps' },
                        { text: 'Widgets', link: '/kagi/features/widgets' },
                        { text: 'Snaps', link: '/kagi/features/snaps' },
                        { text: 'Exclude AI Images', link: '/kagi/features/exclude-ai-images' },
                    ]
                },
                {
                    text: 'LLM Features', link: '/kagi/ai/kagi-ai',
                    collapsed: true,
                    items: [
                        { text: 'The Assistant', link: '/kagi/ai/assistant' },
                        { text: 'Custom Assistants', link: '/kagi/ai/custom-assistants' },
                        { text: 'Quick Answer', link: '/kagi/ai/quick-answer' },
                        { text: 'Summarize Page', link: '/kagi/ai/summarize-page' },
                        { text: 'Kagi Translate', link: '/kagi/ai/translate' },
                        { text: 'Discuss Document', link: '/kagi/ai/ask-questions' },
                        { text: 'Kagi LLM Benchmarking Project', link: '/kagi/ai/llm-benchmark' },
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
                        { text: 'AI', link: '/kagi/settings/ai' },
                        { text: 'Assistant', link: '/kagi/settings/assistant' },
                        { text: 'Lenses', link: '/kagi/settings/lenses' },
                        { text: 'Personalized Results', link: '/kagi/settings/personalized-results' },
                        { text: 'Billing', link: '/kagi/settings/billing' },
                        { text: 'Advanced', link: '/kagi/settings/advanced' },
                        { text: 'Account', link: '/kagi/settings/account' },
                        { text: 'Delete Your Account', link: '/kagi/plans/delete-account' },
                    ]
                },

                {
                    text: 'Community Add-ons', link: '/kagi/community-addons/',
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
                        { text: 'Universal Summarizer API', link: '/kagi/api/summarizer' },
                        { text: 'FastGPT API', link: '/kagi/api/fastgpt' },
                        { text: 'Search API', link: '/kagi/api/search' },
                        { text: 'Enrichment API', link: '/kagi/api/enrich' },
                        { text: 'Small Web RSS Feed', link: '/kagi/api/smallweb' },
                    ],
                },
                { text: 'Kagi Sidekick', link: '/kagi/sidekick/' },
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
                    link: '/orion/company/',
                    items: [
                        { text: 'About', link: '/orion/company/' },
                        { text: 'Products', link: '/orion/company/products' },
                        { text: 'History', link: '/orion/company/history' },
                        { text: 'Name', link: '/orion/company/meaning' },
                        { text: 'Mascot', link: '/orion/company/mascot' },
                        { text: 'Logo', link: '/orion/company/logo' },
                        { text: 'Assets', link: '/orion/company/assets' },
                        {
                            text: 'Jobs', link: '/orion/company/hiring-kagi',
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
                        { text: 'Product Roadmap & Feedback Forum', link: '/orion/support-and-community/roadmap-feedback-forum' },
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
                    text: 'Why Orion?',
                    collapsed: true,
                    link: '/orion/why-orion/orion-vs-safari',
                    items: [
                        { text: 'Orion vs. Safari', link: '/orion/why-orion/orion-vs-safari' },
                        { text: 'Orion vs. Chrome, Firefox, & Others', link: '/orion/why-orion/kagi-vs-others' },
                        { text: 'Speed', link: '/orion/why-orion/orion-speed' },
                        { text: 'Memory Usage', link: '/orion/why-orion/memory-usage' },
                    ]
                },
                {
                    text: 'Getting Started',
                    collapsed: true,
                    link: '/orion/getting-started/quick-start',
                    items: [
                        { text: 'Quick Start', link: '/orion/getting-started/quick-start' },
                        { text: 'Installing Orion', link: '/orion/getting-started/installing-orion' },
                        { text: 'Importing Data From Other Browsers', link: '/orion/getting-started/importing' },
                        { text: 'Default Search Engine', link: '/orion/getting-started/search-engine' },
                    ]
                },
                {
                    text: 'Troubleshooting Issues',
                    collapsed: true,
                    link: '/orion/support-and-community/troubleshooting/troubleshooting-extension-issues',
                    items: [
                        { text: 'Troubleshooting Extension Issues', link: '/orion/support-and-community/troubleshooting/troubleshooting-extension-issues' },
                        { text: 'Troubleshooting Webpage Issues', link: '/orion/support-and-community/troubleshooting/troubleshooting-webpage-issues' },
                        { text: 'Troubleshooting Syncing Data Issues', link: '/orion/support-and-community/troubleshooting/troubleshooting-syncing-data-issues' },
                        { text: 'Troubleshooting FastMail Issues', link: '/orion/support-and-community/troubleshooting/troubleshooting-fastmail-issues' },
                        { text: 'Restoring Bookmarks, Reading List, etc.', link: '/orion/support-and-community/troubleshooting/restoring_bookmarks' },
                        { text: 'Reporting a bug', link: '/orion/support-and-community/troubleshooting/bug-reporting' },
                    ]
                },
                { text: 'Orion+', link: '/orion/orion-plus/orion-plus' },
                {
                    text: 'Features',
                    collapsed: true,
                    link: '/orion/features/compact-tabs',
                    items: [
                        { text: 'Compact Tabs', link: '/orion/features/compact-tabs' },
                        { text: 'Link Previews', link: '/orion/features/link-previews' },
                        { text: 'RSS Feed Detection', link: '/orion/features/rss-feed-detection' },
                        { text: 'Automatic Extension Updates', link: '/orion/features/automatic-extension-updates' },
                        { text: '120 fps Page Rendering', link: '/orion/features/120-fps-page-rendering' },
                        { text: 'Remove Trackers from Copied Links', link: '/orion/features/remove-trackers-from-copied-links' },
                        { text: 'Website Settings', link: '/orion/features/website-settings' },
                        { text: 'Password Manager', link: '/orion/features/password-management' },
                        { text: 'Syncing Data', link: '/orion/features/syncing-data' },
                        { text: 'Reader Mode', link: '/orion/features/reader-mode' },
                        { text: 'Vertical Tabs', link: '/orion/features/vertical-tabs' },
                        { text: 'Tab Groups', link: '/orion/features/tab-groups' },
                        { text: 'Press and Hold Shortcuts', link: '/orion/features/press-and-hold-shortcuts' },
                        { text: 'Profiles', link: '/orion/features/profiles' },
                        { text: 'Quick Searches', link: '/orion/features/quick-searches' },
                        { text: 'Viewing Web Archives', link: '/orion/features/web-archives' },
                        { text: 'Picture-in-Picture Videos', link: '/orion/features/pip' },
                        { text: 'Focus Mode', link: '/orion/features/focus-mode' },
                        { text: 'Low Power Mode', link: '/orion/features/low-power-mode' },
                        { text: 'Allow Copy Paste', link: '/orion/features/allow-copy-paste' },
                        { text: 'Edit Text on Page', link: '/orion/features/edit-text-on-page' },
                        { text: 'Float on Top', link: '/orion/features/float-on-top' },
                        { text: 'Show Console Errors', link: '/orion/features/show-errors' },
                        { text: 'Block Auto-Play', link: '/orion/features/block-auto-play' },
                        { text: 'Notes', link: '/orion/features/notes' },
                        { text: 'Reading List', link: '/orion/features/reading-list' },
                        { text: 'Privacy Report', link: '/orion/features/privacy-report' },
                        { text: 'Web Apps', link: '/orion/features/web-apps' },
                        { text: 'Programmable Buttons', link: '/orion/features/programmable-buttons' },
                        { text: 'Custom Blocklists', link: '/orion/features/custom-blocklists' },
                        { text: 'Page Tweaks', link: '/orion/features/page-tweaks' },
                        { text: 'Dynamic Window Color', link: '/orion/features/dynamic-window-color' },
                        { text: 'Summarize Page', link: '/orion/features/summarize-page' },
                        { text: 'Copy Link to Selection', link: '/orion/features/copy-link-to-selection' },
                    ]
                },
                {
                    text: 'Browser Extensions',
                    collapsed: true,
                    link: '/orion/browser-extensions/macos-extensions',
                    items: [
                        { text: 'macOS Extensions', link: '/orion/browser-extensions/macos-extensions' },
                        { text: 'uBlock Origin on macOS', link: '/orion/browser-extensions/ublock-origin' },
                        { text: 'iOS & iPadOS Extensions', link: '/orion/browser-extensions/ios-ipados-extensions' },
                        { text: '1Password', link: '/orion/browser-extensions/1password' },
                    ]
                },
                {
                    text: 'Privacy & Security',
                    collapsed: true,
                    link: '/orion/privacy-and-security/ad-tracking-blocking',
                    items: [
                        { text: 'Configure Ad & Tracking Blocking', link: '/orion/privacy-and-security/ad-tracking-blocking' },
                        { text: 'Respecting Privacy', link: '/orion/privacy-and-security/respecting-privacy' },
                        { text: 'Protecting Privacy', link: '/orion/privacy-and-security/protecting-privacy' },
                        { text: 'Preventing Fingerprinting', link: '/orion/privacy-and-security/preventing-fingerprinting' },
                    ]
                },


                { text: 'Frequently Asked Questions', link: '/orion/faq/faq' },
                { text: 'Technical Information', link: '/orion/misc/technical' },
                { text: 'Live stats', link: '/orion/misc/stats' },
            ]
        },
        {
            text: 'Credits',
            items: [
                { text: 'Contributors', link: '/orion/misc/contributors' },
                { text: 'Kudos', link: '/orion/misc/kudos' },
            ]
        }
    ]
}
