# Indexer Pipeline

This page focuses on the Kagi Index indexer and how it transforms crawled HTML into Vespa-ready documents.

## Input and storage

Crawler workers send Kafka messages on the `indexer` topic:

```json
{
  "task_id": "cc-example.com-1712345678-acde12",
  "action": "index_document",
  "payload": {
    "index": "unified_search",
    "url": "https://example.com/page",
    "filename": "example.com/page-<sha256>.html"
  }
}
```

The indexer reads `filename` from the configured storage backend (local or GCS).

## Parsing steps

1. **Load HTML** and reject non-text or oversized content.
2. **Run the unified parser** (`indexer/app/parser/unified_search.py`).
3. **Extract metadata** (title, domain, tags, SEO fields, links).
4. **Generate embeddings** (MiniLM, quantized to int8).
5. **Assemble Vespa document** with content hash and indexer version.

## Deduplication

The indexer fetches the existing Vespa document (by `doc_uid`) and skips reindexing when:

- `indexer_version` matches,
- `content_hash` matches,
- `aliases_hash` matches.

## Health and observability

Indexer workers expose:

- `/health`
- `/health/ready`
- `/health/live`

Use `docker-compose logs -f indexer` to inspect errors and timings.

## Kagi Context tie-in

In the Kagi Context stack, indexer-like work is performed by backend adapters and processors. `DocumentBlob` components are normalized once, then adapters for Vespa or LanceDB index the same components for different tiers.
