/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eef4ff',
          100: '#d9e6ff',
          200: '#b3ccff',
          300: '#8cb3ff',
          400: '#6699ff',
          500: '#3f80ff',
          600: '#2f63d6',
          700: '#244cab',
          800: '#1a357a',
          900: '#0f1f4a'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 31, 74, 0.10)'
      }
    },
  },
  plugins: [],
}
