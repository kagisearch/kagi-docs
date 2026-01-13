# Architecture and Queue

This page compares how the two crawler stacks schedule work and move content into storage.

## Kagi Crawler (Kagi Index stack)

Primary flow:

```
Kagi Crawler API -> Postgres crawl_queue -> Kagi Crawler workers -> Storage -> Kafka -> Kagi Indexer
```

Key pieces:

- **Kagi Crawler API** creates crawl tasks and domain crawl jobs.
- **Postgres queue** (`crawl_tasks`, `crawl_queue`) handles priority and scheduling.
- **Triggers + NOTIFY** keep workers responsive when new tasks arrive.
- **Kagi Crawler workers** claim tasks with `FOR UPDATE SKIP LOCKED` to avoid collisions.
- **Storage backend** writes HTML under a hashed path and returns a relative filename.
- **Kafka** (`indexer` topic) decouples crawling from indexing.

Where to look:

- `crawler/api/` (FastAPI endpoints and job creation)
- `crawler/worker.py` (LISTEN/NOTIFY loop, task processing)
- `crawler/common_crawl_downloader.py` (Common Crawl ingestion)

## Kagi Context

Primary flow:

```
Storage API -> ProcessTracking -> /v1/process/due -> Processors -> Components
```

Key pieces:

- **ProcessTracking** components schedule work with `job` names like `webpage-html-crawler`.
- **Processors** poll `/v1/process/due?job=...` and claim entities to process.
- **DocumentBlob** components store HTML/markdown in the blob tier.
- **Query API** streams component merges back to clients.

Where to look:

- `processors/webpage-html-crawler`
- `processors/webpage-html-to-markdown`
- `processors/webpage-markdown-puremd`
- `docs/backend-topology.md` (tier mapping)

## Shared concepts

- **Queue visibility**: both stacks expose queue status (Postgres views in Kagi Index, process trackers in Kagi Context).
- **Idempotency**: workers are designed to retry without duplicating components or tasks.
- **Blob-first design**: HTML and markdown are stored once and reused downstream.
