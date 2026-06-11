import type { ContentPage } from './worlds';

// Sport-Angebote (Hub-Grid) - Icons Lucide
export const sportOffers: { slug: string; name: string; icon: string; text: string }[] = [
  { slug: 'tauchen', name: 'Tauchen', icon: 'Anchor', text: 'Kindertauchen, Schnuppertauchen und Tauchschein aller Stufen - in Kooperation mit der Tauchschule Aachen.' },
  { slug: 'vereinsschwimmen', name: 'Vereinsschwimmen', icon: 'Users', text: 'Trainingszeiten von WSC, DLRG und Behindertensportgemeinschaft im 25-m-Becken.' },
  { slug: 'aquarobic-aquajogging', name: 'AQUArobic & AQUAjogging', icon: 'WavesLadder', text: 'Schonendes, effektives Ganzkörpertraining im Wasser - für jede Altersklasse und Leistungsstufe.' },
  { slug: 'kanu', name: 'Kanu Eskimotierkurs', icon: 'Sailboat', text: 'Die Eskimorolle bringt Sicherheit und Bootsgefühl - donnerstags im 25-m-Becken.' },
  { slug: 'triathlon-klettern', name: 'Triathlon & Klettern', icon: 'Mountain', text: 'Klettern „Just For Fun" an der 7-m-Kletterwand und Triathlontraining der DJK Armada Würselen.' },
  { slug: 'aquacycling', name: 'Aquacycling', icon: 'Bike', text: 'Radfahren im Wasser: das ideale Herz-Kreislauf-Training, gelenkschonend und für jedes Level.' },
  { slug: 'beachvolleyball', name: 'Beachvolleyball', icon: 'Volleyball', text: 'Unser Beachvolleyballfeld am Freibad steht euch in den Freibadöffnungszeiten kostenlos zur Verfügung.' },
];

export const sportPages: ContentPage[] = [
  {
    slug: 'tauchen',
    navLabel: 'Tauchen',
    title: 'Tauchen im AQUANA',
    eyebrow: 'Abtauchen in Würselen',
    lead: 'Vom Kindertauchen bis zum Tauchschein aller Stufen - in Kooperation mit der Tauchschule Aachen.',
    heroImage: '/images/artikel/fzb/25m_becken2.jpg',
    heroAlt: 'Tauchen im AQUANA',
    sections: [
      {
        heading: 'Trainingszeiten',
        cards: [
          { title: 'Kindertauchen (ab 8 Jahre)', meta: 'Mo 16:30-17:30 Uhr' },
          { title: 'Schnuppertauchen & Tauchschein', text: 'PADI/CMAS aller Stufen und Deutsches Tauchsportabzeichen.', meta: 'Di 18:30-21:00 · Do 19:45-22:15 Uhr' },
        ],
      },
      {
        heading: 'Eine Kooperation mit',
        body: 'Tauchschule Aachen · Telefon 0241 / 557978 oder 0171 / 4715656 · www.tauchschule-aachen.de\n\nRosi\'s Tauchschule · www.rosis-tauchschule.de',
      },
    ],
    facts: [
      { label: 'Kindertauchen', value: 'ab 8 J.' },
      { label: 'Tauchschein', value: 'PADI / CMAS' },
      { label: 'Partner', value: 'Tauchschule Aachen' },
    ],
  },
  {
    slug: 'vereinsschwimmen',
    navLabel: 'Vereinsschwimmen',
    title: 'Vereinsschwimmen',
    eyebrow: 'Training im 25-m-Becken',
    lead: 'Mehrere Vereine trainieren regelmäßig in unserem Sportbecken. Die Zeiten gelten jeweils für Mitglieder.',
    heroImage: '/images/artikel/fzb/25m_becken.jpg',
    heroAlt: 'Vereinsschwimmen im AQUANA',
    sections: [
      {
        heading: 'Trainingszeiten (für Mitglieder)',
        cards: [
          { title: 'Würselener Schwimm Club', text: '25-m-Becken', meta: 'Mo 18-21 · Do 18-20 Uhr' },
          { title: 'DLRG + Tauchkurs', text: '25-m-Becken', meta: 'Di 18-21 Uhr' },
          { title: 'Behindertensportgemeinschaft', text: '25-m-Becken', meta: 'Do 20-21 Uhr' },
        ],
      },
      {
        body: 'Weitere Informationen: www.wuerselen.dlrg.de · www.wsc-1962.de',
      },
    ],
    facts: [
      { label: 'Becken', value: '25 m' },
      { label: 'Vereine', value: 'WSC · DLRG' },
    ],
  },
  {
    slug: 'aquarobic-aquajogging',
    navLabel: 'AQUArobic & AQUAjogging',
    title: 'AQUArobic & AQUAjogging',
    eyebrow: 'Fitness im Wasser',
    lead: 'Aquasport ist gesund: Der natürliche Auftrieb des Wassers ermöglicht ein gelenk-, bänder- und muskelschonendes Ganzkörpertraining - für alle Altersklassen und Leistungsstufen.',
    heroImage: '/images/artikel/sport/aquacycling/aquacycling_3.jpg',
    heroAlt: 'Aquafitness im AQUANA',
    sections: [
      {
        heading: 'Aqua- und Bodyfit',
        body: 'Aquafitness eignet sich für alle Altersklassen und Leistungsstufen. Kurse montags und donnerstags zu mehreren Zeiten - weitere Informationen unter www.aqua-bodyfit.de.',
      },
      {
        heading: 'Aquarobik',
        body: 'Der Trend im Freizeitsport mit großen Erfolgen auch im REHA-Bereich: ein schonendes und zugleich effektives Ganzkörpertraining zu flotter Musik, mit Hanteln, Poolnudeln und Auftriebsgürteln.',
        bullets: [
          'Mo 21:00-21:45 Uhr',
          'Di 09:45-10:30 · 10:45-11:30 · 20:00-20:45 Uhr',
          'Mi 19:00-19:45 · 20:00-20:45 Uhr',
          'Fr 09:45-10:30 Uhr',
        ],
        note: 'Weitere Informationen über die Tauchschule Aachen, Telefon 0241 / 557978.',
      },
    ],
    facts: [
      { label: 'Wirkung', value: 'gelenkschonend' },
      { label: 'Für', value: 'jede Altersklasse' },
    ],
  },
  {
    slug: 'kanu',
    navLabel: 'Kanu Eskimotierkurs',
    title: 'Kanu Eskimotierkurs',
    eyebrow: 'Sicherheit im Boot',
    lead: 'Die Eskimorolle bringt Sicherheit und Bootsgefühl - donnerstags von 21:00 bis 22:30 Uhr im 25-m-Becken.',
    heroImage: '/images/artikel/fzb/25m_becken2.jpg',
    heroAlt: 'Kanukurs im AQUANA',
    sections: [
      {
        heading: 'Anmeldung',
        body: 'Teilnahme nach vorheriger Anmeldung bei:\nSport Radermacher · Adenauerstraße 6 · 52146 Würselen · Telefon 02405 / 3883\nE-Mail info@kanutotal.de · www.kanutotal.de',
      },
    ],
    facts: [
      { label: 'Zeit', value: 'Do 21:00-22:30' },
      { label: 'Becken', value: '25 m' },
      { label: 'Anmeldung', value: 'Sport Radermacher' },
    ],
  },
  {
    slug: 'triathlon-klettern',
    navLabel: 'Triathlon & Klettern',
    title: 'Triathlon & Klettern',
    eyebrow: 'Hoch hinaus',
    lead: 'Klettern „Just For Fun" an unserer 7-m-Kletterwand und Triathlontraining der DJK Armada Würselen.',
    heroImage: '/images/artikel/fzb/kletterwand.jpg',
    heroAlt: 'Kletterwand im AQUANA',
    sections: [
      {
        heading: 'Klettern „Just For Fun"',
        body: 'Freitags 15:30-17:00 Uhr (außer Ferien- und Feiertagen). Das Klettern an unserer Kletterwand mit Sicherheitsgeschirr ist ein Erlebnis - versuchen Sie, die etwas wackelige Wand bis zu 7 Metern zu erklimmen.',
        note: 'Die Kletterwand kann nur in Betrieb genommen werden, wenn es die Sicherheit des Badebetriebes zulässt.',
      },
      {
        heading: 'Triathlon',
        body: 'Triathlon DJK Armada Würselen (für Mitglieder) - montags und mittwochs nach Absprache. www.djk-aew.de',
      },
    ],
    facts: [
      { label: 'Klettern', value: 'Fr 15:30-17:00' },
      { label: 'Höhe', value: 'bis 7 m' },
      { label: 'Triathlon', value: 'DJK Armada' },
    ],
  },
  {
    slug: 'aquacycling',
    navLabel: 'Aquacycling',
    title: 'Aquacycling',
    eyebrow: 'Radfahren im Wasser',
    lead: 'Radfahren im Wasser? Na klar! Aquacycling ist das ideale Herz-Kreislauf-Training: effektiv, absolut gelenkschonend und für jedes Fitnesslevel und Alter geeignet.',
    heroImage: '/images/artikel/sport/aquacycling/aquacycling_1.jpg',
    heroAlt: 'Aquacycling im AQUANA',
    sections: [
      {
        body: 'Unsere Unterwasserräder sind individuell an jede Größe anpassbar - bis zu 800 Kalorien pro Stunde verbrennen und grenzenloser Spaß inklusive! Besonders geeignet für Lip-/Lymph-Patienten sowie bei Arthrose und Rheuma; dank einstellbarer Therapie-Kurbel auch für Knie- und Hüft-Patienten.',
      },
      {
        heading: 'Neue Kurstermine',
        cards: [
          { title: 'Mittwochs', meta: '09:30 Uhr' },
          { title: 'Samstags', meta: '19:00 Uhr' },
        ],
        note: 'Es ist eine begrenzte Anzahl an Aquacycling-Geräten verfügbar. Anmeldung ab sofort möglich.',
      },
    ],
    facts: [
      { label: 'Paket', value: '10 × 45 min' },
      { label: 'Preis', value: '125 €' },
      { label: 'Termine', value: 'Mi 09:30 · Sa 19:00' },
    ],
    ctaLabel: 'Aquacycling anfragen',
    ctaHref: 'mailto:info@aquana.de?subject=Aquacycling-Kurs%20AQUANA',
  },
  {
    slug: 'beachvolleyball',
    navLabel: 'Beachvolleyball',
    title: 'Beachfeeling im Freibad!',
    eyebrow: 'Kostenlos auf dem Freibadgelände',
    lead: 'Unser Beachvolleyballfeld auf dem Freibadgelände steht euch während der regulären Freibadöffnungszeiten kostenlos zur Verfügung!',
    heroImage: '/images/artikel/fzb/freibadbecken1.jpg',
    heroAlt: 'Beachvolleyball am AQUANA Freibad',
    sections: [
      {
        body: 'Ob spontan mit Freunden oder als kleine sportliche Abwechslung zum Sonnenbaden - einfach vorbeikommen und losspielen! Bälle könnt ihr ganz unkompliziert gegen Pfand an der Eingangskasse ausleihen.\n\nAlso: Sonnencreme einpacken, Freunde schnappen und ab aufs Feld! Wir freuen uns auf euch!',
      },
    ],
    facts: [
      { label: 'Preis', value: 'kostenlos' },
      { label: 'Bälle', value: 'gegen Pfand' },
      { label: 'Wann', value: 'Freibad-Zeiten' },
    ],
  },
];
