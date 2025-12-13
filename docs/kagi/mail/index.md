# Kagi Mail FAQ

## General Information & Availability

### What is Kagi Mail?
Kagi Mail is an upcoming premium email service developed by Kagi. It aims to provide a high-quality, feature-rich email experience that integrates with the Kagi ecosystem. The product philosophy focuses on craftsmanship, speed, user agency, and open standards, avoiding the "race to the bottom" found in free, ad-supported services.

### When will it be released?
There is no release date yet, beta access will be sent in waves:
*   **Current Status:** It is currently in an Alpha testing phase available to [**Distinguished Members**](../support-and-community/community-roles.html#distinguished-member) of the Kagi community.
*  The next phase will expand to include **Contributors** and users who have expressed interest via DM to (`Eric` or `Boris`). No dates known

### What is the pricing model?
Pricing has not been finalized.
*   **Philosophy:** Kagi is not competing with "free" or ad-supported models. 

---

## Technical Architecture

### What is the technology stack?
*   **Backend:** Kagi Mail leverages `Stalwart`, an open-source mail server written in Rust.
*   **Frontend:** The web client is built in-house by Kagi.

### Which protocols constitute the backbone of the service?
Kagi Mail supports open email standards:
*   `IMAP` (Internet Message Access Protocol)
*   `SMTP` (Simple Mail Transfer Protocol)
*   `JMAP` (JSON Meta Application Protocol) — utilized heavily by their web client.

### Does it replace Google Drive or Calendar?
*   **Calendar/Contacts:** These are on the roadmap using standard protocols (`CalDAV` and `CardDAV`). Detailed collaboration features are secondary to stabilizing the core mail experience.
*   **Storage:** The backend supports file storage via `WebDAV`, but a full "Kagi Drive" interface to compete with Google Drive is not planned for launch.

---

## User Interface & Experience

### Why does the web interface look like a text terminal?
Kagi Mail employs a "Pseudo-TUI" (Text-based User Interface) aesthetic. It is designed for maximum speed and is heavily keyboard-centric, catering to power users who like Vim-style workflows — but it is also designed to be fully usable with just a mouse.
*   **Navigation:** It utilizes **Vim-style keybindings** (e.g., `j`/`k` to move up and down, `g` $\rightarrow$ `i` to go to Inbox) for those who prefer keyboard shortcuts.
*   **Command Bar:** Actions can be executed via a command bar accessed by typing `:`, such as `:logout`, `:label`, or `:block`, or by using on-screen controls.
*   **Customization:** Users can adjust fonts (Sans/Serif/Monospace) and themes (Light/Dark/System) if the terminal look is too stark.
*   **Mouse-Friendly UI:** In addition to keyboard controls, the interface includes familiar UI elements — clickable buttons, menus, and context menus — so it works like a regular webmail client for users who primarily point-and-click.

### How does it handle HTML emails?
For security and speed, Kagi Mail attempts to render emails as **Plain Text/Markdown** by default.
*   **The Renderer:** The team is building a robust HTML-to-Text renderer that parses markdown elements (blockquotes, tables) so newsletters are readable without loading heavy HTML.
*   **HTML Toggle:** Users can switch to the original HTML view by pressing `v` or clicking the "Show HTML" button.

### Does it have "Undo Send"?
**Yes.** You can configure the "Undo Send" duration in the General settings (e.g., 15 seconds), allowing you to stop a message shortly after hitting send using the `:undo` command.

---

## Features & Workflow

### How is email sorted (Folders vs. Labels)?
Kagi Mail uses a **Label** system rather than strict folders. This means an email can live in any number of labels, rather than just one folder.

### What are "Assistant Rules"?
This is an **optional, experimental AI feature** that allows the Kagi Assistant to manage your inbox.
*   **Strictly OPT-IN:** This feature is **disabled by default**. You must explicitly check boxes to grant permissions (such as **"Read message contents"** or **"Create labels"**) for the AI to function. If you disable these permissions, the text will not be processed by the Assistant.
*   **Natural Language & Actions:** You can provide natural language prompts (e.g., *"Label receipts as 'paper-trail'"*) to guide the AI. Valid actions the Assistant can take include: **Apply labels**, **Skip inbox**, **Mark read**, or **Mark important**. These can be applied to a single message or propagated to all messages in a thread.
*   **Manual Rules:** If you prefer not to use AI, standard deterministic rules (such as block/allow lists) are available via the "Add New Rule" button and function entirely separately.

### Can I import my old email?
**Yes.**
*   **MBOX Import:** A tool allows users to upload archives (like Gmail takeouts), respecting existing labels and read/unread status.
*   **IMAP Migration:** Allows users to connect Kagi Mail to an existing IMAP inbox to import mail directly.

---

## Domains & Aliasing

### Can I use a Custom Domain?
**Yes.** Support for personal custom domains is a planned launch feature and will likely be included in the base price. It supports "catch-all" configurations and sending from specific aliases.

### How do Aliases work?
*   **Kagi Aliases:** You can generate randomized aliases ending in `@kagimail.com` (e.g., `word-word-word@kagimail.com`) to mask your real identity, similar to other email masking services.
*   **Management:** Aliases can be individually disabled if they attract spam. You can also set specific "Outgoing Names" and signatures per alias.

---

## Privacy & Security

### Is Kagi Mail End-to-End Encrypted (E2EE)?
**Not by default.**
Kagi aims to balance privacy with standard protocol usability (such as server-side search and usage of third-party clients without bridge apps).
*   **Current State:** Data is encrypted at rest and in transit (TLS).
*   **Future:** The team is exploring optional PGP support or encryption methods where the user holds the keys.

### Does it block tracking?
**Yes.**
*   **Spy Pixels:** The service proxies remote images and actively strips known tracking pixels to prevent senders from knowing when an email is opened.
*   **Image Proxy:** The service utilizes Kagi's image proxy, so even loading legitimate images will protect the user's privacy.

---

## Mobile & Client Support

### Is there a mobile app?
**Not yet.**
*   **Strategy:** The team is prioritizing a robust web client (with a responsive "Mobile Web" view in progress) and backend infrastructure first. A native app is on the roadmap.
*   **Workaround:** You are encouraged to use existing third-party mobile clients (Apple Mail, Outlook, etc.) via `IMAP` configurations. There are plans to make many features work with third-party clients, rather than having them as an afterthought.