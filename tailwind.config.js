/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2c2c2c',
        secondary: '#666666', 
        accent: '#f8f6f3',
        warm: '#f5f2ed',
        beige: '#f5f2ed',
        gold: '#d4af37',
        'luxury-gold-dark': '#b8941f',
        luxury: {
          black: '#1a1a1a',
          'black-light': '#2d2d2d',
          white: '#ffffff',
          'white-soft': '#fafafa',
          'white-warm': '#f8f8f8',
          beige: '#f5f2ed',
          'beige-light': '#f9f7f4',
          'beige-warm': '#f2efea',
          gold: '#d4af37',
          'gold-light': '#e8c76a',
          'gold-dark': '#b8941f',
          charcoal: '#4a4a4a',
          'charcoal-light': '#6b6b6b',
          cream: '#faf8f5',
          stone: '#e8e4df',
          'stone-light': '#f0ede8',
          'neutral-light': '#f6f6f6',
          'text-primary': '#2c2c2c',
          'text-secondary': '#666666',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'parallax': 'parallax 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        parallax: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50px)' },
        },
      },
    },
  },
  plugins: [],
}
