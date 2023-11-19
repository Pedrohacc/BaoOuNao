/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"
      ],
  theme: {
    extend: {
        screens: {
          'sm' : '640px',
          'md' : '990px',
          'MobileHome' : '250px',
          // Ponto de Interrupção para Tela (Mobile) de 640px, (min-width: 640px)
        },

        colors:{
             primaria: '#309F41',
             secundaria: '#CE181F',
             cinza: '#6C6C6C',
             fundo: '#EAEAEA',
            

        }

     

    },
  },
  plugins: [],
}

