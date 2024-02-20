module.exports = {
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'gray-bg': '#f3f3f3',
        secondary: 'var(--secondary-color)',
        'main-color': 'var(--main-color)',
      }),
      colors: {
        main: 'var(--main-color)',
        'real-gray': '#bbb',
        secondary: 'var(--secondary-color)',
      },
      borderWidth: {
        5: '5px',
        6: '6px',
        10: '10px',
      },
      borderRadius: {
        big: '25px',
      },
      borderColor: {
        accent: 'var(--accent-color)',
        'secondary-color': '#349194',
      },
      scale: {
        '80': '.8',
        flip: '-1',
      },
      width: {
        logo: '9.5rem',
        logob: '12rem',
      },
      lineHeight: {
        just: '1.2',
      },
      fontSize: {
        '25xl': '1.4rem',
        text: '1.05rem',
      },
    },
  },
  variants: {},
  plugins: [],
}
