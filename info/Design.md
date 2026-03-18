# 🎨 Design System Rules — HackIT 2026

## Vibe & Aesthetic
This project uses a **premium dark tech / space mission** aesthetic. Think:
- Deep space darkness with subtle ambient light
- Clean, sharp, minimal — Vercel/Linear inspired
- Slow drifting star field in background
- Military stencil typography for headings
- HUD-style monospace labels and metadata
- Controlled, purposeful motion — no flashy animations

**Never** use: neon green terminal UI, glowing drop shadows, glassmorphism blur cards,
aggressive animations, rounded pastel UI, Matrix-style effects, emoji in UI,
or any "hacker movie" clichés. This should feel like a real tech summit, not a movie prop.

---

## Color Palette
Always use these CSS variables. Never hardcode raw hex values in components.

```css
--color-cyber-black:  #03040a   /* Page background — deep space black */
--color-cyber-bg:     #0a0b14   /* Card / panel surfaces */
--color-cyber-cyan:   #FF6600   /* Primary accent — vibrant orange */
--color-accent-light: #FF8533   /* Gradient light end */
--color-accent-dark:  #CC5200   /* Gradient dark end / hover */
--color-hud:          #4a9eff   /* HUD blue — labels, tags, dates, timeline */
--color-hud-dim:      #1a3a5c   /* Dim HUD — subtle borders */
--color-cyber-gray:   #A0A0B2   /* Muted text, secondary info */
--color-cyber-light:  #F1FAEE   /* Reserved — use sparingly */
```

### 60 — 30 — 10 Accent Rule
This is the most important rule. Orange overuse is the #1 mistake.

| % | Color | Where |
|---|---|---|
| **60%** | White / Gray (`#fff`, `#A0A0B2`, `text-gray-400`) | Body text, descriptions, card content |
| **30%** | HUD Blue (`#4a9eff`) | Section prefix labels, dates, tags, timeline dots, mono metadata |
| **10%** | Orange (`#FF6600`) | **Only** — primary CTA buttons, active nav state, one heading accent word, hover text |

### Accent Usage
- Primary CTA buttons → `#FF6600` solid background
- Section heading accent word → gradient `from-[#FF8533] to-[#CC5200]`
- Active nav link + underline → `#FF6600`
- Section prefix labels (`// Timeline`) → `#4a9eff` HUD blue, **not** orange
- Dates, tags, metadata → `#4a9eff` HUD blue
- Timeline dots, roadmap nodes → `#4a9eff` HUD blue
- Card hover border → `hover:border-white/20` — never orange border
- Bullet points in lists → `text-gray-500` dash — never orange dot
- Role badges, pills → `bg-white/5 border-white/10 text-gray-400`
- Progress bars, judging criteria → `bg-white/60 to-white/20` — not orange fill
- Background glow orb (hero) → `#FF6600/6` opacity — barely visible

---

## Typography

### Font Stack
```css
--font-rajdhani: 'Rajdhani', sans-serif        /* Hero titles, section headings, card titles */
--font-mono:     'Share Tech Mono', monospace  /* HUD labels, tags, dates, metadata, timers */
--font-exo2:     'Exo 2', sans-serif           /* Body text, descriptions, buttons, paragraphs */
--font-clash:    'Clash Display', sans-serif   /* Premium section headings (secondary use) */
--font-space:    'Space Grotesk', sans-serif   /* Kept — secondary use only */
```

Import in `globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Share+Tech+Mono&family=Exo+2:wght@300;400;500;600&family=Space+Grotesk:wght@400..900&display=swap');
@import url('https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap');
```

### Typography Rules

| Element | Font | Style |
|---|---|---|
| Hero title / H1 | `var(--font-rajdhani)` | `font-bold uppercase tracking-tight` |
| Section H2 | `var(--font-rajdhani)` | `font-bold uppercase tracking-tight` |
| Card titles / H3 | `var(--font-rajdhani)` | `font-semibold uppercase` |
| Section prefix label | `var(--font-mono)` | `text-xs tracking-[0.3em] text-[#4a9eff] uppercase` |
| Dates / tags / metadata | `var(--font-mono)` | `text-xs tracking-[0.2em]` |
| Body text / descriptions | `var(--font-exo2)` | `text-sm md:text-base text-gray-400 leading-relaxed` |
| Buttons | `var(--font-exo2)` | `font-semibold text-sm` |
| Premium section headings | `var(--font-clash)` | For select sections only |

### Section Prefix Pattern
Every section must start with a HUD label above the main heading:
```tsx
<p
  className="text-[#4a9eff] text-xs tracking-[0.3em] uppercase mb-3"
  style={{ fontFamily: "var(--font-mono)" }}
>
  // Section Name
</p>
```

---

## Borders & Surfaces

### Standard Card
```css
background:  #0a0b14;
border:      1px solid rgba(255,255,255,0.08);
border-radius: 1rem;   /* rounded-2xl */
```
Tailwind: `bg-[#0a0b14] border border-white/8 rounded-2xl`

### Card Hover State
```css
background:    #0d0e1a;
border-color:  rgba(255,255,255,0.20);
```
Tailwind: `hover:bg-[#0d0e1a] hover:border-white/20 transition-all duration-300`

**Never** use orange border on hover. White/subtle only.

### Border Radius Rules
- Section cards / panels → `rounded-2xl` (16px)
- Buttons → `rounded-full` (pill shape)
- Input fields → `rounded-xl` (12px)
- Tags / badges → `rounded-full`
- Image containers → `rounded-xl` or `rounded-2xl`

---

## Spacing & Layout

### Section Structure
Every section follows this pattern:
```tsx
<section
  className="w-full py-24 px-4 flex flex-col items-center"
  style={{ fontFamily: "var(--font-exo2)" }}
>
  {/* Header */}
  <div className="text-center mb-16">
    <p className="text-[#4a9eff] text-xs tracking-[0.3em] uppercase mb-3"
       style={{ fontFamily: "var(--font-mono)" }}>
      // Section Label
    </p>
    <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight"
        style={{ fontFamily: "var(--font-rajdhani)" }}>
      Section Title
    </h2>
  </div>

  {/* Content */}
</section>
```

### Max Widths
- Full-width sections → `max-w-6xl mx-auto`
- Content / text sections → `max-w-4xl mx-auto`
- Narrow / form sections → `max-w-3xl mx-auto`

### Background
- Page background → `#03040a` set on `body` via inline style in `layout.tsx`
- **Never** add `bg-[#03040a]` on individual sections — it blocks the StarField canvas
- Cards always use `bg-[#0a0b14]`

---

## Background System

### StarField Canvas
A `<canvas>` rendered via `createPortal` directly into `document.body`.
- `position: fixed`, `z-index: -1`
- 180 stars, slow drift, subtle twinkling
- 85% white stars, 7% warm yellow, 8% cool blue
- **Must not** be blocked by solid section backgrounds

### Ambient Orbs
Used sparingly — maximum 2 per page:
```tsx
{/* Primary — Mars orange, top center */}
<div className="absolute top-0 left-1/2 -translate-x-1/2
                w-[800px] h-[500px] bg-[#FF6600]/6
                blur-[140px] rounded-full pointer-events-none" />

{/* Secondary — HUD blue, bottom right */}
<div className="absolute bottom-0 right-0
                w-[400px] h-[300px] bg-[#4a9eff]/4
                blur-[100px] rounded-full pointer-events-none" />
```
Keep opacity very low — `/6` or below for orange, `/4` for blue.

### Grid Mask (Hero only)
```tsx
<div
  className="absolute inset-0
             bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),
                linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]
             bg-[size:4rem_4rem]"
  style={{
    maskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, #000 40%, transparent 100%)",
    WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, #000 40%, transparent 100%)",
  }}
/>
```

---

## Animation Rules

### Philosophy
- Subtle and purposeful — never decorative
- Transitions: `duration-300` standard, `duration-500` for larger reveals
- Easing: `transition-all` default
- No bounce, no spring, no overshoot

### Allowed Animations
| Animation | Usage | Class / Style |
|---|---|---|
| Card hover lift | All interactive cards | `hover:-translate-y-1 transition-all duration-300` |
| Button hover lift | CTA buttons | `hover:-translate-y-0.5 transition-all duration-300` |
| Grayscale → color | Team member photos | `grayscale group-hover:grayscale-0 transition-all duration-500` |
| Opacity fade | Image hover | `opacity-60 hover:opacity-90 transition-opacity` |
| Top accent line | Core team cards | `w-0 group-hover:w-full transition-all duration-500` |
| Marquee scroll | Gallery, text banners | `animate-marquee` / `animate-marquee-reverse` |
| SVG path draw | Roadmap on scroll | `strokeDashoffset` animated via scroll progress |
| Star field drift | Background | Canvas `requestAnimationFrame` — very slow |
| Menu stagger | Navbar fullscreen | `opacity + translateY` with `${i * 60}ms` delay |

### What to Avoid
- ❌ `animate-bounce` — too playful
- ❌ `animate-ping` — too aggressive
- ❌ Rotating elements
- ❌ Scale on cards (`hover:scale-105`) — use translate instead
- ❌ Glow/bloom drop shadows on text
- ❌ `backdrop-filter: blur` on cards

---

## UI Patterns

### Buttons

**Primary CTA:**
```tsx
<button className="px-6 py-3 rounded-full bg-[#FF6600] text-white
                   font-semibold text-sm hover:bg-[#FF8533]
                   hover:-translate-y-0.5 transition-all duration-300"
        style={{ fontFamily: "var(--font-exo2)" }}>
  Label
</button>
```

**Secondary / Ghost:**
```tsx
<button className="px-6 py-3 rounded-full border border-white/15 bg-transparent
                   text-gray-300 text-sm font-semibold
                   hover:border-white/40 hover:text-white
                   transition-all duration-300"
        style={{ fontFamily: "var(--font-exo2)" }}>
  Label
</button>
```

**Disabled:**
```tsx
<button className="px-6 py-3 rounded-full bg-[#111118] border border-white/8
                   text-gray-600 text-sm font-semibold opacity-50 cursor-not-allowed">
  Label
</button>
```

### Input Fields
```tsx
<input
  className="w-full bg-[#0a0b14] border border-white/8 rounded-xl
             p-3.5 text-white text-sm placeholder:text-gray-600
             focus:outline-none focus:border-[#FF6600]
             focus:ring-1 focus:ring-[#FF6600]/30
             transition-all"
/>
```

### Tags / Badges
```tsx
<span className="text-gray-400 text-[10px] font-medium tracking-[0.2em]
                 uppercase bg-white/5 border border-white/10
                 px-4 py-1.5 rounded-full"
      style={{ fontFamily: "var(--font-mono)" }}>
  Tag Label
</span>
```

### Section Divider Line
```tsx
<div className="relative w-[55%] h-[1px]
                bg-gradient-to-r from-transparent via-white/10 to-transparent">
  <div className="absolute inset-0
                  bg-gradient-to-r from-transparent via-[#FF6600]/40 to-transparent
                  blur-[2px]" />
  <div className="absolute left-1/2 -translate-x-1/2 -top-[4px]
                  w-2 h-2 bg-[#FF6600] rounded-full" />
</div>
```

---

## Navbar

- Always fullscreen overlay hamburger — no horizontal link bar
- Hamburger: 3 lines → X animation, `h-[1.5px]` thin white lines
- Overlay: `rgba(3,4,10,0.97)` + `backdrop-filter: blur(24px)`
- Links: `var(--font-rajdhani)` `text-5xl md:text-6xl uppercase`
- Inactive links: `text-white/25` — active: `text-white` + orange underline
- Staggered entry: `${i * 60}ms` delay per link
- Body scroll locked when open
- Auto-closes on route change

---

## Image Handling

- Always use `next/image` for remote / public images
- Team photos: start `grayscale`, transition to color on `group-hover`
- Gallery: `grayscale` default, `grayscale-0` on `activeIndex`
- Logo images: no drop shadows — let the image speak
- `<img>` tags allowed only for local `/public` images that don't need optimization

---

## Architecture Rules

### Single Source of Truth
- Static data lives in `src/data/` — e.g. `problems.ts`, `team.ts`
- Both UI components and form dropdowns pull from the same array
- Never hardcode repeated data inline in components

### File Structure
```
src/
├── app/
│   ├── layout.tsx          ← fonts, metadata, StarField, Navbar
│   ├── globals.css         ← @theme tokens, keyframes, utilities
│   └── [page]/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── StarField.tsx       ← canvas via createPortal
│   └── [Section].tsx
├── data/
│   └── problems.ts         ← single source of truth
└── lib/
    └── firebase.ts
```

### Server Actions
- Cloudinary image fetches → `"use server"` to avoid `fs` errors on client
- Firebase writes → client-side is fine (using Firebase Web SDK)

---

## What to Avoid

- ❌ Orange on section labels, dates, tags, bullets, role badges
- ❌ `bg-[#03040a]` on sections — blocks StarField
- ❌ `hover:border-[#FF6600]` on cards — use `hover:border-white/20`
- ❌ Emoji in UI components
- ❌ `hover:scale-105` — use `hover:-translate-y-1` instead
- ❌ Glow drop shadows on text
- ❌ `font-outfit` or `font-outfit` class — replaced by `var(--font-exo2)`
- ❌ Hardcoded `#FFB300` amber — fully replaced by `#FF6600`
- ❌ `backdrop-filter: blur` on cards
- ❌ Solid `bg-black` anywhere — use `#03040a`
- ❌ Smooth `ease-in-out` on primary animations
- ❌ Inter / Roboto / system fonts