/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://png.pngtree.com/background/20210714/original/pngtree-yellow-simple-memphis-e-commerce-background-design-picture-image_1188994.jpg')",
        zero: "url('https://pin.it/6QVM0Xv')",
      },
      colors: {
        primary: "#222D44",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
