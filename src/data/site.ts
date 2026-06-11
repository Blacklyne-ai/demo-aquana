// ─────────────────────────────────────────────────────────────
// AQUANA - Euregio Freizeitbad Würselen - zentrale Site-Konfiguration.
// Alle Geschäftsangaben verbatim von aquana.de (Impressum/Kontakt) bzw.
// dem Briefing. Nichts erfunden. Lücken = Operator-TODO (JUDGEMENT_CALLS.md).
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'AQUANA',
  longName: 'Euregio Freizeitbad Würselen',
  legalName: 'Euregio Freizeitbad Würselen GmbH & Co. KG',
  ceo: 'Claus Nürnberg',
  tagline: 'Freizeitbad · Saunawelt · Sport · Gastronomie - in der Euregio bei Aachen',
  description:
    'AQUANA - das Euregio Freizeitbad Würselen bei Aachen. Vier Welten unter einem Dach: Freizeitbad mit Rutschen, Saunawelt mit Aufgüssen, Sport und Gastronomie. Familienfreundlich, barrierefrei, für Gäste aus Deutschland und den Niederlanden.',
  url: 'https://demo-aquana.pages.dev',

  // ── Kontakt (verbatim Impressum) ──
  phoneDisplay: '02405 / 4119-25',
  phoneIntl: '+492405411925', // international, auch aus NL erreichbar
  faxDisplay: '02405 / 4119-20',
  email: 'info@aquana.de',
  emailCourses: 'aquafisch@aquana.de', // Schwimmkurs-Anmeldung
  emailGroups: 'mueller@aquana.de',    // Schulklassen & Gruppen

  // ── Externer Ticketshop (bleibt extern - Primary-CTA) ──
  ticketshopUrl: 'https://706.axxteq.de',

  // ── WhatsApp (Business-Link aus Briefing) ──
  whatsappUrl: 'https://wa.me/message/OPSIUKX4G2SAO1',

  // ── Social ──
  facebookUrl: 'https://www.facebook.com/Aquanafreizeitbad',
  instagram: 'aquanasaunaundfreizeitbad',
  instagramUrl: 'https://www.instagram.com/aquanasaunaundfreizeitbad/',
  youtubeUrl: 'https://www.youtube.com/Aquanafreizeitbad',

  // ── Adresse ──
  address: {
    street: 'Willy-Brandt-Ring 100',
    postcode: '52146',
    city: 'Würselen',
    region: 'bei Aachen',
    country: 'Deutschland',
    countryCode: 'DE',
  },

  // ── Eckdaten (verbatim „Über AQUANA") ──
  facts: {
    openedSince: 1998,        // eröffnet 12.12.1998
    waterSurface: '1.774 m²', // 1774,24 qm Gesamtwasserfläche
    saunaAward: 'SaunaPremium', // Deutscher Sauna-Bund Qualitätszeichen
  },

  // ── Google (ECHTE Aggregat-Daten - keine erfundenen Einzel-Reviews) ──
  google: {
    rating: 3.8,
    reviewCount: 3787,
    reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=AQUANA+Freizeitbad+W%C3%BCrselen',
    mapsEmbed:
      'https://www.google.com/maps?q=Willy-Brandt-Ring+100,+52146+W%C3%BCrselen&z=15&output=embed',
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Willy-Brandt-Ring+100+52146+W%C3%BCrselen',
  },

  // ── Recht (verbatim Impressum) ──
  registry: 'Handelsregister Amtsgericht Aachen, HRA 3926',
  ustId: 'DE157235594',
  realisation: 'Werbeagentur De Knuydt GmbH',
};

// ── Link-Helper ───────────────────────────────────────────────
export const telLink = `tel:${site.phoneIntl}`;
export const mailLink = `mailto:${site.email}`;
export const whatsappLink = site.whatsappUrl;
export const ticketLink = site.ticketshopUrl;

export function mailFor(subject: string, to: string = site.email) {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}`;
}

// ── Öffnungszeiten (verbatim preise-zeiten.html) ──────────────
export const hours = {
  bad: [
    { day: 'Montag', time: 'geschlossen', closed: true },
    { day: 'Dienstag - Freitag', time: '15:00 - 19:00 Uhr' },
    { day: 'Samstag, Sonn- & Feiertage', time: '10:00 - 19:00 Uhr' },
    { day: 'Ferien NRW: Montag - Sonntag', time: '10:00 - 19:00 Uhr' },
  ],
  badNote: 'Die Wasserzeit endet 15 Minuten vor der Schließung.',
  sauna: [
    { day: 'Montag - Donnerstag', time: '10:00 - 22:00 Uhr' },
    { day: 'Freitag', time: '10:00 - 00:00 Uhr' },
    { day: 'Samstag', time: '10:00 - 22:00 Uhr' },
    { day: 'Sonn- & Feiertage', time: '10:00 - 20:00 Uhr' },
  ],
  saunaNote: 'An langen Saunanächten bis 01:00 Uhr geöffnet.',
};

// ── Navigation (Nav-Map verbindlich aus Briefing) ─────────────
export interface NavChild { href: string; label: string }
export interface NavGroup { label: string; href: string; tint: string; children: NavChild[] }

export const nav: NavGroup[] = [
  {
    label: 'AQUANA',
    href: '/ueber-aquana',
    tint: 'tide',
    children: [
      { href: '/ueber-aquana', label: 'Über AQUANA' },
      { href: '/preise-zeiten', label: 'Preise & Zeiten' },
      { href: '/sicherheitshinweise', label: 'Sicherheitshinweise' },
      { href: '/gutscheine', label: 'Gutscheine' },
      { href: '/barrierefreiheit', label: 'Barrierefreiheit' },
      { href: '/jobs', label: 'Job-Angebote' },
      { href: '/anfahrt', label: 'Anfahrt' },
      { href: '/partner', label: 'Unsere Partner' },
    ],
  },
  {
    label: 'Freizeitbad',
    href: '/freizeitbad',
    tint: 'bad',
    children: [
      { href: '/freizeitbad/attraktionen', label: 'Attraktionen & Rutschen' },
      { href: '/freizeitbad/schulklassen-gruppen', label: 'Schulklassen & Gruppen' },
      { href: '/freizeitbad/kindergeburtstag', label: 'Kindergeburtstag' },
      { href: '/freizeitbad/schwimmkurse', label: 'Schwimmkurse' },
      { href: '/freizeitbad/bahnenschwimmen', label: 'Bahnenschwimmen' },
      { href: '/freizeitbad/beco-shop', label: 'Beco-Shop' },
    ],
  },
  {
    label: 'Saunawelt',
    href: '/saunawelt',
    tint: 'sauna',
    children: [
      { href: '/saunawelt/saunieren', label: 'Saunieren' },
      { href: '/saunawelt/aufgussplan', label: 'Aufgussplan' },
      { href: '/saunawelt/besondere-aufguesse', label: 'Besondere Aufgüsse' },
      { href: '/saunawelt/sauna-garten', label: 'Sauna-Garten' },
      { href: '/saunawelt/abo-preise', label: 'Sauna Abo Preise' },
      { href: '/saunawelt/infrarotkabine', label: 'Infrarotkabine' },
      { href: '/saunawelt/massagen-wellness', label: 'Massagen & Wellness' },
      { href: '/saunawelt/lange-saunanaechte', label: 'Lange Saunanächte' },
      { href: '/saunawelt/wellnesssamstage', label: 'Wellnesssamstage' },
      { href: '/saunawelt/sauna-tipps', label: 'Sauna-Tipps' },
    ],
  },
  {
    label: 'Sport',
    href: '/sport',
    tint: 'sport',
    children: [
      { href: '/sport/tauchen', label: 'Tauchen' },
      { href: '/sport/vereinsschwimmen', label: 'Vereinsschwimmen' },
      { href: '/sport/aquarobic-aquajogging', label: 'AQUArobic & AQUAjogging' },
      { href: '/sport/kanu', label: 'Kanu Eskimotierkurs' },
      { href: '/sport/triathlon-klettern', label: 'Triathlon & Klettern' },
      { href: '/sport/aquacycling', label: 'Aquacycling' },
      { href: '/sport/aqualining', label: 'Aqualining' },
      { href: '/sport/beachvolleyball', label: 'Beachvolleyball' },
    ],
  },
  {
    label: 'Gastronomie',
    href: '/gastronomie',
    tint: 'gastro',
    children: [
      { href: '/gastronomie', label: 'Entspannen & Genießen' },
    ],
  },
  {
    label: 'Kontakt',
    href: '/kontakt',
    tint: 'tide',
    children: [
      { href: '/kontakt', label: 'Schreiben Sie uns' },
      { href: '/aktuelles', label: 'Aktuelles' },
      { href: '/newsletter', label: 'Newsletter' },
      { href: '/anfahrt', label: 'Anfahrt' },
      { href: '/haus-und-badeordnung', label: 'Haus- & Badeordnung' },
      { href: '/impressum', label: 'Impressum' },
    ],
  },
];

export const legalNav = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
  { href: '/agb', label: 'AGB' },
  { href: '/haus-und-badeordnung', label: 'Haus- & Badeordnung' },
];

// ── Hero-Trust-Strip (· getrennt) ─────────────────────────────
export const trustStrip = [
  'Freizeitbad',
  'Saunawelt',
  'Sport',
  'Gastronomie',
  'Barrierefrei',
  'DE / NL',
];
