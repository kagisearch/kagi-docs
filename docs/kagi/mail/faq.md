# Kagi Mail FAQ

## General questions

### Can I disable all AI features in Kagi Mail?
Yes. Turn off **AI features** in [General settings](https://kagimail.com/settings/general). This pauses Inbox Highlights, Preview, AI rules, natural language search, translation, proofreading, and the email assistant, and keeps your choices for each feature for when you turn it back on. Triage keeps sorting mail from new senders.

### What is the technology stack behind Kagi Mail?
*   **Backend:** Kagi Mail leverages [Stalwart](https://stalw.art), an open-source mail server.
*   **Frontend:** The web client is built in-house by Kagi, leveraging [JMAP](https://jmap.io/spec/rfc8621/).

### How much does Kagi Mail cost?
Kagi Mail is fully included in **Kagi Ultimate**. Without Ultimate, you can try it free for 60 days, and then subscribe to the Kagi Mail plan for **$9/month** + tax or **$99/year** + tax. To start the trial, click **Start free trial** in [General settings](https://kagimail.com/settings/general). On Ultimate, Kagi Mail's AI features use your plan's AI allowance. To change your plan, go to [Plan Selection](https://kagi.com/settings/billing_plan).

### What happens to my mail if I leave Kagi Mail?
Your mail and calendar are yours, and you can take them with you whenever you like, using the one-click export in [Import & Export settings](https://kagimail.com/settings/import-export) or any IMAP, JMAP, or CalDAV app. Once you cancel, Kagi deletes your data on a defined schedule. It isn't kept for any other purpose.

### Which protocols does Kagi Mail support?
Kagi Mail supports open standards, including IMAP4, SMTP, JMAP, Sieve, and CalDAV (for calendars).
For a full list of protocols supported by Stalwart, see the [RFCs it implements](https://stalw.art/docs/development/rfcs/).

### Does Kagi Mail support POP3?
No. To use Kagi Mail in another email app, connect with IMAP or JMAP, which also keep your mail in sync across devices. Server settings are listed in [External Clients](https://kagimail.com/settings/external-clients).

### Can I connect my own AI assistant to Kagi Mail with MCP?
Yes. Turn on **MCP** (Model Context Protocol) in [Kagi Mail Labs](https://kagimail.com/settings/experiments). That page then shows the endpoint and OAuth client ID to connect with, and setup instructions for Claude Code, Codex, Claude, and ChatGPT. Other apps need both the endpoint and the client ID, and you then sign in with your Kagi account. See [MCP](./index.md#mcp) in the user guide.

MCP access is read-only: your assistant can search and read your mail, but it can't change, delete, or send email.

### Does Kagi Mail include a calendar and contacts?
Kagi Mail includes a calendar. You can create single and repeating events, invite participants, get email reminders, keep several color-coded calendars, and sync them with any CalDAV-compatible app. You can also subscribe to public calendars, such as holiday calendars, by their address. See [Subscribing to Other Calendars](./index.md#subscribing-to-other-calendars). Tasks aren't supported yet.

Contacts and an address book are coming in 2027.

### Is there a mobile app?
Native mobile apps are coming in 2027.

Alternative solutions for mobile use:
- Use Kagi Mail with a third-party mobile app of your choice through IMAP or JMAP.
- Kagi Mail also works in a mobile browser.

## User Interface & Experience

### How do I do...?
Kagi Mail's UI was originally inspired by TUIs, and not all features are accessible with mouse-only navigation. Press <kbd>?</kbd> to see a list of commands and press <kbd>:</kbd> to enter the command prompt.

### How does it handle HTML emails?
For security and speed, Kagi Mail opens HTML email in text view by default: messages are converted to plain text with links and basic formatting, without images or tracking. Press <kbd>v</kbd> to show full HTML, and press it again to switch back.

To always show HTML, turn on **Email view** in [Appearance settings](https://kagimail.com/settings). You can still switch individual threads with <kbd>v</kbd>.

Kagi Mail will automatically strip many tracking pixels and proxy images through the Kagi image proxy to preserve privacy.
This applies across all email clients used to access Kagi Mail.

## Privacy & Security

### Is Kagi Mail End-to-End Encrypted (E2EE)?
**No.**
Kagi aims to balance privacy, usability, and features.
Currently, we are not planning to offer a full end-to-end encrypted service, although users can enable end-to-end encryption through a third-party mail client (e.g., [Thunderbird](https://support.mozilla.org/en-US/kb/thunderbird-help-setup-account-e2ee)).

### Does it block tracking?
**Yes.** Kagi Mail will automatically proxy remote images and strip most tracking pixels to prevent senders from identifying users.
This applies regardless of the email client you use to access Kagi Mail.

### Why did a message go to spam?
Right-click the message (or open its menu) and choose **View spam results**. Kagi Mail shows the message's spam score and the rules that contributed to it, such as a failed DMARC check or a blocklist hit.

If a message was wrongly marked as spam, move it back to your inbox. To always accept mail from a sender, run `:allow` from the command prompt.

When you move a message to Junk, its sender is added to your block list and their future messages go straight to Junk. To undo this, run `:unblock`.

## Features & Workflow

### Undo Send
You can configure how long you have to undo a sent email with **Undo send** in [Messages & Composing settings](https://kagimail.com/settings/mail) (default: 15 seconds). To stop a message during that time, use the `:undo` command.

### Email sorting
Kagi Mail's webmail exposes mailboxes as "labels".
Any number of labels can be attached to an email.
In third-party mail clients, labels may be shown as mailboxes, and the same email may appear in multiple mailboxes.

### Rules
[Rules](https://kagimail.com/settings/rules) let Kagi Assistant sort, label, and mark incoming mail based on instructions you write in plain language. They can only do what you allow under **Permissions**.

Rules only process incoming messages when **AI features** is on in [General settings](https://kagimail.com/settings/general), and you've turned on at least one permission and at least one rule.

Each permission lets Rules read a specific part of your email, such as the message body, or take a specific action, such as applying a label.

#### Tips for rules
- Use natural language to describe how you want messages to be processed.
- Depending on the permissions granted, you can reference message content, thread content, message headers, and participants in the message or thread.
- Keep rules concise.

### Can I filter email without AI?
Yes. Use **Advanced Sieve Filtering**, found in the top-right corner of [Rules & Filters](https://kagimail.com/settings/rules). [Sieve](https://www.rfc-editor.org/rfc/rfc5228) is a standard scripting language for email filters, and it runs without any AI.

Kagi also provides ready-made scripts you can include in your own, for example `include :global "updates";` to file automated notifications into **Inbox/Updates**.

Sieve is recommended only if you're already familiar with it.

### Kagi Assistant over email
assistant@kagimail.com is for questions about your email. Include it in a thread via Reply, CC, or Forward to ask about that conversation, for example what was decided or what's still open.

Via a Reply, you can ask assistant@kagimail.com to take action on a thread to scope a [Rule](#rules) to that specific thread.

### Email Import
[Import & Export settings](https://kagimail.com/settings/import-export)

#### MBOX Import
MBOX files are provided by many email providers.
When importing an MBOX file, all messages will be placed into a new label scoped to that import to help with organization.
Unfortunately, the MBOX format does not inherently support things like read/unread status, labels, or flagged messages.
We make a best effort to support some email provider-specific conventions.

#### IMAP Import
Importing directly via IMAP allows you to import incoming messages in real time, preserving IMAP keywords like read/unread, flagged, and important.
This requires you to have access to the email account and requires Kagi to encrypt and store your password.
OAuth-based authentication flows are currently unsupported.

##### App-Specific Passwords
We recommend using an app-specific password if your mail provider supports it.

* [Gmail](https://support.google.com/accounts/answer/185833?hl=en)
* [Microsoft/Outlook](https://support.microsoft.com/en-us/account-billing/how-to-get-and-use-app-passwords-5896ed9b-4263-e681-128a-a6f2979a7944)
* [Zoho](https://help.zoho.com/portal/en/kb/bigin/channels/email/articles/generate-an-app-specific-password)

### How do I use Kagi Mail with Apple Mail, Thunderbird, or another email app?
Create an app-specific password for the app, then sign in with your Kagi Mail address and that password:

1. Go to [External Clients](https://kagimail.com/settings/external-clients#app-passwords).
2. Under **App-Specific Passwords**, enter a description (for example, *Thunderbird on laptop*) and click **Create App-Specific Password**.
3. Add your account in the email app. Many apps (including Thunderbird, K-9 Mail, and FairEmail) detect the server settings automatically.

[External Clients](https://kagimail.com/settings/external-clients) has setup notes for Apple Mail, Thunderbird, K-9 Mail / FairEmail, Outlook, and Gmail. If your app needs the settings entered manually, use these (all use TLS/SSL):

| Service | Host | Port |
| --- | --- | --- |
| IMAP | `mail.kagimail.com` | 993 |
| SMTP | `mail.kagimail.com` | 465 |
| JMAP | `mail.kagimail.com` | 443 |

### Pinning emails
Messages marked with the IMAP "flagged" keyword are "pinned" to the top of your inbox in Kagi Mail's webmail.

### Custom domains
Configure custom domains in the [settings](https://kagimail.com/settings/domains).
You will be required to validate ownership with a DNS TXT record through your domain provider, then configure MX, SPF, DKIM, and DMARC DNS records for full support.

### Can I receive email sent to any address on my domain?
Yes, with **Catch-all**, which you can turn on for each domain in [domain settings](https://kagimail.com/settings/domains). Any message to an address on that domain that you haven't set up lands in the domain owner's inbox. Spam filtering, rules, and Triage handle it like any other message.

### Aliases

Randomized aliases can be created for `@kagimail.com`, and custom aliases can be created for custom domains. 
Aliases can be used to mask your identity or to track what online services do with your address.
Aliases can be individually disabled if they attract spam.
Each alias can have an individual outgoing name and signature configured.

#### Aliases in IMAP clients

You must manually configure aliases in IMAP clients (there's no standard mechanism for discovery).

##### Apple Mail

Go to: Mail > Settings > Accounts > [Pick your Kagi Mail account] > Email Address > Edit Email Addresses...

Add your alias manually, and it will be an option in the "From:" field when composing an email.
