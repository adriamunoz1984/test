# Munoz Miniz Homepage — Phase 4 Shopify OS 2.0 Conversion Specification

## Status and boundary

**Status:** Implementation-ready design specification for a Shopify Online Store 2.0 *theme conversion*. It authorizes neither a live-store connection nor theme publishing, checkout configuration, catalog changes, deployment, or merge.

**Objective:** Re-express the approved Phase 3 static homepage as a reusable Shopify OS 2.0 theme while retaining its goth / rockabilly / horror look, exact customer-facing copy and catalog facts, responsive behavior, accessibility, product-gallery behavior, and POC safety boundary.

`CATALOG.md` remains the owner-controlled business source of truth. Shopify is the runtime presentation source only for products, collections, prices, media, and availability when store data exists. Theme code must never invent, correct, or overwrite a catalog fact from Shopify data or image filenames. No live Shopify store must be contacted.

## 1. Required theme architecture

Create a conventional, self-contained OS 2.0 theme structure. Do not retain `index.html` as the rendered homepage after conversion; it may remain as a static reference only if Developer has a reason to preserve it, but no theme behavior may depend on it.

| Path | Responsibility |
| --- | --- |
| `layout/theme.liquid` | Document shell: `<!doctype html>`, language, title/meta hooks, `{{ content_for_header }}`, font loading if retained, CSS/JS asset tags, skip link, global announcement/header/footer sections or section groups, `<main id="MainContent">{{ content_for_layout }}</main>`, and the existing proof-of-concept dialog only if its controls remain. |
| `templates/index.json` | Homepage section composition and editable section order. Use named section instances, with no business copy hard-coded in JSON beyond schema defaults. |
| `sections/announcement-bar.liquid` | Existing announcement strip. |
| `sections/header.liquid` | Logo/wordmark, primary navigation, utility controls, accessible mobile navigation. |
| `sections/hero.liquid` | Approved Hero_2 media treatment, hero copy, and two calls-to-action. |
| `sections/featured-products.liquid` | Section heading, collection-driven product cards, catalog/POC notice, and empty-state handling. |
| `sections/trust-strip.liquid` | The three-item process strip. |
| `sections/about-coming-soon.liquid` | Existing light “Products with personality” area and Coming Soon list. |
| `sections/custom-work.liquid` | Existing custom-work callout and safe non-submitting action. |
| `sections/newsletter.liquid` | Existing footer newsletter presentation; retain non-submitting POC behavior unless the Owner separately approves a real Shopify customer form. |
| `sections/footer.liquid` | Footer wordmark, navigation, and copyright. |
| `snippets/product-card.liquid` | Reusable featured-product card, media selection, price display, gallery markup, and safe missing-product state. |
| `snippets/product-gallery.liquid` | Reusable accessible media/gallery component, used by `product-card` where product media exists. |
| `assets/base.css` (or a clearly named equivalent) | Migrate approved styles from `styles.css` and Phase 3 overrides without visual redesign. |
| `assets/theme.js` (or a clearly named equivalent) | Migrate current menu, dialog/POC, newsletter POC, and gallery interaction without changing behavior. |

Use `{% render %}` for snippets. Use `section.id`-scoped IDs/classes where a section can be added more than once. Include `{% schema %}` for every section with a useful Theme Editor name, defaults matching the approved static page, and sensible presets where allowed. Do not build an app, embed credentials, call external APIs, or add Shopify checkout/cart actions.

## 2. Homepage composition (`templates/index.json`)

The default index template must render sections in this approved order:

1. Announcement bar
2. Header
3. Hero
4. Featured products
5. Trust strip
6. About / Coming Soon
7. Custom work
8. Newsletter
9. Footer

Header/footer may instead be placed in Shopify section groups if the implementation uses a current theme convention. The rendered visual order, landmark order, anchor targets (`#products`, `#about`, `#custom`), and sticky-header offset must remain equivalent. Do not introduce a second H1; the hero H1 is the sole page H1.

## 3. Theme Editor behavior

Theme Editor controls must make presentation configurable without permitting catalog-fact invention. Defaults must reproduce the approved Phase 3 content.

### Global/header settings

- **Logo image:** `image_picker`, default blank. If selected, show the complete supplied logo in the existing white sticker field with `image_tag`; do not crop, filter, or derive a favicon. If no logo is selected, retain the textual `MUNOZ MINIZ` lockup rather than showing a broken image.
- **Logo accessible name / brand name:** text setting default `Munoz Miniz`; use for the home-link accessible name. The logo image remains `alt=""` when visible text/link name supplies the name.
- **Primary menu:** `link_list`; default behavior must still expose Shop, Custom Work, and About anchors when no menu is configured. Menu links must be ordinary navigation links; do not make a product/cart interaction out of them.
- **Announcement text:** `text`/`inline_richtext`, default `3D-printed products and custom work from Munoz Miniz.` Empty content hides the bar rather than outputting an empty landmark.
- Keep Search, Account, and Bag as non-connected visual POC controls, clearly labeled and routed only to the existing POC dialog. Do not convert them to Shopify search, customer account, cart, or checkout functionality in this phase.

### Hero settings

- eyebrow, heading, emphasized heading portion (or safe rich text preserving the existing `<em>` treatment), lede, primary button label/link, and secondary button label/link.
- desktop/tablet hero image picker and mobile hero image picker. Defaults should use the approved `Hero_2_wide.webp` and `Hero_2.webp` only when local theme assets can be referenced safely; otherwise leave pickers empty and document that the merchant selects uploaded copies. No fallback to Hero_1/Hero_3.
- Preserve desktop source at >=761px, mobile source below 761px; 16/10 and 4/3 frames; cover cropping at 44% center desktop and 50% 45% mobile. Media is decorative (`alt=""`) because hero text communicates the content.
- Buttons may link to a section anchor, page, collection, product, or URL only through picker/url settings. Their defaults stay `#products` and `#custom`. Do not add a purchase action.

### Featured products settings

- eyebrow, heading, **featured collection** (`collection` picker), maximum product count (default 3, max 3), catalog-note text, and optional section anchor default `products`.
- Collection order is the storefront order. The Theme Editor must not expose arbitrary manual text fields for a product’s name, price, description, materials, or status.
- A card uses `product.title`, `product.description` only where approved UI currently displays description, `product.price` / `price_min` and `compare_at_price` only as actual Shopify values, and `product.media` / featured media. Product links and Add-to-cart controls are out of scope: cards remain non-transactional unless a later owner-approved phase explicitly changes that boundary.
- For Phase 3 parity, the merchant assigns the correct three approved products in collection order: Ganja Gadget, Handmade Dab Tools, Spiky Lighter Sleeve. Verify against `CATALOG.md` before any merchant mapping or content change.

### About, Coming Soon, trust, custom work, newsletter, footer

- Make existing eyebrow/headline/body/CTA labels and section texts editable through text, textarea, or `richtext` settings as appropriate. Preserve defaults exactly.
- **Coming Soon:** use repeatable blocks (`name` text) defaulting to Horror Character Products and Mummified Fairies. It is display-only; no product availability, links, or price fields.
- **Trust strip:** three ordered blocks, each with number and text defaulting to the approved three statements. Keep three blocks in the initial template.
- **Footer:** footer menu/link-list setting and copyright text. Text fallback keeps current anchor content if no menu is selected.
- Newsletter stays a POC: show local validation and the existing “does not submit data” message, or visibly disable it with an equivalent POC notice. Do not use `{% form 'customer' %}` in this phase because that would create a live customer-data pathway.

## 4. Product, price, and media mapping

### Data precedence and safe rendering

1. `CATALOG.md` governs approved product identity, facts, merchandising order, image approvals, POC restrictions, and whether Owner input is needed.
2. The chosen Shopify collection/product objects supply live-theme runtime fields only after a future merchant configures them.
3. If Shopify product data conflicts with `CATALOG.md`, is absent, or is ambiguous, do not guess: render the safe configured/empty state and flag the mismatch for Owner/Director review. Never alter `CATALOG.md` during conversion.

Prices must use Shopify money filters (for example `| money`) rather than hard-coded dollars. Phase 3’s Ganja Gadget pricing (`$20 for 1 or $30 for 2`) requires an actual approved Shopify representation before it can be rendered dynamically—e.g., product price plus an explicitly approved quantity-break/metafield approach in a later scope. Phase 4 must not manufacture that logic. If only a single Shopify price exists, render that product’s actual price without claiming the two-unit offer; log it as a mapping gap for Owner input.

When a selected collection is empty or unavailable in the Theme Editor preview, render a concise administrator-facing/design-safe empty state in the product-grid area, not invented products, stock imagery, prices, availability, or links. The public POC catalog notice must remain visible.

### Product media rules

- Preserve collection order: Ganja Gadget, Handmade Dab Tools, Spiky Lighter Sleeve.
- Use Shopify image objects and `image_url`/`image_tag` with responsive `widths`, `sizes`, intrinsic dimensions, and loading choices. Do not expose file names as alt text.
- Primary product frame: 3/4 desktop, 4/5 at <=760px, min 220px where space permits; graphite well, paper hairline, cherry offset shadow, `object-fit: contain`, centered.
- Spiky Lighter Sleeve retains one primary image, portrait 2/3 frame, `object-fit: contain`, and no thumbnails/swatches/zoom/lightbox. Its approved descriptive fallback alt is: `A red spiky lighter sleeve fitted around a lighter on a dark forest floor.` Do not infer color/material variants.
- Handmade Dab Tools stays intentionally imageless until a real approved image is supplied and mapped. Render the non-pictorial reserved frame with `Product image not yet available`, dashed cherry border, graphite background, and no gallery, stock art, generated imagery, or substitute `Bowlder` asset.
- If an approved Shopify image lacks usable alt text, use a product title-based fallback only where that is non-deceptive, and flag the content gap. For known Phase 3 assets, retain the approved visual descriptions, not filenames.

### Ganja Gadget gallery

Use `product.media` only when the mapped Shopify product actually has the five approved image assets in this exact order: collection, green/orange, lime/orange, pink/aqua, teal/blue. A merchant must not rely on filename parsing in Liquid to identify or order these assets.

- Default main image is media item 1. Thumbnails select a displayed image only; they are never color/variant/inventory selectors.
- Exactly five thumbnails for the approved Phase 3 state. If media is missing or fewer than five, do not fabricate gallery items; render available substantive media safely and surface the mapping gap for review.
- Each selector is a real `<button type="button">`, 44×44px minimum, with name `Show image N of 5 for Ganja Gadget`; thumbnail image alt is empty. The active button uses `aria-current="true"`, visible non-color-only selected styling, and `Current image` screen-reader text.
- Update one substantive main image’s `src`/responsive source and approved alt on click, Enter, or Space. No autoplay, auto-advance, focus movement, carousel role, or variant selection. Keep the existing polite live announcement.
- Approved main-image descriptions: image 1 `Four open Ganja Gadget items arranged on a dark textured surface.` Images 2–5 `An open Ganja Gadget shown against a dark forest floor.`

## 5. Accessibility, responsive, and visual preservation

- Preserve semantic landmarks, skip link, sticky header, single H1, heading hierarchy, 44px targets, high-contrast visible focus, menu close control, Escape handling, focus trap, and focus return.
- Keep all Phase 3 visual tokens and layouts: dark cherry/graphite/paper/gold palette, bold display type, tactile borders and shadows, product-grid collapse (3 columns where space permits, 2 at the intermediate size, 1 at <=390px), and no horizontal overflow.
- Test 320px, 390px, 760px, 761px, 1024px, and 1440px. At every width, the logo/header must not collide, navigation remains operable, image frame reserves space, gallery selectors remain reachable, and full product media is not unintentionally cropped.
- Keep decorative hero media and redundant logo media `alt=""`; substantive product media must have concise, accurate alt text. Use selected Shopify image alt only if it is approved/accurate; otherwise use the stated safe fallback and record the gap.
- Preserve `prefers-reduced-motion`; no autoplay, parallax, or new motion. First visible hero and product image should not lazy-load; later gallery thumbnails/images may lazy-load.
- Liquid output must escape editable plain-text settings, retain correct heading IDs/`aria-labelledby` wiring, and avoid duplicate IDs when section instances repeat.

## 6. POC and conversion non-goals

This phase does not authorize a Shopify connection, storefront password change, product/collection creation or mutation, cart/checkout wiring, customer account/search implementation, real newsletter submission, analytics, apps, external scripts, favicon creation, image generation, publishing, deployment, merging, or any live-store action.

Developer must not alter `CATALOG.md`, approved assets, prices, approved copy defaults, or the Phase 3 visual direction. Make no unrelated changes. Preserve static files until QA confirms the Liquid theme faithfully replaces them; do not delete historical reference material unless the Director explicitly authorizes it.

## 7. Development handoff and QA gate

Developer must create only the theme architecture and asset migrations described above, validate Liquid/JSON syntax, and commit implementation separately from this specification. Before implementation, Director must approve this Phase 4 specification.

QA must independently verify: valid `layout/theme.liquid` and `templates/index.json`; section/snippet render paths; editor controls/defaults; collection/product/price/media fallback behavior; no hard-coded commerce data where Shopify objects are available; correct Ganja gallery mapping and interaction; intentional Dab Tools placeholder; logo/Hero_2 rendering; all accessibility and breakpoint requirements; and absence of cart/checkout/live-store operations. Any mismatch against `CATALOG.md` or Phase 3 behavior is a failed regression until fixed and retested.
