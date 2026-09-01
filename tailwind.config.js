/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14171F',
        paper: '#F7F8FB',
        bridge: {
          50: '#F1F1FE',
          100: '#E3E3FD',
          200: '#C4C4FB',
          300: '#9A9BF6',
          400: '#7476F1',
          500: '#5B5FEF',
          600: '#4245D6',
          700: '#3436AC',
          800: '#292B84',
          900: '#1F2166',
        },
        ember: {
          50: '#FFF4EC',
          100: '#FFE4D1',
          300: '#FFB37A',
          400: '#FF9E5C',
          500: '#FF8A3D',
          600: '#E86F22',
          700: '#C4581A',
        },
        signal: {
          400: '#2DD4C4',
          500: '#14B8A6',
          600: '#0E9488',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(20,23,31,0.04), 0 8px 24px -8px rgba(20,23,31,0.10)',
        lift: '0 4px 8px rgba(20,23,31,0.06), 0 20px 40px -12px rgba(91,95,239,0.18)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
