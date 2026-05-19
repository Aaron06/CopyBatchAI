module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
        },
        accent: {
          500: '#10b981',
          400: '#34d399',
          300: '#6ee7b7',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
