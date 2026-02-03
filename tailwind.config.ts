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
          50: '#FDF8E7',
          100: '#FAF0C9',
          200: '#F5E193',
          300: '#EFD25D',
          400: '#E5BC2A',
          500: '#C9A227',
          600: '#A68521',
          700: '#7D641A',
          800: '#544413',
          900: '#2B230A',
        },
        burgundy: {
          50: '#F9E8E8',
          100: '#F2CFCF',
          200: '#E59F9F',
          300: '#D86F6F',
          400: '#CB3F3F',
          500: '#8B2323',
          600: '#6B1C1C',
          700: '#4A1414',
          800: '#2A0C0C',
          900: '#150606',
        },
        dark: {
          50: '#2A2A2A',
          100: '#1F1F1F',
          200: '#1A1A1A',
          300: '#151515',
          400: '#121212',
          500: '#0D0D0D',
          600: '#0A0A0A',
          700: '#070707',
          800: '#050505',
          900: '#020202',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Cormorant Garamond', 'serif'],
        'accent': ['Cinzel', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #C9A227 0%, #E5BC2A 50%, #A68521 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 50%, #0D0D0D 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(201, 162, 39, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(201, 162, 39, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
export default config
