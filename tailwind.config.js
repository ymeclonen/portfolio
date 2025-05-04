/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: '#4a6baf',
          primaryDark: '#3a539b',
          secondary: '#f39c12',
          darkBg: '#2c3e50',
          lightBg: '#f5f7fa',
          textColor: '#333',
          lightText: '#777',
          borderColor: '#e0e0e0',
          successColor: '#2ecc71',
          dangerColor: '#e74c3c',
        },
        fontFamily: {
          sans: ['Roboto', 'sans-serif'],
          heading: ['Montserrat', 'sans-serif']
        },
        boxShadow: {
          card: '0 4px 6px rgba(0, 0, 0, 0.1)',
          elevated: '0 10px 20px rgba(0, 0, 0, 0.1)',
        },
        transitionProperty: {
          height: 'height',
          spacing: 'margin, padding',
        }
      },
    },
    plugins: [],
  }