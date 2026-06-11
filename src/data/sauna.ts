import type { ContentPage } from './worlds';

// 9 Saunen & Kabinen - verbatim Beschreibungen + Temperaturen (saunieren.html)
export const cabins: { name: string; temp: string; text: string }[] = [
  { name: 'Kräuterstube', temp: '60 °C', text: 'Bei angenehmer Temperatur und leiser Wellnessmusik inhalieren Sie die Düfte frischer Kräuter. Bevorzugt eingesetzt werden Eukalyptus und Lavendel - beruhigend für das Nervensystem und bewährt bei Erkältung.' },
  { name: 'Panorama-Sauna', temp: '85 °C', text: 'Die Sauna mit Ausblick. Ein großer Flatscreen sorgt für eine entspannte Atmosphäre mit Film-Animationen - Ruhe und Entspannung LIVE, z. B. am Strand oder an einer wunderschönen Brandung.' },
  { name: 'Softsauna', temp: '55 °C', text: 'Eine Oase der Ruhe: eine Schwitzkabine, in der Unterhaltungen nicht erwünscht sind. Spektralfarben und Wellnessmusik entfalten ihre volle Wirkung - durch die hohe Luftfeuchtigkeit (50 %) schwitzen Sie schon bei niedriger Temperatur.' },
  { name: 'Finnische Sauna', temp: '90 °C', text: 'Trockene Wärme und geringe Luftfeuchtigkeit ermöglichen eine Entschlackungskur in der Gartensauna. Rasche Wechsel von Wärme und Kälte sind ein hervorragendes Gefäßtraining und Grundlage für einen gesunden Kreislauf.' },
  { name: 'Aufgußhütte „Löyly"', temp: '90 °C', text: 'Löyly = der von den Steinen aufsteigende Dampf. Hier zelebrieren geschulte Saunameister Aufgüsse zur vollen Stunde - als Highlight mit Musik. Die Aufgussdauer beträgt ca. 8 bis 10 Minuten.' },
  { name: 'Würselener Schwitzhütte', temp: '90 °C', text: 'Erleben Sie intensive und besondere Aufgüsse für maximal 12 Teilnehmer/innen. Freitag und Sonntag geöffnet.' },
  { name: 'Sole-Dampfbad', temp: '45 °C', text: 'In den Dampf wird eine Sole aus dem Salz des Toten Meeres injiziert. Das Einatmen tut den Bronchien gut und wirkt wohltuend auf die Haut. Bei annähernd 100 % Luftfeuchtigkeit gerät der Körper schon bei niedriger Temperatur tüchtig ins Schwitzen.' },
  { name: 'Ruhehaus', temp: 'Ruhe', text: 'Zurückziehen und die Aussicht auf den Saunagarten genießen: 24 Relaxliegen, im rechten Raum mit leiser Wellnessmusik, im linken Raum absolute Ruhe. Für Leseratten sind in der hinteren Reihe Lampen installiert.' },
  { name: 'Infrarotkabine', temp: '60 °C', text: 'Regenerieren, entspannen, entschlacken - ein Genuss für Körper und Seele. Die Infrarotwärme dringt tief in den Körper ein; Immunsystem und Stoffwechsel werden positiv beeinflusst.' },
];

// 28 Aufgussdüfte - verbatim (besondere-aufguesse.html)
export const scents: string[] = [
  'Anis', 'Apfel', 'Birke Natur', 'Citrus', 'Cocos-Orange', 'Eis Limone', 'Eisminze',
  'Eukalyptus', 'Euka-Kirsch', 'Euka-Menthol', 'Fichtennadel', 'Grapefruit', 'Kaminfeuer',
  'Kirsch', 'Kiwi-Eis', 'Latschenkiefer', 'Lemongras', 'Limone', 'Mandarine', 'Mandelblüte',
  'Nelke', 'Orange', 'Pfefferminze', 'Slibowicz', 'Slibowicz-Eis', 'Spekulatius (Saisonal)',
  'Wacholderheide', 'Wintertraum (Saisonal)',
];

// Lange Saunanächte 2026 - Freitags, verbatim Datum + Motto
export const langeNaechte: { date: string; theme: string }[] = [
  { date: '13.03.2026', theme: 'Magischer Abend' },
  { date: '27.03.2026', theme: 'Rock Party' },
  { date: '10.04.2026', theme: 'Holländischer Abend' },
  { date: '24.04.2026', theme: 'Neue Deutsche Welle' },
  { date: '08.05.2026', theme: 'Up to Date - Aktuelle Hits' },
  { date: '22.05.2026', theme: '90iger Party' },
  { date: '05.06.2026', theme: 'Schlagerparty' },
  { date: '19.06.2026', theme: 'Sommererwachen mit Grillen' },
  { date: '03.07.2026', theme: 'Amerikanischer Abend' },
  { date: '17.07.2026', theme: 'Sommerfest' },
  { date: '31.07.2026', theme: 'Karibische Nacht' },
  { date: '14.08.2026', theme: 'Mallorca Party' },
  { date: '28.08.2026', theme: '70/80/90 Party' },
  { date: '11.09.2026', theme: 'Kölsch Reloaded' },
  { date: '25.09.2026', theme: 'Rock Party 2' },
  { date: '09.10.2026', theme: 'Oktoberfest' },
  { date: '23.10.2026', theme: 'Weltreise' },
  { date: '06.11.2026', theme: 'Halloween' },
  { date: '20.11.2026', theme: 'Magischer Abend' },
  { date: '04.12.2026', theme: 'Nikolaus Party' },
  { date: '18.12.2026', theme: 'Merry Christmas' },
];

// Wellnesssamstage 2026 - verbatim Daten
export const wellnessSamstage: string[] = [
  '27.12.2025', '10.01.2026', '24.01.2026', '07.02.2026', '21.02.2026', '07.03.2026',
  '21.03.2026', '04.04.2026', '18.04.2026', '02.05.2026', '16.05.2026', '30.05.2026',
  '13.06.2026', '27.06.2026', '11.07.2026', '25.07.2026', '08.08.2026', '22.08.2026',
  '05.09.2026', '19.09.2026', '03.10.2026', '17.10.2026', '31.10.2026', '14.11.2026',
  '28.11.2026', '12.12.2026', '26.12.2026',
];

export const massagePrices: { title: string; rows: { label: string; price: string }[] }[] = [
  { title: 'Teilkörpermassage (15 Min)', rows: [
    { label: 'Einzelanwendung', price: '6 €' },
    { label: '5er Karte', price: '24 €' },
    { label: '10er Karte', price: '48 €' },
  ]},
  { title: 'Ganzkörpermassage (30 Min)', rows: [
    { label: 'Einzelanwendung', price: '9 €' },
    { label: '5er Karte', price: '36 €' },
    { label: '10er Karte', price: '72 €' },
  ]},
];

export const saunaPages: ContentPage[] = [
  {
    slug: 'saunieren',
    navLabel: 'Saunieren',
    title: 'Saunieren im AQUANA',
    eyebrow: 'Neun Welten der Wärme',
    lead: 'Erleben Sie bei uns ein völlig anderes Saunaprogramm und lassen Sie sich durch verschiedene Arten des Saunierens verwöhnen.',
    heroImage: '/images/artikel/sauna/saunagarten_pool.jpg',
    heroAlt: 'Saunalandschaft im AQUANA',
    sections: [
      {
        body: '„Sauna führt nicht über Härte gegen sich selbst zur Fitness, sondern in lockerer Geselligkeit und anheimelnder Wärme." (Dr. med. Hanna Fresenius)',
      },
      {
        heading: 'Unsere Saunen & Kabinen',
        cards: cabins.map((c) => ({ title: c.name, text: c.text, meta: c.temp })),
      },
    ],
    facts: [
      { label: 'Saunen & Kabinen', value: '9' },
      { label: 'Aufgüsse', value: 'zur vollen Stunde' },
      { label: 'Auszeichnung', value: 'SaunaPremium' },
    ],
    ctaLabel: 'Sauna-Preise ansehen',
    ctaHref: '/preise-zeiten',
  },
  {
    slug: 'aufgussplan',
    navLabel: 'Aufgussplan',
    title: 'Aufgussplan',
    eyebrow: 'Aufgüsse zur vollen Stunde',
    lead: 'In unserer Aufgußhütte „Löyly" zelebrieren geschulte Saunameister Aufgüsse zur vollen Stunde - als Highlight mit Musik, ca. 8 bis 10 Minuten.',
    heroImage: '/images/artikel/sauna/saunagarten3.jpg',
    heroAlt: 'Aufguss im AQUANA',
    sections: [
      {
        heading: 'So läuft ein Aufguss',
        bullets: [
          'Aufgüsse zur vollen Stunde in der Aufgußhütte „Löyly" (90 °C)',
          'Intensive Aufgüsse in der Würselener Schwitzhütte - Freitag und Sonntag, max. 12 Teilnehmer/innen',
          'Aufgussdauer ca. 8 bis 10 Minuten',
          'Auf Wunsch mit Entspannungs- oder Schlagermusik',
        ],
      },
    ],
    facts: [
      { label: 'Löyly', value: 'zur vollen Stunde' },
      { label: 'Schwitzhütte', value: 'Fr & So' },
      { label: 'Dauer', value: 'ca. 8-10 Min' },
    ],
    todo: 'Tages-Aufgussplan (Asset) verlinken - auf der alten Seite nur als Aushang/Download (Operator-TODO).',
    ctaLabel: 'Besondere Aufgüsse',
    ctaHref: '/saunawelt/besondere-aufguesse',
  },
  {
    slug: 'besondere-aufguesse',
    navLabel: 'Besondere Aufgüsse',
    title: 'Besondere Aufgüsse',
    eyebrow: 'Wohltuende Aufgüsse',
    lead: 'Unsere Aufgüsse sind in der ganzen Region bekannt - wegen ihrer Anzahl, vor allem aber wegen ihrer Intensität und Abwechslung.',
    heroImage: '/images/artikel/sauna/saunagarten1.jpg',
    heroAlt: 'Aufgussdüfte im AQUANA',
    sections: [
      {
        body: 'Die eingesetzten Düfte entfalten jeweils ihre eigene Wirkung: manche beruhigen, andere aktivieren, wieder andere helfen, die Atemwege frei zu bekommen. Alle werden unterschiedlich wahrgenommen und stimulieren die Sinne ganz individuell.',
      },
      {
        heading: 'Unsere Aufgussdüfte im Überblick',
        bullets: scents,
      },
    ],
    facts: [
      { label: 'Düfte', value: '28 Sorten' },
      { label: 'Saisonal', value: 'Spekulatius, Wintertraum' },
    ],
  },
  {
    slug: 'sauna-garten',
    navLabel: 'Sauna-Garten',
    title: 'Sauna-Garten mit Pool',
    eyebrow: 'Erholung im Grünen',
    lead: 'Unser gemütlicher Saunagarten bietet Erholung und Ruhe im Grünen. Verweilen Sie eine Weile und suchen Sie sich ein „gemütliches Plätzchen".',
    heroImage: '/images/artikel/sauna/saunagarten_pool.jpg',
    heroAlt: 'Sauna-Garten mit Pool im AQUANA',
    sections: [
      {
        heading: 'Pool im Saunagarten',
        body: 'Es stehen Ihnen viele Liegen zur Auswahl. Unser Pool im Saunagarten lädt mit angenehmen 27 °C Wassertemperatur zu einer lockeren Runde Schwimmen ein. Der Pool wird 1 Stunde nach Beginn der Publikumszeit geöffnet.',
      },
    ],
    facts: [
      { label: 'Wassertemperatur', value: '27 °C' },
      { label: 'Pool-Öffnung', value: '1 Std. nach Beginn' },
    ],
  },
  {
    slug: 'abo-preise',
    navLabel: 'Sauna Abo Preise',
    title: 'Sauna-Abo-Preise',
    eyebrow: 'Regelmäßig entspannen',
    lead: 'Wer regelmäßig sauniert, fährt mit einem Abo am günstigsten. Wählen Sie zwischen BASIC und PREMIUM.',
    heroImage: '/images/artikel/sauna/saunagarten2.jpg',
    heroAlt: 'Sauna-Abo im AQUANA',
    sections: [
      {
        heading: 'Die Abos im Überblick',
        cards: [
          { title: 'BASIC Abo', text: 'Jährliche Vorauszahlung.', meta: '49,00 € mtl.' },
          { title: 'BASIC Abo', text: 'Monatliche Vorauszahlung.', meta: '54,00 € mtl.' },
          { title: 'PREMIUM Abo', text: 'Jährliche Vorauszahlung.', meta: '69,00 € mtl.' },
          { title: 'PREMIUM Abo', text: 'Monatliche Vorauszahlung.', meta: '74,00 € mtl.' },
        ],
        note: 'Laufzeit 12 Monate. Weitere Informationen erhalten Sie an der Saunatheke.',
      },
    ],
    facts: [
      { label: 'BASIC ab', value: '49,00 € mtl.' },
      { label: 'PREMIUM ab', value: '69,00 € mtl.' },
      { label: 'Laufzeit', value: '12 Monate' },
    ],
    ctaLabel: 'Alle Preise ansehen',
    ctaHref: '/preise-zeiten',
  },
  {
    slug: 'infrarotkabine',
    navLabel: 'Infrarotkabine',
    title: 'Infrarotkabine - gesunde Wärme',
    eyebrow: 'Tiefenwärme',
    lead: 'Regenerieren, entspannen, entschlacken - ein Genuss für Körper und Seele.',
    heroImage: '/images/artikel/sauna/saunagarten1.jpg',
    heroAlt: 'Infrarotkabine im AQUANA',
    sections: [
      {
        body: 'Die Infrarotwärme dringt tief in den Körper ein und verteilt sich durch den aktivierten Kreislauf im gesamten Körper. Immunsystem und Stoffwechsel werden positiv beeinflusst.',
      },
    ],
    facts: [
      { label: 'Temperatur', value: '60 °C' },
      { label: 'Wirkung', value: 'Tiefenwärme' },
    ],
  },
  {
    slug: 'massagen-wellness',
    navLabel: 'Massagen & Wellness',
    title: 'Massagen & Wellness',
    eyebrow: 'Entspannung auf Knopfdruck',
    lead: 'Erleben Sie wohltuende Wärme und kraftvolle Wassermassage mit dem innovativen medi stream® spa. Ideal für zwischendurch: einfach hinlegen, starten und abschalten.',
    heroImage: '/images/artikel/massagen/medi_stream.jpg',
    heroAlt: 'medi stream spa im AQUANA',
    sections: [
      {
        heading: 'medi stream® spa',
        body: '13 Massageprogramme sorgen für individuelle Tiefenentspannung - perfekt für Rücken, Beine oder den ganzen Körper. Gönnen Sie sich Ihre Auszeit: effektiv, hygienisch und bequem. Buchbar an unserer Saunatheke.',
      },
      {
        heading: 'Unsere Preise',
        cards: massagePrices.flatMap((g) => g.rows.map((r) => ({ title: `${g.title} - ${r.label}`, meta: r.price }))),
      },
    ],
    facts: [
      { label: 'Teilkörper (15 Min)', value: 'ab 6 €' },
      { label: 'Ganzkörper (30 Min)', value: 'ab 9 €' },
      { label: 'Reservierung', value: '0157 31350870' },
    ],
    ctaLabel: 'Massage reservieren',
    ctaHref: 'tel:+4915731350870',
  },
  {
    slug: 'lange-saunanaechte',
    navLabel: 'Lange Saunanächte',
    title: 'Lange Saunanächte 2026',
    eyebrow: 'Sauna bis 01:00 Uhr',
    lead: 'An unseren langen Saunanächten ist die Sauna freitags bis 01:00 Uhr geöffnet - jede mit eigenem Motto. Hier sind alle Termine 2026.',
    heroImage: '/images/artikel/sauna/saunagarten2.jpg',
    heroAlt: 'Lange Saunanacht im AQUANA',
    sections: [
      {
        heading: 'Alle Termine 2026',
        cards: langeNaechte.map((e) => ({ title: e.theme, meta: e.date })),
      },
    ],
    facts: [
      { label: 'Termine', value: '21 Nächte' },
      { label: 'Geöffnet bis', value: '01:00 Uhr' },
      { label: 'Rhythmus', value: 'freitags' },
    ],
  },
  {
    slug: 'wellnesssamstage',
    navLabel: 'Wellnesssamstage',
    title: 'Wellnesssamstage 2026',
    eyebrow: 'Samstags zur Ruhe kommen',
    lead: 'An unseren Wellnesssamstagen steht die Entspannung im Mittelpunkt. Alle Termine 2026 im Überblick.',
    heroImage: '/images/artikel/saunawelt/wellnesssamstage/Wellnesstage3.jpg',
    heroAlt: 'Wellnesssamstag im AQUANA',
    sections: [
      {
        heading: 'Alle Termine',
        bullets: wellnessSamstage,
      },
    ],
    facts: [
      { label: 'Termine', value: '27 Samstage' },
      { label: 'Schwerpunkt', value: 'Entspannung' },
    ],
    todo: 'Beschreibung/Zeiten eines Wellnesssamstags ergänzen (Operator-TODO).',
  },
  {
    slug: 'sauna-tipps',
    navLabel: 'Sauna-Tipps',
    title: 'Saunabaden in der Schwangerschaft',
    eyebrow: 'Sauna-Tipps',
    lead: 'Als Schwangere in die Sauna? Aber ja doch! Wer ein Baby erwartet, ist nicht krank und darf darum auch saunabaden - einige Verhaltensregeln vorausgesetzt.',
    heroImage: '/images/artikel/sauna/saunagarten3.jpg',
    heroAlt: 'Sauna-Tipps im AQUANA',
    sections: [
      {
        heading: 'Warum Sauna gut tun kann',
        bullets: [
          'Mithilfe bei der Regulierung des Wasserhaushaltes',
          'Ausschwemmung von Stoffwechselschlacken aus dem kindlichen Blut',
          'übungsmäßige Veränderungen in Blutverteilung und Kreislaufanpassung',
          'Erleichterung der Geburt',
        ],
      },
      {
        heading: 'Entspannt durch die Schwangerschaft',
        body: 'Die regelmäßige Sauna entspannt und entkrampft die Muskeln auch im Beckenbereich - das erleichtert die Geburt. Durch das Wechselspiel von Wärme und Kühle wird die Durchblutung angeregt; das beugt Krampfadern und Thrombosen vor. Frauen, die regelmäßig saunabaden, haben häufig weniger Beschwerden in der Schwangerschaft.',
        note: 'Bei vorzeitiger Wehentätigkeit ist Saunabaden tabu. Grundsätzlich gilt bei Erkrankungen in der Schwangerschaft: vor dem Saunabad den Arzt um Rat fragen.',
      },
    ],
  },
];
