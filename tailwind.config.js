/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 1s linear 1',
      },
      spacing: {
        '64': '16rem', // 16rem = 64px
        '66': '16.5rem', // 16.5rem
        '68': '17rem', // 17rem
        '70': '17.5rem', // 17.5rem
        '72': '18rem', // 18rem
        '74': '18.5rem', // 18.5rem
        '76': '19rem', // 19rem
        '78': '19.5rem', // 19.5rem
        '80': '20rem', // 20rem
        '82': '20.5rem', // 20.5rem
        '84': '21rem', // 21rem
        '86': '21.5rem', // 21.5rem
        '88': '22rem', // 22rem
        '90': '22.5rem', // 22.5rem
        '92': '23rem', // 23rem
        '94': '23.5rem', // 23.5rem
        '96': '24rem', // 24rem = 96px
        '100': '25rem', // 25rem
        '104': '26rem', // 26rem
        '108': '27rem', // 27rem
        '112': '28rem', // 28rem
        '116': '29rem', // 29rem
        '120': '30rem', // 30rem
        '124': '31rem', // 31rem
        '38': '9.5rem',
        '128': '32rem', // 32rem = 128px
        '136': '34rem', // 34rem
        '144': '36rem', // 36rem
        '152': '38rem', // 38rem
        '160': '40rem', // 40rem
        '168': '42rem', // 42rem
        '176': '44rem', // 44rem
        '184': '46rem', // 46rem
        '192': '48rem', // 48rem
        '200': '50rem', // 50rem
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '100': '100',
      },
     colors:{
      primary: 'rgba(var(--primary))',
      secondary: 'rgba(var(--secondary))',
      logo: 'rgba(var(--logo))',
     },
     
     transitionTimingFunction:{
      'springy': "cubic-bezier(.33,1,.68,1)"
     }
    },

  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
