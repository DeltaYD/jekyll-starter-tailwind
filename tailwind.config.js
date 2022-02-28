module.exports = {
  purge: [`_site/**/*.html`],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('flowbite/plugin')
  ],
  content: [
    "./node_modules/flowbite/**/*.js"
  ],
};
