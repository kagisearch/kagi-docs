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

### What is the technology stack?
*   **Backend:** Kagi Mail leverages [Stalwart](https://stalw.art), an open-source mail server.
*   **Frontend:** The web client is built in-house by Kagi, leveraging [JMAP](https://jmap.io/spec-mail.html).

### Which protocols will Kagi Mail support?
Kagi Mail attempts to supports open standards, including IMAP4, SMTP, JMAP, and Sieve. For a full list of those supported by Stalwart, see the [RFCs it implements](https://stalw.art/docs/development/rfcs/).

### Does it replace Google Drive or Calendar?

Calendar and contacts support are on the roadmap. Storage is not planned for launch, but may have limited support via WebDAV.

## User Interface & Experience

### How do I do...?
Kagi Mail's UI was originally inspired by TUIs, and not all features are accessible with mouse-only navigation. Press <kbd>?</kbd> to see a list of commands and press <kbd>:</kbd> to enter the command prompt.

### How does it handle HTML emails?
For security and speed, Kagi Mail attempts to render emails as Markdown by default. Press <kbd>v</kbd> to show full HTML.

Kagi Mail will automatically strip many pixel trackers and proxies images to Kagi image proxy, to preserve privacy. This applies across any email client used to access Kagi Mail.

### Is there a mobile app?
**Not yet,** though you can configure your choice of third party mobile app through IMAP or JMAP.

## Privacy & Security

### Is Kagi Mail End-to-End Encrypted (E2EE)?
**No.**
Kagi aims to balance privacy, usability, and features. Currently, we are not planning to offer a full end-to-end encrypted service, although users can enable end-to-end encryption through a third party mail client (e.g. [Thunderbird](https://support.mozilla.org/en-US/kb/thunderbird-help-setup-account-e2ee)).

### Does it block tracking?
**Yes.** Kagi mail will automatically proxy remote images and strip most tracking pixels to prevent senders from identifying users. This applies regardless of the email cilent you access Kagi Mail with.

---

## Features & Workflow

### Undo Send
You can configure the "Undo Send" duration in the [General settings](https://kagimail.com/settings) (with a default of 15 seconds), allowing you to stop a message shortly after hitting send using the `:undo` command.

### Email sorting
Kagi Mail's webmail exposes mailboxes as "labels". Any number of labels can be attached to an email. In third-party mail clients, labels may be shown as mailboxes, and the same email may appear in multiple mailboxes.

### Rules
[Rules](https://kagimail.com/settings/rules) are an **opt-in, experimental, LLM based feature** that allows the Kagi Assistant to manage incoming messages.

You must enable at least one permission and at least one rule for Rules to process incoming messages.

Rule permissions give permission for the underlying LLM to access specific parts of your email and take specific actions on messages.

#### Tips for rules
- Use natural language to describe how you want messages to be processed.
- Depending on permissions granted, you can reference message content, thread content, message headers, and participant in the message or thread.
- Keep rules concise and 

### assistant@kagimail.com
assistant@kagimail.com is Kagi Assistant over email. You can email assistant@kagimail.com directly to ask general questions, or include it on a thread via Reply, CC, or Forward to ask questions about an email thread.

Via a Reply, you can ask assistant@kagimail.com to take action on a thread to scope a [Rule](#what-are-rules) to that specific thread.

### Email Import
[Import & Export settings](https://kagimail.com/settings/import-export)

#### MBOX Import
MBOX files are provided by many email providers. When importing an MBOX file, all messages will be placed into a new label scoped to that import, to help with organization. Unfortunately, the MBOX format does not inherently support things like read/unread, labels, or flagged messages. We do a best-effort to support some email provider specific conventions.

#### IMAP Import
Importing directly from an IMAP protocol allows you to import incoming messages in real-time, preserving IMAP keywords like read/unread, flagged, and important. This requires you have access to the email account and requires Kagi to encrypt and store your password. OAuth based authentication flows are currently unsupported.

##### App Specific Passwords
We recommend using an App Specific Password if your mail provider supports it.

* [Gmail](https://support.google.com/accounts/answer/185833?hl=en)
* [Microsoft/Outlook](https://support.microsoft.com/en-us/account-billing/how-to-get-and-use-app-passwords-5896ed9b-4263-e681-128a-a6f2979a7944)
* [Zoho](https://help.zoho.com/portal/en/kb/bigin/channels/email/articles/generate-an-app-specific-password)

### Pinning emails
Messages marked with the IMAP "flagged" keyword are "pinned" to the top of your inbox in Kagi Mail's webmail.

### Custom domains
Configure custom domains in the [settings](https://kagimail.com/settings/domains). You will be required to validate ownership with a TXT DNS record with your domain provider, then configure MX, SPF, DKIM, and DMARC DNS records for full support.

### Aliases

Randomized aliases can be created for `@kagimail.com`, and custom aliases can be created for custom domains. Aliases can be used to mask your identity or to track what online services do with your address. Aliases can be individually disabled if they attract spam. Each alias can have individual outgoing name and signatures configured.

#### Aliases in IMAP clients

You must manually configure aliases in IMAP clients (there's no standard mechanism for discovery).

##### Apple Mail

Go to: Mail > Settings > Accounts > [Pick your kagi mail account] > Email Address > Edit Email Addresses...

Add your alias manually, and it will be an option in the "From:" field when composing an email.
