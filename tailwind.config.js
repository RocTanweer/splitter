/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        xxl: "1880px",
      },
      colors: {
        cyan: {
          100: "hsl(172, 67%, 45%)",
          200: "hsl(183, 100%, 15%)",
          300: "hsl(186, 14%, 43%)",
          400: "hsl(184, 14%, 56%)",
          500: " hsl(185, 41%, 84%)",
          600: "hsl(189, 41%, 97%)",
        },
        white: "hsl(0, 0%, 100%)",
        danger: "#f43f5e",
      },
      borderRadius: {
        DEFAULT: "1.25rem",
        sm: "0.625rem",
      },
      fontFamily: {
        mono: "Space Mono, monospace",
      },
      fontWeight: {
        bold: "700",
      },
      flexGrow: {
        2: "2",
        3: "3",
      },
    },
    plugins: [],
  },
};
