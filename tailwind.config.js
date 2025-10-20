/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",       // all HTML files in your root folder
    "./**/*.html",    // all HTML files in subfolders
    "./*.js",         // if you use Tailwind classes in JS
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}