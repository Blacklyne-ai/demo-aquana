# Style Guide: AQUANA — Euregio Freizeitbad Würselen

> 2026-Redesign der Contao-Site aquana.de. Editorial-Stil nach dem AMF-/Route66-
> Vorbild ("Vier Welten – ein Bad"). Logo-Pixel-Analyse hat Vorrang vor allem.

## Logo-Farben (pixel-extrahiert via sharp)

Logo `public/logo.jpg` (160×96), Wortmarke **AQUANA** + Welle, Untertitel
„SAUNA & FREIZEITBAD IN WÜRSELEN".

| Farbe | Hex | Anteil | Rolle |
|---|---|---|---|
| Ozean-Blau (Wortmarke) | `#003589` | dominanter Vollton (Sättigung 1.0) | Brand-Anker |
| Weiß (Grund) | `#ffffff` | ~70 % | BG |
| Lavendel-Antialiasing | `#e9e9f5` | Kantenglättung | – |

Das Logo ist **rein blau auf weiß** – ein tiefes, voll gesättigtes Ozeanblau.
Kein zweiter Markenton im Logo. Wärme (Sauna) + Frische (Sport) werden als
abgeleitete Welt-Akzente ergänzt, das Blau bleibt der Anker.

## Farbpalette — "Tide & Ember"

~80 % helle, frische, einladende Flächen · Dark nur Vier-Welten-Section,
CtaBand & Footer. Alle Werte als RGB-Triplets in `src/styles/global.css :root`
(Single Source of Truth), Tailwind mappt sie mit `<alpha-value>`.

| Token | Hex | Quelle / Rolle |
|---|---|---|
| `tide` (Brand Primary) | `#0A4DA2` | Logo-Blau, etwas heller → Buttons, Links, Akzentwort |
| `tide-deep` | `#073B7E` | Hover / Verlauf |
| `aqua` (bright accent) | `#15A8D0` | Pool-Wasser-Cyan → Glows, Highlights, Welt „Freizeitbad" |
| `ember` (Sauna-Wärme) | `#E0793C` | warmer Akzent → Sauna-Welt, warme CTAs |
| `ink` | `#0E2235` | Headlines & Text auf Hell (Navy-Charcoal) |
| `ink-deep` | `#06203F` | Dark Sections, Footer (tiefes Ozean-Navy) |
| `paper` | `#F1F6FB` | Light-BG (frisch, kühl-weiß) |
| `foam` | `#E7F1F9` | zweite helle Ebene / Cards |
| `muted` | `#52677A` | Body-Text (AA auf Weiß) |
| `border` | `#D8E4EF` | Hairlines |
| `green` | `#1FA968` | NUR WhatsApp |

### Vier-Welten-Akzente (subtil, je Welt ein Ton)

| Welt | Token | Hex | Lucide-Icon |
|---|---|---|---|
| Freizeitbad | `world-bad` | `#15A8D0` (aqua) | `Waves` |
| Saunawelt | `world-sauna` | `#E0793C` (ember) | `Flame` |
| Sport | `world-sport` | `#0E9E8F` (frisches Teal) | `Activity` / `Bike` |
| Gastronomie | `world-gastro` | `#C98A4B` (warmes Gold) | `UtensilsCrossed` |

Distinkt (Cyan · Orange · Teal · Gold), aber alle mittel-gesättigt → harmonieren
auf weißen Cards und über den Welt-Fotos.

## Schrift

Alte Site (`files/css/styles.css`): **Merriweather Sans** (Body) + „Nothing You
Could Do" (Script-Akzent) + Arial-Fallback.

| Rolle | Font | Fontsource | Begründung |
|---|---|---|---|
| Display / Headlines | **Plus Jakarta Sans** (700/800) | `@fontsource-variable/plus-jakarta-sans` | modernes, freundliches Editorial — der Upgrade-Punch |
| Body | **Merriweather Sans** (400/500/700) | `@fontsource/merriweather-sans` | Original-Font der Bestandsseite, beibehalten |

Nur `latin`-Subsets laden (Perf). Kein Script-Font (Premium/clean wie die
Benchmarks). Akzentwort in Headlines via **Brand-Farbe** (`tide`/`aqua`), nicht
via Extra-Font.

## Brand-Charakter

Familienfreundlich · Euregio (DE/NL) · Vier Welten · barrierefrei · regional
verwurzelt (Würselen/Aachen) · Vorfreude weckend (Wasser, Wärme, Spaß,
Entspannung). Tonalität-Mischform: **Sie** offiziell (Preise, Sicherheit,
Buchung), **ihr/euch** locker bei News & Events.

## Sektions-Rhythmus

Hell → Dark (Vier Welten) → Hell (Preise) → Hell (Kurse) → Bild-Block (Sauna) →
Hell (Barrierefreiheit) → Hell (News) → Hell (Gutschein/Newsletter) → Hell
(Anfahrt) → Dark (Final CTA) → Dark Footer. Ghost-Watermark „AQUANA" im Hero.

## Don'ts

Keine Emojis (Lucide only) · kein Light/Dark-Toggle · keine erfundenen Zahlen ·
keine generischen Schwimmbad-Floskeln („Wo Wasser auf Leidenschaft trifft") ·
kein Behörden-/Stadtwerke-Look.
