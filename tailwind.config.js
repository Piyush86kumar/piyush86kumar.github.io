/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0E',
        surface: '#131318',
        'surface-2': '#1B1B22',
        border: {
          DEFAULT: '#26262F',
          strong: '#34343F',
        },
        ink: {
          DEFAULT: '#F2F2F5',
          muted: '#9A9AA6',
          faint: '#5C5C6B',
        },
        accent: {
          DEFAULT: '#8B7CFF',
          dim: '#5B4FCB',
          bright: '#A79BFF',
        },
        signal: '#4FE3C9',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
}
