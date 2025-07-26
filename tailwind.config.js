/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss-rtl'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#21409a',
        background: '#f7f7f7',
        dark: '#1f1f1f'
      },
      fontFamily: {
        sans: ['Poppins', 'Cairo', 'sans-serif'] // ✅ Updated font (Poppins for English, Cairo for Arabic)
      }
    },
  },
  plugins: [plugin],
}
