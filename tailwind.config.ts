import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        scholarly: "var(--color-scholarly)",
        "scholarly-light": "var(--color-scholarly-light)",
        "scholarly-pale": "var(--color-scholarly-pale)",
        gold: "var(--color-gold)",
        "gold-pale": "var(--color-gold-pale)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      fontSize: {
        "hero-desktop": "clamp(36px, 6vw, 72px)",
        "hero-tablet": "clamp(36px, 5vw, 48px)",
        "hero-mobile": "clamp(32px, 8vw, 36px)",
        "section-heading": "clamp(32px, 4vw, 48px)",
        "subheading": "clamp(18px, 2vw, 24px)",
        body: "18px",
        "body-small": "16px",
        small: "15px",
      },
      lineHeight: {
        tighter: "1.1",
        tight: "1.3",
        relaxed: "1.6",
      },
      spacing: {
        "section-sm": "120px",
        "section-md": "160px",
        "section-lg": "200px",
      },
      maxWidth: {
        "8xl": "1200px",
      },
      borderRadius: {
        "2xl": "32px",
        card: "20px",
      },
      letterSpacing: {
        tighter: "-0.02em",
      },
    },
  },
  plugins: [],
};
export default config;
