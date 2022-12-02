const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/pug/**/*.pug", "./src/js/**/*.js", "./src/**/*.html"],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        'rose': '#E45171',
        'blue': '#002C6A'
      },
      borderWidth: {

      },
      boxShadow: {

      },
      fontFamily: {
        'opensans': `'Open Sans', sans-serif`
      },
      willChange: {
      },
      transitionProperty: {
      },
      spacing: {
        7:	"1.75rem"	/* 28px */,
        7.5:	"1.875rem"	/* 30px */,
        8:	"2rem"	/* 32px */,
        12.5: "3.125rem",
        13: "3.25rem",
        16:	"4rem", /* 64px */
        18:	"4.5rem", /* 72px */
        20:	"5rem", /* 80px */
        24:	"6rem", /* 96px */
        26:	"6.5rem", /* 104px */
        28:	"7rem", /* 112px */
        30:	"7.5rem", /* 120px */
        32:	"8rem", /* 128px */
        34:	"8.5rem", /* 136px */
        36:	"9rem", /* 144px */
        82: "20.5rem",
        84: "21rem",
        86: "21.5rem",
        88: "22rem",
        90: "22.5rem",
        92: "23rem",
        94: "23.5rem",
      },
      scale: {
        '85': '0.85',
      },
      strokeWidth: {
        '3': '3px',
        '4': '4px',
      }
    },
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
