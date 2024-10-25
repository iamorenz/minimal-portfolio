/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure it scans React components
    "./index.html",         // Include this if you use public HTML
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
      },
    },
  },
  plugins: [],
};
