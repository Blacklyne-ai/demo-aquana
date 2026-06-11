// ─────────────────────────────────────────────────────────────
// Die VIER WELTEN - Herzstück (AMF-Pattern „Vier Welten - ein Bad").
// Hub-Meta + gemeinsame Content-Typen für die dynamischen Subpages.
// ─────────────────────────────────────────────────────────────

export type Tint = 'bad' | 'sauna' | 'sport' | 'gastro' | 'tide' | 'aqua';

export interface FactItem { label: string; value: string }

export interface PageSection {
  heading?: string;
  body?: string;            // Absätze mit \n\n getrennt
  bullets?: string[];
  image?: string;
  imageAlt?: string;
  cards?: { title: string; text?: string; meta?: string }[];
  note?: string;
}

export interface ContentPage {
  slug: string;
  navLabel: string;
  title: string;            // H1
  eyebrow?: string;
  lead: string;             // Lead-Absatz (Hero-Subline)
  heroImage?: string;
  heroAlt?: string;
  sections?: PageSection[];
  facts?: FactItem[];       // Quick-Facts-Sidebar
  ctaLabel?: string;
  ctaHref?: string;
  todo?: string;            // Operator-TODO (dünner Content)
}

export interface World {
  slug: string;             // /freizeitbad
  key: 'bad' | 'sauna' | 'sport' | 'gastro';
  tint: Tint;
  icon: string;             // Lucide-Name
  name: string;             // FREIZEITBAD
  tagBadge: string;         // Badge-Text
  headline: string;         // Hub-H1 mit Akzent
  blurb: string;            // Homepage-Card-Text (verbatim Briefing)
  lead: string;             // Hub-Hero-Subline
  image: string;            // Card-/Hero-Foto
  imageAlt: string;
  highlights: string[];     // 3-4 Stichpunkte
}

export const worlds: World[] = [
  {
    slug: '/freizeitbad',
    key: 'bad',
    tint: 'bad',
    icon: 'WavesLadder',
    name: 'Freizeitbad',
    tagBadge: 'Welt 01 · Wasser',
    headline: 'Rutschen, Wellen und ein ganzer Tag voller Spaß.',
    blurb:
      'Rutschen, Attraktionen, Schwimmkurse und Kindergeburtstage - Spaß für die ganze Familie.',
    lead: 'Vom Wellenbecken übers Piratenschiff bis zur 75-Meter-Black-Hole: Im Freizeitbad wird jeder Besuch zum Erlebnis - für die ganz Kleinen und alle Junggebliebenen.',
    image: '/images/artikel/fzb/blackhole1.jpg',
    imageAlt: 'Rutschen im AQUANA Freizeitbad Würselen',
    highlights: ['Wellenbecken & Black Hole', 'Master Blaster Aqua-Achterbahn', 'Piratenschiff & Kinderbecken', 'Schwimmkurse für alle'],
  },
  {
    slug: '/saunawelt',
    key: 'sauna',
    tint: 'sauna',
    icon: 'Flame',
    name: 'Saunawelt',
    tagBadge: 'Welt 02 · Wärme',
    headline: 'Aufgüsse, Sauna-Garten und echte Entspannung.',
    blurb:
      'Aufgüsse, Sauna-Garten, Infrarotkabine und Wellness - Entspannung auf höchstem Niveau.',
    lead: 'Neun Saunen und Kabinen, ein grüner Sauna-Garten mit Pool und Aufgüsse, die in der ganzen Region bekannt sind. Vom Deutschen Sauna-Bund mit dem Qualitätszeichen SaunaPremium ausgezeichnet.',
    image: '/images/artikel/sauna/saunagarten1.jpg',
    imageAlt: 'Sauna-Garten im AQUANA Würselen',
    highlights: ['9 Saunen & Kabinen', 'Aufgüsse zur vollen Stunde', 'Sauna-Garten mit Pool', 'SaunaPremium-Qualität'],
  },
  {
    slug: '/sport',
    key: 'sport',
    tint: 'sport',
    icon: 'Activity',
    name: 'Sport',
    tagBadge: 'Welt 03 · Aktiv',
    headline: 'Aktiv im und am Wasser.',
    blurb:
      'Aquacycling, Tauchen, Bahnenschwimmen und Beachvolleyball - aktiv im und am Wasser.',
    lead: 'Aquacycling, Tauchen, AQUArobic, Vereinsschwimmen und ein kostenloses Beachvolleyballfeld - im AQUANA bleiben Sie in Bewegung, gelenkschonend und mit Spaß.',
    image: '/images/artikel/sport/aquacycling/aquacycling_1.jpg',
    imageAlt: 'Aquacycling im AQUANA Würselen',
    highlights: ['Aquacycling & AQUArobic', 'Tauchen aller Stufen', '25-m-Sportbecken', 'Beachvolleyball gratis'],
  },
  {
    slug: '/gastronomie',
    key: 'gastro',
    tint: 'gastro',
    icon: 'UtensilsCrossed',
    name: 'Gastronomie',
    tagBadge: 'Welt 04 · Genuss',
    headline: 'Entspannen und genießen.',
    blurb:
      'Entspannen & Genießen - Stärkung für zwischendurch und danach.',
    lead: 'Ob herzhaft oder süß: Unsere Sauna-Gastronomie mit 140 Sitzplätzen sorgt für die Stärkung zwischendurch und danach - und im Freizeitbad genießen Sie an allen Tischen.',
    image: '/images/img/teaser_gastronomie.png',
    imageAlt: 'Gastronomie im AQUANA Würselen',
    highlights: ['Sauna-Gastronomie, 140 Plätze', 'Herzhaft & süß', 'Mahlzeiten, Snacks & Getränke', 'An allen Tischen genießen'],
  },
];

export const worldBySlug = (slug: string) => worlds.find((w) => w.slug === slug);
