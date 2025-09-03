import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#8040ff', 600: '#8040ff' },
        secondary: '#a22d73',
        bg: '#140518',
        accent: '#00eea0',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(90deg, #8040ff 0%, #a22d73 100%)',
      },
    },
  },
  plugins: [],
}

export default config

