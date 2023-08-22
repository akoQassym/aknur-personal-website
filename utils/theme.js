import { extendTheme } from '@chakra-ui/react';
import { foundations } from './foundation';
import { breakpoints } from './foundation/breakpoints';

const config = {
  cssVarPrefix: 'aknur',
};

export const theme = extendTheme({
  config,
  ...foundations,
  ...breakpoints,
  styles: {
    global: {
      'html, body': {
        color: 'whiteAlpha.700',
        bg: 'black.500',
        fontSize: 'md',
      },
      '.js-focus-visible :focus:not([data-focus-visible-added])': {
        outline: 'none',
        boxShadow: 'none',
      },
      a: {
        color: 'whiteAlpha.500',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: '400',
        color: 'white.500',
      },
      sizes: {
        lg: {
          fontSize: 'lg',
        },
        md: {
          fontSize: 'md',
        },
        sm: {
          fontSize: 'sm',
        },
      },
    },
  },
});
