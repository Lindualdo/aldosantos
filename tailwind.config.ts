import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // slate-900 (Navy/Corporate)
        secondary: '#1e293b', // slate-800
        accent: '#2563eb', // blue-600 (Para CTAs)
        dark: '#020617', // slate-950
        light: '#f8fafc', // slate-50
        'bg-light': '#ffffff', // Clean white
      },
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        heading: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
      }
    },
  },
  plugins: [],
}
export default config
