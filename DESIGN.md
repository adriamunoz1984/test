# Homepage Design Specification — Goth / Rockabilly 3D-Print Storefront

## Status
Design ready for Director review. This is a proof-of-concept specification only; it is not authorization to implement, publish, or deploy.

## 1. Experience goal

Create a high-contrast, shop-first homepage for a maker-led 3D-print storefront. It should feel like a neon-lit rockabilly garage crossed with a tasteful gothic parlor: playful, tactile, slightly dangerous, and legible enough to buy from quickly. The visual language must sell the objects—not turn the page into a novelty haunted-house theme.

Primary visitor actions:

1. Browse by aesthetic/vibe.
2. View new products.
3. Discover a featured collection.
4. Start a custom-print inquiry.
5. Join the email list.

## 2. Visual direction

### Mood and composition

- Dark ink background, warm bone-colored reading surfaces, and restrained hot-pink/red accents.
- Use large editorial type for headlines, condensed display labels for shop signage, and a neutral sans-serif for all body copy and commerce UI.
- Blend 1950s sign-painting cues (badges, starbursts, checkerboard details) with gothic motifs (arched frames, tiny bats, thorns, coffin-like product silhouettes). Keep decoration at section edges so it never obscures text or product photography.
- Product imagery is the brightest element after CTAs. Use a consistent studio treatment with hard directional light, soft shadow, and an optional subtle colored rim light.
- Avoid generic horror imagery, busy textures behind copy, and illegible script fonts.

### Color tokens

| Token | Value | Use |
| --- | --- | --- |
| `ink` | `#120D12` | Page background, dark cards, navigation |
| `coal` | `#231B23` | Elevated dark surfaces |
| `bone` | `#F4EBDD` | Primary light text/surfaces |
| `ash` | `#B9AFB3` | Secondary text and dividers |
| `cherry` | `#D72D45` | Primary CTA, price/emphasis, focus accents |
| `hot-pink` | `#FF5B9A` | Small highlights and hover treatment |
| `acid` | `#C9E84A` | Limited “new”/badge accent only |
| `chrome` | `#D5D4D0` | Metallic linework and icon details |

Use `bone` text on dark backgrounds and `ink` text on light surfaces. Do not use `hot-pink` or `cherry` for long-form text. Maintain WCAG AA contrast for normal text and interactive controls.

### Typography

- **Display:** `Bebas Neue` or another licensed/open condensed grotesk; uppercase, tracked slightly (`0.02em–0.04em`). Used for page titles, category names, and compact labels only.
- **Editorial accent:** `DM Serif Display` or `Cormorant Garamond`; used sparingly for a short hero phrase and collection title, never navigation or product data.
- **UI/body:** `Inter` or `Work Sans`; 16 px desktop/mobile body base, 1.5–1.6 line height.
- Headline scale: hero 56–72 px desktop / 40–48 px mobile; section titles 36–48 px desktop / 28–34 px mobile; card titles 18–22 px.
- Never communicate important information through case, color, or a decorative face alone.

## 3. Global shell

### Header

- Sticky header with a thin announcement bar above it: “Small-batch oddities, made to order.” Keep it dismissible only if a real implementation supports persistence; otherwise static.
- Header includes wordmark/logo at left, primary navigation (`Shop`, `Collections`, `Custom Prints`, `About`) centered or adjacent, and search, account, and cart utilities at right.
- Header background is opaque `ink` after scroll; at top it may be transparent over a dark hero only if every control remains high contrast.
- Mobile: wordmark, search, cart, and an accessible menu trigger. Menu opens as a full-height dark panel with visible close control and focus trapped while open.

### Layout system

- Content max width: 1280 px; horizontal gutters: 24–40 px desktop, 16–20 px mobile.
- Section spacing: 96–128 px desktop, 64–80 px tablet, 48–64 px mobile.
- Use a 12-column desktop grid, 8-column tablet grid, and 4-column mobile grid. Product cards must retain equal media ratios in a row.
- Reuse a modest 8 px spacing rhythm and 12–16 px corner radius; use pointed/arched decorative frames only as nonessential enhancements.

## 4. Homepage sections, in order

### A. Hero — “Made for the delightfully strange”

- Full-bleed dark hero, 640–760 px desktop height and at least 620 px mobile including content. Split layout on desktop: copy left, a single hero object/scene right; stacked on mobile with copy first.
- Eyebrow: `3D-PRINTED ODDITIES • SMALL BATCH`.
- Headline: `Made for the delightfully strange.` Use display plus a short editorial accent; limit to 2–3 lines at desktop and 3–4 mobile.
- Supporting copy: 1–2 sentences about expressive, made-to-order decor/accessories. Do not invent manufacturing or shipping claims.
- Primary CTA: `Shop new arrivals`; secondary CTA: `Explore by vibe` (outline or text-with-arrow). Both link to real destinations when implementation begins.
- Imagery: one high-quality cutout or studio scene of 2–4 best products, with a subtle checkerboard/shadow backdrop. Provide meaningful alt text; decorative flourishes have empty alt text / are presentation only.

### B. Shop by Vibe

- Light `bone` section with dark type. Header: `Shop by Vibe`, a one-line invitation, and optional `View all` link.
- Four visual category tiles: `Graveyard Glam`, `Hot Rod Relics`, `Cute but Cursed`, `Dungeon Desk` (names are content placeholders pending merch confirmation).
- Desktop: four cards in one row; tablet: two-by-two; mobile: horizontally scrollable snap row or 2-column grid—choose one consistent pattern and preserve 44 px minimum tap targets.
- Each tile has 4:5 imagery, dark gradient caption area, category name, item-count placeholder only if true data is available, and a whole-card link. Hover: image scale no greater than 1.04, visible border/arrow shift; keyboard focus mirrors hover without relying on motion.

### C. New & Notorious

- Dark section. Header with `New & Notorious` and `Shop all` link.
- Product grid: four cards desktop, two tablet, two mobile; on very narrow screens, allow horizontally scrollable cards only if a full grid makes cards under 140 px wide.
- Product card includes square 1:1 media, optional `New` or `Limited` badge, product name, price area, and quick-add only if variant selection can be handled safely. If variants exist, use `Choose options` instead of a misleading one-click add.
- Media background should be `coal` or `bone`, chosen consistently for the full row. Reserve image space to avoid layout shift.

### D. Built for the Strange trust strip

- Thin high-contrast horizontal strip between shopping blocks. Three to four short proof points with simple line icons: `Made in small batches`, `Designed for your dark side`, `Customizable when possible`, `Packed with care`.
- Treat all statements as placeholders requiring owner verification; never show material, durability, origin, or delivery claims without confirmation.
- Desktop inline; mobile two-column grid or stacked list. Icons are decorative only if the text repeats their meaning.

### E. Featured Collection

- Asymmetric banner, `cherry`/dark gradient field with an oversized collection image framed like a vintage poster.
- Copy: eyebrow `FEATURED COLLECTION`, title placeholder `The Midnight Menagerie`, two-line description, CTA `Enter the collection`.
- Desktop uses 5/7 or 6/6 image/copy split; mobile places image before copy. Maintain 4:3 image area and a clear CTA above the fold of this component.

### F. Custom Print callout

- Light panel with dark border and restrained chrome/thorn illustration. Goal: route visitors to an inquiry flow, not promise that every request is accepted.
- Heading: `Got a weird idea? Let’s make it real.`
- Copy names the intended request inputs: reference, size, color, and use case. CTA: `Start a custom request`.
- Include a small expectation note: `Availability and pricing confirmed after review.` This is required to avoid overpromising.

### G. Community / social proof

- Dark section headed `Seen in the Wild`.
- Six square user/community images in an offset collage or uniform grid; use only consented user-generated content or branded images. Each clickable tile needs descriptive alt text/caption and destination disclosure when it leaves the site.
- Supporting CTA: `Tag @brand to get featured` is a placeholder until the social handle and campaign consent process are confirmed.
- If proof/assets are unavailable, use a styled editorial gallery rather than fabricated reviews, follower counts, or testimonials.

### H. Footer

- Email panel first: `Join the misfit mailing list` with one field, clear submit button, visible privacy link, success/error state, and consent wording appropriate to the actual email platform.
- Footer links grouped as Shop, Help, and Social; include contact, policies, accessibility statement if available, and copyright.
- Use a compact gothic divider motif, but prioritize readable navigation and legal text.

## 5. Components and interaction states

### Buttons and links

- Primary: `cherry` fill, `ink` text; hover darkens slightly or shifts to `hot-pink`; active has an inset/pressed treatment.
- Secondary: transparent with `bone` or `ink` border based on surface; hover fills with the inverse surface color.
- All interactive elements have a 2 px visible focus ring in `acid` or `bone` with at least 3:1 contrast, 44×44 px minimum hit area, and clear disabled state (reduced contrast plus `aria-disabled`/native disabled as applicable).

### Cards, badges, and forms

- Cards lift 2–4 px or add a border on hover; respect `prefers-reduced-motion` by removing transform animation.
- Badges are short, uppercased, and text-backed (`New`, `Limited`); never convey sale/stock status by color alone.
- Inputs have persistent visible labels (email label may be visually concise but cannot be placeholder-only), inline validation, error text associated programmatically, and no validation based only on color.

### Motion

- Use 150–250 ms opacity/transform transitions only. Hero decorative elements may drift subtly; disable nonessential motion under `prefers-reduced-motion`.
- No autoplay video, flashing, rapid checkerboard animation, parallax dependent on pointer movement, or text that moves on hover.

## 6. Responsive requirements

- Design from 320 px upward; validate at 320, 375, 768, 1024, 1280, and 1440 px widths.
- Navigation collapses before labels crowd; no horizontal page overflow.
- Hero art must not crop product focal points or cover copy. Maintain a readable image alternative where image loading fails.
- Tile and product grids adapt as specified, with card titles/prices remaining visible without truncating essential information.
- Sticky header must not hide anchored section headings; account for it in scroll offset.
- Hover-only affordances must remain available through touch and keyboard interaction.

## 7. Assets and content inputs required before implementation

- Final wordmark/logo and favicon; otherwise use a text wordmark placeholder, not an invented logo.
- One hero composite or 2–4 isolated product renders; four category images; 4–8 product images; one featured-collection image; six approved community/gallery images.
- Product names, prices, availability/badges, category/collection URLs, and verified trust statements.
- Custom-request destination/form, email provider integration and required consent/privacy copy, social handles and approved outbound links.
- Font licensing/hosting decision. Use web-safe fallbacks until confirmed.

Image guidance: use WebP/AVIF where supported with responsive sources; preserve product cutout transparency when useful; supply meaningful product alt text that describes object, color, and visible distinguishing feature. Do not embed text that is essential to understanding within images.

## 8. Accessibility and quality bar

- Conform to WCAG 2.2 AA for contrast, keyboard access, focus order/visibility, semantic landmarks/headings, form errors, and reduced motion.
- Use one H1 (hero); section headings use H2; card titles follow the surrounding hierarchy.
- Provide `main`, `nav`, and `footer` landmarks, a visible skip link, and accessible names for icon-only controls.
- Images must have appropriate alternatives; purely decorative assets are hidden from assistive technology.
- Keep initial page weight disciplined: lazy-load below-the-fold imagery; reserve dimensions; do not load decorative libraries solely for ornaments.

## 9. Implementation acceptance criteria

The eventual implementation is ready for QA only when all of the following are true:

1. It contains the eight sections above in the specified order, with both hero CTAs, shopping/category links, custom-request CTA, and email signup UI present.
2. It implements the color and typography hierarchy while preserving WCAG AA contrast and readable body text.
3. It works without horizontal scrolling from 320 px through desktop and follows the stated grid/navigation behavior.
4. Every keyboard-reachable control has a visible focus state; menus, forms, and icon controls have accessible names and operable states.
5. Product/category cards, buttons, and forms visibly support default, hover/focus, active, disabled (when relevant), success, and error states.
6. Images have reserved space, appropriate responsive delivery, and accurate alt behavior; no fabricated reviews, claims, social proof, or commerce data are presented as fact.
7. Nonessential animation honors `prefers-reduced-motion` and no content relies on hover, motion, or color alone.
8. Placeholder content is clearly identifiable and can be replaced by the approved asset/content inputs without structural redesign.

## 10. Open decisions for Director/Owner

- Confirm brand name/wordmark, product catalog, prices, and the final category/collection naming.
- Approve or revise the trust-strip claims after verifying actual fulfillment/customization capabilities.
- Confirm custom-order intake process, social handle, email provider, privacy/consent language, and all final imagery permissions.
- Confirm font choices and any available brand photography/render style.

## Handoff rule

Developer must not begin implementation until the Director explicitly marks this specification ready and delegates the work. Owner approval remains required for any merge to `master`, deployment, public publishing, spending, or other irreversible action.
