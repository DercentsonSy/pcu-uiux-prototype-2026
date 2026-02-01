/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"DM Sans"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d'
        }
      },
      boxShadow: {
        soft: '0 20px 80px -30px rgba(15, 39, 111, 0.28)',
        card: '0 12px 40px -16px rgba(16, 24, 40, 0.35)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
