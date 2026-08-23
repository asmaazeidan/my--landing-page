/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF5EC',
        ivory: '#FFFDF9',
        rose: {
          light: '#E9CDD1',
          DEFAULT: '#C48A93',
          deep: '#9C5F6E',
          ink: '#3E2229',
        },
        gold: {
          light: '#D9BE8F',
          DEFAULT: '#B08D57',
          deep: '#8C6E3F',
        },
        charcoal: '#352822',
        blush: '#F4E7E3',
      },
      fontFamily: {
        display: ['"Aref Ruqaa"', 'serif'],
        body: ['"Tajawal"', 'sans-serif'],
      },
      backgroundImage: {
        marble: "radial-gradient(circle at 20% 20%, rgba(217,190,143,0.10), transparent 40%), radial-gradient(circle at 80% 70%, rgba(196,138,147,0.10), transparent 45%)",
      },
      borderRadius: {
        arch: '999px 999px 0 0',
      },
    },
  },
  plugins: [],
}
