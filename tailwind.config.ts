import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        "burh-black-50": "#0F0F0F",
        "burh-yellow-50": "#E9FF1A",
        "burh-yellow-100": "#FFFF99",
        "burh-pink-50": "#CC4090",
        "burh-blue-50": "#05A2C2",
        "burh-orange-50": "#C26719",
        "burh-purple-50": "#9B19C2",
        "burh-red-50": "#FF5964",
        "burh-green-50": "#05FF00",
        "burh-gray-50": "#6D6D6D",
        "burh-gray-100": "#424242"
      },
    },
  },
  plugins: [],
};
export default config;
