import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1430px",
    },
    fontFamily: {
      primary: "var(--font-cormorant_upright)",
      secondary: "var(--font-open_sans)",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#100e0e",
        },
        secondary: {
          DEFAULT: "#787f8a",
        },
        accent: {
          DEFAULT: "#c7a17a",
          hover: "#a08161",
        },
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      backgroundImage: {
        hero_overlay: "url('/assets/hero/hero-overlay.png')",
        opening_hours: "url('/assets/opening-hours/bg.png')",
        footer: "url('/assets/jipang2.png')",
      },
    },
  },
  plugins: [],
};
export default config;
