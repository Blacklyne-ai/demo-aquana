// ─────────────────────────────────────────────────────────────
// Aktuelles - echte News (Stand Juni 2026), verbatim von aquana.de.
// Tonalität locker (ihr/euch) wo im Original so - beibehalten.
// ─────────────────────────────────────────────────────────────

export interface NewsItem {
  slug: string;
  date: string;          // Anzeige
  category: string;
  title: string;
  teaser: string;
  image?: string;
  imageAlt?: string;
  body: string[];        // Absätze verbatim
  link?: { label: string; href: string };
  todo?: string;
}

export const news: NewsItem[] = [
  {
    slug: 'monatskalender-juni-2026',
    date: 'Juni 2026',
    category: 'Programm',
    title: 'Monatskalender Juni 2026',
    teaser: 'Alle Aktionen, Aufgüsse und Highlights im Juni auf einen Blick. Viel Spaß!',
    image: '/images/news/2026/6/Korrektur_2_Monatskalender_Juni_26.jpg',
    imageAlt: 'Monatskalender Juni 2026 im AQUANA',
    body: [
      'Viel Spaß!',
      'Den vollständigen Monatskalender mit allen Aktionen, Aufgüssen und Öffnungs-Highlights findet ihr als Aushang im Haus sowie auf unseren Kanälen bei Facebook und Instagram.',
    ],
    todo: 'Kalender-Asset (PDF/Bild) verlinken - Operator-TODO.',
  } as NewsItem,
  {
    slug: 'neue-aquacycling-kurstermine',
    date: 'ab Mai 2026',
    category: 'Sport',
    title: 'Neue Aquacycling-Kurstermine im AQUANA!',
    teaser: 'Unsere neue Staffel startet - jetzt vormerken und dabei sein! Neue Kurstermine: mittwochs 09:30 Uhr und samstags 19:00 Uhr.',
    image: '/images/artikel/sport/aquacycling/aquacycling_2.jpg',
    imageAlt: 'Aquacycling im AQUANA',
    body: [
      'Ab Mai startet unsere neue Staffel - jetzt vormerken und dabei sein!',
      'Neue Kurstermine: Mittwochs um 09:30 Uhr und Samstags um 19:00 Uhr.',
      'Aquacycling ist das ideale Training im Wasser: effektiv, gelenkschonend und perfekt für Ausdauer, Fitness und Wohlbefinden. Anmeldungen ab sofort möglich - über das Anmeldeformular auf unserer Homepage oder ganz bequem per Privatnachricht.',
    ],
    link: { label: 'Zu Aquacycling', href: '/sport/aquacycling' },
  },
  {
    slug: 'initiative-augenblick',
    date: 'Februar 2026',
    category: 'Sicherheit',
    title: 'Initiative Augenblick',
    teaser: '„Nur einen Augenblick" - unsere neue Sicherheitskampagne. Ein Moment kann alles verändern.',
    image: '/images/news/2026/2/screen-initiativeaugenblick-1920x1080px-1.jpg',
    imageAlt: 'Initiative Augenblick - Sicherheitskampagne',
    body: [
      'Ab sofort präsentiert sich unser Bad als Partner der bundesweiten Initiative nureinenaugenblick. Die Kampagne macht eindringlich darauf aufmerksam, wie schnell Kinder im Wasser in Lebensgefahr geraten können - oft reicht ein einziger Moment der Unaufmerksamkeit.',
      'Ein Kind kann in nur 20 Sekunden ertrinken. Lautlos. Unsichtbar. Genau deshalb setzen wir auf Aufklärung und klare Botschaften. Ob auf Plakaten, Bannern oder digital - „Dein Blick rettet mein Leben" ist mehr als ein Slogan. Es ist ein Aufruf an alle Eltern, Großeltern und Begleitpersonen: Du hast die Verantwortung.',
      'Mit der Kampagne wollen wir dir helfen, im Bad bewusster hinzusehen, nah dran zu bleiben und Ablenkungen zu vermeiden. Denn Sicherheit beginnt nicht erst beim Schwimmkurs - sie beginnt bei dir.',
      'Unser Team unterstützt dich mit Informationen, Tipps und gut sichtbaren Erinnerungen im gesamten Bad. Gemeinsam schaffen wir ein sicheres Badeerlebnis für alle.',
    ],
    link: { label: 'initiativeaugenblick.de', href: 'https://www.initiativeaugenblick.de' },
  },
  {
    slug: 'beachvolleyballplatz',
    date: 'Sommer 2026',
    category: 'Freibad',
    title: 'Beachfeeling im Freibad!',
    teaser: 'Unser Beachvolleyballfeld steht euch während der Freibadöffnungszeiten kostenlos zur Verfügung.',
    image: '/images/artikel/fzb/freibadbecken.jpg',
    imageAlt: 'Freibad im AQUANA Würselen',
    body: [
      'Unser Beachvolleyballfeld auf dem Freibadgelände steht euch während der regulären Freibadöffnungszeiten kostenlos zur Verfügung! Ob spontan mit Freunden oder als kleine sportliche Abwechslung zum Sonnenbaden - einfach vorbeikommen und losspielen!',
      'Bälle könnt ihr ganz unkompliziert gegen Pfand an der Eingangskasse ausleihen.',
      'Also: Sonnencreme einpacken, Freunde schnappen und ab aufs Feld! Wir freuen uns auf euch!',
    ],
    link: { label: 'Zum Beachvolleyball', href: '/sport/beachvolleyball' },
  },
  {
    slug: 'aquana-barrierefrei',
    date: 'Februar 2025',
    category: 'Service',
    title: 'Barrierefreiheit im AQUANA - für alle Besucher zugänglich!',
    teaser: 'Bei uns ist jeder willkommen! Unser gesamtes Areal ist stufenlos zugänglich.',
    image: '/images/artikel/barrierefreiheit/20250221_112951.jpg',
    imageAlt: 'Barrierefreier Zugang im AQUANA',
    body: [
      'Bei uns ist jeder willkommen! Unser gesamtes Areal - vom Spaßbad über das Freibad bis zur Sauna - ist stufenlos zugänglich. Barrierefreie Umkleiden, Duschen und ein Rollstuhllift im Sportbecken sorgen für maximalen Komfort.',
      'Gäste mit „B"-Eintrag im Ausweis profitieren von freiem Eintritt für die Begleitperson, und es gibt Ermäßigungen ab GdB 50. Behinderten-Parkplätze direkt am Eingang runden unser Angebot ab.',
    ],
    link: { label: 'Mehr zur Barrierefreiheit', href: '/barrierefreiheit' },
  },
  {
    slug: 'das-geht-jetzt-in-die-hose',
    date: 'Mai 2025',
    category: 'Hygiene',
    title: 'Das geht jetzt in die Hose …',
    teaser: 'Damit wir allen Gästen optimale Wasserqualität bieten können, tragen unsere kleinsten Gäste (bis 3 Jahre) Aqua-Windeln!',
    image: '/images/artikel/fzb/kleinkinderbecken.jpg',
    imageAlt: 'Kinderbecken im AQUANA',
    body: [
      'Damit wir allen Gästen optimale Wasserqualität bieten können, tragen unsere kleinsten Gäste (bis 3 Jahre) Aqua-Windeln!',
    ],
  },
];

export const newsBySlug = (slug: string) => news.find((n) => n.slug === slug);
