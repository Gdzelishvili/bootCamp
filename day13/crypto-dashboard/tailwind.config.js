/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/app/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // ✅ this is required!
    theme: {
      extend: {},
    },
    plugins: [],
  }
  