/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '360px',
      'md': '375px',
      'lg': '390px',
      'xl': '414px',
      '2xl': '540px',
      '3xl': '600px',
      '4xl': '768px',
      '5xl': '820px',
      '6xl': '912px',
      '7xl': '1024px',
      '8xl': '1112px',
      '9xl': '1280px',
      '10xl': '1366px',
      '11xl': '1440px',
      '12xl': '1536px',
      '13xl': '1600px',
      '14xl': '1920px',
      '15xl': '2560px',
      '16xl': '3840px',
    },
    extend: {
      colors: {
        slate: {
          100: 'rgb(var(--slate-100) / <alpha-value>)',
          200: 'rgb(var(--slate-200) / <alpha-value>)',
          300: 'rgb(var(--slate-300) / <alpha-value>)',
          400: 'rgb(var(--slate-400) / <alpha-value>)',
          500: 'rgb(var(--slate-500) / <alpha-value>)',
          600: 'rgb(var(--slate-600) / <alpha-value>)',
          700: 'rgb(var(--slate-700) / <alpha-value>)',
          800: 'rgb(var(--slate-800) / <alpha-value>)',
          900: 'rgb(var(--slate-900) / <alpha-value>)',
        },
        gold: {
          400: '#F4C430',
          500: '#D4AF37',
          600: '#B8860B',
          700: '#996515',
        },
        ochre: {
          500: '#C87D32',
          600: '#A65E1E',
        },
        surface: {
          DEFAULT: 'rgb(var(--color-surface) / <alpha-value>)',
        },
        elevated: {
          DEFAULT: 'rgb(var(--color-elevated) / <alpha-value>)',
        },
        dark: {
          900: '#0B0D11',
          950: '#07080B',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
        'float': 'float 6s infinite ease-in-out',
        'spin-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 30px rgba(212, 175, 55, 0.8))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
