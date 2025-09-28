/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#009688',
        secondary: '#222F3E',
        accent: '#FFC107',
        bg: '#F8F9FA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 25px 50px -12px rgba(0, 150, 136, 0.35)',
      },
    },
  },
  plugins: [],
};
