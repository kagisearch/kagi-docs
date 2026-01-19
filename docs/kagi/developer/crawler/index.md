# Kagi Crawler

Kagi maintains two crawler stacks that serve different goals:

1. **Kagi Crawler (part of Kagi Index)** - task-queue crawler that feeds the Kagi Index search stack.
2. **Kagi Context** - processor-driven crawlers that write `DocumentBlob` components into the Kagi Context storage.

This section documents both stacks. Each page calls out which stack it applies to.

## What the crawler stack does

- Acquire HTML and markdown from live URLs or source snapshots (Common Crawl, Wikipedia).
- Deduplicate work so the same URL does not get reprocessed unnecessarily.
- Store raw content in a blob backend (local disk, GCS, or Kagi Context blob storage).
- Emit work to indexers so search and context data stay fresh.

## Pages

- [Architecture and Queue](architecture.md)
- [Sources and Dedup](sources-and-dedup.md)
- [Realtime and Debugging](realtime-and-debugging.md)

## Related projects

- Kagi Index repository
- Kagi Context repository
