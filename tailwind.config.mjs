/** @type {import('tailwindcss').Config} */
// AQUANA — Euregio Freizeitbad Würselen — Palette "Tide & Ember".
// Anker: Logo-Ozeanblau #003589 → tide. aqua = Pool-Cyan (Energie/Glow),
// ember = Sauna-Wärme. Vier-Welten-Akzente (bad/sauna/sport/gastro).
// Farben als RGB-Triplets, Single Source of Truth: src/styles/global.css :root.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: 'rgb(var(--rgb-ink) / <alpha-value>)',
          deep: 'rgb(var(--rgb-ink-deep) / <alpha-value>)',
          soft: 'rgb(var(--rgb-ink-soft) / <alpha-value>)',
        },
        paper: 'rgb(var(--rgb-paper) / <alpha-value>)',
        stone: 'rgb(var(--rgb-stone) / <alpha-value>)',
        foam: 'rgb(var(--rgb-foam) / <alpha-value>)',
        muted: 'rgb(var(--rgb-muted) / <alpha-value>)',
        'muted-light': 'rgb(var(--rgb-muted-light) / <alpha-value>)',
        line: 'rgb(var(--rgb-border) / <alpha-value>)',
        tide: {
          DEFAULT: 'rgb(var(--rgb-tide) / <alpha-value>)',
          bright: 'rgb(var(--rgb-tide-bright) / <alpha-value>)',
          deep: 'rgb(var(--rgb-tide-deep) / <alpha-value>)',
        },
        aqua: {
          DEFAULT: 'rgb(var(--rgb-aqua) / <alpha-value>)',
          bright: 'rgb(var(--rgb-aqua-bright) / <alpha-value>)',
        },
        ember: {
          DEFAULT: 'rgb(var(--rgb-ember) / <alpha-value>)',
          deep: 'rgb(var(--rgb-ember-deep) / <alpha-value>)',
        },
        green: 'rgb(var(--rgb-green) / <alpha-value>)',
        // Vier-Welten-Akzente
        world: {
          bad: 'rgb(var(--rgb-world-bad) / <alpha-value>)',
          sauna: 'rgb(var(--rgb-world-sauna) / <alpha-value>)',
          sport: 'rgb(var(--rgb-world-sport) / <alpha-value>)',
          gastro: 'rgb(var(--rgb-world-gastro) / <alpha-value>)',
        },
        // dynamischer Welt-Akzent (folgt --rgb-accent / .tint-*)
        accent: 'rgb(var(--rgb-accent) / <alpha-value>)',
      },
      fontFamily: {
        // Body = Merriweather Sans (Original der alten Site), Display = Plus Jakarta Sans
        sans: ['"Merriweather Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Merriweather Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        pill: '999px',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
