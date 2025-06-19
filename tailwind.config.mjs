/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Lofi color palette
        cream: {
          50: '#fefdf8',
          100: '#fef7e7',
          200: '#fdecc4',
          300: '#fbdb97',
          400: '#f7c069',
          500: '#f3a847',
          600: '#e4903c',
          700: '#bd7432',
          800: '#975d33',
          900: '#7a4d2e',
        },
        peach: {
          50: '#fef7f0',
          100: '#feebe0',
          200: '#fcd4bf',
          300: '#f9b494',
          400: '#f58968',
          500: '#f16545',
          600: '#e04627',
          700: '#bc351d',
          800: '#952d1c',
          900: '#78281c',
        },
        sage: {
          50: '#f6f7f4',
          100: '#e9ebe3',
          200: '#d4d8c8',
          300: '#b4bda4',
          400: '#94a082',
          500: '#7a8768',
          600: '#616c52',
          700: '#4f5644',
          800: '#424739',
          900: '#383c32',
        },
        warm: {
          50: '#faf9f7',
          100: '#f0efeb',
          200: '#e2dfd6',
          300: '#cdc7ba',
          400: '#b5ab9a',
          500: '#a59582',
          600: '#978675',
          700: '#7e6f61',
          800: '#695c52',
          900: '#554c44',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'handwriting': ['Caveat', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      perspective: {
        '1000': '1000px',
      }
    },
  },
  plugins: [],
}