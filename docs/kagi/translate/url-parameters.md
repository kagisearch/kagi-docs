# Kagi Translate URL Parameters

Use these parameters to craft custom [Bangs](../features/bangs.md), launcher shortcuts, pinned bookmarks, or other automations that open translate.kagi.com in a preconfigured state. A minimal example:

```
https://translate.kagi.com/?text=%s&source=Japanese&target=English
```

Each mode is selected via the path, with additional options passed as query parameters:

- `/` (Translate) — uses `text=<string>` (seeds the text or URL field).
- `/proofread` — uses `text=<string>`.
- `/dictionary` — uses `word=<string>` (or `q`).

Additional knobs that apply only to certain modes are listed below. Remember to URL-encode values.

## Translation options (path: `/`)

| Parameter             | Purpose                                                            | Accepted values                                | Default    |
| --------------------- | ------------------------------------------------------------------ | ---------------------------------------------- | ---------- |
| `from`                | Source language code (or `auto` for detection)                     | `auto` or any supported language code          | `auto`     |
| `to`                  | Target language code                                               | Any supported language code (same as UI list)  | Browser locale (fallback `en`) |
| `quality`             | Model/quality preset                                               | `standard`, `best`                             | `standard` |
| `style`               | UI label “Type” (literal vs natural phrasing)                      | `natural`, `literal`                           | `natural`  |
| `formality`           | Biases tone                                                        | `default`, `more`, `less`                      | `default`  |
| `language_complexity` | Reading level                                                      | `standard`, `a1`, `a2`, `b1`, `b2`, `c1`, `c2` | `standard` |
| `speaker_gender`      | Gender preference (speaker)                                        | `unknown`, `masculine`, `feminine`, `neutral`  | `unknown`  |
| `addressee_gender`    | Gender preference (addressee)                                      | `unknown`, `masculine`, `feminine`, `neutral`  | `unknown`  |
| `context`             | Free-form guidance appended to the system prompt                   | Any string                                     | empty      |
| `formality_context`   | Additional tone instructions shown only when formality is adjusted | Any string                                     | empty      |
| `preserveFormatting`  | Keeps the original paragraph / line structure                      | `true`, `false`                                | `false`    |

_Example_

```
https://translate.kagi.com/?text=こんにちは&from=ja&to=en&formality=more&speaker_gender=feminine&language_complexity=b2
```

## Proofreading options (path: `/proofread`)

| Parameter | Purpose | Accepted values | Default |
| --- | --- | --- | --- |
| `writing_style` | Target register | `general`, `academic`, `business`, `casual`, `creative`, `email` | `general` |
| `quality` | Model/quality preset | `standard`, `best` | `standard` |
| `formality` | Biases tone while rewriting | `default`, `more`, `less` | `default` |
| `correction_level` | Aggressiveness of edits | `light`, `standard`, `comprehensive` | `standard` |
| `language_complexity` | Reading level of the rewritten text | Same as translate mode (`standard`, `a1`…`c2`) | `standard` |
| `context` | Extra instructions for the proofreader | Any string | empty |

_Example_

```
https://translate.kagi.com/proofread?text=Pat the dog&writing_style=business&correction_level=light&language_complexity=c1
```

## Dictionary options (path: `/dictionary`)

| Parameter | Purpose | Accepted values | Default |
| --- | --- | --- | --- |
| `quality` | Depth of lookup | `standard`, `best` | `standard` |
| `verbosity` | Definition detail | `concise`, `standard`, `comprehensive` | `standard` |
| `synonym_strategy` | How synonyms are grouped | `exact`, `semantic_field`, `hierarchical` | `exact` |
| `context` | Optional guidance (e.g., “software engineering sense”) | Any string | empty |

_Example_

```
https://translate.kagi.com/dictionary?word=serendipity&quality=best&verbosity=comprehensive&synonym_strategy=semantic_field
```

## Website translation options

When translating an entire site (e.g., `https://translate.kagi.com/example.com`), you can use these extra parameters:

| Parameter   | Purpose                            | Accepted values                              | Default          |
| ----------- | ---------------------------------- | -------------------------------------------- | ---------------- |
| `to`        | Target language for the page       | Any supported language code                  | Browser locale   |
| `kt_quality`| Web translation quality preset     | `fast`, `standard`, `best`                   | `fast`           |
| `kt_view`   | Page layout                        | `translated`, `original`, `both_horizontal`, `both_vertical` | `translated` |

_Example_

```
https://translate.kagi.com/example.com?to=en&kt_quality=best&kt_view=both_horizontal
```
