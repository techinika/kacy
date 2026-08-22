# KOKOLIKOOO — Fresh Chicken Delivered to Kigali

KOKOLIKOOO is Kacy Farms' poultry brand, serving hotels, supermarkets, and restaurants across Kigali, Rwanda. We deliver fresh, chilled chicken — 150 tons per year, always on time.

## Brand

- **Brand Name**: KOKOLIKOOO
- **Company**: Kacy Farms (Kacy Ltd)
- **Website**: https://kacy.rw

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Products, quality, certifications, FAQ |
| About | `/about/` | Company story, business units, values |
| Contact | `/contact/` | Contact form, phone, location map |
| Blog | `/blog/` | Poultry sourcing insights for Kigali kitchens |
| Privacy Policy | `/privacy-policy/` | Data handling policy |
| 404 | `/404.html` | Custom error page |

## Recent SEO work

This is a static, SEO-first site. Highlights of the latest audit-driven refresh:

- **Crawlable navigation**: the navbar and footer are inlined into every HTML
  page (no client-side `fetch()`), so internal links are present in the HTML
  source that crawlers see and there is no layout shift while they load.
- **Valid structured data**: every page ships a valid `@graph` of
  Organization → LocalBusiness → WebSite → BreadcrumbList (Article/BlogPosting
  on blog posts, FAQPage on the home page). Product offers are expressed as an
  `OfferCatalog` so no fabricated prices are ever published.
- **Image SEO**: all images are self-hosted, WebP (logos/photos) or AVIF, carry
  descriptive filenames and `alt` text, and have `width`/`height` to remove
  layout shift. A dedicated 1200×630 `og-image.jpg` is used for social
  previews.
- **Performance**: Google Fonts (Google Sans) are self-hosted from
  `/assets/fonts/` and preloaded; the Font Awesome kit is loaded with `defer`.
- **Local SEO**: NAP (name/address/phone) is consistent across the footer,
  JSON-LD, maps embed, and hCard; the LocalBusiness geo coordinates match the
  Google Maps pin.
- **Content**: a `Blog` section targets long-tail Kigali/B2B queries such as
  "chicken supplier Kigali", "whole chicken vs cuts", and "chicken cold chain".

## Project Structure

```
KACY/
├── index.html                     # Home page
├── 404.html                       # Error page
├── about/
│   └── index.html                 # About page
├── blog/
│   ├── index.html                 # Blog index
│   ├── choose-chicken-supplier-kigali/index.html
│   ├── whole-chicken-vs-cuts/index.html
│   └── cold-chain-fresh-chicken/index.html
├── contact/
│   └── index.html                 # Contact page
├── privacy-policy/
│   └── index.html                 # Privacy policy
├── components/
│   ├── navbar.html                # Navigation (inlined into every page)
│   └── footer.html                # Footer (inlined into every page)
├── css/
│   ├── style.css                  # Custom styles (self-hosted font, utilities)
│   ├── tailwind.css               # Built Tailwind CSS (generated)
│   └── input.css                  # Tailwind entry point
├── js/
│   └── main.js                    # Mobile menu + hydration (no content fetch)
├── assets/
│   ├── fonts/google-sans-latin.woff2   # Self-hosted Google Sans (latin subset)
│   └── images/                    # WebP/AVIF assets only
├── tailwind.config.js             # Tailwind configuration
├── package.json                   # Build scripts
├── sitemap.xml                    # XML sitemap with image tags
└── robots.txt                     # Search engine config
```

## Development

### Prerequisites

- Node.js 18+

### Getting Started

```bash
# Install dependencies
npm install

# Build CSS
npm run build:css

# Watch for changes (automatic rebuild)
npm run watch:css
```

Open `index.html` in your browser, or serve locally:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

### Building for Production

```bash
npm run build
```

This generates a minified `css/tailwind.css` from the HTML content sources. Always rebuild before deploying.

## SEO

- **Structured Data**: Organization, LocalBusiness, OfferCatalog, FAQPage,
  BreadcrumbList (BlogPosting/Article on blog posts) — all valid `@graph`.
- **Open Graph + Twitter Cards**: `og-image.jpg` (1200×630) preview tags with
  dimensions and alt text on every page.
- **Sitemap**: XML with image tags, submitted via robots.txt.
- **Local SEO**: Consistent NAP across footer, JSON-LD, and hCard; geo coords
  match the Google Maps pin.
- **Canonical URLs**: Trailing-slash canonicals on every page; no `hreflang`
  (single-language site).
- **Content**: `/blog/` targets long-tail Kigali/B2B queries.

## Copy Style

All website copy is written in plain, conversational language. No jargon, no corporate speak. The tone is direct and human — like talking to a real person who can help.

## Technologies

- **HTML5**: Semantic markup, inlined navbar/footer for crawlability
- **Tailwind CSS v3**: Pre-built via CLI (not CDN)
- **Vanilla JavaScript**: ES6 modules (mobile menu only; no content fetching)
- **Font Awesome**: Icons via deferred kit script (CDN)
- **Fonts**: Google Sans (self-hosted latin-subset WOFF2 in `/assets/fonts/`)
- **Analytics**: Google Analytics 4 (gtag, async)

## Updating Content

> The navbar and footer are **inlined into every HTML page** rather than loaded
> via JavaScript. When you update `components/navbar.html` or
> `components/footer.html`, apply the same change in every page's nav/footer
> block. There is **no JS component loader**, so static edits are instantly live.

- **Logo**: Replace `assets/images/kokolikooo-logo.webp`. It is referenced in
  the navbar, footer, and JSON-LD `logo`/`og:image` of every page.
- **Hero image**: Replace `assets/images/kacy-farms-hero.webp` on the home page.
- **Delivery vehicle / facility photos**: swap `delivery-truck-*.webp`,
  `processing-facility.webp`, `kacy-motel.webp`, `real-estate.webp`.
- **Social links**: update the social `<a>` hrefs and the `sameAs` JSON-LD
  arrays (one source of truth: `components/footer.html` + the Organization
  block on each page).
- **Fonts**: the Google Sans WOFF2 is self-hosted in `assets/fonts/`. Edit the
  `@font-face` rule in `css/style.css`, not a `<link>` to Google Fonts.
- **Contact Info**: NAP lives in `components/footer.html`, `contact/index.html`,
  and the LocalBusiness JSON-LD on every page — keep them in sync.
- **After any HTML or Tailwind class change**: run `npm run build:css`
  (Tailwind is purged against the HTML content). Static copy edits (text,
  inline styles) need no build step.

## Contact

- **Phone**: +250 788 309 077 | +250 788 867 296
- **Email**: info@kacy.rw
- **Address**: Cyanamo, Kabuga II, Rusororo, Gasabo District, Kigali, Rwanda

## License

Copyright © 2026 KOKOLIKOOO by Kacy Farms. All rights reserved.
