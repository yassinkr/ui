/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Admin_Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-yellow": "var(--main-yellow)",
        "bg-light": "var(--bg-light)",
        "hover-yellow": "var(--hover-yellow)",
        "text-dark": "var(--text-dark)",
        "card-white": "var(--card-white)",
        "card-color": "var(--card-color)",
      },
    },
  },
  plugins: [],
};
