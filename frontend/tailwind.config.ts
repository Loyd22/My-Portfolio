import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#070A12",
        panel: "#0E1323",
        border: "#1E2940",
        accent: "#66E3C4",
        accentSoft: "#1F6A59",
        text: "#E8EEF9",
        textMuted: "#A9B6CC"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(102, 227, 196, 0.2), 0 20px 60px rgba(17, 31, 56, 0.5)",
        card: "0 18px 40px rgba(4, 8, 18, 0.45)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 20% 20%, rgba(102, 227, 196, 0.11), transparent 35%), radial-gradient(circle at 80% 0%, rgba(91, 130, 255, 0.14), transparent 30%), linear-gradient(120deg, rgba(255,255,255,0.03), rgba(255,255,255,0.005))"
      }
    }
  },
  plugins: []
};

export default config;
