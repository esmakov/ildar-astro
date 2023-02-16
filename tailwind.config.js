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
        "text-pop": {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.05)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5 ease-in-out",
        "text-pop": "text-pop 0.1s",
      },
    },
  },
};
