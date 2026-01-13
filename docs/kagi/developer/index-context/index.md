# Kagi Index and Context

Kagi ships two complementary systems for indexing and context retrieval:

1. **Kagi Index** - a Vespa-backed indexer for web search and hybrid ranking.
2. **Kagi Context** - a component-based context layer that streams merged components for agents and apps.

This section documents both stacks so teams can align ingestion and query workflows.

## What lives where

- **Kagi Index**: Kafka -> indexer workers -> Vespa, optimized for fast query latency.
- **Kagi Context**: Storage API + processors -> tiered backends (Vespa, LanceDB, CloudStorage).

## Pages

- [Indexer Pipeline](indexer-pipeline.md)
- [Search and Ranking](search-and-ranking.md)
- [Kagi Context](context-layer.md)
