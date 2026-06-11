import type { ContentPage } from './worlds';

// Freizeitbad-Attraktionen (für Hub-Grid + Attraktionen-Seite) - verbatim Begriffe.
export const attractions: { name: string; text: string; image: string; meta?: string }[] = [
  {
    name: 'Wellenbecken',
    text: 'Im Wellenbecken tauchen Sie in subtropisches Klima ein - viel Spaß für Kinder, Jugendliche und alle Junggebliebenen.',
    image: '/images/artikel/fzb/wellenbecken.jpg',
  },
  {
    name: 'Lazy River',
    text: 'Einfach treiben lassen: Mit dem Großreifen geht es gemütlich durch unseren angeschlossenen River - eine entspannte Runde im warmen Wasser.',
    image: '/images/artikel/fzb/wellenbecken3.jpg',
    meta: '31 °C',
  },
  {
    name: 'Black Hole',
    text: 'Running-Lights, Spotlights - ein besonderes Erlebnis, ins Dunkel zu verschwinden: Black Hole macht es auf 75 Metern möglich!',
    image: '/images/artikel/fzb/blackhole1.jpg',
    meta: 'ab 8 Jahren · 75 m',
  },
  {
    name: 'Master Blaster',
    text: 'Per Wasserdruck die Aqua-Achterbahn hinauf und hinunter - Action pur auf dem Master Blaster.',
    image: '/images/artikel/fzb/masterblaster1.jpg',
    meta: 'ab 7 Jahren',
  },
  {
    name: 'Piratenschiff „Aquana"',
    text: 'Geankert! Das Piratenschiff bietet kleinen und großen Piraten bis zu 10 Jahren spannenden Spiel-Spaß - mit Wasserkanonen und einem Floß zur Verteidigung.',
    image: '/images/artikel/fzb/kleinkinderbecken3.jpg',
    meta: 'bis 10 Jahre',
  },
  {
    name: '25-m-Hallenbad',
    text: 'Schul-, Sport- und öffentliches Schwimmen im 25-m-Becken mit Sprungturmanlage.',
    image: '/images/artikel/fzb/25m_becken.jpg',
  },
  {
    name: 'Beheiztes Freibad & Kinderaußenbecken',
    text: 'Das beheizte Freibad mit 25-m-Becken und Kinderaußenbecken sorgt bei sommerlichen Temperaturen für angenehmes Verweilen - auf Sonnenterrasse und Liegewiese. Ab 20 Grad Außentemperatur für euch geöffnet (nur in der Sommersaison).',
    image: '/images/artikel/fzb/freibadbecken.jpg',
  },
  {
    name: 'Kletterwand',
    text: 'Klettern „Just For Fun": Versuchen Sie, die etwas wackelige Kletterwand mit Sicherheitsgeschirr bis zu 7 Metern zu erklimmen.',
    image: '/images/artikel/fzb/kletterwand.jpg',
    meta: 'bis 7 m',
  },
  {
    name: 'Kinderbecken & Wickelhütte',
    text: 'Das Kinderbecken bietet den ganz Kleinen einen integrierten Spielbereich mit kindgerechten Wasserspielgeräten. Eine Wickelhütte im Familienbereich rundet alles ab.',
    image: '/images/artikel/fzb/kleinkinderbecken.jpg',
  },
  {
    name: 'Whirlpools',
    text: 'Die Whirlpools im Freizeitbad ergänzen die sportiven und entspannenden Aktivitäten - kurz abtauchen, durchatmen, sprudeln lassen.',
    image: '/images/artikel/fzb/freibadbecken1.jpg',
  },
  {
    name: 'Wasserlaufbälle',
    text: 'In den großen Wasserlaufbällen über das Wasser laufen, balancieren und kullern - ein Riesenspaß für mutige Wasserratten.',
    image: '/images/artikel/fzb/attraktionen/wasserball.jpg',
  },
  {
    name: 'Hindernisbahn',
    text: 'Über die schwimmende Hindernisbahn klettern, balancieren und ins Wasser springen - Action im Action-Programm an Wochenenden und in den Ferien.',
    image: '/images/artikel/fzb/attraktionen/rutsche.jpg',
  },
];

export const freizeitbadPages: ContentPage[] = [
  {
    slug: 'attraktionen',
    navLabel: 'Attraktionen & Rutschen',
    title: 'Attraktionen & Rutschen',
    eyebrow: 'Action pur im AQUANA',
    lead: 'Sei es mit dem Großreifen durch den „Lazy River" oder auf dem Master Blaster per Wasserdruck die Aqua-Achterbahn hinauf und hinunter … Spaß kennt keine Grenzen!',
    heroImage: '/images/artikel/fzb/wellenbecken2.jpg',
    heroAlt: 'Wellenbecken im AQUANA Freizeitbad',
    sections: [
      {
        heading: 'Das AQUANA-Konzept geht voll auf',
        body: 'Mit aktiven sowie entspannend-erholsamen Angeboten zu familienfreundlichen Preisen geht das AQUANA-Konzept voll auf. Das „AQUANA - Sauna- und Freizeitbad in Würselen" setzt einen deutlichen Akzent in der Freizeitlandschaft der Euregio.',
      },
      {
        heading: 'Unsere Attraktionen',
        cards: attractions.map((a) => ({ title: a.name, text: a.text, meta: a.meta })),
      },
      {
        heading: 'Attraktionsprogramm',
        body: 'In den Ferien und an den Wochenenden bieten wir ein abwechslungsreiches Aktionsprogramm an. Die genaue Planung können Sie den Aushängen im Haus sowie den Beiträgen bei Facebook und Instagram entnehmen.',
        note: 'Die Kletterwand und Trendsport-Angebote können nur in Betrieb genommen werden, wenn es die Sicherheit des Badebetriebes zulässt.',
      },
    ],
    facts: [
      { label: 'Black Hole', value: '75 m · ab 8 J.' },
      { label: 'Master Blaster', value: 'ab 7 J.' },
      { label: 'Piratenschiff', value: 'bis 10 J.' },
      { label: 'Hallenbad', value: '25 m + Sprungturm' },
    ],
    ctaLabel: 'Tickets online kaufen',
  },
  {
    slug: 'schulklassen-gruppen',
    navLabel: 'Schulklassen & Gruppen',
    title: 'Schulklassen & Gruppen',
    eyebrow: 'Euer perfektes Gruppenerlebnis',
    lead: 'Ihr plant einen Schulausflug, eine Vereinsfahrt oder ein Abenteuer mit der Jugendfeuerwehr oder den Pfadfindern? Dann ab ins AQUANA Freizeitbad!',
    heroImage: '/images/artikel/fzb/wellenbecken3.jpg',
    heroAlt: 'Gruppen im AQUANA',
    sections: [
      {
        heading: 'Das erwartet euch',
        bullets: [
          'Wellenbecken für pures Meeres-Feeling',
          'Rutschen-Spaß auf der Turbo- und Reifenrutsche',
          'Entspannung in unseren warmen Becken',
          'Leckere Verpflegung in unserer Gastronomie',
        ],
      },
      {
        heading: 'Gruppen-Sonderkonditionen',
        cards: [
          { title: 'Gruppensonderpreis', text: 'Nur 7,50 € pro Person (ab 10 Personen, Tageskarte).', meta: 'ab 10 Personen' },
          { title: 'Sonderöffnungszeiten', text: 'Für große Gruppen möglich - z. B. freitags ab 10 Uhr.', meta: 'auf Anfrage' },
        ],
      },
    ],
    facts: [
      { label: 'Gruppenpreis', value: '7,50 € / Person' },
      { label: 'ab', value: '10 Personen' },
      { label: 'Anfragen', value: 'mueller@aquana.de' },
    ],
    ctaLabel: 'Gruppe anfragen',
    ctaHref: 'mailto:mueller@aquana.de?subject=Gruppenanfrage%20AQUANA',
  },
  {
    slug: 'kindergeburtstag',
    navLabel: 'Kindergeburtstag',
    title: 'Kindergeburtstag im AQUANA',
    eyebrow: 'Kinder und Wasser gehören zusammen',
    lead: 'Spielen und Toben im nassen Element macht Spaß! Machen Sie Ihrem Kind die große Freude, seinen Geburtstag im Kreis von Freundinnen und Freunden im AQUANA zu feiern.',
    heroImage: '/images/artikel/fzb/kleinkinderbecken3.jpg',
    heroAlt: 'Kindergeburtstag im AQUANA',
    sections: [
      {
        heading: 'Wir kommen Ihnen entgegen',
        body: 'Das AQUANA-Freizeitbad schenkt dem Geburtstagskind den Eintritt; für die Gäste zahlen Sie nur den „Geburtstagspreis". Ihr Kind kann den ganzen Tag mit seiner Geburtstagsgesellschaft im AQUANA feiern und spielen.\n\nHungrige „Wasserratten" wollen beköstigt werden - damit der Kindergeburtstag die Geldbörse nicht zu arg strapaziert, bietet das AQUANA das Geburtstagsmenü an: Wer sich dafür entscheidet, spart im Vergleich zu den Listenpreisen ein beachtliches Sümmchen.',
      },
      {
        heading: 'Das Geburtstagsmenü',
        body: 'Das Geburtstagsmenü beinhaltet einen reservierten und dekorierten Tisch für den ganzen Tag. Zudem ist eine Schatzsuche inkludiert. Auf Wunsch buchen Sie einen Marmorkuchen (400 g) für 8,90 € hinzu.\n\nFür die Einladung der Gäste kann Ihr Kind unsere eigens dafür bestimmten Einladungskarten nutzen - diese senden wir Ihnen auf Wunsch gerne kostenlos zu.',
      },
      {
        heading: 'Was gilt es zu beachten?',
        bullets: [
          'Das Geburtstagsangebot gilt an allen Öffnungstagen.',
          'Eine Anmeldung ist nicht erforderlich.',
          'Das Geburtstagskind ist nicht älter als 14 Jahre.',
          'Vergünstigter Eintrittspreis nur auf Nachweis - stichprobenartig wird nach dem Ausweis gefragt.',
          'Die Sonderkonditionen gelten innerhalb der ersten 8 Wochen nach dem Geburtstag.',
          'Bei Reservierung mit Geburtstagsmenü erhalten Sie eine feste Tischreservierung.',
          'In den Ferien und am Wochenende bieten wir zusätzlich ein kostenloses Aktionsprogramm an.',
          'Reservierungen benötigen eine Mindestvorlaufzeit von vier Tagen.',
        ],
      },
    ],
    facts: [
      { label: 'Geburtstagskind', value: 'Eintritt frei' },
      { label: 'Gäste', value: '8,80 € p. P.' },
      { label: 'Kuchen', value: '8,90 € (400 g)' },
      { label: 'Vorlauf', value: 'min. 4 Tage' },
    ],
    ctaLabel: 'Geburtstag anfragen',
    ctaHref: 'mailto:info@aquana.de?subject=Kindergeburtstag%20im%20AQUANA',
  },
  {
    slug: 'bahnenschwimmen',
    navLabel: 'Bahnenschwimmen',
    title: 'Bahnenschwimmen',
    eyebrow: 'Sportbecken',
    lead: 'Ziehen Sie Ihre Bahnen im 25-m-Sportbecken - für Kondition, Gesundheit und den klaren Kopf zwischendurch.',
    heroImage: '/images/artikel/fzb/25m_becken2.jpg',
    heroAlt: '25-Meter-Sportbecken im AQUANA',
    sections: [
      {
        heading: 'Preise Bahnenschwimmen',
        cards: [
          { title: 'Einzeleintritt', text: 'Bahnenschwimmen im Sportbecken.', meta: '4,50 €' },
          { title: '10er Coin', text: 'Zehnerkarte fürs Bahnenschwimmen.', meta: '41,50 €' },
        ],
      },
    ],
    facts: [
      { label: 'Becken', value: '25 m' },
      { label: 'Einzel', value: '4,50 €' },
      { label: '10er Coin', value: '41,50 €' },
    ],
    todo: 'Konkrete Bahnenschwimmen-Zeiten ergänzen - auf der alten Seite ohne Inhalt (Operator-TODO).',
    ctaLabel: 'Öffnungszeiten ansehen',
    ctaHref: '/preise-zeiten',
  },
  {
    slug: 'beco-shop',
    navLabel: 'Beco-Shop',
    title: 'Beco-Shop',
    eyebrow: 'Schwimmbedarf vor Ort',
    lead: 'Unser Beco-Shop bietet alles, was das Herz eines jeden Wasserbegeisterten begehrt.',
    heroImage: '/images/artikel/beko/beco-1.jpeg',
    heroAlt: 'Beco-Shop im AQUANA',
    sections: [
      {
        heading: 'Das Sortiment',
        body: 'Von einem breit gefächerten Sortiment an Schwimmkleidung für Kinder und Erwachsene über Wasserspielzeug bis hin zu allem, was das Thema Sicherheit für Nichtschwimmer betrifft. Sollte wider Erwarten etwas nicht in Ihrer Größe oder Farbe vorrätig sein, bestellen wir dies natürlich gerne.',
      },
    ],
    facts: [
      { label: 'Schwimmkleidung', value: 'Kinder & Erwachsene' },
      { label: 'Wasserspielzeug', value: '✓' },
      { label: 'Sicherheit', value: 'für Nichtschwimmer' },
    ],
    todo: 'Externe Shop-URL prüfen - im Scrape nicht enthalten (Operator-TODO).',
    ctaLabel: 'Im AQUANA vorbeischauen',
    ctaHref: '/anfahrt',
  },
];
