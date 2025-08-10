// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // any other directories you use
  ],
  safelist: [
    'text-red-400',
    'text-yellow-400',
    'text-green-400',
    'text-blue-400',
    'text-pink-400',
    'text-purple-400',
    'hover:text-white',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
