const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('../colors.js')

module.exports = {
  presets: [require('tailwindcss/defaultConfig')],
  purge: {
    content: [
      'vendor/northeastern-web/**/*.php',
      'vendor/northeastern-web/**/*.md',
      'vendor/northeastern-web/**/*.html',
    ],
    options: {
      safelist: {
        deep: [/body/, /body\s/],
      },
    },
  },
  theme: {
    extend: {
      borderWidth: {
        3: '3px',
      },
      screens: {
        '2xl': '1440px',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
        160: '40rem',
        192: '48rem',
      },
      zIndex: {
        behind: -1,
        max: 1000,
      },
    },
    boxShadow: {
      outline: defaultTheme.boxShadow.outline,
      DEFAULT: '0 0 4px rgba(0, 0, 0, 0.2)',
      none: '0 0 0 rgba(0, 0, 0, 0)',
      sm: '0 0 1px rgba(0, 0, 0, 0.5)',
      lg: '0 0 6px rgba(0, 0, 0, 0.2)',
      xl: '0 3px 20px rgba(0, 0, 0, 0.1)',
      inset: 'inset 0 0 1px rgba(0, 0, 0, 0.5)',
      'inset-lg': 'inset 0 0 1px rgba(0, 0, 0, 0.5), 0 0 6px rgba(0, 0, 0, 0.2)',
      'inset-xl': 'inset 0 0 1px rgba(0, 0, 0, 0.5), 0 3px 20px rgba(0, 0, 0, 0.1)',
    },
    colors: colors,
    fontFamily: {
      sans: ['Lato', ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: ['Consolas', ...defaultTheme.fontFamily.mono],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.25rem', { lineHeight: '1.75rem' }],
      xl: ['1.375rem', { lineHeight: '2rem' }],
      '2xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '3xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.625rem', { lineHeight: '1' }],
      '5xl': ['3.00rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.50rem', { lineHeight: '1' }],
      '8xl': ['5.50rem', { lineHeight: '1' }],
      '9xl': ['6.50rem', { lineHeight: '1' }],
      '10xl': ['7.5rem', { lineHeight: '1' }],
    },
    maxHeight: {
      0: '0',
      ...defaultTheme.maxHeight,
    },
    minHeight: {
      0: '0',
      '10vh': '10vh',
      '20vh': '20vh',
      '30vh': '30vh',
      '40vh': '40vh',
      '50vh': '50vh',
      '60vh': '60vh',
      '70vh': '70vh',
      '80vh': '80vh',
      '90vh': '90vh',
      '100vh': '100vh',
      screen: '100vh',
      full: '100%',
    },
    opacity: {
      0: '0',
      10: '0.1',
      20: '0.2',
      30: '0.3',
      40: '0.4',
      50: '0.5',
      60: '0.6',
      70: '0.7',
      80: '0.8',
      90: '0.9',
      100: '1',
    },
    aspectRatios: ['21x9', '16x9', '4x3', '4x5', '3x2', '8x5', '5x8', '1x1'],
    customForms: (theme) => ({
      default: {
        'input, textarea, multiselect, select, checkbox': {
          borderRadius: 0,
        },
        'input, textarea, multiselect, select': {
          color: theme('colors.gray.600'),
          borderColor: theme('colors.gray.600'),
          display: 'block',
          lineHeight: theme('lineHeight.tight'),
          width: '100%',
          '&::placeholder': {
            color: theme('colors.gray.400'),
          },
          '&:disabled': {
            backgroundColor: theme('colors.gray.200'),
            opacity: theme('opacity.75'),
            cursor: theme('cursor.not-allowed'),
          },
        },
        'checkbox, radio': {
          color: theme('colors.gray.500'),
          borderColor: theme('colors.gray.600'),
          '&:disabled': {
            backgroundColor: theme('colors.gray.200'),
            opacity: theme('opacity.75'),
            cursor: theme('cursor.not-allowed'),
          },
        },
      },
    }),
  },
  variants: {
    accessibility: ['responsive', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundClip: ['responsive'],
    backgroundColor: ['responsive', 'dark', 'group-hover', 'hover', 'focus'],
    backgroundImage: ['responsive'],
    gradientColorStops: ['responsive', 'dark', 'hover', 'focus'],
    backgroundOpacity: ['responsive', 'group-hover', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'dark', 'group-hover', 'hover', 'focus'],
    borderOpacity: ['responsive', 'group-hover', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    boxSizing: ['responsive'],
    container: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    divideColor: ['responsive', 'dark'],
    divideOpacity: ['responsive'],
    divideStyle: ['responsive'],
    divideWidth: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    clear: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontVariantNumeric: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    justifyItems: ['responsive'],
    justifySelf: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'group-hover', 'hover', 'focus', 'disabled'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    overscrollBehavior: ['responsive'],
    padding: ['responsive'],
    placeContent: ['responsive'],
    placeItems: ['responsive'],
    placeSelf: ['responsive'],
    placeholderColor: ['responsive', 'dark', 'focus'],
    placeholderOpacity: ['responsive', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    space: ['responsive'],
    stroke: ['responsive'],
    strokeWidth: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'dark', 'group-hover', 'hover', 'focus'],
    textOpacity: ['responsive', 'group-hover', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    textOverflow: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive', 'focus'],
    gap: ['responsive'],
    gridAutoFlow: ['responsive'],
    gridTemplateColumns: ['responsive'],
    gridAutoColumns: ['responsive'],
    gridColumn: ['responsive'],
    gridColumnStart: ['responsive'],
    gridColumnEnd: ['responsive'],
    gridTemplateRows: ['responsive'],
    gridAutoRows: ['responsive'],
    gridRow: ['responsive'],
    gridRowStart: ['responsive'],
    gridRowEnd: ['responsive'],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    scale: ['responsive', 'hover', 'focus'],
    rotate: ['responsive', 'hover', 'focus'],
    translate: ['responsive', 'hover', 'focus'],
    skew: ['responsive', 'hover', 'focus'],
    transitionProperty: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDuration: ['responsive'],
    transitionDelay: ['responsive'],
    animation: ['responsive'],
  },
  corePlugins: {
    container: false,
  },
  plugins: [require('../plugins/base.js')],
}
