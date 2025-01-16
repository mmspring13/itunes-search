/** @type {import('tailwindcss').Config} */

import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';
// import baseConfig from 'tailwindcss/defaultConfig';

export default {
  // theme: {
  //   colors: {
  //     'blue': '#1fb6ff',
  //     'purple': '#7e5bef',
  //     'pink': '#ff49db',
  //     'orange': '#ff7849',
  //     'green': '#13ce66',
  //     'yellow': '#ffc82c',
  //     'gray-dark': '#273444',
  //     'gray': '#8492a6',
  //     'gray-light': '#d3dce6',
  //   },
  //   fontFamily: {
  //     sans: ['Graphik', 'sans-serif'],
  //     serif: ['Merriweather', 'serif'],
  //   },
  //   extend: {
  //     screens: {
  //       'sm': {'min': '640px'},
  //       'md': {'min': '768px'},
  //       'lg': {'min': '1024px'},
  //       'xl': {'min': '1280px'},
  //       '2xl': {'min': '1536px'},
  //     },
  //     spacing: {
  //       '8xl': '96rem',
  //       '9xl': '128rem',
  //     },
  //     borderRadius: {
  //       '4xl': '2rem',
  //     }
  //   }
  // },
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [nextui()],
} satisfies Config;
