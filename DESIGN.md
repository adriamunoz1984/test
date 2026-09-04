# Munoz Miniz Homepage — Phase 3 Brand Assets and Product Gallery Specification

## Status, scope, and evidence boundary

**Status:** Implementation-ready design specification for Phase 3 only. It does not authorize implementation, a merge, deployment, publication, changes to `CATALOG.md`, price changes, or external communication.

**Objective:** Improve the visual polish of the approved, responsive Munoz Miniz homepage with the real repository assets while preserving the approved goth / rockabilly / horror direction and every Phase 2 catalog, accessibility, and POC boundary.

`CATALOG.md` remains the sole source of product names, prices, descriptions, features, status, merchandising order, and approved catalog facts. This specification only directs visual use of repository files. No image is evidence for a new catalog claim. Do not infer availability, variants, materials, compatibility, or a product URL from an image or filename.

## 1. Asset inspection record

The Designer inspected every asset under `assets/images/products` on 2026-09-04. The available files and their intended Phase 3 disposition are:

| Asset | Visual inspection | Phase 3 disposition |
| --- | --- | --- |
| `logo2.webp` | Black, white, and red Munoz Miniz symbol on a white rectangular field; portrait canvas with substantial white space above and below the mark. | Use as the supplied real logo in the header lockup; preserve the complete asset and its white field. Not a favicon source. |
| `Hero_1.webp` | Desaturated horror scene with a visible turquoise/blue object. | Do not use in the initial hero; retain as an unused repository asset. |
| `Hero_2.webp` | Square/near-square moonlit horror scene with a colorful object at left. | Mobile hero art source. |
| `Hero_2_wide.webp` | Wide moonlit horror scene with the colorful object held at left and open darker space through the center/right. | Desktop and tablet hero art source. |
| `Hero_3_wide.webp` | Wide dark character portrait with a colorful pendant-like object. | Do not use in the initial hero; retain as an unused repository asset. |
| `ganja_gadget_80s_forest_collection.webp` | Four open Ganja Gadget items arranged on a dark, gothic tabletop. | Ganja Gadget gallery default image. |
| `ganja_gadget_80s_forest_green_orange.webp` | Single open Ganja Gadget product view in a dark forest setting. | Ganja Gadget gallery image 2. |
| `ganja_gadget_80s_forest_lime_orange.webp` | Single open Ganja Gadget product view in a dark forest setting. | Ganja Gadget gallery image 3. |
| `ganja_gadget_80s_forest_pink_aqua.webp` | Single open Ganja Gadget product view in a dark forest setting. | Ganja Gadget gallery image 4. |
| `ganja_gadget_80s_forest_teal_blue.webp` | Single open Ganja Gadget product view in a dark forest setting. | Ganja Gadget gallery image 5. |
| `lighterSleeve_80s_forest_red.webp` | Red spiky lighter sleeve on a lighter in a dark forest setting. | Spiky Lighter Sleeve primary media. |
| `Bowlder_80s_forest_grad.webp` | A separate glass-and-printed-object photograph in a dark forest setting. | Do not associate with an active product or use in Phase 3 without Owner confirmation. |

No Dab Tools image exists in this directory. The observed `Bowlder` image must not be substituted for it or any other catalog product.

## 2. Brand direction and logo treatment

Keep the Phase 2 dark cherry, graphite, paper, and gold palette; bold display type; tactile edges; high contrast; and playful gothic / rockabilly / horror energy. Use real product media as the visual lead. Decorative textures, borders, and shadow treatments may support the media but must not introduce claims or compete with it.

### `logo2.webp` suitability and header use

`logo2.webp` is suitable as the real supplied brand symbol: its black/white/red mark fits the approved direction and is visually distinct from the text wordmark. Its white rectangular field is part of the supplied raster appearance; do not recolor, filter, blend, regenerate, trace, crop, or remove its background.

- Retain the existing home anchor and its accessible name, `Munoz Miniz home`.
- Render the full image with `object-fit: contain` inside a white, square-edged sticker field—not directly against the dark header. Keep it non-interactive inside the one existing home link and set `alt=""` because the link has the accessible name and adjacent visible `MUNOZ MINIZ` text.
- Target an image box of **44 × 56 CSS px** at 761 px and above, **38 × 48 CSS px** at 391–760 px, and **30 × 40 CSS px** at 320–390 px. Preserve the existing 44 px minimum target on the containing link, not on the image itself. Use matching intrinsic `width` and `height` attributes plus CSS sizing to reserve space.
- Keep a 6–8 px gap between the symbol and visible wordmark. At narrow widths, retain the existing utility-button hiding sequence before reducing the mark or type. The lockup must remain one line from 320 px with no overlap, wrapping, clipped text, or horizontal scroll.

### Favicon treatment

Do **not** add a favicon link or derive a favicon from `logo2.webp` in Phase 3. `CATALOG.md` still records favicon as Owner input, and Phase 2 explicitly prohibited deriving one from the logo asset. The browser’s current default/no-custom-favicon behavior remains until the Owner supplies approved favicon artwork and authorizes its use.

When supplied, the future favicon handoff must include an approved square source plus 16×16, 32×32, 48×48, and 180×180 exports, dark- and light-surface legibility confirmation, and an accessible page title. It is not in scope to manufacture those assets.

## 3. Hero treatment

Replace only the geometric `.hero-art` composition with supplied hero art; preserve the current hero copy, H1, buttons, landmarks, anchor behavior, and responsive order.

- Use a `picture` element inside the existing decorative hero-art region: `Hero_2_wide.webp` for viewports **≥ 761 px** and `Hero_2.webp` below **761 px**. Neither source is a product-card image or a product-fact assertion.
- Treat hero media as decorative (`alt=""`, `aria-hidden="true"` on the art wrapper); the existing text fully communicates the section’s meaning. Do not use an image caption or product name in the hero.
- Desktop/tablet art frame: retain the right-hand grid column; use an aspect ratio of **16 / 10**, `object-fit: cover`, and `object-position: 44% center`. Mobile art frame: retain the stacked layout; use **4 / 3**, `object-fit: cover`, and `object-position: 50% 45%`. These crops keep the scene legible while placing sufficient tonal separation behind the text, which remains outside the image frame.
- Keep the paper border and cherry offset shadow as a restrained frame. Remove the current faux disc, blocks, and grid within the media area rather than layering them over the supplied art. A static, low-opacity dark gradient may be used only at the frame edge for visual integration; it must not obscure the focal subject.
- Images must declare `width` and `height`, or an equivalent `aspect-ratio` reservation, and load without layout shift. No auto-playing media, parallax, or motion is permitted; keep existing `prefers-reduced-motion` behavior.

## 4. Featured-product media and gallery

Keep the active product cards in the catalog’s exact order: Ganja Gadget, Handmade Dab Tools, then Spiky Lighter Sleeve. Keep the exact existing catalog copy, prices, POC disclosure, and absence of product/checkout links.

### Shared media frame

- Use a dark graphite media well with the existing paper hairline and cherry offset shadow. The media frame is presentational; images must carry the product information through accurate alt text.
- Do not use `object-fit: cover` where it cuts off the product. Product media uses `object-fit: contain` on a graphite background by default. `object-position: center` is required.
- Reserve the image area before media loads. Main product media is **3 / 4** at desktop and **4 / 5** at 760 px and below, with a minimum 220 px visual height when the layout allows. Thumbnail wells are **1 / 1**, use `object-fit: cover`, and use `object-position: center` because they are selection previews, not the sole product view.
- Preserve the existing responsive product-grid behavior: three columns when space permits, two columns through the current intermediate breakpoint, one column at 390 px and below; no horizontal overflow. Media controls may wrap beneath the main image rather than shrink below a 44 px target.

### Ganja Gadget gallery

Use a five-image, client-side visual gallery inside the existing Ganja Gadget card. This is image selection only; it must not represent color/variant selection, inventory, a carousel purchase flow, or a product page.

1. Default main image: `ganja_gadget_80s_forest_collection.webp`.
2. Remaining image order: `ganja_gadget_80s_forest_green_orange.webp`, `ganja_gadget_80s_forest_lime_orange.webp`, `ganja_gadget_80s_forest_pink_aqua.webp`, `ganja_gadget_80s_forest_teal_blue.webp`.
3. Show five visible thumbnail buttons below the main image. On desktop they may form one row; at small widths use a wrapping grid (minimum **44 × 44 CSS px** each) with an 8 px gap. Do not hide images in hover-only UI.
4. Each thumbnail is a real `<button type="button">`, with an accessible name such as `Show image 2 of 5 for Ganja Gadget`; its thumbnail `<img>` has empty `alt`. Mark the active selector with `aria-current="true"` (or an equally exposed selected state) and a non-color-only treatment: paper outline plus a small visible `Current image` text for screen readers.
5. The selected full-size image is one substantive `<img>` whose alt changes with the selection. Use these approved visual descriptions, which make no new catalog claims:
   - image 1: `Four open Ganja Gadget items arranged on a dark textured surface.`
   - image 2: `An open Ganja Gadget shown against a dark forest floor.`
   - image 3: `An open Ganja Gadget shown against a dark forest floor.`
   - image 4: `An open Ganja Gadget shown against a dark forest floor.`
   - image 5: `An open Ganja Gadget shown against a dark forest floor.`
6. Gallery changes occur only after button activation (click, Enter, or Space), move no focus automatically, announce the new main-image alt through the changed image/content, and do not autoplay or auto-advance. Optional left/right keyboard navigation is allowed only when focus remains on the thumbnail button and the button’s accessible state updates.

### Spiky Lighter Sleeve media

- Use `lighterSleeve_80s_forest_red.webp` as the single primary image. It is not a gallery and must not imply unapproved color availability.
- Keep its portrait presentation in a **2 / 3** main media frame using `object-fit: contain` and `object-position: center`; this preserves the full lighter and sleeve rather than square-cropping it as Phase 2 does.
- Use this exact alt text: `A red spiky lighter sleeve fitted around a lighter on a dark forest floor.` The visible image color is descriptive only and does not change the catalog’s `NEEDS OWNER INPUT` materials/colors field.
- Do not create thumbnails, swatches, image zoom, lightbox, or color labels for this product until those data and behavior are approved.

### Handmade Dab Tools image slot

No product image file is approved or available. Retain this active card in second position and show a deliberately non-pictorial media placeholder with the visible text **`Product image not yet available`**. It must have the same reserved media dimensions as the other cards, a dashed cherry border, graphite background, and no illustration, icon, stock image, generated image, or decorative object that could be read as the product.

The placeholder is not an image: use text in the card’s normal reading order (not `alt` text), do not provide gallery controls, and do not label the active product itself as “Coming Soon.” Replace it only after the Owner provides an approved image reference.

## 5. Accessibility, performance, and responsive acceptance criteria

1. Preserve the Phase 2 semantic landmarks, skip link, single H1, heading hierarchy, visible focus styling, sticky-header anchor offset, and all existing mobile-menu behavior (close control, Escape, focus trap, and focus return).
2. All substantive product images have concise, accurate alt text; decorative hero art and the redundant logo image use empty alt text. No filename is exposed as alternative text.
3. Every gallery selector has a visible, programmatic selected state, keyboard operation, 44 × 44 px minimum target, and focus indicator meeting the existing high-contrast focus style. Image selection must not cause a layout shift or unexpected focus movement.
4. All media has explicit dimensions or an `aspect-ratio` reservation, uses responsive source selection for the hero, and avoids visual cropping that hides the product. Do not lazy-load the first hero or first visible product image; later gallery images may use `loading="lazy"`.
5. Test at **320 px, 390 px, 760 px, 761 px, 1024 px, and 1440 px**: no horizontal overflow; no logo/menu collision; gallery controls remain reachable; full product imagery remains visible; and the existing grid collapse remains intact.
6. Maintain WCAG 2.2 AA contrast, text resizing/reflow, `prefers-reduced-motion`, and existing newsletter/dialog behavior. The gallery does not create false commerce, submission, availability, or variant-selection behavior.

## 6. Non-goals and handoff boundary

This spec does not authorize an implementation task. It does not alter `CATALOG.md`, create a favicon asset, associate `Bowlder_80s_forest_grad.webp` with a product, invent Dab Tools imagery, add product URLs, add checkout, merge, deploy, publish, or make any external change.

Developer work requires explicit Director delegation followed by independent QA review before any merge consideration.
