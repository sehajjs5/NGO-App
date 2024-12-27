/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'primary': ["EB Garamond"],
      },
      animation: {
        scroll: 'scroll 15s linear infinite',
        zoomIn: 'zoomIn 0.5s ease-out forwards',
        verticalScroll: 'vertical-scroll 10s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // Scroll by half the duplicated width
        },
        zoomIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
      },
      verticalScroll : {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-50%)' },
                },
      },
  },
  plugins: [],
}
}

