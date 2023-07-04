import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        bgColor:'#09090b',
      }
    },
  },
  plugins: [],
} satisfies Config;
