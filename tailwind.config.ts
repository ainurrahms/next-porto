import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
