/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray1: "#f1f1f1",
        customGray2: "#e5e7eb",
        customGray4: "#9ca3af",
        customGray5: "#6b7280",
        customGray6: "#4b5563",
        customGray7: "#374151",
        customGray8: "#1f2937",
        customGreen1: "#009444",
      },
      boxShadow: {
        sm: "0 8px 24px rgba(149, 157, 165, 0.2)",
        md: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        dark: "0px 0px 10px rgba(0,0,0,.5)",
      },
      maxWidth: {
        "8xl": "110rem",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
