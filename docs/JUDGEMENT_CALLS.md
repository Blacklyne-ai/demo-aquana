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

## Detail-Audit (Vollabgleich alt ↔ neu) - geschlossene Lücken

Nach einem seitenweisen Audit nachgetragen:
- **Sport**: fehlendes Angebot **Aqualining** (Trendsport, 5-cm-Band überm Becken)
  als eigene Seite + Nav ergänzt (Hub jetzt 8 Angebote). **Aqua-Bodyfit**: alle
  10 konkreten Kurszeiten (Mo/Do) nachgetragen statt „mehrere Zeiten". Tauchen:
  E-Mail der Tauchschule ergänzt.
- **Freizeitbad**: **Whirlpools, Wasserlaufbälle, Hindernisbahn** als Attraktionen
  ergänzt; Freibad als „beheizt" gekennzeichnet; Kindergeburtstag-**Einladungskarten**
  nachgetragen.
- **Sauna**: Schwangerschafts-/Sauna-Tipps um den **Säuglings-/Baby-Abschnitt** +
  Experten-/>40-°C-Hinweis erweitert; Softsauna-**Spektralfarben** + Ruhehaus-Regeln
  ergänzt; Motto-Wortlaut „Neue deutsche Welle" / „Amerikanischen Abend" verbatim
  korrigiert.
- **Preise**: **Imbiss-Hinweis** (Di-Do außerhalb Ferien geschlossen) + Wertkarten-
  Fußnote (4) + Sauna-Abo-Fußnote (5) ergänzt; verwaiste Fußnoten 3)/6) entfernt.
- **Gutscheine**: alle 23 Werte (5-200 €) vervollständigt (110/130/140/160/170/180/190
  fehlten); AGB-Hinweis + Zahlungs-/Versandzeile ergänzt.
- **AGB-Seite** neu (alte Seite existierte, fehlte) - in Footer-Legalnav verlinkt.
- **News**: `#initiativeaugenblick` ergänzt.
- **Impressum**: **Bildnachweise** ergänzt.

## Offene Punkte aus dem Audit (Operator entscheiden)

- **AGB-Bankverbindung**: echte IBAN bewusst NICHT im öffentlichen Demo-Repo
  hinterlegt - Betreiber trägt Bankdaten + 7-%-USt-Detail nach.
- **Bildnachweise**: pro tatsächlich verwendetem Bild den Einzelnachweis prüfen
  (Teile stammen aus dem Fotolia/Shutterstock-Pool der Altseite).
- **Alt-Site widerspricht sich selbst**: Gruppentarif steht auf preise-zeiten mit
  **8,80 €**, auf schulklassen-gruppen als **7,50 €** - beide verbatim übernommen,
  Betreiber muss den gültigen Preis klären.
- **„Bürgergeld"** statt „Hartz IV" (2026 korrekt) - bewusste Modernisierung.
- **News-Daten/Kategorien** plausibel gesetzt, aber nicht quellenbelegt - vor
  Live-Gang verifizieren.
- **Partner-Beschreibungen** generisch (Altseite hatte nur Namen + 1 Link).
- **Haus- & Badeordnung**: nur Kernregeln; rechtsverbindliche Vollfassung bleibt
  Aushang/Kasse.

## Technik

- Astro 5 STATIC, Tailwind v3.4, `@lucide/astro`, `inlineStylesheets: 'always'`,
  eigene `@font-face` mit `font-display: optional` (kein CLS), Fonts latin-only +
  Hero-Fonts preloaded. Kein SSR, kein Adapter. 55 Seiten.
- Deploy: Cloudflare Pages - Framework "Astro", Build `npm run build`, Output `dist`.
- Lighthouse Desktop: Performance 99 · Accessibility 100 · Best-Practices 100 · SEO 100.

## Bewertungen & interaktiver Hero (Nachtrag)

- **Bewertungen sind ECHT** (`src/data/reviews.ts`): Aggregat 3,8 ★ / 3.787 = echtes
  Google-Rating (verlinkt). Einzelzitate verbatim aus öffentlichen Quellen
  (Parkscout, golocal, Tripadvisor) mit Quellenangabe. Eine fremdsprachige Original-
  Bewertung (Tripadvisor 2026) wurde ins Deutsche übertragen und so gekennzeichnet.
  Nichts erfunden. Die 3,8 ist real - falls die Bad-Leitung lieber kuratierte
  Lieblings-Reviews zeigt, einfach liefern.
- **Hero neu**: voller Viewport, interaktiver Vier-Welten-Switcher (Crossfade-
  Hintergründe, Akzentfarbe + Glow folgen der aktiven Welt, Auto-Rotation 6,5 s mit
  Hover-Pause, reduced-motion-sicher), Live-Öffnungsstatus (client-seitig aus den
  Öffnungszeiten berechnet), drei Glas-Karten (Google-Review, Öffnungszeiten,
  Barrierefrei). CLS bleibt 0, LCP 0,9 s.
