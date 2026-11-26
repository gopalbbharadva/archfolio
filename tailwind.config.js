/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      colors: {
        // Brand bronze (kept close to the original #B45309)
        primaryColor: '#B45309',
        bronze: {
          50: '#FBF6EF',
          100: '#F4E8D7',
          200: '#E8CFAE',
          300: '#D6A46B',
          400: '#C98945',
          500: '#B45309',
          600: '#97460A',
          700: '#7A390C',
        },
        ink: {
          DEFAULT: '#1C1A17',
          soft: '#4A453E',
          muted: '#7A736A',
        },
        ivory: {
          DEFAULT: '#F7F4EF',
          deep: '#EFEAE2',
        },
        night: {
          DEFAULT: '#121110',
          soft: '#1B1A18',
          line: '#2C2A27',
        },
      },
      letterSpacing: {
        eyebrow: '0.28em',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1.0) translate3d(0,0,0)' },
          '100%': { transform: 'scale(1.12) translate3d(-1.5%, -1%, 0)' },
        },
        marquee: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '100%': { transform: 'translate3d(-50%,0,0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translate3d(0, 24px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0,0,0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'word-rise': {
          '0%': { transform: 'translate3d(0, 110%, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)' },
        },
        progress: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'scroll-cue': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
      },
      animation: {
        kenburns: 'kenburns 9s ease-out forwards',
        marquee: 'marquee 60s linear infinite',
        'fade-up': 'fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.6s ease-out both',
        'word-rise': 'word-rise 1.1s cubic-bezier(0.16, 1, 0.3, 1) both',
        progress: 'progress linear forwards',
        'scroll-cue': 'scroll-cue 1.8s cubic-bezier(0.65, 0, 0.35, 1) infinite',
      },
    },
  },
  plugins: [],
}
