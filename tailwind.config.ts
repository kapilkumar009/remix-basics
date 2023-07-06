import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
 
      'mobile':'320px',
      // => @media (min-width: 320px) { ... }

      'tablet': '786px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors:{
        bgColor:'#09090b',
      }
    },
  },
  plugins: [],
} satisfies Config;
