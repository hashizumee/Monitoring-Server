/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-blue-500',
    'bg-purple-500',
    'bg-emerald-500',
    'bg-cyan-500',
    'bg-pink-500',
    'text-blue-400',
    'text-purple-400',
    'text-emerald-400',
    'text-cyan-400',
    'text-pink-400',
    'from-blue-500',
    'from-purple-500',
    'from-emerald-500',
    'from-cyan-500',
    'from-pink-500',
    'to-blue-400',
    'to-purple-400',
    'to-emerald-400',
    'to-cyan-400',
    'to-pink-400',
  ]
}
