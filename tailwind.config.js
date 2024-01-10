/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      // "3xl": "1920px",
    },

    extend: {
      backgroundImage: {
        overlay: "url(/assets/hero/overlay.jpg)",
        newsletter: "url(/assets/hero/newsletter.jpg)",
      },
      fontFamily: {
        ptSerif: [`var(--font-pt-serif)`, `sans-serif`],
        montserrat: [`var(--font-montserrat)`, `sans-serif`],
      },
      colors: {
        primary: "#222222",
        secondary: "#BDBCC4",
        tertiary: "#3C3B44",
        accent: {
          DEFAULT: "#A99BB6",
          hover: "#635770",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
