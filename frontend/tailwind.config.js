/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./formkit.theme.ts",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1d4ed8",   // основной синий
          strong: "#1e40af",    // тёмный оттенок
          medium: "#3b82f6",    // светлый оттенок
        },
      },
    },
  },
  plugins: [],
}

