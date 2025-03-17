/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-black': 'rgba(5, 20, 31, 1)', 
        'kia-polar-white': '#FFF',
        'caption': '#697279',
      },
      backgroundImage: {
        'nav-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.00) 100%), rgba(255, 255, 255, 0.05)',
      },
      // Backdrop filter personalizado
      backdropBlur: {
        '12': 'blur(12px)', // Personaliza el valor de blur
      },
      fontSize: {
        'h1': '3rem', // 48px
        'h2': '2.5rem', // 40px
        'h3': '2rem', // 32px
        'h4': '1.75rem', // 28px
        'h5': '1.5rem', // 24px
        'h6': '1.25rem', // 20px
      },
    },
  },
  plugins: [],
  corePlugins: {
    boxSizing: true,
  },
}

