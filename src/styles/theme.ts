import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primaryColor: '#0A1128',
    secondaryColor: '#dc143c',
    white: '#FFFFFF',
    mediumGray: '#DDDDDD',
  },
  fonts: {
    family: {
      default: 'var(--font-open-sans)',
      secondary: 'var(--font-montserrat)',
    },
    sizes: {
      xsmall: '8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  backgroundImage: '/assets/images/backgrounds/blue-bg.svg',
  media: {
    lteMedium: '(max-width: 768px)',
    lteLarge: '(max-width: 1170px)',
  },
  spacings: {
    xsmall: '8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
    maxWidth: '120rem',
  },
} as const;
