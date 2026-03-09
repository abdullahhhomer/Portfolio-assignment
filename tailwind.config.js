/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00D4FF',
          glow: '#0099CC',
        },
        dark: {
          900: '#020408',
          800: '#060D14',
          700: '#0A1628',
          600: '#0F1F36',
        }
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'gradient-x': 'gradientX 15s ease infinite',
      },
      keyframes: {
        float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' } },
        pulseNeon: { '0%, 100%': { boxShadow: '0 0 20px #00D4FF, 0 0 40px #00D4FF' }, '50%': { boxShadow: '0 0 40px #00D4FF, 0 0 80px #00D4FF, 0 0 120px #00D4FF' } },
        scan: { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(100vh)' } },
        gradientX: { '0%, 100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
      }
    },
  },
  plugins: [],
}
