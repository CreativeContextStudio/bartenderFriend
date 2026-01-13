import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-neo-border)",
        input: "var(--color-neo-card)",
        ring: "var(--color-neo-border)",
        background: "var(--color-neo-bg)",
        foreground: "var(--color-neo-text)",
        primary: {
          DEFAULT: "var(--color-neo-accent)", // Pink
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "var(--color-neo-pending)", // Yellow
          foreground: "var(--color-neo-text)",
        },
        destructive: {
          DEFAULT: "var(--color-neo-danger)", // Orange
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f0f0f0",
          foreground: "var(--color-neo-text-secondary)",
        },
        accent: {
          DEFAULT: "var(--color-neo-progress)", // Blue
          foreground: "var(--color-neo-text)",
        },
        popover: {
          DEFAULT: "var(--color-neo-card)",
          foreground: "var(--color-neo-text)",
        },
        card: {
          DEFAULT: "var(--color-neo-card)",
          foreground: "var(--color-neo-text)",
        },
        // Neobrutalist design colors with accessible text variants
        "neo-pending": {
          DEFAULT: "var(--color-neo-pending)",     // Vibrant yellow background
          text: "var(--color-neo-pending-text)",    // Accessible dark yellow text
        },
        "neo-accent": {
          DEFAULT: "var(--color-neo-accent)",       // Vibrant pink background
          text: "var(--color-neo-accent-text)",     // Accessible dark pink text
        },
        "neo-action": {
          DEFAULT: "var(--color-neo-done)",         // Vibrant lime background
          text: "var(--color-neo-action-text)",     // Accessible dark lime text
        },
        "neo-interactive": "var(--color-neo-interactive)", // Accessible blue for links/buttons
        "neo-focus": "var(--color-neo-focus)",             // Focus ring color
      },
      fontFamily: {
        display: ["var(--font-neo-display)"],
        sans: ["var(--font-neo-sans)"],
        mono: ["var(--font-neo-mono)"],
      },
      boxShadow: {
        'neo-sm': 'var(--shadow-neo-sm)',
        'neo-md': 'var(--shadow-neo-md)',
        'neo-lg': 'var(--shadow-neo-lg)',
        'neo-xl': 'var(--shadow-neo-xl)',
      },
      transitionTimingFunction: {
        'neo-fast': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'neo-normal': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        popIn: {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pop-in": "popIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
