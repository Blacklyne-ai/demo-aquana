// ─────────────────────────────────────────────────────────────
// Schwimmkurse - 4 Stufen, verbatim von den Kurs-Seiten.
// Anmeldung: aquafisch@aquana.de / Tel. 02405 / 4119-25.
// ─────────────────────────────────────────────────────────────

export interface SwimCourse {
  slug: string;
  step: string;            // 01-04
  title: string;
  navLabel: string;
  audience: string;        // Zielgruppe / Alter
  lead: string;
  goals: string[];         // Ziel des Kurses (verbatim)
  scope: string;           // Umfang/Dauer
  groupSize: string;
  price: string;
  days: string;
  image: string;
}

export const courses: SwimCourse[] = [
  {
    slug: 'wassergewoehnung',
    step: '01',
    title: 'Wassergewöhnungskurs',
    navLabel: 'Wassergewöhnung',
    audience: 'Kinder ab 3 Jahren, höchstens 5 Jahre',
    lead: 'Das Heranführen an das Element Wasser - spielerisch nehmen wir den Kindern die Angst vor dem Wasser.',
    goals: [
      'Das Heranführen an das Element Wasser und den Kindern spielerisch die Angst vor Wasser nehmen.',
      'Geeignet für Kinder im Alter ab 3 Jahren, höchstens 5 Jahre.',
    ],
    scope: '6 × 45 min über 6 Wochen',
    groupSize: 'max. 5 Teilnehmer pro Schwimmlehrer',
    price: '75,00 € inkl. Eintritt',
    days: 'Montags - Freitags',
    image: '/images/artikel/fzb/kleinkinderbecken.jpg',
  },
  {
    slug: 'anfaenger',
    step: '02',
    title: 'Anfänger-Schwimmkurs',
    navLabel: 'Anfänger',
    audience: 'Kinder ab 5 Jahren',
    lead: 'Für Kinder bedeutet Wasser Spaß und Abenteuer. Im Anfängerkurs lernt Ihr Kind sicher schwimmen - bis zum Schwimmabzeichen.',
    goals: [
      'Erlernen der korrekten Schwimmbewegung',
      'Sprung vom Beckenrand',
      '25 m Schwimmen in einer Schwimmart in Bauch- oder Rückenlage (Grobform, beim Schwimmen in Bauchlage erkennbar ins Wasser ausatmen)',
      'Heraufholen eines Tauchrings aus schultertiefem Wasser',
      'Zeugnis und Schwimmabzeichen',
      'Kenntnis von Baderegeln',
    ],
    scope: '10 Unterrichtsstunden à 45 Minuten',
    groupSize: 'max. 5 Teilnehmer pro Schwimmlehrer',
    price: '125,00 € inkl. Eintritt',
    days: 'Montags - Freitags',
    image: '/images/artikel/fzb/kleinkinderbecken3.jpg',
  },
  {
    slug: 'fortgeschrittene',
    step: '03',
    title: 'Fortgeschrittenen-Schwimmkurs (Bronze)',
    navLabel: 'Fortgeschrittene',
    audience: 'Voraussetzung: Seepferdchen-Abzeichen',
    lead: 'Der Bronzekurs verbessert Technik, Kondition und Ausdauer - bis zum Deutschen Jugendschwimmzeichen in Bronze oder Silber.',
    goals: [
      'Verbesserung der Schwimmbewegungen',
      'Verbesserung von Kondition und Ausdauer',
      'Erlernen des Tief- und Streckentauchens',
      'Erwerb des Deutschen Jugendschwimmzeichens in Bronze und/oder Silber',
    ],
    scope: '10 Unterrichtsstunden à 45 Minuten über 10 Wochen',
    groupSize: 'max. 10 Teilnehmer pro Schwimmlehrer',
    price: '125,00 € inkl. Eintritt',
    days: 'Montag - Freitag',
    image: '/images/artikel/fzb/25m_becken.jpg',
  },
  {
    slug: 'erwachsene',
    step: '04',
    title: 'Erwachsenen-Schwimmkurs',
    navLabel: 'Erwachsene',
    audience: 'Erwachsene',
    lead: 'Immer mehr Erwachsene fühlen sich unsicher im Wasser. Sicheres Schwimmen ist gerade als Eltern wichtig - wir holen Sie dort ab, wo Sie stehen.',
    goals: [
      'Erlernen und Verbessern der Schwimmbewegungen',
      'Sprung vom Beckenrand bzw. Sprung aus 1 m Höhe',
      'Verbesserung der Kondition und Ausdauer im Wasser',
      'Erlernen des Tief- und Streckentauchens',
    ],
    scope: '10 Unterrichtsstunden à 45 Minuten über 10 Wochen',
    groupSize: 'max. 5 Teilnehmer pro Schwimmlehrer',
    price: '149,00 € inkl. Eintritt',
    days: 'Montags - Donnerstags',
    image: '/images/artikel/fzb/25m_becken2.jpg',
  },
];

export const courseRegistration = {
  intro:
    'Anmeldung und weitere Informationen direkt bei uns - telefonisch, per E-Mail oder über das Anmeldeformular vor Ort.',
  address: 'Aquana Sauna und Freizeitbad Würselen, Willy-Brandt-Ring 100, 52146 Würselen',
};
