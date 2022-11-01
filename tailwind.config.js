module.exports = {
  mode : 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'biz': '0px 2px 10px rgba(0, 0, 0, 0.15)'
      }
    },
    screens: {
      md   : '768px',
      xl   : '1280px',
      '2xl': '1600px'
    },
    fontFamily: {
      roboto: [ 'Roboto', 'sans-serif' ]
    },
    fontSize: {
      10: '10px',
      12: '12px',
      13: '13px',
      14: '14px',
      15: '15px',
      16: '16px',
      17: '17px',
      18: '18px',
      20: '20px',
      22: '22px',
      23: '23px',
      24: '24px',
      26: '26px',
      28: '28px',
      29: '28px',
      30: '30px',
      32: '32px',
      34: '34px',
      36: '36px',
      40: '40px',
      50: '50px',
    },
    colors: {
      primary   : '#0F4471',
      secondary : '#EEF5FF',

      gray: '#F8F8F8',
      bizRed: '#E02025',

      text: {
        main: '#404456',
        dark: '#2C3A4B',
        gray: {
          300: '#A0A3BD',
          500: '#666666',
          700: '#343434',
          900: '#1C1C1C',
          950: '#111111'
        }
      },

      background : '#FFFFFF',
      black      : '#000000',
      white      : '#FFFFFF',
      transparent: 'transparent'
    },
    container: {
      center : true,
      padding: {
        DEFAULT: '10px',
        md     : '30px',
        xl     : '55px',
        '2xl'  : '80px'
      }
    },
    borderRadius: {
      'tl-br': '15px 0',
      'tr-bl': '0 15px',
      '16'  : '16px',
      none: '0px',
    }
  },
  variants: {
  },
  plugins: []
}
