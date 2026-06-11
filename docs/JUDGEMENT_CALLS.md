# JUDGEMENT_CALLS - AQUANA Redesign

Entscheidungen, die über das wörtliche Briefing/Scrape hinausgehen, plus offene
Operator-TODOs. Quelle aller Inhalte: aquana.de (Stand Juni 2026).

## Design & Marke

- **Palette "Tide & Ember"** aus der Logo-Pixel-Analyse abgeleitet: Logo ist rein
  Ozeanblau `#003589` auf Weiß. `tide` (Brand-Blau) = Anker; `aqua` (Pool-Cyan)
  als Energie/Glow; `ember` (Sauna-Orange) + `teal`/`gold` als Welt-Akzente. Wärme
  und Frische sind abgeleitet, nicht erfunden - Blau bleibt dominant.
- **Fonts**: Body = **Merriweather Sans** (echte Schrift der alten Site,
  `files/css/styles.css`). Display = **Plus Jakarta Sans** (moderner Upgrade-Punch).
  Akzentwort in Headlines via Brand-Farbe statt Extra-Font (Perf).
- **Bindestriche**: durchgängig `-` (Nutzer-Vorgabe), nie `–`/`—` - auch in
  Preis-/Zeit-Ranges.

## Inhaltliche Entscheidungen

- **Google-Bewertungen**: echtes Aggregat **3,8 / 5 aus 3.787 Bewertungen** (Quelle:
  Google/Gelbe Seiten). KEINE einzelnen Review-Texte erfunden. Im Trust-Auftritt
  führen wir bewusst mit der **SaunaPremium**-Auszeichnung, *seit 1998*,
  *1.774 m² Wasserfläche* und dem Bewertungs-*Volumen* - die 3,8 ist als echtes
  `aggregateRating` im Schema hinterlegt, wird im UI aber nicht plakativ als Note
  ausgestellt.
- **Hero-Card "Öffnungszeiten"** statt "HEUTE GEÖFFNET": neutrale, statische Zeiten-
  Card (Bad + Sauna). Bewusst kein "heute geöffnet"-Claim, da montags geschlossen -
  vermeidet eine potenziell falsche Aussage. Kein Live-Status-Dot (Briefing-Vorgabe).
- **Telefon-Link** als international `+492405411925` (auch aus NL erreichbar),
  Anzeige verbatim `02405 / 4119-25`.
- **Keine Formulare** mit Backend (Memory-Regel): Kontakt/Kurse/Gruppen/Gutscheine
  laufen über WhatsApp + E-Mail + Telefon-Tiles. Newsletter-Feld öffnet das
  Mailprogramm (mailto), kein Backend.
- **Externer Ticketshop** `706.axxteq.de` bleibt extern und ist überall Primary-CTA.
- **Tonalität-Mischform** erhalten: Sie offiziell (Preise, Sicherheit), ihr/euch bei
  News & Beachvolleyball ("Sonnencreme einpacken … ab aufs Feld!").

## Zweisprachigkeit (DE/NL)

- Gebaut wird **DE**. Im Header ein **DE/NL-Schalter als Platzhalter** (NL inaktiv,
  Tooltip "Nederlandse versie in voorbereiding").
- **Operator-TODO**: NL-Version (die alte Site hatte `beginpagina.html` & NL-Pfade)
  in Phase 2 aufbauen und den Schalter aktiv schalten.

## Bilder

- Hero + Welt-/Sektionsbilder stammen aus der alten Site (Contao `files/`). Viele
  Originale sind niedrig aufgelöst (z. B. `wellenbecken.jpg` 800 px). Für große
  Flächen wurden die jeweils schärfsten verfügbaren Fotos gewählt; Mini-Bilder
  (sternenhimmel/babyschwimmen/tauchbecken, <600 px) wurden gegen ≥800-px-Motive
  getauscht.
- **Operator-TODO**: hochauflösende Hero-/Welten-Fotos liefern (idealerweise
  ≥1920 px) und ein dediziertes Gastronomie-Foto (aktuell Teaser-Grafik).
- **Operator-TODO**: echtes 1200×630-OG-Bild erstellen (aktuell wird `wellenbecken.jpg`
  als Fallback referenziert).

## Dünne/fehlende Inhalte (Operator-TODO)

- **Aufgussplan**: alte Seite ohne Tagesplan (nur Aushang/Download) - Asset ergänzen.
- **Bahnenschwimmen**: alte Seite ohne Fließtext - Zeiten ergänzt durch Preise; ggf.
  konkrete Bahnen-Zeiten nachreichen.
- **Gastronomie**: keine konkrete Speisekarte auf der alten Seite - echtes Speise-/
  Getränkeangebot ergänzen.
- **Monatskalender Juni 2026**: Kalender-Asset (PDF/Bild) verlinken.
- **Beco-Shop**: prüfen, ob ein externer Online-Shop existiert (im Scrape keine URL).
- **Wellnesssamstage**: Beschreibung/Zeiten eines Wellnesssamstags ergänzen.
- **Datenschutz/Haus- & Badeordnung**: rechtlich finalisieren; die vollständige,
  verbindliche Badeordnung als Aushang/PDF beibehalten.

## Technik

- Astro 5 STATIC, Tailwind v3.4, `@lucide/astro`, `inlineStylesheets: 'always'`,
  Fonts latin-only + Hero-Fonts preloaded. Kein SSR, kein Adapter.
- Deploy: Cloudflare Pages - Framework "Astro", Build `npm run build`, Output `dist`.
