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
          50: '#f1f6ff',
          100: '#dbe6ff',
          200: '#b8cdff',
          300: '#90b0ff',
          400: '#5f8aff',
          500: '#2f64ff',
          600: '#1f4dda',
          700: '#173aae',
          800: '#122e89',
          900: '#0f276f'
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
