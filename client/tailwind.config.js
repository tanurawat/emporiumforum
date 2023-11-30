/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://png.pngtree.com/background/20210714/original/pngtree-yellow-simple-memphis-e-commerce-background-design-picture-image_1188994.jpg')",
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
