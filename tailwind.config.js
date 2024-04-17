/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src//*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        
        colors: {
          gray: {
            "100": "#fcfcfc",
            "200": "#787878",
            "300": "#252727",
          },
          black1: "#000",
          white: "#fff",
          black: "#2c2b2b",
          cornflowerblue:{
            "100": "#93a9ff",
            "200": "#819cff",
          },
          "gray-50": "#f1f1f1",
        crimson: "#eb1754",
        whitesmoke: "#f1f1f1",
        },
        spacing: {},
        fontFamily: {
          montserrat: "Montserrat",
          "roboto-serif": "'Roboto Serif'",
        },
        borderRadius: {
          xl: "20px",
          "11xs-3": "1.3px",
          "10xs-7": "2.7px",
        },
      },
      fontSize: {
        xs: "0.75rem",
        xl: "1.25rem",
        base: "1rem",
        mini: "0.938rem",
        inherit: "inherit",
      },
    },
    corePlugins: {
      preflight: false,
    },
}

