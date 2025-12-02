import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Standardized Blue Palette from Figma
        blue: {
          300: "#93C5FD", // Verify against Figma if possible, using Tailwind default for now
          400: "#60A5FA",
          600: "#2563EB",
          700: "#1D4ED8", // Primary section label color
          800: "#1E40AF",
          900: "#1E3A8A",
        },
      },
      fontSize: {
        // Custom font sizes from Figma design
        xxs: "0.5625rem", // 9px
        "xs-plus": "0.625rem", // 10px
        "sm-minus": "0.6875rem", // 11px
        "sm-plus": "0.8125rem", // 13px
      },
    },
  },
  plugins: [],
};
export default config;
