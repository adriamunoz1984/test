# Munoz Miniz Homepage — Phase 2 Design Specification

## Status and scope

**Status:** Phase 2 POC implementation is QA-passed and awaiting Owner review. This document governs the feature branch only; it authorizes no merge, deployment, publishing, price change, or external communication.

**Phase 2 objective:** Present the owner-approved Munoz Miniz catalog in the existing accessible, responsive homepage POC. Preserve the Munoz Miniz goth / rockabilly / horror character—dark, playful, handmade, and collector-oriented—without fabricating catalog facts or commerce behavior.

## Evidence boundary

`CATALOG.md` is the owner-approved source of truth for Phase 2 brand, product, price, status, merchandising order, description, and product-image facts. Implementation may use only facts and image paths physically present in that document. It must not infer a value where `CATALOG.md` says `NEEDS OWNER INPUT`.

The current homepage is a non-deployed proof of concept. A storefront URL, checkout, custom-work submission, email subscription, legal links, social links, logo/favicon, and any product field marked `NEEDS OWNER INPUT` are not approved for live use. POC controls must continue to state when they are unconnected rather than imply a working transaction or submission.

## 1. Brand direction

### Positioning and tone

Munoz Miniz is a maker-led 3D-print retail and custom-manufacturing brand with a goth / rockabilly / horror sensibility. That aesthetic is an approved brand direction, not fictional content to remove. It should feel dark, tactile, playful, slightly aggressive, and collector-friendly, with product forms and accurate catalog copy at the center.

Use direct factual language. Claims about materials, colors, functions, handmade character, or custom work must remain within the corresponding approved catalog copy. Do not add claims about durability, origin, delivery dates, sustainability, licensing, compatibility, limited runs, or availability beyond the catalog status.

### Visual system

- Preserve a high-contrast dark shell, bold display typography, tactile product presentation, and goth / rockabilly / horror-inflected art direction.
- Graphic motifs may support the brand when they are clearly decorative and do not state unverified product facts. Decorative visuals must be hidden from assistive technology.
- Product photography remains primary wherever an approved image reference exists. Do not generate, substitute, or mislabel product photography.
- Use a text wordmark, `MUNOZ MINIZ`, until an owner-approved logo and favicon are supplied. Do not fabricate a symbol mark.
- Any interim colors and typography are POC styling choices, not asserted official brand assets.

## 2. Owner-approved catalog mapping

### Active products

Render active products in this exact merchandising order, with the exact approved names and display prices:

| Order | Product | Price | Image reference | POC treatment |
| --- | --- | --- | --- | --- |
| 1 | Ganja Gadget | $20 for 1 or $30 for 2 | `assets/images/products/ganja_gadget_80s_forest_collection.webp` | Render the approved image with accurate alternative text based on its approved description. |
| 2 | Handmade Dab Tools | $25 each | `NEEDS OWNER INPUT` | Render no substituted/generated product image. Keep the approved name, price, and description only. |
| 3 | Spiky Lighter Sleeve | $15 | `assets/images/products/lighterSleeve_80s_forest_red.webp` | Render the approved image with accurate alternative text based on its approved description. |

Use the descriptions, feature lists, categories, and material/color fields only as stated in `CATALOG.md`. Storefront/product URLs for every active item are `NEEDS OWNER INPUT`; product cards must not claim to link to live product details or checkout.

### Coming Soon

The following owner-approved entries must be presented only as **Coming Soon**:

1. Horror Character Products
2. Mummified Fairies

Do not assign either entry a price, image, description, category, material, availability date, or purchase route.

### Homepage content

| Area | Phase 2 requirement |
| --- | --- |
| Announcement / identity | Identify Munoz Miniz and its 3D-printed products and custom work without making unverified business claims. |
| Product section | Show the three active products in the approved order above, using only their confirmed fields. |
| Product media | Use only the two confirmed file references above. Handmade Dab Tools has no approved image reference. |
| Coming Soon area | Include Horror Character Products and Mummified Fairies as Coming Soon only. |
| Custom-work route | May invite a conversation, but must state it is unconnected in the POC until the Owner supplies the route and rules. |
| Email/newsletter | May remain an accessible, non-submitting POC and must not claim subscription success. |

## 3. Layout, responsive, and accessibility requirements

Preserve the approved structure and responsive behavior from the QA-passed POC: header, hero, featured products, process/trust content, brand/Coming Soon panel, custom-work callout, newsletter, and footer. Do not add empty grids, dead anchors, or misleading controls.

The following are non-negotiable:

1. Semantic landmarks, skip link, one H1, ordered H2 hierarchy, accessible names, and visible keyboard focus styling.
2. Mobile navigation with a close control, Escape support, focus trap while open, and focus returned to the visible menu toggle when it closes. Focus must never remain in hidden content.
3. Responsive behavior from 320 px upward, no horizontal overflow, existing grid-collapse behavior, sticky-header anchor offset, and `prefers-reduced-motion` handling.
4. Programmatic association between the email input and validation/success feedback; no false claim of submission or subscription.
5. Footer fragment links that resolve to real HTML targets without JavaScript; remove any group that lacks a valid target.
6. 44 by 44 CSS-pixel minimum interactive targets, WCAG 2.2 AA contrast, error text not conveyed by color alone, reserved image dimensions, and accurate alternative text for substantive product imagery.
7. Product cards must show only catalog-confirmed price, availability/status, and variant information. No working product links, checkout, or option selection is implied until Owner-approved URLs and behavior are supplied.

## 4. Remaining Owner input

The following gaps remain only because `CATALOG.md` explicitly records `NEEDS OWNER INPUT` or does not provide the fact:

- Storefront/product URLs for all active products.
- Handmade Dab Tools image/file reference.
- Spiky Lighter Sleeve available materials/colors.
- Official logo, favicon, brand-kit colors, and font licensing/selection.
- Custom-work intake destination, scope, privacy language, and confirmation behavior.
- Email provider, consent/privacy language, legal/help/social destinations, and any consented community content.

These are non-blocking placeholders for the non-deployed Phase 2 POC only. They block any live commerce, submission, or publication behavior.

## 5. Implementation acceptance criteria

1. User-facing content traces to `CATALOG.md` or is clearly labeled as unconnected POC behavior.
2. The active-product names, prices, order, statuses, and two approved image references match the catalog exactly.
3. Handmade Dab Tools receives no invented image; Coming Soon entries receive no invented facts.
4. The Munoz Miniz goth / rockabilly / horror direction is preserved without introducing unverified factual claims.
5. All layout, responsive, and accessibility requirements in section 3 remain intact.

## Design-to-implementation assessment

The current implementation correctly matches the catalog mapping: all three active products, their approved prices and order, the two approved image paths, and both Coming Soon entries are present. It also retains the required POC disclosures and QA-passed accessibility/responsive behavior.

There is one genuine visual-direction mismatch: the current hero and supporting artwork use a restrained geometric/mechanical treatment and the existing stylesheet explicitly frames the palette as an interim neutral/cobalt system. That does not clearly express the approved goth / rockabilly / horror direction. No code was changed as part of this documentation-only handoff. A future implementation change is warranted if Owner expects that approved aesthetic to be visibly expressed in the POC; it must preserve the catalog and accessibility constraints above.

## Handoff rule

Developer changes require explicit Director delegation. This specification does not grant authority to merge, deploy, publish, or alter a live storefront.
