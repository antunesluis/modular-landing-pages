import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryColor: string;
      secondaryColor: string;
      white: string;
      mediumGray: string;
    };
    fonts: {
      family: {
        default: string;
        secondary: string;
      };
      sizes: {
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        huge: string;
        xhuge: string;
      };
    };
    backgroundImage: string;
    media: {
      lteMedium: string;
      lteLarge: string;
    };
    spacings: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      huge: string;
      xhuge: string;
      maxWidth: string;
    };
  }
}
