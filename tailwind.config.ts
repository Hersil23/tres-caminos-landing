import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#ecd56e',
          600: '#c4a84a',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        burgundy: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#8b2942',
          600: '#7a1f3a',
          700: '#6b1a32',
          800: '#5c152a',
          900: '#4d1022',
        },
        dark: {
          50: '#f8f8f8',
          100: '#e8e8e8',
          200: '#d4d4d4',
          300: '#a3a3a3',
          400: '#737373',
          500: '#525252',
          600: '#1a1410',
          700: '#171310',
          800: '#0f0c09',
          900: '#0a0806',
        },
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Cormorant Garamond', 'Georgia', 'serif'],
        accent: ['Cinzel', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(236, 213, 110, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(236, 213, 110, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
