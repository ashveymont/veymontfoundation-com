import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        white:    '#F6F2EA',
        clay:     '#A65A3A',
        forest:   '#24342A',
        copper:   '#B86F3E',
        obsidian: '#171717',
        sand:     '#E2D9CB',
        mist:     '#EDE8DF',
        ink:      '#2C2C2C',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['Inter', 'Helvetica Neue', 'sans-serif'],
      },
      fontSize: {
        eyebrow: ['11px', { letterSpacing: '0.3em', lineHeight: '1' }],
      },
      letterSpacing: {
        eyebrow: '0.3em',
        wide:    '0.2em',
        wider:   '0.25em',
        widest:  '0.35em',
      },
      maxWidth: {
        prose:  '760px',
        wide:   '1100px',
        full:   '1200px',
      },
      transitionTimingFunction: {
        elegant: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
}

export default config
