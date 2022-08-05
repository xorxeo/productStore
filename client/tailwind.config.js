const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ['./public/index.html',
    "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      display: ["group-hover"],
      opacity: ["group-hover"],
      transform: ["group-hover"],

      backgroundImage: {
        "search-button": "url('../public/img/search.png')",
      },

      fontFamily: {
        supernettCnLight: ["supernettCnLight"],
        supernettCnBold: ["supernettCnBold"],
        mali: ["mali"],
      },

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },

        innerRotate: {
          from: { transform: "rotate(calc(-1turn * var(--direction)))" },
          to: { transform: "none" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        innerRotate: "innerRotate .6s linear infinite;",
      },
      width: {
        inputWidth: "3.5 rem",
      },
    },
  },

  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    // require("postcss-animation"),
    require("@tailwindcss/forms"),
  ],
};
