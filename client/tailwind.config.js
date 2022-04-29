const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["mali", ...defaultTheme.fontFamily.sans],
    },

    extend: {
      display: ["group-hover"],
      opacity: ["group-hover"],
      transform: ["group-hover"],

      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      


    },
  },

  plugins: [require("@tailwindcss/forms")],
};
