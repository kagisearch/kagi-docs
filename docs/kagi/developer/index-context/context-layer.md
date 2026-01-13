# Kagi Context

Kagi Context uses a component-based model to unify data across products. Entities are stable IDs, and components attach facts like `Titleable`, `DocumentBlob`, or `GeoContext`.

## Core ideas

- **Components over schemas**: entities are flexible and gain traits by attaching components.
- **Tiered storage**: Medium (Vespa), Long (LanceDB + CloudStorage), Source (read-only connectors).
- **Streaming queries**: the Query API streams partial results as tiers respond.
- **ProcessTracking**: processors poll `/v1/process/due` and update trackers instead of bespoke queues.

## Ingestion path

1. Writers append components via the Storage API.
2. Processors enrich entities (crawlers, HTML-to-markdown, geo, WHOIS).
3. Backend adapters index components into Vespa and LanceDB.
4. The Query API merges components and streams responses.

## Where to dig deeper

- Kagi Context architecture overview
- Backend topology and tier mapping
- Processor lifecycle and queueing
- Web search and crawler use cases
