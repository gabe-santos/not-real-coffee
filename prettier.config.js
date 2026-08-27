/** @type {import('prettier').Config} */
module.exports = {
  singleQuote: true,
  arrowParens: 'always',
  trailingComma: 'none',
  printWidth: 100,
  tabWidth: 2,
  plugins: ['prettier-plugin-tailwindcss'],
  // Tailwind v4 keeps the theme in CSS, so the class sorter needs the entry stylesheet.
  tailwindStylesheet: './app/globals.css'
};
