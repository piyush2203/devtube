/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  },
  theme: {
    extend: {
      'fontFamily': {
        'poppins' : ["Poppins", 'sans-serif']
      } 
    },
  },
  plugins: [],
}