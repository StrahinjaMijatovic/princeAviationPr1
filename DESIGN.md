# Design

## Theme

Ink-cinematic. A deep, near-black blue-ink canvas — the pre-dawn apron and high-altitude night — against which white aircraft and warm golden-hour photography glow. Crimson (the brand mark) is the single committed accent; gold is a thin structural thread only. Dark throughout; luminance comes from photography, not light surfaces. Scene: a high-profile client opening the site at night on a phone, or a flight department on a large monitor — the mood is a runway at civil twilight, engines about to spool.

## Color

OKLCH. Committed strategy: dark canvas + crimson signature.

- `--bg`: oklch(0.15 0.022 258) — deep ink, faint navy bias
- `--bg-2`: oklch(0.19 0.025 258) — raised surface / section alt
- `--bg-3`: oklch(0.24 0.028 258) — cards / chips
- `--ink`: oklch(0.97 0.006 250) — primary text on dark
- `--ink-muted`: oklch(0.78 0.012 250) — secondary text (≥4.5:1 on --bg)
- `--ink-faint`: oklch(0.62 0.012 250) — labels, captions (large/secondary use)
- `--crimson`: oklch(0.57 0.215 26) — brand red, primary accent / CTA
- `--crimson-bright`: oklch(0.64 0.235 28) — hover / glow
- `--gold`: oklch(0.80 0.085 85) — hairlines, detailing, never fills
- `--line`: color-mix white 10% — hairline borders
- `--line-strong`: color-mix white 18%

Contrast: --ink and --ink-muted clear AA on --bg; crimson used for large text, buttons, and marks (not small body). Placeholders use --ink-muted, not fainter.

## Typography

next/font/google, self-hosted at build.

- **Display / headings — Archivo** (variable wght). Engineered grotesque with an aerospace/signage read. Hero + section heads at heavy weights (700–900), tight tracking (-0.02 to -0.035em), `text-wrap: balance`. Hero clamp max ≤ 6rem.
- **Body / UI — Hanken Grotesk**. Humanist grotesque, pairs on the geometric↔humanist contrast axis. Measure capped 65–72ch, `text-wrap: pretty` on prose.
- **Data / labels — JetBrains Mono**. Sparing, authentic to flight ops: tail numbers, coordinates, section indices, "AOG · 24/7", uppercase tracked micro-labels.

Modular scale ≥1.25; fluid clamp() on headings. Light-on-dark: +0.05–0.08 line-height.

## Motion

- **Engine:** GSAP + ScrollTrigger, Lenis smooth-scroll.
- **Signature:** preloader (mark assembly + mono count-up + curtain lift) → pinned hero takeoff (jet climbs, pitches, motion-streak, sky shifts) → a drawn flight-path line threading the four pillars with a jet glyph traveling along it on scroll.
- Ease-out expo/quart curves; no bounce/elastic. Premium materials allowed: blur, mask/clip-path curtain, soft glow, contrail.
- `prefers-reduced-motion`: static hero (jet parked, text shown), no pin, instant/crossfade reveals, flight-path drawn statically.

## Layout

- Full-bleed cinematic panels for pillars, alternating composition; generous fluid spacing with clamp(), varied rhythm.
- Semantic z-index scale (base → flight-path → nav → aog-float → preloader).
- Breakpoints ~640 / 900 / 1200. Mobile: flight path simplifies, hero takeoff shortened, AOG float persists.

## Assets

Source in `Galerija/`, optimized into `public/media/`. Hero jet: transparent Falcon side profile (YU-FVJ). Pillar imagery mapped 1:1 to real operations (charter golden-hour, in-house engine MRO, Cessna 172 academy, Tecnam training + Jeppesen charts). Brand mark recreated as inline SVG (crimson swirl) for crisp dark-mode lockup; wordmark set live in Archivo.
