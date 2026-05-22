# Quick Start

The  API gives programmable access to Kagi's premium search results.

## Setup

![API Portal](./media/api-portal-setup-steps.png){data-zoomable}

1. [Create a Kagi account](https://kagi.com/signup?plan_id=trial) if you don't have one.
2. Navigate to Settings → API, or go directly to [kagi.com/api](https://kagi.com/api).
3. Click **Generate API Token**. The token is shown only once — save it securely.
4. Add funds to your [API balance](https://kagi.com/api/billing).
5. Make your first API call (see example below).

## Pricing

The Kagi Search API is priced at **$12 per 1,000 queries** ($0.012 per search).

You can add funds to your API balance from the [API Billing panel](https://kagi.com/api/billing).

## Authentication

Pass your token in the `Authorization` header:

```
Authorization: Bot YOUR_API_TOKEN
```

## First API Call

```shell
curl -H "Authorization: Bot $TOKEN" \
  "https://kagi.com/api/v1/search?q=kagi+search"
```

See the [Search API](search.md) page for the full endpoint reference, or browse the other APIs in the sidebar.

## SDK

A Python SDK is available via the [kagiapi](https://github.com/kagisearch/kagi-api-python) package.
