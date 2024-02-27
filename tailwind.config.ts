import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": 'url(https://ranjeet.blr1.cdn.digitaloceanspaces.com/assets/bg.png)'
      },
      colors: {
        'dark-navy': "#261676",
        'blue':"#2463FF",
        'white':"#FFFFFF",
      },
      backgound: {
        'dark-navy': "#261676",
        'blue':"#2463FF",
        'white':"#FFFFFF",
      },
      fontSize: {
        'hxl': '136px',
        'hl': '88px',
        'hm': "48px",
        'hs': "32px",
        'b': "26px",
      },
      boxShadow: {
        'blue-bs' : 'inset 0 -2px 0 3px #140E66',
        'blue-bs1' : 'inset 0 1px 0 6px #3C74FF',
        'pink-bs':  'inset 0 1px 0 6px #C642FB',
      }

    },
  },
  plugins: [],
};
export default config;
