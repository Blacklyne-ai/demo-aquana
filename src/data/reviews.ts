// ─────────────────────────────────────────────────────────────
// Bewertungen - ECHT, aus öffentlichen Quellen (verbatim, Quelle genannt).
// Aggregat = echtes Google-Rating. Nichts erfunden.
// Fremdsprachige Original-Reviews ins Deutsche übertragen (gekennzeichnet).
// ─────────────────────────────────────────────────────────────

export const reviewSummary = {
  rating: 3.8,
  count: 3787,
  label: 'Google-Bewertungen',
  url: 'https://www.google.com/maps/search/?api=1&query=AQUANA+Freizeitbad+W%C3%BCrselen',
};

export interface Review {
  name: string;
  rating: number;        // 1-5
  text: string;
  source: string;        // Plattform
  tint?: string;         // Welt-Akzent für die Karte
}

export const reviews: Review[] = [
  {
    name: 'Chris M.',
    rating: 5,
    text: 'Sowohl für Familien als auch für Saunagänger absolut empfehlenswert!',
    source: 'Parkscout',
    tint: 'bad',
  },
  {
    name: 'golocal-Nutzer',
    rating: 5,
    text: 'Sauna, Wellness und Freizeitbad - hier in der Region gibt es nichts Besseres.',
    source: 'golocal',
    tint: 'sauna',
  },
  {
    name: 'CatFriend',
    rating: 4,
    text: 'Kann man weiterempfehlen. Für die Euregio wirklich ein schönes Freizeitbad.',
    source: 'golocal',
    tint: 'tide',
  },
  {
    name: 'ViiiViii168',
    rating: 5,
    text: 'Die AQUANA-Sauna hat uns insgesamt sehr gut gefallen - besonders das nette, freundliche Personal und die engagierten Saunameister.',
    source: 'Tripadvisor (übersetzt)',
    tint: 'sauna',
  },
];

// Kurzes Zitat für die Hero-Glas-Karte
export const heroReview = reviews[0];
