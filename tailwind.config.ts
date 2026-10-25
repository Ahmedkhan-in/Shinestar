import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Shine Star brand palette
        brand: {
          blue: "#0756A4",       // Royal blue — primary CTA
          sky: "#0879D9",        // Sky blue — supporting accent
          light: "#36A9ED",      // Light sky — highlights
          gold: "#DDA52D",       // Gold — premium badges, ratings
          champagne: "#F3C969",  // Champagne — selected states, small highlights
          ink: "#172B45",        // Primary text — deep navy
          muted: "#5A7494",      // Secondary text
          footer: "#073B70",     // Deep blue footer
        },
        surface: {
          white: "#ffffff",
          warm: "#F5F0E8",       // Oura-borrowed cream for editorial/hero
          grey: "#F2F4F7",       // Subtle bg, skeleton
          card: "#111111",       // Hero floating card only
        },
        earth: {
          mustard: "#C9974A",    // Bands only — never buttons
          clay: "#A85840",       // Bands only
          olive: "#6B7C4D",      // Bands only
          sand: "#E8DCC8",       // Warm band bg
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(48px,6vw,72px)", { lineHeight: "0.95", letterSpacing: "-0.03em", fontWeight: "300" }],
        "display-lg": ["clamp(38px,4.5vw,56px)", { lineHeight: "1.0", letterSpacing: "-0.025em", fontWeight: "300" }],
        "display-md": ["clamp(28px,3vw,40px)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "400" }],
        "display-sm": ["clamp(20px,2vw,26px)", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "400" }],
        "body-lg": ["17px", { lineHeight: "1.6" }],
        "body-md": ["15px", { lineHeight: "1.55" }],
        "body-sm": ["13px", { lineHeight: "1.5" }],
        "label": ["14px", { lineHeight: "1", fontWeight: "600", letterSpacing: "0" }],
        "price": ["18px", { lineHeight: "1", fontWeight: "600" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "section-sm": "clamp(40px, 6vw, 64px)",
        "section-lg": "clamp(64px, 8vw, 96px)",
      },
      maxWidth: {
        "content": "1280px",
        "prose": "1080px",
      },
      borderRadius: {
        "card": "14px",
        "btn": "8px",
        "modal": "16px",
      },
      boxShadow: {
        "card": "0 2px 16px rgba(0,0,0,0.10)",
        "card-hover": "0 6px 24px rgba(7,86,164,0.14)",
        "search": "0 3px 20px rgba(0,0,0,0.12)",
        "modal": "0 8px 40px rgba(0,0,0,0.18)",
      },
      backgroundImage: {
        "none": "none",
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "fade-up": "fadeUp 0.5s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
