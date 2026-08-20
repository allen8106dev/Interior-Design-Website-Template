# Atelier Habitat — Interior Design Website Template

A production-ready, reusable interior design company website template.

Built for designers and agencies who need to launch polished client sites quickly by changing configuration — not rewriting components.

> **DEMO CONTENT — REPLACE BEFORE CLIENT DEPLOYMENT**  
> All company details, stats, projects, testimonials, and images belong to the fictional studio **Atelier Habitat**.

---

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router
- Lucide React (icons only)

Static output. Deploy on Vercel, Netlify, Cloudflare Pages, or any static host.

---

## Quick start

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build
npm run preview
```

`dist/` is the deployable folder.

---

## Project structure

```text
src/
├── components/
│   ├── layout/          # Navbar, Footer, RootLayout, SEO schema
│   ├── sections/        # Hero, About, Services, Projects, Contact, …
│   └── ui/              # Button, Gallery, Lightbox, Accordion, …
├── pages/               # Route-level pages
├── data/
│   └── siteConfig.ts    # ★ Primary customization file
├── services/
│   └── formService.ts   # Form submission abstraction
├── hooks/               # useSeo, useReveal, useScrollPosition
├── utils/               # WhatsApp links, helpers
├── types/               # Shared TypeScript types
└── index.css            # Design tokens (colors, fonts, radii)
```

---

## Where to change everything

### 1. Company information

Edit `src/data/siteConfig.ts` → `company`

- Name, tagline, description
- Phone, WhatsApp, email
- Address, service areas, map links

### 2. Colors / branding

**Tokens (recommended):** `src/index.css` inside `@theme`

| Token | Role |
| --- | --- |
| `--color-canvas` | Page background |
| `--color-ink` | Primary text |
| `--color-accent` | Buttons / emphasis |
| `--color-warm` | Soft accent (quotes, details) |
| `--font-display` | Headlines |
| `--font-sans` | Body |

Also update `branding.primaryColor` / `accentColor` in `siteConfig` for documentation and future theming.

### 3. Images

All demo images are referenced from `siteConfig`:

- `hero.image`
- `about.image`
- `services[].image`
- `projects[].coverImage` + `projects[].gallery`

Replace Unsplash URLs with client photography (local `/public` files or a CDN). Prefer compressed WebP/JPEG.

Example local path:

```ts
coverImage: '/images/clients/modern-3bhk-cover.jpg'
```

### 4. Projects

`siteConfig.projects` — each item supports:

- title, location, category, year
- cover + gallery
- description, challenge, solution
- servicesProvided, area, duration, featured

Project URLs: `/projects/{slug}`

### 5. Services

`siteConfig.services`

### 6. Testimonials

`siteConfig.testimonials`  
**Only publish reviews you have permission to use.** Demo reviews are clearly labeled.

### 7. FAQs, process, differentiators, stats

- `faqs`
- `process`
- `differentiators`
- `stats` ← mark verified numbers only

### 8. Contact / WhatsApp

WhatsApp links are generated from `company.whatsapp` (digits with country code, no `+`).

Form wiring: set `formEndpoint` in `siteConfig` to Formspree / your API.  
Logic lives in `src/services/formService.ts` — UI stays untouched.

### 9. SEO

- `siteConfig.seo` (title, description, siteUrl, ogImage)
- Per-page titles via `useSeo` in each page
- JSON-LD LocalBusiness / Organization / Services injected in `StructuredData`

Update `seo.siteUrl` before production.

---

## Create a new client website

1. **Copy** this project folder (or clone the repo).
2. **Replace** `src/data/siteConfig.ts` values.
3. **Swap** colors in `src/index.css` `@theme`.
4. **Replace** images (hero, about, projects, services).
5. **Set** `seo.siteUrl` and favicon in `/public`.
6. **Connect** the form (`formEndpoint` or custom `formService`).
7. **Remove** demo notices / fake testimonials / unverified stats.
8. **Build & deploy** `npm run build`.

### Example customization sketch

```ts
company: {
  name: 'Studio Meridian',
  phone: '+9198XXXXXXXX',
  whatsapp: '9198XXXXXXXX',
  email: 'hello@studiomeridian.in',
  // …
},
branding: {
  logoText: 'Studio Meridian',
  primaryColor: '#1F2A24',
  accentColor: '#8C6A4F',
},
```

No component rewrites required for a standard brochure + portfolio site.

---

## Deploy

### Vercel

- Import the repo
- Build: `npm run build`
- Output: `dist`
- `vercel.json` already rewrites SPA routes

### Netlify

- Build: `npm run build`
- Publish: `dist`
- `netlify.toml` + `public/_redirects` handle SPA fallback

### Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Add a SPA fallback to `index.html` in Pages settings if needed

---

## Lead generation features

- Sticky navbar CTA: Book a Consultation
- Hero primary / secondary CTAs
- WhatsApp buttons (dynamic)
- Mid-page CTA band
- Contact form abstraction
- Project detail → discuss similar project

---

## Accessibility & performance

- Semantic landmarks and heading hierarchy
- Keyboard-accessible mobile nav, accordion, lightbox
- Visible focus styles
- `prefers-reduced-motion` respected
- Lazy-loaded images (eager only for heroes)
- Lightweight dependency set

---

## Future extensions (architecture-ready)

Not implemented now, but easy to add later:

- Blog / CMS (content collections beside `siteConfig`)
- Booking / WhatsApp automation
- Before/after fields already typed on projects
- Auth, admin, Supabase, analytics
- i18n by swapping config modules
- Dark mode via additional CSS tokens

---

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Lint |

---

## License note

Template code is yours to customize and sell as client websites.  
Replace demo imagery with licensed client photos before commercial launch. Unsplash demo photos are for preview only — verify license terms for production use.
