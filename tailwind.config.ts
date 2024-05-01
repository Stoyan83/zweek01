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
      },
      colors: {
        primary: "#150050",
        secondary: "#F4F4F4",
        darkWhite: "#F4F4F4",
        "placeholder-grey": "#787878",
        benefit_yellow: "#FFE377",
        card_bg: "#200b58",
        "news-green": "#00CC61",
        customGray: "#404040",
        "footer-text": "#B8CACE",
        "pricing-gray": "#777777"
      },
    },
  },
  plugins: [],
};
export default config;
