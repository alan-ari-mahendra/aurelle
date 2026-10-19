# Aurelle Skin Clinic — Landing Page

Next.js (App Router) build of the Aurelle Skin Clinic landing page, based on the Upwork catalog prototype `docs/catalog-2-aurelle-clinic.html`. This phase is built in React/Next.js to go live fast; once objectives are validated it will be rebuilt in Elementor/WordPress (see [Rebuilding in Elementor](#rebuilding-in-elementor) below).

## Getting started

```bash
bun install   # or npm install / yarn / pnpm
bun dev       # or npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The page auto-updates as you edit files.

Other scripts:

```bash
bun run build   # production build
bun run start   # serve the production build locally
bun run lint    # eslint
```

## Folder structure

```
src/
  app/
    layout.tsx          # fonts (next/font), metadata, robots, OG image
    page.tsx             # assembles all sections in order
    globals.css          # design tokens (@theme), base styles, .wrap/.section-padding
    icon.tsx              # favicon, generated via next/og ImageResponse
    api/book/route.ts     # booking form submission endpoint (validates + logs)
  components/
    sections/             # one component per page section (Header, Hero, Marquee,
                           # About, Treatments, Doctor, Reasons, Results,
                           # Testimonials, Booking, Footer)
    ui/                    # reusable pieces: Button, Eyebrow, GhostText,
                           # TreatmentCard, BookingForm
  lib/
    data.ts                # all page content (treatments, testimonials, hours,
                            # doctor bio, nav links, image paths + alt text, etc.)
public/
  images/                  # downloaded local photos (see Photo credits below)
docs/
  catalog-2-aurelle-clinic.html   # original HTML/CSS prototype (source of truth for design)
  task1.md – task7.md              # per-phase task briefs, checkboxes mark completion
  task6-qa-report.md                # Lighthouse + accessibility QA findings
  lighthouse/                        # Lighthouse HTML/JSON reports + score screenshots
  qa-screenshots/                    # full-page screenshots at 1440/1024/767/390
```

Content is intentionally kept out of JSX and centralized in `lib/data.ts`, so swapping copy (e.g. during the Elementor rebuild) doesn't require touching component code.

## Design tokens

Defined in `src/app/globals.css` under `@theme`, taken directly from the prototype's Style Guide.

**Colors** (`bg-*`, `text-*`, `border-*`): `cream` `#F8F5F0` · `cream-2` `#F1ECE4` · `ink` `#2A2630` · `ink-2` `#5E5866` · `muted` `#8E8793` · `line` `#E6E0D8` · `rose` `#C9A092` · `rose-2` `#E7CFC6` · `rose-3` `#F4E6E1` · `lav` `#D9D4EA` · `lav-2` `#ECE8F4` · `gold` `#B89B6E`

**Radius** (`rounded-*`): `28` `24` `14` `999`

**Container**: `.wrap` — `min(1180px, 100% - 48px)`, tightens to `100% - 40px` under 720px (matches the prototype's mobile gutter exactly).

**Section spacing**: `.section-padding` — 120px vertical, 80px under 720px.

**Fonts**: Cormorant Garamond (serif, headings) + Jost (sans, body), both self-hosted via `next/font/google`.

**Animations**: `animate-marquee` (40s, pill ticker), `animate-badge-spin` (16s, hero "est." badge) — registered via `@theme`'s `--animate-*` namespace, not arbitrary values (Tailwind/Turbopack was found to drop plain top-level `@keyframes` not registered this way — see git history for the debugging trail if it resurfaces).

## Photo credits

All photos in `public/images` are free-to-use stock photography from [Unsplash](https://unsplash.com), downloaded locally (not hotlinked) and cropped server-side to the layout's exact aspect ratios. **Replace these with real Aurelle Skin Clinic photography before client delivery** — they're acceptable for the portfolio/catalog thumbnail but are not the clinic's actual photos.

| File | Used for | Source |
| --- | --- | --- |
| `hero-treatment.jpg`, `og-cover.jpg` | Hero section, Open Graph image | https://images.unsplash.com/photo-1570172619644-dfd03ed5d881 |
| `about-clinic-main.jpg` | About section, main photo | https://images.unsplash.com/photo-1616394584738-fc6e612e71b9 |
| `about-consultation-detail.jpg` | About section, circular overlay photo | https://images.unsplash.com/photo-1512290923902-8a9f81dc236c |
| `doctor-portrait.jpg` | Doctor section | https://images.unsplash.com/photo-1594824476967-48c8b964273f |
| `result-laser-resurfacing.jpg` | Results section, Laser Resurfacing | https://images.unsplash.com/photo-1596755389378-c31d21fd1273 |
| `result-acne-scar-program.jpg` | Results section, Acne & Scar Program | https://images.unsplash.com/photo-1515377905703-c4788e51af15 |
| `result-skin-brightening.jpg` | Results section, Skin Brightening Peel | https://images.unsplash.com/photo-1559599101-f09722fb4948 |

## Rebuilding in Elementor

Notes for whoever (future-you included) rebuilds this in Elementor/WordPress:

- **Design tokens above map directly to Elementor Global Colors/Fonts/Container settings** — set them up first so every widget can reference them instead of hardcoding values, same principle as the Tailwind `@theme` here.
- **`lib/data.ts` is the content manifest.** Every piece of copy, every image path + alt text, treatment list, testimonials, opening hours, nav links — all in one file. Use it as the checklist for what needs a corresponding Elementor dynamic field / ACF field, so nothing gets missed or re-typed from scratch.
- **The booking form** (`components/ui/BookingForm.tsx` + `app/api/book/route.ts`) currently validates client-side and logs the submission server-side — there's no email delivery wired up yet (Resend was left optional, see `docs/task4.md`). In Elementor this is the one piece that isn't a 1:1 visual port: you'll want Elementor Pro's Form widget (or WPForms/Gravity Forms) wired to actual email/CRM delivery, not a reimplementation of the React form.
- **Marquee and the rotating "est." badge** are CSS-only animations (`@keyframes`, see `globals.css`) — straightforward to recreate with Elementor's marquee widget or a small custom CSS snippet; no JS dependency.
- **Mobile section reordering** (Hero's trust row moves after the photo; Booking's form moves above opening hours on mobile) was done via CSS Grid explicit placement, not duplicated markup — in Elementor this typically needs the "reverse columns" / custom order controls, or splitting into separate mobile-only and desktop-only sections if the widget doesn't support reordering directly.
- **Accessibility fixes from `docs/task6-qa-report.md` carry over**: the `ink-2` substitution for small muted text, the 44px minimum touch targets, and the visible focus ring on form fields are not optional polish — replicate them, not just the visual layout.
- **Known open item**: the brand `rose` color fails WCAG AA text contrast on light backgrounds (documented in the QA report). Decide before rebuild whether to keep it as-is (decorative/large-text use only) or introduce a darker text-safe variant.

## Deploying

```bash
bun run build
bun run start   # verify the production build locally before pushing
```

Then deploy via the [Vercel Platform](https://vercel.com/new) connected to this repo's GitHub remote. Set `NEXT_PUBLIC_SITE_URL` in the Vercel project's environment variables to the production URL (used to resolve the Open Graph image to an absolute URL).
