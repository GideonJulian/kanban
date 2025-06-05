/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-600": "#1366D9",
        "primary-500": "#1570EF",
        "error-50": "#FEECEB",
        "error-700": "#AA3028",
        "error-400": "#F36960",
        "yellow-600": "#E19133",
        "yellow-500": "#DBA362",
        "purple-600": "#845EBC",
        "success-600": "#10A760",
      },
    },
  },
  plugins: [],
};
