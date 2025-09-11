# API Versions

## Available versions

Version | Status
--------|------------
v0      | In Service

Each version of the API may contain arbitrary breaking changes.

We will make announcements when new API versions are available, and note
any breaking changes that could impact clients.

Previous versions will remain in service until an announcement is made
with their planned removal, which will give sufficient time for clients to
migrate.

## Breaking Change Policy

Clients are intended to use and consume the API as-documented. Use of endpoints
or fields that are not documented are subject to change without notice.

This means the following things are NOT considered breaking changes:

- Removal of an undocumented endpoint
- Renaming, removal, or type changes of an undocumented field
- Changes occurring in undocumented API version numbers

Any detail that *is* documented is guaranteed to be stable for the rest of
that API version's lifetime. Any exceptions to this will be given with advanced
notice.

## Changelog

Changes to the API will be published here, as well as:

- [GitHub Discussions Announcements](https://github.com/kagisearch/kagi-docs/discussions/categories/announcements) page
- [Search API Management](https://kagi.com/settings/user_api) page
