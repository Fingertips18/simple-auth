/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "#FAFBFB",
        foreground: "#0F1113",
        primary: "#718291",
        secondary: "#C1B3Af",
        accent: "#ADB099",

        "dark-background": "#050606",
        "dark-foreground": "#EBEDEF",
        "dark-primary": "#6D7E8D",
        "dark-secondary": "#51423E",
        "dark-accent": "#62654E",
      },
      dropShadow: {
        glow: ["0 0px 15px var(--primary)", "0 0px 60px var(--primary)"],
        "foreground-glow": [
          "0 0px 15px var(--foreground)",
          "0 0px 60px var(--foreground)",
        ],
      },
    },
  },
  plugins: [],
};
