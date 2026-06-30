/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans:    ["Inter", "system-ui", "sans-serif"],
        display: ["Syne", "system-ui", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
      },
      colors: {
        // Single accent — indigo
        accent: {
          DEFAULT: "#6366F1",
          dim:     "#4F46E5",
          hover:   "#4338CA",
          light:   "#EEF2FF",
          mid:     "#C7D2FE",
        },
        // Page backgrounds
        bg: {
          DEFAULT: "#FFFFFF",
          soft:    "#F8FAFC",
          subtle:  "#F1F5F9",
        },
        // Text
        ink: {
          DEFAULT:   "#0F172A",
          secondary: "#475569",
          muted:     "#94A3B8",
        },
        // Border
        line: {
          DEFAULT: "#E2E8F0",
          strong:  "#CBD5E1",
        },
      },
      boxShadow: {
        sm:   "0 1px 3px rgba(15,23,42,0.06), 0 1px 2px rgba(15,23,42,0.04)",
        card: "0 1px 3px rgba(15,23,42,0.06), 0 8px 24px -8px rgba(15,23,42,0.10)",
        "card-lg": "0 4px 12px rgba(15,23,42,0.08), 0 20px 40px -12px rgba(15,23,42,0.14)",
        accent: "0 8px 24px -4px rgba(99,102,241,0.28)",
      },
      animation: {
        float:  "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
