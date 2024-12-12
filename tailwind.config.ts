import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // Analyzuje tieto súbory na Tailwind triedy
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary))', 
        secondary: '#9333EA', 
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Pridanie vlastného fontu
      },
    },
  },
  plugins: [],
};

export default config;
