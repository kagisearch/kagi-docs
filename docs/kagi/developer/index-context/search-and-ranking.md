# Search and Ranking

This page summarizes how Kagi Index and Kagi Context handle retrieval and ranking.

## Kagi Index (Vespa)

The Kagi Index uses Vespa with a hybrid schema:

- **Lexical fields**: `title`, `description`, `content_text`, `doc_section`.
- **Vector fields**: `title_embedding`, `headers_embeddings`, `sentences_embeddings`.
- **Metadata**: domain, timestamps, quality scores, and aliases.

Ranking profiles live in `config/vespa/schemas/unified_search.sd`, including:

- `web_search`
- `semantic_search`
- `documentation`
- `wikipedia`

The Kagi Index API queries these profiles via `/v1/search` (GET or POST) and returns ranked results.

## Kagi Context

Kagi Context retrieval fans out across tiers and merges components:

- **Medium tier (Vespa)** for fast lexical and geo queries.
- **Long tier (LanceDB + CloudStorage)** for durable vector memory and blobs.
- **Source tier** for read-only feeds like Common Crawl or Wikipedia.

The Query API streams partial results as soon as each tier responds, then applies merge policies to produce a unified entity view.
