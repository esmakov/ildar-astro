/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.astro"],
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
