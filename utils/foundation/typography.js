import { clamp } from './clamp';

export const typography = {
  letterSpacings: {
    tight: '-0.005em',
    normal: '0',
    wide: '0.005em',
  },

  lineHeights: {
    none: 1,
    short: 1.2,
    base: 1.5,
  },

  fontWeights: {
    normal: 400,
    bold: 700,
  },

  fonts: {
    heading: `'SF Pro', 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
    body: `'SF Pro', 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  },

  fontSizes: {
    sm: clamp(14, 14),
    md: clamp(18, 18),
    lg: clamp(22, 24, 'xs', 'sm'),
  },
};
