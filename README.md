# KOKOLIKOOO — Fresh Chicken Delivered to Kigali

KOKOLIKOOO is Kacy Farms' poultry brand, serving hotels, supermarkets, and restaurants across Kigali, Rwanda. We deliver fresh, chilled chicken — 150 tons per year, always on time.

## Brand

- **Brand Name**: KOKOLIKOOO
- **Company**: Kacy Farms (Kacy Ltd)
- **Website**: https://kacy.rw

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Products, testimonials, FAQ |
| About | `/about/` | Company story, team, values |
| Contact | `/contact/` | Contact form, phone, location |
| Privacy Policy | `/privacy-policy/` | Data handling policy |
| 404 | `/404.html` | Custom error page |

## Project Structure

```
KACY/
├── index.html                    # Home page
├── 404.html                      # Error page
├── about/
│   └── index.html                # About page
├── contact/
│   └── index.html                # Contact page
├── privacy-policy/
│   └── index.html                # Privacy policy
├── components/
│   ├── navbar.html               # Reusable navigation
│   └── footer.html               # Reusable footer
├── css/
│   ├── style.css                 # Custom styles
│   ├── tailwind.css              # Built Tailwind CSS (generated)
│   └── input.css                 # Tailwind entry point
├── js/
│   └── main.js                   # Component loader + mobile menu
├── assets/
│   └── images/                   # Brand images and logos
├── tailwind.config.js            # Tailwind configuration
├── package.json                  # Build scripts
├── sitemap.xml                   # XML sitemap with image tags
└── robots.txt                    # Search engine config
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

- **Structured Data**: Organization, LocalBusiness, Product, FAQPage, BreadcrumbList
- **Open Graph + Twitter Cards**: Social preview tags on every page
- **Sitemap**: XML with image tags, submitted via robots.txt
- **Hreflang**: English and Kinyarwanda language tags
- **Canonical URLs**: Prevents duplicate content issues

## Copy Style

All website copy is written in plain, conversational language. No jargon, no corporate speak. The tone is direct and human — like talking to a real person who can help.

## Technologies

- **HTML5**: Semantic markup
- **Tailwind CSS v3**: Pre-built via CLI (not CDN)
- **Vanilla JavaScript**: ES6 modules
- **Font Awesome**: Icons (CDN)
- **Google Fonts**: Google Sans

## Updating Content

- **Logo**: Replace `assets/images/kokolikooo.jpeg`
- **Navbar/Footer**: Edit `components/navbar.html` or `components/footer.html`
- **Styles**: Edit `css/style.css`
- **Contact Info**: Update in all HTML files and components
- **After any HTML change**: Run `npm run build:css`

## Contact

- **Phone**: +250 788 309 077 | +250 788 867 296
- **Email**: info@kacy.rw
- **Address**: Cyanamo, Kabuga II, Rusororo, Gasabo District, Kigali, Rwanda

## License

Copyright © 2026 KOKOLIKOOO by Kacy Farms. All rights reserved.
