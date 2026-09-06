# Phase 5 — Shopify Development Theme Runtime QA Record

**Status:** Ready for independent QA and Owner review. This record documents
read-only inspection performed on 2026-09-06. It authorizes no publishing,
merging, product/collection mutation, or other store-data change.

## Runtime result

Shopify CLI reported the following theme roles:

| Theme | ID | Role |
| --- | ---: | --- |
| Atelier | 190412161341 | live |
| Horizon | 189235233085 | unpublished |
| Horizon | 190411604285 | unpublished |
| Development (184537-johnnyzlape) | 191271502141 | development, current |

The inspected preview is the development theme:

`https://munozminiz.myshopify.com?preview_theme_id=191271502141`

No `theme publish`, theme push, product update, collection update, or Admin
write command was run. The live `Atelier` theme was not changed.

## Configured Shopify assets and collection state

Read-only pulls of the development theme's `config/settings_data.json` and
`templates/index.json` showed:

- Header logo: `shopify://shop_images/logo2.webp`
- Hero desktop asset: `shopify://shop_images/Hero_2_wide.webp`
- Hero mobile asset: `shopify://shop_images/Hero_2.webp`
- Featured collection handle: `munoz-miniz-homepage-featured`
- Approved gallery product handle: `ganja-gadget`
- Approved five-image Ganja Gadget gallery: enabled
- Coming Soon items: `Horror Character Products` and `Mummified Fairies`

This establishes the theme configuration only. It does not independently
inspect or change the underlying collection's membership, product media order,
availability, or product Draft/Active statuses.

## Theme Check

Command:

```text
shopify theme check --path C:\Users\johnz\test
```

Result: 16 files inspected, **0 errors**, and 3 `RemoteAsset` warnings for the
Google Fonts links in `layout/theme.liquid` (lines 8–10). The warnings do not
block the zero-error result.

## Draft-status verification limitation

`shopify theme list` exposes the theme role (live, unpublished, development)
but not an independently verifiable Shopify **Draft** status. The available
read-only CLI evidence confirms that theme `191271502141` is the current
development theme and is distinct from the live theme; it cannot by itself
prove a separate Draft-status field. Independent confirmation would require
authorized Admin/UI or API access that exposes that field. No attempt was made
to change the status.
