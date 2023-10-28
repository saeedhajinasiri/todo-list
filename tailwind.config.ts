import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      'm-sm': '0.75rem',
      'm-base': '0.875rem',
      'm-lg': '1.375rem',

      't-sm': '0.875rem',
      't-base': '1rem',
      't-lg': '2rem',

      'd-sm': '0.875rem',
      'd-base': '1rem',
      'd-lg': '2.5rem',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'transparent': 'transparent',
        'white': '#FFFFFF',
        'black': '#121212',
        'grey': {
          light: '#D1D1D1',
          DEFAULT: '#979797',
          dark: '#494C6B',
        },
        'primary': {
          light: '#86AEFE',
          DEFAULT: '#3A7CFD',
          dark: '#024CDE',
        },
      },
    },
  },
  plugins: [],
};
export default config;
