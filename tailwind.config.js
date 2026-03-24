/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md,html,js}"],
  theme: {
    extend: {
      colors: {
        dark: "#0d0d1a",
        surface: "#141428",
        surface2: "#1c1c38",
        border: "#252550",
        gold: "#c4953a",
        "gold-bright": "#f0c060",
        violet: "#6b5dd3",
        text: "#ddd8c4",
        muted: "#7878a0",
      },
      fontFamily: {
        display: ["Cinzel", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse at top, #1a1040 0%, #0d0d1a 60%)",
        "gold-gradient": "linear-gradient(135deg, #c4953a, #f0c060)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease forwards",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
