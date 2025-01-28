import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      height: {
        '85vh': '85vh',
      },
      colors: {
        'light-grey': '#EEE',
      },
      spacing: {
        '2%': '2%',
      },
      minHeight: {
        '4.5rem': '4.5rem',
      },
    },
  },
};
export default config;
