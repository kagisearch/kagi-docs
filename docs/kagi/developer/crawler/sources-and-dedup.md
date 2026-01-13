# Sources and Dedup

This page documents where crawled content originates and how duplicate work is avoided.

## Kagi Crawler sources (Kagi Index)

- **Common Crawl**: primary source for bulk URL ingestion. The crawler queries Athena + S3 (or CDX fallback) and processes WARC segments into stored HTML.
- **Wikipedia Enterprise**: snapshot dumps for Wikipedia domains.
- **Live crawl**: Scrapy or Playwright fetches for domains that are missing in Common Crawl.

### Dedup strategy

- **Redis Bloom filters** per domain can short-circuit URLs already seen.
- **Database checks** prevent duplicate `crawl_tasks` when bulk URLs are inserted.
- **Content hash** values are embedded in stored filenames and later validated by the indexer.

## Kagi Context sources

- **Source tiers**: Common Crawl and Wikipedia adapters expose read-only snapshots.
- **Managed crawlers**: `webpage-html-crawler` fetches live URLs and writes `DocumentBlob` components.
- **Discovery**: `webpage-discovery-scrapy` reads seed pages and enqueues new URLs via `POST /v1/web/fetch-now`.

### Dedup strategy

- **Entity IDs + component versioning** make component writes idempotent.
- **ProcessTracking** records status so processors skip already handled entities.

## Storage notes

Both stacks store raw HTML and markdown as blobs. Indexers and processors rehydrate from storage instead of re-fetching the origin URL.
