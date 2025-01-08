/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'color-primary': 'var(--color-primary)',
        'bg-color': 'var(--bg-color)',
        'title-color': 'var(--title-color)',
        'text-color': 'var(--text-color)',
        'border-color': 'var(--border-color)',
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
}
