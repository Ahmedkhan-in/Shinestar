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
        brand: {
          blue: "#0756A4",
          sky: "#0879D9",
          light: "#36A9ED",
          gold: "#DDA52D",
          // AA-safe gold for text on white / cream / grey surfaces (4.7:1+)
          "gold-deep": "#8A6416",
          champagne: "#F3C969",
          ink: "#172B45",
          muted: "#5A7494",
          footer: "#073B70",
        },
        surface: {
          white: "#ffffff",
          warm: "#F5F0E8",
          grey: "#F2F4F7",
          card: "#111111",
        },
        earth: {
          mustard: "#C9974A",
          clay: "#A85840",
          olive: "#6B7C4D",
          sand: "#E8DCC8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      fontSize: {
        // Display — scaled up for editorial premium feel
        "display-xl":  ["clamp(56px,8vw,92px)",  { lineHeight: "0.92", letterSpacing: "-0.03em",  fontWeight: "300" }],
        "display-lg":  ["clamp(40px,5.5vw,68px)", { lineHeight: "0.95", letterSpacing: "-0.025em", fontWeight: "300" }],
        "display-md":  ["clamp(30px,3.5vw,50px)", { lineHeight: "1.04", letterSpacing: "-0.02em",  fontWeight: "400" }],
        "display-sm":  ["clamp(22px,2.2vw,30px)", { lineHeight: "1.15", letterSpacing: "-0.01em",  fontWeight: "400" }],
        "body-lg":     ["17px",  { lineHeight: "1.65" }],
        "body-md":     ["15px",  { lineHeight: "1.6"  }],
        "body-sm":     ["13px",  { lineHeight: "1.5"  }],
        "label":       ["14px",  { lineHeight: "1",   fontWeight: "600", letterSpacing: "0" }],
        "price":       ["18px",  { lineHeight: "1",   fontWeight: "600" }],
        "eyebrow":     ["11px",  { lineHeight: "1",   fontWeight: "600", letterSpacing: "0.12em" }],
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
        "card":  "14px",
        "btn":   "8px",
        "modal": "16px",
      },
      boxShadow: {
        "card":       "0 2px 16px rgba(0,0,0,0.10)",
        "card-hover": "0 8px 32px rgba(7,86,164,0.16)",
        "search":     "0 3px 20px rgba(0,0,0,0.12)",
        "modal":      "0 12px 48px rgba(0,0,0,0.20)",
      },
      transitionTimingFunction: {
        "premium": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "marquee":      "marquee 32s linear infinite",
        "fade-up":      "fadeUp 0.6s ease forwards",
        "fade-in":      "fadeIn 0.45s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
