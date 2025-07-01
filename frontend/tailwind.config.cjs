  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    theme: {
      extend: {
        colors: {
          'neon-pink': '#ff3cac',
          'neon-blue': '#4fd1ff',
          'neon-purple': '#a100ff',
          'neon-green': '#39ff14',
          'neon-red': '#ff1744',
          'deep-navy': '#18181b',
        },
      },
    },
    plugins: [],
  }