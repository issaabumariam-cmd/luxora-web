# LUXORA — Premium Oral Care Landing Page
## Presentation / Reference Document

---

## Slide 1: The Brand

**LUXORA**  
Premium oral care, reimagined.

- Whiten · Strengthen · Protect
- Luxury, clinical, glass/chrome aesthetic
- Target: Jordan / Middle East premium consumer

---

## Slide 2: What We Built

A cinematic, responsive landing page with **10 sections** in exact order:

1. Hero
2. Product Showcase
3. The Perfect Duo
4. What Really Matters
5. Complete Care Kit
6. Manual Care Kit
7. Why Luxora
8. Daily Ritual
9. Final CTA
10. Footer

---

## Slide 3: Design Direction

**Visual language:**

- White / ice / navy / silver / soft gold
- Glassmorphism + chrome metallic accents
- Blue glowing ribbon motif
- Premium typography: Playfair Display + Inter + Cormorant

---

## Slide 4: Tech Stack

| Layer | Tool |
|-------|------|
| Framework | Next.js 16.2.9 |
| Language | React 19 + TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Motion | Framer Motion 12.40.0 |
| UI Kit | shadcn/ui (base-nova) |
| Smooth Scroll | Lenis |
| Icons | Lucide React |
| Fonts | Google Fonts (Playfair, Inter, Cormorant) |

---

## Slide 5: Asset Extraction Pipeline

Real product photos extracted from 4 reference images using a custom Python pipeline:

- `rembg` with **BiRefNet** model for clean edges
- Alpha matting + edge cleaning
- Auto-crop + padding normalization
- Pillow re-save to fix browser decoding

**Gotcha:** reference filenames were misleading:
- `hero-logo-reference.png` → actually the dental care kit tray
- `dental-care-kit-reference.png` → actually the chrome tooth hero

---

## Slide 6: Key Components

- **LuxoraLogo** — serif wordmark
- **ChromeToothLogo** — 3D metallic tooth + ribbon
- **BlueRibbon** — flowing ribbon accent
- **SparkleField** — subtle particle field (disabled on mobile)
- **GlassCard** — frosted glass surface
- **ProductCard / ProductTray** — premium product layouts
- **RitualTimeline** — 3-step routine
- **ComparisonTable** — Manual vs Electronic
- **LuxuryCTA** — final conversion block

---

## Slide 7: Performance & Accessibility

**Mobile optimization:**
- Disabled Lenis smooth scroll on touch
- Removed sparkle particles on touch
- Killed `backdrop-filter` blur on touch
- Disabled hover shine/lift/shimmer on touch
- Slowed floating animations on touch
- Preserved `prefers-reduced-motion` support

**Accessibility:**
- Semantic HTML
- Alt text on key visuals
- Keyboard-accessible controls
- Reduced-motion support

---

## Slide 8: Build & Deployment

**Local commands:**
- `npm run dev` → http://localhost:3000
- `npm run build` → static export to `dist-export/`
- `python scripts/screenshot_site.py` → full-page QA capture

**Live deployment:**
- Platform: Vercel Hobby (free)
- URL: https://dist-export-gamma.vercel.app

**Source code:**
- GitHub: https://github.com/issaabumariam-cmd/luxora-web
- Branch: `main`

---

## Slide 9: Quality Status

| Check | Status |
|-------|--------|
| `npm run lint` | ✅ Passing |
| `npm run build` | ✅ Passing |
| Desktop visual QA | ✅ Verified |
| Mobile performance | ✅ Optimized |
| SEO metadata | ✅ Configured |
| Full WCAG audit | ⚠️ Not yet run |

---

## Slide 10: Next Steps

1. Test on iPhone / Android and confirm smooth scrolling
2. Rename Vercel project to `luxora-web` and connect GitHub for auto-deploys
3. Run full WCAG/accessibility audit
4. Add shop/waitlist or checkout integration when ready
5. Optional: replace any placeholder visuals with final brand photography

---

## Quick Reference

- **Live site:** https://dist-export-gamma.vercel.app
- **Repo:** https://github.com/issaabumariam-cmd/luxora-web
- **Project folder:** `D:\Opencode\Luxora\luxora-web`
- **Static export:** `dist-export/`
- **Extraction script:** `scripts/extract_premium_fixed.py`
- **PNG fix script:** `scripts/fix_pngs.py`
- **Screenshot script:** `scripts/screenshot_site.py`

---

*Document generated for LUXORA reference and handover.*
