/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'my-orange': 'hsl(25, 97%, 53%)',
        'my-lg-grey': 'hsl(217, 12%, 63%)',
        'my-md-grey': 'hsl(216, 12%, 54%)',
        'my-db-blue': 'hsl(213, 19%, 18%)',
        'my-very-db-blue': 'hsl(216, 12%, 8%)',
      },
      fontFamily: {
        'Overpass': ['Overpass'],
      },
      fontWeight: {
        '400': '400',
        '700': '700',
      },
      fontSize: {
        'p': '15px',
        'pl': '12px',
      },
      borderRadius: {
        '4xl': '30px',
      },
      letterSpacing: {
        'widest-2xl': '0.2em',
        'widest-xl': '0.15em',
      },
      screens: {
        'ml': '425px',
      },
      margin: {
        '0.75': '3.5px',
      },
      width: {
        'resp': '310px',
      },
      height: {
        'resp': '310px',
      },
      padding: {
        '0.75': '3.5px',
      }
    },
  },
  plugins: [],
}

