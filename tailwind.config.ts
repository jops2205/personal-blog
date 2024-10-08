import type { Config } from "tailwindcss";

const config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "french-lime": "#aaff43"
      },
      fontFamily: {
        "noto-sans": ["Noto Sans", "sans-serif"],
      },
    },
  },
} satisfies Config;

export default config;
