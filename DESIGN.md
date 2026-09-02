# Munoz Miniz Homepage — Phase 2 Design Specification

## Status and scope

**Status:** Ready for Director review; implementation must wait for the Director's explicit approval and delegation.

**Phase 2 objective:** Replace the prior fictional `Nightshift Objects` identity and fabricated storefront placeholders with the Munoz Miniz identity and only verified catalog content, while retaining the approved homepage structure, responsive behavior, and accessibility controls.

This document authorizes no deployment, publishing, merge, pricing change, or external communication.

## Evidence boundary

### Verified for use

| Fact | Evidence | Design consequence |
| --- | --- | --- |
| Business name: **Munoz Miniz LLC** | Public business-record listing for Munoz Miniz LLC (queried 2026-09-01) | Use `Munoz Miniz` as the text wordmark and page/site name. Do not retain `Nightshift Objects`. |
| Business scope: 3D-printed product retail and custom manufacturing | Same public listing | The homepage may describe the offering generically as 3D-printed products and present a custom-work inquiry route. |

### Not verified — do not invent or publish

No repository asset, project document, or discoverable authoritative catalog supplied a current product feed, category taxonomy, individual item name, price, availability, material, processing time, shipping policy, social handle, email address, logo, or product photography. The previous names (for example, *Spike Heart Vessel*) and prices were POC inventions and must be removed.

The implementation must use a content adapter/data source supplied by the owner for all named products and commerce facts. If that source has not arrived when development begins, retain an intentionally non-commerce-ready preview state rather than manufacture catalog data.

## 1. Brand direction

### Positioning and tone

Munoz Miniz is a maker-led 3D-print retail and custom-manufacturing brand. The visual voice should be crisp, compact, mechanical, and collector-friendly: a small-scale workshop / display-case character, rather than the previous goth/rockabilly fiction. It should feel precise and playful, with product forms doing the visual work.

Use direct, factual language. Prefer **made-to-order**, **3D-printed**, and **custom work** only where the eventual catalog or owner confirms that claim for the particular item. Avoid unverified claims about durability, origin, filament/material, limited runs, delivery dates, sustainability, fandom licensing, or compatibility.

### Visual system

- Keep the approved high-contrast shell and its generous product media space; replace gothic motifs, checkerboards, bats, skulls, thorn flourishes, and “dark side” language.
- Base palette: near-black `#101214`, warm white `#F5F3EE`, graphite `#2B3035`, steel `#AAB2B9`, and one owner-approved brand accent. Until an official accent is supplied, use accessible cobalt `#2457D6` only for interactive emphasis, never as asserted brand color.
- Product imagery is primary. Use clean studio imagery: neutral background, consistent scale, soft contact shadow, no text baked into images, and no AI-generated representation of a catalog item.
- Retain the current condensed-display / readable-sans hierarchy only as an implementation-safe interim choice. Final font/wordmark selection requires owner-provided brand assets or licensing confirmation.
- The wordmark is text-only (`MUNOZ MINIZ`) until a final logo and favicon arrive. Do not fabricate a symbol mark.

## 2. Content and category mapping

### Navigation

| Existing POC destination | Phase 2 label | Required destination/content source |
| --- | --- | --- |
| Shop | Shop | Owner-approved live catalog or category index |
| Collections | Collections | Only show when a real collection taxonomy is supplied; otherwise omit from primary navigation |
| Custom Prints | Custom Work | Owner-approved inquiry destination and intake rules |
| About | About Munoz Miniz | Owner-approved brand/about copy |

Search, account, and bag controls retain their accessible POC behavior until backed by a real storefront integration. They must not imply live search, sign-in, or cart checkout before those integrations exist.

### Homepage category and product slots

The layout has four category tiles and four product cards. Their placement is retained, but their content is now data-driven rather than fictional.

| Homepage placement | Phase 2 mapping | Required source fields | Fallback before source is supplied |
| --- | --- | --- | --- |
| Shop by category (up to 4 tiles) | First four owner-approved current catalog categories, in owner-supplied merchandising order | `category_name`, `category_url`, image, alt text | Hide the tile grid and show no made-up categories. Keep a single `Browse products` CTA only if it has a valid catalog destination. |
| Featured/current products (up to 4 cards) | Current owner-approved products, in owner-supplied merchandising order | `product_name`, `product_url`, image, alt text, price/display price, availability, variant behavior, optional verified badge | Hide the product grid; do not use fictional names, `$00.00`, `New`, or `Limited` badges. |
| Featured collection | One genuine owner-approved collection | collection name, URL, image, alt text, description | Omit the section, or use a neutral brand/process panel with no collection claim. |
| Community/gallery | Only consented Munoz Miniz product or customer images | asset permission, image, alt/caption, outbound destination disclosure | Omit it. Do not substitute invented testimonials, follower counts, or social claims. |

### Required catalog handoff

Before Developer maps a single product, the owner must provide a current source of truth (store export/API, approved spreadsheet, or authoritative storefront URLs) containing the fields above. The source must identify which products/categories are active and which copy, images, prices, badges, and links are approved for this homepage.

## 3. Revised homepage copy

All final copy below is intentionally factual and may be used only after the linked destination is real.

| Location | Approved Phase 2 copy |
| --- | --- |
| Announcement | `3D-printed products and custom work from Munoz Miniz.` |
| Hero eyebrow | `MUNOZ MINIZ · 3D-PRINTED PRODUCTS` |
| Hero H1 | `Small prints. Big personality.` |
| Hero supporting text | `Explore current 3D-printed products from Munoz Miniz, or start a custom-work conversation.` |
| Hero primary CTA | `Shop current products` |
| Hero secondary CTA | `Explore categories` |
| Category section H2 | `Shop by category` |
| Category support | `Browse the current Munoz Miniz lineup.` |
| Product section eyebrow/H2 | `CURRENT LINEUP` / `Featured products` |
| Featured collection eyebrow/H2 | `FEATURED` / owner-supplied collection name only |
| Custom-work H2 | `Have a custom idea?` |
| Custom-work text | `Share your reference, preferred size, color, and intended use. Munoz Miniz will review the request before confirming availability and pricing.` |
| Custom CTA | `Start a custom-work inquiry` |
| Newsletter H2 | `Stay in the loop` |
| Newsletter text | `Get updates from Munoz Miniz.` |

Do not use the former terms “Nightshift Objects,” “delightfully strange,” “misfit,” “dark side,” “New & Notorious,” “Midnight Menagerie,” or “Seen in the Wild.”

## 4. Layout preservation and accessibility requirements

Preserve the approved structure in this order: header, hero, category browsing, featured products, trust/process strip, featured collection/process panel, custom-work callout, optional consented gallery, newsletter/footer. A section may be omitted only where the no-invention fallback above applies; remaining sections must not acquire dead anchors or empty controls.

The following QA-passed behavior is non-negotiable:

1. Keep semantic landmarks, skip link, one H1, ordered H2 hierarchy, accessible names, and visible keyboard focus styling.
2. Keep the mobile menu close control, Escape support, focus trap while open, and return focus to the visible menu toggle after a navigation link closes it. Focus must never remain in hidden content.
3. Keep responsive behavior from 320 px upward, no horizontal overflow, the approved grid collapse rules, sticky-header anchor offset, and `prefers-reduced-motion` handling.
4. Keep the programmatic association between the email input and its validation/success feedback. Do not claim an email subscription succeeded until a real provider exists.
5. Keep every footer fragment link pointed to a real HTML target without JavaScript. Remove any group whose live link or valid fallback target does not exist.
6. For real product cards, expose actual price/availability/variant information supplied by the catalog. Use `Choose options` only when a working, accessible variant route exists; otherwise use a valid product-details link.
7. Retain 44 by 44 CSS-pixel minimum targets, WCAG 2.2 AA contrast, error text that is not color-only, reserved image dimensions, and accurate alt text. Decorative visuals remain hidden from assistive technology.

## 5. Asset and content inventory

| Item | Status | Needed before use |
| --- | --- | --- |
| Official wordmark/logo and favicon | Missing | Approved files and usage/clear-space guidance |
| Brand accent, typography, and photography direction | Not documented | Brand kit or owner approval of the interim system |
| Current catalog and category mapping | Missing | Authoritative active-product source with fields in section 2 |
| Product and category imagery | Missing | Optimized approved assets, dimensions, and accurate alt text |
| Custom-work route | Missing | Form/URL, acceptance scope, privacy language, and confirmation behavior |
| Email/newsletter provider and consent copy | Missing | Provider integration, privacy URL, and compliant consent text |
| Legal/help/social links | Missing | Verified URLs; no placeholder `mailto`, social, or policy links |
| Customer/community content | Missing | Explicit consent, captions, and external-destination disclosure |

## 6. Implementation acceptance criteria

Developer may submit Phase 2 to QA only when all conditions below are met:

1. All `Nightshift Objects` identity, fictional product/category names, fictional prices, generic `hello@example.com`, and placeholder storefront claims have been removed from user-facing content.
2. `Munoz Miniz` is used as the text brand name; any additional brand assertion, product, category, price, image, badge, claim, or link can be traced to the owner-approved source of truth.
3. The approved homepage layout and all accessibility behavior in section 4 are preserved; any unavailable content uses the defined omission/fallback behavior with no empty grid, dead link, or misleading interactive control.
4. Product cards and category tiles render only from an owner-approved current catalog mapping, with real destinations and accurate alternatives. No current catalog data means those components are hidden rather than fabricated.
5. Custom-work and newsletter controls either connect to their owner-approved live services or clearly operate as non-submitting UI without a false success state; form accessibility remains intact in either case.
6. New/updated imagery reserves space, uses appropriate responsive delivery and accurate alt text, and does not embed essential text within the image.
7. QA verifies keyboard, mobile-menu focus restoration, no-JavaScript footer destinations, email feedback association, responsive widths, reduced-motion behavior, and all new content links.

## 7. Owner decisions still required

1. Supply/approve the authoritative current catalog and category order.
2. Supply final logo, favicon, approved brand colors/fonts, and product photography.
3. Confirm the custom-work intake process, what can be promised publicly, and the contact destination.
4. Confirm email provider, privacy/consent wording, policies, help/contact, and social destinations.
5. Approve whether a featured collection and consented community/gallery section should ship in Phase 2.

## Handoff rule

Developer must not begin implementation until the Director reviews this specification and explicitly delegates development. This specification does not grant authority to merge, deploy, publish, or alter any live storefront.
