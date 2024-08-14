/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      listStyleType: {
        dash: '"- "',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      // Define new utility classes
      const newUtilities = {
        // Add a utility class named ".list-dash" that applies the custom list style type "dash"
        ".list-dash": {
          "list-style-type": '"- "',
        },
      };
      // Register the new utilities with Tailwind
      addUtilities(newUtilities);
    },
  ],
};
