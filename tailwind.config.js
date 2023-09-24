/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      extend: {
        top: {
          "1%": "1%",
        },
        mt: {
          "1px": "1px",
        },
        z: {
          1: "1",
        },
        w: {
          "1px": "1px",
        },
      },
      colors: {
        primary: "#4092fd",
        secodary: "#342a27",
        info: "#fec926",
        white: "#fefcff;",
        sliver: "#d5d6d3",
        grey: "#514f60",
        brown: "#342a27",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },

      fontFamily: {
        Jost: ["Jost", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [],
};
