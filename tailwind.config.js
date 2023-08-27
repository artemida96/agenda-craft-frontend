/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/resolveConfig")(
  require("tailwindcss/defaultConfig")
).theme;
const { colors, borderRadius, boxShadow } = defaultTheme;

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    screens: {
      sm: "640px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px", //2xl needs quotes because it starts with a number
    },
    input: {
      appearance: "none",
    },
    extend: {
      colors: {
        currentColor: colors.color,
        gray: {
          100: "#f8f9fa",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#adb5bd",
          600: "#6c757d",
          700: "#495057",
          800: "#343a40",
          900: "",
        },
        yellow: {
          100: "#f9d889",
          200: "#f9c64e",
          300: "#ecbd2c",
          400: "#cc9f13",
          500: "#a57d00",
        },
        red: {
          100: "#dea7a7",
          200: "#e68a8a",
          300: "#d54e4e",
          400: "#cc2f00",
          500: "#ac0404",
        },
        blue: {
          100: "#77aaff",
          200: "#99ccff",
          300: "#bbeeff",
          400: "#5588ff",
          500: "#3366ff",
        },
      },
      backgroundColor: {
        primary: {
          DEFAULT: "#f9c64e",
          300: colors.yellow[300],
          400: colors.yellow[400],
        },
        secondary: "#77aaff",
        info: "#99ccff",
        warning: "#cc2f00",
        danger: "#ac0404",
        light: "#f8f9fa",
        dark: "#212529",
      },
      borderColor: {
        primary: {
          DEFAULT: "#f9c64e",
          300: colors.yellow[300],
          400: colors.yellow[400],
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
    function ({ addBase }) {
      addBase({
        input: {
          borderRadius: "9999px", //it is rounded-full of tawilwind default
          "&:focus": {
            "outline-offset": "0px",
            "outline-color": colors.yellow[400],
          },
        },
        textarea: {
          borderRadius: "9999px", //it is rounded-full of tawilwind default
          "&:focus": {
            "outline-offset": "0px",
            "outline-color": colors.yellow[400],
          },
        },
        "input:text-gray": {
          color: colors.gray,
        },

        button: {
          borderRadius: borderRadius.md, // Use your desired border radius value here
          "box-shadow": boxShadow.md,
        },
        span: {
          "font-size": "1rem",
          "line-height": "1rem",
          color: colors.gray[400],
        },
        p: {
          "font-size": "0.75rem",
          "line-height": "1rem",
          color: colors.gray[400],
        },
        a: {
          color: colors.gray[200],
          "font-weight": 700,
          "font-size": "0.875rem",
          "line-height": "1.25rem",
          display: "inline-block",
          "vertical-align": "baseline",
          "&:hover": {
            color: colors.yellow[300],
          },
        },
        form: {
          borderRadius: borderRadius.lg,
          "box-shadow": boxShadow.md,
        },
        select: {
          borderRadius: borderRadius.md,
        },
      });
    },
  ],
};
