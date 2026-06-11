// ─────────────────────────────────────────────────────────────
// Preise - verbatim von preise-zeiten.html (die wichtigste Seite eines Bades).
// Erwachsene / Ermäßigt 1). Nichts verändert.
// ─────────────────────────────────────────────────────────────

export interface PriceRow { label: string; sub?: string; price: string; reduced?: string }

export const priceTables: { title: string; note?: string; rows: PriceRow[] }[] = [
  {
    title: 'Preise Freizeitbad',
    note: 'Erwachsene · Ermäßigt 1)',
    rows: [
      { label: 'Tageskarte', price: '14,50 €', reduced: '12,00 €' },
      { label: '4 Stunden', price: '11,00 €', reduced: '9,30 €' },
      { label: '1,5 Stunden', price: '8,50 €', reduced: '6,80 €' },
      { label: 'Familienkarte TAG', sub: 'bis zu 2 Erw. + 3 Kinder', price: '38,50 €', reduced: 'jedes weitere Kind 4,70 €' },
      { label: 'Familienkarte 4 Stunden', sub: 'bis zu 2 Erw. + 3 Kinder', price: '32,00 €', reduced: 'jedes weitere Kind 3,80 €' },
      { label: 'Bahnenschwimmen', price: '4,50 €' },
      { label: '10er Coin Bahnenschwimmen', price: '41,50 €' },
      { label: 'Kindergeburtstag', sub: 'Tageskarte pro Person, Geburtstagskind frei', price: '8,80 €' },
      { label: 'Gruppentarif', sub: 'ab 10 Personen, Tageskarte pro Person', price: '8,80 €' },
    ],
  },
  {
    title: 'Preise Sauna',
    note: 'Erwachsene · Ermäßigt 1) · inkl. Freizeitbad-Mitbenutzung',
    rows: [
      { label: 'Montag - Freitag', price: '23,00 €', reduced: '21,00 €' },
      { label: 'Samstag, Sonntag, Feiertage', price: '24,50 €', reduced: '22,00 €' },
      { label: 'Tagestarif', sub: 'Mo-Fr außer feiertags, 10:00-17:00 Uhr', price: '21,00 €', reduced: '19,00 €' },
      { label: 'Dienstag: Campus-Tag', price: '17,00 €' },
      { label: '10er Karten', price: '200,00 €' },
      { label: 'Feierabendtarif ab 17:00 Uhr', sub: 'Mo-Do, außer Feiertage + Mottoabende', price: '19,50 €' },
      { label: 'Feierabendtarif ab 17:00 Uhr', sub: 'Freitags', price: '21,00 €' },
      { label: 'Kinder bis 10 Jahre', price: '12,00 €' },
      { label: 'Schnupperstunde', price: '8,00 €' },
    ],
  },
];

export const wertkarten: PriceRow[] = [
  { label: 'Wertkarte Bronze', price: '150,00 €', reduced: '10 % Nachlass 4)' },
  { label: 'Wertkarte Silber', price: '300,00 €', reduced: '15 % Nachlass 4)' },
  { label: 'Wertkarte Gold', price: '500,00 €', reduced: '20 % Nachlass 4)' },
  { label: 'Wertkarte Platin', price: '1.000,00 €', reduced: '30 % Nachlass 4)' },
];

export const saunaAbos: PriceRow[] = [
  { label: 'BASIC Abo', sub: 'jährliche Vorauszahlung 5)', price: '49,00 € mtl.' },
  { label: 'BASIC Abo', sub: 'monatliche Vorauszahlung 5)', price: '54,00 € mtl.' },
  { label: 'PREMIUM Abo', sub: 'jährliche Vorauszahlung 5)', price: '69,00 € mtl.' },
  { label: 'PREMIUM Abo', sub: 'monatliche Vorauszahlung 5)', price: '74,00 € mtl.' },
];

export const parking: PriceRow[] = [
  { label: 'Tageskarte', price: '2,00 €' },
  { label: 'Parkplatz-Zehnerkarte', price: '12,00 €' },
  { label: 'Wohnmobile', sub: 'pro Übernachtung', price: '20,00 €' },
  { label: 'Jahresparkticket', price: '70,00 €' },
];

// Hinweise - verbatim
export const priceNotes: string[] = [
  'Der Saunatarif beinhaltet die kostenlose Mitbenutzung des Freizeitbades, soweit dieses für zahlende Gäste geöffnet ist.',
  'Der Verzehr von mitgebrachten Speisen und Getränken ist nicht zugelassen.',
  'Geburtstagskinder (auch Volljährige) zahlen am Geburtstag gegen Nachweis keinen Eintritt.',
  'Ist eine Person schwerbehindert und hat ein „B" im Ausweis, hat die Begleitperson freien Eintritt.',
  'Kinder bis 3 Jahre haben freien Eintritt.',
  'Mit den Wertkarten (4) bezahlen Sie Eintritt und Verzehr - der Nachlass wird allerdings nur auf den Eintritt angerechnet.',
  'Sauna-Abo (5): Laufzeit 12 Monate; eine Person hat freien Eintritt ins Freizeitbad.',
  'Unser Imbiss ist außerhalb der Ferien von Dienstag bis Donnerstag geschlossen - verschiedene Automaten mit reichhaltigem Angebot stehen Ihnen zur Verfügung.',
];

export const reducedNote =
  '1) Ermäßigt: Kinder von 4 bis einschließlich 17 Jahren, Bufdis, Schüler/innen, Studierende, Bürgergeld-Empfänger und Schwerbehinderte ab 50 % GdB. Der Status ist durch Vorlage entsprechender aktueller Unterlagen nachzuweisen.';

export const holidayHours: string[] = [
  'Heiligabend geschlossen',
  '1. Weihnachtstag geschlossen',
  '2. Weihnachtstag von 11:30 - 17:30 Uhr geöffnet',
  'Silvester: Freizeitbad von 11:00 - 15:00 Uhr geöffnet, Sauna geschlossen',
];

export const depositNote =
  'Bei Verlust des Transponders werden 7 € (Sauna: 100 €), bei Verlust des Schlüssels 7 € Schadenersatz berechnet.';
