# AQUANA - Euregio Freizeitbad Würselen (2026 Redesign)

Moderne Astro-5-Website für das **AQUANA**, das Euregio Freizeitbad in Würselen bei
Aachen. Ersetzt die alte Contao-CMS-Seite (aquana.de). Editorial-Stil nach dem
Vorbild von route66-hh.de / auto-motorrad-freigang.de: **"Vier Welten - ein Bad."**

Vier Welten unter einem Dach: **Freizeitbad · Saunawelt · Sport · Gastronomie** -
familienfreundlich, barrierefrei, für Gäste aus DE und NL.

## Tech-Stack

- **Astro 5** (STATIC, kein SSR/Adapter) · Output `dist/`
- **Tailwind v3.4** via `@astrojs/tailwind` · CSS inline (`inlineStylesheets: 'always'`)
- **@lucide/astro** Icons · **@fontsource** (Plus Jakarta Sans + Merriweather Sans, latin-only)
- Design-System: `src/styles/global.css` (`:root` = Single Source of Truth) + `tailwind.config.mjs`

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:4406
npm run build    # -> dist/
npm run preview
```

## Struktur

- `src/data/` - alle Inhalte (verbatim von aquana.de): `site.ts`, `worlds.ts`,
  `prices.ts`, `courses.ts`, `sauna.ts`, `sport.ts`, `freizeitbad.ts`, `news.ts`, `trust.ts`
- `src/components/` - Header (4-Welten-Mega-Nav + DE/NL), Footer, PageHero, CtaBand,
  WorldCard, ContentPageLayout u. a.
- `src/pages/` - Homepage, 4 Welten-Hubs, dynamische `[slug]`-Routen je Welt,
  Schwimmkurse, Service- & Rechts-Seiten, Aktuelles
- `docs/STYLE-GUIDE.md` · `docs/JUDGEMENT_CALLS.md` - Designsystem & Entscheidungen

## Deploy (Cloudflare Pages)

- Framework-Preset: **Astro**
- Build-Command: `npm run build`
- Output-Verzeichnis: `dist`

## Hinweise

- Externer Ticketshop (`706.axxteq.de`) bleibt extern und ist überall Primary-CTA.
- NL-Sprachversion ist als Schalter-Platzhalter vorbereitet (Operator-TODO).
- Offene Inhalts-TODOs siehe `docs/JUDGEMENT_CALLS.md`.

---
Demo-Umsetzung: **Blacklyne**. Inhalte & Original-CI © Euregio Freizeitbad Würselen GmbH & Co. KG.
