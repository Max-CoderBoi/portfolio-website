import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00d4ff",
        secondary: "#7b2cbf",
        accent: "#ff006e",
        "bg-dark": "#000000",
        "bg-card": "#0a0a0a",
        "text-primary": "#ffffff",
        "text-secondary": "#a0a0a0",
      },
      animation: {
        'gradient-shift': 'gradientShift 3s ease infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float-simple': 'floatSimple 6s ease-in-out infinite',
        'twinkle': 'twinkle 3s infinite ease-in-out',
        'shoot': 'shoot 2s ease-out forwards',
        'scroll-left': 'scrollLeft 35s linear infinite',
        'scroll-right': 'scrollRight 35s linear infinite',
        'nebula-shift': 'nebulaShift 20s ease-in-out infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 212, 255, 0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(0, 212, 255, 0.6)' },
        },
        floatSimple: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.3)' },
        },
        shoot: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { transform: 'translate(-1000px, 500px) rotate(0deg)', opacity: '0' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        nebulaShift: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '0.4' },
          '50%': { transform: 'scale(1.1) rotate(5deg)', opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
};

export default config;