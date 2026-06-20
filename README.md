# LUXORA — Premium Oral Care Landing Page

A cinematic, production-ready animated landing page for LUXORA, a luxury oral-care brand. Built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion, shadcn/ui, and Lenis smooth scroll.

## Visual Direction

Inspired by the reference images in `/public/assets/luxora/`:

- `hero-logo-reference.png` — chrome tooth emblem, blue glowing ribbon, floating strips, frosted background
- `combo-packaging-reference.jpeg` — The Perfect Duo packaging, navy + white + gold accents
- `dental-care-kit-reference.png` — complete care kit tray, toothbrush + floss + picks, 3/5 stat
- `manual-care-kit-reference.jpeg` — manual care kit, comparison table, premium product layout

These images were used as art direction; real products were extracted with AI background removal and rebuilt as a responsive web experience with glassmorphism and premium motion.

## Sections

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

## Tech Stack

- Next.js 14+ (currently 16.2.9)
- React 19
- TypeScript 5
- Tailwind CSS v4
- Framer Motion
- shadcn/ui (base-nova)
- Lenis smooth scroll
- Lucide icons
- Google Fonts (Playfair Display, Inter, Cormorant Garamond)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# The static export will be placed in ./dist-export
```

Open [http://localhost:3000](http://localhost:3000) after running `npm run dev`.

## Project Structure

```
app/
  globals.css        # Luxora design system tokens + utilities
  layout.tsx         # Fonts, metadata, Lenis provider
  page.tsx           # Landing page composition
components/
  luxora/            # Reusable brand components
  sections/          # 10 landing page sections
  ui/                # shadcn/ui primitives
public/
  assets/luxora/     # Reference images
```

## Key Components

- `LuxoraLogo` — serif wordmark
- `ChromeToothLogo` — animated metallic tooth + blue ribbon
- `BlueRibbon` — flowing ribbon accent
- `SparkleField` — premium sparkle particles
- `GlassCard` — frosted glass surface
- `ProductCard` — product showcase card with hover shine
- `BenefitIcon` — circular benefit icon
- `SectionHeader` — reusable section header
- `PremiumButton` — magnetic CTA with sweep animation
- `AnimatedStat` — scroll-triggered number counter
- `ProductTray` — deep navy product tray
- `ComparisonTable` — elegant Manual vs Electronic table
- `RitualTimeline` — 3-step timeline with ribbon progress
- `LuxuryCTA` — final conversion section
- `Footer` — premium footer with disclaimer

## Design Tokens

Colors:

- `--luxora-white: #F8FBFF`
- `--luxora-ice: #EAF4FF`
- `--luxora-mist: #D9E9F8`
- `--luxora-blue: #3A8DFF`
- `--luxora-ribbon: #7DBBFF`
- `--luxora-navy: #061A35`
- `--luxora-midnight: #020B18`
- `--luxora-silver: #C8D3E2`
- `--luxora-chrome: #EDF4FF`
- `--luxora-gold: #C8A24A`
- `--luxora-soft-gold: #E6C978`

Typography:

- Headings: Playfair Display
- Body: Inter
- Accent: Cormorant Garamond

## Accessibility

- Semantic HTML
- Proper heading hierarchy
- Alt text on key visuals
- Keyboard-accessible buttons/links
- `prefers-reduced-motion` support across animations
- Smooth scroll via Lenis (disabled when reduced motion is preferred)

## Disclaimer

Luxora products are cosmetic and oral-care products. Results may vary. Always follow product instructions and consult a dental professional for specific dental concerns.

---

Built with care for LUXORA.
