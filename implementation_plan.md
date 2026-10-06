# Portfolio refactor: implementation plan

Phases 1–2 (audit and site inspection) are mostly done. Nothing in the project has been modified yet.

## 0. Blockers and open decisions

> [!IMPORTANT]
> **The `frontend-design` skill was not found.** It is not in my skills list. The only skills and plugins I can see are `agy-customizations`, `antigravity-guide`, `permissioned-github`, `google-antigravity-sdk` and `modern-web-guidance-plugin`. `C:\Users\NOTEPS\.gemini\config` blocks directory listing for me, and there is no `.agents/` folder in the workspace. I won't claim I used it. Please send the folder path or repo URL. If you don't, I'll use the one resource I can read, `modern-web-guidance-plugin`, plus the principles in your rule, and I'll say so in the final report.

| # | Decision | My default |
|---|---|---|
| 1 | About section shows **Matrícula 2522696** and **Semestre 3º**. | Remove the matrícula (a student ID is wrong for a client-facing page). Keep the name, and mention "Análise e Desenvolvimento de Sistemas" in the footer. |
| 2 | **NexServe ERP**, plus the invented Fintech Dashboard, E-commerce Premium and AI Generator cards, are in the current Projects section. | Remove all four. They aren't in your list, three of them are placeholders, and the "Em breve nessa semana" copy is made up. |
| 3 | The calculator ("Calculadora de Orçamento") was **not found** anywhere in the repo. | Nothing to remove. I'll grep again after implementation to confirm. |
| 4 | Project tech tags. HTML alone can't confirm a stack. The browser subagent *guessed* "Next.js / Tailwind / Framer Motion", so I'm discarding those claims. | Show **no tags** unless the stack is provable. I'll check `github.com/MiguelitioDev` for the repos' `package.json`, and use tags only if they're public. |
| 5 | Hero video (5.4 MB Kling clip, watermark "KlingAI 3.0" visible in the corner). | Keep it, since it's your visual identity. Recompress it, add a poster frame, and crop or mask the watermark. |

## 1. Audit findings (verified)

**Code and stack:** React 19, Vite 8, TypeScript, CSS Modules, GSAP + Lenis. This is a good base and I'm keeping it.

**Content and SEO**
- `index.html` has `<title>premium-portfolio</title>`, `lang="en"` for Portuguese content, and no description, OG or theme-color tags.
- Hero copy is generic ("Engenharia de software inteligente… impulsionadas por IA").

**Structure and UX**
- There is no navigation and no mobile menu.
- Every contact link is the same size, so there's no primary CTA.

**Projects section**
- It uses a pinned, scrubbed horizontal GSAP scroll (`pin: true` + `xPercent`).
- This hijacks vertical scroll on touch devices. The browser audit also saw `scrollWidth` grow past 1500px while it runs.
- Cards have fake "Em Breve" badges, disabled GitHub buttons, and a letter placeholder instead of images.

**Performance**
- `Loader` blocks the page for 2.2s and keeps the content `visibility:hidden`, which hurts LCP.
- `perfil.webp` is 1.8 MB.
- The hero mounts two stacked `<video>` elements, with no poster and no `preload` control.
- `three`, `@react-three/fiber`, `@react-three/drei`, and probably `react-icons`, are in `package.json` but unused. The "3D background" is a 2D canvas.
- The particle canvas ignores `prefers-reduced-motion`. Its resize listener is never removed, and it ignores DPR.
- `src/foto/nexserve.png`, `src/assets/hero.png`, `react.svg` and `vite.svg` are unused.

**Visual**
- Generic "AI" look: cyan/blue glow, gradient uppercase hero text, particle network, glow pulses, blur badges.
- Font is Outfit at weights 200–700, loaded via CSS `@import`, which blocks rendering.

**Accessibility**
- Technologies status is color-dot only.
- `TechCard` is declared inside the component and typed `any`.
- There is no skip link and no visible focus styles. Headings have no hierarchy.
- The portrait is a CSS background image, so it has no alt text.

## 2. Verified project data

| Project | Source of truth | Identity | Reusable assets |
|---|---|---|---|
| **Onde Acampar Brasil** | `<title>`: "Vitrine e Catálogo de Campings". Footer: "Protótipo comercial para demonstração" | Cream `#FAF8F5`, terracotta, sage green. Plus Jakarta Sans. | `/logo-principal.png`, `/logo-icone.png` (the og:image and favicon the site itself declares) |
| **Cidade Alpha Ceará** | `<title>`: "Lotes Residenciais e Comerciais Alphaville em Eusébio". The URL is `-proto`. | Deep green + champagne gold. Playfair / Cinzel. | `/images/brand/cidade-alpha-banner.png` |
| **PEDRO FREITAS Conceito** | `<title>`: "Salão de Beleza em Aquiraz • Mechas & Loiros" | Near-black `#0A0A0A` + gold `#C9A86A`. Cormorant Garamond. | Not yet inspected visually. The subagent never reached it. I'll capture it with Playwright in the implementation phase. |

**Rules I'll follow for these entries**
- Descriptions use only phrases taken from each site's own meta and visible copy. They won't claim sales, clients or results.
- Onde Acampar and Cidade Alpha both self-describe as prototypes (the second via its `-proto` URL). I'll label them "Em andamento" and nothing more.
- I won't reuse third-party brand marks such as the Alphaville/Grupo Dibra logos. I'll use my own **screenshots** of the pages, taken with Playwright at 1440 and 390 wide and converted to AVIF/WebP.
- I won't copy any phone numbers or WhatsApp numbers from those sites.

## 3. Design strategy

**Direction: dark editorial, instead of "cyan tech glow".**
- **Keep:** dark theme and the hero video (your identity).
- **Change:** the signature color moves from `#8bb2f8` to one restrained cool-silver accent taken from the video, used sparingly. Inside the project cards, each project's *own* palette is the colour moment.
- **Typography:**
  - A characterful display face for headings. Candidate is **Fraunces** or **Instrument Serif**.
  - A neutral grotesk for body text, such as **Hanken Grotesk** or **Inter Tight**.
  - Self-hosted subset (`woff2`, `font-display: swap`) with preload. This replaces the blocking `@import`.
  - Drop the all-caps gradient headline in favour of a large, sentence-case headline with tight tracking.
- **Layout:** 12-column grid with a 1280px max container. Large numerals (01/02/03) and hairline dividers. Few borders, no glow, no glass.
- **Motion:**
  - Short reveal-on-scroll (opacity + 12px translate) via CSS or IntersectionObserver.
  - Lenis stays on desktop only, and is disabled for touch and for `prefers-reduced-motion`.
  - Remove the pulse and blur effects.
  - Particle canvas: **remove**. If you want to keep it, I'll make it reduced-motion aware, capped at about 60 particles, and desktop only. Default is remove.

**Section order**

```text
Header (sticky, minimal nav + CTA "Falar comigo")
Hero  →  Sobre / posicionamento  →  Capacidades (replaces the dot-legend tech grid)
Projetos → "Projetos em andamento" (01 Onde Acampar · 02 Cidade Alpha · 03 Pedro Freitas)
Contato  →  Footer
```

**Hero copy.** I'll keep your meaning (Análise e Desenvolvimento de Sistemas, web, performance) and make it more specific, using facts already on the site: "Desenvolvedor web · Análise e Desenvolvimento de Sistemas". I won't add claims such as years of experience.

**Capacidades.** The existing technology list is reused (React, TypeScript, Vite, Node.js, Python, IndexedDB, Zustand, Supabase, etc.). It becomes grouped text rows ("Interface · Dados · Integrações") rather than 13 icon cards. The three-level confidence legend becomes text labels (Em uso / Aprendendo / Básico), not color dots only.

**Projetos em andamento (the main piece).**
- A stacked editorial list instead of a pinned horizontal scroll.
- Each row has a large index (01), the project name, a one-line verified description, a status marker ("Em andamento"), a screenshot in the project's own frame, and a "Ver projeto ao vivo ↗" link. The link opens in a new tab with `rel="noopener"` and says it opens the real site.
- Desktop: alternating 7/5 grid. Mobile: image first, then text, one column, full-width tap target.
- No fake GitHub buttons.

## 4. Implementation steps

1. **Cleanup**
   - Remove unused dependencies (`three`, `@react-three/*`, and `react-icons` if it ends up used for only 2 icons). Replace with inline SVG or lucide.
   - Remove unused assets.
   - Fix `index.html` (title, `lang="pt-BR"`, description, OG, theme-color, favicon).
2. **Design tokens in `index.css`**
   - Colors, type scale with `clamp()`, spacing scale, focus ring, reduced-motion reset.
   - Self-hosted fonts.
3. **New `Header` component**
   - Sticky nav, accessible mobile menu, skip link.
4. **Rewrite `Hero`**
   - Poster image and a single `<video>` (the second video and crossfade logic are dropped unless the loop seam is visible).
   - Hero content is no longer blocked by the Loader.
5. **Rewrite `About`**
   - Real `<img>` with `width`/`height`/alt. Resize and recompress `perfil.webp` to about 100–150 KB.
6. **Replace `Technologies` with `Capabilities`**
   - Fix the `any`, and move `TechCard` out of the render.
7. **Rewrite `Projects`**
   - Static data in `src/data/projects.ts`, typed, three entries only.
   - Capture and optimise the 3 screenshots.
8. **`Contact` and `Footer`**
   - Primary CTA is WhatsApp (already in the repo). Email, GitHub and LinkedIn are secondary text links.
   - Fix touch targets (minimum 44px).
9. **Loader**
   - Remove it, or cut it to a minimum (≤500ms) that never hides content. Default is remove.
10. **Responsive pass at 320, 360, 375, 390, 414, 768, 1024, 1280 and 1440.**

## 5. Validation (bounded)

1. `npm run build` (runs `tsc -b`) and `npm run lint`.
2. One scripted Playwright pass:
   - 9 widths. Assert `scrollWidth <= innerWidth`, no console errors, all three project links return 200, and the calculator string is absent from the DOM.
   - Screenshots at 320, 390, 768 and 1440 for visual review.
   - Tab through the page and check focus-visible.
   - `prefers-reduced-motion` emulation.
3. Lighthouse once, to record performance, accessibility and SEO scores before and after.
4. **One** fix cycle, then one confirmation pass, then the final design review.

## 6. Risks

- **The `frontend-design` skill is unavailable** (see section 0). I'll report this honestly if it isn't resolved.
- **Pedro Freitas** hasn't been inspected visually yet. The data above comes from its HTML head only.
- **Browser subagent reliability.** Its report contradicted the source (it said Inter/Space Grotesk where the code uses Outfit, and it guessed stacks). I'm treating its output as screenshots only, and trusting source code and meta tags for facts.
- **Hero video watermark.** It's a visible "KlingAI" mark. It will be cropped or masked, and if that can't be done cleanly I'll flag it to you.
