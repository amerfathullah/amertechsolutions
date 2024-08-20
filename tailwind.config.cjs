/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: {
      xs: [
        "0.75rem",
        {
          lineHeight: "1rem",
        },
      ],
      sm: [
        "0.875rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "2rem",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "2rem",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
        },
      ],
      "3xl": [
        "2rem",
        {
          lineHeight: "2.5rem",
        },
      ],
      "4xl": [
        "2.5rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "5xl": [
        "3rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "6xl": [
        "3.75rem",
        {
          lineHeight: "1",
        },
      ],
      "7xl": [
        "4.5rem",
        {
          lineHeight: "1.1",
        },
      ],
      "8xl": [
        "6rem",
        {
          lineHeight: "1",
        },
      ],
      "9xl": [
        "8rem",
        {
          lineHeight: "1",
        },
      ],
    },
    extend: {
      backgroundImage: (theme) => ({
        screens: "url('/path-to/image.png')",
      }),

      colors: {
        charcoal: {
          50: "#E6E6E6", // Adjusted for lighter gray
          100: "#CCCCCC", // Adjusted for medium-light gray
          200: "#B3B3B3", // Light gray to complement #CCCCCC
          300: "#999999", // Medium gray
          400: "#666666", // Darker gray
          500: "#333333", // Dark gray
          600: "#1A1A1A", // Very dark gray
          700: "#0D0D0D", // Nearly black
          800: "#000000", // Black
          900: "#000000", // Black for consistency
        },
        tomato: {
          50: "#FFFFFF", // White
          100: "#F5F5F5", // Very light gray
          200: "#E0E0E0", // Light gray
          300: "#CCCCCC", // Medium-light gray
          400: "#B3B3B3", // Slightly darker gray
          500: "#999999", // Gray
          600: "#808080", // Darker gray
          700: "#666666", // Even darker gray
          800: "#4D4D4D", // Very dark gray
          900: "#333333", // Almost black
        },
        negroni: {
          50: "#FAFAFA", // Very light gray
          100: "#F5F5F5", // Light gray
          200: "#F0F0F0", // Slightly darker light gray
          300: "#E0E0E0", // Light gray
          400: "#D0D0D0", // Slightly darker gray
          500: "#BEBEBE", // Medium-light gray
          600: "#A0A0A0", // Medium gray
          700: "#8C8C8C", // Slightly darker gray
          800: "#6B6B6B", // Darker gray
          900: "#4A4A4A", // Dark gray
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
