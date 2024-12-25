import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        abhaya: ['var(--font-abhaya)'],
      },
      colors: {
        'primary-blue': '#153f7c',
        'primary-gold': '#ce9d5b',
        'dark-gray': '#333132',
        'light-pink': '#ea9292',
      },
    },
  },
  plugins: [],
};
export default config;