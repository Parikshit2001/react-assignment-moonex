import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        fira: ["var(--font-fira)"],
      },
      screens: {
        xxsmall: "480px",
        xsmall: "540px",
        medium: "720px",
        large: "14400px",
      },
    },
  },
  plugins: [],
};
export default config;
