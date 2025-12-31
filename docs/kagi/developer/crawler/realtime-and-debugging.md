# Realtime and Debugging

This page covers on-demand crawl triggers and common debug steps.

## Kagi Crawler realtime crawls

Use the Kagi Crawler API to fetch a single URL with a multi-strategy pipeline.

```bash
curl -X POST "http://localhost:8001/v1/crawl/realtime" \
  -H 'Content-Type: application/json' \
  -d '{"url":"https://example.com"}'
```

### Realtime metadata controls

- `crawler_method`: `puremd`, `scrapy`, or `playwright`
- `headless_browser_fallback`: `true` or `false`
- `disable_headless`: `true` to skip Playwright fallback

Timeout settings:

- `CRAWLER_REALTIME_TOTAL_TIMEOUT`
- `CRAWLER_PRIMARY_TIMEOUT`
- `CRAWLER_HEADLESS_TIMEOUT`

## Kagi Context realtime crawls

The Kagi Context stack uses the Storage API to enqueue work:

```bash
curl -X POST "$STORAGE_API_URL/v1/web/fetch-now" \
  -H 'Content-Type: application/json' \
  -d '{"url":"https://example.com"}'
```

You can also use the demo frontend in `examples/frontends-realtime-crawl/` to watch the stream.

## Debug checklist

- **Check health**: `/health` and `/health/ready` for crawler API and services.
- **Queue status**: `GET /v1/crawl/queue/status` (Kagi Index).
- **Logs**: `docker-compose logs -f crawler-worker` and `crawler-api`.
- **Storage**: verify HTML blobs exist in the configured storage backend.
- **Kafka**: ensure the `indexer` topic has new messages.

## Common failure signals

- **No results**: URL blocked by robots, JS-only pages without Playwright, or PureMD token missing.
- **Timeouts**: increase realtime timeout env vars for heavy pages.
- **Duplicates**: confirm Redis Bloom or task dedup is enabled in settings.
