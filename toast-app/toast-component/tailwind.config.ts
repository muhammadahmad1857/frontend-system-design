import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'pop-in': {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'pop-out': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.5)', opacity: '0' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-out': {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'bounce-in': {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'bounce-out': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
          '100%': { transform: 'scale(0.5)', opacity: '0' },
        },
      },
      animation: {
        'pop-in': 'pop-in 0.5s ease-in-out forwards',
        'pop-out': 'pop-out 0.5s ease-in-out forwards',
        'slide-in': 'slide-in 0.5s ease-in-out forwards',
        'slide-out': 'slide-out 0.5s ease-in-out forwards',
        'fade-in': 'fade-in 0.5s ease-in-out forwards',
        'fade-out': 'fade-out 0.5s ease-in-out forwards',
        'bounce-in': 'bounce-in 0.6s ease-out',
        'bounce-out': 'bounce-out 0.6s ease-in',
      },
    },
  },
  plugins: [],
};
export default config;
