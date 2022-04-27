const defaultTheme = require('tailwindcss/defaultTheme'); 

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      fontFamily: {
        'sans': ['mali', ...defaultTheme.fontFamily.sans]
      },
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }