// ─────────────────────────────────────────────────────────────
// Trust-Signale - ECHT (keine erfundenen Reviews/Zahlen).
// Quellen: „Über AQUANA", Saunawelt-Auszeichnung, Google-Aggregat.
// ─────────────────────────────────────────────────────────────

export interface Stat { value: number; suffix?: string; label: string; sub?: string }

export const stats: Stat[] = [
  { value: 4, label: 'Welten', sub: 'ein Bad' },
  { value: 1774, suffix: ' m²', label: 'Wasserfläche' },
  { value: 9, label: 'Saunen & Kabinen' },
  { value: 3787, label: 'Google-Bewertungen' },
];

// „Wissen Sie schon …" - verbatim Eckdaten (ueber-aquana.html)
export const wissenSieSchon: string[] = [
  'dass das AQUANA seit dem 12.12.1998 mit seinem günstigen Standort die Stadt Würselen, die Stadt und den Kreis Aachen und auch die Grenzregion der Niederlande und Belgien um eine Freizeitattraktion bereichert?',
  'dass nur 500 Meter Luftlinie das AQUANA vom Stadtzentrum Würselen trennen?',
  'dass das AQUANA eine Gesamtwasserfläche von 1.774,24 m² bietet?',
  'dass die Energieversorgung ökologische Gesichtspunkte berücksichtigt? Das Blockheizkraftwerk arbeitet ressourcenschonend; eine Wasserrecycling-Anlage senkt den Wasserbedarf um 70 %.',
  'dass vom Rettungsschwimmer über den geprüften Schwimmmeister bis zum geschulten Saunameister für Ihre Sicherheit und Qualität gesorgt ist?',
  'dass es jetzt ein Beachvolleyballfeld beim Freibad gibt?',
  'dass das AQUANA jetzt barrierefrei und für alle Besucher zugänglich ist?',
];

// Warum AQUANA - kompakte Trust-Punkte (Homepage)
export const whyCards: { icon: string; title: string; text: string }[] = [
  { icon: 'Award', title: 'SaunaPremium', text: 'Vom Deutschen Sauna-Bund mit dem Qualitätszeichen SaunaPremium ausgezeichnet.' },
  { icon: 'Accessibility', title: 'Barrierefrei', text: 'Stufenlos zugänglich, mit Rollstuhllift im Sportbecken und freiem Eintritt für Begleitpersonen.' },
  { icon: 'Leaf', title: 'Nachhaltig', text: 'Blockheizkraftwerk und Wasserrecycling - bis zu 70 % weniger Wasserbedarf.' },
  { icon: 'MapPin', title: 'Mitten in der Euregio', text: 'Nur 500 m vom Stadtzentrum Würselen - schnell erreichbar aus Aachen und den Niederlanden.' },
];

// Google-Trust (echtes Aggregat)
export const googleTrust = {
  rating: 3.8,
  count: 3787,
  label: 'Bewertungen auf Google',
};
