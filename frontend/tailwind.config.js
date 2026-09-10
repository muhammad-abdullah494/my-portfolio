/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { 900: '#0f172a', 950: '#020617' },
        accent: { 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb' },
        text: { primary: '#f8fafc', secondary: '#94a3b8' }
      },
      fontFamily: { sans: ['Inter', 'sans-serif'] },
    },
  },
  plugins: [],
}